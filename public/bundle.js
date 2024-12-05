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

/***/ "./src/classes/HorrorMovie.ts":
/*!************************************!*\
  !*** ./src/classes/HorrorMovie.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   HorrorMovie: () => (/* binding */ HorrorMovie)\n/* harmony export */ });\n/* harmony import */ var _Movie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Movie */ \"./src/classes/Movie.ts\");\n\nclass HorrorMovie extends _Movie__WEBPACK_IMPORTED_MODULE_0__.Movie {\n    constructor(title, duration, hasOscars, director, hasJumpScares) {\n        super(title, duration, hasOscars, director);\n        this.hasJumpScares = hasJumpScares;\n    }\n    displayAlert() {\n        console.log(\"This movie is really scary\");\n    }\n    getInfo() {\n        return \"Some movie info\";\n    }\n}\n\n\n//# sourceURL=webpack://typescript/./src/classes/HorrorMovie.ts?");

/***/ }),

/***/ "./src/classes/Movie.ts":
/*!******************************!*\
  !*** ./src/classes/Movie.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Movie: () => (/* binding */ Movie)\n/* harmony export */ });\nclass Movie {\n    constructor(title, duration, hasOscars, director) {\n        this.title = title;\n        this.duration = duration;\n        this.hasOscars = hasOscars;\n        this.director = director;\n    }\n    getDuration() {\n        return this.duration;\n    }\n    getInfo() {\n        return `Title: ${this.title} - Duration: ${this.duration} - Has Oscars: ${this.hasOscars}`;\n    }\n    play() {\n        console.log(`Playing ${this.title}`);\n    }\n}\n\n\n//# sourceURL=webpack://typescript/./src/classes/Movie.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _classes_HorrorMovie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/HorrorMovie */ \"./src/classes/HorrorMovie.ts\");\n/* harmony import */ var _classes_Movie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Movie */ \"./src/classes/Movie.ts\");\n// Webpack dev server\n// npm i webpack-dev-server -D\n\n\nconst director1 = {\n    name: \"Peter Jackson\",\n    age: 60,\n    data: \"He is Amazing\"\n};\n// console.log(director1);\nconst movie1 = new _classes_Movie__WEBPACK_IMPORTED_MODULE_1__.Movie(\"El Señor de los Anillos\", 300, true, director1);\nconst movie2 = new _classes_Movie__WEBPACK_IMPORTED_MODULE_1__.Movie(\"Harry Potter\", 120, true, director1);\n// movie1.title = \"Star Wars\";\nconsole.log(movie1, movie2);\nmovie1.play();\n// console.log(movie1.getInfo());\nconst scream = new _classes_HorrorMovie__WEBPACK_IMPORTED_MODULE_0__.HorrorMovie(\"Scream\", 90, false, director1, true);\n// console.log(scream);\n// scream.displayAlert()\n// console.log(scream.getInfo());\n\n\n//# sourceURL=webpack://typescript/./src/main.ts?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.ts");
/******/ 	
/******/ })()
;