const dotenv = require('dotenv');
const frontifyApi = require('@frontify/frontify-api');

dotenv.config();

const config = {
    access_token: process.env.FRONTIFY_API_KEY,
    project: process.env.FRONTIFY_PROJECT_ID,
    // dryRun: false,
    // baseUrl: 'https://app.frontify.com',
};

const blob = [
    'test/fixtures/patterns/**/*.json'
];

frontifyApi
    .syncPatterns(config, blob)

    .then(function (data) {
        console.log(data);
    })

    .catch(function (error) {
        console.log(error);
    });
