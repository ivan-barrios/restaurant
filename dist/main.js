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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createContact() {\n    const contact = document.createElement('div');\n    contact.classList.add('contact');\n\n    const tel = document.createElement('p');\n    const ubi = document.createElement('p');\n\n    tel.textContent = 'Phone Number: +54 011-999-9999';\n    ubi.textContent = 'We are in Pinamar';\n\n    contact.appendChild(tel);\n    contact.appendChild(ubi);\n\n    return contact;\n};\n\nfunction loadContact() {\n    const main = document.getElementById('main');\n    main.innerHTML = '';\n    main.appendChild(createContact());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadContact);\n\n//# sourceURL=webpack://restaurant/./src/contact.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Header creation\nfunction createHeader() {\n    const header = document.createElement('div');\n    header.classList.add('header');\n\n    //Nav creation\n    function createNav() {\n        const nav = document.createElement('nav');\n\n        const homeBtn = document.createElement('button');\n        const menuBtn = document.createElement('button');\n        const contactBtn = document.createElement('button');\n\n        homeBtn.classList.add('nav-btn', 'home-btn');\n        menuBtn.classList.add('nav-btn', 'menu-btn');\n        contactBtn.classList.add('nav-btn', 'contact-btn');\n\n        homeBtn.textContent = 'Home';\n        menuBtn.textContent = 'Menu';\n        contactBtn.textContent = 'Contact';\n\n        nav.appendChild(homeBtn);\n        nav.appendChild(menuBtn);\n        nav.appendChild(contactBtn);\n\n        return nav;\n    };\n\n    const restName = document.createElement('h1');\n    restName.textContent = 'Beachood';\n\n    header.appendChild(restName);\n    header.appendChild(createNav());\n\n    return header;\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHeader);\n\n//# sourceURL=webpack://restaurant/./src/header.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n//Creates the Home content of the page\nfunction createHome() {\n    const home = document.createElement('div');\n    home.classList.add('home');\n\n    const beachImg = document.createElement('img');\n    beachImg.src = 'images/restImg.jpg';\n    beachImg.alt = 'Beach Restaurant Image';\n\n    const para1 = document.createElement('p');\n    const para2 = document.createElement('p');\n    para1.textContent = 'The best argentinian beach food you will ever taste';\n    para2.textContent = 'Good food, good life';\n\n    home.appendChild(para1);\n    home.appendChild(para2);\n    home.appendChild(beachImg);\n\n    return home;\n};\n\nfunction loadHome() {\n    const main = document.getElementById('main');\n    main.innerHTML = '';\n    main.appendChild(createHome());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadHome);\n\n//# sourceURL=webpack://restaurant/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\n\nfunction createMain() {\n    const main = document.createElement('main');\n    main.setAttribute(\"id\",\"main\");\n    return main;\n};\n\n\n//Tabbed browsing\nfunction changeActualBtn(actBtn) {\n    const buttons = document.querySelectorAll('.nav-btn');\n    buttons.forEach((btn) => {\n        if (btn !== actBtn) {\n            btn.classList.remove('.active');\n        }\n    });\n    actBtn.classList.add('.active');\n};\n\nfunction loadEventListeners() {\n    const homeBtn = document.querySelector('.home-btn');\n    const menuBtn = document.querySelector('.menu-btn');\n    const contactBtn = document.querySelector('.contact-btn');\n\n    homeBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        changeActualBtn(homeBtn);\n        (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n    });\n    menuBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        changeActualBtn(menuBtn);\n        (0,_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n    });\n    contactBtn.addEventListener('click', (e) => {\n        if (e.target.classList.contains('active')) return;\n        changeActualBtn(contactBtn);\n        (0,_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n    });\n};\n\n\n\n//Initializes the webPage\n(function() {\n    const content = document.getElementById('content');\n\n    content.appendChild((0,_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])());\n    content.appendChild(createMain());\n    loadEventListeners();    \n    (0,_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n})();\n\n//# sourceURL=webpack://restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction createMenu() {\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n\n    menu.appendChild(\n        createMenuItem(\n            'Churros', 'Churros filled with dulce de leche and covered with chocolate'\n        )\n    );\n    menu.appendChild(\n        createMenuItem(\n            'Corn', 'Corn covered with butter with a pinch of salt'\n        )\n    );\n\n    return menu;\n}\n\nfunction createMenuItem(name, desc) {\n    const menuItem = document.createElement('div');\n    menuItem.classList.add('menuItem');\n\n    const image = document.createElement('img');\n\n    image.src = `images/${name.toLowerCase()}.jpg`;\n    image.alt = \"Churros\";\n\n    const itemName = document.createElement('h3');\n    itemName.textContent = name;\n\n    const description = document.createElement('p');\n    description.textContent = desc;\n\n    menuItem.appendChild(image);\n    menuItem.appendChild(itemName);\n    menuItem.appendChild(description);\n\n    return menuItem;\n}\n\nfunction loadMenu() {\n    const main = document.getElementById('main');\n    main.innerHTML = '';\n    main.appendChild(createMenu());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadMenu);\n\n//# sourceURL=webpack://restaurant/./src/menu.js?");

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