const fs = require('fs');
const path = require('path');
const zip = require('zip');

const { mkdirp, getHttpClient }  = require('./utils');

function getCommittishLocal (fibjsCommitsh = 'dev') {
    const url = `https://github.com/fibjs/fibjs/archive/${fibjsCommitsh}.zip`;
    const versionFileUrl = `https://raw.githubusercontent.com/fibjs/fibjs/${fibjsCommitsh}/fibjs/include/version.h`
    const targetDir = path.resolve(__dirname, `../tmp/${fibjsCommitsh}`);
    const localZipFile = path.resolve(__dirname, `../tmp/fibjs-${fibjsCommitsh.replace(/^v/, '')}.zip`);

    return {
        url,
        targetDir,
        versionFileUrl,
        localZipFile,
    }
}

function getFibjsVersion (str) {
    return str.match(/fibjs_version\[\] = "(.*)"/)[1];
}

function downloadFibjsZip (fibjsCommitsh = 'dev') {
    const { url, versionFileUrl, targetDir, localZipFile } = getCommittishLocal(fibjsCommitsh);

    const client = getHttpClient();

    let fibjsVersion
    if (!fs.exists(targetDir)) {
        let zipBuf;
        if (fs.exists(localZipFile)) {
            console.notice(`[downloadFibjsZip] [commit:${fibjsCommitsh}] read archive file from ${localZipFile}!`)
            zipBuf = fs.readFile(localZipFile);
        } else {
            console.warn(`[downloadFibjsZip] [commit:${fibjsCommitsh}] start download git archive zip from ${url}`)
            if (client.proxyAgent) {
                console.notice(`[downloadFibjsZip] [commit:${fibjsCommitsh}] http client use proxy ${client.proxyAgent}`)
            }
            console.notice(`[downloadFibjsZip] [commit:${fibjsCommitsh}] downloaded git archive zip!`)
            fs.write(localZipFile, client.get(url).readAll());
        }

        const zipFile = zip.open(zipBuf)
        // const archiveRoot = `fibjs-${fibjsCommitsh}`;
        const archiveRoot = zipFile.namelist()[0].split('/')[0];
        console.notice(`[downloadFibjsZip] archiveRoot is ${archiveRoot}!`)

        const idlNames = zipFile
            .infolist()
            .filter(info => {
                const filename = info.filename;
                if (filename.toLowerCase().indexOf(`version.h`) > -1) {
                    fibjsVersion = getFibjsVersion(zipFile.read(filename).toString())
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
    } else {
        const content = client.get(versionFileUrl).readAll().toString();
        console.notice(`[downloadFibjsZip] content of ${versionFileUrl} downloaded!`);
        fibjsVersion = getFibjsVersion(content);
        console.notice(`[downloadFibjsZip] fibjsVersion is ${fibjsVersion}`);
    }

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