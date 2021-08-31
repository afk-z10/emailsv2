const h = require("vhtml");

const Fragment = ({ children }) => h(null, null, ...children);

export { h as createElement, Fragment };
