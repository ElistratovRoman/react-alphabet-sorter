(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define(["react"], factory);
	else if(typeof exports === 'object')
		exports["AlphabeticalSorter"] = factory(require("react"));
	else
		root["AlphabeticalSorter"] = factory(root["React"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _SorterItem = __webpack_require__(3);

	var _SorterItem2 = _interopRequireDefault(_SorterItem);

	__webpack_require__(4);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var AlphabeticalSorter = function (_Component) {
	  _inherits(AlphabeticalSorter, _Component);

	  function AlphabeticalSorter(props) {
	    _classCallCheck(this, AlphabeticalSorter);

	    var _this = _possibleConstructorReturn(this, (AlphabeticalSorter.__proto__ || Object.getPrototypeOf(AlphabeticalSorter)).call(this, props));

	    _this.state = {
	      selected: props.selected
	    };
	    return _this;
	  }

	  _createClass(AlphabeticalSorter, [{
	    key: 'componentWillReceiveProps',
	    value: function componentWillReceiveProps(nextProps) {
	      if (nextProps.selected !== this.props.selected) {
	        this.setState({
	          selected: nextProps.selected
	        });
	      }
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var chunkLength = _props.chunkLength;
	      var labelKey = _props.labelKey;
	      var navigator = _props.navigator;

	      var sorted_arr = [].concat(_toConsumableArray(this.props.asGroup)).sort(this.alphabeticalSort.bind(this));

	      var cns = {
	        items: (0, _classnames2.default)('as-items', { 'as-items--navigator': navigator })
	      };

	      if (chunkLength) sorted_arr = this.chunkify(sorted_arr, chunkLength);

	      return _react2.default.createElement(
	        'div',
	        { className: cns.items },
	        !chunkLength ? _react2.default.createElement(
	          'div',
	          { className: 'as-items__list' },
	          sorted_arr.map(function (item, index) {
	            return _this2.buildItem(item, index, _this2.isNavigator(sorted_arr, index, item));
	          })
	        ) : sorted_arr.map(function (chunk, index) {
	          return _react2.default.createElement(
	            'div',
	            { className: 'as-items__chunk', key: index },
	            chunk.map(function (item, index) {
	              return _this2.buildItem(item, index, _this2.isNavigator(chunk, index, item));
	            })
	          );
	        })
	      );
	    }
	  }, {
	    key: 'buildItem',
	    value: function buildItem(item, index, isNavigator) {
	      return _react2.default.createElement(_SorterItem2.default, {
	        itemOptions: this.props.itemOptions,
	        isNavigator: isNavigator,
	        isSelected: this.findByLabelKey(this.state.selected, item, this.props.labelKey),
	        type: this.props.type,
	        asName: this.props.asName,
	        labelKey: this.props.labelKey,
	        valueKey: this.props.valueKey,
	        handleCheck: this.handleCheck.bind(this, item),
	        item: item,
	        key: index });
	    }
	  }, {
	    key: 'isNavigator',
	    value: function isNavigator(arr, index, item) {
	      var _props2 = this.props;
	      var navigator = _props2.navigator;
	      var labelKey = _props2.labelKey;


	      if (index > 0) {
	        var currentNavigator = item[labelKey].charAt(0).toUpperCase();
	        var prevNavigator = arr[index - 1][labelKey].charAt(0).toUpperCase();

	        return navigator && currentNavigator !== prevNavigator;
	      }

	      return navigator;
	    }
	  }, {
	    key: 'chunkify',
	    value: function chunkify(arr, chunk_size) {
	      var chunks_count = Math.floor(arr.length / chunk_size);
	      var result = [];

	      for (var i = 0; i <= chunks_count; i++) {
	        var start = i * chunk_size;
	        var end = start + chunk_size;
	        var chunk = arr.slice(start, end);
	        result.push(chunk);
	      }

	      return result;
	    }
	  }, {
	    key: 'alphabeticalSort',
	    value: function alphabeticalSort(a, b) {
	      var A = a[this.props.labelKey].toLowerCase();
	      var B = b[this.props.labelKey].toLowerCase();

	      if (A < B) return -1;else if (A > B) return 1;else return 0;
	    }
	  }, {
	    key: 'handleCheck',
	    value: function handleCheck(item) {
	      var selected = [].concat(_toConsumableArray(this.state.selected));
	      var _props3 = this.props;
	      var labelKey = _props3.labelKey;
	      var type = _props3.type;
	      var handleCheck = _props3.handleCheck;


	      if (type === 'checkbox') selected = this.buildCheckboxGroup(selected, item, labelKey);else selected = [item];

	      this.setState({ selected: selected });

	      if (handleCheck) handleCheck(selected);
	    }
	  }, {
	    key: 'buildCheckboxGroup',
	    value: function buildCheckboxGroup(arr, item, key) {
	      var item_index = this.findByLabelKey(arr, item, key);

	      if (item_index !== null) arr.splice(item_index, 1);else arr.push(item);

	      return arr;
	    }
	  }, {
	    key: 'findByLabelKey',
	    value: function findByLabelKey(arr, item, labelKey) {
	      var item_index = null;

	      arr.forEach(function (selected_item, index) {
	        if (selected_item[labelKey] === item[labelKey]) return item_index = index;
	      });

	      return item_index;
	    }
	  }]);

	  return AlphabeticalSorter;
	}(_react.Component);

	AlphabeticalSorter.propTypes = {
	  asGroup: _react.PropTypes.array.isRequired,
	  selected: _react.PropTypes.array,
	  asName: _react.PropTypes.string,
	  type: _react.PropTypes.string,
	  itemOptions: _react.PropTypes.object,
	  labelKey: _react.PropTypes.string,
	  valueKey: _react.PropTypes.string,
	  navigator: _react.PropTypes.bool,
	  chunkLength: _react.PropTypes.number,
	  handleCheck: _react.PropTypes.func
	};
	AlphabeticalSorter.defaultProps = {
	  asGroup: [],
	  selected: [],
	  asName: 'sorter',
	  type: 'text',
	  itemOptions: {},
	  labelKey: 'label',
	  valueKey: 'value',
	  navigator: true
	};
	exports.default = AlphabeticalSorter;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _classnames = __webpack_require__(2);

	var _classnames2 = _interopRequireDefault(_classnames);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SorterItem = function (_Component) {
	  _inherits(SorterItem, _Component);

	  function SorterItem() {
	    _classCallCheck(this, SorterItem);

	    return _possibleConstructorReturn(this, (SorterItem.__proto__ || Object.getPrototypeOf(SorterItem)).apply(this, arguments));
	  }

	  _createClass(SorterItem, [{
	    key: 'render',
	    value: function render() {
	      var label = this.props.item[this.props.labelKey];

	      var cns = {
	        item: (0, _classnames2.default)('as-item', { 'as-item--navigator': this.props.isNavigator }, { 'as-item--selected': this.props.isSelected !== null })
	      };

	      return _react2.default.createElement(
	        'div',
	        { className: cns.item },
	        _react2.default.createElement(
	          'div',
	          { className: 'as-item__navigator' },
	          label.charAt(0).toUpperCase()
	        ),
	        _react2.default.createElement(
	          'div',
	          { className: 'as-item__content' },
	          this.buildContent()
	        )
	      );
	    }
	  }, {
	    key: 'buildContent',
	    value: function buildContent() {
	      var _props = this.props;
	      var item = _props.item;
	      var labelKey = _props.labelKey;
	      var valueKey = _props.valueKey;
	      var itemOptions = _props.itemOptions;
	      var handleCheck = _props.handleCheck;
	      var asName = _props.asName;


	      var input_options = _extends({
	        name: asName,
	        id: asName + '_' + item[valueKey],
	        value: item[valueKey],
	        onChange: handleCheck
	      }, itemOptions);

	      var link_options = _extends({
	        href: item.href,
	        onClick: handleCheck
	      }, itemOptions);

	      switch (this.props.type) {
	        case 'link':
	          return _react2.default.createElement(
	            'a',
	            link_options,
	            '' + item[labelKey]
	          );
	          break;

	        case 'radio':
	          return _react2.default.createElement(
	            'label',
	            { htmlFor: asName + '_' + item[valueKey] },
	            _react2.default.createElement('input', _extends({ type: 'radio' }, input_options)),
	            '' + item[labelKey]
	          );
	          break;

	        case 'checkbox':
	          return _react2.default.createElement(
	            'label',
	            { htmlFor: asName + '_' + item[valueKey] },
	            _react2.default.createElement('input', _extends({ type: 'checkbox' }, input_options)),
	            '' + item[labelKey]
	          );
	          break;

	        default:
	          return _react2.default.createElement(
	            'span',
	            _extends({ onClick: handleCheck }, itemOptions),
	            '' + item[labelKey]
	          );
	      }
	    }
	  }]);

	  return SorterItem;
	}(_react.Component);

	exports.default = SorterItem;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(5);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(7)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js?indentedSyntax=sass!./alphabetical_sorter.sass", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js?indentedSyntax=sass!./alphabetical_sorter.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(6)();
	// imports


	// module
	exports.push([module.id, ".as-items--navigator .as-items__list, .as-items--navigator .as-items__chunk {\n  padding-left: 20px; }\n\n.as-item {\n  position: relative;\n  margin: 4px 0; }\n  .as-item label {\n    cursor: pointer; }\n  .as-item input {\n    display: none; }\n  .as-item__navigator {\n    display: none; }\n  .as-item__content {\n    cursor: pointer;\n    display: inline-block; }\n  .as-item--navigator .as-item__navigator {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: -20px; }\n  .as-item--selected {\n    font-weight: 600; }\n", ""]);

	// exports


/***/ },
/* 6 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
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

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
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

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;