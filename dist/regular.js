(function () {
'use strict';

var _WINDOW = {};
try {
  if (typeof window !== 'undefined') _WINDOW = window;
  
} catch (e) {}

var _ref = _WINDOW.navigator || {};
var _ref$userAgent = _ref.userAgent;
var userAgent = _ref$userAgent === undefined ? '' : _ref$userAgent;

var WINDOW = _WINDOW;




var IS_IE = ~userAgent.indexOf('MSIE') || ~userAgent.indexOf('Trident/');

var NAMESPACE_IDENTIFIER = '___FONT_AWESOME___';









var oneToTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oneToTwenty = oneToTen.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);



var RESERVED_CLASSES = ['xs', 'sm', 'lg', 'fw', 'ul', 'li', 'border', 'pull-left', 'pull-right', 'spin', 'pulse', 'rotate-90', 'rotate-180', 'rotate-270', 'flip-horizontal', 'flip-vertical', 'stack', 'stack-1x', 'stack-2x', 'inverse', 'layers', 'layers-text', 'layers-counter'].concat(oneToTen.map(function (n) {
  return n + 'x';
})).concat(oneToTwenty.map(function (n) {
  return 'w-' + n;
}));

function bunker(fn) {
  try {
    fn();
  } catch (e) {
    if (undefined !== 'production') {
      throw e;
    }
  }
}

var icons$1 = {
  "user-circle": [512, 512, [], "f2bd", "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm0 48c110.532 0 200 89.451 200 200 0 34.48-8.706 66.909-24.04 95.213-13.403-26.393-37.525-47.542-67.384-56.572C378.19 273.809 385.5 249.468 385.5 224c0-71.569-57.919-129.5-129.5-129.5-71.569 0-129.5 57.919-129.5 129.5 0 25.468 7.31 49.809 20.924 70.641-29.821 9.018-53.962 30.142-67.385 56.572C64.706 322.911 56 290.482 56 256c0-110.531 89.451-200 200-200zm-80 168c0-44.183 35.817-80 80-80s80 35.817 80 80-35.817 80-80 80-80-35.817-80-80zm-59.927 174.943c1.519-33.998 29.554-61.097 63.927-61.097h14.171c38.337 20.889 85.337 20.881 123.659 0H332c34.373 0 62.408 27.099 63.927 61.097-77.746 76.114-202.156 76.065-279.854 0z"],
};

var w = WINDOW || {};

if (!w[NAMESPACE_IDENTIFIER]) w[NAMESPACE_IDENTIFIER] = {};
if (!w[NAMESPACE_IDENTIFIER].packs) w[NAMESPACE_IDENTIFIER].packs = {};
if (!w[NAMESPACE_IDENTIFIER].hooks) w[NAMESPACE_IDENTIFIER].hooks = {};
if (!w[NAMESPACE_IDENTIFIER].shims) w[NAMESPACE_IDENTIFIER].shims = [];

var namespace = w[NAMESPACE_IDENTIFIER];

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function define(prefix) {
  if (typeof namespace.hooks.addPack === 'function') {
    namespace.hooks.addPack(prefix, icons$1);
  } else {
    namespace.packs[prefix] = _extends({}, namespace.packs[prefix] || {}, icons$1);
  }
}

bunker(function () {
  define('far');
});

}());
