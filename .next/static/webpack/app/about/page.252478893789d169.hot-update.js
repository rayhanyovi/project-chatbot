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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst RoomChat = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [currentSender, setCurrentSender] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"user\"); // Menentukan pengirim pesan (user atau lawan bicara)\n    const handleSendMessage = ()=>{\n        if (newMessage.trim() !== \"\") {\n            setMessages([\n                ...messages,\n                {\n                    text: newMessage,\n                    sender: currentSender\n                }\n            ]);\n            setNewMessage(\"\");\n            setCurrentSender(currentSender === \"user\" ? \"opponent\" : \"user\"); // Bergantian antara user dan opponent\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    height: \"300px\",\n                    overflowY: \"scroll\",\n                    border: \"1px solid #ccc\",\n                    padding: \"10px\"\n                },\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        style: {\n                            marginBottom: \"10px\",\n                            textAlign: message.sender === \"user\" ? \"right\" : \"left\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            style: {\n                                background: message.sender === \"user\" ? \"#4CAF50\" : \"#008CBA\",\n                                color: \"white\",\n                                padding: \"5px 10px\",\n                                borderRadius: \"5px\"\n                            },\n                            children: message.text\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 13\n                        }, undefined)\n                    }, index, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 20,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    marginTop: \"10px\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: newMessage,\n                        onChange: (e)=>setNewMessage(e.target.value),\n                        placeholder: \"Type your message...\",\n                        style: {\n                            width: \"70%\",\n                            padding: \"5px\"\n                        }\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        style: {\n                            marginLeft: \"10px\",\n                            padding: \"5px\"\n                        },\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n        lineNumber: 17,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RoomChat, \"5AdEAVIzj3CAKHiJKKrJq9bXeOw=\");\n_c = RoomChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomChat);\nvar _c;\n$RefreshReg$(_c, \"RoomChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jvb21jaGF0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0M7QUFFeEMsTUFBTUUsV0FBVzs7SUFDZixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0gsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNJLFlBQVlDLGNBQWMsR0FBR0wsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDTSxlQUFlQyxpQkFBaUIsR0FBR1AsK0NBQVFBLENBQUMsU0FBUyxxREFBcUQ7SUFFakgsTUFBTVEsb0JBQW9CO1FBQ3hCLElBQUlKLFdBQVdLLElBQUksT0FBTyxJQUFJO1lBQzVCTixZQUFZO21CQUFJRDtnQkFBVTtvQkFBRVEsTUFBTU47b0JBQVlPLFFBQVFMO2dCQUFjO2FBQUU7WUFDdEVELGNBQWM7WUFDZEUsaUJBQWlCRCxrQkFBa0IsU0FBUyxhQUFhLFNBQVMsc0NBQXNDO1FBQzFHO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ007OzBCQUNDLDhEQUFDQTtnQkFBSUMsT0FBTztvQkFBRUMsUUFBUTtvQkFBU0MsV0FBVztvQkFBVUMsUUFBUTtvQkFBa0JDLFNBQVM7Z0JBQU87MEJBQzNGZixTQUFTZ0IsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ1I7d0JBRUNDLE9BQU87NEJBQ0xRLGNBQWM7NEJBQ2RDLFdBQVdILFFBQVFSLE1BQU0sS0FBSyxTQUFTLFVBQVU7d0JBQ25EO2tDQUVBLDRFQUFDWTs0QkFDQ1YsT0FBTztnQ0FDTFcsWUFBWUwsUUFBUVIsTUFBTSxLQUFLLFNBQVMsWUFBWTtnQ0FDcERjLE9BQU87Z0NBQ1BSLFNBQVM7Z0NBQ1RTLGNBQWM7NEJBQ2hCO3NDQUVDUCxRQUFRVCxJQUFJOzs7Ozs7dUJBZFZVOzs7Ozs7Ozs7OzBCQW1CWCw4REFBQ1I7Z0JBQUlDLE9BQU87b0JBQUVjLFdBQVc7Z0JBQU87O2tDQUM5Qiw4REFBQ0M7d0JBQ0NDLE1BQUs7d0JBQ0xDLE9BQU8xQjt3QkFDUDJCLFVBQVUsQ0FBQ0MsSUFBTTNCLGNBQWMyQixFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzdDSSxhQUFZO3dCQUNackIsT0FBTzs0QkFBRXNCLE9BQU87NEJBQU9sQixTQUFTO3dCQUFNOzs7Ozs7a0NBRXhDLDhEQUFDbUI7d0JBQU9DLFNBQVM3Qjt3QkFBbUJLLE9BQU87NEJBQUV5QixZQUFZOzRCQUFRckIsU0FBUzt3QkFBTTtrQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTTNGO0dBbkRNaEI7S0FBQUE7QUFxRE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcm9vbWNoYXQuanN4PzU4NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgUm9vbUNoYXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtjdXJyZW50U2VuZGVyLCBzZXRDdXJyZW50U2VuZGVyXSA9IHVzZVN0YXRlKCd1c2VyJyk7IC8vIE1lbmVudHVrYW4gcGVuZ2lyaW0gcGVzYW4gKHVzZXIgYXRhdSBsYXdhbiBiaWNhcmEpXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gKCkgPT4ge1xyXG4gICAgaWYgKG5ld01lc3NhZ2UudHJpbSgpICE9PSAnJykge1xyXG4gICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIHsgdGV4dDogbmV3TWVzc2FnZSwgc2VuZGVyOiBjdXJyZW50U2VuZGVyIH1dKTtcclxuICAgICAgc2V0TmV3TWVzc2FnZSgnJyk7XHJcbiAgICAgIHNldEN1cnJlbnRTZW5kZXIoY3VycmVudFNlbmRlciA9PT0gJ3VzZXInID8gJ29wcG9uZW50JyA6ICd1c2VyJyk7IC8vIEJlcmdhbnRpYW4gYW50YXJhIHVzZXIgZGFuIG9wcG9uZW50XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgaGVpZ2h0OiAnMzAwcHgnLCBvdmVyZmxvd1k6ICdzY3JvbGwnLCBib3JkZXI6ICcxcHggc29saWQgI2NjYycsIHBhZGRpbmc6ICcxMHB4JyB9fT5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzEwcHgnLFxyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogbWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICdyaWdodCcgOiAnbGVmdCcsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG1lc3NhZ2Uuc2VuZGVyID09PSAndXNlcicgPyAnIzRDQUY1MCcgOiAnIzAwOENCQScsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6ICc1cHggMTBweCcsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bWVzc2FnZS50ZXh0fVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAnMTBweCcgfX0+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICB2YWx1ZT17bmV3TWVzc2FnZX1cclxuICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0TmV3TWVzc2FnZShlLnRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlLi4uXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAnNzAlJywgcGFkZGluZzogJzVweCcgfX1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2V9IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxMHB4JywgcGFkZGluZzogJzVweCcgfX0+XHJcbiAgICAgICAgICBTZW5kXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb21DaGF0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIlJvb21DaGF0IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwiY3VycmVudFNlbmRlciIsInNldEN1cnJlbnRTZW5kZXIiLCJoYW5kbGVTZW5kTWVzc2FnZSIsInRyaW0iLCJ0ZXh0Iiwic2VuZGVyIiwiZGl2Iiwic3R5bGUiLCJoZWlnaHQiLCJvdmVyZmxvd1kiLCJib3JkZXIiLCJwYWRkaW5nIiwibWFwIiwibWVzc2FnZSIsImluZGV4IiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwic3BhbiIsImJhY2tncm91bmQiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsIm1hcmdpblRvcCIsImlucHV0IiwidHlwZSIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJ3aWR0aCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYXJnaW5MZWZ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/roomchat.jsx\n"));

/***/ })

});