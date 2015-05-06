#! /usr/bin/env node

'use strict';

var colors = require('colors');
var blp = require('../index.js');

var proj = process.argv[2] || process.cwd();

blp(proj, function(err, result) {
  if (err) {
    console.error(colors.red(err.toString()));
  }

  Object.keys(result).forEach(function(dep) {
    console.log(colors.cyan(dep) + colors.grey(' ==> ') + colors.yellow(result[dep]));
  });
});


