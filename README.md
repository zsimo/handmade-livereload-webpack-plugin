# handmade-livereload-webpack-plugin
A Webpack plugin that allows pages to be automatically reloaded without the DevServer.

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Build Status](https://api.travis-ci.com/zsimo/handmade-livereload-webpack-plugin.svg)](https://travis-ci.com/zsimo/handmade-livereload-webpack-plugin)


This is a [Webpack](https://webpack.js.org/) plugin that allows to reload web pages while developing,
without the need to set up the [DevServer](https://webpack.js.org/configuration/dev-server/).
This reduces the difference in configuration between `production` and `development`.
It uses [socket.io](https://socket.io/).
It's a `development` only module.

## Install
```bash
yarn add handmade-livereload-webpack-plugin -D
```

## Usage
In the webpack configuration file the module must be first initialized with
the 2 mandatory keys `port` and `host`
```js
// webpack.config.js file
var HandmadeLiveReload = require("handmade-livereload-webpack-plugin")({
    port: 1234,
    host: "localhost:3000"
});
```
This modules consists of 2 parts:
- the webpack plugin itself
- a client side script that must injected in the web page(s) of interest

### Webpack plugin

```js
// redisClient.js file
var redis = require("redis");
var retryStrategy = require("node-redis-retry-strategy");

var client = redis.createClient({
    host: "127.0.0.1",
    port: 6379,
    retry_strategy: retryStrategy()
});

module.exports = client;
```