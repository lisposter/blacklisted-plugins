# blacklisted-plugins
[![NPM version](https://img.shields.io/npm/v/blacklisted-plugins.svg?style=flat)](https://www.npmjs.org/package/blacklisted-plugins)

filter plugins by official blacklist

------

## Installation

```bash
$ npm install blacklisted-plugins
```

## Usage

```js
const blp = require('blacklisted-plugins');

blp('/path/to/project', function(err, result) {
  console.log(result);
  // ==> e.g { 'gulp-rimraf': 'use the `del` module' }
});
```

## License

MIT © [Leigh Zhu](#)
