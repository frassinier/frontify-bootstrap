require('dotenv').config();

var frontifyApi = require('@frontify/frontify-api');

var config = {
	access_token: process.env.FRONTIFY_API_KEY,
  project: process.env.FRONTIFY_PROJECT_ID,
	// dryRun: true,
};

var blob = [
	'test/fixtures/patterns/**/*.json'
];

var promise = frontifyApi.syncPatterns(config, blob)

.then(function(data) {
  console.log(data);
})

.catch(function(error) {
  console.log(error);
});
