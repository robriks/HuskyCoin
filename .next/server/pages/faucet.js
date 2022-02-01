/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/faucet";
exports.ids = ["pages/faucet"];
exports.modules = {

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2h1c2t5Y29pbi8uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NzEyNyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJjb250YWluZXJcIjogXCJIb21lX2NvbnRhaW5lcl9fYkNPaFlcIixcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19uTGppUVwiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "./pages/faucet.js":
/*!*************************!*\
  !*** ./pages/faucet.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Faucet)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ethers */ \"ethers\");\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(ethers__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"web3modal\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n// import { huskycoinaddress } from '../config'\n// import HuskyCoin from '../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json'\nfunction Faucet() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    async function dispenseHuskyCoins() {\n        const web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n        const connection = await web3Modal.connect();\n        const provider = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.providers.Web3Provider(connection);\n        const signer = provider.getSigner();\n        let contract = new ethers__WEBPACK_IMPORTED_MODULE_1__.ethers.Contract(huskycoinaddress, HuskyCoin.abi, signer);\n        let transaction = await contract.dispense();\n        let tx = await transaction.wait();\n        router.push('/stake');\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_4___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"HuskyCoin Faucet\"\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: dispenseHuskyCoins,\n                    className: `flex w-${\"36\"} mt-2 p-1 rounded-md bg-gray-500 hover:bg-gray-900 shadow-lg justify-center`,\n                    children: \"Receive HuskyCoins\"\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 27,\n                    columnNumber: 15\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    children: \"Clicking the above button will raise a MetaMask prompt for you to pay gas on the dispense transaction\"\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 32,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n            lineNumber: 25,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXVjZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQStCO0FBQ1E7QUFDTztBQUNiO0FBRWpDLEVBQStDO0FBQy9DLEVBQThFO0FBRS9ELFFBQVEsQ0FBQ0ksTUFBTSxHQUFJLENBQUM7SUFDL0IsS0FBSyxDQUFDQyxNQUFNLEdBQUdKLHNEQUFTO21CQUNUSyxrQkFBa0IsR0FBRyxDQUFDO1FBQ2pDLEtBQUssQ0FBQ0MsU0FBUyxHQUFHLEdBQUcsQ0FBQ0osa0RBQVM7UUFDL0IsS0FBSyxDQUFDSyxVQUFVLEdBQUcsS0FBSyxDQUFDRCxTQUFTLENBQUNFLE9BQU87UUFDMUMsS0FBSyxDQUFDQyxRQUFRLEdBQUcsR0FBRyxDQUFDVixpRUFBNkIsQ0FBQ1EsVUFBVTtRQUM3RCxLQUFLLENBQUNLLE1BQU0sR0FBR0gsUUFBUSxDQUFDSSxTQUFTO1FBRWpDLEdBQUcsQ0FBQ0MsUUFBUSxHQUFHLEdBQUcsQ0FBQ2YsbURBQWUsQ0FBQ2lCLGdCQUFnQixFQUFFQyxTQUFTLENBQUNDLEdBQUcsRUFBRU4sTUFBTTtRQUMxRSxHQUFHLENBQUNPLFdBQVcsR0FBRyxLQUFLLENBQUNMLFFBQVEsQ0FBQ00sUUFBUTtRQUN6QyxHQUFHLENBQUNDLEVBQUUsR0FBRyxLQUFLLENBQUNGLFdBQVcsQ0FBQ0csSUFBSTtRQUUvQmxCLE1BQU0sQ0FBQ21CLElBQUksQ0FBQyxDQUFRO0lBQ3hCLENBQUM7SUFDRCxNQUFNLDZFQUNEQyxDQUFHO1FBQUNDLFNBQVMsRUFBRXhCLDBFQUFnQjs4RkFDN0J1QixDQUFHO1lBQUNDLFNBQVMsRUFBRXhCLHFFQUFXOzs0RkFDeEIyQixDQUFFOzhCQUFDLENBQWdCOzs7Ozs7NEZBQ2pCQyxDQUFNO29CQUNMQyxPQUFPLEVBQUV6QixrQkFBa0I7b0JBQzNCb0IsU0FBUyxHQUFHLE9BQU8sRUFBRSxDQUFJLElBQUMsMkVBQTJFOzhCQUN0RyxDQUNEOzs7Ozs7NEZBQ0RNLENBQUM7OEJBQUMsQ0FBcUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9odXNreWNvaW4vLi9wYWdlcy9mYXVjZXQuanM/YjY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xuXG4vLyBpbXBvcnQgeyBodXNreWNvaW5hZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnJ1xuLy8gaW1wb3J0IEh1c2t5Q29pbiBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0h1c2t5Q29pbi5zb2wvSHVza3lDb2luLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhdWNldCAoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBhc3luYyBmdW5jdGlvbiBkaXNwZW5zZUh1c2t5Q29pbnMoKSB7XG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuXG4gICAgICAgIGxldCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoaHVza3ljb2luYWRkcmVzcywgSHVza3lDb2luLmFiaSwgc2lnbmVyKVxuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5kaXNwZW5zZSgpXG4gICAgICAgIGxldCB0eCA9IGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKVxuXG4gICAgICAgIHJvdXRlci5wdXNoKCcvc3Rha2UnKVxuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgIDxoMT5IdXNreUNvaW4gRmF1Y2V0PC9oMT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Rpc3BlbnNlSHVza3lDb2luc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHctJHtcIjM2XCJ9IG10LTIgcC0xIHJvdW5kZWQtbWQgYmctZ3JheS01MDAgaG92ZXI6YmctZ3JheS05MDAgc2hhZG93LWxnIGp1c3RpZnktY2VudGVyYH1cbiAgICAgICAgICAgICAgPlJlY2VpdmUgSHVza3lDb2luc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxwPkNsaWNraW5nIHRoZSBhYm92ZSBidXR0b24gd2lsbCByYWlzZSBhIE1ldGFNYXNrIHByb21wdCBmb3IgeW91IHRvIHBheSBnYXMgb24gdGhlIGRpc3BlbnNlIHRyYW5zYWN0aW9uPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImV0aGVycyIsInVzZVJvdXRlciIsInN0eWxlcyIsIldlYjNNb2RhbCIsIkZhdWNldCIsInJvdXRlciIsImRpc3BlbnNlSHVza3lDb2lucyIsIndlYjNNb2RhbCIsImNvbm5lY3Rpb24iLCJjb25uZWN0IiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJzaWduZXIiLCJnZXRTaWduZXIiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiaHVza3ljb2luYWRkcmVzcyIsIkh1c2t5Q29pbiIsImFiaSIsInRyYW5zYWN0aW9uIiwiZGlzcGVuc2UiLCJ0eCIsIndhaXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFpbiIsImgxIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/faucet.js\n");

/***/ }),

/***/ "ethers":
/*!*************************!*\
  !*** external "ethers" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("ethers");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "web3modal":
/*!****************************!*\
  !*** external "web3modal" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("web3modal");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/faucet.js"));
module.exports = __webpack_exports__;

})();