# Colour console

Simple colour wrapper for the native console object.

## Install

    $ npm install colour-console --save

## Usage

````js
var soul = require('colour-console');

soul.error("You should see red text");
soul.warn("You should see yellow text");
soul.info("You should see blue text");

// All other methods you expect just point to the native console.
soul.log("This should be plain text");
soul.time('foo');
soul.timeEnd('foo');
// etc...
````
