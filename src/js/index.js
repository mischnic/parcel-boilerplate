import '../scss/index.scss';
import '../icons/svg-icon-defs.svg';

import cssVars from 'css-vars-ponyfill';

// CSS vars ponyfill for IE11
cssVars();

/* eslint-disable no-alert, no-console */
// test ES6 transpilation
const hello = 'hello';
alert(hello);
