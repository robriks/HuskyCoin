"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/tutorial",{

/***/ "./pages/tutorial.js":
/*!***************************!*\
  !*** ./pages/tutorial.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Tutorial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction Tutorial() {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"p-12 mr-8 ml-8\",\n            children: \"For First Time n00Bs Welcome to your first Web3 tutorial! If you've never made a cryptocurrency address or submitted a transaction on-chain before, start here. There's a lot of high level math, computation, and unprecedented technological concepts happening behind the scenes so don't be discouraged if you get confused at any point. If you have questions/issues anytime reading this tutorial, or if you want recommendations for further Web3 exploration, contact me on twitter or instagram, @marsterlund, and I will happily assist. What is a crypto wallet, you ask? While you're at it, wtf is a blockchain anyway? Private key? Public address? Are .eth domains like .com or .org DNS domains? What about NFTs!? Is DeFi only for shadowy super coders like @marsterlund? Elizabeth Warren seems to think so. What are crypto loans? How does Cryptography work? Can I mine cryptocurrency with my computer to make money? How do I stake crypto for passive income? Facebook = Meta...verse... Right? Is _insertRandomDogCoinTokenHere_ the next Bitcoin? IS KRIPTO PONZI SCHEME, SER??? (no, lmeow...) All of these complicated questions need to be answered and explained to the public in a concise, educational format. This is my attempt to educate people on the equitable, censorship resistant, self-custodial world of digital assets known as Web3. I'll try to keep it as non-technical, digestible, and easy to read as possible for you. ##### What you will learn: -Set up a crypto wallet via MetaMask -Make your first on-chain transaction by claiming 69420 free educational tokens (HuskyCoins $HUSKY) that I have coded and deployed for your convenience -How you can get paid by contributing to network security and decentralization, termed \\\"staking\\\". Stake your $HUSKY balance to earn passive \\\"income\\\" ($HUSKY is for education purposes only, not income) -There is no next Bitcorn. Sry. :( ##### What you will not find here: -Financial advice, lel. #### Download Metamask This tutorial focuses on the industry standards that are ubiquitous and have the most documentation. MetaMask is the most widespread crypto wallet, although other awesome wallets like Coinbase Wallet/Brave Wallet/Rainbow Wallet exist, all of which connect to the blockchain and safely handle your private keys. Note: I have been asked many times if a Coinbase, Robinhood, Venmo, CashApp, or Paypal account will adequately serve as a crypto wallet. As of writing, these companies/services do NOT offer a native web3 wallet that allow you to interact with the Ethereum or Bitcoin networks. (Coinbase Wallet is a separate app/browser extension than the Coinbase app you use to buy crypto). They simply allow you to buy and sell the assets for price speculation. Boring! With that out of the way, let's get started. On the home page, click the link titled: \\\"1. Setting up MetaMask\\\" and follow the instructions on downloading and installing the MetaMask browser extension. URGENT NOTE: Never share your seed phrase (12-24 words) or your private key in any way to anybody EVER. Do not enter, copy-paste, or visibly reveal your seed phrase anywhere (especially not to \\\"customer support\\\" scammers) unless you are recovering a wallet. Your seed/private key IS YOUR MONEY, so store it in a safe place on paper (or metal!) #### Understanding Ethereum Addresses Conceptually Note: These skills & concepts are transferable between any EVM compatible blockchain. That means other networks that are modeled after Ethereum's protocol (such as BSC/BNB, Polkadot, Polygon, Avalanche, Fantom, Ethereum classic) can be interacted with by completing these same steps in Metamask. This tutorial focuses on Ethereum and its layer 2 rollups (Arbitrum, Optimism, zkSync, Starkware) because they are home to the largest and safest Web3 ecosystem by far. Mess around with the other aforementioned cryptocurrency networks at your own risk. Your Ethereum address (a long string of hexadecimal digits, 0->9 & a->f, which starts with 0x and can be represented by a .eth domain) is your public-facing account where you can store any tokens on the network. This includes cryptos like $ETH, which is the base layer token of the Ethereum blockchain which is responsible for securing the network, maintaining the ever-changing state of the global computer known as the Ethereum Virtual Machine (EVM for short), and paying for computations known as transactions in the form of gas. We'll cover gas a bit more later, but basically you must pay $ETH for every transaction you make, with more computation-intensive transactions costing more gas. #### Generate An Ethereum Address Okay enough talk, we get it- tokens are cool! Follow the MetaMask instructions for setting up your own secure Ethereum address. When you've finished, you should see your account in your MetaMask as follows: ![MetaMask Account Image](./assets/metamask-account.png) You'll notice a 0 $ETH balance and no other token balances displayed yet. Before moving on to the fun stuff, we'll need to switch to Ethereum's cheapest layer 2 network, the Polygon ecosystem. #### Understanding Ethereum Layer 2s We've covered that Ethereum is a blockchain that permanently stores code and functions as a global computer housing all sorts of programs mostly comprising of various tokens. But transacting on Ethereum's mainnet is very expensive as it prioritizes decentralization, security, and immutability above all else; foregoing speed and cheap transaction/gas fees in favor of the former attributes.  This is important as it provides net neutrality (yes, that thing that the Trump administration absolutely destroyed by handing over throttling priveleges and other dystopian controls over the internet to corporations like Verizon/ATT/TMobile/Google. Screw you, Ajit Pai!) But it comes at high cost, making transacting on the Ethereum network very expensive. So smart developers had an idea: why not put more blockchains on the Ethereum blockchain? Now you're finally ready for the next step, obtaining a (small) amount of crypto to pay for the gas needed to make transactions on the Ethereum network. On gas: I thought you told me HuskyCoin was free! Why is there a transaction/gas fee?! -Gas costs serve two main purposes: 1. Preventing spam on the network by incurring costs that disincentivize clogging the network with low-quality transactions. 2. Paying the miners/validators who maintain the state of the network by solving and finalizing blocks in chronological sequences. These are the maintainers of a distributed blockchain architecture who facilitate every transfer and transaction on the network, and they don't work for free!\"\n        }, void 0, false, {\n            fileName: \"/home/robriks/HuskyCoin/pages/tutorial.js\",\n            lineNumber: 6,\n            columnNumber: 11\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/robriks/HuskyCoin/pages/tutorial.js\",\n        lineNumber: 5,\n        columnNumber: 9\n    }, this));\n};\n_c = Tutorial;\nvar _c;\n$RefreshReg$(_c, \"Tutorial\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy90dXRvcmlhbC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQThDO0FBRS9CLFFBQVEsQ0FBQ0MsUUFBUSxHQUFHLENBQUM7SUFDaEMsTUFBTSw2RUFDREMsQ0FBRztRQUFDQyxTQUFTLEVBQUVILDBFQUFnQjs4RkFDN0JFLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQWdCO3NCQUFDLENBc0RsQzs7Ozs7Ozs7Ozs7QUFHUixDQUFDO0tBNUR1QkYsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy90dXRvcmlhbC5qcz85ZDY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL0hvbWUubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVHV0b3JpYWwoKSB7XG4gICAgcmV0dXJuKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3AtMTIgbXItOCBtbC04Jz5cbiAgICAgICAgICAgIEZvciBGaXJzdCBUaW1lIG4wMEJzXG5XZWxjb21lIHRvIHlvdXIgZmlyc3QgV2ViMyB0dXRvcmlhbCEgSWYgeW91J3ZlIG5ldmVyIG1hZGUgYSBjcnlwdG9jdXJyZW5jeSBhZGRyZXNzIG9yIHN1Ym1pdHRlZCBhIHRyYW5zYWN0aW9uIG9uLWNoYWluIGJlZm9yZSwgc3RhcnQgaGVyZS4gVGhlcmUncyBhIGxvdCBvZiBoaWdoIGxldmVsIG1hdGgsIGNvbXB1dGF0aW9uLCBhbmQgdW5wcmVjZWRlbnRlZCB0ZWNobm9sb2dpY2FsIGNvbmNlcHRzIGhhcHBlbmluZyBiZWhpbmQgdGhlIHNjZW5lcyBzbyBkb24ndCBiZSBkaXNjb3VyYWdlZCBpZiB5b3UgZ2V0IGNvbmZ1c2VkIGF0IGFueSBwb2ludC4gSWYgeW91IGhhdmUgcXVlc3Rpb25zL2lzc3VlcyBhbnl0aW1lIHJlYWRpbmcgdGhpcyB0dXRvcmlhbCwgb3IgaWYgeW91IHdhbnQgcmVjb21tZW5kYXRpb25zIGZvciBmdXJ0aGVyIFdlYjMgZXhwbG9yYXRpb24sIGNvbnRhY3QgbWUgb24gdHdpdHRlciBvciBpbnN0YWdyYW0sIEBtYXJzdGVybHVuZCwgYW5kIEkgd2lsbCBoYXBwaWx5IGFzc2lzdC5cblxuV2hhdCBpcyBhIGNyeXB0byB3YWxsZXQsIHlvdSBhc2s/IFdoaWxlIHlvdSdyZSBhdCBpdCwgd3RmIGlzIGEgYmxvY2tjaGFpbiBhbnl3YXk/IFByaXZhdGUga2V5PyBQdWJsaWMgYWRkcmVzcz8gQXJlIC5ldGggZG9tYWlucyBsaWtlIC5jb20gb3IgLm9yZyBETlMgZG9tYWlucz8gV2hhdCBhYm91dCBORlRzIT8gSXMgRGVGaSBvbmx5IGZvciBzaGFkb3d5IHN1cGVyIGNvZGVycyBsaWtlIEBtYXJzdGVybHVuZD8gRWxpemFiZXRoIFdhcnJlbiBzZWVtcyB0byB0aGluayBzby4gV2hhdCBhcmUgY3J5cHRvIGxvYW5zPyBIb3cgZG9lcyBDcnlwdG9ncmFwaHkgd29yaz8gQ2FuIEkgbWluZSBjcnlwdG9jdXJyZW5jeSB3aXRoIG15IGNvbXB1dGVyIHRvIG1ha2UgbW9uZXk/IEhvdyBkbyBJIHN0YWtlIGNyeXB0byBmb3IgcGFzc2l2ZSBpbmNvbWU/IEZhY2Vib29rID0gTWV0YS4uLnZlcnNlLi4uIFJpZ2h0PyBJcyBfaW5zZXJ0UmFuZG9tRG9nQ29pblRva2VuSGVyZV8gdGhlIG5leHQgQml0Y29pbj8gSVMgS1JJUFRPIFBPTlpJIFNDSEVNRSwgU0VSPz8/IChubywgbG1lb3cuLi4pXG5cbkFsbCBvZiB0aGVzZSBjb21wbGljYXRlZCBxdWVzdGlvbnMgbmVlZCB0byBiZSBhbnN3ZXJlZCBhbmQgZXhwbGFpbmVkIHRvIHRoZSBwdWJsaWMgaW4gYSBjb25jaXNlLCBlZHVjYXRpb25hbCBmb3JtYXQuIFRoaXMgaXMgbXkgYXR0ZW1wdCB0byBlZHVjYXRlIHBlb3BsZSBvbiB0aGUgZXF1aXRhYmxlLCBjZW5zb3JzaGlwIHJlc2lzdGFudCwgc2VsZi1jdXN0b2RpYWwgd29ybGQgb2YgZGlnaXRhbCBhc3NldHMga25vd24gYXMgV2ViMy4gSSdsbCB0cnkgdG8ga2VlcCBpdCBhcyBub24tdGVjaG5pY2FsLCBkaWdlc3RpYmxlLCBhbmQgZWFzeSB0byByZWFkIGFzIHBvc3NpYmxlIGZvciB5b3UuXG5cbiMjIyMjIFdoYXQgeW91IHdpbGwgbGVhcm46IFxuLVNldCB1cCBhIGNyeXB0byB3YWxsZXQgdmlhIE1ldGFNYXNrXG4tTWFrZSB5b3VyIGZpcnN0IG9uLWNoYWluIHRyYW5zYWN0aW9uIGJ5IGNsYWltaW5nIDY5NDIwIGZyZWUgZWR1Y2F0aW9uYWwgdG9rZW5zIChIdXNreUNvaW5zICRIVVNLWSkgdGhhdCBJIGhhdmUgY29kZWQgYW5kIGRlcGxveWVkIGZvciB5b3VyIGNvbnZlbmllbmNlXG4tSG93IHlvdSBjYW4gZ2V0IHBhaWQgYnkgY29udHJpYnV0aW5nIHRvIG5ldHdvcmsgc2VjdXJpdHkgYW5kIGRlY2VudHJhbGl6YXRpb24sIHRlcm1lZCBcInN0YWtpbmdcIi4gU3Rha2UgeW91ciAkSFVTS1kgYmFsYW5jZSB0byBlYXJuIHBhc3NpdmUgXCJpbmNvbWVcIiAoJEhVU0tZIGlzIGZvciBlZHVjYXRpb24gcHVycG9zZXMgb25seSwgbm90IGluY29tZSlcbi1UaGVyZSBpcyBubyBuZXh0IEJpdGNvcm4uIFNyeS4gOihcblxuIyMjIyMgV2hhdCB5b3Ugd2lsbCBub3QgZmluZCBoZXJlOiBcbi1GaW5hbmNpYWwgYWR2aWNlLCBsZWwuXG5cbiMjIyMgRG93bmxvYWQgTWV0YW1hc2tcblRoaXMgdHV0b3JpYWwgZm9jdXNlcyBvbiB0aGUgaW5kdXN0cnkgc3RhbmRhcmRzIHRoYXQgYXJlIHViaXF1aXRvdXMgYW5kIGhhdmUgdGhlIG1vc3QgZG9jdW1lbnRhdGlvbi4gTWV0YU1hc2sgaXMgdGhlIG1vc3Qgd2lkZXNwcmVhZCBjcnlwdG8gd2FsbGV0LCBhbHRob3VnaCBvdGhlciBhd2Vzb21lIHdhbGxldHMgbGlrZSBDb2luYmFzZSBXYWxsZXQvQnJhdmUgV2FsbGV0L1JhaW5ib3cgV2FsbGV0IGV4aXN0LCBhbGwgb2Ygd2hpY2ggY29ubmVjdCB0byB0aGUgYmxvY2tjaGFpbiBhbmQgc2FmZWx5IGhhbmRsZSB5b3VyIHByaXZhdGUga2V5cy5cblxuTm90ZTogSSBoYXZlIGJlZW4gYXNrZWQgbWFueSB0aW1lcyBpZiBhIENvaW5iYXNlLCBSb2Jpbmhvb2QsIFZlbm1vLCBDYXNoQXBwLCBvciBQYXlwYWwgYWNjb3VudCB3aWxsIGFkZXF1YXRlbHkgc2VydmUgYXMgYSBjcnlwdG8gd2FsbGV0LiBBcyBvZiB3cml0aW5nLCB0aGVzZSBjb21wYW5pZXMvc2VydmljZXMgZG8gTk9UIG9mZmVyIGEgbmF0aXZlIHdlYjMgd2FsbGV0IHRoYXQgYWxsb3cgeW91IHRvIGludGVyYWN0IHdpdGggdGhlIEV0aGVyZXVtIG9yIEJpdGNvaW4gbmV0d29ya3MuIChDb2luYmFzZSBXYWxsZXQgaXMgYSBzZXBhcmF0ZSBhcHAvYnJvd3NlciBleHRlbnNpb24gdGhhbiB0aGUgQ29pbmJhc2UgYXBwIHlvdSB1c2UgdG8gYnV5IGNyeXB0bykuIFRoZXkgc2ltcGx5IGFsbG93IHlvdSB0byBidXkgYW5kIHNlbGwgdGhlIGFzc2V0cyBmb3IgcHJpY2Ugc3BlY3VsYXRpb24uIEJvcmluZyFcblxuV2l0aCB0aGF0IG91dCBvZiB0aGUgd2F5LCBsZXQncyBnZXQgc3RhcnRlZC4gT24gdGhlIGhvbWUgcGFnZSwgY2xpY2sgdGhlIGxpbmsgdGl0bGVkOiBcIjEuIFNldHRpbmcgdXAgTWV0YU1hc2tcIiBhbmQgZm9sbG93IHRoZSBpbnN0cnVjdGlvbnMgb24gZG93bmxvYWRpbmcgYW5kIGluc3RhbGxpbmcgdGhlIE1ldGFNYXNrIGJyb3dzZXIgZXh0ZW5zaW9uLlxuXG5VUkdFTlQgTk9URTogTmV2ZXIgc2hhcmUgeW91ciBzZWVkIHBocmFzZSAoMTItMjQgd29yZHMpIG9yIHlvdXIgcHJpdmF0ZSBrZXkgaW4gYW55IHdheSB0byBhbnlib2R5IEVWRVIuIERvIG5vdCBlbnRlciwgY29weS1wYXN0ZSwgb3IgdmlzaWJseSByZXZlYWwgeW91ciBzZWVkIHBocmFzZSBhbnl3aGVyZSAoZXNwZWNpYWxseSBub3QgdG8gXCJjdXN0b21lciBzdXBwb3J0XCIgc2NhbW1lcnMpIHVubGVzcyB5b3UgYXJlIHJlY292ZXJpbmcgYSB3YWxsZXQuIFlvdXIgc2VlZC9wcml2YXRlIGtleSBJUyBZT1VSIE1PTkVZLCBzbyBzdG9yZSBpdCBpbiBhIHNhZmUgcGxhY2Ugb24gcGFwZXIgKG9yIG1ldGFsISlcblxuIyMjIyBVbmRlcnN0YW5kaW5nIEV0aGVyZXVtIEFkZHJlc3NlcyBDb25jZXB0dWFsbHlcbk5vdGU6IFRoZXNlIHNraWxscyAmIGNvbmNlcHRzIGFyZSB0cmFuc2ZlcmFibGUgYmV0d2VlbiBhbnkgRVZNIGNvbXBhdGlibGUgYmxvY2tjaGFpbi4gVGhhdCBtZWFucyBvdGhlciBuZXR3b3JrcyB0aGF0IGFyZSBtb2RlbGVkIGFmdGVyIEV0aGVyZXVtJ3MgcHJvdG9jb2wgKHN1Y2ggYXMgQlNDL0JOQiwgUG9sa2Fkb3QsIFBvbHlnb24sIEF2YWxhbmNoZSwgRmFudG9tLCBFdGhlcmV1bSBjbGFzc2ljKSBjYW4gYmUgaW50ZXJhY3RlZCB3aXRoIGJ5IGNvbXBsZXRpbmcgdGhlc2Ugc2FtZSBzdGVwcyBpbiBNZXRhbWFzay4gVGhpcyB0dXRvcmlhbCBmb2N1c2VzIG9uIEV0aGVyZXVtIGFuZCBpdHMgbGF5ZXIgMiByb2xsdXBzIChBcmJpdHJ1bSwgT3B0aW1pc20sIHprU3luYywgU3Rhcmt3YXJlKSBiZWNhdXNlIHRoZXkgYXJlIGhvbWUgdG8gdGhlIGxhcmdlc3QgYW5kIHNhZmVzdCBXZWIzIGVjb3N5c3RlbSBieSBmYXIuIE1lc3MgYXJvdW5kIHdpdGggdGhlIG90aGVyIGFmb3JlbWVudGlvbmVkIGNyeXB0b2N1cnJlbmN5IG5ldHdvcmtzIGF0IHlvdXIgb3duIHJpc2suXG5cbllvdXIgRXRoZXJldW0gYWRkcmVzcyAoYSBsb25nIHN0cmluZyBvZiBoZXhhZGVjaW1hbCBkaWdpdHMsIDAtPjkgJiBhLT5mLCB3aGljaCBzdGFydHMgd2l0aCAweCBhbmQgY2FuIGJlIHJlcHJlc2VudGVkIGJ5IGEgLmV0aCBkb21haW4pIGlzIHlvdXIgcHVibGljLWZhY2luZyBhY2NvdW50IHdoZXJlIHlvdSBjYW4gc3RvcmUgYW55IHRva2VucyBvbiB0aGUgbmV0d29yay4gVGhpcyBpbmNsdWRlcyBjcnlwdG9zIGxpa2UgJEVUSCwgd2hpY2ggaXMgdGhlIGJhc2UgbGF5ZXIgdG9rZW4gb2YgdGhlIEV0aGVyZXVtIGJsb2NrY2hhaW4gd2hpY2ggaXMgcmVzcG9uc2libGUgZm9yIHNlY3VyaW5nIHRoZSBuZXR3b3JrLCBtYWludGFpbmluZyB0aGUgZXZlci1jaGFuZ2luZyBzdGF0ZSBvZiB0aGUgZ2xvYmFsIGNvbXB1dGVyIGtub3duIGFzIHRoZSBFdGhlcmV1bSBWaXJ0dWFsIE1hY2hpbmUgKEVWTSBmb3Igc2hvcnQpLCBhbmQgcGF5aW5nIGZvciBjb21wdXRhdGlvbnMga25vd24gYXMgdHJhbnNhY3Rpb25zIGluIHRoZSBmb3JtIG9mIGdhcy4gV2UnbGwgY292ZXIgZ2FzIGEgYml0IG1vcmUgbGF0ZXIsIGJ1dCBiYXNpY2FsbHkgeW91IG11c3QgcGF5ICRFVEggZm9yIGV2ZXJ5IHRyYW5zYWN0aW9uIHlvdSBtYWtlLCB3aXRoIG1vcmUgY29tcHV0YXRpb24taW50ZW5zaXZlIHRyYW5zYWN0aW9ucyBjb3N0aW5nIG1vcmUgZ2FzLlxuXG4jIyMjIEdlbmVyYXRlIEFuIEV0aGVyZXVtIEFkZHJlc3Ncbk9rYXkgZW5vdWdoIHRhbGssIHdlIGdldCBpdC0gdG9rZW5zIGFyZSBjb29sISBGb2xsb3cgdGhlIE1ldGFNYXNrIGluc3RydWN0aW9ucyBmb3Igc2V0dGluZyB1cCB5b3VyIG93biBzZWN1cmUgRXRoZXJldW0gYWRkcmVzcy5cblxuV2hlbiB5b3UndmUgZmluaXNoZWQsIHlvdSBzaG91bGQgc2VlIHlvdXIgYWNjb3VudCBpbiB5b3VyIE1ldGFNYXNrIGFzIGZvbGxvd3M6XG5cbiFbTWV0YU1hc2sgQWNjb3VudCBJbWFnZV0oLi9hc3NldHMvbWV0YW1hc2stYWNjb3VudC5wbmcpXG5cbllvdSdsbCBub3RpY2UgYSAwICRFVEggYmFsYW5jZSBhbmQgbm8gb3RoZXIgdG9rZW4gYmFsYW5jZXMgZGlzcGxheWVkIHlldC4gQmVmb3JlIG1vdmluZyBvbiB0byB0aGUgZnVuIHN0dWZmLCB3ZSdsbCBuZWVkIHRvIHN3aXRjaCB0byBFdGhlcmV1bSdzIGNoZWFwZXN0IGxheWVyIDIgbmV0d29yaywgdGhlIFBvbHlnb24gZWNvc3lzdGVtLlxuXG4jIyMjIFVuZGVyc3RhbmRpbmcgRXRoZXJldW0gTGF5ZXIgMnNcbldlJ3ZlIGNvdmVyZWQgdGhhdCBFdGhlcmV1bSBpcyBhIGJsb2NrY2hhaW4gdGhhdCBwZXJtYW5lbnRseSBzdG9yZXMgY29kZSBhbmQgZnVuY3Rpb25zIGFzIGEgZ2xvYmFsIGNvbXB1dGVyIGhvdXNpbmcgYWxsIHNvcnRzIG9mIHByb2dyYW1zIG1vc3RseSBjb21wcmlzaW5nIG9mIHZhcmlvdXMgdG9rZW5zLiBCdXQgdHJhbnNhY3Rpbmcgb24gRXRoZXJldW0ncyBtYWlubmV0IGlzIHZlcnkgZXhwZW5zaXZlIGFzIGl0IHByaW9yaXRpemVzIGRlY2VudHJhbGl6YXRpb24sIHNlY3VyaXR5LCBhbmQgaW1tdXRhYmlsaXR5IGFib3ZlIGFsbCBlbHNlOyBmb3JlZ29pbmcgc3BlZWQgYW5kIGNoZWFwIHRyYW5zYWN0aW9uL2dhcyBmZWVzIGluIGZhdm9yIG9mIHRoZSBmb3JtZXIgYXR0cmlidXRlcy4gIFRoaXMgaXMgaW1wb3J0YW50IGFzIGl0IHByb3ZpZGVzIG5ldCBuZXV0cmFsaXR5ICh5ZXMsIHRoYXQgdGhpbmcgdGhhdCB0aGUgVHJ1bXAgYWRtaW5pc3RyYXRpb24gYWJzb2x1dGVseSBkZXN0cm95ZWQgYnkgaGFuZGluZyBvdmVyIHRocm90dGxpbmcgcHJpdmVsZWdlcyBhbmQgb3RoZXIgZHlzdG9waWFuIGNvbnRyb2xzIG92ZXIgdGhlIGludGVybmV0IHRvIGNvcnBvcmF0aW9ucyBsaWtlIFZlcml6b24vQVRUL1RNb2JpbGUvR29vZ2xlLiBTY3JldyB5b3UsIEFqaXQgUGFpISkgQnV0IGl0IGNvbWVzIGF0IGhpZ2ggY29zdCwgbWFraW5nIHRyYW5zYWN0aW5nIG9uIHRoZSBFdGhlcmV1bSBuZXR3b3JrIHZlcnkgZXhwZW5zaXZlLlxuXG5TbyBzbWFydCBkZXZlbG9wZXJzIGhhZCBhbiBpZGVhOiB3aHkgbm90IHB1dCBtb3JlIGJsb2NrY2hhaW5zIG9uIHRoZSBFdGhlcmV1bSBibG9ja2NoYWluP1xuXG5cblxuTm93IHlvdSdyZSBmaW5hbGx5IHJlYWR5IGZvciB0aGUgbmV4dCBzdGVwLCBvYnRhaW5pbmcgYSAoc21hbGwpIGFtb3VudCBvZiBjcnlwdG8gdG8gcGF5IGZvciB0aGUgZ2FzIG5lZWRlZCB0byBtYWtlIHRyYW5zYWN0aW9ucyBvbiB0aGUgRXRoZXJldW0gbmV0d29yay5cblxuT24gZ2FzOlxuSSB0aG91Z2h0IHlvdSB0b2xkIG1lIEh1c2t5Q29pbiB3YXMgZnJlZSEgV2h5IGlzIHRoZXJlIGEgdHJhbnNhY3Rpb24vZ2FzIGZlZT8hXG4tR2FzIGNvc3RzIHNlcnZlIHR3byBtYWluIHB1cnBvc2VzOiBcbjEuIFByZXZlbnRpbmcgc3BhbSBvbiB0aGUgbmV0d29yayBieSBpbmN1cnJpbmcgY29zdHMgdGhhdCBkaXNpbmNlbnRpdml6ZSBjbG9nZ2luZyB0aGUgbmV0d29yayB3aXRoIGxvdy1xdWFsaXR5IHRyYW5zYWN0aW9ucy5cbjIuIFBheWluZyB0aGUgbWluZXJzL3ZhbGlkYXRvcnMgd2hvIG1haW50YWluIHRoZSBzdGF0ZSBvZiB0aGUgbmV0d29yayBieSBzb2x2aW5nIGFuZCBmaW5hbGl6aW5nIGJsb2NrcyBpbiBjaHJvbm9sb2dpY2FsIHNlcXVlbmNlcy4gVGhlc2UgYXJlIHRoZSBtYWludGFpbmVycyBvZiBhIGRpc3RyaWJ1dGVkIGJsb2NrY2hhaW4gYXJjaGl0ZWN0dXJlIHdobyBmYWNpbGl0YXRlIGV2ZXJ5IHRyYW5zZmVyIGFuZCB0cmFuc2FjdGlvbiBvbiB0aGUgbmV0d29yaywgYW5kIHRoZXkgZG9uJ3Qgd29yayBmb3IgZnJlZSFcbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXSwibmFtZXMiOlsic3R5bGVzIiwiVHV0b3JpYWwiLCJkaXYiLCJjbGFzc05hbWUiLCJjb250YWluZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/tutorial.js\n");

/***/ })

});