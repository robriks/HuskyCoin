"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/stake",{

/***/ "./pages/stake.js":
/*!************************!*\
  !*** ./pages/stake.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stake; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Stake() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        amount: ''\n    }), input = ref[0], setInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), balance = ref1[0], setBalance = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), staked = ref2[0], setStaked = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadBalance();\n        loadStaked();\n    }, []);\n    function loadBalance() {\n        return _loadBalance.apply(this, arguments);\n    }\n    function _loadBalance() {\n        _loadBalance = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, contract, transaction;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 9;\n                        return contract.getBalance().then(function(result) {\n                            setBalance(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(result));\n                        });\n                    case 9:\n                        transaction = _ctx.sent;\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadBalance.apply(this, arguments);\n    }\n    function loadStaked() {\n        return _loadStaked.apply(this, arguments);\n    }\n    function _loadStaked() {\n        _loadStaked = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, staker, contract, transaction;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        _ctx.next = 8;\n                        return signer.getAddress();\n                    case 8:\n                        staker = _ctx.sent;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 12;\n                        return contract.hasStake(staker).then(function(result) {\n                            setStaked(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(result.totalAmount));\n                        });\n                    case 12:\n                        transaction = _ctx.sent;\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadStaked.apply(this, arguments);\n    }\n    function stake() {\n        return _stake.apply(this, arguments);\n    }\n    function _stake() {\n        _stake = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, amt, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        amt = ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.parseUnits(input.amount, 'ether');\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 10;\n                        return contract.stake(amt);\n                    case 10:\n                        transaction = _ctx.sent;\n                        _ctx.next = 13;\n                        return transaction.wait();\n                    case 13:\n                        tx = _ctx.sent;\n                        loadBalance();\n                    case 15:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _stake.apply(this, arguments);\n    }\n    function unstake() {\n        return _unstake.apply(this, arguments);\n    }\n    function _unstake() {\n        _unstake = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // TODO\n        //loadStaked()\n        }));\n        return _unstake.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                    children: [\n                        \"Available $HUSKY balance: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                            children: balance\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 69,\n                            columnNumber: 41\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 68,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: \"flex\",\n                            placeholder: \"Amount to stake\",\n                            onChange: function(e) {\n                                return setInput(_objectSpread({}, input, {\n                                    amount: e.target.value\n                                }));\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 72,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: stake,\n                            children: \"Stake\"\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 77,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 71,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                    children: [\n                        \"Staked $HUSKY balance: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                            children: staked\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 80,\n                            columnNumber: 38\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 79,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: \"TODO: Withdraw button\"\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 82,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n            lineNumber: 67,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n        lineNumber: 66,\n        columnNumber: 9\n    }, this));\n};\n_s(Stake, \"3sKt8BwqMITvHb8V0J3pG5wLiUc=\");\n_c = Stake;\nvar _c;\n$RefreshReg$(_c, \"Stake\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLRCxLQUFLO29DQUFFRCxNQUFNLEVBQUU0QyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7b0dBRTFEQyxDQUFNOzRCQUFDQyxPQUFPLEVBQUVsQixLQUFLO3NDQUFFLENBQUs7Ozs7Ozs7Ozs7Ozs0RkFFOUJNLENBQUc7b0JBQUNDLFNBQVMsRUFBRTFDLHFFQUFXOzt3QkFBRSxDQUNKO29HQUFDOEMsQ0FBRTtzQ0FBRXBDLE1BQU07Ozs7Ozs7Ozs7Ozs0RkFFbkMrQixDQUFHOzhCQUFDLENBQXFCOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl0QyxDQUFDO0dBN0V1QnJDLEtBQUs7S0FBTEEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdGFrZS5qcz9hMzUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xuXG5pbXBvcnQgeyBodXNreWNvaW5hZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IEh1c2t5Q29pbiBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0h1c2t5Q29pbi5zb2wvSHVza3lDb2luLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YWtlICgpIHtcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKHsgYW1vdW50OiAnJyB9KVxuICAgIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbc3Rha2VkLCBzZXRTdGFrZWRdID0gdXNlU3RhdGUoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGxvYWRCYWxhbmNlKClcbiAgICAgIGxvYWRTdGFrZWQoKVxuICAgIH0sIFtdKVxuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKClcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbilcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcblxuICAgICAgICBsZXQgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGh1c2t5Y29pbmFkZHJlc3MsIEh1c2t5Q29pbi5hYmksIHNpZ25lcilcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuZ2V0QmFsYW5jZSgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHNldEJhbGFuY2UoZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHJlc3VsdCkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFN0YWtlZCgpIHtcbiAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgY29uc3Qgc3Rha2VyID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKVxuICAgICAgXG4gICAgICBsZXQgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGh1c2t5Y29pbmFkZHJlc3MsIEh1c2t5Q29pbi5hYmksIHNpZ25lcilcbiAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0Lmhhc1N0YWtlKHN0YWtlcikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHNldFN0YWtlZChldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIocmVzdWx0LnRvdGFsQW1vdW50KSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gc3Rha2UoKSB7XG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuXG4gICAgICAgIGxldCBhbXQgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhpbnB1dC5hbW91bnQsICdldGhlcicpXG5cbiAgICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChodXNreWNvaW5hZGRyZXNzLCBIdXNreUNvaW4uYWJpLCBzaWduZXIpXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LnN0YWtlKGFtdClcbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpXG5cbiAgICAgICAgbG9hZEJhbGFuY2UoKVxuICAgIH1cblxuICAgIGFzeW5jIGZ1bmN0aW9uIHVuc3Rha2UoKSB7XG4gICAgICAvLyBUT0RPXG5cbiAgICAgIC8vbG9hZFN0YWtlZCgpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICBBdmFpbGFibGUgJEhVU0tZIGJhbGFuY2U6IDxoND57YmFsYW5jZX08L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPSdmbGV4J1xuICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBbW91bnQgdG8gc3Rha2UnIFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldElucHV0KHsuLi5pbnB1dCwgYW1vdW50OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFrZX0+U3Rha2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jYXJkfT5cbiAgICAgICAgICAgICAgU3Rha2VkICRIVVNLWSBiYWxhbmNlOiA8aDQ+e3N0YWtlZH08L2g0PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlRPRE86IFdpdGhkcmF3IGJ1dHRvbjwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59Il0sIm5hbWVzIjpbImV0aGVycyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwic3R5bGVzIiwiV2ViM01vZGFsIiwiaHVza3ljb2luYWRkcmVzcyIsIkh1c2t5Q29pbiIsIlN0YWtlIiwiYW1vdW50IiwiaW5wdXQiLCJzZXRJbnB1dCIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwic3Rha2VkIiwic2V0U3Rha2VkIiwibG9hZEJhbGFuY2UiLCJsb2FkU3Rha2VkIiwid2ViM01vZGFsIiwiY29ubmVjdGlvbiIsInByb3ZpZGVyIiwic2lnbmVyIiwiY29udHJhY3QiLCJ0cmFuc2FjdGlvbiIsImNvbm5lY3QiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImFiaSIsImdldEJhbGFuY2UiLCJ0aGVuIiwicmVzdWx0IiwidXRpbHMiLCJmb3JtYXRFdGhlciIsInN0YWtlciIsImdldEFkZHJlc3MiLCJoYXNTdGFrZSIsInRvdGFsQW1vdW50Iiwic3Rha2UiLCJhbXQiLCJ0eCIsInBhcnNlVW5pdHMiLCJ3YWl0IiwidW5zdGFrZSIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJjYXJkIiwiaDQiLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/stake.js\n");

/***/ })

});