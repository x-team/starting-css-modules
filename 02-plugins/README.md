02: Using postcss plugins with css-modules
====

An example of using postcss plugins with [css-modules](https://github.com/css-modules). You can read about it at <http://x-team.com/2015/08/css-modules-a-new-way-to-css/>

Take a look in [src/styles/*.css](https://github.com/x-team/starting-css-modules/tree/master/02-plugins/src/styles) to see how we're doing things like:

- media query variables (with [postcss-custom-media](https://github.com/postcss/postcss-custom-media))
- nested rules (with [postcss-nested](https://github.com/postcss/postcss-nested))
- australian enhancements (with [postcss-australian-stylesheets](https://github.com/dp-lewis/postcss-australian-stylesheets))

You can also take a look at the generated css to see the result of [autoprefixer](https://github.com/postcss/autoprefixer).

Running the example
----

```
npm install
npm start
```

And then open <http://localhost:8000> in a browser.

How do I configure plugins?
----

PostCSS plugins are passed in as configuration to `css-modulesify`. You can see how we're doing that in the [monobrow config](https://github.com/x-team/starting-css-modules/tree/master/02-plugins/monobrow.config.js) and read more in the [css-modulesify docs](https://github.com/css-modules/css-modulesify#postcss-plugins)

License
----

MIT
