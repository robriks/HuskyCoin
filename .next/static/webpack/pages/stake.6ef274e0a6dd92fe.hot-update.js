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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stake; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\n//import { web3, Web3 } from 'hardhat'\nfunction Stake() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        amount: '',\n        stakeAmt: ''\n    }), input = ref[0], setInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), balance = ref1[0], setBalance = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(), staked = ref2[0], setStaked = ref2[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        loadBalance();\n        loadStaked();\n    }, []);\n    function loadBalance() {\n        return _loadBalance.apply(this, arguments);\n    }\n    function _loadBalance() {\n        _loadBalance = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, contract, transaction;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 9;\n                        return contract.getBalance().then(function(result) {\n                            setBalance(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(result));\n                        });\n                    case 9:\n                        transaction = _ctx.sent;\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadBalance.apply(this, arguments);\n    }\n    function loadStaked() {\n        return _loadStaked.apply(this, arguments);\n    }\n    function _loadStaked() {\n        _loadStaked = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, staker, contract, transaction;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        _ctx.next = 8;\n                        return signer.getAddress();\n                    case 8:\n                        staker = _ctx.sent;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 12;\n                        return contract.hasStake(staker).then(function(result) {\n                            setStaked(ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.formatEther(result.totalAmount));\n                        });\n                    case 12:\n                        transaction = _ctx.sent;\n                    case 13:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadStaked.apply(this, arguments);\n    }\n    function stake() {\n        return _stake.apply(this, arguments);\n    }\n    function _stake() {\n        _stake = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var amount, stakeAmt, web3Modal, connection, provider, signer, amt, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        loadBalance();\n                        amount = input.amount, stakeAmt = input.stakeAmt;\n                        if (amount) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 7;\n                        return web3Modal.connect();\n                    case 7:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        amt = ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.parseUnits(input.amount, 'ether');\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 14;\n                        return contract.stake(amt);\n                    case 14:\n                        transaction = _ctx.sent;\n                        _ctx.next = 17;\n                        return transaction.wait();\n                    case 17:\n                        tx = _ctx.sent;\n                        loadBalance();\n                        loadStaked();\n                    case 20:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _stake.apply(this, arguments);\n    }\n    function unstake() {\n        return _unstake.apply(this, arguments);\n    }\n    function _unstake() {\n        _unstake = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var amount, stakeAmt, web3Modal, connection, provider, signer, staker, contract, stakeIndex, unstakeSummary, unstakeAmount, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        loadStaked();\n                        amount = input.amount, stakeAmt = input.stakeAmt;\n                        if (stakeAmt) {\n                            _ctx.next = 4;\n                            break;\n                        }\n                        return _ctx.abrupt(\"return\");\n                    case 4:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_3___default())();\n                        _ctx.next = 7;\n                        return web3Modal.connect();\n                    case 7:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        _ctx.next = 12;\n                        return signer.getAddress();\n                    case 12:\n                        staker = _ctx.sent;\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_4__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_5__.abi, signer);\n                        _ctx.next = 16;\n                        return contract.getStakeholderIndex();\n                    case 16:\n                        stakeIndex = _ctx.sent;\n                        _ctx.next = 19;\n                        return contract.hasStake(staker);\n                    case 19:\n                        unstakeSummary = _ctx.sent;\n                        unstakeAmount = ethers__WEBPACK_IMPORTED_MODULE_6__.ethers.utils.parseUnits(unstakeSummary.originalStake);\n                        _ctx.next = 23;\n                        return contract.withdraw(unstakeAmount, stakeIndex);\n                    case 23:\n                        transaction = _ctx.sent;\n                        _ctx.next = 26;\n                        return transaction.wait();\n                    case 26:\n                        tx = _ctx.sent;\n                        loadBalance();\n                        loadStaked();\n                    case 29:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _unstake.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().title),\n                    children: [\n                        \"Introduction to\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"a\", {\n                            href: \"https://www.coinbase.com/learn/crypto-basics/what-is-proof-of-work-or-proof-of-stake\",\n                            children: \" Staking\"\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 93,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 91,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                    children: [\n                        \"Available $HUSKY balance: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                            children: balance\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 96,\n                            columnNumber: 41\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    className: \"flex\",\n                                    placeholder: \"Amount to stake\",\n                                    onChange: function(e) {\n                                        return setInput(_objectSpread({}, input, {\n                                            amount: e.target.value\n                                        }));\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: stake,\n                                    children: \"Stake\"\n                                }, void 0, false, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                                    lineNumber: 103,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 97,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 95,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().card),\n                    children: [\n                        \"Total staked $HUSKY balance: \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h4\", {\n                            children: staked\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 107,\n                            columnNumber: 44\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                                    className: \"flex\",\n                                    placeholder: \"Amount to unstake\",\n                                    onChange: function(e) {\n                                        return setInput(_objectSpread({}, input, {\n                                            stakeAmt: e.target.value\n                                        }));\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                                    lineNumber: 109,\n                                    columnNumber: 17\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                                    onClick: unstake,\n                                    children: \"Withdraw All\"\n                                }, void 0, false, {\n                                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 17\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 108,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 106,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n            lineNumber: 90,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n        lineNumber: 89,\n        columnNumber: 9\n    }, this));\n};\n_s(Stake, \"lgF3RAjX0zZi1+/Jv/yarGu0YaE=\");\n_c = Stake;\nvar _c;\n$RefreshReg$(_c, \"Stake\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9zdGFrZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNZO0FBQ0c7QUFDYjtBQUVXO0FBQytCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUMzRSxFQUFzQztBQUV2QixRQUFRLENBQUNPLEtBQUssR0FBSSxDQUFDOztJQUM5QixHQUFLLENBQXFCTCxHQUFzQyxHQUF0Q0EsK0NBQVEsQ0FBQyxDQUFDO1FBQUNNLE1BQU0sRUFBRSxDQUFFO1FBQUVDLFFBQVEsRUFBRSxDQUFFO0lBQUMsQ0FBQyxHQUF4REMsS0FBSyxHQUFjUixHQUFzQyxLQUFsRFMsUUFBUSxHQUFJVCxHQUFzQztJQUNoRSxHQUFLLENBQXlCQSxJQUFVLEdBQVZBLCtDQUFRLElBQS9CVSxPQUFPLEdBQWdCVixJQUFVLEtBQXhCVyxVQUFVLEdBQUlYLElBQVU7SUFDeEMsR0FBSyxDQUF1QkEsSUFBVSxHQUFWQSwrQ0FBUSxJQUE3QlksTUFBTSxHQUFlWixJQUFVLEtBQXZCYSxTQUFTLEdBQUliLElBQVU7SUFFdENELGdEQUFTLENBQUMsUUFDZCxHQURvQixDQUFDO1FBQ2ZlLFdBQVc7UUFDWEMsVUFBVTtJQUNaLENBQUMsRUFBRSxDQUFDLENBQUM7YUFFVUQsV0FBVztlQUFYQSxZQUFXOzthQUFYQSxZQUFXO1FBQVhBLFlBQVcsd0pBQTFCLFFBQVEsV0FBcUIsQ0FBQztnQkFDcEJFLFNBQVMsRUFDVEMsVUFBVSxFQUNWQyxRQUFRLEVBQ1JDLE1BQU0sRUFFUkMsUUFBUSxFQUNSQyxXQUFXOzs7O3dCQU5UTCxTQUFTLEdBQUcsR0FBRyxDQUFDZCxrREFBUzs7K0JBQ05jLFNBQVMsQ0FBQ00sT0FBTzs7d0JBQXBDTCxVQUFVO3dCQUNWQyxRQUFRLEdBQUcsR0FBRyxDQUFDcEIsaUVBQTZCLENBQUNtQixVQUFVO3dCQUN2REUsTUFBTSxHQUFHRCxRQUFRLENBQUNPLFNBQVM7d0JBRTdCTCxRQUFRLEdBQUcsR0FBRyxDQUFDdEIsbURBQWUsQ0FBQ0sscURBQWdCLEVBQUVDLGtGQUFhLEVBQUVlLE1BQU07OytCQUNsREMsUUFBUSxDQUFDUSxVQUFVLEdBQUdDLElBQUksQ0FBQyxRQUFRLENBQVBDLE1BQU0sRUFBSyxDQUFDOzRCQUM5RG5CLFVBQVUsQ0FBQ2IsNERBQXdCLENBQUNnQyxNQUFNO3dCQUM1QyxDQUFDOzt3QkFGR1QsV0FBVzs7Ozs7O1FBR25CLENBQUM7ZUFWY1AsWUFBVzs7YUFZWEMsVUFBVTtlQUFWQSxXQUFVOzthQUFWQSxXQUFVO1FBQVZBLFdBQVUsd0pBQXpCLFFBQVEsV0FBb0IsQ0FBQztnQkFDckJDLFNBQVMsRUFDVEMsVUFBVSxFQUNWQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTmMsTUFBTSxFQUVSYixRQUFRLEVBQ1JDLFdBQVc7Ozs7d0JBUFRMLFNBQVMsR0FBRyxHQUFHLENBQUNkLGtEQUFTOzsrQkFDTmMsU0FBUyxDQUFDTSxPQUFPOzt3QkFBcENMLFVBQVU7d0JBQ1ZDLFFBQVEsR0FBRyxHQUFHLENBQUNwQixpRUFBNkIsQ0FBQ21CLFVBQVU7d0JBQ3ZERSxNQUFNLEdBQUdELFFBQVEsQ0FBQ08sU0FBUzs7K0JBQ1pOLE1BQU0sQ0FBQ2UsVUFBVTs7d0JBQWhDRCxNQUFNO3dCQUVSYixRQUFRLEdBQUcsR0FBRyxDQUFDdEIsbURBQWUsQ0FBQ0sscURBQWdCLEVBQUVDLGtGQUFhLEVBQUVlLE1BQU07OytCQUNsREMsUUFBUSxDQUFDZSxRQUFRLENBQUNGLE1BQU0sRUFBRUosSUFBSSxDQUFDLFFBQVEsQ0FBUEMsTUFBTSxFQUFLLENBQUM7NEJBQ2xFakIsU0FBUyxDQUFDZiw0REFBd0IsQ0FBQ2dDLE1BQU0sQ0FBQ00sV0FBVzt3QkFDdkQsQ0FBQzs7d0JBRkdmLFdBQVc7Ozs7OztRQUdqQixDQUFDO2VBWGNOLFdBQVU7O2FBYVZzQixLQUFLO2VBQUxBLE1BQUs7O2FBQUxBLE1BQUs7UUFBTEEsTUFBSyx3SkFBcEIsUUFBUSxXQUFlLENBQUM7Z0JBRWQvQixNQUFNLEVBQUVDLFFBQVEsRUFFbEJTLFNBQVMsRUFDVEMsVUFBVSxFQUNWQyxRQUFRLEVBQ1JDLE1BQU0sRUFFUm1CLEdBQUcsRUFFSGxCLFFBQVEsRUFDUkMsV0FBVyxFQUNYa0IsRUFBRTs7Ozt3QkFaTnpCLFdBQVc7d0JBQ0hSLE1BQU0sR0FBZUUsS0FBSyxDQUExQkYsTUFBTSxFQUFFQyxRQUFRLEdBQUtDLEtBQUssQ0FBbEJELFFBQVE7NEJBQ25CRCxNQUFNOzs7Ozs7d0JBQ0xVLFNBQVMsR0FBRyxHQUFHLENBQUNkLGtEQUFTOzsrQkFDTmMsU0FBUyxDQUFDTSxPQUFPOzt3QkFBcENMLFVBQVU7d0JBQ1ZDLFFBQVEsR0FBRyxHQUFHLENBQUNwQixpRUFBNkIsQ0FBQ21CLFVBQVU7d0JBQ3ZERSxNQUFNLEdBQUdELFFBQVEsQ0FBQ08sU0FBUzt3QkFFN0JhLEdBQUcsR0FBR3hDLDJEQUF1QixDQUFDVSxLQUFLLENBQUNGLE1BQU0sRUFBRSxDQUFPO3dCQUVuRGMsUUFBUSxHQUFHLEdBQUcsQ0FBQ3RCLG1EQUFlLENBQUNLLHFEQUFnQixFQUFFQyxrRkFBYSxFQUFFZSxNQUFNOzsrQkFDbERDLFFBQVEsQ0FBQ2lCLEtBQUssQ0FBQ0MsR0FBRzs7d0JBQXRDakIsV0FBVzs7K0JBQ0FBLFdBQVcsQ0FBQ29CLElBQUk7O3dCQUEzQkYsRUFBRTt3QkFFTnpCLFdBQVc7d0JBQ1hDLFVBQVU7Ozs7OztRQUNaLENBQUM7ZUFqQmNzQixNQUFLOzthQW1CTEssT0FBTztlQUFQQSxRQUFPOzthQUFQQSxRQUFPO1FBQVBBLFFBQU8sd0pBQXRCLFFBQVEsV0FBaUIsQ0FBQztnQkFFaEJwQyxNQUFNLEVBQUVDLFFBQVEsRUFFbEJTLFNBQVMsRUFDVEMsVUFBVSxFQUNWQyxRQUFRLEVBQ1JDLE1BQU0sRUFDTmMsTUFBTSxFQUlSYixRQUFRLEVBQ1J1QixVQUFVLEVBQ1ZDLGNBQWMsRUFDZEMsYUFBYSxFQUNieEIsV0FBVyxFQUNYa0IsRUFBRTs7Ozt3QkFoQk54QixVQUFVO3dCQUNGVCxNQUFNLEdBQWVFLEtBQUssQ0FBMUJGLE1BQU0sRUFBRUMsUUFBUSxHQUFLQyxLQUFLLENBQWxCRCxRQUFROzRCQUNuQkEsUUFBUTs7Ozs7O3dCQUNQUyxTQUFTLEdBQUcsR0FBRyxDQUFDZCxrREFBUzs7K0JBQ05jLFNBQVMsQ0FBQ00sT0FBTzs7d0JBQXBDTCxVQUFVO3dCQUNWQyxRQUFRLEdBQUcsR0FBRyxDQUFDcEIsaUVBQTZCLENBQUNtQixVQUFVO3dCQUN2REUsTUFBTSxHQUFHRCxRQUFRLENBQUNPLFNBQVM7OytCQUNaTixNQUFNLENBQUNlLFVBQVU7O3dCQUFoQ0QsTUFBTTt3QkFJUmIsUUFBUSxHQUFHLEdBQUcsQ0FBQ3RCLG1EQUFlLENBQUNLLHFEQUFnQixFQUFFQyxrRkFBYSxFQUFFZSxNQUFNOzsrQkFDbkRDLFFBQVEsQ0FBQzBCLG1CQUFtQjs7d0JBQS9DSCxVQUFVOzsrQkFDYXZCLFFBQVEsQ0FBQ2UsUUFBUSxDQUFDRixNQUFNOzt3QkFBL0NXLGNBQWM7d0JBQ2RDLGFBQWEsR0FBRy9DLDJEQUF1QixDQUFDOEMsY0FBYyxDQUFDRyxhQUFhOzsrQkFDaEQzQixRQUFRLENBQUM0QixRQUFRLENBQUNILGFBQWEsRUFBRUYsVUFBVTs7d0JBQS9EdEIsV0FBVzs7K0JBQ0FBLFdBQVcsQ0FBQ29CLElBQUk7O3dCQUEzQkYsRUFBRTt3QkFFTnpCLFdBQVc7d0JBQ1hDLFVBQVU7Ozs7OztRQUNaLENBQUM7ZUFyQmMyQixRQUFPOztJQXdCdEIsTUFBTSw2RUFDRE8sQ0FBRztRQUFDQyxTQUFTLEVBQUVqRCwwRUFBZ0I7OEZBQzdCZ0QsQ0FBRztZQUFDQyxTQUFTLEVBQUVqRCxxRUFBVzs7NEZBQ3hCZ0QsQ0FBRztvQkFBQ0MsU0FBUyxFQUFFakQsc0VBQVk7O3dCQUFFLENBRTVCO29HQUFDcUQsQ0FBQzs0QkFBQ0MsSUFBSSxFQUFDLENBQXNGO3NDQUFDLENBQVE7Ozs7Ozs7Ozs7Ozs0RkFFeEdOLENBQUc7b0JBQUNDLFNBQVMsRUFBRWpELHFFQUFXOzt3QkFBRSxDQUNEO29HQUFDd0QsQ0FBRTtzQ0FBRS9DLE9BQU87Ozs7OztvR0FDckN1QyxDQUFHOzs0R0FDRHpDLENBQUs7b0NBQ0owQyxTQUFTLEVBQUMsQ0FBTTtvQ0FDaEJRLFdBQVcsRUFBQyxDQUFpQjtvQ0FDN0JDLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxDQUFDO3dDQUFJbkQsTUFBTSxDQUFOQSxRQUFRLG1CQUFLRCxLQUFLOzRDQUFFRixNQUFNLEVBQUVzRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7NEdBRTFEQyxDQUFNO29DQUFDQyxPQUFPLEVBQUUzQixLQUFLOzhDQUFFLENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs0RkFHaENZLENBQUc7b0JBQUNDLFNBQVMsRUFBRWpELHFFQUFXOzt3QkFBRSxDQUNFO29HQUFDd0QsQ0FBRTtzQ0FBRTdDLE1BQU07Ozs7OztvR0FDdkNxQyxDQUFHOzs0R0FDRHpDLENBQUs7b0NBQ0owQyxTQUFTLEVBQUMsQ0FBTTtvQ0FDaEJRLFdBQVcsRUFBQyxDQUFtQjtvQ0FDL0JDLFFBQVEsRUFBRUMsUUFBUSxDQUFSQSxDQUFDO3dDQUFJbkQsTUFBTSxDQUFOQSxRQUFRLG1CQUFLRCxLQUFLOzRDQUFFRCxRQUFRLEVBQUVxRCxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7NEdBRTVEQyxDQUFNO29DQUFDQyxPQUFPLEVBQUV0QixPQUFPOzhDQUFFLENBQVk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXRELENBQUM7R0E5R3VCckMsS0FBSztLQUFMQSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0YWtlLmpzP2EzNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tICd3ZWIzbW9kYWwnXG5cbmltcG9ydCB7IGh1c2t5Y29pbmFkZHJlc3MgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgSHVza3lDb2luIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvSHVza3lDb2luLnNvbC9IdXNreUNvaW4uanNvbidcbi8vaW1wb3J0IHsgd2ViMywgV2ViMyB9IGZyb20gJ2hhcmRoYXQnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YWtlICgpIHtcbiAgICBjb25zdCBbaW5wdXQsIHNldElucHV0XSA9IHVzZVN0YXRlKHsgYW1vdW50OiAnJywgc3Rha2VBbXQ6ICcnIH0pXG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoKVxuICAgIGNvbnN0IFtzdGFrZWQsIHNldFN0YWtlZF0gPSB1c2VTdGF0ZSgpXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgbG9hZEJhbGFuY2UoKVxuICAgICAgbG9hZFN0YWtlZCgpXG4gICAgfSwgW10pXG4gICAgXG4gICAgYXN5bmMgZnVuY3Rpb24gbG9hZEJhbGFuY2UoKSB7XG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuXG4gICAgICAgIGxldCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoaHVza3ljb2luYWRkcmVzcywgSHVza3lDb2luLmFiaSwgc2lnbmVyKVxuICAgICAgICBsZXQgdHJhbnNhY3Rpb24gPSBhd2FpdCBjb250cmFjdC5nZXRCYWxhbmNlKCkudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgc2V0QmFsYW5jZShldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIocmVzdWx0KSlcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkU3Rha2VkKCkge1xuICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpXG4gICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxuICAgICAgY29uc3QgcHJvdmlkZXIgPSBuZXcgZXRoZXJzLnByb3ZpZGVycy5XZWIzUHJvdmlkZXIoY29ubmVjdGlvbilcbiAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG4gICAgICBjb25zdCBzdGFrZXIgPSBhd2FpdCBzaWduZXIuZ2V0QWRkcmVzcygpXG4gICAgICBcbiAgICAgIGxldCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoaHVza3ljb2luYWRkcmVzcywgSHVza3lDb2luLmFiaSwgc2lnbmVyKVxuICAgICAgbGV0IHRyYW5zYWN0aW9uID0gYXdhaXQgY29udHJhY3QuaGFzU3Rha2Uoc3Rha2VyKS50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgICAgc2V0U3Rha2VkKGV0aGVycy51dGlscy5mb3JtYXRFdGhlcihyZXN1bHQudG90YWxBbW91bnQpKVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiBzdGFrZSgpIHtcbiAgICAgIGxvYWRCYWxhbmNlKClcbiAgICAgIGNvbnN0IHsgYW1vdW50LCBzdGFrZUFtdCB9ID0gaW5wdXRcbiAgICAgIGlmICghYW1vdW50KSByZXR1cm5cbiAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuXG4gICAgICBsZXQgYW10ID0gZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHMoaW5wdXQuYW1vdW50LCAnZXRoZXInKVxuXG4gICAgICBsZXQgY29udHJhY3QgPSBuZXcgZXRoZXJzLkNvbnRyYWN0KGh1c2t5Y29pbmFkZHJlc3MsIEh1c2t5Q29pbi5hYmksIHNpZ25lcilcbiAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LnN0YWtlKGFtdClcbiAgICAgIGxldCB0eCA9IGF3YWl0IHRyYW5zYWN0aW9uLndhaXQoKVxuXG4gICAgICBsb2FkQmFsYW5jZSgpXG4gICAgICBsb2FkU3Rha2VkKClcbiAgICB9XG5cbiAgICBhc3luYyBmdW5jdGlvbiB1bnN0YWtlKCkge1xuICAgICAgbG9hZFN0YWtlZCgpXG4gICAgICBjb25zdCB7IGFtb3VudCwgc3Rha2VBbXQgfSA9IGlucHV0XG4gICAgICBpZiAoIXN0YWtlQW10KSByZXR1cm5cbiAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgICAgY29uc3QgY29ubmVjdGlvbiA9IGF3YWl0IHdlYjNNb2RhbC5jb25uZWN0KClcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXG4gICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuICAgICAgY29uc3Qgc3Rha2VyID0gYXdhaXQgc2lnbmVyLmdldEFkZHJlc3MoKVxuXG4gICAgICAvL2xldCB1bnN0YWtlQW1vdW50ID0gZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHMoaW5wdXQuc3Rha2VBbXQsICdldGhlcicpXG5cbiAgICAgIGxldCBjb250cmFjdCA9IG5ldyBldGhlcnMuQ29udHJhY3QoaHVza3ljb2luYWRkcmVzcywgSHVza3lDb2luLmFiaSwgc2lnbmVyKVxuICAgICAgbGV0IHN0YWtlSW5kZXggPSBhd2FpdCBjb250cmFjdC5nZXRTdGFrZWhvbGRlckluZGV4KClcbiAgICAgIGxldCB1bnN0YWtlU3VtbWFyeSA9IGF3YWl0IGNvbnRyYWN0Lmhhc1N0YWtlKHN0YWtlcilcbiAgICAgIGxldCB1bnN0YWtlQW1vdW50ID0gZXRoZXJzLnV0aWxzLnBhcnNlVW5pdHModW5zdGFrZVN1bW1hcnkub3JpZ2luYWxTdGFrZSlcbiAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LndpdGhkcmF3KHVuc3Rha2VBbW91bnQsIHN0YWtlSW5kZXgpXG4gICAgICBsZXQgdHggPSBhd2FpdCB0cmFuc2FjdGlvbi53YWl0KClcblxuICAgICAgbG9hZEJhbGFuY2UoKVxuICAgICAgbG9hZFN0YWtlZCgpXG4gICAgfVxuICAgIFxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRpdGxlfT5cbiAgICAgICAgICAgICAgSW50cm9kdWN0aW9uIHRvIFxuICAgICAgICAgICAgICA8YSBocmVmPSdodHRwczovL3d3dy5jb2luYmFzZS5jb20vbGVhcm4vY3J5cHRvLWJhc2ljcy93aGF0LWlzLXByb29mLW9mLXdvcmstb3ItcHJvb2Ytb2Ytc3Rha2UnPiBTdGFraW5nPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmR9PlxuICAgICAgICAgICAgICBBdmFpbGFibGUgJEhVU0tZIGJhbGFuY2U6IDxoND57YmFsYW5jZX08L2g0PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0nZmxleCdcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBbW91bnQgdG8gc3Rha2UnIFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXQoey4uLmlucHV0LCBhbW91bnQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFrZX0+U3Rha2U8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICAgIFRvdGFsIHN0YWtlZCAkSFVTS1kgYmFsYW5jZTogPGg0PntzdGFrZWR9PC9oND5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXgnXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj0nQW1vdW50IHRvIHVuc3Rha2UnXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dCh7Li4uaW5wdXQsIHN0YWtlQW10OiBlLnRhcmdldC52YWx1ZSB9KX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17dW5zdGFrZX0+V2l0aGRyYXcgQWxsPC9idXR0b24+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiZXRoZXJzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJXZWIzTW9kYWwiLCJodXNreWNvaW5hZGRyZXNzIiwiSHVza3lDb2luIiwiU3Rha2UiLCJhbW91bnQiLCJzdGFrZUFtdCIsImlucHV0Iiwic2V0SW5wdXQiLCJiYWxhbmNlIiwic2V0QmFsYW5jZSIsInN0YWtlZCIsInNldFN0YWtlZCIsImxvYWRCYWxhbmNlIiwibG9hZFN0YWtlZCIsIndlYjNNb2RhbCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsInNpZ25lciIsImNvbnRyYWN0IiwidHJhbnNhY3Rpb24iLCJjb25uZWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJnZXRCYWxhbmNlIiwidGhlbiIsInJlc3VsdCIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJzdGFrZXIiLCJnZXRBZGRyZXNzIiwiaGFzU3Rha2UiLCJ0b3RhbEFtb3VudCIsInN0YWtlIiwiYW10IiwidHgiLCJwYXJzZVVuaXRzIiwid2FpdCIsInVuc3Rha2UiLCJzdGFrZUluZGV4IiwidW5zdGFrZVN1bW1hcnkiLCJ1bnN0YWtlQW1vdW50IiwiZ2V0U3Rha2Vob2xkZXJJbmRleCIsIm9yaWdpbmFsU3Rha2UiLCJ3aXRoZHJhdyIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsIm1haW4iLCJ0aXRsZSIsImEiLCJocmVmIiwiY2FyZCIsImg0IiwicGxhY2Vob2xkZXIiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/stake.js\n");

/***/ })

});