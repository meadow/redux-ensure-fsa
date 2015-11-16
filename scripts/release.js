'use strict';

const execSync = require('child_process').execSync;
const fs = require('fs');
const packageJson = require('../package.json');

const nextVersion = process.argv[process.argv.length - 1];
const nextRef = 'v' + nextVersion;
const semverRegex = /[0-9]+\.[0-9]+\.[0-9](-.+)?/ig;

function validateSemver (version) {
  if (!semverRegex.test(version)) {
    console.error('Version ' + version + ' is not valid! It must be a valid semver string');
    process.exit(1);
  }
}

validateSemver(nextVersion);

console.log('Current Version: ' + packageJson.version);
console.log('Next Version: ' + nextVersion);

packageJson.version = nextVersion;

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2), 'utf8');

execSync('npm run build');

execSync(`git commit -am 'Release Version: ${nextRef}'`);
execSync(`git tag ${nextRef}`);
execSync(`git push origin master`);
execSync(`git push origin ${nextRef}`);

execSync('npm publish');
