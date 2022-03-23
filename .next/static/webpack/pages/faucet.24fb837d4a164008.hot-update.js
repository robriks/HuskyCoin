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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faucet; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_husky_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/husky.gif */ \"./assets/husky.gif\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modal */ \"./components/modal.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/dist/lib.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Faucet() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function dispenseHuskyCoins() {\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    function _dispenseHuskyCoins() {\n        _dispenseHuskyCoins = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_8__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_9__.abi, signer);\n                        _ctx.prev = 7;\n                        _ctx.next = 10;\n                        return contract.dispense();\n                    case 10:\n                        transaction = _ctx.sent;\n                        _ctx.next = 13;\n                        return transaction.wait();\n                    case 13:\n                        tx = _ctx.sent;\n                        _ctx.next = 19;\n                        break;\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](7);\n                        if (_ctx.t0) {\n                            alert(\"You already have HuskyCoins! Import the token address to MetaMask and go stake them or send to your friends.\");\n                        }\n                    case 19:\n                        router.push('/stake');\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    7,\n                    16\n                ]\n            ]);\n        }));\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    if (react_device_detect__WEBPACK_IMPORTED_MODULE_7__.isMobile) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 36,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n            lineNumber: 35,\n            columnNumber: 9\n        }, this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"https://rinkeby.etherscan.io/address/0x8cfb42a80291737cb62cef7b665fe1304d112fee\",\n                                className: \"justify-center text-5xl text-blue-500 p-4\",\n                                children: \"HuskyCoin\"\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    className: \"justify-center text-4xl font-normal\",\n                                    children: [\n                                        ' ',\n                                        \"Dispensing Faucet\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                    lineNumber: 49,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 48,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 43,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 42,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \" max-w-xl\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        src: _assets_husky_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                        layout: \"intrinsic\"\n                    }, void 0, false, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 56,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 55,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: dispenseHuskyCoins,\n                            className: \"flex w-\".concat(36, \" mt-2 p-3 rounded-full bg-green-500 hover:bg-green-700 shadow-2xl justify-center text-white\"),\n                            children: \"Receive HuskyCoins\"\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 59,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 58,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"text-sm p-2 mt-4 flex justify-center\",\n                    children: \"Click to claim your 69420 HuskyCoins\"\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 67,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"text-xs flex justify-center text-center\",\n                    children: \"Note: Make sure to configure MetaMask first; you will be prompted to pay gas and execute the transaction\"\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n            lineNumber: 41,\n            columnNumber: 7\n        }, this));\n    }\n};\n_s(Faucet, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Faucet;\nvar _c;\n$RefreshReg$(_c, \"Faucet\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXVjZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNRO0FBQ087QUFDaEI7QUFDUztBQUNOO0FBQ007QUFDTztBQUNGO0FBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELFFBQVEsQ0FBQ1UsTUFBTSxHQUFJLENBQUM7O0lBQy9CLEdBQUssQ0FBQ0MsTUFBTSxHQUFHVixzREFBUzthQUNUVyxrQkFBa0I7ZUFBbEJBLG1CQUFrQjs7YUFBbEJBLG1CQUFrQjtRQUFsQkEsbUJBQWtCLHdKQUFqQyxRQUFRLFdBQTRCLENBQUM7Z0JBQzNCQyxTQUFTLEVBQ1RDLFVBQVUsRUFDVkMsUUFBUSxFQUNSQyxNQUFNLEVBRVJDLFFBQVEsRUFFUkMsV0FBVyxFQUNYQyxFQUFFOzs7O3dCQVJBTixTQUFTLEdBQUcsR0FBRyxDQUFDUixrREFBUzs7K0JBQ05RLFNBQVMsQ0FBQ08sT0FBTzs7d0JBQXBDTixVQUFVO3dCQUNWQyxRQUFRLEdBQUcsR0FBRyxDQUFDZixrRUFBNkIsQ0FBQ2MsVUFBVTt3QkFDdkRFLE1BQU0sR0FBR0QsUUFBUSxDQUFDUSxTQUFTO3dCQUU3Qk4sUUFBUSxHQUFHLEdBQUcsQ0FBQ2pCLG9EQUFlLENBQUNRLHFEQUFnQixFQUFFQyxrRkFBYSxFQUFFTyxNQUFNOzs7K0JBRWxEQyxRQUFRLENBQUNTLFFBQVE7O3dCQUFyQ1IsV0FBVzs7K0JBQ0FBLFdBQVcsQ0FBQ1MsSUFBSTs7d0JBQTNCUixFQUFFOzs7Ozs7d0JBRUosRUFBRSxXQUFPLENBQUM7NEJBQ1JTLEtBQUssQ0FBQyxDQUE4Rzt3QkFDdEgsQ0FBQzs7d0JBR0hqQixNQUFNLENBQUNrQixJQUFJLENBQUMsQ0FBUTs7Ozs7Ozs7Ozs7UUFDeEIsQ0FBQztlQWpCY2pCLG1CQUFrQjs7SUFtQmpDLEVBQUUsRUFBRUwseURBQVEsRUFBRSxDQUFDO1FBQ2IsTUFBTSw2RUFDSHVCLENBQUc7a0dBQ0R4Qix5REFBSzs7Ozs7Ozs7OztJQUdaLENBQUMsTUFBTSxDQUFDO1FBQ1IsTUFBTSw2RUFDSHdCLENBQUc7WUFBQ0MsU0FBUyxFQUFFN0IsMkVBQWdCOzs0RkFDN0IrQixDQUFJO29CQUFDRixTQUFTLEVBQUU3Qiw2RUFBa0I7MEdBQ2hDNEIsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFN0IsNkVBQWtCOzt3R0FDL0JpQyxDQUFDO2dDQUNBQyxJQUFJLEVBQUMsQ0FBaUY7Z0NBQ3RGTCxTQUFTLEVBQUMsQ0FBMkM7MENBQUMsQ0FDeEQ7Ozs7Ozt3R0FDQ0QsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQXFCO3NIQUNqQ0ksQ0FBQztvQ0FDQUosU0FBUyxFQUFDLENBQXFDOzt3Q0FBRSxDQUFHO3dDQUFDLENBQ3ZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFJTEQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQVc7MEdBQ3ZCNUIsbURBQUs7d0JBQUNrQyxHQUFHLEVBQUVqQyx5REFBSzt3QkFBRWtDLE1BQU0sRUFBQyxDQUFXOzs7Ozs7Ozs7Ozs0RkFFdENSLENBQUc7b0JBQUNDLFNBQVMsRUFBQyxDQUEwQjswR0FDdENELENBQUc7d0JBQUNDLFNBQVMsRUFBQyxDQUFxQjs4R0FDakNRLENBQU07NEJBQ0xDLE9BQU8sRUFBRTVCLGtCQUFrQjs0QkFDM0JtQixTQUFTLEVBQUcsQ0FBTyxTQUFLLE1BQTJGLENBQTlGLEVBQUUsRUFBQyxDQUEyRjtzQ0FBRyxDQUV4SDs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFHSFUsQ0FBQztvQkFDQVYsU0FBUyxFQUFDLENBQXNDOzhCQUFDLENBRW5EOzs7Ozs7NEZBQ0NVLENBQUM7b0JBQUNWLFNBQVMsRUFBQyxDQUF5Qzs4QkFBQyxDQUV2RDs7Ozs7Ozs7Ozs7O0lBR04sQ0FBQztBQUNILENBQUM7R0FqRXVCckIsTUFBTTs7UUFDWFQsa0RBQVM7OztLQURKUyxNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZhdWNldC5qcz9iNjhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgaHVza3kgZnJvbSAnLi4vYXNzZXRzL2h1c2t5LmdpZidcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXG5pbXBvcnQgeyBodXNreWNvaW5hZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IEh1c2t5Q29pbiBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0h1c2t5Q29pbi5zb2wvSHVza3lDb2luLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhdWNldCAoKSB7XG4gICAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgICBhc3luYyBmdW5jdGlvbiBkaXNwZW5zZUh1c2t5Q29pbnMoKSB7XG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuXG4gICAgICAgIGxldCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoaHVza3ljb2luYWRkcmVzcywgSHVza3lDb2luLmFiaSwgc2lnbmVyKVxuICAgICAgICB0cnkge1xuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5kaXNwZW5zZSgpXG4gICAgICAgIGxldCB0eCA9IGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKVxuICAgICAgICB9IGNhdGNoKGVycikge1xuICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IGFscmVhZHkgaGF2ZSBIdXNreUNvaW5zISBJbXBvcnQgdGhlIHRva2VuIGFkZHJlc3MgdG8gTWV0YU1hc2sgYW5kIGdvIHN0YWtlIHRoZW0gb3Igc2VuZCB0byB5b3VyIGZyaWVuZHMuXCIpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcm91dGVyLnB1c2goJy9zdGFrZScpXG4gICAgfVxuICAgIFxuICAgIGlmIChpc01vYmlsZSkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TW9kYWw+PC9Nb2RhbD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApXG4gICAgfSBlbHNlIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9yaW5rZWJ5LmV0aGVyc2Nhbi5pby9hZGRyZXNzLzB4OGNmYjQyYTgwMjkxNzM3Y2I2MmNlZjdiNjY1ZmUxMzA0ZDExMmZlZScgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXIgdGV4dC01eGwgdGV4dC1ibHVlLTUwMCBwLTQnPkh1c2t5Q29pblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyIHRleHQtNHhsIGZvbnQtbm9ybWFsJz57JyAnfURpc3BlbnNpbmcgRmF1Y2V0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPScgbWF4LXcteGwnPlxuICAgICAgICAgIDxJbWFnZSBzcmM9e2h1c2t5fSBsYXlvdXQ9J2ludHJpbnNpYyc+PC9JbWFnZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG10LTgnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgb25DbGljaz17ZGlzcGVuc2VIdXNreUNvaW5zfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHctJHszNn0gbXQtMiBwLTMgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgc2hhZG93LTJ4bCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlYH0+XG4gICAgICAgICAgICAgICAgUmVjZWl2ZSBIdXNreUNvaW5zXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwIFxuICAgICAgICAgIGNsYXNzTmFtZT0ndGV4dC1zbSBwLTIgbXQtNCBmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICBDbGljayB0byBjbGFpbSB5b3VyIDY5NDIwIEh1c2t5Q29pbnNcbiAgICAgICAgPC9wPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQteHMgZmxleCBqdXN0aWZ5LWNlbnRlciB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgTm90ZTogTWFrZSBzdXJlIHRvIGNvbmZpZ3VyZSBNZXRhTWFzayBmaXJzdDsgeW91IHdpbGwgYmUgcHJvbXB0ZWQgdG8gcGF5IGdhcyBhbmQgZXhlY3V0ZSB0aGUgdHJhbnNhY3Rpb25cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59Il0sIm5hbWVzIjpbImV0aGVycyIsInVzZVJvdXRlciIsInN0eWxlcyIsIkltYWdlIiwiaHVza3kiLCJXZWIzTW9kYWwiLCJNb2RhbCIsImlzTW9iaWxlIiwiaHVza3ljb2luYWRkcmVzcyIsIkh1c2t5Q29pbiIsIkZhdWNldCIsInJvdXRlciIsImRpc3BlbnNlSHVza3lDb2lucyIsIndlYjNNb2RhbCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsInNpZ25lciIsImNvbnRyYWN0IiwidHJhbnNhY3Rpb24iLCJ0eCIsImNvbm5lY3QiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImFiaSIsImRpc3BlbnNlIiwid2FpdCIsImFsZXJ0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJkZXNjcmlwdGlvbiIsImEiLCJocmVmIiwic3JjIiwibGF5b3V0IiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/faucet.js\n");

/***/ })

});