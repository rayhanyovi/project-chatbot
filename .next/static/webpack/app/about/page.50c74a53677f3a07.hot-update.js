"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/about/page",{

/***/ "(app-pages-browser)/./src/components/roomchat.jsx":
/*!*************************************!*\
  !*** ./src/components/roomchat.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst RoomChat = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentSender, setCurrentSender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"user\"); // Menentukan pengirim pesan (user atau lawan bicara)\n    const handleSendMessage = ()=>{\n        if (newMessage.trim() !== \"\") {\n            setMessages([\n                ...messages,\n                {\n                    text: newMessage,\n                    sender: currentSender\n                }\n            ]);\n            setNewMessage(\"\");\n            setCurrentSender(currentSender === \"user\" ? \"opponent\" : \"user\"); // Bergantian antara user dan opponent\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            width: \"20vw\",\n            height: \"80vh\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row text-black\",\n                style: {\n                    backgroundColor: \"white\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    children: \"CHATBOT\"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 18,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: \"100%\",\n                    overflowY: \"scroll\",\n                    border: \"1px solid #ccc\",\n                    padding: \"10px\",\n                    border: \"1px solid red\"\n                },\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"10px\",\n                            textAlign: message.sender === \"user\" ? \"right\" : \"left\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                background: message.sender === \"user\" ? \"#4CAF50\" : \"#008CBA\",\n                                color: \"white\",\n                                padding: \"5px 10px\",\n                                borderRadius: \"5px\"\n                            },\n                            children: message.text\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                            lineNumber: 30,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"10px\",\n                    border: \"1px solid blue\",\n                    padding: \"4px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: newMessage,\n                        onChange: (e)=>setNewMessage(e.target.value),\n                        placeholder: \"Type your message...\",\n                        style: {\n                            width: \"70%\",\n                            padding: \"5px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        style: {\n                            marginLeft: \"10px\",\n                            padding: \"5px\"\n                        },\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RoomChat, \"5AdEAVIzj3CAKHiJKKrJq9bXeOw=\");\n_c = RoomChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomChat);\nvar _c;\n$RefreshReg$(_c, \"RoomChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jvb21jaGF0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsV0FBVzs7SUFDZixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUMsU0FBUyxxREFBcUQ7SUFFakgsTUFBTVEsb0JBQW9CO1FBQ3hCLElBQUlKLFdBQVdLLElBQUksT0FBTyxJQUFJO1lBQzVCTixZQUFZO21CQUFJRDtnQkFBVTtvQkFBRVEsTUFBTU47b0JBQVlPLFFBQVFMO2dCQUFjO2FBQUU7WUFDdEVELGNBQWM7WUFDZEUsaUJBQWlCRCxrQkFBa0IsU0FBUyxhQUFhLFNBQVMsc0NBQXNDO1FBQzFHO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ007UUFBSUMsT0FBTztZQUFDQyxPQUFNO1lBQVFDLFFBQU87UUFBTTs7MEJBQ3BDLDhEQUFDSDtnQkFBSUksV0FBVTtnQkFBMkJILE9BQU87b0JBQUNJLGlCQUFnQjtnQkFBTzswQkFDckUsNEVBQUNDOzhCQUFHOzs7Ozs7Ozs7OzswQkFFViw4REFBQ047Z0JBQUlDLE9BQU87b0JBQUVFLFFBQVE7b0JBQVFJLFdBQVc7b0JBQVVDLFFBQVE7b0JBQWtCQyxTQUFTO29CQUFRRCxRQUFPO2dCQUFnQjswQkFDbEhsQixTQUFTb0IsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ1o7d0JBRUNDLE9BQU87NEJBQ0xZLGNBQWM7NEJBQ2RDLFdBQVdILFFBQVFaLE1BQU0sS0FBSyxTQUFTLFVBQVU7d0JBQ25EO2tDQUVBLDRFQUFDZ0I7NEJBQ0NkLE9BQU87Z0NBQ0xlLFlBQVlMLFFBQVFaLE1BQU0sS0FBSyxTQUFTLFlBQVk7Z0NBQ3BEa0IsT0FBTztnQ0FDUFIsU0FBUztnQ0FDVFMsY0FBYzs0QkFDaEI7c0NBRUNQLFFBQVFiLElBQUk7Ozs7Ozt1QkFkVmM7Ozs7Ozs7Ozs7MEJBbUJYLDhEQUFDWjtnQkFBSUMsT0FBTztvQkFBRWtCLFdBQVc7b0JBQVFYLFFBQU87b0JBQWtCQyxTQUFRO2dCQUFNOztrQ0FDdEUsOERBQUNXO3dCQUNDQyxNQUFLO3dCQUNMQyxPQUFPOUI7d0JBQ1ArQixVQUFVLENBQUNDLElBQU0vQixjQUFjK0IsRUFBRUMsTUFBTSxDQUFDSCxLQUFLO3dCQUM3Q0ksYUFBWTt3QkFDWnpCLE9BQU87NEJBQUVDLE9BQU87NEJBQU9PLFNBQVM7d0JBQU07Ozs7OztrQ0FFeEMsOERBQUNrQjt3QkFBT0MsU0FBU2hDO3dCQUFtQkssT0FBTzs0QkFBRTRCLFlBQVk7NEJBQVFwQixTQUFTO3dCQUFNO2tDQUFHOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNM0Y7R0F0RE1wQjtLQUFBQTtBQXdETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yb29tY2hhdC5qc3g/NTg0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCBSb29tQ2hhdCA9ICgpID0+IHtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmV3TWVzc2FnZSwgc2V0TmV3TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2N1cnJlbnRTZW5kZXIsIHNldEN1cnJlbnRTZW5kZXJdID0gdXNlU3RhdGUoJ3VzZXInKTsgLy8gTWVuZW50dWthbiBwZW5naXJpbSBwZXNhbiAodXNlciBhdGF1IGxhd2FuIGJpY2FyYSlcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgICBpZiAobmV3TWVzc2FnZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgeyB0ZXh0OiBuZXdNZXNzYWdlLCBzZW5kZXI6IGN1cnJlbnRTZW5kZXIgfV0pO1xyXG4gICAgICBzZXROZXdNZXNzYWdlKCcnKTtcclxuICAgICAgc2V0Q3VycmVudFNlbmRlcihjdXJyZW50U2VuZGVyID09PSAndXNlcicgPyAnb3Bwb25lbnQnIDogJ3VzZXInKTsgLy8gQmVyZ2FudGlhbiBhbnRhcmEgdXNlciBkYW4gb3Bwb25lbnRcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBzdHlsZT17e3dpZHRoOicyMHZ3JywgaGVpZ2h0OlwiODB2aFwifX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgdGV4dC1ibGFjaycgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6XCJ3aGl0ZVwifX0+XHJcbiAgICAgICAgICAgIDxoMT5DSEFUQk9UPC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6ICcxMDAlJywgb3ZlcmZsb3dZOiAnc2Nyb2xsJywgYm9yZGVyOiAnMXB4IHNvbGlkICNjY2MnLCBwYWRkaW5nOiAnMTBweCcsIGJvcmRlcjonMXB4IHNvbGlkIHJlZCcgfX0+XHJcbiAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206ICcxMHB4JyxcclxuICAgICAgICAgICAgICB0ZXh0QWxpZ246IG1lc3NhZ2Uuc2VuZGVyID09PSAndXNlcicgPyAncmlnaHQnIDogJ2xlZnQnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBtZXNzYWdlLnNlbmRlciA9PT0gJ3VzZXInID8gJyM0Q0FGNTAnIDogJyMwMDhDQkEnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAnNXB4IDEwcHgnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge21lc3NhZ2UudGV4dH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogJzEwcHgnLCBib3JkZXI6JzFweCBzb2xpZCBibHVlJywgcGFkZGluZzonNHB4JyB9fT5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLi5cIlxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6ICc3MCUnLCBwYWRkaW5nOiAnNXB4JyB9fVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0gc3R5bGU9e3sgbWFyZ2luTGVmdDogJzEwcHgnLCBwYWRkaW5nOiAnNXB4JyB9fT5cclxuICAgICAgICAgIFNlbmRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbUNoYXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiUm9vbUNoYXQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJjdXJyZW50U2VuZGVyIiwic2V0Q3VycmVudFNlbmRlciIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsInRleHQiLCJzZW5kZXIiLCJkaXYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2xhc3NOYW1lIiwiYmFja2dyb3VuZENvbG9yIiwiaDEiLCJvdmVyZmxvd1kiLCJib3JkZXIiLCJwYWRkaW5nIiwibWFwIiwibWVzc2FnZSIsImluZGV4IiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwic3BhbiIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwibWFyZ2luTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/roomchat.jsx\n"));

/***/ })

});