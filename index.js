'use strict';

const path = require('path');
const request = require('request');

var deps = [];
var blacklist = {};

function filter(cwd, callback) {
  cwd = cwd || process.cwd();

  request('https://raw.githubusercontent.com/gulpjs/plugins/master/src/blackList.json', function(err, res, body) {
    if (err) {
      callback(err);
    }

    blacklist = JSON.parse(body);

    // load local deps from package.json
    deps = deps.concat(Object.keys(require(path.resolve(cwd, 'package.json')).devDependencies || {}));

    var filtered = deps.reduce(function(memo, dep) {
      if (Object.keys(blacklist).indexOf(dep) > 0) {
        memo[dep] = blacklist[dep];
      }
      return memo;
    }, {});

    callback(null, filtered);
  });
}

module.exports = exports.filter = filter;

