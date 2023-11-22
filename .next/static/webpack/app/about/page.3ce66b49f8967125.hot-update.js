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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst RoomChat = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentSender, setCurrentSender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"user\"); // Menentukan pengirim pesan (user atau lawan bicara)\n    const handleSendMessage = ()=>{\n        if (newMessage.trim() !== \"\") {\n            setMessages([\n                ...messages,\n                {\n                    text: newMessage,\n                    sender: currentSender\n                }\n            ]);\n            setNewMessage(\"\");\n            setCurrentSender(currentSender === \"user\" ? \"opponent\" : \"user\"); // Bergantian antara user dan opponent\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-lg border-solid border-2  w-[40vw] h-[60vh]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row text-white px-7 py-6 bg-cyan-400 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"text-2xl text-white\",\n                        children: \"\\uD83E\\uDD16 Chatbot\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/minimize.svg\",\n                                className: \"\",\n                                width: 24,\n                                height: 24\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 22,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/close.svg\",\n                                className: \"\",\n                                width: 24,\n                                height: 24\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 19,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-red-100\",\n                style: {\n                    height: \"100%\",\n                    overflowY: \"scroll\",\n                    padding: \"10px\"\n                },\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"10px\",\n                            textAlign: message.sender === \"user\" ? \"right\" : \"left\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                background: message.sender === \"user\" ? \"#4CAF50\" : \"#008CBA\",\n                                color: \"white\",\n                                padding: \"5px 10px\",\n                                borderRadius: \"5px\"\n                            },\n                            children: message.text\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                            lineNumber: 46,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-100 p-4 flex flex-row gap-4 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: newMessage,\n                        onChange: (e)=>setNewMessage(e.target.value),\n                        placeholder: \"Type your message...\",\n                        className: \"w-full min-h-[5vh] px-4\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"text-white bg-cyan-400 px-6 py-2 rounded-xl\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 59,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RoomChat, \"5AdEAVIzj3CAKHiJKKrJq9bXeOw=\");\n_c = RoomChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomChat);\nvar _c;\n$RefreshReg$(_c, \"RoomChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jvb21jaGF0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUF3QztBQUNWO0FBRTlCLE1BQU1HLFdBQVc7O0lBQ2YsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDLEVBQUU7SUFDM0MsTUFBTSxDQUFDSyxZQUFZQyxjQUFjLEdBQUdOLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ08sZUFBZUMsaUJBQWlCLEdBQUdSLCtDQUFRQSxDQUFDLFNBQVMscURBQXFEO0lBRWpILE1BQU1TLG9CQUFvQjtRQUN4QixJQUFJSixXQUFXSyxJQUFJLE9BQU8sSUFBSTtZQUM1Qk4sWUFBWTttQkFBSUQ7Z0JBQVU7b0JBQUVRLE1BQU1OO29CQUFZTyxRQUFRTDtnQkFBYzthQUFFO1lBQ3RFRCxjQUFjO1lBQ2RFLGlCQUFpQkQsa0JBQWtCLFNBQVMsYUFBYSxTQUFTLHNDQUFzQztRQUMxRztJQUNGO0lBRUEscUJBQ0UsOERBQUNNO1FBQUlDLFdBQVU7OzBCQUNYLDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBQ1gsOERBQUNDO3dCQUFHRCxXQUFVO2tDQUFzQjs7Ozs7O2tDQUNwQyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDYixtREFBS0E7Z0NBQ0plLEtBQUk7Z0NBQ0pGLFdBQVU7Z0NBQ1ZHLE9BQU87Z0NBQ1BDLFFBQVE7Ozs7OzswQ0FFViw4REFBQ2pCLG1EQUFLQTtnQ0FDSmUsS0FBSTtnQ0FDSkYsV0FBVTtnQ0FDVkcsT0FBTztnQ0FDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUtoQiw4REFBQ0w7Z0JBQUlDLFdBQVU7Z0JBQWFLLE9BQU87b0JBQUVELFFBQVE7b0JBQVFFLFdBQVc7b0JBQVVDLFNBQVM7Z0JBQVE7MEJBQ3hGbEIsU0FBU21CLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNYO3dCQUVDTSxPQUFPOzRCQUNMTSxjQUFjOzRCQUNkQyxXQUFXSCxRQUFRWCxNQUFNLEtBQUssU0FBUyxVQUFVO3dCQUNuRDtrQ0FFQSw0RUFBQ2U7NEJBQ0NSLE9BQU87Z0NBQ0xTLFlBQVlMLFFBQVFYLE1BQU0sS0FBSyxTQUFTLFlBQVk7Z0NBQ3BEaUIsT0FBTztnQ0FDUFIsU0FBUztnQ0FDVFMsY0FBYzs0QkFDaEI7c0NBRUNQLFFBQVFaLElBQUk7Ozs7Ozt1QkFkVmE7Ozs7Ozs7Ozs7MEJBbUJYLDhEQUFDWDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNpQjt3QkFDQ0MsTUFBSzt3QkFDTEMsT0FBTzVCO3dCQUNQNkIsVUFBVSxDQUFDQyxJQUFNN0IsY0FBYzZCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzt3QkFDN0NJLGFBQVk7d0JBQ1p2QixXQUFVOzs7Ozs7a0NBRVosOERBQUN3Qjt3QkFBT0MsU0FBUzlCO3dCQUFtQkssV0FBVTtrQ0FBK0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1yRztHQXJFTVo7S0FBQUE7QUF1RU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcm9vbWNoYXQuanN4PzU4NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcclxuXHJcbmNvbnN0IFJvb21DaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbY3VycmVudFNlbmRlciwgc2V0Q3VycmVudFNlbmRlcl0gPSB1c2VTdGF0ZSgndXNlcicpOyAvLyBNZW5lbnR1a2FuIHBlbmdpcmltIHBlc2FuICh1c2VyIGF0YXUgbGF3YW4gYmljYXJhKVxyXG5cclxuICBjb25zdCBoYW5kbGVTZW5kTWVzc2FnZSA9ICgpID0+IHtcclxuICAgIGlmIChuZXdNZXNzYWdlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgc2V0TWVzc2FnZXMoWy4uLm1lc3NhZ2VzLCB7IHRleHQ6IG5ld01lc3NhZ2UsIHNlbmRlcjogY3VycmVudFNlbmRlciB9XSk7XHJcbiAgICAgIHNldE5ld01lc3NhZ2UoJycpO1xyXG4gICAgICBzZXRDdXJyZW50U2VuZGVyKGN1cnJlbnRTZW5kZXIgPT09ICd1c2VyJyA/ICdvcHBvbmVudCcgOiAndXNlcicpOyAvLyBCZXJnYW50aWFuIGFudGFyYSB1c2VyIGRhbiBvcHBvbmVudFxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm91bmRlZC1sZyBib3JkZXItc29saWQgYm9yZGVyLTIgIHctWzQwdnddIGgtWzYwdmhdJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyB0ZXh0LXdoaXRlIHB4LTcgcHktNiBiZy1jeWFuLTQwMCBqdXN0aWZ5LWJldHdlZW4nPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCB0ZXh0LXdoaXRlJz7wn6SWIENoYXRib3Q8L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBnYXAtNCc+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9taW5pbWl6ZS5zdmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezI0fVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9jbG9zZS5zdmdcIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezI0fVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MjR9XHJcblxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXJlZC0xMDAnIHN0eWxlPXt7IGhlaWdodDogJzEwMCUnLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBwYWRkaW5nOiAnMTBweCcsIH19PlxyXG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGtleT17aW5kZXh9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiAnMTBweCcsXHJcbiAgICAgICAgICAgICAgdGV4dEFsaWduOiBtZXNzYWdlLnNlbmRlciA9PT0gJ3VzZXInID8gJ3JpZ2h0JyA6ICdsZWZ0JyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICcjNENBRjUwJyA6ICcjMDA4Q0JBJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzVweCAxMHB4JyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttZXNzYWdlLnRleHR9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktMTAwIHAtNCBmbGV4IGZsZXgtcm93IGdhcC00ICcgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBtaW4taC1bNXZoXSBweC00J1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX0gY2xhc3NOYW1lPSd0ZXh0LXdoaXRlIGJnLWN5YW4tNDAwIHB4LTYgcHktMiByb3VuZGVkLXhsJyA+XHJcbiAgICAgICAgICBTZW5kXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb21DaGF0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiUm9vbUNoYXQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJjdXJyZW50U2VuZGVyIiwic2V0Q3VycmVudFNlbmRlciIsImhhbmRsZVNlbmRNZXNzYWdlIiwidHJpbSIsInRleHQiLCJzZW5kZXIiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsInNyYyIsIndpZHRoIiwiaGVpZ2h0Iiwic3R5bGUiLCJvdmVyZmxvd1kiLCJwYWRkaW5nIiwibWFwIiwibWVzc2FnZSIsImluZGV4IiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwic3BhbiIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/roomchat.jsx\n"));

/***/ })

});