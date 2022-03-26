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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faucet; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _assets_husky_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/husky.gif */ \"./assets/husky.gif\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/modal */ \"./components/modal.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/dist/lib.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Faucet() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function dispenseHuskyCoins() {\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    function _dispenseHuskyCoins() {\n        _dispenseHuskyCoins = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_5___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_10__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_8__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_9__.abi, signer);\n                        _ctx.prev = 7;\n                        _ctx.next = 10;\n                        return contract.dispense();\n                    case 10:\n                        transaction = _ctx.sent;\n                        _ctx.next = 13;\n                        return transaction.wait();\n                    case 13:\n                        tx = _ctx.sent;\n                        _ctx.next = 19;\n                        break;\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](7);\n                        if (_ctx.t0) {\n                            alert(\"You already have HuskyCoins! Import the token address to MetaMask and go stake them or send to your friends.\");\n                        }\n                    case 19:\n                        router.push('/stake');\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    7,\n                    16\n                ]\n            ]);\n        }));\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    if (react_device_detect__WEBPACK_IMPORTED_MODULE_7__.isMobile) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 35,\n                        columnNumber: 16\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 35,\n                    columnNumber: 11\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                        href: \"https://polygonscan.com/address/0x8CFb42a80291737Cb62cEF7B665Fe1304D112Fee\",\n                                        className: \"justify-center text-5xl text-blue-500 p-4\",\n                                        children: \"HuskyCoin\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                            className: \"justify-center text-4xl font-normal\",\n                                            children: [\n                                                ' ',\n                                                \"Dispensing Faucet\"\n                                            ]\n                                        }, void 0, true, {\n                                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                            lineNumber: 44,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 37,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            className: \"flex justify-center mt-8\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"justify-center\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center max-w-xl\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                            src: _assets_husky_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                            layout: \"intrinsic\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                        className: \"flex justify-center mt-6\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                            onClick: dispenseHuskyCoins,\n                                            className: \"flex w-\".concat(36, \" mt-2 p-3 rounded-full bg-green-500 hover:bg-green-700 shadow-xl justify-center text-white\"),\n                                            children: \"Receive HuskyCoins\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 51,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-sm p-2 mt-4 flex justify-center\",\n                            children: \"Click to claim your 69420 HuskyCoins\"\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            className: \"text-xs flex justify-center text-center\",\n                            children: \"Note: Make sure to configure MetaMask first; you will be prompted to pay gas and execute the transaction\"\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 68,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 36,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n            lineNumber: 34,\n            columnNumber: 9\n        }, this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_11___default().description),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"https://rinkeby.etherscan.io/address/0x8cfb42a80291737cb62cef7b665fe1304d112fee\",\n                                className: \"justify-center text-5xl text-blue-500 p-4\",\n                                children: \"HuskyCoin\"\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 79,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    className: \"justify-center text-4xl font-normal\",\n                                    children: [\n                                        ' ',\n                                        \"Dispensing Faucet\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 83,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 78,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 77,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center mt-8\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center max-w-xl\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                    src: _assets_husky_gif__WEBPACK_IMPORTED_MODULE_4__[\"default\"],\n                                    layout: \"intrinsic\"\n                                }, void 0, false, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                    lineNumber: 93,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center mt-6\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: dispenseHuskyCoins,\n                                    className: \"flex w-\".concat(36, \" mt-2 p-3 rounded-full bg-green-500 hover:bg-green-700 shadow-xl justify-center text-white\"),\n                                    children: \"Receive HuskyCoins\"\n                                }, void 0, false, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 91,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 90,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"text-sm p-2 mt-4 flex justify-center\",\n                    children: \"Click to claim your 69420 HuskyCoins\"\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 104,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"text-xs flex justify-center text-center\",\n                    children: \"Note: Make sure to configure MetaMask first; you will be prompted to pay gas and execute the transaction\"\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 108,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this));\n    }\n};\n_s(Faucet, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Faucet;\nvar _c;\n$RefreshReg$(_c, \"Faucet\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXVjZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNRO0FBQ087QUFDaEI7QUFDUztBQUNOO0FBQ007QUFDTztBQUNGO0FBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTVELFFBQVEsQ0FBQ1UsTUFBTSxHQUFJLENBQUM7O0lBQ2pDLEdBQUssQ0FBQ0MsTUFBTSxHQUFHVixzREFBUzthQUNQVyxrQkFBa0I7ZUFBbEJBLG1CQUFrQjs7YUFBbEJBLG1CQUFrQjtRQUFsQkEsbUJBQWtCLHdKQUFqQyxRQUFRLFdBQTRCLENBQUM7Z0JBQzNCQyxTQUFTLEVBQ1RDLFVBQVUsRUFDVkMsUUFBUSxFQUNSQyxNQUFNLEVBRVJDLFFBQVEsRUFFUkMsV0FBVyxFQUNYQyxFQUFFOzs7O3dCQVJBTixTQUFTLEdBQUcsR0FBRyxDQUFDUixrREFBUzs7K0JBQ05RLFNBQVMsQ0FBQ08sT0FBTzs7d0JBQXBDTixVQUFVO3dCQUNWQyxRQUFRLEdBQUcsR0FBRyxDQUFDZixrRUFBNkIsQ0FBQ2MsVUFBVTt3QkFDdkRFLE1BQU0sR0FBR0QsUUFBUSxDQUFDUSxTQUFTO3dCQUU3Qk4sUUFBUSxHQUFHLEdBQUcsQ0FBQ2pCLG9EQUFlLENBQUNRLHFEQUFnQixFQUFFQyxrRkFBYSxFQUFFTyxNQUFNOzs7K0JBRWxEQyxRQUFRLENBQUNTLFFBQVE7O3dCQUFyQ1IsV0FBVzs7K0JBQ0FBLFdBQVcsQ0FBQ1MsSUFBSTs7d0JBQTNCUixFQUFFOzs7Ozs7d0JBRUosRUFBRSxXQUFPLENBQUM7NEJBQ1JTLEtBQUssQ0FBQyxDQUE4Rzt3QkFDdEgsQ0FBQzs7d0JBRUhqQixNQUFNLENBQUNrQixJQUFJLENBQUMsQ0FBUTs7Ozs7Ozs7Ozs7UUFDeEIsQ0FBQztlQWhCY2pCLG1CQUFrQjs7SUFrQmpDLEVBQUUsRUFBRUwseURBQVEsRUFBRSxDQUFDO1FBQ2IsTUFBTSw2RUFDSHVCLENBQUc7OzRGQUNEQSxDQUFHOzBHQUFFeEIseURBQUs7Ozs7Ozs7Ozs7NEZBQ1Z3QixDQUFHO29CQUFDQyxTQUFTLEVBQUU3QiwyRUFBZ0I7O29HQUMvQitCLENBQUk7NEJBQUNGLFNBQVMsRUFBRTdCLDZFQUFrQjtrSEFDaEM0QixDQUFHO2dDQUFDQyxTQUFTLEVBQUU3Qiw2RUFBa0I7O2dIQUMvQmlDLENBQUM7d0NBQ0FDLElBQUksRUFBQyxDQUE0RTt3Q0FDakZMLFNBQVMsRUFBQyxDQUEyQztrREFBQyxDQUN4RDs7Ozs7O2dIQUNDRCxDQUFHO3dDQUFDQyxTQUFTLEVBQUMsQ0FBcUI7OEhBQ2pDSSxDQUFDOzRDQUNBSixTQUFTLEVBQUMsQ0FBcUM7O2dEQUFFLENBQUc7Z0RBQUMsQ0FDdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29HQUlMRCxDQUFHOzRCQUFDQyxTQUFTLEVBQUMsQ0FBMEI7a0hBQ3RDRCxDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7O2dIQUM1QkQsQ0FBRzt3Q0FBQ0MsU0FBUyxFQUFDLENBQThCOzhIQUMxQzVCLG1EQUFLOzRDQUFDa0MsR0FBRyxFQUFFakMseURBQUs7NENBQUVrQyxNQUFNLEVBQUMsQ0FBVzs7Ozs7Ozs7Ozs7Z0hBRXRDUixDQUFHO3dDQUFDQyxTQUFTLEVBQUMsQ0FBMEI7OEhBQ3RDUSxDQUFNOzRDQUNMQyxPQUFPLEVBQUU1QixrQkFBa0I7NENBQzNCbUIsU0FBUyxFQUFHLENBQU8sU0FBSyxNQUEwRixDQUE3RixFQUFFLEVBQUMsQ0FBMEY7c0RBQUcsQ0FFdkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b0dBSUxVLENBQUM7NEJBQ0FWLFNBQVMsRUFBQyxDQUFzQztzQ0FBQyxDQUVuRDs7Ozs7O29HQUNDVSxDQUFDOzRCQUFDVixTQUFTLEVBQUMsQ0FBeUM7c0NBQUMsQ0FFdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUlOLENBQUMsTUFBTSxDQUFDO1FBQ1IsTUFBTSw2RUFDSEQsQ0FBRztZQUFDQyxTQUFTLEVBQUU3QiwyRUFBZ0I7OzRGQUM3QitCLENBQUk7b0JBQUNGLFNBQVMsRUFBRTdCLDZFQUFrQjswR0FDaEM0QixDQUFHO3dCQUFDQyxTQUFTLEVBQUU3Qiw2RUFBa0I7O3dHQUMvQmlDLENBQUM7Z0NBQ0FDLElBQUksRUFBQyxDQUFpRjtnQ0FDdEZMLFNBQVMsRUFBQyxDQUEyQzswQ0FBQyxDQUN4RDs7Ozs7O3dHQUNDRCxDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBcUI7c0hBQ2pDSSxDQUFDO29DQUNBSixTQUFTLEVBQUMsQ0FBcUM7O3dDQUFFLENBQUc7d0NBQUMsQ0FDdkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzRGQUlMRCxDQUFHO29CQUFDQyxTQUFTLEVBQUMsQ0FBMEI7MEdBQ3RDRCxDQUFHO3dCQUFDQyxTQUFTLEVBQUMsQ0FBZ0I7O3dHQUM1QkQsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQThCO3NIQUMxQzVCLG1EQUFLO29DQUFDa0MsR0FBRyxFQUFFakMseURBQUs7b0NBQUVrQyxNQUFNLEVBQUMsQ0FBVzs7Ozs7Ozs7Ozs7d0dBRXRDUixDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBMEI7c0hBQ3RDUSxDQUFNO29DQUNMQyxPQUFPLEVBQUU1QixrQkFBa0I7b0NBQzNCbUIsU0FBUyxFQUFHLENBQU8sU0FBSyxNQUEwRixDQUE3RixFQUFFLEVBQUMsQ0FBMEY7OENBQUcsQ0FFdkg7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBSUxVLENBQUM7b0JBQ0FWLFNBQVMsRUFBQyxDQUFzQzs4QkFBQyxDQUVuRDs7Ozs7OzRGQUNDVSxDQUFDO29CQUFDVixTQUFTLEVBQUMsQ0FBeUM7OEJBQUMsQ0FFdkQ7Ozs7Ozs7Ozs7OztJQUdOLENBQUM7QUFDSCxDQUFDO0dBdEd1QnJCLE1BQU07O1FBQ2JULGtEQUFTOzs7S0FERlMsTUFBTSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9mYXVjZXQuanM/YjY4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IGh1c2t5IGZyb20gJy4uL2Fzc2V0cy9odXNreS5naWYnXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gJ3dlYjNtb2RhbCdcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJ1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xuaW1wb3J0IHsgaHVza3ljb2luYWRkcmVzcyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBIdXNreUNvaW4gZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9IdXNreUNvaW4uc29sL0h1c2t5Q29pbi5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXVjZXQgKCkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGFzeW5jIGZ1bmN0aW9uIGRpc3BlbnNlSHVza3lDb2lucygpIHtcbiAgICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG5cbiAgICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChodXNreWNvaW5hZGRyZXNzLCBIdXNreUNvaW4uYWJpLCBzaWduZXIpXG4gICAgICAgIHRyeSB7XG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmRpc3BlbnNlKClcbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpXG4gICAgICAgIH0gY2F0Y2goZXJyKSB7XG4gICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgYWxlcnQoXCJZb3UgYWxyZWFkeSBoYXZlIEh1c2t5Q29pbnMhIEltcG9ydCB0aGUgdG9rZW4gYWRkcmVzcyB0byBNZXRhTWFzayBhbmQgZ28gc3Rha2UgdGhlbSBvciBzZW5kIHRvIHlvdXIgZnJpZW5kcy5cIilcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcm91dGVyLnB1c2goJy9zdGFrZScpXG4gICAgfVxuXG4gICAgaWYgKGlzTW9iaWxlKSB7XG4gICAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+PE1vZGFsPjwvTW9kYWw+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLmRlc2NyaXB0aW9ufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgICA8YSBcbiAgICAgICAgICAgICAgICBocmVmPSdodHRwczovL3BvbHlnb25zY2FuLmNvbS9hZGRyZXNzLzB4OENGYjQyYTgwMjkxNzM3Q2I2MmNFRjdCNjY1RmUxMzA0RDExMkZlZScgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlciB0ZXh0LTV4bCB0ZXh0LWJsdWUtNTAwIHAtNCc+SHVza3lDb2luXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICAgIDxhIFxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlciB0ZXh0LTR4bCBmb250LW5vcm1hbCc+eycgJ31EaXNwZW5zaW5nIEZhdWNldFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L21haW4+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbXQtOCc+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtYXgtdy14bCc+XG4gICAgICAgICAgICAgICAgPEltYWdlIHNyYz17aHVza3l9IGxheW91dD0naW50cmluc2ljJz48L0ltYWdlPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbXQtNic+XG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgb25DbGljaz17ZGlzcGVuc2VIdXNreUNvaW5zfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgZmxleCB3LSR7MzZ9IG10LTIgcC0zIHJvdW5kZWQtZnVsbCBiZy1ncmVlbi01MDAgaG92ZXI6YmctZ3JlZW4tNzAwIHNoYWRvdy14bCBqdXN0aWZ5LWNlbnRlciB0ZXh0LXdoaXRlYH0+XG4gICAgICAgICAgICAgICAgICAgIFJlY2VpdmUgSHVza3lDb2luc1xuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxwIFxuICAgICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNtIHAtMiBtdC00IGZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgQ2xpY2sgdG8gY2xhaW0geW91ciA2OTQyMCBIdXNreUNvaW5zXG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyBmbGV4IGp1c3RpZnktY2VudGVyIHRleHQtY2VudGVyJz5cbiAgICAgICAgICAgIE5vdGU6IE1ha2Ugc3VyZSB0byBjb25maWd1cmUgTWV0YU1hc2sgZmlyc3Q7IHlvdSB3aWxsIGJlIHByb21wdGVkIHRvIHBheSBnYXMgYW5kIGV4ZWN1dGUgdGhlIHRyYW5zYWN0aW9uXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vYWRkcmVzcy8weDhjZmI0MmE4MDI5MTczN2NiNjJjZWY3YjY2NWZlMTMwNGQxMTJmZWUnIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyIHRleHQtNXhsIHRleHQtYmx1ZS01MDAgcC00Jz5IdXNreUNvaW5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlciB0ZXh0LTR4bCBmb250LW5vcm1hbCc+eycgJ31EaXNwZW5zaW5nIEZhdWNldFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlciBtdC04Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nanVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXIgbWF4LXcteGwnPlxuICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtodXNreX0gbGF5b3V0PSdpbnRyaW5zaWMnPjwvSW1hZ2U+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyIG10LTYnPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgb25DbGljaz17ZGlzcGVuc2VIdXNreUNvaW5zfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggdy0kezM2fSBtdC0yIHAtMyByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCBzaGFkb3cteGwganVzdGlmeS1jZW50ZXIgdGV4dC13aGl0ZWB9PlxuICAgICAgICAgICAgICAgICAgUmVjZWl2ZSBIdXNreUNvaW5zXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8cCBcbiAgICAgICAgICBjbGFzc05hbWU9J3RleHQtc20gcC0yIG10LTQgZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgQ2xpY2sgdG8gY2xhaW0geW91ciA2OTQyMCBIdXNreUNvaW5zXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LXhzIGZsZXgganVzdGlmeS1jZW50ZXIgdGV4dC1jZW50ZXInPlxuICAgICAgICAgIE5vdGU6IE1ha2Ugc3VyZSB0byBjb25maWd1cmUgTWV0YU1hc2sgZmlyc3Q7IHlvdSB3aWxsIGJlIHByb21wdGVkIHRvIHBheSBnYXMgYW5kIGV4ZWN1dGUgdGhlIHRyYW5zYWN0aW9uXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuIl0sIm5hbWVzIjpbImV0aGVycyIsInVzZVJvdXRlciIsInN0eWxlcyIsIkltYWdlIiwiaHVza3kiLCJXZWIzTW9kYWwiLCJNb2RhbCIsImlzTW9iaWxlIiwiaHVza3ljb2luYWRkcmVzcyIsIkh1c2t5Q29pbiIsIkZhdWNldCIsInJvdXRlciIsImRpc3BlbnNlSHVza3lDb2lucyIsIndlYjNNb2RhbCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsInNpZ25lciIsImNvbnRyYWN0IiwidHJhbnNhY3Rpb24iLCJ0eCIsImNvbm5lY3QiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImFiaSIsImRpc3BlbnNlIiwid2FpdCIsImFsZXJ0IiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJkZXNjcmlwdGlvbiIsImEiLCJocmVmIiwic3JjIiwibGF5b3V0IiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/faucet.js\n");

/***/ })

});