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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faucet; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_husky_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/husky.gif */ \"./assets/husky.gif\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modal */ \"./components/modal.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/dist/lib.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Faucet() {\n    var catchMobile = function catchMobile() {\n        var bool = react_device_detect__WEBPACK_IMPORTED_MODULE_7__.isMobile;\n        for(var i = 0; i < 2; i++){\n            if (!bool) continue;\n            if (bool = true) {\n                bool = false;\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 43,\n                        columnNumber: 15\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 42,\n                    columnNumber: 13\n                }, this));\n            }\n        }\n        router.push('/faucet');\n    };\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function dispenseHuskyCoins() {\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    function _dispenseHuskyCoins() {\n        _dispenseHuskyCoins = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_8__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_9__.abi, signer);\n                        _ctx.prev = 7;\n                        _ctx.next = 10;\n                        return contract.dispense();\n                    case 10:\n                        transaction = _ctx.sent;\n                        _ctx.next = 13;\n                        return transaction.wait();\n                    case 13:\n                        tx = _ctx.sent;\n                        _ctx.next = 19;\n                        break;\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](7);\n                        if (_ctx.t0) {\n                            alert(\"You already have HuskyCoins! Import the token address to MetaMask and go stake them or send to your friends.\");\n                        }\n                    case 19:\n                        router.push('/stake');\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    7,\n                    16\n                ]\n            ]);\n        }));\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    catchMobile();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"https://rinkeby.etherscan.io/address/0x8cfb42a80291737cb62cef7b665fe1304d112fee\",\n                            className: \"justify-center text-5xl text-blue-500 p-4\",\n                            children: \"HuskyCoin\"\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                className: \"justify-center text-4xl font-normal\",\n                                children: [\n                                    ' ',\n                                    \"Dispensing Faucet\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 61,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 60,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 55,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                className: \"flex justify-center mt-8\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"justify-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center max-w-2xl\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: _assets_husky_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                layout: \"intrinsic\"\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 70,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 69,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-6\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                onClick: dispenseHuskyCoins,\n                                className: \"flex w-\".concat(36, \" mt-2 p-3 rounded-full bg-green-500 hover:bg-green-700 shadow-xl justify-center text-white\"),\n                                children: \"Receive HuskyCoins\"\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 73,\n                                columnNumber: 15\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 68,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 67,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"text-sm p-2 mt-4 flex justify-center\",\n                children: \"Click to claim your 69420 HuskyCoins\"\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 81,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                className: \"text-xs flex justify-center text-center\",\n                children: \"Note: Make sure to configure MetaMask first; you will be prompted to pay gas and execute the transaction\"\n            }, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 85,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n        lineNumber: 53,\n        columnNumber: 7\n    }, this));\n};\n_s(Faucet, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Faucet;\nvar _c;\n$RefreshReg$(_c, \"Faucet\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QjtnQ0FDM0JpQixTQUFTLEVBQUcsQ0FBTyxTQUFLLE1BQTBGLENBQTdGLEVBQUUsRUFBQyxDQUEwRjswQ0FBRyxDQUV2SDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFJTFUsQ0FBQztnQkFDQVYsU0FBUyxFQUFDLENBQXNDOzBCQUFDLENBRW5EOzs7Ozs7d0ZBQ0NVLENBQUM7Z0JBQUNWLFNBQVMsRUFBQyxDQUF5QzswQkFBQyxDQUV2RDs7Ozs7Ozs7Ozs7O0FBR1IsQ0FBQztHQTlFdUJ4QixNQUFNOztRQUNYVCxrREFBUzs7O0tBREpTLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmF1Y2V0LmpzP2I2OGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBodXNreSBmcm9tICcuLi9hc3NldHMvaHVza3kuZ2lmJ1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tICd3ZWIzbW9kYWwnXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi4vY29tcG9uZW50cy9tb2RhbCdcbmltcG9ydCB7IGlzTW9iaWxlIH0gZnJvbSAncmVhY3QtZGV2aWNlLWRldGVjdCdcbmltcG9ydCB7IGh1c2t5Y29pbmFkZHJlc3MgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgSHVza3lDb2luIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvSHVza3lDb2luLnNvbC9IdXNreUNvaW4uanNvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmF1Y2V0ICgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3BlbnNlSHVza3lDb2lucygpIHtcbiAgICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG5cbiAgICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChodXNreWNvaW5hZGRyZXNzLCBIdXNreUNvaW4uYWJpLCBzaWduZXIpXG4gICAgICAgIHRyeSB7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmRpc3BlbnNlKClcbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgYWxyZWFkeSBoYXZlIEh1c2t5Q29pbnMhIEltcG9ydCB0aGUgdG9rZW4gYWRkcmVzcyB0byBNZXRhTWFzayBhbmQgZ28gc3Rha2UgdGhlbSBvciBzZW5kIHRvIHlvdXIgZnJpZW5kcy5cIilcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByb3V0ZXIucHVzaCgnL3N0YWtlJylcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gY2F0Y2hNb2JpbGUoKSB7XG4gICAgICBsZXQgYm9vbCA9IGlzTW9iaWxlXG4gICAgICBcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgIGlmICghYm9vbCkgY29udGludWU7IFxuXG4gICAgICAgIGlmIChib29sID0gdHJ1ZSkge1xuICAgICAgICAgIGJvb2wgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPE1vZGFsPjwvTW9kYWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJvdXRlci5wdXNoKCcvZmF1Y2V0JylcbiAgICB9XG5cbiAgICBjYXRjaE1vYmlsZSgpXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vYWRkcmVzcy8weDhjZmI0MmE4MDI5MTczN2NiNjJjZWY3YjY2NWZlMTMwNGQxMTJmZWUnIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyIHRleHQtNXhsIHRleHQtYmx1ZS01MDAgcC00Jz5IdXNreUNvaW5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlciB0ZXh0LTR4bCBmb250LW5vcm1hbCc+eycgJ31EaXNwZW5zaW5nIEZhdWNldFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbWF4LXctMnhsJz5cbiAgICAgICAgICAgICAgPEltYWdlIHNyYz17aHVza3l9IGxheW91dD0naW50cmluc2ljJz48L0ltYWdlPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtdC02Jz5cbiAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2Rpc3BlbnNlSHVza3lDb2luc31cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BmbGV4IHctJHszNn0gbXQtMiBwLTMgcm91bmRlZC1mdWxsIGJnLWdyZWVuLTUwMCBob3ZlcjpiZy1ncmVlbi03MDAgc2hhZG93LXhsIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVgfT5cbiAgICAgICAgICAgICAgICAgIFJlY2VpdmUgSHVza3lDb2luc1xuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgXG4gICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNtIHAtMiBtdC00IGZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgIENsaWNrIHRvIGNsYWltIHlvdXIgNjk0MjAgSHVza3lDb2luc1xuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyBmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyJz5cbiAgICAgICAgICBOb3RlOiBNYWtlIHN1cmUgdG8gY29uZmlndXJlIE1ldGFNYXNrIGZpcnN0OyB5b3Ugd2lsbCBiZSBwcm9tcHRlZCB0byBwYXkgZ2FzIGFuZCBleGVjdXRlIHRoZSB0cmFuc2FjdGlvblxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG59XG4iXSwibmFtZXMiOlsiZXRoZXJzIiwidXNlUm91dGVyIiwic3R5bGVzIiwiSW1hZ2UiLCJodXNreSIsIldlYjNNb2RhbCIsIk1vZGFsIiwiaXNNb2JpbGUiLCJodXNreWNvaW5hZGRyZXNzIiwiSHVza3lDb2luIiwiRmF1Y2V0IiwiY2F0Y2hNb2JpbGUiLCJib29sIiwiaSIsImRpdiIsInJvdXRlciIsInB1c2giLCJkaXNwZW5zZUh1c2t5Q29pbnMiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0aW9uIiwicHJvdmlkZXIiLCJzaWduZXIiLCJjb250cmFjdCIsInRyYW5zYWN0aW9uIiwidHgiLCJjb25uZWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJkaXNwZW5zZSIsIndhaXQiLCJhbGVydCIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJkZXNjcmlwdGlvbiIsImEiLCJocmVmIiwic3JjIiwibGF5b3V0IiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/faucet.js\n");

/***/ })

});