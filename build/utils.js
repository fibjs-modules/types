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

exports.mkdirp = function (inputp) {
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

exports.mkVersionPkg = function (fibjs_version) {
    const pkgsrc = path.resolve(__dirname, './tmpl/package')
    const mono_version = [ semver.major(fibjs_version), semver.minor(fibjs_version), 'x' ].join('.')

    const target = getVersionedPkgLocation(mono_version)

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

    renderEjs(target, './package.json.ejs', {version: fibjs_version})
    renderEjs(target, './README.md.ejs', {version: fibjs_version})

    return target
}

function getVersionedPkgLocation (fibjs_version) {
    return path.resolve(__dirname, `../packages/${fibjs_version}`)
}

function renderEjs (ejsFilebase, ejsSrcFilename, ctx) {
    const src = path.resolve(ejsFilebase, ejsSrcFilename)
    const compiler = ejs.compile(fs.readTextFile(src));
    const pkgJson = compiler({
        version: ctx.version
    });

    const ejsTargetFilename = ejsSrcFilename.replace('.ejs', '')
    const target = path.resolve(ejsFilebase, ejsTargetFilename)
    fs.writeTextFile(target, pkgJson);
    fs.unlink(src)
}