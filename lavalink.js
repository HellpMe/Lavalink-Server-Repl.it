//Code originally written by Allvaa
const { createWriteStream } = require('fs')
const { default: { stream } } = require("got");
const fetch = require('node-fetch')
const { execSync } = require('child_process')

setInterval(() => fetch('URL HERE'), 5 * 60 * 1000);

const url = 'http://cdn.glitch.com/96fd362d-e92b-4d84-b58e-da33e2956d72%2FLavalink.jar?v=1627883381993'

const start = () => {
    const download = stream(url).pipe(createWriteStream('Lavalink.jar'));
    download.on("finish", () => {
        execSync("java -jar Lavalink.jar");
    });
};

start();
