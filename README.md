# MT Wordpress Aqueduct Child Theme

[![Build Status](https://travis-ci.org/MirosTruckstop/aqueduct-mt.svg?branch=master)](https://travis-ci.org/MirosTruckstop/aqueduct-mt)

A Wordpress [Aqueduct](https://wordpress.org/themes/aqueduct/) child theme.

### Development

Requirements
* npm is installed

Steps
1. Install the dependencies: `npm install`
2. Watch changes: `./node_modules/gulp/bin/gulp.js`

Sync the required files
```sh
rsync -r --relative README.md *.php *.css dist/ <host>:<wordpress-dir>/wp-content/themes/aqueduct-mt/
```
