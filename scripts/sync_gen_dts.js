const fs = require('fs');
const path = require('path');

const { getHttpClient } = require('../build/utils');

const LATEST_REMOTE_GEN_DTS_SCRIPT = 'https://raw.githubusercontent.com/richardo2016/fibjs/dev/tools/util/gen_dts.js';
const GEN_DTS_SCRIPT = path.resolve(__dirname, '../build/gen_dts.js')

const client = getHttpClient();

const resp = client.get(LATEST_REMOTE_GEN_DTS_SCRIPT, {
    headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9'
    }
});
const remoteContent = resp.body.readAll() + '';

const fileContent = fs.exists(GEN_DTS_SCRIPT) ? fs.readTextFile(GEN_DTS_SCRIPT) : ''; 

if (remoteContent !== fileContent) {
    fs.writeTextFile(GEN_DTS_SCRIPT, remoteContent);
}