"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/roomchat.jsx":
/*!*************************************!*\
  !*** ./src/components/roomchat.jsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst RoomChat = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [botResponse, setBotResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user_id, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUniqueUserId = ()=>{\n            let storedUserId = sessionStorage.getItem(\"user_id\");\n            if (!storedUserId) {\n                storedUserId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                sessionStorage.setItem(\"user_id\", storedUserId);\n            }\n            return storedUserId;\n        };\n        setUserId(getUniqueUserId());\n    }, []);\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() !== \"\") {\n            try {\n                setLoading(true);\n                const response = await fetch(\"https://mrneuralnet-chain-link-ai.hf.space/bot_interaction\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        query: newMessage,\n                        user_id: user_id\n                    })\n                });\n                if (response.ok) {\n                    const result = await response.json();\n                    const botResponseText = result[0].text;\n                    setMessages([\n                        ...messages,\n                        {\n                            text: newMessage,\n                            sender: \"user\"\n                        },\n                        {\n                            text: botResponseText,\n                            sender: \"bot\"\n                        }\n                    ]);\n                    setBotResponse(botResponseText);\n                    setNewMessage(\"\");\n                } else {\n                    console.error(\"Error:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error:\", error);\n            } finally{\n                setLoading(false);\n            }\n        }\n    };\n    const handleKeyPress = (e)=>{\n        if (e.key === \"Enter\") {\n            handleSendMessage();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row text-white px-7 py-6 bg-cyan-400 justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/FloatingRobot.jpg\",\n                            alt: \"Chatbot Logo\",\n                            className: \"rounded-full\",\n                            width: 45,\n                            height: 45\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                            lineNumber: 72,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-2xl font-bold\",\n                            children: \"Chatbot\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                    lineNumber: 71,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-y-auto p-5 bg-sky-100 shadow-inner\",\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-5 py-5 flex mb-1 flex-col \".concat(message.sender === \"user\" ? \"items-end\" : \"items-start\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"py-2\",\n                                style: {\n                                    color: \"Black\"\n                                },\n                                children: message.sender === \"user\" ? \"You\" : \"Bot\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-4 py-2 w-fit max-w-4xl\",\n                                style: {\n                                    background: message.sender === \"user\" ? \"#4CAF50\" : \"#008CBA\",\n                                    color: \"white\",\n                                    borderRadius: \"5px\"\n                                },\n                                children: message.text\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 100,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-100 p-4 flex flex-row gap-4 focus-visible:border-cyan-400\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onKeyDown: handleKeyPress,\n                        type: \"text\",\n                        value: newMessage,\n                        onChange: (e)=>setNewMessage(e.target.value),\n                        placeholder: \"Type your message...\",\n                        className: \"w-full min-h-[5vh] px-4 text-black focus:outline-cyan-400\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"text-white px-6 py-2 rounded-xl \".concat(loading ? \"bg-gray-500\" : \"bg-cyan-400\"),\n                        disabled: loading,\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 114,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n        lineNumber: 69,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RoomChat, \"qx3HU7/0Xi4TYOT5Z3ciMLCB+gw=\");\n_c = RoomChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomChat);\nvar _c;\n$RefreshReg$(_c, \"RoomChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jvb21jaGF0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDcEI7QUFFSztBQUVwQyxNQUFNTSxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1EsWUFBWUMsY0FBYyxHQUFHVCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNVLGFBQWFDLGVBQWUsR0FBR1gsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDWSxTQUFTQyxVQUFVLEdBQUdiLCtDQUFRQSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ2MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNZSxrQkFBa0I7WUFDdEIsSUFBSUMsZUFBZUMsZUFBZUMsT0FBTyxDQUFDO1lBRTFDLElBQUksQ0FBQ0YsY0FBYztnQkFDakJBLGVBQWViLGdEQUFNQTtnQkFDckJjLGVBQWVFLE9BQU8sQ0FBQyxXQUFXSDtZQUNwQztZQUVBLE9BQU9BO1FBQ1Q7UUFFQUosVUFBVUc7SUFDWixHQUFHLEVBQUU7SUFFTCxNQUFNSyxvQkFBb0I7UUFDeEIsSUFBSWIsV0FBV2MsSUFBSSxPQUFPLElBQUk7WUFDNUIsSUFBSTtnQkFDRlAsV0FBVztnQkFFWCxNQUFNUSxXQUFXLE1BQU1DLE1BQU0sOERBQThEO29CQUN6RkMsUUFBUTtvQkFDUkMsU0FBUzt3QkFDUCxnQkFBZ0I7b0JBQ2xCO29CQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7d0JBQ25CQyxPQUFPdEI7d0JBQ1BJLFNBQVNBO29CQUNYO2dCQUNGO2dCQUVBLElBQUlXLFNBQVNRLEVBQUUsRUFBRTtvQkFDZixNQUFNQyxTQUFTLE1BQU1ULFNBQVNVLElBQUk7b0JBQ2xDLE1BQU1DLGtCQUFrQkYsTUFBTSxDQUFDLEVBQUUsQ0FBQ0csSUFBSTtvQkFFdEM1QixZQUFZOzJCQUFJRDt3QkFBVTs0QkFBRTZCLE1BQU0zQjs0QkFBWTRCLFFBQVE7d0JBQU87d0JBQUc7NEJBQUVELE1BQU1EOzRCQUFpQkUsUUFBUTt3QkFBTTtxQkFBRTtvQkFDekd6QixlQUFldUI7b0JBQ2Z6QixjQUFjO2dCQUNoQixPQUFPO29CQUNMNEIsUUFBUUMsS0FBSyxDQUFDLFVBQVVmLFNBQVNnQixVQUFVO2dCQUM3QztZQUNGLEVBQUUsT0FBT0QsT0FBTztnQkFDZEQsUUFBUUMsS0FBSyxDQUFDLFVBQVVBO1lBQzFCLFNBQVU7Z0JBQ1J2QixXQUFXO1lBQ2I7UUFDRjtJQUNGO0lBRUEsTUFBTXlCLGlCQUFpQixDQUFDQztRQUN0QixJQUFJQSxFQUFFQyxHQUFHLEtBQUssU0FBUztZQUNyQnJCO1FBQ0Y7SUFDRjtJQUVBLHFCQUNFLDhEQUFDc0I7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUMxQyxtREFBS0E7NEJBQ0oyQyxLQUFJOzRCQUNKQyxLQUFJOzRCQUNKRixXQUFVOzRCQUNWRyxPQUFPOzRCQUNQQyxRQUFROzs7Ozs7c0NBRVYsOERBQUNDOzRCQUFHTCxXQUFVO3NDQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBTXZDLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWnRDLFNBQVM0QyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDVDt3QkFDQ0MsV0FBVyxnQ0FBd0YsT0FBeERPLFFBQVFmLE1BQU0sS0FBSyxTQUFTLGNBQWM7OzBDQUdyRiw4REFBQ2lCO2dDQUNDVCxXQUFVO2dDQUNWVSxPQUFPO29DQUNMQyxPQUFPO2dDQUNUOzBDQUVDSixRQUFRZixNQUFNLEtBQUssU0FBUyxRQUFROzs7Ozs7MENBR3ZDLDhEQUFDaUI7Z0NBQ0NULFdBQVU7Z0NBQ1ZVLE9BQU87b0NBQ0xFLFlBQVlMLFFBQVFmLE1BQU0sS0FBSyxTQUFTLFlBQVk7b0NBQ3BEbUIsT0FBTztvQ0FDUEUsY0FBYztnQ0FDaEI7MENBRUNOLFFBQVFoQixJQUFJOzs7Ozs7O3VCQW5CVmlCOzs7Ozs7Ozs7OzBCQXlCWCw4REFBQ1Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDYzt3QkFDQ0MsV0FBV25CO3dCQUNYb0IsTUFBSzt3QkFDTEMsT0FBT3JEO3dCQUNQc0QsVUFBVSxDQUFDckIsSUFBTWhDLGNBQWNnQyxFQUFFc0IsTUFBTSxDQUFDRixLQUFLO3dCQUM3Q0csYUFBWTt3QkFDWnBCLFdBQVU7Ozs7OztrQ0FFWiw4REFBQ3FCO3dCQUNDQyxTQUFTN0M7d0JBQ1R1QixXQUFXLG1DQUEyRSxPQUF4QzlCLFVBQVUsZ0JBQWdCO3dCQUN4RXFELFVBQVVyRDtrQ0FDWDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTVQ7R0EvSE1UO0tBQUFBO0FBaUlOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL3Jvb21jaGF0LmpzeD81ODRlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcblxyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IFJvb21DaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYm90UmVzcG9uc2UsIHNldEJvdFJlc3BvbnNlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcl9pZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVbmlxdWVVc2VySWQgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBzdG9yZWRVc2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2lkJyk7XHJcblxyXG4gICAgICBpZiAoIXN0b3JlZFVzZXJJZCkge1xyXG4gICAgICAgIHN0b3JlZFVzZXJJZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJfaWQnLCBzdG9yZWRVc2VySWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3RvcmVkVXNlcklkO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRVc2VySWQoZ2V0VW5pcXVlVXNlcklkKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAobmV3TWVzc2FnZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9tcm5ldXJhbG5ldC1jaGFpbi1saW5rLWFpLmhmLnNwYWNlL2JvdF9pbnRlcmFjdGlvbicsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IG5ld01lc3NhZ2UsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zdCBib3RSZXNwb25zZVRleHQgPSByZXN1bHRbMF0udGV4dDtcclxuXHJcbiAgICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIHsgdGV4dDogbmV3TWVzc2FnZSwgc2VuZGVyOiAndXNlcicgfSwgeyB0ZXh0OiBib3RSZXNwb25zZVRleHQsIHNlbmRlcjogJ2JvdCcgfV0pO1xyXG4gICAgICAgICAgc2V0Qm90UmVzcG9uc2UoYm90UmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIHNldE5ld01lc3NhZ2UoJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGhhbmRsZVNlbmRNZXNzYWdlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGgtc2NyZWVuJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgdGV4dC13aGl0ZSBweC03IHB5LTYgYmctY3lhbi00MDAganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTQnPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9GbG9hdGluZ1JvYm90LmpwZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkNoYXRib3QgTG9nb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs0NX1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0NX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQnPkNoYXRib3Q8L2gxPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgIFxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4LWdyb3cgb3ZlcmZsb3cteS1hdXRvIHAtNSBiZy1za3ktMTAwIHNoYWRvdy1pbm5lcic+XHJcbiAgICAgICAge21lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNSBweS01IGZsZXggbWItMSBmbGV4LWNvbCAke21lc3NhZ2Uuc2VuZGVyID09PSAndXNlcicgPyAnaXRlbXMtZW5kJyA6ICdpdGVtcy1zdGFydCd9YH1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B5LTInXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnQmxhY2snLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICdZb3UnIDogJ0JvdCd9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPSdweC00IHB5LTIgdy1maXQgbWF4LXctNHhsJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBtZXNzYWdlLnNlbmRlciA9PT0gJ3VzZXInID8gJyM0Q0FGNTAnIDogJyMwMDhDQkEnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bWVzc2FnZS50ZXh0fVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAgcC00IGZsZXggZmxleC1yb3cgZ2FwLTQgZm9jdXMtdmlzaWJsZTpib3JkZXItY3lhbi00MDAnPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlQcmVzc31cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLi5cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWluLWgtWzV2aF0gcHgtNCB0ZXh0LWJsYWNrIGZvY3VzOm91dGxpbmUtY3lhbi00MDAnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgcHgtNiBweS0yIHJvdW5kZWQteGwgJHtsb2FkaW5nID8gJ2JnLWdyYXktNTAwJyA6ICdiZy1jeWFuLTQwMCd9YH1cclxuICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFNlbmRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbUNoYXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJ2NCIsInV1aWR2NCIsIlJvb21DaGF0IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwiYm90UmVzcG9uc2UiLCJzZXRCb3RSZXNwb25zZSIsInVzZXJfaWQiLCJzZXRVc2VySWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldFVuaXF1ZVVzZXJJZCIsInN0b3JlZFVzZXJJZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJoYW5kbGVTZW5kTWVzc2FnZSIsInRyaW0iLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJvayIsInJlc3VsdCIsImpzb24iLCJib3RSZXNwb25zZVRleHQiLCJ0ZXh0Iiwic2VuZGVyIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsImhhbmRsZUtleVByZXNzIiwiZSIsImtleSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJzcGFuIiwic3R5bGUiLCJjb2xvciIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJpbnB1dCIsIm9uS2V5RG93biIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/roomchat.jsx\n"));

/***/ })

});