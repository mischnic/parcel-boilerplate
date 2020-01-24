# Use Parcel to bundle UI

## Boilerplate setup.

Using Parcel bundler (instead of Webpack or Gulp) to handle

* ES6+ transpilation.
* Sass.
* PostCSS.

Additionally, configured

* IE11 ponyfill for CSS variables.
* Eslint, Stylelint, Prettier.
* Git hooks.

> Note: linter config files use recommended settings, plus some additional personal (opinionated) settings.

## Test in browser, and build

* `npm start`
* `npm build` creates minified static assets with map files in `dist` folder.
