const fs = require('fs')
const path = require('path')
const http = require('http')

const ssl = require('ssl');
ssl.loadRootCerts();

const semver = require('semver')

const ejs = require('ejs')

const copy = require('@fibjs/copy')

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

    copy(pkgsrc, target)

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