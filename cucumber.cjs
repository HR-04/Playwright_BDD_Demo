const options = [
    '--require-module ts-node/register',
    '--require ./steps/*.steps.ts',
    '--format progress',
    '--format json:./Reports/cucumber_report.json',
].join(' ');

const run_features = [
    './features/',
    options,
].join(' ');

module.exports = {
    test_runner: run_features
};
