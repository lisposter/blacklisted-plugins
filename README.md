# blacklisted-plugins
[![NPM version](https://img.shields.io/npm/v/blacklisted-plugins.svg?style=flat)](https://www.npmjs.org/package/blacklisted-plugins)

filter plugins by official blacklist

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
