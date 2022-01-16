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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/carousel */ \"./modules/carousel.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_modal__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n(0,_modules_slider__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n(0,_modules_carousel__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/carousel.js":
/*!*****************************!*\
  !*** ./modules/carousel.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst carousel = () => {\r\n  const slides = document.querySelectorAll('.services-elements>div>div'),\r\n  modalWindow = document.getElementById('application');\r\n\r\n  const prev = document.querySelector('.services-arrow>.arrow-left');\r\n  const next = document.querySelector('.services-arrow>.arrow-right');\r\n\r\n  const responsive = [{\r\n    breakpoint: 1240,\r\n    slidesToShow: 3\r\n  },\r\n  {\r\n    breakpoint: 991,\r\n    slidesToShow: 2\r\n  },\r\n  {\r\n    breakpoint: 767,\r\n    slidesToShow: 1\r\n  }];\r\n\r\n  const responsiveSlider = () => {\r\n    if (window.innerWidth > responsive[1].breakpoint) {\r\n      return responsive[0].slidesToShow;\r\n    }\r\n    if (window.innerWidth < responsive[1].breakpoint &&\r\n      window.innerWidth > responsive[2].breakpoint) {\r\n      return responsive[1].slidesToShow;\r\n    }\r\n    if (window.innerWidth < responsive[2].breakpoint) {\r\n      return responsive[2].slidesToShow;\r\n    }\r\n  };\r\n\r\n  let start,\r\n    finish;\r\n  const setNumSlides = () => {\r\n    start = 0;\r\n    finish = start + responsiveSlider();\r\n  };\r\n  setNumSlides();\r\n\r\n  const hideSlide = () => {\r\n    for (let i = start; i < finish; i++) {\r\n      slides[i].style.display = 'block';\r\n    }\r\n    if (start > 0) {\r\n      for (let i = 0; i < start; i++) {\r\n        slides[i].style.display = 'none';\r\n      }\r\n    }\r\n    if (finish <= slides.length) {\r\n      for (let i = finish; i < slides.length; i++) {\r\n        slides[i].style.display = 'none';\r\n      }\r\n    }\r\n  };\r\n  hideSlide();\r\n\r\n  window.addEventListener('resize', () => {\r\n    setNumSlides();\r\n    hideSlide();\r\n  });\r\n\r\n  prev.addEventListener('click', () => {\r\n    --start;\r\n    --finish;\r\n    if (start < 0) {\r\n      finish = slides.length;\r\n      start = finish - responsiveSlider();\r\n    }\r\n    hideSlide();\r\n  });\r\n\r\n  next.addEventListener('click', () => {\r\n    ++start;\r\n    ++finish;\r\n    if (finish > slides.length) {\r\n      start = 0;\r\n      finish = start + responsiveSlider();\r\n    }\r\n    hideSlide();\r\n  });\r\n\r\n  const addStylesModal = () => {\r\n    modalWindow.style.cssText = `\r\n    display: none;\r\n    position: fixed;\r\n    top: 20%;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 460px;\r\n    max-width: 100%;\r\n    background: #fff;\r\n    padding: 55px 25px 35px;\r\n    z-index: 99;\r\n    `;\r\n  };\r\n  addStylesModal();\r\n\r\n  let idInterval,\r\n    itemDistance = 160;\r\n    \r\n  const menuAppear = () => {\r\n    idInterval = requestAnimationFrame(menuAppear);\r\n    itemDistance -= 10;\r\n    if (itemDistance < 20) {\r\n      itemDistance = 160;\r\n      return cancelAnimationFrame(idInterval);\r\n    } else {\r\n      modalWindow.style.top = `${itemDistance}%`;\r\n    }\r\n  };\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (carousel);\n\n//# sourceURL=webpack:///./modules/carousel.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\r\n  const serviceBlockBtns = document.querySelectorAll('a[href^=\"#\"]');\r\n  const mainLogo = document.querySelector('img[src^=\"images/logo.png\"]').closest('a');\r\n  mainLogo.classList.add('mainLogo-head');\r\n\r\n  serviceBlockBtns.forEach((el) => {\r\n    if (el.closest('div.header') &&\r\n    !el.closest('a').matches('.mainLogo-head') &&\r\n    !el.closest('a').matches('.callback-btn') &&\r\n    !el.closest('a').matches('.mainLogo-head') &&\r\n    !el.closest('a').matches('.callback-btn')\r\n    ) {\r\n      el.addEventListener('click', (e) => {\r\n        e.preventDefault();\r\n        const id = el.getAttribute('href').slice(1);\r\n        if (document.getElementById(`${id}`)) {\r\n          document.getElementById(id).scrollIntoView({\r\n            behavior: 'smooth',\r\n            block: 'start',\r\n          });\r\n        }\r\n      });\r\n    }\r\n  });\r\n\r\n  const arrowUp = document.querySelector(\".up\"),\r\n    servicesSection = document.querySelector(\".services-section\"),\r\n    sectionTop = servicesSection.offsetTop;\r\n\r\n  arrowUp.style.display = \"none\";\r\n\r\n  window.onscroll = function () {\r\n    if (window.pageYOffset >= sectionTop) {\r\n      arrowUp.style.display = \"block\";\r\n    } else {\r\n      arrowUp.style.display = \"none\";\r\n    }\r\n  };\r\n\r\n  arrowUp.addEventListener(\"click\", () => {\r\n    window.scrollTo({ top: 0, behavior: \"smooth\" });\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\r\n  const modalCallback = document.querySelector('.modal-callback'); \r\n  const modalOverlay = document.querySelector('.modal-overlay');   \r\n  const body = document.querySelector('body');\r\n    \r\n  body.addEventListener('click', (e) => {\r\n    e.preventDefault();\r\n      if (e.target.closest('.header .fancyboxModal') ||\r\n         (e.target.closest('.button-services')) ||\r\n         (e.target.closest('.services-elements .fancyboxModal '))) { \r\n            modalCallback.style.display = 'block';\r\n            modalOverlay.style.display = 'block';\r\n       } else if (e.target.closest('.modal-close') || (e.target.closest('.modal-overlay'))) {\r\n            modalCallback.style.display = 'none';\r\n            modalOverlay.style.display = 'none';\r\n      }\r\n  });\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\r\n  const topSlider = document.querySelector('.top-slider');\r\n  const item = document.querySelectorAll('.item');\r\n  const table = document.querySelectorAll('.table');\r\n\r\n  const cssStyle = `\r\n  <style>\r\n      .top-slider .item.relative.active {\r\n          opacity: 1;\r\n          z-index: 3;\r\n      }\r\n      \r\n      .top-slider .item.relative {\r\n          opacity: 0;\r\n          transition: all 200ms ease-out;\r\n          position: absolute;\r\n          z-index: 1;\r\n          top: 0;\r\n          left: 0;\r\n          width: 100%;\r\n      }\r\n  `;\r\n  topSlider.insertAdjacentHTML('beforeEnd', cssStyle);\r\n  table[0].classList.add('active');\r\n  item[0].classList.add('active');\r\n   \r\n  let currentSlide = 0;\r\n\r\n  const prevSlide = (elems, index, strClass) => {\r\n      elems[index].classList.remove(strClass);\r\n  };\r\n\r\n  const nextSlide = (elems, index, strClass) => {\r\n      elems[index].classList.add(strClass);\r\n  };\r\n\r\n  const autoSlide = () => { \r\n      prevSlide(table, currentSlide, 'active');\r\n      prevSlide(item, currentSlide, 'active');\r\n      currentSlide++;\r\n\r\n      if (currentSlide >= table.length) {\r\n          currentSlide = 0;\r\n      }\r\n      nextSlide(table, currentSlide, 'active');\r\n      nextSlide(item, currentSlide, 'active');\r\n  };\r\n\r\n  const startSlide = () => {\r\n      setInterval(autoSlide, 3000);\r\n  };\r\n  startSlide();\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;