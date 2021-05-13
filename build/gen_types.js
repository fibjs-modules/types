const path = require('path');
const zip = require('zip');

const { mkdirp, getHttpClient }  = require('./utils');

function downloadFibjsZip (fibjsCommitsh = 'dev') {
    const url = `https://github.com/fibjs/fibjs/archive/${fibjsCommitsh}.zip`

    const client = getHttpClient();
    console.warn(`[downloadFibjsZip] start download git archive zip from ${url}`)
    const zipResp = client.get(url);
    console.notice('[downloadFibjsZip] downloaded git archive zip!')

    const zipFile = zip.open(zipResp.readAll())
    // const archiveRoot = `fibjs-${fibjsCommitsh}`;
    const archiveRoot = zipFile.namelist()[0].split('/')[0];
    console.notice(`[downloadFibjsZip] archiveRoot is ${archiveRoot}!`)

    const targetDir = path.resolve(__dirname, `../tmp/${fibjsCommitsh}`);
    mkdirp(targetDir);

    let fibjsVersion

    const idlNames = zipFile
        .infolist()
        .filter(info => {
            const filename = info.filename;
            if (filename.toLowerCase().indexOf(`version.h`) > -1) {
                const matched = zipFile.read(filename).toString().match(/fibjs_version\[\] = "(.*)"/)
                fibjsVersion = matched[1];
                return false;
            }

            return (
                filename.toLowerCase().indexOf(`${archiveRoot}/idl`) > -1
                || filename.toLowerCase().indexOf(`${archiveRoot}/tools`) > -1
            )
        })
        .map(info => {
            const relpath = info.filename.replace(new RegExp(`^${archiveRoot}\/`), '');
            const targetPath = path.resolve(targetDir, relpath)
            mkdirp(path.dirname(targetPath));

            const isDir = Number(info.file_size) == 0;
            // console.notice(`[downloadFibjsZip] we would extract zip member ${info.filename}`);

            if (isDir) {
                mkdirp(targetDir)
            } else if (info.filename) {
                zipFile.extract(info.filename, targetPath);
            }

            return info.filename
        })
    
    console.log('[downloadFibjsZip] we downloaed idl files', idlNames);
    console.notice(`[downloadFibjsZip] targetDir is ${targetDir}`);
    console.notice(`[downloadFibjsZip] fibjsVersion is ${fibjsVersion}`);

    return {
        targetDir,
        fibjsVersion
    };
}

// downloadFibjsZip('dev');

const gen_types = module.exports = function gen_types (fibjs_committish, package_target) {
    const { targetDir: fibjsSrc, fibjsVersion } = downloadFibjsZip(fibjs_committish);

    const parser = require(path.join(fibjsSrc, './tools/util/parser'));
    const gen_dts = require('./gen_dts');

    const idlFolder = path.join(fibjsSrc, `./idl/zh-cn`);

    const defs = parser(idlFolder);

    // const DTS_DIST_DIR = path.resolve(__dirname, `../packages/${fibjsVersion}/dts`)
    const DTS_DIST_DIR = path.resolve(package_target, `./dts`)
    mkdirp(DTS_DIST_DIR);

    gen_dts(defs, { DTS_DIST_DIR });

    console.notice(`[gen_types] dts generated from fibjs ${fibjsVersion} on ${package_target}`);
}

// gen_types();