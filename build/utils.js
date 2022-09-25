const fs = require('fs')
const path = require('path')
const http = require('http')
const util = require('util');
const co = require('coroutine');
const assert = require('assert');
const readdir = require('@fibjs/fs-readdir-recursive');

const ssl = require('ssl');
ssl.loadRootCerts();

const semver = require('semver')

const ejs = require('ejs')

exports.getHttpClient = function () {
    const client = new http.Client();

    let proxy;
    if (proxy = (process.env.https_proxy || process.env.http_proxy)) {
        client.proxyAgent = proxy;
    }

    return client;
}

const mkdirp = exports.mkdirp = function (inputp) {
    try {
        if (!fs.exists(inputp))
            fs.mkdir(inputp);
    } catch (e) {
        mkdirp(path.dirname(inputp));
        try {
            fs.mkdir(inputp);
        } catch (e) {}
    }
}

exports.mkVersionPkg = function (fibjs_version, is_latest = false) {
    const pkgsrc = path.resolve(__dirname, './tmpl/package')
    const sver = {
        major: semver.major(fibjs_version),
        minor: semver.minor(fibjs_version),
        patch: semver.patch(fibjs_version),
    }
    const pkgdirName = is_latest ? 'latest' : [ sver.major, sver.minor, 'x' ].join('.')

    const target = getVersionedPkgLocation(pkgdirName)

    try {
        copy(pkgsrc, target)
    } catch (e) {
        console.warn(`[mkVersionPkg] errored on copy ${pkgsrc} to ${target}`)
        console.error(e)
    }

    ;[
        '.gitignore',
        '.npmignore',
    ].forEach(filename => 
        fs.copy(
            path.resolve(pkgsrc, filename),
            path.resolve(target, filename)
        )
    )

    const verisionInPkgName = [sver.major, sver.minor, 0].join('-');
    const pkgName = is_latest ?  '@fibjs/types' : `@fibjs/types-${verisionInPkgName}`;

    const renderCtx = {
        version: fibjs_version,
        pkgName: pkgName,
        pkgdirName: pkgdirName,
    };
    renderEjs(target, './package.json.ejs', renderCtx)
    renderEjs(target, './README.md.ejs', renderCtx)

    return target
}

function getVersionedPkgLocation (fibjs_version) {
    return path.resolve(__dirname, `../packages/${fibjs_version}`)
}

function renderEjs (ejsFilebase, ejsSrcFilename, ctx) {
    const src = path.resolve(ejsFilebase, ejsSrcFilename)
    const compiler = ejs.compile(fs.readTextFile(src));
    const pkgJson = compiler({
        version: ctx.version,
        pkgName: ctx.pkgName,
        pkgdirName: ctx.pkgdirName,
    });

    const ejsTargetFilename = ejsSrcFilename.replace('.ejs', '')
    const target = path.resolve(ejsFilebase, ejsTargetFilename)
    fs.writeTextFile(target, pkgJson);
    fs.unlink(src)
}

const limit = 20;
const copy = exports.copy = (src, target, processor) => {
  assert(fs.exists(src), 'the source path must exists!');
  const dirs = readdir(src).map(dir => {
    return {
      src: path.join(src, dir),
      target: path.join(target, dir),
    };
  });

  if (processor) {
    assert(util.isFunction(processor), 'the processor must be Function');
    co.parallel(dirs, dir => {
      let data = fs.readFile(dir.src);
      let res = processor(data, dir);
      if (res === false) {
        return;
      } else if (res !== true) {
        data = res;
      }
      const dirname = path.dirname(dir.target);
      if (!fs.exists(dirname)) {
        mkdirp(dirname);
      }
      fs.writeFile(dir.target, data);
    }, limit);
  } else {
    co.parallel(dirs, dir => {
      const dirname = path.dirname(dir.target);
      if (!fs.exists(dirname)) {
        mkdirp(dirname);
      }
      fs.copy(dir.src, dir.target);
    }, limit);
  }
};
