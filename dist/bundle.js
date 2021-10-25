/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modalWindow */ \"./src/modules/modalWindow.js\");\n/* harmony import */ var _modules_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/scroll */ \"./src/modules/scroll.js\");\n/* harmony import */ var _modules_topSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/topSlider */ \"./src/modules/topSlider.js\");\n/* harmony import */ var _modules_arousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/сarousel */ \"./src/modules/сarousel.js\");\n/* harmony import */ var _modules_accordeon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/accordeon */ \"./src/modules/accordeon.js\");\n\n\n\n\n // Модальное окно\n\n(0,_modules_modalWindow__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Плавная прокрутка\n\n(0,_modules_scroll__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(); // Верхний слайдер\n\n(0,_modules_topSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(); // Верхний слайдер\n\n(0,_modules_arousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(); // Верхний слайдер\n\n(0,_modules_accordeon__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n\n//# sourceURL=webpack://jsglo/./src/index.js?");

/***/ }),

/***/ "./src/modules/accordeon.js":
/*!**********************************!*\
  !*** ./src/modules/accordeon.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar accordeon = function accordeon() {\n  var accordeon = document.querySelector('.accordeon'),\n      accordeonElem = accordeon.querySelectorAll('.element'),\n      accordeonContent = accordeon.querySelectorAll('.element-content'),\n      title = accordeon.querySelectorAll('.title');\n\n  var toggleContent = function toggleContent(index) {\n    for (var i = 0; i < accordeonContent.length; i++) {\n      if (index === i) {\n        accordeonContent[i].style.display = 'block';\n        accordeonContent[i].style.display = \"transition:all ease 1s;\";\n        accordeonElem[i].classList.add('active');\n      } else {\n        accordeonContent[i].style.display = 'none';\n        accordeonContent[i].style.display = \"transition:all ease 1s;\";\n        accordeonElem[i].classList.remove('active');\n      }\n    }\n  };\n\n  accordeon.addEventListener('click', function (event) {\n    var target = event.target;\n    console.log('target: ', target);\n\n    if (target.classList.contains('title')) {\n      title.forEach(function (item, i) {\n        // eslint-disable-next-line no-undef\n        if (item === target) {\n          toggleContent(i);\n        }\n      });\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (accordeon);\n\n//# sourceURL=webpack://jsglo/./src/modules/accordeon.js?");

/***/ }),

/***/ "./src/modules/modalWindow.js":
/*!************************************!*\
  !*** ./src/modules/modalWindow.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable prefer-const */\nvar modalWindow = function modalWindow() {\n  var modal = document.querySelector('.modal-callback'),\n      modalOverlay = document.querySelector('.modal-overlay'),\n      modalBtn = document.querySelectorAll('.fancyboxModal');\n  modalBtn.forEach(function (elem) {\n    elem.addEventListener('click', function () {\n      modal.style.display = 'block';\n      modalOverlay.style.display = 'block';\n    });\n  });\n  modal.addEventListener('click', function (event) {\n    var target = event.target;\n\n    if (target.closest('.modal-close')) {\n      modal.style.display = 'none';\n      modalOverlay.style.display = 'none';\n    }\n  });\n  modalOverlay.addEventListener('click', function () {\n    modal.style.display = 'none';\n    modalOverlay.style.display = 'none';\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modalWindow);\n\n//# sourceURL=webpack://jsglo/./src/modules/modalWindow.js?");

/***/ }),

/***/ "./src/modules/scroll.js":
/*!*******************************!*\
  !*** ./src/modules/scroll.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* eslint-disable no-mixed-spaces-and-tabs */\n\n/* eslint-disable no-unused-vars */\n\n/* jshint ignore:start */\nvar scroll = function scroll() {\n  var anchors = document.querySelectorAll('a[href*=\"#\"]');\n\n  var _iterator = _createForOfIteratorHelper(anchors),\n      _step;\n\n  try {\n    var _loop = function _loop() {\n      var anchor = _step.value;\n      anchor.addEventListener('click', function (event) {\n        event.preventDefault();\n        var blockID = anchor.getAttribute('href'); // eslint-disable-next-line prefer-const\n\n        var target = event.target;\n\n        if (target.classList.contains('fancyboxModal')) {\n          event.preventDefault();\n        } else {\n          document.querySelector('' + blockID).scrollIntoView({\n            behavior: 'smooth',\n            block: 'start'\n          });\n        }\n      });\n    };\n\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      _loop();\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n};\n/* jshint ignore:end */\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scroll);\n\n//# sourceURL=webpack://jsglo/./src/modules/scroll.js?");

/***/ }),

/***/ "./src/modules/topSlider.js":
/*!**********************************!*\
  !*** ./src/modules/topSlider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar topSlider = function topSlider() {\n  var sliderItem = document.querySelectorAll('.top-slider .item'),\n      sliderTable = document.querySelectorAll('.top-slider .item .table');\n  var currentSlide = 0; // sliderTable[0].style.opacity = '1';\n  // sliderTable[0].style.visibility = 'visible';\n\n  sliderTable[0].style.cssText = \"opacity: 1;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tvisibility: visible;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttransition:all ease 1s;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\";\n\n  var prevSlide = function prevSlide(elem, elem2, index) {\n    elem[index].style.display = 'none';\n    elem2[index].style.opacity = '0';\n    elem2[index].style.visibility = 'hidden';\n  };\n\n  var nextSlide = function nextSlide(elem, elem2, index) {\n    elem[index].style.display = 'block';\n    elem2[index].style.opacity = '1';\n    elem2[index].style.visibility = 'visible';\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    prevSlide(sliderItem, sliderTable, currentSlide);\n    currentSlide++;\n\n    if (currentSlide >= sliderItem.length) {\n      currentSlide = 0;\n    }\n\n    nextSlide(sliderItem, sliderTable, currentSlide);\n  };\n\n  var startSlide = function startSlide(time) {\n    setInterval(autoPlaySlide, time);\n  };\n\n  startSlide(3000);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (topSlider);\n\n//# sourceURL=webpack://jsglo/./src/modules/topSlider.js?");

/***/ }),

/***/ "./src/modules/сarousel.js":
/*!*********************************!*\
  !*** ./src/modules/сarousel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* eslint-disable no-unused-vars */\nvar сarousel = function сarousel() {\n  // eslint-disable-next-line no-unused-vars\n  var servicesCarousel = document.querySelector('.services-carousel'),\n      servicesItem = document.querySelectorAll('.services-carousel .col-sm-6'),\n      servicesItems = document.querySelectorAll('.services-carousel .col-sm-6'),\n      arrowLeft = document.querySelector('.arrow-left'),\n      arrowRight = document.querySelector('.arrow-right');\n  console.log('servicesItem: ', servicesItem);\n  var offset = 0;\n  servicesCarousel.style.cssText = \"position: relative;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\tleft: 0;\\n\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\t\\ttransition:all ease 1s;\"; // const slideShow = 1,\n  // \tslideScroll = 1,\n  // \tcount = servicesItems.length,\n  // \twidth = servicesItem.clientWidth / slideShow,\n  // \tmove = slideScroll * width;\n  // console.log('count: ', count);\n  // let currentSlide = 0;\n  // const prevSlide = (elem, index) => {\n  // \t// elem[index].style.display = 'flex';\n  // \telem[index].style.order = '0';\n  // };\n  // const nextSlide = (elem, index) => {\n  // \t// elem[index].style.display = 'none';\n  // \telem[index].style.order = '6';\n  // };\n  // const playSlide = () => {\n  // \tprevSlide(servicesItems, currentSlide, 'hidden');\n  // \tcurrentSlide++;\n  // \tif (currentSlide >= servicesItems.length) {\n  // \t\tcurrentSlide = 0;\n  // \t}\n  // \tnextSlide(servicesItems, currentSlide, 'hidden');\n  // };\n  // if (currentSlide >= servicesItems.length) {\n  // \tcurrentSlide = 0;\n  // }\n  // if (currentSlide < 0) {\n  // \tcurrentSlide = servicesItems.length - 1;\n  // }\n\n  arrowLeft.addEventListener('click', function () {\n    // currentSlide--;\n    // prevSlide(servicesItems, currentSlide);\n    offset -= 400;\n\n    if (offset < 0) {\n      offset = 1200;\n    }\n\n    servicesCarousel.style.left = -offset + 'px';\n  });\n  arrowRight.addEventListener('click', function () {\n    // // const target = event.target;\n    // currentSlide++;\n    // nextSlide(servicesItems, currentSlide);\n    offset += 400;\n\n    if (offset > 1200) {\n      offset = 0;\n    }\n\n    servicesCarousel.style.left = -offset + 'px';\n  }); // arrowLeft.onclick = () => move(1);  // кнопка «влево»\n  // arrowRight.onclick = () => move(0); // кнопка «вправо»\n  // const move\n  // servicesItems[3].style.display = 'none';\n  // servicesItems[4].style.display = 'none';\n  // servicesItems[5].style.display = 'none';\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (сarousel);\n\n//# sourceURL=webpack://jsglo/./src/modules/%D1%81arousel.js?");

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
/******/ 			// no module.id needed
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;