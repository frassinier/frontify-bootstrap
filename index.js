const path = require('path');
const dotenv = require('dotenv');
const frontifyApi = require('@frontify/frontify-api');

dotenv.config({
    silent: true
});

/**
 * Frontify options
 * @type {{access_token: string, project: number}}
 */
const options = {
    access_token: process.env.FRONTIFY_API_KEY,
    project: process.env.FRONTIFY_PROJECT_ID,
    // dryRun: false,
    // baseUrl: 'https://app.frontify.com',
    cwd: path.resolve(__dirname),
    // target: '',
};

/**
 * Frontify glob pattern
 * @type {[*]}
 */
const globPattern = [
    './test/fixtures/patterns/**/*.json'
];

frontifyApi
    .syncPatterns(options, globPattern)

    .then(function (data) {
        console.log(data);
    })

    .catch(function (error) {
        console.log(error);
    });
