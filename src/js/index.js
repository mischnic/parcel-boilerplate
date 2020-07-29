import '../scss/index.scss';

import cssVars from 'css-vars-ponyfill';

// CSS vars ponyfill for IE11
cssVars();

/* eslint-disable no-alert, no-console */
const hello = 'ES6 const works!';
console.log(hello);
