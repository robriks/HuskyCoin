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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faucet; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Faucet() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function dispenseHuskyCoins() {\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    function _dispenseHuskyCoins() {\n        _dispenseHuskyCoins = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 9;\n                        return contract.dispense();\n                    case 9:\n                        transaction = _ctx.sent;\n                        _ctx.next = 12;\n                        return transaction.wait();\n                    case 12:\n                        tx = _ctx.sent;\n                        router.push('/stake');\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h3\", {\n                    className: \"font-bold\",\n                    children: \"HuskyCoin Faucet\"\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 26,\n                columnNumber: 11\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                        onClick: dispenseHuskyCoins,\n                        className: \"flex w-36 mt-2 p-1 rounded-md bg-green-500 hover:bg-green-700 shadow-lg justify-center\",\n                        children: \"Receive HuskyCoins\"\n                    }, void 0, false, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 30,\n                        columnNumber: 15\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                        children: \"The above will raise a MetaMask prompt for you to pay gas and execute the transaction, giving you 69420 HuskyCoins\"\n                    }, void 0, false, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 35,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 29,\n                columnNumber: 11\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n        lineNumber: 25,\n        columnNumber: 9\n    }, this));\n};\n_s(Faucet, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Faucet;\nvar _c;\n$RefreshReg$(_c, \"Faucet\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXVjZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0I7QUFDUTtBQUNPO0FBQ2I7QUFFVztBQUMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxRQUFRLENBQUNNLE1BQU0sR0FBSSxDQUFDOztJQUMvQixHQUFLLENBQUNDLE1BQU0sR0FBR04sc0RBQVM7YUFDVE8sa0JBQWtCO2VBQWxCQSxtQkFBa0I7O2FBQWxCQSxtQkFBa0I7UUFBbEJBLG1CQUFrQix3SkFBakMsUUFBUSxXQUE0QixDQUFDO2dCQUMzQkMsU0FBUyxFQUNUQyxVQUFVLEVBQ1ZDLFFBQVEsRUFDUkMsTUFBTSxFQUVSQyxRQUFRLEVBQ1JDLFdBQVcsRUFDWEMsRUFBRTs7Ozt3QkFQQU4sU0FBUyxHQUFHLEdBQUcsQ0FBQ04sa0RBQVM7OytCQUNOTSxTQUFTLENBQUNPLE9BQU87O3dCQUFwQ04sVUFBVTt3QkFDVkMsUUFBUSxHQUFHLEdBQUcsQ0FBQ1gsaUVBQTZCLENBQUNVLFVBQVU7d0JBQ3ZERSxNQUFNLEdBQUdELFFBQVEsQ0FBQ1EsU0FBUzt3QkFFN0JOLFFBQVEsR0FBRyxHQUFHLENBQUNiLG1EQUFlLENBQUNJLHFEQUFnQixFQUFFQyxrRkFBYSxFQUFFTyxNQUFNOzsrQkFDbERDLFFBQVEsQ0FBQ1MsUUFBUTs7d0JBQXJDUixXQUFXOzsrQkFDQUEsV0FBVyxDQUFDUyxJQUFJOzt3QkFBM0JSLEVBQUU7d0JBRU5SLE1BQU0sQ0FBQ2lCLElBQUksQ0FBQyxDQUFROzs7Ozs7UUFDeEIsQ0FBQztlQVhjaEIsbUJBQWtCOztJQWFqQyxNQUFNLDZFQUNEaUIsQ0FBRztRQUFDQyxTQUFTLEVBQUV4QiwwRUFBZ0I7O3dGQUM3QnVCLENBQUc7Z0JBQUNDLFNBQVMsRUFBRXhCLHFFQUFXO3NHQUMxQjJCLENBQUU7b0JBQUNILFNBQVMsRUFBQyxDQUFXOzhCQUFDLENBQWdCOzs7Ozs7Ozs7Ozt3RkFFekNELENBQUc7Z0JBQUNDLFNBQVMsRUFBRXhCLHFFQUFXOztnR0FDdEI2QixDQUFNO3dCQUNMQyxPQUFPLEVBQUV4QixrQkFBa0I7d0JBQzNCa0IsU0FBUyxFQUFHLENBQTJGO2tDQUN4RyxDQUNEOzs7Ozs7Z0dBQ0RPLENBQUM7a0NBQUMsQ0FBa0g7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqSSxDQUFDO0dBOUJ1QjNCLE1BQU07O1FBQ1hMLGtEQUFTOzs7S0FESkssTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mYXVjZXQuanM/YjY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xuXG5pbXBvcnQgeyBodXNreWNvaW5hZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IEh1c2t5Q29pbiBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0h1c2t5Q29pbi5zb2wvSHVza3lDb2luLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhdWNldCAoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBhc3luYyBmdW5jdGlvbiBkaXNwZW5zZUh1c2t5Q29pbnMoKSB7XG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuXG4gICAgICAgIGxldCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoaHVza3ljb2luYWRkcmVzcywgSHVza3lDb2luLmFiaSwgc2lnbmVyKVxuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5kaXNwZW5zZSgpXG4gICAgICAgIGxldCB0eCA9IGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKVxuXG4gICAgICAgIHJvdXRlci5wdXNoKCcvc3Rha2UnKVxuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgIDxoMyBjbGFzc05hbWU9J2ZvbnQtYm9sZCc+SHVza3lDb2luIEZhdWNldDwvaDM+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Rpc3BlbnNlSHVza3lDb2luc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHctJHtcIjM2XCJ9IG10LTIgcC0xIHJvdW5kZWQtbWQgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCBzaGFkb3ctbGcganVzdGlmeS1jZW50ZXJgfVxuICAgICAgICAgICAgICA+UmVjZWl2ZSBIdXNreUNvaW5zXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPHA+VGhlIGFib3ZlIHdpbGwgcmFpc2UgYSBNZXRhTWFzayBwcm9tcHQgZm9yIHlvdSB0byBwYXkgZ2FzIGFuZCBleGVjdXRlIHRoZSB0cmFuc2FjdGlvbiwgZ2l2aW5nIHlvdSA2OTQyMCBIdXNreUNvaW5zPC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImV0aGVycyIsInVzZVJvdXRlciIsInN0eWxlcyIsIldlYjNNb2RhbCIsImh1c2t5Y29pbmFkZHJlc3MiLCJIdXNreUNvaW4iLCJGYXVjZXQiLCJyb3V0ZXIiLCJkaXNwZW5zZUh1c2t5Q29pbnMiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0aW9uIiwicHJvdmlkZXIiLCJzaWduZXIiLCJjb250cmFjdCIsInRyYW5zYWN0aW9uIiwidHgiLCJjb25uZWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJkaXNwZW5zZSIsIndhaXQiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwiY2FyZCIsImgzIiwibWFpbiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/faucet.js\n");

/***/ })

});