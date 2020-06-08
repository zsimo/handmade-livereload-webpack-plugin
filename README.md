# handmade-livereload-webpack-plugin
A Webpack plugin that allows pages to be automatically reloaded without the DevServer.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://api.travis-ci.com/zsimo/handmade-livereload-webpack-plugin.svg)](https://travis-ci.com/zsimo/handmade-livereload-webpack-plugin)
[![env](https://img.shields.io/badge/env-development-blue)](https://img.shields.io/badge/env-development-blue)



This is a very simple [Webpack](https://webpack.js.org/) plugin that allows to reload web pages while developing,
without the need to set up the [DevServer](https://webpack.js.org/configuration/dev-server/).
This reduces configuration differences between `production` and `development`.
It uses [socket.io](https://socket.io/).
It's a `development` only module.


## How it works
This module is composed by 2 little components:
- the webpack plugin itself, that every time the compiler `done` event is emitted,
 emits a `socket.io` event called `reload`
- a script, to be injected in the involved web pages, that is listening for the socket.io `reload`
event and reacts reloading the page by doing `window.location.reload()`


## Install
```bash
yarn add handmade-livereload-webpack-plugin -D
```

## Usage
In the webpack configuration file, the  must be first initialized with
the 2 mandatory keys `port` and `host`
```js
// webpack.config.js file
var HandmadeLiveReload = require("handmade-livereload-webpack-plugin")({
    port: 1234,
    host: "localhost:3000"
});
```

The `handmade-livereload` instance in an object with 2 keys:
1. the `plugin` key is the plugin itself that can be added to the webpack plugins (if not production):
    ```js
    // webpack.config.js file
    const IS_PROD = process.env.NODE_ENV === 'production' ? true : false;
    
    if (!IS_PROD) {
       plugins.push(new HandmadeLiveReload.plugin());
    }
    ```
1. the `path_to_client keys` is just a string with the absolute path to the js source file
that can be added to the webpack entries in order to be compiled:
    ```js
    // webpack.config.js file
    if (!IS_PROD) {
      entry: {
        "handmade_live_reload": HandmadeLiveReload.path_to_client
      }
    }
    ```

    The `handmade_live_reload.js` compiled script have to be added to the involved web pages;
    using the [HTML Webpack Plugin](https://github.com/jantimon/html-webpack-plugin):
    
    ```js
    // webpack.config.js file
    new HtmlWebpackPlugin({
       chunks: ['app', 'handmade_live_reload']
    })
    ```

## License
[MIT](https://github.com/zsimo/env-to-config/blob/master/LICENSE)