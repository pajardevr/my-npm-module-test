# @pajardevr/my-npm-module-test

[![npm (scoped)](https://img.shields.io/npm/v/@pajardevr/my-npm-module-test.svg)](https://www.npmjs.com/package/@pajardevr/my-npm-module-test)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@pajardevr/my-npm-module-test.svg)](https://www.npmjs.com/package/@pajardevr/my-npm-module-test)

Testing my NPM module.

## Install

```
$ npm install @pajardevr/my-npm-module-test
```

## Usage

```js
const npmTest = require("@pajardevr/my-npm-module-test");

npmTest("So much space!");
//=> "Somuchspace!"

npmTest(1337);
//=> Uncaught TypeError: npmTest wants a string!
//    at npmTest (<anonymous>:2:41)
//    at <anonymous>:1:1
```
