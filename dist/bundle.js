/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100vh;
}

#main{
    padding: 0;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0;



}

#changeUnits{
    align-self: flex-end;
    height: 30px;
    width: 100px;
    margin-top: 5px;
    margin-right: 5px;
    border-radius: 5px;
}

#countryh1{
    margin: 0;
    margin-top: 10px;
    padding: 0;
}

#curntWeathh2{
    margin: 0;
    padding-top: 15px;

}

#currDay {
    padding-bottom: 0;
    margin-bottom: 0;
}

#weathIcon{
    margin: 0;
    padding: 0;
}

#mainCardDiv{
    display: flex;
    gap: 20px;
    text-align: center;
}

#countryel{
    margin: 0px;
    padding: 0;
}

#locationName{
    border-radius: 10px;
    border: grey 2px solid;


}

#submit {
    border-radius: 10px;
    border: grey 2px solid;
}

#locName{
    padding-right: 8px;
}`, "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"AAAA;IACI,UAAU;IACV,SAAS;IACT,WAAW;IACX,aAAa;AACjB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;;;;AAIb;;AAEA;IACI,oBAAoB;IACpB,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;IACI,SAAS;IACT,gBAAgB;IAChB,UAAU;AACd;;AAEA;IACI,SAAS;IACT,iBAAiB;;AAErB;;AAEA;IACI,iBAAiB;IACjB,gBAAgB;AACpB;;AAEA;IACI,SAAS;IACT,UAAU;AACd;;AAEA;IACI,aAAa;IACb,SAAS;IACT,kBAAkB;AACtB;;AAEA;IACI,WAAW;IACX,UAAU;AACd;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;;;AAG1B;;AAEA;IACI,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB","sourcesContent":["body {\n    padding: 0;\n    margin: 0;\n    width: 100%;\n    height: 100vh;\n}\n\n#main{\n    padding: 0;\n    width: 100%;\n    height: 100vh;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0;\n\n\n\n}\n\n#changeUnits{\n    align-self: flex-end;\n    height: 30px;\n    width: 100px;\n    margin-top: 5px;\n    margin-right: 5px;\n    border-radius: 5px;\n}\n\n#countryh1{\n    margin: 0;\n    margin-top: 10px;\n    padding: 0;\n}\n\n#curntWeathh2{\n    margin: 0;\n    padding-top: 15px;\n\n}\n\n#currDay {\n    padding-bottom: 0;\n    margin-bottom: 0;\n}\n\n#weathIcon{\n    margin: 0;\n    padding: 0;\n}\n\n#mainCardDiv{\n    display: flex;\n    gap: 20px;\n    text-align: center;\n}\n\n#countryel{\n    margin: 0px;\n    padding: 0;\n}\n\n#locationName{\n    border-radius: 10px;\n    border: grey 2px solid;\n\n\n}\n\n#submit {\n    border-radius: 10px;\n    border: grey 2px solid;\n}\n\n#locName{\n    padding-right: 8px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/cloudBackground.jpg":
/*!*********************************!*\
  !*** ./src/cloudBackground.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "292cd182d572d8cc967d.jpg";

/***/ }),

/***/ "./src/cloudyIcon.png":
/*!****************************!*\
  !*** ./src/cloudyIcon.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "01e0896e37d61712a346.png";

/***/ }),

/***/ "./src/fogIcon.png":
/*!*************************!*\
  !*** ./src/fogIcon.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "25ee559af817bb3a1a6a.png";

/***/ }),

/***/ "./src/mistBackground.jpg":
/*!********************************!*\
  !*** ./src/mistBackground.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0e454ccbc1921e133b5e.jpg";

/***/ }),

/***/ "./src/rainBackground.jpg":
/*!********************************!*\
  !*** ./src/rainBackground.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3bc26a22c45ce8118a15.jpg";

/***/ }),

/***/ "./src/rainIcon.png":
/*!**************************!*\
  !*** ./src/rainIcon.png ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0751b3fa19bb88fcb2b3.png";

/***/ }),

/***/ "./src/sunBackground.jpg":
/*!*******************************!*\
  !*** ./src/sunBackground.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1a9e6ca9abc11447268b.jpg";

/***/ }),

/***/ "./src/sunIcon.png":
/*!*************************!*\
  !*** ./src/sunIcon.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "804a567622f4990d4962.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _sunIcon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sunIcon.png */ "./src/sunIcon.png");
/* harmony import */ var _cloudyIcon_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cloudyIcon.png */ "./src/cloudyIcon.png");
/* harmony import */ var _rainIcon_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rainIcon.png */ "./src/rainIcon.png");
/* harmony import */ var _fogIcon_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fogIcon.png */ "./src/fogIcon.png");
/* harmony import */ var _cloudBackground_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cloudBackground.jpg */ "./src/cloudBackground.jpg");
/* harmony import */ var _sunBackground_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sunBackground.jpg */ "./src/sunBackground.jpg");
/* harmony import */ var _rainBackground_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./rainBackground.jpg */ "./src/rainBackground.jpg");
/* harmony import */ var _mistBackground_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mistBackground.jpg */ "./src/mistBackground.jpg");










const main = document.getElementById('main');

//Creates the form to get a city
function createForm() {
let form = document.createElement('form');
    form.id = "locationForm";
    let label = document.createElement('label');
    label.id = 'locName';
    label.for = 'locationName';
    label.textContent = 'Enter the name of a city here';
    let input = document.createElement('input');
    input.type = 'text';
    input.id = 'locationName';
    input.name = 'locationName';
    let submit = document.createElement('input');
    submit.id = 'submit';
    submit.type = 'submit';
    submit.value = "Submit";
    
    main.appendChild(form);
    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(submit);
    
    form.addEventListener('submit', function(e){
        e.preventDefault();
        generalWeatherInfo(input.value, input);
        input.value = '';
    });

}

//Creates a div to hold all the weather cards
function createCardDiv(){
    const mainCardDiv = document.createElement('div')
    mainCardDiv.id = 'mainCardDiv';
    main.appendChild(mainCardDiv);
}

//Creates the cards that display the weather cards below main content
function createWeekCard(day, condition, temp_c, temp_f){

    let cardDiv = document.createElement('div');
    cardDiv.id = 'cardDiv';
    let dayOfWeek = document.createElement('h2');
    let daysCondition = document.createElement('h3');
    let daysTemp = document.createElement('h3');
    let unitChange = document.getElementById('changeUnits');

    dayOfWeek.textContent = day;
    daysCondition.textContent = condition;

    let celcius = true;
    unitChange.addEventListener('click', () => {
        if (celcius) {
        daysTemp.textContent = `${temp_f} °F`;
        celcius = false;
        }
        else{
            daysTemp.textContent = `${temp_c} °C`;
            celcius = true;

        }

    })
    daysTemp.textContent = `${temp_c} °C`;

    document.getElementById('mainCardDiv').appendChild(cardDiv);
    cardDiv.appendChild(dayOfWeek);
    cardDiv.appendChild(daysCondition);
    addWeatherIcon(condition, cardDiv);
    cardDiv.appendChild(daysTemp);

}

//Adds a weather Icon depending on the weather of a card
function addWeatherIcon(weather, div) {
    if (weather.indexOf('cloudy') >= 0 || weather.indexOf('Overcast') >= 0 || weather.indexOf('Cloudy') >= 0) {
        let icon = document.createElement('img');
        icon.src = _cloudyIcon_png__WEBPACK_IMPORTED_MODULE_2__;
        icon.id = 'icon';
        div.appendChild(icon);


    }
    else if (weather.indexOf('rain') >= 0) {
        let icon = document.createElement('img');
        icon.src = _rainIcon_png__WEBPACK_IMPORTED_MODULE_3__;
        icon.id = 'icon';
        div.appendChild(icon);
        

    }
    else if (weather.indexOf('Sunny') >= 0 || weather.indexOf('Clear') >= 0) {
        let icon = document.createElement('img');
        icon.src = _sunIcon_png__WEBPACK_IMPORTED_MODULE_1__;
        icon.id = 'icon';
        div.appendChild(icon);

    }

    else if (weather.indexOf('Misty') >= 0){
        let icon = document.createElement('img');
        icon.src = _fogIcon_png__WEBPACK_IMPORTED_MODULE_4__;
        icon.id = 'icon';
        div.appendChild(icon);
        
    }

}

//Converts the getDay function to a String literal day
function convertNumToDay(num){
    if (num == 1){
        return 'Monday'
    }
    else if (num == 2){
        return 'Tuesday'
    }
    else if (num == 3){
        return 'Wednesday'
    }
    else if (num == 4){
        return 'Thursday'
    }
    else if (num == 5){
        return 'Friday'
    }
    else if (num == 6){
        return 'Saturday'
    }
    else if (num == 0){
        return 'Sunday'
    }
    }

// Creates the weekly weather forecast for the next 7 days and displays it
async function createWeeklyWeatherForecast(location){
    try{
        const getWeeklyForecast = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=9397db559046499aa78144721231411&q=${location}&days=8`)
        const forecast = await getWeeklyForecast.json();
        console.log(forecast.forecast);
        for (let i = 1; i <8; i++){
            let date = new Date(forecast.forecast.forecastday[i].date); 
            createWeekCard(convertNumToDay(date.getDay()), forecast.forecast.forecastday[i].day.condition.text, forecast.forecast.forecastday[i].day.maxtemp_c,  forecast.forecast.forecastday[i].day.maxtemp_f)
        }
    }
    catch(err){
        console.log(err);
    }
}

//Removes the current forecast for when the weather location is changed
function removeCurrentForecast(){
    let remCardDiv = document.getElementById('cardDiv');
    remCardDiv.remove();

}

// Creates the weather information for the day and location currently selected
function createMainContent() {
    const changeUnits = document.createElement('button');
    changeUnits.id = 'changeUnits';
    changeUnits.textContent = "Change units";
    const countryh1 = document.createElement('h1');
    countryh1.id = 'countryh1';
    const curntWeath = document.createElement('h2');
    curntWeath.id = 'curntWeathh2';
    const weathIcon = document.createElement('h2');
    weathIcon.id = 'weathIcon';
    const curDay = document.createElement('h2');
    curDay.id = 'currDay';
    const locTimeh2 = document.createElement('h2');
    locTimeh2.id = 'locTimeh2';
    const temp_ch3 = document.createElement('h2');
    temp_ch3.id = 'temp_ch3';

    main.append(changeUnits);
    main.appendChild(countryh1);
    main.appendChild(curntWeath);
    main.appendChild(weathIcon);
    main.appendChild(curDay);
    main.appendChild(locTimeh2);
    main.appendChild(temp_ch3);

    return {countryh1, locTimeh2, temp_ch3}

}

// Gets the initial weather info which is set by default to London
async function initialWeatherInfo(){
    try{
        const getWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=9397db559046499aa78144721231411&q=london`);
        const weather = await getWeather.json();

        displayMainContent(weather.location.country,
            weather.location.name,
            weather.current.condition.text,
            weather.location.localtime,
            weather.current.temp_c,
            weather.current.temp_f);
        createWeeklyWeatherForecast('london');

        }
    catch(err){
        console.log(err);
    } 

}

// Checks the current weather and changes the background accordingly
function checkAndDisplayWeatherBackground(weather){
    if (weather.indexOf('rain') >= 0){
        main.style.backgroundImage = `url(${_rainBackground_jpg__WEBPACK_IMPORTED_MODULE_7__})`;
        main.style.color = 'white';


    }
    else if (weather.indexOf('cloudy') >= 0 || weather.indexOf('Overcast') >= 0){
        main.style.backgroundImage = `url(${_cloudBackground_jpg__WEBPACK_IMPORTED_MODULE_5__})`;

        main.style.color = 'white';

    }
    else if (weather.indexOf('Sunny') >= 0 || weather.indexOf('Clear') >= 0){
        main.style.backgroundImage = `url(${_sunBackground_jpg__WEBPACK_IMPORTED_MODULE_6__})`;
        main.style.color = 'black';

    }
    else if (weather.indexOf('Misty') >= 0){
        main.style.backgroundImage = `url(${_mistBackground_jpg__WEBPACK_IMPORTED_MODULE_8__})`;
        main.style.color = 'black';

    }
}

function convertDate(date){
    const dateArr = date.split(' ');
    console.log(dateArr[0]);
    console.log(dateArr[1]);

    let splitTime = dateArr[1].split(':');
    let firstHalf = splitTime[0];
    let secondHalf = splitTime[1]
    if (Number(firstHalf) >= 13){
        firstHalf = firstHalf - 12;
        secondHalf = `${secondHalf}pm`;
    }
    else if (Number(firstHalf >= 12)){
        secondHalf = `${secondHalf}pm`;

    }
    else{
        secondHalf = `${secondHalf}am`
    }

    let dMY = dateArr[0];
    let dMYArr = dMY.split('-');
    const output = `${firstHalf}:${secondHalf} ${dMYArr[2]}-${dMYArr[1]}-${dMYArr[0]}`


    return output;


    

}

// displays the main content of the current day and weather on the page
function displayMainContent(country, locName, currentWeath, locTime, temp_c, temp_f){

    let countryel = document.getElementById('countryh1');
    let weathIconEl = document.getElementById('weathIcon');
    let locTimeel = document.getElementById('locTimeh2');
    let currentWeathel = document.getElementById('curntWeathh2');
    let currentDay = document.getElementById('currDay');
    let temp_cel = document.getElementById('temp_ch3');
    let icon = document.getElementById('icon');
    let unitChange = document.getElementById('changeUnits');

    countryel.textContent = `${locName}, ${country}`;
    checkAndDisplayWeatherBackground(currentWeath);
    currentWeathel.textContent = currentWeath;
    if (icon){
        icon.remove();
        addWeatherIcon(currentWeath, weathIconEl);
    }
    else {
    addWeatherIcon(currentWeath, weathIconEl);
    }
    locTimeel.textContent = convertDate(locTime);;
    let mainCDate = new Date(locTime);
    let convertedDay = convertNumToDay(mainCDate.getDay());
    console.log(convertedDay); 
    currentDay.textContent = convertedDay;
    let celcius = true;
    unitChange.addEventListener('click', () => {
        if (celcius) {
        temp_cel.textContent = `Temp: ${temp_f} °F`;
        celcius = false;
        }
        else{
            temp_cel.textContent = `Temp: ${temp_c} °C`;
            celcius = true

        }

    })
    temp_cel.textContent = `Temp: ${temp_c} °C`;

}
    
// gets the current weather
async function getWeather(){
    try{
        const getWeather = await fetch('http://api.weatherapi.com/v1/current.json?key=9397db559046499aa78144721231411&q=london')
        const weather = await getWeather.json();
        console.log(weather);
    }
    catch(err){
        console.log(err);
    }
}

// Takes a location and then gives you information on todays weather and then the next 7 days of weather.
async function generalWeatherInfo(location, submit) {
    try{
        const getWeather = await fetch(`http://api.weatherapi.com/v1/current.json?key=9397db559046499aa78144721231411&q=${location}`);
        const weather = await getWeather.json();
        displayMainContent(weather.location.country,
                            weather.location.name,
                            weather.current.condition.text,
                            weather.location.localtime,
                            weather.current.temp_c,
                            weather.current.temp_f);
        for (i=1; i< 8; i++){
        removeCurrentForecast();
        }
        createWeeklyWeatherForecast(location);

        console.log(weather.location.country);
        console.log(weather.location.name);
        console.log(weather.location.localtime);
        console.log(`${weather.current.temp_c} C`);
        console.log(`${weather.current.temp_f} F`);

        }
    catch(err){
        console.log(err);
    } 
}
createMainContent();
initialWeatherInfo();
createForm();
createCardDiv();



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxzQkFBc0IsVUFBVSxHQUFHLFlBQVksRUFBRSxVQUFVLEdBQUcsVUFBVSxHQUFHLFVBQVU7OztBQUdyRjs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLCtCQUErQixRQUFRLElBQUksUUFBUTtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLFFBQVE7QUFDcEQ7O0FBRUE7O0FBRUEsS0FBSztBQUNMLG9DQUFvQyxRQUFROztBQUU1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSwwSEFBMEgsU0FBUztBQUNuSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixNQUFNO0FBQ3hCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0JBQXdCO0FBQy9DLHVCQUF1Qix3QkFBd0I7O0FBRS9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGVzLmNzcz80NGIyIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSB7XG4gICAgcGFkZGluZzogMDtcbiAgICBtYXJnaW46IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbn1cblxuI21haW57XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMHZoO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMDtcblxuXG5cbn1cblxuI2NoYW5nZVVuaXRze1xuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgIGhlaWdodDogMzBweDtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuI2NvdW50cnloMXtcbiAgICBtYXJnaW46IDA7XG4gICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4jY3VybnRXZWF0aGgye1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nLXRvcDogMTVweDtcblxufVxuXG4jY3VyckRheSB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMDtcbn1cblxuI3dlYXRoSWNvbntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbn1cblxuI21haW5DYXJkRGl2e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI2NvdW50cnllbHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4jbG9jYXRpb25OYW1le1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiBncmV5IDJweCBzb2xpZDtcblxuXG59XG5cbiNzdWJtaXQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm9yZGVyOiBncmV5IDJweCBzb2xpZDtcbn1cblxuI2xvY05hbWV7XG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxVQUFVO0lBQ1YsU0FBUztJQUNULFdBQVc7SUFDWCxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLFdBQVc7SUFDWCxhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsU0FBUzs7OztBQUliOztBQUVBO0lBQ0ksb0JBQW9CO0lBQ3BCLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDs7QUFFQTtJQUNJLFNBQVM7SUFDVCxpQkFBaUI7O0FBRXJCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsU0FBUztJQUNULGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCOzs7QUFHMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4jbWFpbntcXG4gICAgcGFkZGluZzogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwdmg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbjogMDtcXG5cXG5cXG5cXG59XFxuXFxuI2NoYW5nZVVuaXRze1xcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICB3aWR0aDogMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2NvdW50cnloMXtcXG4gICAgbWFyZ2luOiAwO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jY3VybnRXZWF0aGgye1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xcblxcbn1cXG5cXG4jY3VyckRheSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4jd2VhdGhJY29ue1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcbiNtYWluQ2FyZERpdntcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNjb3VudHJ5ZWx7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4jbG9jYXRpb25OYW1le1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBib3JkZXI6IGdyZXkgMnB4IHNvbGlkO1xcblxcblxcbn1cXG5cXG4jc3VibWl0IHtcXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gICAgYm9yZGVyOiBncmV5IDJweCBzb2xpZDtcXG59XFxuXFxuI2xvY05hbWV7XFxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQgU3VuSSBmcm9tICcuL3N1bkljb24ucG5nJztcbmltcG9ydCBjbG91ZHlJIGZyb20gJy4vY2xvdWR5SWNvbi5wbmcnO1xuaW1wb3J0IHJhaW5JIGZyb20gJy4vcmFpbkljb24ucG5nJztcbmltcG9ydCBmb2dJIGZyb20gJy4vZm9nSWNvbi5wbmcnO1xuaW1wb3J0IGNsb3VkQmFjayBmcm9tICcuL2Nsb3VkQmFja2dyb3VuZC5qcGcnO1xuaW1wb3J0IHN1bkJhY2sgZnJvbSAnLi9zdW5CYWNrZ3JvdW5kLmpwZyc7XG5pbXBvcnQgcmFpbkJhY2sgZnJvbSAnLi9yYWluQmFja2dyb3VuZC5qcGcnO1xuaW1wb3J0IG1pc3RCYWNrIGZyb20gJy4vbWlzdEJhY2tncm91bmQuanBnJztcblxuY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluJyk7XG5cbi8vQ3JlYXRlcyB0aGUgZm9ybSB0byBnZXQgYSBjaXR5XG5mdW5jdGlvbiBjcmVhdGVGb3JtKCkge1xubGV0IGZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgZm9ybS5pZCA9IFwibG9jYXRpb25Gb3JtXCI7XG4gICAgbGV0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBsYWJlbC5pZCA9ICdsb2NOYW1lJztcbiAgICBsYWJlbC5mb3IgPSAnbG9jYXRpb25OYW1lJztcbiAgICBsYWJlbC50ZXh0Q29udGVudCA9ICdFbnRlciB0aGUgbmFtZSBvZiBhIGNpdHkgaGVyZSc7XG4gICAgbGV0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBpbnB1dC50eXBlID0gJ3RleHQnO1xuICAgIGlucHV0LmlkID0gJ2xvY2F0aW9uTmFtZSc7XG4gICAgaW5wdXQubmFtZSA9ICdsb2NhdGlvbk5hbWUnO1xuICAgIGxldCBzdWJtaXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIHN1Ym1pdC5pZCA9ICdzdWJtaXQnO1xuICAgIHN1Ym1pdC50eXBlID0gJ3N1Ym1pdCc7XG4gICAgc3VibWl0LnZhbHVlID0gXCJTdWJtaXRcIjtcbiAgICBcbiAgICBtYWluLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0KTtcbiAgICBcbiAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGdlbmVyYWxXZWF0aGVySW5mbyhpbnB1dC52YWx1ZSwgaW5wdXQpO1xuICAgICAgICBpbnB1dC52YWx1ZSA9ICcnO1xuICAgIH0pO1xuXG59XG5cbi8vQ3JlYXRlcyBhIGRpdiB0byBob2xkIGFsbCB0aGUgd2VhdGhlciBjYXJkc1xuZnVuY3Rpb24gY3JlYXRlQ2FyZERpdigpe1xuICAgIGNvbnN0IG1haW5DYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBtYWluQ2FyZERpdi5pZCA9ICdtYWluQ2FyZERpdic7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChtYWluQ2FyZERpdik7XG59XG5cbi8vQ3JlYXRlcyB0aGUgY2FyZHMgdGhhdCBkaXNwbGF5IHRoZSB3ZWF0aGVyIGNhcmRzIGJlbG93IG1haW4gY29udGVudFxuZnVuY3Rpb24gY3JlYXRlV2Vla0NhcmQoZGF5LCBjb25kaXRpb24sIHRlbXBfYywgdGVtcF9mKXtcblxuICAgIGxldCBjYXJkRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZERpdi5pZCA9ICdjYXJkRGl2JztcbiAgICBsZXQgZGF5T2ZXZWVrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsZXQgZGF5c0NvbmRpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgbGV0IGRheXNUZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBsZXQgdW5pdENoYW5nZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjaGFuZ2VVbml0cycpO1xuXG4gICAgZGF5T2ZXZWVrLnRleHRDb250ZW50ID0gZGF5O1xuICAgIGRheXNDb25kaXRpb24udGV4dENvbnRlbnQgPSBjb25kaXRpb247XG5cbiAgICBsZXQgY2VsY2l1cyA9IHRydWU7XG4gICAgdW5pdENoYW5nZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgaWYgKGNlbGNpdXMpIHtcbiAgICAgICAgZGF5c1RlbXAudGV4dENvbnRlbnQgPSBgJHt0ZW1wX2Z9IMKwRmA7XG4gICAgICAgIGNlbGNpdXMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgZGF5c1RlbXAudGV4dENvbnRlbnQgPSBgJHt0ZW1wX2N9IMKwQ2A7XG4gICAgICAgICAgICBjZWxjaXVzID0gdHJ1ZTtcblxuICAgICAgICB9XG5cbiAgICB9KVxuICAgIGRheXNUZW1wLnRleHRDb250ZW50ID0gYCR7dGVtcF9jfSDCsENgO1xuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5DYXJkRGl2JykuYXBwZW5kQ2hpbGQoY2FyZERpdik7XG4gICAgY2FyZERpdi5hcHBlbmRDaGlsZChkYXlPZldlZWspO1xuICAgIGNhcmREaXYuYXBwZW5kQ2hpbGQoZGF5c0NvbmRpdGlvbik7XG4gICAgYWRkV2VhdGhlckljb24oY29uZGl0aW9uLCBjYXJkRGl2KTtcbiAgICBjYXJkRGl2LmFwcGVuZENoaWxkKGRheXNUZW1wKTtcblxufVxuXG4vL0FkZHMgYSB3ZWF0aGVyIEljb24gZGVwZW5kaW5nIG9uIHRoZSB3ZWF0aGVyIG9mIGEgY2FyZFxuZnVuY3Rpb24gYWRkV2VhdGhlckljb24od2VhdGhlciwgZGl2KSB7XG4gICAgaWYgKHdlYXRoZXIuaW5kZXhPZignY2xvdWR5JykgPj0gMCB8fCB3ZWF0aGVyLmluZGV4T2YoJ092ZXJjYXN0JykgPj0gMCB8fCB3ZWF0aGVyLmluZGV4T2YoJ0Nsb3VkeScpID49IDApIHtcbiAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWNvbi5zcmMgPSBjbG91ZHlJO1xuICAgICAgICBpY29uLmlkID0gJ2ljb24nO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaWNvbik7XG5cblxuICAgIH1cbiAgICBlbHNlIGlmICh3ZWF0aGVyLmluZGV4T2YoJ3JhaW4nKSA+PSAwKSB7XG4gICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGljb24uc3JjID0gcmFpbkk7XG4gICAgICAgIGljb24uaWQgPSAnaWNvbic7XG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgXG5cbiAgICB9XG4gICAgZWxzZSBpZiAod2VhdGhlci5pbmRleE9mKCdTdW5ueScpID49IDAgfHwgd2VhdGhlci5pbmRleE9mKCdDbGVhcicpID49IDApIHtcbiAgICAgICAgbGV0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICAgICAgaWNvbi5zcmMgPSBTdW5JO1xuICAgICAgICBpY29uLmlkID0gJ2ljb24nO1xuICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICB9XG5cbiAgICBlbHNlIGlmICh3ZWF0aGVyLmluZGV4T2YoJ01pc3R5JykgPj0gMCl7XG4gICAgICAgIGxldCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIGljb24uc3JjID0gZm9nSTtcbiAgICAgICAgaWNvbi5pZCA9ICdpY29uJztcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKGljb24pO1xuICAgICAgICBcbiAgICB9XG5cbn1cblxuLy9Db252ZXJ0cyB0aGUgZ2V0RGF5IGZ1bmN0aW9uIHRvIGEgU3RyaW5nIGxpdGVyYWwgZGF5XG5mdW5jdGlvbiBjb252ZXJ0TnVtVG9EYXkobnVtKXtcbiAgICBpZiAobnVtID09IDEpe1xuICAgICAgICByZXR1cm4gJ01vbmRheSdcbiAgICB9XG4gICAgZWxzZSBpZiAobnVtID09IDIpe1xuICAgICAgICByZXR1cm4gJ1R1ZXNkYXknXG4gICAgfVxuICAgIGVsc2UgaWYgKG51bSA9PSAzKXtcbiAgICAgICAgcmV0dXJuICdXZWRuZXNkYXknXG4gICAgfVxuICAgIGVsc2UgaWYgKG51bSA9PSA0KXtcbiAgICAgICAgcmV0dXJuICdUaHVyc2RheSdcbiAgICB9XG4gICAgZWxzZSBpZiAobnVtID09IDUpe1xuICAgICAgICByZXR1cm4gJ0ZyaWRheSdcbiAgICB9XG4gICAgZWxzZSBpZiAobnVtID09IDYpe1xuICAgICAgICByZXR1cm4gJ1NhdHVyZGF5J1xuICAgIH1cbiAgICBlbHNlIGlmIChudW0gPT0gMCl7XG4gICAgICAgIHJldHVybiAnU3VuZGF5J1xuICAgIH1cbiAgICB9XG5cbi8vIENyZWF0ZXMgdGhlIHdlZWtseSB3ZWF0aGVyIGZvcmVjYXN0IGZvciB0aGUgbmV4dCA3IGRheXMgYW5kIGRpc3BsYXlzIGl0XG5hc3luYyBmdW5jdGlvbiBjcmVhdGVXZWVrbHlXZWF0aGVyRm9yZWNhc3QobG9jYXRpb24pe1xuICAgIHRyeXtcbiAgICAgICAgY29uc3QgZ2V0V2Vla2x5Rm9yZWNhc3QgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9mb3JlY2FzdC5qc29uP2tleT05Mzk3ZGI1NTkwNDY0OTlhYTc4MTQ0NzIxMjMxNDExJnE9JHtsb2NhdGlvbn0mZGF5cz04YClcbiAgICAgICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBnZXRXZWVrbHlGb3JlY2FzdC5qc29uKCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGZvcmVjYXN0LmZvcmVjYXN0KTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPDg7IGkrKyl7XG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKGZvcmVjYXN0LmZvcmVjYXN0LmZvcmVjYXN0ZGF5W2ldLmRhdGUpOyBcbiAgICAgICAgICAgIGNyZWF0ZVdlZWtDYXJkKGNvbnZlcnROdW1Ub0RheShkYXRlLmdldERheSgpKSwgZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5LmNvbmRpdGlvbi50ZXh0LCBmb3JlY2FzdC5mb3JlY2FzdC5mb3JlY2FzdGRheVtpXS5kYXkubWF4dGVtcF9jLCAgZm9yZWNhc3QuZm9yZWNhc3QuZm9yZWNhc3RkYXlbaV0uZGF5Lm1heHRlbXBfZilcbiAgICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbn1cblxuLy9SZW1vdmVzIHRoZSBjdXJyZW50IGZvcmVjYXN0IGZvciB3aGVuIHRoZSB3ZWF0aGVyIGxvY2F0aW9uIGlzIGNoYW5nZWRcbmZ1bmN0aW9uIHJlbW92ZUN1cnJlbnRGb3JlY2FzdCgpe1xuICAgIGxldCByZW1DYXJkRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcmREaXYnKTtcbiAgICByZW1DYXJkRGl2LnJlbW92ZSgpO1xuXG59XG5cbi8vIENyZWF0ZXMgdGhlIHdlYXRoZXIgaW5mb3JtYXRpb24gZm9yIHRoZSBkYXkgYW5kIGxvY2F0aW9uIGN1cnJlbnRseSBzZWxlY3RlZFxuZnVuY3Rpb24gY3JlYXRlTWFpbkNvbnRlbnQoKSB7XG4gICAgY29uc3QgY2hhbmdlVW5pdHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBjaGFuZ2VVbml0cy5pZCA9ICdjaGFuZ2VVbml0cyc7XG4gICAgY2hhbmdlVW5pdHMudGV4dENvbnRlbnQgPSBcIkNoYW5nZSB1bml0c1wiO1xuICAgIGNvbnN0IGNvdW50cnloMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gICAgY291bnRyeWgxLmlkID0gJ2NvdW50cnloMSc7XG4gICAgY29uc3QgY3VybnRXZWF0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgY3VybnRXZWF0aC5pZCA9ICdjdXJudFdlYXRoaDInO1xuICAgIGNvbnN0IHdlYXRoSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgd2VhdGhJY29uLmlkID0gJ3dlYXRoSWNvbic7XG4gICAgY29uc3QgY3VyRGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBjdXJEYXkuaWQgPSAnY3VyckRheSc7XG4gICAgY29uc3QgbG9jVGltZWgyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBsb2NUaW1laDIuaWQgPSAnbG9jVGltZWgyJztcbiAgICBjb25zdCB0ZW1wX2NoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgdGVtcF9jaDMuaWQgPSAndGVtcF9jaDMnO1xuXG4gICAgbWFpbi5hcHBlbmQoY2hhbmdlVW5pdHMpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQoY291bnRyeWgxKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGN1cm50V2VhdGgpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQod2VhdGhJY29uKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGN1ckRheSk7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChsb2NUaW1laDIpO1xuICAgIG1haW4uYXBwZW5kQ2hpbGQodGVtcF9jaDMpO1xuXG4gICAgcmV0dXJuIHtjb3VudHJ5aDEsIGxvY1RpbWVoMiwgdGVtcF9jaDN9XG5cbn1cblxuLy8gR2V0cyB0aGUgaW5pdGlhbCB3ZWF0aGVyIGluZm8gd2hpY2ggaXMgc2V0IGJ5IGRlZmF1bHQgdG8gTG9uZG9uXG5hc3luYyBmdW5jdGlvbiBpbml0aWFsV2VhdGhlckluZm8oKXtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IGdldFdlYXRoZXIgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTkzOTdkYjU1OTA0NjQ5OWFhNzgxNDQ3MjEyMzE0MTEmcT1sb25kb25gKTtcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGdldFdlYXRoZXIuanNvbigpO1xuXG4gICAgICAgIGRpc3BsYXlNYWluQ29udGVudCh3ZWF0aGVyLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgICAgICB3ZWF0aGVyLmxvY2F0aW9uLm5hbWUsXG4gICAgICAgICAgICB3ZWF0aGVyLmN1cnJlbnQuY29uZGl0aW9uLnRleHQsXG4gICAgICAgICAgICB3ZWF0aGVyLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgICAgICAgIHdlYXRoZXIuY3VycmVudC50ZW1wX2MsXG4gICAgICAgICAgICB3ZWF0aGVyLmN1cnJlbnQudGVtcF9mKTtcbiAgICAgICAgY3JlYXRlV2Vla2x5V2VhdGhlckZvcmVjYXN0KCdsb25kb24nKTtcblxuICAgICAgICB9XG4gICAgY2F0Y2goZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9IFxuXG59XG5cbi8vIENoZWNrcyB0aGUgY3VycmVudCB3ZWF0aGVyIGFuZCBjaGFuZ2VzIHRoZSBiYWNrZ3JvdW5kIGFjY29yZGluZ2x5XG5mdW5jdGlvbiBjaGVja0FuZERpc3BsYXlXZWF0aGVyQmFja2dyb3VuZCh3ZWF0aGVyKXtcbiAgICBpZiAod2VhdGhlci5pbmRleE9mKCdyYWluJykgPj0gMCl7XG4gICAgICAgIG1haW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3JhaW5CYWNrfSlgO1xuICAgICAgICBtYWluLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcblxuXG4gICAgfVxuICAgIGVsc2UgaWYgKHdlYXRoZXIuaW5kZXhPZignY2xvdWR5JykgPj0gMCB8fCB3ZWF0aGVyLmluZGV4T2YoJ092ZXJjYXN0JykgPj0gMCl7XG4gICAgICAgIG1haW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke2Nsb3VkQmFja30pYDtcblxuICAgICAgICBtYWluLnN0eWxlLmNvbG9yID0gJ3doaXRlJztcblxuICAgIH1cbiAgICBlbHNlIGlmICh3ZWF0aGVyLmluZGV4T2YoJ1N1bm55JykgPj0gMCB8fCB3ZWF0aGVyLmluZGV4T2YoJ0NsZWFyJykgPj0gMCl7XG4gICAgICAgIG1haW4uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3N1bkJhY2t9KWA7XG4gICAgICAgIG1haW4uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuXG4gICAgfVxuICAgIGVsc2UgaWYgKHdlYXRoZXIuaW5kZXhPZignTWlzdHknKSA+PSAwKXtcbiAgICAgICAgbWFpbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCR7bWlzdEJhY2t9KWA7XG4gICAgICAgIG1haW4uc3R5bGUuY29sb3IgPSAnYmxhY2snO1xuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjb252ZXJ0RGF0ZShkYXRlKXtcbiAgICBjb25zdCBkYXRlQXJyID0gZGF0ZS5zcGxpdCgnICcpO1xuICAgIGNvbnNvbGUubG9nKGRhdGVBcnJbMF0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGVBcnJbMV0pO1xuXG4gICAgbGV0IHNwbGl0VGltZSA9IGRhdGVBcnJbMV0uc3BsaXQoJzonKTtcbiAgICBsZXQgZmlyc3RIYWxmID0gc3BsaXRUaW1lWzBdO1xuICAgIGxldCBzZWNvbmRIYWxmID0gc3BsaXRUaW1lWzFdXG4gICAgaWYgKE51bWJlcihmaXJzdEhhbGYpID49IDEzKXtcbiAgICAgICAgZmlyc3RIYWxmID0gZmlyc3RIYWxmIC0gMTI7XG4gICAgICAgIHNlY29uZEhhbGYgPSBgJHtzZWNvbmRIYWxmfXBtYDtcbiAgICB9XG4gICAgZWxzZSBpZiAoTnVtYmVyKGZpcnN0SGFsZiA+PSAxMikpe1xuICAgICAgICBzZWNvbmRIYWxmID0gYCR7c2Vjb25kSGFsZn1wbWA7XG5cbiAgICB9XG4gICAgZWxzZXtcbiAgICAgICAgc2Vjb25kSGFsZiA9IGAke3NlY29uZEhhbGZ9YW1gXG4gICAgfVxuXG4gICAgbGV0IGRNWSA9IGRhdGVBcnJbMF07XG4gICAgbGV0IGRNWUFyciA9IGRNWS5zcGxpdCgnLScpO1xuICAgIGNvbnN0IG91dHB1dCA9IGAke2ZpcnN0SGFsZn06JHtzZWNvbmRIYWxmfSAke2RNWUFyclsyXX0tJHtkTVlBcnJbMV19LSR7ZE1ZQXJyWzBdfWBcblxuXG4gICAgcmV0dXJuIG91dHB1dDtcblxuXG4gICAgXG5cbn1cblxuLy8gZGlzcGxheXMgdGhlIG1haW4gY29udGVudCBvZiB0aGUgY3VycmVudCBkYXkgYW5kIHdlYXRoZXIgb24gdGhlIHBhZ2VcbmZ1bmN0aW9uIGRpc3BsYXlNYWluQ29udGVudChjb3VudHJ5LCBsb2NOYW1lLCBjdXJyZW50V2VhdGgsIGxvY1RpbWUsIHRlbXBfYywgdGVtcF9mKXtcblxuICAgIGxldCBjb3VudHJ5ZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291bnRyeWgxJyk7XG4gICAgbGV0IHdlYXRoSWNvbkVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYXRoSWNvbicpO1xuICAgIGxldCBsb2NUaW1lZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9jVGltZWgyJyk7XG4gICAgbGV0IGN1cnJlbnRXZWF0aGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cm50V2VhdGhoMicpO1xuICAgIGxldCBjdXJyZW50RGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1cnJEYXknKTtcbiAgICBsZXQgdGVtcF9jZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGVtcF9jaDMnKTtcbiAgICBsZXQgaWNvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpY29uJyk7XG4gICAgbGV0IHVuaXRDaGFuZ2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hhbmdlVW5pdHMnKTtcblxuICAgIGNvdW50cnllbC50ZXh0Q29udGVudCA9IGAke2xvY05hbWV9LCAke2NvdW50cnl9YDtcbiAgICBjaGVja0FuZERpc3BsYXlXZWF0aGVyQmFja2dyb3VuZChjdXJyZW50V2VhdGgpO1xuICAgIGN1cnJlbnRXZWF0aGVsLnRleHRDb250ZW50ID0gY3VycmVudFdlYXRoO1xuICAgIGlmIChpY29uKXtcbiAgICAgICAgaWNvbi5yZW1vdmUoKTtcbiAgICAgICAgYWRkV2VhdGhlckljb24oY3VycmVudFdlYXRoLCB3ZWF0aEljb25FbCk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgIGFkZFdlYXRoZXJJY29uKGN1cnJlbnRXZWF0aCwgd2VhdGhJY29uRWwpO1xuICAgIH1cbiAgICBsb2NUaW1lZWwudGV4dENvbnRlbnQgPSBjb252ZXJ0RGF0ZShsb2NUaW1lKTs7XG4gICAgbGV0IG1haW5DRGF0ZSA9IG5ldyBEYXRlKGxvY1RpbWUpO1xuICAgIGxldCBjb252ZXJ0ZWREYXkgPSBjb252ZXJ0TnVtVG9EYXkobWFpbkNEYXRlLmdldERheSgpKTtcbiAgICBjb25zb2xlLmxvZyhjb252ZXJ0ZWREYXkpOyBcbiAgICBjdXJyZW50RGF5LnRleHRDb250ZW50ID0gY29udmVydGVkRGF5O1xuICAgIGxldCBjZWxjaXVzID0gdHJ1ZTtcbiAgICB1bml0Q2hhbmdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBpZiAoY2VsY2l1cykge1xuICAgICAgICB0ZW1wX2NlbC50ZXh0Q29udGVudCA9IGBUZW1wOiAke3RlbXBfZn0gwrBGYDtcbiAgICAgICAgY2VsY2l1cyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICB0ZW1wX2NlbC50ZXh0Q29udGVudCA9IGBUZW1wOiAke3RlbXBfY30gwrBDYDtcbiAgICAgICAgICAgIGNlbGNpdXMgPSB0cnVlXG5cbiAgICAgICAgfVxuXG4gICAgfSlcbiAgICB0ZW1wX2NlbC50ZXh0Q29udGVudCA9IGBUZW1wOiAke3RlbXBfY30gwrBDYDtcblxufVxuICAgIFxuLy8gZ2V0cyB0aGUgY3VycmVudCB3ZWF0aGVyXG5hc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKCl7XG4gICAgdHJ5e1xuICAgICAgICBjb25zdCBnZXRXZWF0aGVyID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9hcGkud2VhdGhlcmFwaS5jb20vdjEvY3VycmVudC5qc29uP2tleT05Mzk3ZGI1NTkwNDY0OTlhYTc4MTQ0NzIxMjMxNDExJnE9bG9uZG9uJylcbiAgICAgICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGdldFdlYXRoZXIuanNvbigpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyKTtcbiAgICB9XG4gICAgY2F0Y2goZXJyKXtcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG59XG5cbi8vIFRha2VzIGEgbG9jYXRpb24gYW5kIHRoZW4gZ2l2ZXMgeW91IGluZm9ybWF0aW9uIG9uIHRvZGF5cyB3ZWF0aGVyIGFuZCB0aGVuIHRoZSBuZXh0IDcgZGF5cyBvZiB3ZWF0aGVyLlxuYXN5bmMgZnVuY3Rpb24gZ2VuZXJhbFdlYXRoZXJJbmZvKGxvY2F0aW9uLCBzdWJtaXQpIHtcbiAgICB0cnl7XG4gICAgICAgIGNvbnN0IGdldFdlYXRoZXIgPSBhd2FpdCBmZXRjaChgaHR0cDovL2FwaS53ZWF0aGVyYXBpLmNvbS92MS9jdXJyZW50Lmpzb24/a2V5PTkzOTdkYjU1OTA0NjQ5OWFhNzgxNDQ3MjEyMzE0MTEmcT0ke2xvY2F0aW9ufWApO1xuICAgICAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZ2V0V2VhdGhlci5qc29uKCk7XG4gICAgICAgIGRpc3BsYXlNYWluQ29udGVudCh3ZWF0aGVyLmxvY2F0aW9uLmNvdW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2VhdGhlci5sb2NhdGlvbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYXRoZXIuY3VycmVudC5jb25kaXRpb24udGV4dCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyLmxvY2F0aW9uLmxvY2FsdGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ZWF0aGVyLmN1cnJlbnQudGVtcF9jLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdlYXRoZXIuY3VycmVudC50ZW1wX2YpO1xuICAgICAgICBmb3IgKGk9MTsgaTwgODsgaSsrKXtcbiAgICAgICAgcmVtb3ZlQ3VycmVudEZvcmVjYXN0KCk7XG4gICAgICAgIH1cbiAgICAgICAgY3JlYXRlV2Vla2x5V2VhdGhlckZvcmVjYXN0KGxvY2F0aW9uKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyLmxvY2F0aW9uLmNvdW50cnkpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyLmxvY2F0aW9uLm5hbWUpO1xuICAgICAgICBjb25zb2xlLmxvZyh3ZWF0aGVyLmxvY2F0aW9uLmxvY2FsdGltZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3dlYXRoZXIuY3VycmVudC50ZW1wX2N9IENgKTtcbiAgICAgICAgY29uc29sZS5sb2coYCR7d2VhdGhlci5jdXJyZW50LnRlbXBfZn0gRmApO1xuXG4gICAgICAgIH1cbiAgICBjYXRjaChlcnIpe1xuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH0gXG59XG5jcmVhdGVNYWluQ29udGVudCgpO1xuaW5pdGlhbFdlYXRoZXJJbmZvKCk7XG5jcmVhdGVGb3JtKCk7XG5jcmVhdGVDYXJkRGl2KCk7XG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9