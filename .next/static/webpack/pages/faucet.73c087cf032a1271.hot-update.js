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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Faucet; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/modal */ \"./components/modal.js\");\n/* harmony import */ var react_device_detect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-device-detect */ \"./node_modules/react-device-detect/dist/lib.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _s = $RefreshSig$();\nfunction Faucet() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    function dispenseHuskyCoins() {\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    function _dispenseHuskyCoins() {\n        _dispenseHuskyCoins = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_8__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_6__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_7__.abi, signer);\n                        _ctx.prev = 7;\n                        _ctx.next = 10;\n                        return contract.dispense();\n                    case 10:\n                        transaction = _ctx.sent;\n                        _ctx.next = 13;\n                        return transaction.wait();\n                    case 13:\n                        tx = _ctx.sent;\n                        _ctx.next = 19;\n                        break;\n                    case 16:\n                        _ctx.prev = 16;\n                        _ctx.t0 = _ctx[\"catch\"](7);\n                        if (_ctx.t0) {\n                            alert(\"You already have HuskyCoins! Import the token address to MetaMask and go stake them or send to your friends.\");\n                        }\n                    case 19:\n                        router.push('/stake');\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    7,\n                    16\n                ]\n            ]);\n        }));\n        return _dispenseHuskyCoins.apply(this, arguments);\n    }\n    if (react_device_detect__WEBPACK_IMPORTED_MODULE_5__.isMobile) {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_components_modal__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                lineNumber: 34,\n                columnNumber: 11\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n            lineNumber: 33,\n            columnNumber: 9\n        }, this));\n    } else {\n        return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().container),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_9___default().description),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                href: \"https://rinkeby.etherscan.io/address/0x8cfb42a80291737cb62cef7b665fe1304d112fee\",\n                                className: \"justify-center text-5xl text-blue-500 p-4\",\n                                children: \"HuskyCoin\"\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                                className: \"flex justify-center\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                                    className: \"justify-center text-4xl font-normal\",\n                                    children: [\n                                        ' ',\n                                        \"Dispensing Faucet\"\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                    lineNumber: 47,\n                                    columnNumber: 15\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                                lineNumber: 46,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: \"flex justify-center\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                        className: \"flex justify-center\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: dispenseHuskyCoins,\n                            className: \"flex w-\".concat(36, \" mt-2 p-3 rounded-full bg-green-500 hover:bg-green-700 shadow-2xl justify-center text-white\"),\n                            children: \"Receive HuskyCoins\"\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                            lineNumber: 55,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 53,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"text-sm p-2 mt-4 flex justify-center\",\n                    children: \"Click to claim your 69420 HuskyCoins\"\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 62,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                    className: \"text-xs flex text-center\",\n                    children: \"Note: Make sure to configure MetaMask first; you will be prompted to pay gas and execute the transaction\"\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n                    lineNumber: 66,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/robriks/HuskyCoin/pages/faucet.js\",\n            lineNumber: 39,\n            columnNumber: 7\n        }, this));\n    }\n};\n_s(Faucet, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Faucet;\nvar _c;\n$RefreshReg$(_c, \"Faucet\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9mYXVjZXQuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNRO0FBQ087QUFDYjtBQUNNO0FBQ087QUFDRjtBQUMrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RCxRQUFRLENBQUNRLE1BQU0sR0FBSSxDQUFDOztJQUMvQixHQUFLLENBQUNDLE1BQU0sR0FBR1Isc0RBQVM7YUFDVFMsa0JBQWtCO2VBQWxCQSxtQkFBa0I7O2FBQWxCQSxtQkFBa0I7UUFBbEJBLG1CQUFrQix3SkFBakMsUUFBUSxXQUE0QixDQUFDO2dCQUMzQkMsU0FBUyxFQUNUQyxVQUFVLEVBQ1ZDLFFBQVEsRUFDUkMsTUFBTSxFQUVSQyxRQUFRLEVBRVJDLFdBQVcsRUFDWEMsRUFBRTs7Ozt3QkFSQU4sU0FBUyxHQUFHLEdBQUcsQ0FBQ1Isa0RBQVM7OytCQUNOUSxTQUFTLENBQUNPLE9BQU87O3dCQUFwQ04sVUFBVTt3QkFDVkMsUUFBUSxHQUFHLEdBQUcsQ0FBQ2IsaUVBQTZCLENBQUNZLFVBQVU7d0JBQ3ZERSxNQUFNLEdBQUdELFFBQVEsQ0FBQ1EsU0FBUzt3QkFFN0JOLFFBQVEsR0FBRyxHQUFHLENBQUNmLG1EQUFlLENBQUNNLHFEQUFnQixFQUFFQyxrRkFBYSxFQUFFTyxNQUFNOzs7K0JBRWxEQyxRQUFRLENBQUNTLFFBQVE7O3dCQUFyQ1IsV0FBVzs7K0JBQ0FBLFdBQVcsQ0FBQ1MsSUFBSTs7d0JBQTNCUixFQUFFOzs7Ozs7d0JBRUosRUFBRSxXQUFPLENBQUM7NEJBQ1JTLEtBQUssQ0FBQyxDQUE4Rzt3QkFDdEgsQ0FBQzs7d0JBR0hqQixNQUFNLENBQUNrQixJQUFJLENBQUMsQ0FBUTs7Ozs7Ozs7Ozs7UUFDeEIsQ0FBQztlQWpCY2pCLG1CQUFrQjs7SUFtQmpDLEVBQUUsRUFBRUwseURBQVEsRUFBRSxDQUFDO1FBQ2IsTUFBTSw2RUFDSHVCLENBQUc7a0dBQ0R4Qix5REFBSzs7Ozs7Ozs7OztJQUdaLENBQUMsTUFBTSxDQUFDO1FBQ1IsTUFBTSw2RUFDSHdCLENBQUc7WUFBQ0MsU0FBUyxFQUFFM0IsMEVBQWdCOzs0RkFDN0I2QixDQUFJO29CQUFDRixTQUFTLEVBQUUzQiw0RUFBa0I7MEdBQ2hDMEIsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFFM0IsNEVBQWtCOzt3R0FDL0IrQixDQUFDO2dDQUNBQyxJQUFJLEVBQUMsQ0FBaUY7Z0NBQ3RGTCxTQUFTLEVBQUMsQ0FBMkM7MENBQUMsQ0FDeEQ7Ozs7Ozt3R0FDQ0QsQ0FBRztnQ0FBQ0MsU0FBUyxFQUFDLENBQXFCO3NIQUNqQ0ksQ0FBQztvQ0FDQUosU0FBUyxFQUFDLENBQXFDOzt3Q0FBRSxDQUFHO3dDQUFDLENBQ3ZEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFJTEQsQ0FBRztvQkFBQ0MsU0FBUyxFQUFDLENBQXFCOzBHQUNqQ0QsQ0FBRzt3QkFBQ0MsU0FBUyxFQUFDLENBQXFCOzhHQUNqQ00sQ0FBTTs0QkFDTEMsT0FBTyxFQUFFMUIsa0JBQWtCOzRCQUMzQm1CLFNBQVMsRUFBRyxDQUFPLFNBQUssTUFBMkYsQ0FBOUYsRUFBRSxFQUFDLENBQTJGO3NDQUFHLENBRXhIOzs7Ozs7Ozs7Ozs7Ozs7OzRGQUdIUSxDQUFDO29CQUNBUixTQUFTLEVBQUMsQ0FBc0M7OEJBQUMsQ0FFbkQ7Ozs7Ozs0RkFDQ1EsQ0FBQztvQkFBQ1IsU0FBUyxFQUFDLENBQTBCOzhCQUFDLENBRXhDOzs7Ozs7Ozs7Ozs7SUFHTixDQUFDO0FBQ0gsQ0FBQztHQTlEdUJyQixNQUFNOztRQUNYUCxrREFBUzs7O0tBREpPLE1BQU0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZmF1Y2V0LmpzP2I2OGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgV2ViM01vZGFsIGZyb20gJ3dlYjNtb2RhbCdcbmltcG9ydCBNb2RhbCBmcm9tICcuLi9jb21wb25lbnRzL21vZGFsJ1xuaW1wb3J0IHsgaXNNb2JpbGUgfSBmcm9tICdyZWFjdC1kZXZpY2UtZGV0ZWN0J1xuaW1wb3J0IHsgaHVza3ljb2luYWRkcmVzcyB9IGZyb20gJy4uL2NvbmZpZydcbmltcG9ydCBIdXNreUNvaW4gZnJvbSAnLi4vYXJ0aWZhY3RzL2NvbnRyYWN0cy9IdXNreUNvaW4uc29sL0h1c2t5Q29pbi5qc29uJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGYXVjZXQgKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgYXN5bmMgZnVuY3Rpb24gZGlzcGVuc2VIdXNreUNvaW5zKCkge1xuICAgICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKClcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbilcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcblxuICAgICAgICBsZXQgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGh1c2t5Y29pbmFkZHJlc3MsIEh1c2t5Q29pbi5hYmksIHNpZ25lcilcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuZGlzcGVuc2UoKVxuICAgICAgICBsZXQgdHggPSBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcbiAgICAgICAgfSBjYXRjaChlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBhbGVydChcIllvdSBhbHJlYWR5IGhhdmUgSHVza3lDb2lucyEgSW1wb3J0IHRoZSB0b2tlbiBhZGRyZXNzIHRvIE1ldGFNYXNrIGFuZCBnbyBzdGFrZSB0aGVtIG9yIHNlbmQgdG8geW91ciBmcmllbmRzLlwiKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJvdXRlci5wdXNoKCcvc3Rha2UnKVxuICAgIH1cbiAgICBcbiAgICBpZiAoaXNNb2JpbGUpIHtcbiAgICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPE1vZGFsPjwvTW9kYWw+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKVxuICAgIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGVzY3JpcHRpb259PlxuICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgIGhyZWY9J2h0dHBzOi8vcmlua2VieS5ldGhlcnNjYW4uaW8vYWRkcmVzcy8weDhjZmI0MmE4MDI5MTczN2NiNjJjZWY3YjY2NWZlMTMwNGQxMTJmZWUnIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9J2p1c3RpZnktY2VudGVyIHRleHQtNXhsIHRleHQtYmx1ZS01MDAgcC00Jz5IdXNreUNvaW5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGp1c3RpZnktY2VudGVyJz5cbiAgICAgICAgICAgICAgPGEgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdqdXN0aWZ5LWNlbnRlciB0ZXh0LTR4bCBmb250LW5vcm1hbCc+eycgJ31EaXNwZW5zaW5nIEZhdWNldFxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9tYWluPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBqdXN0aWZ5LWNlbnRlcic+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICBvbkNsaWNrPXtkaXNwZW5zZUh1c2t5Q29pbnN9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17YGZsZXggdy0kezM2fSBtdC0yIHAtMyByb3VuZGVkLWZ1bGwgYmctZ3JlZW4tNTAwIGhvdmVyOmJnLWdyZWVuLTcwMCBzaGFkb3ctMnhsIGp1c3RpZnktY2VudGVyIHRleHQtd2hpdGVgfT5cbiAgICAgICAgICAgICAgICBSZWNlaXZlIEh1c2t5Q29pbnNcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgXG4gICAgICAgICAgY2xhc3NOYW1lPSd0ZXh0LXNtIHAtMiBtdC00IGZsZXgganVzdGlmeS1jZW50ZXInPlxuICAgICAgICAgIENsaWNrIHRvIGNsYWltIHlvdXIgNjk0MjAgSHVza3lDb2luc1xuICAgICAgICA8L3A+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC14cyBmbGV4IHRleHQtY2VudGVyJz5cbiAgICAgICAgICBOb3RlOiBNYWtlIHN1cmUgdG8gY29uZmlndXJlIE1ldGFNYXNrIGZpcnN0OyB5b3Ugd2lsbCBiZSBwcm9tcHRlZCB0byBwYXkgZ2FzIGFuZCBleGVjdXRlIHRoZSB0cmFuc2FjdGlvblxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0iXSwibmFtZXMiOlsiZXRoZXJzIiwidXNlUm91dGVyIiwic3R5bGVzIiwiV2ViM01vZGFsIiwiTW9kYWwiLCJpc01vYmlsZSIsImh1c2t5Y29pbmFkZHJlc3MiLCJIdXNreUNvaW4iLCJGYXVjZXQiLCJyb3V0ZXIiLCJkaXNwZW5zZUh1c2t5Q29pbnMiLCJ3ZWIzTW9kYWwiLCJjb25uZWN0aW9uIiwicHJvdmlkZXIiLCJzaWduZXIiLCJjb250cmFjdCIsInRyYW5zYWN0aW9uIiwidHgiLCJjb25uZWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJkaXNwZW5zZSIsIndhaXQiLCJhbGVydCIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluIiwiZGVzY3JpcHRpb24iLCJhIiwiaHJlZiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/faucet.js\n");

/***/ })

});