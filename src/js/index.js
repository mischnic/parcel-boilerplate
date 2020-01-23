import '../scss/index.scss';
import cssVars from 'css-vars-ponyfill';

// CSS vars ponyfill for IE11
cssVars();

// test ES6 transpilation
const hello = 'hello';
console.log(hello);
