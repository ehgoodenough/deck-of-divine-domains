/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./source/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/ansi-regex/index.js":
/*!******************************************!*\
  !*** ./node_modules/ansi-regex/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function () {
	return /[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-PRZcf-nqry=><]/g;
};


/***/ }),

/***/ "./node_modules/array-shuffle/index.js":
/*!*********************************************!*\
  !*** ./node_modules/array-shuffle/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return arrayShuffle; });
function arrayShuffle(array) {
	if (!Array.isArray(array)) {
		throw new TypeError(`Expected an array, got ${typeof array}`);
	}

	array = [...array];

	for (let index = array.length - 1; index > 0; index--) {
		const newIndex = Math.floor(Math.random() * (index + 1));
		[array[index], array[newIndex]] = [array[newIndex], array[index]];
	}

	return array;
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./source/views/Mount.view.less":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./source/views/Mount.view.less ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../fonts/tarot.ttf */ "./source/fonts/tarot.ttf"));
var ___CSS_LOADER_URL___1___ = urlEscape(__webpack_require__(/*! ../images/badcardback.png */ "./source/images/badcardback.png"));

// Module
exports.push([module.i, "* {\n  margin: 0px;\n  padding: 0px;\n  cursor: default;\n  box-sizing: border-box;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  -o-user-select: none;\n  user-select: none;\n}\n@font-face {\n  font-family: tarot;\n  src: url(" + ___CSS_LOADER_URL___0___ + ") format(\"truetype\");\n}\n:root {\n  font-size: 16px;\n}\n@media (max-width: 1050px) {\n  :root {\n    font-size: 1.53vw;\n  }\n}\nbody {\n  color: #f2f8fb;\n  background-color: #4e4c55;\n  font-family: Roboto, Helvetica, sans-serif;\n  font-family: Cambria, serif;\n}\n.ReshuffleButton {\n  font-size: 3em;\n  color: #f2f8fb;\n  transition-property: color;\n  transition-duration: 0.2s;\n}\n.ReshuffleButton:hover {\n  color: #baa867;\n  transition-duration: 0.1s;\n}\n.CopyButton {\n  position: relative;\n  opacity: 0;\n  transition-duration: 0.5s;\n  transition-property: opacity;\n}\n.CopyButton:hover .Icon {\n  color: #baa867;\n  transition-duration: 0.1s;\n}\n.CopyButton:hover .Response {\n  opacity: 1;\n  transition-duration: 0.1s;\n}\n.CopyButton .Icon {\n  font-size: 3em;\n  transition-property: color;\n  transition-duration: 0.2s;\n}\n.CopyButton .Response {\n  top: -1em;\n  display: none;\n  position: absolute;\n  color: #baa867;\n  opacity: 0;\n  transition-property: opacity;\n  transition-duration: 0.2s;\n}\n.CopyButton[interaction=copy] .Response {\n  top: -1.25em;\n  display: block;\n  animation-duration: 0.1s;\n  animation-fill-mode: forwards;\n  animation-name: copy-to-clipboard;\n}\n.CopyButton[hasSelectedBoth] {\n  opacity: 1;\n  transition-delay: 0.5s;\n  transition-duration: 2s;\n}\n.Deck {\n  width: 8em;\n  height: 12em;\n  position: relative;\n}\n.Deck .BottomCard {\n  width: 8em;\n  height: 12em;\n  border-radius: 0.25em;\n  background-color: #928142;\n}\n.Deck .TopCard,\n.Deck .AlmostTopCard {\n  width: 8em;\n  height: 12em;\n  border-radius: 0.25em;\n  background-size: cover;\n  background-color: #baa867;\n  background-position: center;\n  background-image: url(" + ___CSS_LOADER_URL___1___ + ");\n  box-shadow: 0em 0em 0em transparent;\n  top: -1em;\n  position: absolute;\n  transform: rotate(0deg);\n  transform-origin: bottom center;\n  transition-duration: 0.4s;\n  transition-property: top, transform, box-shadow;\n}\n.Deck .ReshufflePrompt {\n  height: 100%;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  text-shadow: 0.1em 0.1em 0.1em #35343a;\n  opacity: 0;\n  transition-delay: 0.2s;\n  transition-duration: 1s;\n  transition-property: opacity;\n}\n.Deck:hover .TopCard {\n  transition-duration: 0.2s;\n  top: -1.5em;\n  transform: rotate(2deg);\n  box-shadow: 0.2em 0.2em 0.2em rgba(53, 52, 58, 0.2), -0.2em 0.2em 0.2em rgba(53, 52, 58, 0.2);\n}\n.Deck:hover:not([interaction=none]) .ReshufflePrompt {\n  opacity: 1;\n}\n.Card {\n  width: 8em;\n  height: 12em;\n  position: relative;\n  display: inline-block;\n}\n.Card.Empty {\n  border-style: dashed;\n  border-color: rgba(242, 248, 251, 0.2);\n  border-width: 0.3em;\n  border-radius: 0.25em;\n}\n.Card.Empty .SelectPrompt {\n  height: 100%;\n  display: flex;\n  text-align: center;\n  align-items: center;\n  justify-content: center;\n  opacity: 0.5;\n}\n.Card .Content1 {\n  height: 100%;\n  padding: 0.3em;\n  color: #f2f8fb;\n  border-color: #baa867;\n  border-style: solid;\n  border-width: 0.3em;\n  border-radius: 0.25em;\n  background-color: #35343a;\n  box-shadow: 0.2em 0.2em 0.2em #35343a;\n  transition-duration: 0.15s;\n  transition-timing-function: ease-in;\n  transition-property: transform, box-shadow;\n}\n.Card .Content1 .Content2 {\n  border-width: 0.1em;\n  border-color: #baa867;\n  border-style: solid;\n  border-radius: 0.1em;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n.Card .Content1 .Content2 .Name,\n.Card .Content1 .Content2 .Number {\n  font-size: 1.33em;\n  text-align: center;\n}\n.Card .Content1 .Content2 .Symbol {\n  font-size: 4em;\n  text-align: center;\n}\n.DivineDomainScreen {\n  font-size: 1.2em;\n}\n.DivineDomainScreen section {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n.DivineDomainScreen .PromptSection {\n  font-size: 1.5em;\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 2rem;\n}\n.DivineDomainScreen .SelectedCardsSection .SelectedCards .Divider {\n  z-index: 100;\n  position: relative;\n  width: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.DivineDomainScreen .SelectedCardsSection .SelectedCards .Divider .Ampersand {\n  position: absolute;\n  font-size: 5rem;\n  text-shadow: 2px 2px 2px #35343a;\n}\n.DivineDomainScreen .SelectedCardsSection .SelectedCards .Slot {\n  width: 8em;\n  height: 12em;\n  position: relative;\n  display: inline-block;\n}\n.DivineDomainScreen .SelectedCardsSection .SelectedCards .Slot .Card {\n  position: absolute;\n}\n.DivineDomainScreen .SelectedCardsSection .SelectedCards .Slot .Card[isSelected] {\n  opacity: 0;\n  animation-name: select;\n  animation-duration: 0.1s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease-out;\n}\n.DivineDomainScreen .SelectedCardsSection .ReshuffleSection,\n.DivineDomainScreen .SelectedCardsSection .CopyButtonSection {\n  margin: auto 4.125rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.DivineDomainScreen .DealtCardsSection {\n  margin-top: 2rem;\n}\n.DivineDomainScreen .DealtCardsSection .Card:not(:last-child) {\n  margin-right: 1.5rem;\n}\n.DivineDomainScreen .DealtCardsSection .Card:not([isSelected]) {\n  opacity: 1;\n}\n.DivineDomainScreen .DealtCardsSection .Card[isSelected] {\n  opacity: 0;\n  transform: translateY(1em);\n  animation-duration: 0.05s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease-out;\n  animation-name: select-out-from-hand;\n}\n.DivineDomainScreen .DealtCardsSection .Card[interaction=dealt] {\n  opacity: 0;\n  animation-duration: 0.05s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease-out;\n  animation-name: deal-to-hand;\n}\n.DivineDomainScreen .DealtCardsSection .Card[interaction=dealt]:nth-child(1) {\n  animation-delay: 0s;\n}\n.DivineDomainScreen .DealtCardsSection .Card[interaction=dealt]:nth-child(2) {\n  animation-delay: 0.2s;\n}\n.DivineDomainScreen .DealtCardsSection .Card[interaction=dealt]:nth-child(3) {\n  animation-delay: 0.4s;\n}\n.DivineDomainScreen .DealtCardsSection .Card[interaction=dealt]:nth-child(4) {\n  animation-delay: 0.6s;\n}\n.DivineDomainScreen .DealtCardsSection .Card[interaction=dealt]:nth-child(5) {\n  animation-delay: 0.8s;\n}\n.DivineDomainScreen .DealtCardsSection .Card[interaction=dealt]:nth-child(6) {\n  animation-delay: 1s;\n}\n.DivineDomainScreen .DealtCardsSection .Card:hover .Content1 {\n  transition-duration: 0.025s;\n  transform: translateY(-1em) !important;\n  box-shadow: 0.2em 1.2em 0.6em #35343a;\n}\n@keyframes deal-to-hand {\n  0% {\n    opacity: 0;\n    transform: translateY(-0.5em) rotate(16deg);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0em) rotate(0deg);\n  }\n}\n@keyframes select {\n  0% {\n    opacity: 0;\n    transform: translateY(0.5em);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0em);\n  }\n}\n@keyframes select-out-from-hand {\n  0% {\n    opacity: 1;\n    transform: translateY(-1em);\n  }\n  100% {\n    opacity: 0;\n    transform: translateY(-1.5em);\n  }\n}\n@keyframes copy-to-clipboard {\n  0% {\n    display: block;\n    top: 1em;\n  }\n  100% {\n    top: -1.25em;\n  }\n}\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/microajax/microajax.js":
/*!*********************************************!*\
  !*** ./node_modules/microajax/microajax.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function microAjax(url, callbackFunction)
{
  this.bindFunction = function (caller, object) {
    return function() {
      return caller.apply(object, [object]);
    };
  };

  this.stateChange = function (object) {
    if (this.request.readyState==4)
      this.callbackFunction(this.request);
  };

  this.getRequest = function() {
    if (window.ActiveXObject)
      return new ActiveXObject('Microsoft.XMLHTTP');
    else if (window.XMLHttpRequest)
      return new XMLHttpRequest();
    return false;
  };

  this.postBody = (arguments[2] || "");

  this.callbackFunction=callbackFunction;
  this.url=url;
  this.request = this.getRequest();

  if(this.request) {
    var req = this.request;
    req.onreadystatechange = this.bindFunction(this.stateChange, this);

    if (this.postBody!=="") {
      req.open("POST", url, true);
      req.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
      req.setRequestHeader('Connection', 'close');
    } else {
      req.open("GET", url, true);
    }

    req.send(this.postBody);
  }
}

function microAjaxFactory(url, callback)
{
  return new microAjax(url, callback);
}

module.exports = microAjaxFactory;


/***/ }),

/***/ "./node_modules/preact/dist/preact.mjs":
/*!*********************************************!*\
  !*** ./node_modules/preact/dist/preact.mjs ***!
  \*********************************************/
/*! exports provided: default, h, createElement, cloneElement, Component, render, rerender, options */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return h; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cloneElement", function() { return cloneElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Component", function() { return Component; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rerender", function() { return rerender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "options", function() { return options; });
var VNode = function VNode() {};

var options = {};

var stack = [];

var EMPTY_CHILDREN = [];

function h(nodeName, attributes) {
	var children = EMPTY_CHILDREN,
	    lastSimple,
	    child,
	    simple,
	    i;
	for (i = arguments.length; i-- > 2;) {
		stack.push(arguments[i]);
	}
	if (attributes && attributes.children != null) {
		if (!stack.length) stack.push(attributes.children);
		delete attributes.children;
	}
	while (stack.length) {
		if ((child = stack.pop()) && child.pop !== undefined) {
			for (i = child.length; i--;) {
				stack.push(child[i]);
			}
		} else {
			if (typeof child === 'boolean') child = null;

			if (simple = typeof nodeName !== 'function') {
				if (child == null) child = '';else if (typeof child === 'number') child = String(child);else if (typeof child !== 'string') simple = false;
			}

			if (simple && lastSimple) {
				children[children.length - 1] += child;
			} else if (children === EMPTY_CHILDREN) {
				children = [child];
			} else {
				children.push(child);
			}

			lastSimple = simple;
		}
	}

	var p = new VNode();
	p.nodeName = nodeName;
	p.children = children;
	p.attributes = attributes == null ? undefined : attributes;
	p.key = attributes == null ? undefined : attributes.key;

	if (options.vnode !== undefined) options.vnode(p);

	return p;
}

function extend(obj, props) {
  for (var i in props) {
    obj[i] = props[i];
  }return obj;
}

var defer = typeof Promise == 'function' ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout;

function cloneElement(vnode, props) {
  return h(vnode.nodeName, extend(extend({}, vnode.attributes), props), arguments.length > 2 ? [].slice.call(arguments, 2) : vnode.children);
}

var IS_NON_DIMENSIONAL = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i;

var items = [];

function enqueueRender(component) {
	if (!component._dirty && (component._dirty = true) && items.push(component) == 1) {
		(options.debounceRendering || defer)(rerender);
	}
}

function rerender() {
	var p,
	    list = items;
	items = [];
	while (p = list.pop()) {
		if (p._dirty) renderComponent(p);
	}
}

function isSameNodeType(node, vnode, hydrating) {
	if (typeof vnode === 'string' || typeof vnode === 'number') {
		return node.splitText !== undefined;
	}
	if (typeof vnode.nodeName === 'string') {
		return !node._componentConstructor && isNamedNode(node, vnode.nodeName);
	}
	return hydrating || node._componentConstructor === vnode.nodeName;
}

function isNamedNode(node, nodeName) {
	return node.normalizedNodeName === nodeName || node.nodeName.toLowerCase() === nodeName.toLowerCase();
}

function getNodeProps(vnode) {
	var props = extend({}, vnode.attributes);
	props.children = vnode.children;

	var defaultProps = vnode.nodeName.defaultProps;
	if (defaultProps !== undefined) {
		for (var i in defaultProps) {
			if (props[i] === undefined) {
				props[i] = defaultProps[i];
			}
		}
	}

	return props;
}

function createNode(nodeName, isSvg) {
	var node = isSvg ? document.createElementNS('http://www.w3.org/2000/svg', nodeName) : document.createElement(nodeName);
	node.normalizedNodeName = nodeName;
	return node;
}

function removeNode(node) {
	var parentNode = node.parentNode;
	if (parentNode) parentNode.removeChild(node);
}

function setAccessor(node, name, old, value, isSvg) {
	if (name === 'className') name = 'class';

	if (name === 'key') {} else if (name === 'ref') {
		if (old) old(null);
		if (value) value(node);
	} else if (name === 'class' && !isSvg) {
		node.className = value || '';
	} else if (name === 'style') {
		if (!value || typeof value === 'string' || typeof old === 'string') {
			node.style.cssText = value || '';
		}
		if (value && typeof value === 'object') {
			if (typeof old !== 'string') {
				for (var i in old) {
					if (!(i in value)) node.style[i] = '';
				}
			}
			for (var i in value) {
				node.style[i] = typeof value[i] === 'number' && IS_NON_DIMENSIONAL.test(i) === false ? value[i] + 'px' : value[i];
			}
		}
	} else if (name === 'dangerouslySetInnerHTML') {
		if (value) node.innerHTML = value.__html || '';
	} else if (name[0] == 'o' && name[1] == 'n') {
		var useCapture = name !== (name = name.replace(/Capture$/, ''));
		name = name.toLowerCase().substring(2);
		if (value) {
			if (!old) node.addEventListener(name, eventProxy, useCapture);
		} else {
			node.removeEventListener(name, eventProxy, useCapture);
		}
		(node._listeners || (node._listeners = {}))[name] = value;
	} else if (name !== 'list' && name !== 'type' && !isSvg && name in node) {
		try {
			node[name] = value == null ? '' : value;
		} catch (e) {}
		if ((value == null || value === false) && name != 'spellcheck') node.removeAttribute(name);
	} else {
		var ns = isSvg && name !== (name = name.replace(/^xlink:?/, ''));

		if (value == null || value === false) {
			if (ns) node.removeAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase());else node.removeAttribute(name);
		} else if (typeof value !== 'function') {
			if (ns) node.setAttributeNS('http://www.w3.org/1999/xlink', name.toLowerCase(), value);else node.setAttribute(name, value);
		}
	}
}

function eventProxy(e) {
	return this._listeners[e.type](options.event && options.event(e) || e);
}

var mounts = [];

var diffLevel = 0;

var isSvgMode = false;

var hydrating = false;

function flushMounts() {
	var c;
	while (c = mounts.pop()) {
		if (options.afterMount) options.afterMount(c);
		if (c.componentDidMount) c.componentDidMount();
	}
}

function diff(dom, vnode, context, mountAll, parent, componentRoot) {
	if (!diffLevel++) {
		isSvgMode = parent != null && parent.ownerSVGElement !== undefined;

		hydrating = dom != null && !('__preactattr_' in dom);
	}

	var ret = idiff(dom, vnode, context, mountAll, componentRoot);

	if (parent && ret.parentNode !== parent) parent.appendChild(ret);

	if (! --diffLevel) {
		hydrating = false;

		if (!componentRoot) flushMounts();
	}

	return ret;
}

function idiff(dom, vnode, context, mountAll, componentRoot) {
	var out = dom,
	    prevSvgMode = isSvgMode;

	if (vnode == null || typeof vnode === 'boolean') vnode = '';

	if (typeof vnode === 'string' || typeof vnode === 'number') {
		if (dom && dom.splitText !== undefined && dom.parentNode && (!dom._component || componentRoot)) {
			if (dom.nodeValue != vnode) {
				dom.nodeValue = vnode;
			}
		} else {
			out = document.createTextNode(vnode);
			if (dom) {
				if (dom.parentNode) dom.parentNode.replaceChild(out, dom);
				recollectNodeTree(dom, true);
			}
		}

		out['__preactattr_'] = true;

		return out;
	}

	var vnodeName = vnode.nodeName;
	if (typeof vnodeName === 'function') {
		return buildComponentFromVNode(dom, vnode, context, mountAll);
	}

	isSvgMode = vnodeName === 'svg' ? true : vnodeName === 'foreignObject' ? false : isSvgMode;

	vnodeName = String(vnodeName);
	if (!dom || !isNamedNode(dom, vnodeName)) {
		out = createNode(vnodeName, isSvgMode);

		if (dom) {
			while (dom.firstChild) {
				out.appendChild(dom.firstChild);
			}
			if (dom.parentNode) dom.parentNode.replaceChild(out, dom);

			recollectNodeTree(dom, true);
		}
	}

	var fc = out.firstChild,
	    props = out['__preactattr_'],
	    vchildren = vnode.children;

	if (props == null) {
		props = out['__preactattr_'] = {};
		for (var a = out.attributes, i = a.length; i--;) {
			props[a[i].name] = a[i].value;
		}
	}

	if (!hydrating && vchildren && vchildren.length === 1 && typeof vchildren[0] === 'string' && fc != null && fc.splitText !== undefined && fc.nextSibling == null) {
		if (fc.nodeValue != vchildren[0]) {
			fc.nodeValue = vchildren[0];
		}
	} else if (vchildren && vchildren.length || fc != null) {
			innerDiffNode(out, vchildren, context, mountAll, hydrating || props.dangerouslySetInnerHTML != null);
		}

	diffAttributes(out, vnode.attributes, props);

	isSvgMode = prevSvgMode;

	return out;
}

function innerDiffNode(dom, vchildren, context, mountAll, isHydrating) {
	var originalChildren = dom.childNodes,
	    children = [],
	    keyed = {},
	    keyedLen = 0,
	    min = 0,
	    len = originalChildren.length,
	    childrenLen = 0,
	    vlen = vchildren ? vchildren.length : 0,
	    j,
	    c,
	    f,
	    vchild,
	    child;

	if (len !== 0) {
		for (var i = 0; i < len; i++) {
			var _child = originalChildren[i],
			    props = _child['__preactattr_'],
			    key = vlen && props ? _child._component ? _child._component.__key : props.key : null;
			if (key != null) {
				keyedLen++;
				keyed[key] = _child;
			} else if (props || (_child.splitText !== undefined ? isHydrating ? _child.nodeValue.trim() : true : isHydrating)) {
				children[childrenLen++] = _child;
			}
		}
	}

	if (vlen !== 0) {
		for (var i = 0; i < vlen; i++) {
			vchild = vchildren[i];
			child = null;

			var key = vchild.key;
			if (key != null) {
				if (keyedLen && keyed[key] !== undefined) {
					child = keyed[key];
					keyed[key] = undefined;
					keyedLen--;
				}
			} else if (min < childrenLen) {
					for (j = min; j < childrenLen; j++) {
						if (children[j] !== undefined && isSameNodeType(c = children[j], vchild, isHydrating)) {
							child = c;
							children[j] = undefined;
							if (j === childrenLen - 1) childrenLen--;
							if (j === min) min++;
							break;
						}
					}
				}

			child = idiff(child, vchild, context, mountAll);

			f = originalChildren[i];
			if (child && child !== dom && child !== f) {
				if (f == null) {
					dom.appendChild(child);
				} else if (child === f.nextSibling) {
					removeNode(f);
				} else {
					dom.insertBefore(child, f);
				}
			}
		}
	}

	if (keyedLen) {
		for (var i in keyed) {
			if (keyed[i] !== undefined) recollectNodeTree(keyed[i], false);
		}
	}

	while (min <= childrenLen) {
		if ((child = children[childrenLen--]) !== undefined) recollectNodeTree(child, false);
	}
}

function recollectNodeTree(node, unmountOnly) {
	var component = node._component;
	if (component) {
		unmountComponent(component);
	} else {
		if (node['__preactattr_'] != null && node['__preactattr_'].ref) node['__preactattr_'].ref(null);

		if (unmountOnly === false || node['__preactattr_'] == null) {
			removeNode(node);
		}

		removeChildren(node);
	}
}

function removeChildren(node) {
	node = node.lastChild;
	while (node) {
		var next = node.previousSibling;
		recollectNodeTree(node, true);
		node = next;
	}
}

function diffAttributes(dom, attrs, old) {
	var name;

	for (name in old) {
		if (!(attrs && attrs[name] != null) && old[name] != null) {
			setAccessor(dom, name, old[name], old[name] = undefined, isSvgMode);
		}
	}

	for (name in attrs) {
		if (name !== 'children' && name !== 'innerHTML' && (!(name in old) || attrs[name] !== (name === 'value' || name === 'checked' ? dom[name] : old[name]))) {
			setAccessor(dom, name, old[name], old[name] = attrs[name], isSvgMode);
		}
	}
}

var recyclerComponents = [];

function createComponent(Ctor, props, context) {
	var inst,
	    i = recyclerComponents.length;

	if (Ctor.prototype && Ctor.prototype.render) {
		inst = new Ctor(props, context);
		Component.call(inst, props, context);
	} else {
		inst = new Component(props, context);
		inst.constructor = Ctor;
		inst.render = doRender;
	}

	while (i--) {
		if (recyclerComponents[i].constructor === Ctor) {
			inst.nextBase = recyclerComponents[i].nextBase;
			recyclerComponents.splice(i, 1);
			return inst;
		}
	}

	return inst;
}

function doRender(props, state, context) {
	return this.constructor(props, context);
}

function setComponentProps(component, props, renderMode, context, mountAll) {
	if (component._disable) return;
	component._disable = true;

	component.__ref = props.ref;
	component.__key = props.key;
	delete props.ref;
	delete props.key;

	if (typeof component.constructor.getDerivedStateFromProps === 'undefined') {
		if (!component.base || mountAll) {
			if (component.componentWillMount) component.componentWillMount();
		} else if (component.componentWillReceiveProps) {
			component.componentWillReceiveProps(props, context);
		}
	}

	if (context && context !== component.context) {
		if (!component.prevContext) component.prevContext = component.context;
		component.context = context;
	}

	if (!component.prevProps) component.prevProps = component.props;
	component.props = props;

	component._disable = false;

	if (renderMode !== 0) {
		if (renderMode === 1 || options.syncComponentUpdates !== false || !component.base) {
			renderComponent(component, 1, mountAll);
		} else {
			enqueueRender(component);
		}
	}

	if (component.__ref) component.__ref(component);
}

function renderComponent(component, renderMode, mountAll, isChild) {
	if (component._disable) return;

	var props = component.props,
	    state = component.state,
	    context = component.context,
	    previousProps = component.prevProps || props,
	    previousState = component.prevState || state,
	    previousContext = component.prevContext || context,
	    isUpdate = component.base,
	    nextBase = component.nextBase,
	    initialBase = isUpdate || nextBase,
	    initialChildComponent = component._component,
	    skip = false,
	    snapshot = previousContext,
	    rendered,
	    inst,
	    cbase;

	if (component.constructor.getDerivedStateFromProps) {
		state = extend(extend({}, state), component.constructor.getDerivedStateFromProps(props, state));
		component.state = state;
	}

	if (isUpdate) {
		component.props = previousProps;
		component.state = previousState;
		component.context = previousContext;
		if (renderMode !== 2 && component.shouldComponentUpdate && component.shouldComponentUpdate(props, state, context) === false) {
			skip = true;
		} else if (component.componentWillUpdate) {
			component.componentWillUpdate(props, state, context);
		}
		component.props = props;
		component.state = state;
		component.context = context;
	}

	component.prevProps = component.prevState = component.prevContext = component.nextBase = null;
	component._dirty = false;

	if (!skip) {
		rendered = component.render(props, state, context);

		if (component.getChildContext) {
			context = extend(extend({}, context), component.getChildContext());
		}

		if (isUpdate && component.getSnapshotBeforeUpdate) {
			snapshot = component.getSnapshotBeforeUpdate(previousProps, previousState);
		}

		var childComponent = rendered && rendered.nodeName,
		    toUnmount,
		    base;

		if (typeof childComponent === 'function') {

			var childProps = getNodeProps(rendered);
			inst = initialChildComponent;

			if (inst && inst.constructor === childComponent && childProps.key == inst.__key) {
				setComponentProps(inst, childProps, 1, context, false);
			} else {
				toUnmount = inst;

				component._component = inst = createComponent(childComponent, childProps, context);
				inst.nextBase = inst.nextBase || nextBase;
				inst._parentComponent = component;
				setComponentProps(inst, childProps, 0, context, false);
				renderComponent(inst, 1, mountAll, true);
			}

			base = inst.base;
		} else {
			cbase = initialBase;

			toUnmount = initialChildComponent;
			if (toUnmount) {
				cbase = component._component = null;
			}

			if (initialBase || renderMode === 1) {
				if (cbase) cbase._component = null;
				base = diff(cbase, rendered, context, mountAll || !isUpdate, initialBase && initialBase.parentNode, true);
			}
		}

		if (initialBase && base !== initialBase && inst !== initialChildComponent) {
			var baseParent = initialBase.parentNode;
			if (baseParent && base !== baseParent) {
				baseParent.replaceChild(base, initialBase);

				if (!toUnmount) {
					initialBase._component = null;
					recollectNodeTree(initialBase, false);
				}
			}
		}

		if (toUnmount) {
			unmountComponent(toUnmount);
		}

		component.base = base;
		if (base && !isChild) {
			var componentRef = component,
			    t = component;
			while (t = t._parentComponent) {
				(componentRef = t).base = base;
			}
			base._component = componentRef;
			base._componentConstructor = componentRef.constructor;
		}
	}

	if (!isUpdate || mountAll) {
		mounts.unshift(component);
	} else if (!skip) {

		if (component.componentDidUpdate) {
			component.componentDidUpdate(previousProps, previousState, snapshot);
		}
		if (options.afterUpdate) options.afterUpdate(component);
	}

	while (component._renderCallbacks.length) {
		component._renderCallbacks.pop().call(component);
	}if (!diffLevel && !isChild) flushMounts();
}

function buildComponentFromVNode(dom, vnode, context, mountAll) {
	var c = dom && dom._component,
	    originalComponent = c,
	    oldDom = dom,
	    isDirectOwner = c && dom._componentConstructor === vnode.nodeName,
	    isOwner = isDirectOwner,
	    props = getNodeProps(vnode);
	while (c && !isOwner && (c = c._parentComponent)) {
		isOwner = c.constructor === vnode.nodeName;
	}

	if (c && isOwner && (!mountAll || c._component)) {
		setComponentProps(c, props, 3, context, mountAll);
		dom = c.base;
	} else {
		if (originalComponent && !isDirectOwner) {
			unmountComponent(originalComponent);
			dom = oldDom = null;
		}

		c = createComponent(vnode.nodeName, props, context);
		if (dom && !c.nextBase) {
			c.nextBase = dom;

			oldDom = null;
		}
		setComponentProps(c, props, 1, context, mountAll);
		dom = c.base;

		if (oldDom && dom !== oldDom) {
			oldDom._component = null;
			recollectNodeTree(oldDom, false);
		}
	}

	return dom;
}

function unmountComponent(component) {
	if (options.beforeUnmount) options.beforeUnmount(component);

	var base = component.base;

	component._disable = true;

	if (component.componentWillUnmount) component.componentWillUnmount();

	component.base = null;

	var inner = component._component;
	if (inner) {
		unmountComponent(inner);
	} else if (base) {
		if (base['__preactattr_'] && base['__preactattr_'].ref) base['__preactattr_'].ref(null);

		component.nextBase = base;

		removeNode(base);
		recyclerComponents.push(component);

		removeChildren(base);
	}

	if (component.__ref) component.__ref(null);
}

function Component(props, context) {
	this._dirty = true;

	this.context = context;

	this.props = props;

	this.state = this.state || {};

	this._renderCallbacks = [];
}

extend(Component.prototype, {
	setState: function setState(state, callback) {
		if (!this.prevState) this.prevState = this.state;
		this.state = extend(extend({}, this.state), typeof state === 'function' ? state(this.state, this.props) : state);
		if (callback) this._renderCallbacks.push(callback);
		enqueueRender(this);
	},
	forceUpdate: function forceUpdate(callback) {
		if (callback) this._renderCallbacks.push(callback);
		renderComponent(this, 2);
	},
	render: function render() {}
});

function render(vnode, parent, merge) {
  return diff(merge, vnode, {}, false, parent, false);
}

var preact = {
	h: h,
	createElement: h,
	cloneElement: cloneElement,
	Component: Component,
	render: render,
	rerender: rerender,
	options: options
};

/* harmony default export */ __webpack_exports__["default"] = (preact);

//# sourceMappingURL=preact.mjs.map


/***/ }),

/***/ "./node_modules/roman-numerals/index.js":
/*!**********************************************!*\
  !*** ./node_modules/roman-numerals/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

(function () {
  module.exports = {
    toArabic: __webpack_require__(/*! ./lib/toArabic.js */ "./node_modules/roman-numerals/lib/toArabic.js"),
    toRoman:__webpack_require__(/*! ./lib/toRoman.js */ "./node_modules/roman-numerals/lib/toRoman.js")
  };
})();


/***/ }),

/***/ "./node_modules/roman-numerals/lib/toArabic.js":
/*!*****************************************************!*\
  !*** ./node_modules/roman-numerals/lib/toArabic.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  var forEach = Array.prototype.forEach;


  /**
   * Converts a roman number to its arabic equivalent.
   *
   * Will throw TypeError on non-string inputs.
   *
   * @param {String} roman
   * @return {Number}
   */
  function toArabic (roman) {
    if (('string' !== typeof roman) && (!(roman instanceof String))) throw new TypeError('toArabic expects a string');

    // Zero is/was a special case. I'll go with Dionysius Exiguus on this one as
    // seen on http://en.wikipedia.org/wiki/Roman_numerals#Zero
    if (/^nulla$/i.test(roman) || !roman.length) return 0;

    // Ultra magical regexp to validate roman numbers!
    roman = roman.toUpperCase().match(/^(M{0,3})(CM|DC{0,3}|CD|C{0,3})(XC|LX{0,3}|XL|X{0,3})(IX|VI{0,3}|IV|I{0,3})$/);
    if (!roman) throw new Error('toArabic expects a valid roman number');
    var arabic = 0;

    // Crunching the thousands...
    arabic += roman[1].length * 1000;

    // Crunching the hundreds...
    if (roman[2] === 'CM') arabic += 900;
    else if (roman[2] === 'CD') arabic += 400;
    else arabic += roman[2].length * 100 + (roman[2][0] === 'D' ? 400 : 0);


    // Crunching the tenths
    if (roman[3] === 'XC') arabic += 90;
    else if (roman[3] === 'XL') arabic += 40;
    else arabic += roman[3].length * 10 + (roman[3][0] === 'L' ? 40 : 0);

    // Crunching the...you see where I'm going, right?
    if (roman[4] === 'IX') arabic += 9;
    else if (roman[4] === 'IV') arabic += 4;
    else arabic += roman[4].length * 1 + (roman[4][0] === 'V' ? 4 : 0);
    return arabic;
  };


  module.exports = toArabic;

})();


/***/ }),

/***/ "./node_modules/roman-numerals/lib/toRoman.js":
/*!****************************************************!*\
  !*** ./node_modules/roman-numerals/lib/toRoman.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function () {
  /**
   * Generate the roman number for the current power of tenth
   *
   * @param {Number} num
   * @param {String} one
   * @param {String} five
   * @param {String} ten
   * @return {String}
   */
  function upToTen (num, one, five, ten) {
    var value = '';
    switch (num) {
      case 0: return value;
      case 9: return one + ten;
      case 4: return one + five;
    }
    if (num >= 5) value = five, num -= 5;
    while (num-- > 0) value += one;
    return value;
  }


  /**
   * Converts an arabic number from 0 to 3999 to its roman equivalent.
   *
   * Will throw TypeError on non-number inputs (stringed numbers are accepted)
   * or NaN and Error on number under 0 or over 3999.
   *
   * @param {Number/String} arabic
   * @return {String}
   */
  function toRoman (arabic) {
    // Checking input first with type comparisons, convert Number() instances to
    // a literal, etc...
    if (arabic instanceof Number) arabic = parseInt(arabic, 10);
    if ('string' === typeof arabic || arabic instanceof String) {
      arabic = parseInt(arabic, 10);
      if (isNaN(arabic)) throw new TypeError('toArabic expects a number');
    }
    if ('number' !== typeof arabic) throw new TypeError('toArabic expects a number');

    // Rounding up "bad" numbers: NaN, negative numbers, numbers over 3999,...
    if (isNaN(arabic)) throw new TypeError('toArabic expects a real number');
    if (arabic < 0) throw new Error('toArabic cannot express negative numbers');
    if (arabic > 3999) throw new Error('toArabic cannot express numbers over 3999');

    // Zero is/was a special case. I'll go with Dionysius Exiguus on this one as
    // seen on http://en.wikipedia.org/wiki/Roman_numerals#Zero
    if (arabic === 0) return 'nulla';
    var roman = '';

    // Chomping away by the power of tenths
    roman += upToTen(Math.floor(arabic / 1000), 'M', '', ''), arabic %= 1000;
    roman += upToTen(Math.floor(arabic / 100), 'C', 'D', 'M'), arabic %= 100;
    roman += upToTen(Math.floor(arabic / 10), 'X', 'L', 'C'), arabic %= 10;
    roman += upToTen(arabic, 'I', 'V', 'X');
    return roman;
  };


  module.exports = toRoman;

})();


/***/ }),

/***/ "./node_modules/statgrab/do.js":
/*!*************************************!*\
  !*** ./node_modules/statgrab/do.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! . */ "./node_modules/statgrab/main.js")()


/***/ }),

/***/ "./node_modules/statgrab/main.js":
/*!***************************************!*\
  !*** ./node_modules/statgrab/main.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var microajax = __webpack_require__(/*! microajax */ "./node_modules/microajax/microajax.js")
var strip_ansi = __webpack_require__(/*! strip-ansi */ "./node_modules/strip-ansi/index.js")

module.exports = function(callback) {
    microajax("stats.json", function(response) {
        if(!!response && response.status == 200) {
            var stats = JSON.parse(response.responseText)

            stats.errors.forEach(function(error) {
                (console.error || console.log)(strip_ansi(error))
            })

            stats.warnings.forEach(function(warning) {
                (console.warn || console.log)(strip_ansi(warning))
            })

            if(callback != undefined) {
                callback(stats)
            }
        }
    })
}


/***/ }),

/***/ "./node_modules/strip-ansi/index.js":
/*!******************************************!*\
  !*** ./node_modules/strip-ansi/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ansiRegex = __webpack_require__(/*! ansi-regex */ "./node_modules/ansi-regex/index.js")();

module.exports = function (str) {
	return typeof str === 'string' ? str.replace(ansiRegex, '') : str;
};


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./source/fonts/tarot.ttf":
/*!********************************!*\
  !*** ./source/fonts/tarot.ttf ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "23c472a0792ac1a20ca94c310a182523.ttf";

/***/ }),

/***/ "./source/images/badcardback.png":
/*!***************************************!*\
  !*** ./source/images/badcardback.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "01ee37b1aca4cbcc762ea966db28fb62.png";

/***/ }),

/***/ "./source/index.js":
/*!*************************!*\
  !*** ./source/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var logic_Render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! logic/Render.js */ "./source/logic/Render.js");
__webpack_require__(/*! statgrab/do */ "./node_modules/statgrab/do.js");


Object(logic_Render_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

/***/ }),

/***/ "./source/logic/Render.js":
/*!********************************!*\
  !*** ./source/logic/Render.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return render; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var views_Mount_view_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! views/Mount.view.js */ "./source/views/Mount.view.js");


var mount = undefined;
function render() {
  mount = preact__WEBPACK_IMPORTED_MODULE_0__["default"].render(preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(views_Mount_view_js__WEBPACK_IMPORTED_MODULE_1__["default"], null), document.body, mount);
}

/***/ }),

/***/ "./source/views/Mount.view.js":
/*!************************************!*\
  !*** ./source/views/Mount.view.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Mount; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var array_shuffle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! array-shuffle */ "./node_modules/array-shuffle/index.js");
/* harmony import */ var logic_Render_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! logic/Render.js */ "./source/logic/Render.js");
/* harmony import */ var roman_numerals__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! roman-numerals */ "./node_modules/roman-numerals/index.js");
/* harmony import */ var roman_numerals__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(roman_numerals__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var views_Mount_view_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! views/Mount.view.less */ "./source/views/Mount.view.less");
/* harmony import */ var views_Mount_view_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(views_Mount_view_less__WEBPACK_IMPORTED_MODULE_4__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var DIVINE_DOMAINS = [{
  "symbol": "❤️",
  "name": "Love",
  "number": 1
}, {
  "symbol": "⚔️",
  "name": "War",
  "number": 2
}, {
  "symbol": "😊",
  "name": "Life",
  "number": 3
}, {
  "symbol": "💀",
  "name": "Death",
  "number": 4
}, {
  "symbol": "🔥",
  "name": "Fire",
  "number": 5
}, {
  "symbol": "🌊",
  "name": "Water",
  "number": 6
}, {
  "symbol": "⛰️",
  "name": "Earth",
  "number": 7
}, {
  "symbol": "⛈️",
  "name": "Storms",
  "number": 8
}, {
  "symbol": "🐺",
  "name": "Beasts",
  "number": 9
}, {
  "symbol": "🌿",
  "name": "Plants",
  "number": 10
}, {
  "symbol": "☀️",
  "name": "Light",
  "number": 11
}, {
  "symbol": "🌑",
  "name": "Dark",
  "number": 12
}, {
  "symbol": "🎭",
  "name": "Art",
  "number": 13
}, {
  "symbol": "🔨",
  "name": "Forge",
  "number": 14
}, {
  "symbol": "🎲",
  "name": "Luck",
  "number": 15
}, {
  "symbol": "👁️",
  "name": "Fate",
  "number": 16
}, {
  "symbol": "🖐️",
  "name": "Trickery",
  "number": 17
}, {
  "symbol": "⚖️",
  "name": "Justice",
  "number": 18
}, {
  "symbol": "📚",
  "name": "Knowledge",
  "number": 19
}, {
  "symbol": "👑",
  "name": "Wealth",
  "number": 20
}, {
  "symbol": "⏳",
  "name": "Time",
  "number": 21
}, {
  "symbol": "🔮",
  "name": "Magic",
  "number": 22
}, {
  "symbol": "😃",
  "name": "Joy",
  "number": 23
}, {
  "symbol": "😩",
  "name": "Tragedy",
  "number": 24
}];
var state = {
  "dealt": {
    "domains": []
  },
  "selected": {
    "domains": []
  },
  "interaction": undefined,
  "getLastInteraction": function getLastInteraction() {
    return state.interaction && state.interaction.type || "none";
  },
  "shuffle": function shuffle() {
    state.interaction = {
      "type": "dealt"
    };
    state.dealt.domains = Object(array_shuffle__WEBPACK_IMPORTED_MODULE_1__["default"])(DIVINE_DOMAINS).slice(0, 5);
    console.log("sfx: shuffle");
    state.selected.domains = [];
  }
};

var Mount =
/*#__PURE__*/
function () {
  function Mount() {
    _classCallCheck(this, Mount);
  }

  _createClass(Mount, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        className: "Mount"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("title", null, "Deck of Divine Domains"), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(DivineDomainScreen, null));
    }
  }]);

  return Mount;
}();



var DivineDomainScreen =
/*#__PURE__*/
function () {
  function DivineDomainScreen() {
    _classCallCheck(this, DivineDomainScreen);
  }

  _createClass(DivineDomainScreen, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "DivineDomainScreen"
      }, this.sections);
    }
  }, {
    key: "sections",
    get: function get() {
      if (state.interaction == undefined) {
        return [preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(PromptSection, null), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("section", {
          class: "YourDeck"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(Deck, null))];
      }

      if (state.interaction != undefined) {
        return [preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(PromptSection, null), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("section", {
          class: "SelectedCardsSection"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("section", {
          class: "ReshuffleSection"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(ReshuffleButton, null)), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("section", {
          class: "SelectedCards"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
          class: "Slot"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(EmptyCard, null), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(Card, {
          domain: state.selected.domains[0]
        })), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
          class: "Divider"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
          class: "Ampersand"
        }, "&")), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
          class: "Slot"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(EmptyCard, null), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(Card, {
          domain: state.selected.domains[1]
        }))), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("section", {
          class: "CopyButtonSection"
        }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(CopyButton, null))), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("section", {
          class: "DealtCardsSection"
        }, state.dealt.domains.map(function (domain) {
          return preact__WEBPACK_IMPORTED_MODULE_0__["default"].h(Card, {
            domain: domain
          });
        }))];
      }
    }
  }, {
    key: "hasJustDealt",
    get: function get() {
      return state.interaction != undefined && state.interaction.type == "dealt";
    }
  }]);

  return DivineDomainScreen;
}();

var PromptSection =
/*#__PURE__*/
function () {
  function PromptSection() {
    _classCallCheck(this, PromptSection);
  }

  _createClass(PromptSection, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("section", {
        class: "PromptSection"
      }, "Your next character", preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("br", null), "will worship a god of:");
    }
  }]);

  return PromptSection;
}();

var ReshuffleButton =
/*#__PURE__*/
function () {
  function ReshuffleButton() {
    _classCallCheck(this, ReshuffleButton);
  }

  _createClass(ReshuffleButton, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "ReshuffleButton",
        onClick: this.onClick
      }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "Icon"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("i", {
        class: "fa-solid fa-shuffle"
      })));
    }
  }, {
    key: "onClick",
    value: function onClick() {
      state.shuffle();
      Object(logic_Render_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  }]);

  return ReshuffleButton;
}();

var CopyButton =
/*#__PURE__*/
function () {
  function CopyButton() {
    _classCallCheck(this, CopyButton);
  }

  _createClass(CopyButton, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "CopyButton",
        hasSelectedBoth: this.hasSelectedBoth,
        interaction: state.getLastInteraction(),
        onClick: this.onClick
      }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "Icon"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("i", {
        class: "fa-solid fa-copy"
      })), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "Response"
      }, "Copied!"));
    }
  }, {
    key: "onClick",
    get: function get() {
      var _this = this;

      return function (event) {
        if (_this.hasSelectedBoth == false) return;
        navigator.clipboard.writeText(state.selected.domains[0].symbol + "" + state.selected.domains[1].symbol);
        state.interaction = {
          "type": "copy"
        };
        Object(logic_Render_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      };
    }
  }, {
    key: "hasSelectedBoth",
    get: function get() {
      return state.selected.domains[0] != undefined && state.selected.domains[1] != undefined;
    }
  }]);

  return CopyButton;
}();

var EmptyCard =
/*#__PURE__*/
function () {
  function EmptyCard() {
    _classCallCheck(this, EmptyCard);
  }

  _createClass(EmptyCard, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "Empty Card"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "SelectPrompt"
      }, "Choose", preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("br", null), "One"));
    }
  }]);

  return EmptyCard;
}();

var Deck =
/*#__PURE__*/
function () {
  function Deck() {
    _classCallCheck(this, Deck);
  }

  _createClass(Deck, [{
    key: "render",
    value: function render() {
      return preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "Deck",
        onClick: this.onClick,
        interaction: state.getLastInteraction()
      }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "BottomCard"
      }), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "AlmostTopCard"
      }), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "TopCard"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "ReshufflePrompt"
      }, "Reshuffle?")));
    }
  }, {
    key: "onClick",
    value: function onClick() {
      state.shuffle();
      Object(logic_Render_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
    }
  }]);

  return Deck;
}();

var Card =
/*#__PURE__*/
function () {
  function Card() {
    _classCallCheck(this, Card);
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      if (this.props.domain == undefined) {
        return;
      }

      return preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "Faceup Card",
        isSelected: this.isSelected,
        onClick: this.onClick,
        interaction: state.getLastInteraction()
      }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "Content1"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "Content2"
      }, preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "Name"
      }, this.props.domain.name), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "Symbol"
      }, this.props.domain.symbol), preact__WEBPACK_IMPORTED_MODULE_0__["default"].h("div", {
        class: "Number"
      }, roman_numerals__WEBPACK_IMPORTED_MODULE_3___default.a.toRoman(this.props.domain.number)))));
    }
  }, {
    key: "isSelected",
    get: function get() {
      return state.selected.domains.includes(this.props.domain);
    }
  }, {
    key: "onClick",
    get: function get() {
      var _this2 = this;

      return function (event) {
        state.interaction = {
          "type": "select"
        };

        if (state.selected.domains.includes(_this2.props.domain)) {
          state.selected.domains[state.selected.domains.indexOf(_this2.props.domain)] = undefined;
          console.log("sfx: removed");
          Object(logic_Render_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
          return;
        }

        if (state.selected.domains.length >= 2) {
          console.log("sfx: can't do it");
        }

        if (state.selected.domains[0] == undefined) {
          state.selected.domains[0] = _this2.props.domain;
          console.log("sfx: added");
        } else if (state.selected.domains[1] == undefined) {
          state.selected.domains[1] = _this2.props.domain;
          console.log("sfx: added");
        }

        Object(logic_Render_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      };
    }
  }]);

  return Card;
}();

/***/ }),

/***/ "./source/views/Mount.view.less":
/*!**************************************!*\
  !*** ./source/views/Mount.view.less ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./Mount.view.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./source/views/Mount.view.less");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ })

/******/ });
//# sourceMappingURL=index.js.map