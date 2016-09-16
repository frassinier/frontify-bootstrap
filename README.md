# frontify-bootstrap

Sync Bootstrap patterns to Frontify

[![Build Status](https://travis-ci.org/frassinier/frontify-bootstrap.svg?branch=master)](https://travis-ci.org/frassinier/frontify-bootstrap)

## Documentation

Read the [Frontify API](https://docs.frontify.com/d/2MwJ9kHF57Sc/api) documentation

## Installation

* `git clone https://github.com/frassinier/frontify-bootstrap.git`
* `cd frontify-bootstrap`
* `npm insall`

## Configuration

Create a _.env_ file at root and fill in with theses variables:

* `FRONTIFY_API_KEY='abc123'`
* `FRONTIFY_PROJECT_ID=12345`

## Synchronization

Synchronize your patterns with:

* `node index.js`

### As NPM dependency

* Install 'npm i -D dotenv frassinier/frontify-bootstrap'
* Create `.env` file as [above](#configuration)
* Add a NPM scripts entry in your _package.json_ 
```
{
    "name": "your_project_name",
    "version": "1.0.0",
    "scripts": {
      "frontify:bootstrap": "node ./node_modules/frontify-bootstrap/index.js"
    },
    "devDependencies": {
        "dotenv": "^2.0.0",
        "frontify-bootstrap": "github:frassinier/frontify-bootstrap",
    },
}
```
