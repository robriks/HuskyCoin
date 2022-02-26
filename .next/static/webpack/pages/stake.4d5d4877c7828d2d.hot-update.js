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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stake; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Stake() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        amount: ''\n    }), input = ref[0], setInput = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(), balance = ref1[0], setBalance = ref1[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(function() {\n        loadBalance();\n    }, []);\n    function loadBalance() {\n        return _loadBalance.apply(this, arguments);\n    }\n    function _loadBalance() {\n        _loadBalance = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, contract, transaction;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx.next = 9;\n                        return contract.getBalance().then(function(result) {\n                            setBalance(ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.formatEther(result));\n                        });\n                    case 9:\n                        transaction = _ctx.sent;\n                    case 10:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        //return transaction.toString()\n        }));\n        return _loadBalance.apply(this, arguments);\n    }\n    function stake() {\n        return _stake.apply(this, arguments);\n    }\n    function _stake() {\n        _stake = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, amt, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        amt = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.parseUnits(input.amount, 'ether');\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx.next = 10;\n                        return contract.stake(amt);\n                    case 10:\n                        transaction = _ctx.sent;\n                        _ctx.next = 13;\n                        return transaction.wait();\n                    case 13:\n                        tx = _ctx.sent;\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        //loadBalance()\n        }));\n        return _stake.apply(this, arguments);\n    }\n    function unstake() {\n        return _unstake.apply(this, arguments);\n    }\n    function _unstake() {\n        _unstake = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // TODO\n        }));\n        return _unstake.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                        children: [\n                            \"Your HuskyCoin Balance: \",\n                            balance\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                        lineNumber: 56,\n                        columnNumber: 17\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 55,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            className: \"flex\",\n                            placeholder: \"Amount to stake\",\n                            onChange: function(e) {\n                                return setInput(_objectSpread({}, input, {\n                                    amount: e.target.value\n                                }));\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 59,\n                            columnNumber: 15\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: stake,\n                            children: \"Stake\"\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 64,\n                            columnNumber: 15\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 58,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n            lineNumber: 54,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n        lineNumber: 53,\n        columnNumber: 9\n    }, this));\n};\n_s(Stake, \"7OJSf0UUdlab0Voa073jHBWuw2w=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Stake;\nvar _c;\n$RefreshReg$(_c, \"Stake\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0MsU0FBUyxFQUFFcEMscUVBQVc7OzRGQUN4Qm1DLENBQUc7b0JBQUNDLFNBQVMsRUFBRXBDLHFFQUFXOzBHQUN0QndDLENBQUU7OzRCQUFDLENBQXdCOzRCQUFDL0IsT0FBTzs7Ozs7Ozs7Ozs7OzRGQUV2QzBCLENBQUc7O29HQUNENUIsQ0FBSzs0QkFDSjZCLFNBQVMsRUFBQyxDQUFNOzRCQUNoQkssV0FBVyxFQUFDLENBQWlCOzRCQUM3QkMsUUFBUSxFQUFFQyxRQUFRLENBQVJBLENBQUM7Z0NBQUluQyxNQUFNLENBQU5BLFFBQVEsbUJBQUtELEtBQUs7b0NBQUVELE1BQU0sRUFBRXFDLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLOzs7Ozs7OztvR0FFMURDLENBQU07NEJBQUNDLE9BQU8sRUFBRWxCLEtBQUs7c0NBQUUsQ0FBSzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLM0MsQ0FBQztHQTNEdUJ6QixLQUFLOztRQUNWUCxrREFBUzs7O0tBREpPLEtBQUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc3Rha2UuanM/YTM1MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBldGhlcnMgfSBmcm9tICdldGhlcnMnXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcbmltcG9ydCBXZWIzTW9kYWwgZnJvbSAnd2ViM21vZGFsJ1xuXG5pbXBvcnQgeyBodXNreWNvaW5hZGRyZXNzIH0gZnJvbSAnLi4vY29uZmlnJ1xuaW1wb3J0IEh1c2t5Q29pbiBmcm9tICcuLi9hcnRpZmFjdHMvY29udHJhY3RzL0h1c2t5Q29pbi5zb2wvSHVza3lDb2luLmpzb24nXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YWtlICgpIHtcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxuICAgIGNvbnN0IFtpbnB1dCwgc2V0SW5wdXRdID0gdXNlU3RhdGUoeyBhbW91bnQ6ICcnIH0pXG4gICAgY29uc3QgW2JhbGFuY2UsIHNldEJhbGFuY2VdID0gdXNlU3RhdGUoKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIGxvYWRCYWxhbmNlKClcbiAgICB9LCBbXSlcbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkQmFsYW5jZSgpIHtcbiAgICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG5cbiAgICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChodXNreWNvaW5hZGRyZXNzLCBIdXNreUNvaW4uYWJpLCBzaWduZXIpXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmdldEJhbGFuY2UoKS50aGVuKChyZXN1bHQpPT57XG4gICAgICAgICAgc2V0QmFsYW5jZShldGhlcnMudXRpbHMuZm9ybWF0RXRoZXIocmVzdWx0KSlcbiAgICAgICAgfSlcblxuICAgICAgICAvL3JldHVybiB0cmFuc2FjdGlvbi50b1N0cmluZygpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gc3Rha2UoKSB7XG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuXG4gICAgICAgIGxldCBhbXQgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhpbnB1dC5hbW91bnQsICdldGhlcicpXG5cbiAgICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChodXNreWNvaW5hZGRyZXNzLCBIdXNreUNvaW4uYWJpLCBzaWduZXIpXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LnN0YWtlKGFtdClcbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpXG5cbiAgICAgICAgLy9sb2FkQmFsYW5jZSgpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdW5zdGFrZSgpIHtcbiAgICAgIC8vIFRPRE9cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICAgICAgPGgyPllvdXIgSHVza3lDb2luIEJhbGFuY2U6IHtiYWxhbmNlfTwvaDI+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9J2ZsZXgnXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9J0Ftb3VudCB0byBzdGFrZScgXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXQoey4uLmlucHV0LCBhbW91bnQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3N0YWtlfT5TdGFrZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsiZXRoZXJzIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJXZWIzTW9kYWwiLCJodXNreWNvaW5hZGRyZXNzIiwiSHVza3lDb2luIiwiU3Rha2UiLCJyb3V0ZXIiLCJhbW91bnQiLCJpbnB1dCIsInNldElucHV0IiwiYmFsYW5jZSIsInNldEJhbGFuY2UiLCJsb2FkQmFsYW5jZSIsIndlYjNNb2RhbCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsInNpZ25lciIsImNvbnRyYWN0IiwidHJhbnNhY3Rpb24iLCJjb25uZWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJnZXRCYWxhbmNlIiwidGhlbiIsInJlc3VsdCIsInV0aWxzIiwiZm9ybWF0RXRoZXIiLCJzdGFrZSIsImFtdCIsInR4IiwicGFyc2VVbml0cyIsIndhaXQiLCJ1bnN0YWtlIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwibWFpbiIsImNhcmQiLCJoMiIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/stake.js\n");

/***/ })

});