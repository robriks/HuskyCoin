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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faucet; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_husky_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/husky.gif */ \"./assets/husky.gif\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modal */ \"./components/modal.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/dist/lib.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction Faucet() {\n    var _s = $RefreshSig$();\n    function dispenseHuskyCoins() {\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    function _dispenseHuskyCoins() {\n        _dispenseHuskyCoins = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var router, web3Modal, connection, provider, signer, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        _s();\n                        router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())();\n                        _ctx.next = 5;\n                        return web3Modal.connect();\n                    case 5:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_8__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_9__.abi, signer);\n                        _ctx.prev = 9;\n                        _ctx.next = 12;\n                        return contract.dispense();\n                    case 12:\n                        transaction = _ctx.sent;\n                        _ctx.next = 15;\n                        return transaction.wait();\n                    case 15:\n                        tx = _ctx.sent;\n                        _ctx.next = 21;\n                        break;\n                    case 18:\n                        _ctx.prev = 18;\n                        _ctx.t0 = _ctx[\"catch\"](9);\n                        if (_ctx.t0) {\n                            alert(\"You already have HuskyCoins! Import the token address to MetaMask and go stake them or send to your friends.\");\n                        }\n                    case 21:\n                        router.push('/stake');\n                    case 22:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    9,\n                    18\n                ]\n            ]);\n        }));\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    _s(dispenseHuskyCoins, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n        return [\n            next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n        ];\n    });\n    function catchMobile() {\n        return _catchMobile.apply(this, arguments);\n    }\n    function _catchMobile() {\n        _catchMobile = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var bool, i;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        bool = react_device_detect__WEBPACK_IMPORTED_MODULE_7__.isMobile;\n                        if (!bool) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        i = 0;\n                    case 3:\n                        if (!(i < 2)) {\n                            _ctx.next = 11;\n                            break;\n                        }\n                        if (bool) {\n                            _ctx.next = 6;\n                            break;\n                        }\n                        return _ctx.abrupt(\"break\", 11);\n                    case 6:\n                        bool = false;\n                        return _ctx.abrupt(\"return\", /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 42,\n                                columnNumber: 18\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 42,\n                            columnNumber: 13\n                        }, this));\n                    case 8:\n                        i++;\n                        _ctx.next = 3;\n                        break;\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, this);\n        }));\n        return _catchMobile.apply(this, arguments);\n    }\n    catchMobile();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"https://rinkeby.etherscan.io/address/0x8cfb42a80291737cb62cef7b665fe1304d112fee\",\n                            className: \"justify-center text-5xl text-blue-500 p-4\",\n                            children: \"HuskyCoin\"\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"justify-center text-4xl font-normal\",\n                                children: [\n                                    ' ',\n                                    \"Dispensing Faucet\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 58,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 57,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 52,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center max-w-2xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: _assets_husky_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                layout: \"intrinsic\"\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 67,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 66,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: dispenseHuskyCoins,\n                                className: \"flex w-\".concat(36, \" mt-2 p-3 rounded-full bg-green-500 hover:bg-green-700 shadow-xl justify-center text-white\"),\n                                children: \"Receive HuskyCoins\"\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 65,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 64,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"text-sm p-2 mt-4 flex justify-center\",\n                children: \"Click to claim your 69420 HuskyCoins\"\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 78,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"text-xs flex justify-center text-center\",\n                children: \"Note: Make sure to configure MetaMask first; you will be prompted to pay gas and execute the transaction\"\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 82,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n        lineNumber: 50,\n        columnNumber: 7\n    }, this));\n};\n_c = Faucet;\nvar _c;\n$RefreshReg$(_c, \"Faucet\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUUsRUFBQyxDQUEwRjswQ0FBRyxDQUV2SDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJTFUsQ0FBQztnQkFDQVYsU0FBUyxFQUFDLENBQXNDOzBCQUFDLENBRW5EOzs7Ozs7d0ZBQ0NVLENBQUM7Z0JBQUNWLFNBQVMsRUFBQyxDQUF5QzswQkFBQyxDQUV2RDs7Ozs7Ozs7Ozs7O0FBR1IsQ0FBQztLQTNFdUJ4QixNQUFNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ZhdWNldC5qcz9iNjhmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXG5pbXBvcnQgaHVza3kgZnJvbSAnLi4vYXNzZXRzL2h1c2t5LmdpZidcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xuaW1wb3J0IE1vZGFsIGZyb20gJy4uL2NvbXBvbmVudHMvbW9kYWwnXG5pbXBvcnQgeyBpc01vYmlsZSB9IGZyb20gJ3JlYWN0LWRldmljZS1kZXRlY3QnXG5pbXBvcnQgeyBodXNreWNvaW5hZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IEh1c2t5Q29pbiBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0h1c2t5Q29pbi5zb2wvSHVza3lDb2luLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZhdWNldCAoKSB7XG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzcGVuc2VIdXNreUNvaW5zKCkge1xuICAgICAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKClcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbilcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcblxuICAgICAgICBsZXQgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGh1c2t5Y29pbmFkZHJlc3MsIEh1c2t5Q29pbi5hYmksIHNpZ25lcilcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuZGlzcGVuc2UoKVxuICAgICAgICBsZXQgdHggPSBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBhbGVydChcIllvdSBhbHJlYWR5IGhhdmUgSHVza3lDb2lucyEgSW1wb3J0IHRoZSB0b2tlbiBhZGRyZXNzIHRvIE1ldGFNYXNrIGFuZCBnbyBzdGFrZSB0aGVtIG9yIHNlbmQgdG8geW91ciBmcmllbmRzLlwiKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJvdXRlci5wdXNoKCcvc3Rha2UnKVxuICAgIH1cbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBjYXRjaE1vYmlsZSgpIHtcbiAgICAgIGxldCBib29sID0gaXNNb2JpbGU7XG4gICAgICBpZiAoYm9vbCkge1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDI7IGkrKykge1xuICAgICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj48TW9kYWw+PC9Nb2RhbD48L2Rpdj5cbiAgICAgICAgICApICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNhdGNoTW9iaWxlKClcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kZXNjcmlwdGlvbn0+XG4gICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgaHJlZj0naHR0cHM6Ly9yaW5rZWJ5LmV0aGVyc2Nhbi5pby9hZGRyZXNzLzB4OGNmYjQyYTgwMjkxNzM3Y2I2MmNlZjdiNjY1ZmUxMzA0ZDExMmZlZScgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXIgdGV4dC01eGwgdGV4dC1ibHVlLTUwMCBwLTQnPkh1c2t5Q29pblxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyIHRleHQtNHhsIGZvbnQtbm9ybWFsJz57JyAnfURpc3BlbnNpbmcgRmF1Y2V0XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L21haW4+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG10LTgnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtYXgtdy0yeGwnPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtodXNreX0gbGF5b3V0PSdpbnRyaW5zaWMnPjwvSW1hZ2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG10LTYnPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZGlzcGVuc2VIdXNreUNvaW5zfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggdy0kezM2fSBtdC0yIHAtMyByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCBzaGFkb3cteGwganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZWB9PlxuICAgICAgICAgICAgICAgICAgUmVjZWl2ZSBIdXNreUNvaW5zXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBcbiAgICAgICAgICBjbGFzc05hbWU9J3RleHQtc20gcC0yIG10LTQgZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgQ2xpY2sgdG8gY2xhaW0geW91ciA2OTQyMCBIdXNreUNvaW5zXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXInPlxuICAgICAgICAgIE5vdGU6IE1ha2Ugc3VyZSB0byBjb25maWd1cmUgTWV0YU1hc2sgZmlyc3Q7IHlvdSB3aWxsIGJlIHByb21wdGVkIHRvIHBheSBnYXMgYW5kIGV4ZWN1dGUgdGhlIHRyYW5zYWN0aW9uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJldGhlcnMiLCJ1c2VSb3V0ZXIiLCJzdHlsZXMiLCJJbWFnZSIsImh1c2t5IiwiV2ViM01vZGFsIiwiTW9kYWwiLCJpc01vYmlsZSIsImh1c2t5Y29pbmFkZHJlc3MiLCJIdXNreUNvaW4iLCJGYXVjZXQiLCJkaXNwZW5zZUh1c2t5Q29pbnMiLCJyb3V0ZXIiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0aW9uIiwicHJvdmlkZXIiLCJzaWduZXIiLCJjb250cmFjdCIsInRyYW5zYWN0aW9uIiwidHgiLCJjb25uZWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJkaXNwZW5zZSIsIndhaXQiLCJhbGVydCIsInB1c2giLCJjYXRjaE1vYmlsZSIsImJvb2wiLCJpIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFpbiIsImRlc2NyaXB0aW9uIiwiYSIsImhyZWYiLCJzcmMiLCJsYXlvdXQiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/faucet.js\n");

/***/ })

});