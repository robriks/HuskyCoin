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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stake; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\n//import { web3, Web3 } from 'hardhat'\nfunction Stake() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        amount: '',\n        stakeAmt: ''\n    }), input = ref[0], setInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), balance = ref1[0], setBalance = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), staked = ref2[0], setStaked = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadBalance();\n        loadStaked();\n    }, []);\n    function loadBalance() {\n        return _loadBalance.apply(this, arguments);\n    }\n    function _loadBalance() {\n        _loadBalance = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, contract, transaction;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 9;\n                        return contract.getBalance().then(function(result) {\n                            setBalance(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(result));\n                        });\n                    case 9:\n                        transaction = _ctx.sent;\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadBalance.apply(this, arguments);\n    }\n    function loadStaked() {\n        return _loadStaked.apply(this, arguments);\n    }\n    function _loadStaked() {\n        _loadStaked = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, staker, contract, transaction;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        _ctx.next = 8;\n                        return signer.getAddress();\n                    case 8:\n                        staker = _ctx.sent;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 12;\n                        return contract.hasStake(staker).then(function(result) {\n                            setStaked(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(result.totalAmount));\n                        });\n                    case 12:\n                        transaction = _ctx.sent;\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadStaked.apply(this, arguments);\n    }\n    function stake() {\n        return _stake.apply(this, arguments);\n    }\n    function _stake() {\n        _stake = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var amount, stakeAmt, web3Modal, connection, provider, signer, amt, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        loadBalance();\n                        amount = input.amount, stakeAmt = input.stakeAmt;\n                        if (amount) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 7;\n                        return web3Modal.connect();\n                    case 7:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        amt = ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.parseUnits(input.amount, 'ether');\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 14;\n                        return contract.stake(amt);\n                    case 14:\n                        transaction = _ctx.sent;\n                        _ctx.next = 17;\n                        return transaction.wait();\n                    case 17:\n                        tx = _ctx.sent;\n                        loadBalance();\n                        loadStaked();\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _stake.apply(this, arguments);\n    }\n    function unstake() {\n        return _unstake.apply(this, arguments);\n    }\n    function _unstake() {\n        _unstake = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var amount, stakeAmt, web3Modal, connection, provider, signer, stakeAmount, contract, stakeIndex, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        loadStaked();\n                        amount = input.amount, stakeAmt = input.stakeAmt;\n                        if (stakeAmt) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 7;\n                        return web3Modal.connect();\n                    case 7:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        stakeAmount = ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.parseUnits(input.stakeAmt, 'ether');\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 14;\n                        return contract.getStakeholderIndex();\n                    case 14:\n                        stakeIndex = _ctx.sent;\n                        _ctx.next = 17;\n                        return contract.withdraw(stakeAmount, stakeIndex);\n                    case 17:\n                        transaction = _ctx.sent;\n                        _ctx.next = 20;\n                        return transaction.wait();\n                    case 20:\n                        tx = _ctx.sent;\n                        loadBalance();\n                        loadStaked();\n                    case 23:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _unstake.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                    children: [\n                        \"Introduction to\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake\",\n                            children: \" Staking\"\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 91,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 89,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                    children: [\n                        \"Available $HUSKY balance: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                            children: balance\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 94,\n                            columnNumber: 41\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    className: \"flex\",\n                                    placeholder: \"Amount to stake\",\n                                    onChange: function(e) {\n                                        return setInput(_objectSpread({}, input, {\n                                            amount: e.target.value\n                                        }));\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                                    lineNumber: 96,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: stake,\n                                    children: \"Stake\"\n                                }, void 0, false, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                                    lineNumber: 101,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 95,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 93,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                    children: [\n                        \"Total claimable $HUSKY balance: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                            children: staked\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 105,\n                            columnNumber: 47\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    className: \"flex\",\n                                    placeholder: \"Amount to unstake\",\n                                    onChange: function(e) {\n                                        return setInput(_objectSpread({}, input, {\n                                            stakeAmt: e.target.value\n                                        }));\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                                    lineNumber: 107,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: unstake,\n                                    children: \"Withdraw\"\n                                }, void 0, false, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                                    lineNumber: 112,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 106,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 104,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n            lineNumber: 88,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n        lineNumber: 87,\n        columnNumber: 9\n    }, this));\n};\n_s(Stake, \"lgF3RAjX0zZi1+/Jv/yarGu0YaE=\");\n_c = Stake;\nvar _c;\n$RefreshReg$(_c, \"Stake\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVEsQ0FBUkEsQ0FBQzt3Q0FBSWpELE1BQU0sQ0FBTkEsUUFBUSxtQkFBS0QsS0FBSzs0Q0FBRUYsTUFBTSxFQUFFb0QsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7OzRHQUUxREMsQ0FBTTtvQ0FBQ0MsT0FBTyxFQUFFekIsS0FBSzs4Q0FBRSxDQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7NEZBR2hDVSxDQUFHO29CQUFDQyxTQUFTLEVBQUUvQyxxRUFBVzs7d0JBQUUsQ0FDSztvR0FBQ3NELENBQUU7c0NBQUUzQyxNQUFNOzs7Ozs7b0dBQzFDbUMsQ0FBRzs7NEdBQ0R2QyxDQUFLO29DQUNKd0MsU0FBUyxFQUFDLENBQU07b0NBQ2hCUSxXQUFXLEVBQUMsQ0FBbUI7b0NBQy9CQyxRQUFRLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQzt3Q0FBSWpELE1BQU0sQ0FBTkEsUUFBUSxtQkFBS0QsS0FBSzs0Q0FBRUQsUUFBUSxFQUFFbUQsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7Ozs7Ozs7OzRHQUU1REMsQ0FBTTtvQ0FBQ0MsT0FBTyxFQUFFcEIsT0FBTzs4Q0FBRSxDQUFROzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1sRCxDQUFDO0dBNUd1QnJDLEtBQUs7S0FBTEEsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9zdGFrZS5qcz9hMzUzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGV0aGVycyB9IGZyb20gJ2V0aGVycydcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xuXG5pbXBvcnQgeyBodXNreWNvaW5hZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IEh1c2t5Q29pbiBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0h1c2t5Q29pbi5zb2wvSHVza3lDb2luLmpzb24nXG4vL2ltcG9ydCB7IHdlYjMsIFdlYjMgfSBmcm9tICdoYXJkaGF0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFrZSAoKSB7XG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSh7IGFtb3VudDogJycsIHN0YWtlQW10OiAnJyB9KVxuICAgIGNvbnN0IFtiYWxhbmNlLCBzZXRCYWxhbmNlXSA9IHVzZVN0YXRlKClcbiAgICBjb25zdCBbc3Rha2VkLCBzZXRTdGFrZWRdID0gdXNlU3RhdGUoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGxvYWRCYWxhbmNlKClcbiAgICAgIGxvYWRTdGFrZWQoKVxuICAgIH0sIFtdKVxuICAgIFxuICAgIGFzeW5jIGZ1bmN0aW9uIGxvYWRCYWxhbmNlKCkge1xuICAgICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKClcbiAgICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcbiAgICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbilcbiAgICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcblxuICAgICAgICBsZXQgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGh1c2t5Y29pbmFkZHJlc3MsIEh1c2t5Q29pbi5hYmksIHNpZ25lcilcbiAgICAgICAgbGV0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuZ2V0QmFsYW5jZSgpLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgIHNldEJhbGFuY2UoZXRoZXJzLnV0aWxzLmZvcm1hdEV0aGVyKHJlc3VsdCkpXG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZFN0YWtlZCgpIHtcbiAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgY29uc3Qgc3Rha2VyID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKVxuICAgICAgXG4gICAgICBsZXQgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGh1c2t5Y29pbmFkZHJlc3MsIEh1c2t5Q29pbi5hYmksIHNpZ25lcilcbiAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0Lmhhc1N0YWtlKHN0YWtlcikudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgIHNldFN0YWtlZChldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIocmVzdWx0LnRvdGFsQW1vdW50KSlcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gc3Rha2UoKSB7XG4gICAgICBsb2FkQmFsYW5jZSgpXG4gICAgICBjb25zdCB7IGFtb3VudCwgc3Rha2VBbXQgfSA9IGlucHV0XG4gICAgICBpZiAoIWFtb3VudCkgcmV0dXJuXG4gICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKClcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcblxuICAgICAgbGV0IGFtdCA9IGV0aGVycy51dGlscy5wYXJzZVVuaXRzKGlucHV0LmFtb3VudCwgJ2V0aGVyJylcblxuICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChodXNreWNvaW5hZGRyZXNzLCBIdXNreUNvaW4uYWJpLCBzaWduZXIpXG4gICAgICBsZXQgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5zdGFrZShhbXQpXG4gICAgICBsZXQgdHggPSBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcblxuICAgICAgbG9hZEJhbGFuY2UoKVxuICAgICAgbG9hZFN0YWtlZCgpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdW5zdGFrZSgpIHtcbiAgICAgIGxvYWRTdGFrZWQoKVxuICAgICAgY29uc3QgeyBhbW91bnQsIHN0YWtlQW10IH0gPSBpbnB1dFxuICAgICAgaWYgKCFzdGFrZUFtdCkgcmV0dXJuXG4gICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKClcbiAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXG4gICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxuICAgICAgY29uc3Qgc2lnbmVyID0gcHJvdmlkZXIuZ2V0U2lnbmVyKClcbiAgICAgIC8vY29uc3Qgc3Rha2VyID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKVxuXG4gICAgICBsZXQgc3Rha2VBbW91bnQgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhpbnB1dC5zdGFrZUFtdCwgJ2V0aGVyJylcblxuICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChodXNreWNvaW5hZGRyZXNzLCBIdXNreUNvaW4uYWJpLCBzaWduZXIpXG4gICAgICBsZXQgc3Rha2VJbmRleCA9IGF3YWl0IGNvbnRyYWN0LmdldFN0YWtlaG9sZGVySW5kZXgoKVxuICAgICAgbGV0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3Qud2l0aGRyYXcoc3Rha2VBbW91bnQsIHN0YWtlSW5kZXgpXG4gICAgICBsZXQgdHggPSBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcblxuICAgICAgbG9hZEJhbGFuY2UoKVxuICAgICAgbG9hZFN0YWtlZCgpXG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgICAgSW50cm9kdWN0aW9uIHRvIFxuICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5jb2luYmFzZS5jb20vbGVhcm4vY3J5cHRvLWJhc2ljcy93aGF0LWlzLXByb29mLW9mLXdvcmstb3ItcHJvb2Ytb2Ytc3Rha2UnPiBTdGFraW5nPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICBBdmFpbGFibGUgJEhVU0tZIGJhbGFuY2U6IDxoND57YmFsYW5jZX08L2g0PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBbW91bnQgdG8gc3Rha2UnIFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXQoey4uLmlucHV0LCBhbW91bnQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFrZX0+U3Rha2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICAgIFRvdGFsIGNsYWltYWJsZSAkSFVTS1kgYmFsYW5jZTogPGg0PntzdGFrZWR9PC9oND5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXgnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQW1vdW50IHRvIHVuc3Rha2UnXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dCh7Li4uaW5wdXQsIHN0YWtlQW10OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dW5zdGFrZX0+V2l0aGRyYXc8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJldGhlcnMiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIldlYjNNb2RhbCIsImh1c2t5Y29pbmFkZHJlc3MiLCJIdXNreUNvaW4iLCJTdGFrZSIsImFtb3VudCIsInN0YWtlQW10IiwiaW5wdXQiLCJzZXRJbnB1dCIsImJhbGFuY2UiLCJzZXRCYWxhbmNlIiwic3Rha2VkIiwic2V0U3Rha2VkIiwibG9hZEJhbGFuY2UiLCJsb2FkU3Rha2VkIiwid2ViM01vZGFsIiwiY29ubmVjdGlvbiIsInByb3ZpZGVyIiwic2lnbmVyIiwiY29udHJhY3QiLCJ0cmFuc2FjdGlvbiIsImNvbm5lY3QiLCJwcm92aWRlcnMiLCJXZWIzUHJvdmlkZXIiLCJnZXRTaWduZXIiLCJDb250cmFjdCIsImFiaSIsImdldEJhbGFuY2UiLCJ0aGVuIiwicmVzdWx0IiwidXRpbHMiLCJmb3JtYXRFdGhlciIsInN0YWtlciIsImdldEFkZHJlc3MiLCJoYXNTdGFrZSIsInRvdGFsQW1vdW50Iiwic3Rha2UiLCJhbXQiLCJ0eCIsInBhcnNlVW5pdHMiLCJ3YWl0IiwidW5zdGFrZSIsInN0YWtlQW1vdW50Iiwic3Rha2VJbmRleCIsImdldFN0YWtlaG9sZGVySW5kZXgiLCJ3aXRoZHJhdyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImEiLCJocmVmIiwiY2FyZCIsImg0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/stake.js\n");

/***/ })

});