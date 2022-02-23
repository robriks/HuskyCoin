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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Stake; }\n/* harmony export */ });\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var ethers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ethers */ \"./node_modules/ethers/lib.esm/index.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! web3modal */ \"./node_modules/web3modal/dist/index.js\");\n/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config */ \"./config.js\");\n/* harmony import */ var _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../artifacts/contracts/HuskyCoin.sol/HuskyCoin.json */ \"./artifacts/contracts/HuskyCoin.sol/HuskyCoin.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Stake() {\n    _s();\n    var router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({\n        amount: ''\n    }), input = ref[0], setInput = ref[1];\n    function loadBalance() {\n        return _loadBalance.apply(this, arguments);\n    }\n    function _loadBalance() {\n        _loadBalance = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, contract, transaction;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx.next = 9;\n                        return contract.getBalance();\n                    case 9:\n                        transaction = _ctx.sent;\n                        return _ctx.abrupt(\"return\", transaction.toString());\n                    case 11:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return _loadBalance.apply(this, arguments);\n    }\n    function stake() {\n        return _stake.apply(this, arguments);\n    }\n    function _stake() {\n        _stake = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            var web3Modal, connection, provider, signer, amt, contract, transaction, tx;\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_4___default())();\n                        _ctx.next = 3;\n                        return web3Modal.connect();\n                    case 3:\n                        connection = _ctx.sent;\n                        provider = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.providers.Web3Provider(connection);\n                        signer = provider.getSigner();\n                        amt = ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.utils.parseUnits(input.amount, 'ether');\n                        contract = new ethers__WEBPACK_IMPORTED_MODULE_7__.ethers.Contract(_config__WEBPACK_IMPORTED_MODULE_5__.huskycoinaddress, _artifacts_contracts_HuskyCoin_sol_HuskyCoin_json__WEBPACK_IMPORTED_MODULE_6__.abi, signer);\n                        _ctx.next = 10;\n                        return contract.stake(amt);\n                    case 10:\n                        transaction = _ctx.sent;\n                        _ctx.next = 13;\n                        return transaction.wait();\n                    case 13:\n                        tx = _ctx.sent;\n                    case 14:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        //loadBalance()\n        }));\n        return _stake.apply(this, arguments);\n    }\n    function unstake() {\n        return _unstake.apply(this, arguments);\n    }\n    function _unstake() {\n        _unstake = _asyncToGenerator(_home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n            return _home_robriks_HuskyCoin_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        // TODO\n        }));\n        return _unstake.apply(this, arguments);\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().card),\n                    children: loadBalance\n                }, void 0, false, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 48,\n                    columnNumber: 13\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    className: \"flex\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            placeholder: \"Amount to stake\",\n                            onChange: function(e) {\n                                return setInput(_objectSpread({}, input, {\n                                    amount: e.target.value\n                                }));\n                            }\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 52,\n                            columnNumber: 17\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: stake,\n                            children: \"Stake\"\n                        }, void 0, false, {\n                            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n                    lineNumber: 51,\n                    columnNumber: 13\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n            lineNumber: 47,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/robriks/HuskyCoin/pages/stake.js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this));\n};\n_s(Stake, \"CEYBj5QgX9Aa38RQC0yX/GgEAzQ=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Stake;\nvar _c;\n$RefreshReg$(_c, \"Stake\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVpQyxDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs7Ozs7Ozs7b0dBRTFEQyxDQUFNOzRCQUFDQyxPQUFPLEVBQUVuQixLQUFLO3NDQUFFLENBQUs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdDLENBQUM7R0FuRHVCcEIsS0FBSzs7UUFDVk4sa0RBQVM7OztLQURKTSxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3N0YWtlLmpzP2EzNTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZXRoZXJzIH0gZnJvbSAnZXRoZXJzJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IFdlYjNNb2RhbCBmcm9tICd3ZWIzbW9kYWwnXG5cbmltcG9ydCB7IGh1c2t5Y29pbmFkZHJlc3MgfSBmcm9tICcuLi9jb25maWcnXG5pbXBvcnQgSHVza3lDb2luIGZyb20gJy4uL2FydGlmYWN0cy9jb250cmFjdHMvSHVza3lDb2luLnNvbC9IdXNreUNvaW4uanNvbidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3Rha2UgKCkge1xuICAgIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gICAgY29uc3QgW2lucHV0LCBzZXRJbnB1dF0gPSB1c2VTdGF0ZSh7IGFtb3VudDogJycgfSlcbiAgICBcbiAgICBhc3luYyBmdW5jdGlvbiBsb2FkQmFsYW5jZSgpIHtcbiAgICAgICAgY29uc3Qgd2ViM01vZGFsID0gbmV3IFdlYjNNb2RhbCgpXG4gICAgICAgIGNvbnN0IGNvbm5lY3Rpb24gPSBhd2FpdCB3ZWIzTW9kYWwuY29ubmVjdCgpXG4gICAgICAgIGNvbnN0IHByb3ZpZGVyID0gbmV3IGV0aGVycy5wcm92aWRlcnMuV2ViM1Byb3ZpZGVyKGNvbm5lY3Rpb24pXG4gICAgICAgIGNvbnN0IHNpZ25lciA9IHByb3ZpZGVyLmdldFNpZ25lcigpXG5cbiAgICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChodXNreWNvaW5hZGRyZXNzLCBIdXNreUNvaW4uYWJpLCBzaWduZXIpXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LmdldEJhbGFuY2UoKVxuXG4gICAgICAgIHJldHVybiB0cmFuc2FjdGlvbi50b1N0cmluZygpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gc3Rha2UoKSB7XG4gICAgICAgIGNvbnN0IHdlYjNNb2RhbCA9IG5ldyBXZWIzTW9kYWwoKVxuICAgICAgICBjb25zdCBjb25uZWN0aW9uID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKVxuICAgICAgICBjb25zdCBwcm92aWRlciA9IG5ldyBldGhlcnMucHJvdmlkZXJzLldlYjNQcm92aWRlcihjb25uZWN0aW9uKVxuICAgICAgICBjb25zdCBzaWduZXIgPSBwcm92aWRlci5nZXRTaWduZXIoKVxuXG4gICAgICAgIGxldCBhbXQgPSBldGhlcnMudXRpbHMucGFyc2VVbml0cyhpbnB1dC5hbW91bnQsICdldGhlcicpXG5cbiAgICAgICAgbGV0IGNvbnRyYWN0ID0gbmV3IGV0aGVycy5Db250cmFjdChodXNreWNvaW5hZGRyZXNzLCBIdXNreUNvaW4uYWJpLCBzaWduZXIpXG4gICAgICAgIGxldCB0cmFuc2FjdGlvbiA9IGF3YWl0IGNvbnRyYWN0LnN0YWtlKGFtdClcbiAgICAgICAgbGV0IHR4ID0gYXdhaXQgdHJhbnNhY3Rpb24ud2FpdCgpXG5cbiAgICAgICAgLy9sb2FkQmFsYW5jZSgpXG4gICAgfVxuXG4gICAgYXN5bmMgZnVuY3Rpb24gdW5zdGFrZSgpIHtcbiAgICAgIC8vIFRPRE9cbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZH0+XG4gICAgICAgICAgICAgICAge2xvYWRCYWxhbmNlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2ZsZXgnPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPSdBbW91bnQgdG8gc3Rha2UnIFxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXQoey4uLmlucHV0LCBhbW91bnQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtzdGFrZX0+U3Rha2U8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJldGhlcnMiLCJ1c2VSb3V0ZXIiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsIldlYjNNb2RhbCIsImh1c2t5Y29pbmFkZHJlc3MiLCJIdXNreUNvaW4iLCJTdGFrZSIsInJvdXRlciIsImFtb3VudCIsImlucHV0Iiwic2V0SW5wdXQiLCJsb2FkQmFsYW5jZSIsIndlYjNNb2RhbCIsImNvbm5lY3Rpb24iLCJwcm92aWRlciIsInNpZ25lciIsImNvbnRyYWN0IiwidHJhbnNhY3Rpb24iLCJjb25uZWN0IiwicHJvdmlkZXJzIiwiV2ViM1Byb3ZpZGVyIiwiZ2V0U2lnbmVyIiwiQ29udHJhY3QiLCJhYmkiLCJnZXRCYWxhbmNlIiwidG9TdHJpbmciLCJzdGFrZSIsImFtdCIsInR4IiwidXRpbHMiLCJwYXJzZVVuaXRzIiwid2FpdCIsInVuc3Rha2UiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiLCJtYWluIiwiY2FyZCIsImZvcm0iLCJwbGFjZWhvbGRlciIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/stake.js\n");

/***/ })

});