# aleph1-aurelia-slide-open - [Demo](https://avrahamcool.github.io/aleph1-aurelia-slide-open/)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Issues](https://img.shields.io/github/issues/avrahamcool/aleph1-aurelia-slide-open.svg?style=flat)](https://github.com/avrahamcool/aleph1-aurelia-slide-open/issues)
[![NPMVersion](https://img.shields.io/npm/v/aleph1-aurelia-slide-open.svg?style=flat)](https://www.npmjs.com/package/aleph1-aurelia-slide-open)
[![NPMDownloads](https://img.shields.io/npm/dt/aleph1-aurelia-slide-open.svg?style=flat)](https://www.npmjs.com/package/aleph1-aurelia-slide-open) 
[![NPMSize](https://img.shields.io/bundlephobia/min/aleph1-aurelia-slide-open.svg?style=flat)](https://www.npmjs.com/package/aleph1-aurelia-slide-open)

[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/avrahamcool/aleph1-aurelia-slide-open.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/avrahamcool/aleph1-aurelia-slide-open/context:javascript)
[![Total alerts](https://img.shields.io/lgtm/alerts/g/avrahamcool/aleph1-aurelia-slide-open.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/avrahamcool/aleph1-aurelia-slide-open/alerts/)
[![DeepScan grade](https://deepscan.io/api/teams/5394/projects/13323/branches/220084/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=5394&pid=13323&bid=220084)

aleph1-aurelia-slide-open is an aurelia plugin that allow you to show/hide elements in the page using sliding animation.
without setting a fixed height.

this is done by transitioning over `max-height` from the real element height to 0 and back.
default transition is set to `max-height 0.25s linear`, but can be change via the complex binding.

## using the Plugin
```shell
yarn add aleph1-aurelia-slide-open
```
or
```shell
npm install aleph1-aurelia-slide-open
```

initialize the plugin in your `main.js` or `main.ts`.

```diff
  import { PLATFORM } from "aurelia-pal";

  aurelia.use
    .standardConfiguration()
    .developmentLogging()
+    .plugin(PLATFORM.moduleName("aleph1-aurelia-slide-open"));
```

now in your view just use the custom attribute `slide-open`:
```html
<div slide-open.bind="shouldBeOpen">Simple usage</div>
or
<div slide-open="opened.bind: shouldBeOpen; transition.bind: 'max-height 2s ease-in-out'">Complex usage</div>
```

## About the Plugin
This project is bootstrapped by [aurelia-cli](https://github.com/aurelia/cli).

This Aurelia plugin project has a built-in dev app (with CLI built-in bundler and RequireJS) to simplify development.

1. The local `src/` folder, is the source code for the plugin.
2. The local `dev-app/` folder, is the code for the dev app, just like a normal app bootstrapped by aurelia-cli.
3. You can use normal `au run` and `au test` in development just like developing an app.
4. You can use aurelia-testing to test your plugin, just like developing an app.
5. To ensure compatibility to other apps, always use `PLATFORM.moduleName()` wrapper in files inside `src/`. You don't need to use the wrapper in `dev-app/` folder as CLI built-in bundler supports module name without the wrapper.

Note aurelia-cli doesn't provide a plugin skeleton with Webpack setup (not yet), but this plugin can be consumed by any app using Webpack, or CLI built-in bundler, or jspm.

## Build Plugin

Run `au build-plugin`. This will transpile all files from `src/` folder to `dist/native-modules/` and `dist/commonjs/`.

For example, `src/index.ts` will become `dist/native-modules/index.js` and `dist/commonjs/index.js`.

## Run dev app

Run `au run`, then open `http://localhost:9000`

To open browser automatically, do `au run --open`.

To change dev server port, do `au run --port 8888`.

To change dev server host, do `au run --host 127.0.0.1`


**PS:** You could mix all the flags as well, `au run --host 127.0.0.1 --port 7070 --open`

