# blacklisted-plugins
[![NPM version](https://img.shields.io/npm/v/blacklisted-plugins.svg?style=flat)](https://www.npmjs.org/package/blacklisted-plugins)

Find out which plugins are in the [gulp's blacklist](https://github.com/gulpjs/plugins/blob/master/src/blackList.json).

## What is blacklist?
Here is the answer quoted from the [gulp's README.md](https://github.com/gulpjs/plugins#blacklisting)

>To maintain quality in the plugin ecosystem, we sometimes "blacklist" plugins. Being blacklisted means we won't offer support for issues concerning the module and we will not recommend that people use it. You are free to publish anything you want on NPM, but our official plugin list is subject to filtering.

>A plugin may be blacklisted for the following reasons:

>Does not fit within the gulp paradigm
>Flagrant duplicate of an existing plugin
>Does not follow the plugin guidelines

------

## Installation

```bash
$ npm install blacklisted-plugins
```
or if you want to use it as a command, install it as global

```bash
$ npm install blacklisted-plugins -g
```

## Usage

as a module:

```js
const blp = require('blacklisted-plugins');

blp('/path/to/project', function(err, result) {
  console.log(result);
  // ==> e.g { 'gulp-rimraf': 'use the `del` module' }
});
```

as CLI:

```bash
$ blp /path/to/proj
```

## License

MIT © [Leigh Zhu](#)
