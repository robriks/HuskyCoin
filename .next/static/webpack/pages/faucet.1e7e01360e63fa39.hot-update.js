"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/faucet",{

/***/ "./pages/faucet.js":
/*!*************************!*\
  !*** ./pages/faucet.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faucet; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Faucet() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function dispenseHuskyCoins() {\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    function _dispenseHuskyCoins() {\n        _dispenseHuskyCoins = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 9;\n                        return contract.dispense();\n                    case 9:\n                        transaction = _ctx.sent;\n                        _ctx.next = 12;\n                        return transaction.wait();\n                    case 12:\n                        tx = _ctx.sent;\n                        router.push('/stake');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().description),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                    className: \"text-5xl font-bold text-blue-500 p-4\",\n                    children: [\n                        \"HuskyCoin\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            className: \"font-normal text-blue-500\",\n                            children: [\n                                ' ',\n                                \"Faucet\"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 27,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 26,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 25,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-center p-1\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: dispenseHuskyCoins,\n                        className: \"flex w-\".concat(36, \" mt-2 p-3 rounded-lg bg-green-500 hover:bg-green-700 shadow-lg justify-center text-white\"),\n                        children: \"Receive HuskyCoins\"\n                    }, void 0, false, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 34,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 32,\n                    columnNumber: 15\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"text-sm p-7 flex justify-center\",\n                children: \"The above will raise a MetaMask prompt for you to pay gas and execute the transaction, giving you 69420 HuskyCoins\"\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n        lineNumber: 24,\n        columnNumber: 9\n    }, this));\n};\n_s(Faucet, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Faucet;\nvar _c;\n$RefreshReg$(_c, \"Faucet\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXVjZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDUTtBQUNPO0FBQ2I7QUFDVztBQUMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxRQUFRLENBQUNNLE1BQU0sR0FBSSxDQUFDOztJQUMvQixHQUFLLENBQUNDLE1BQU0sR0FBR04sc0RBQVM7YUFDVE8sa0JBQWtCO2VBQWxCQSxtQkFBa0I7O2FBQWxCQSxtQkFBa0I7UUFBbEJBLG1CQUFrQix3SkFBakMsUUFBUSxXQUE0QixDQUFDO2dCQUMzQkMsU0FBUyxFQUNUQyxVQUFVLEVBQ1ZDLFFBQVEsRUFDUkMsTUFBTSxFQUVSQyxRQUFRLEVBQ1JDLFdBQVcsRUFDWEMsRUFBRTs7Ozt3QkFQQU4sU0FBUyxHQUFHLEdBQUcsQ0FBQ04sa0RBQVM7OytCQUNOTSxTQUFTLENBQUNPLE9BQU87O3dCQUFwQ04sVUFBVTt3QkFDVkMsUUFBUSxHQUFHLEdBQUcsQ0FBQ1gsaUVBQTZCLENBQUNVLFVBQVU7d0JBQ3ZERSxNQUFNLEdBQUdELFFBQVEsQ0FBQ1EsU0FBUzt3QkFFN0JOLFFBQVEsR0FBRyxHQUFHLENBQUNiLG1EQUFlLENBQUNJLHFEQUFnQixFQUFFQyxrRkFBYSxFQUFFTyxNQUFNOzsrQkFDbERDLFFBQVEsQ0FBQ1MsUUFBUTs7d0JBQXJDUixXQUFXOzsrQkFDQUEsV0FBVyxDQUFDUyxJQUFJOzt3QkFBM0JSLEVBQUU7d0JBRU5SLE1BQU0sQ0FBQ2lCLElBQUksQ0FBQyxDQUFROzs7Ozs7UUFDeEIsQ0FBQztlQVhjaEIsbUJBQWtCOztJQWFqQyxNQUFNLDZFQUNEaUIsQ0FBRztRQUFDQyxTQUFTLEVBQUV4QiwwRUFBZ0I7O3dGQUM3QjBCLENBQUk7Z0JBQUNGLFNBQVMsRUFBRXhCLDRFQUFrQjtzR0FDaEM0QixDQUFFO29CQUFDSixTQUFTLEVBQUMsQ0FBc0M7O3dCQUFDLENBQ25EO29HQUFDSyxDQUFDOzRCQUFDTCxTQUFTLEVBQUMsQ0FBMkI7O2dDQUFFLENBQUc7Z0NBQUMsQ0FDOUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFHREQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXlCO3NHQUNyQ0QsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQXFCOzBHQUVuQ00sQ0FBTTt3QkFDTEMsT0FBTyxFQUFFekIsa0JBQWtCO3dCQUMzQmtCLFNBQVMsRUFBRyxDQUFPLFNBQUssTUFBd0YsQ0FBM0YsRUFBRSxFQUFDLENBQXdGO2tDQUNqSCxDQUNEOzs7Ozs7Ozs7Ozs7Ozs7O3dGQUdEUSxDQUFDO2dCQUFDUixTQUFTLEVBQUMsQ0FBaUM7MEJBQUMsQ0FBa0g7Ozs7Ozs7Ozs7OztBQUk3SyxDQUFDO0dBckN1QnBCLE1BQU07O1FBQ1hMLGtEQUFTOzs7S0FESkssTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mYXVjZXQuanM/YjY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xuaW1wb3J0IHsgaHVza3ljb2luYWRkcmVzcyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBIdXNreUNvaW4gZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9IdXNreUNvaW4uc29sL0h1c2t5Q29pbi5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXVjZXQgKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzcGVuc2VIdXNreUNvaW5zKCkge1xuICAgICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKClcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbilcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcblxuICAgICAgICBsZXQgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGh1c2t5Y29pbmFkZHJlc3MsIEh1c2t5Q29pbi5hYmksIHNpZ25lcilcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuZGlzcGVuc2UoKVxuICAgICAgICBsZXQgdHggPSBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcblxuICAgICAgICByb3V0ZXIucHVzaCgnL3N0YWtlJylcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC01eGwgZm9udC1ib2xkIHRleHQtYmx1ZS01MDAgcC00Jz5IdXNreUNvaW5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPSdmb250LW5vcm1hbCB0ZXh0LWJsdWUtNTAwJz57JyAnfUZhdWNldFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICAgICAgPC9tYWluPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgcC0xJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Rpc3BlbnNlSHVza3lDb2luc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHctJHszNn0gbXQtMiBwLTMgcm91bmRlZC1sZyBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHNoYWRvdy1sZyBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlYH1cbiAgICAgICAgICAgICAgPlJlY2VpdmUgSHVza3lDb2luc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXNtIHAtNyBmbGV4IGp1c3RpZnktY2VudGVyJz5UaGUgYWJvdmUgd2lsbCByYWlzZSBhIE1ldGFNYXNrIHByb21wdCBmb3IgeW91IHRvIHBheSBnYXMgYW5kIGV4ZWN1dGUgdGhlIHRyYW5zYWN0aW9uLCBnaXZpbmcgeW91IDY5NDIwIEh1c2t5Q29pbnM8L3A+XG5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJldGhlcnMiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJXZWIzTW9kYWwiLCJodXNreWNvaW5hZGRyZXNzIiwiSHVza3lDb2luIiwiRmF1Y2V0Iiwicm91dGVyIiwiZGlzcGVuc2VIdXNreUNvaW5zIiwid2ViM01vZGFsIiwiY29ubmVjdGlvbiIsInByb3ZpZGVyIiwic2lnbmVyIiwiY29udHJhY3QiLCJ0cmFuc2FjdGlvbiIsInR4IiwiY29ubmVjdCIsInByb3ZpZGVycyIsIldlYjNQcm92aWRlciIsImdldFNpZ25lciIsIkNvbnRyYWN0IiwiYWJpIiwiZGlzcGVuc2UiLCJ3YWl0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJkZXNjcmlwdGlvbiIsImgxIiwiYSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/faucet.js\n");

/***/ })

});