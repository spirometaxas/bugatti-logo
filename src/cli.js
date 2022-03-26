#!/usr/bin/env node
const bugatti = require('./index.js');

if (process.argv.length > 2) {
    const params = process.argv.slice(2);
    if (params[0] === '--outline') {
        console.log(bugatti.logo_outline);
    } else if (params[0] === '--help') {
        console.log('\nUsage\n' + '  $ npx bugatti-logo\n' + '  $ npx bugatti-logo --outline\n');
    } else {
        console.log(bugatti.logo);
    }
} else {
    console.log(bugatti.logo);
}