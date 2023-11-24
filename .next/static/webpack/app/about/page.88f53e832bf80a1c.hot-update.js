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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MinusIcon,XMarkIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/MinusIcon.js\");\n/* harmony import */ var _barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MinusIcon,XMarkIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst RoomChat = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [botResponse, setBotResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user_id, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUniqueUserId = ()=>{\n            let storedUserId = sessionStorage.getItem(\"user_id\");\n            if (!storedUserId) {\n                storedUserId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                sessionStorage.setItem(\"user_id\", storedUserId);\n            }\n            return storedUserId;\n        };\n        setUserId(getUniqueUserId());\n    }, []);\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() !== \"\") {\n            console.log(\"Sending payload:\", {\n                query: newMessage,\n                user_id\n            });\n            try {\n                const response = await fetch(\"https://mrneuralnet-chain-link-ai.hf.space/bot_interaction\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        query: newMessage,\n                        user_id: user_id\n                    })\n                });\n                if (response.ok) {\n                    const result = await response.json();\n                    const botResponseText = result[0].text;\n                    setMessages([\n                        ...messages,\n                        {\n                            text: newMessage,\n                            sender: \"user\"\n                        },\n                        {\n                            text: botResponseText,\n                            sender: \"bot\"\n                        }\n                    ]);\n                    setBotResponse(botResponseText);\n                    setNewMessage(\"\");\n                } else {\n                    console.error(\"Error:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error:\", error);\n            }\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-lg border-solid border-2 w-screen h-screen m-0 p-0  h-[100%] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row text-white px-7 py-6 bg-cyan-400 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/FloatingRobot.jpg\",\n                                alt: \"Chatbot Logo\",\n                                className: \"rounded-full\",\n                                width: 45,\n                                height: 45\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 68,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Chatbot\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 67,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"text-white h-8 w-8 font-bold\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 79,\n                                columnNumber: 12\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"text-white h-8 w-8 font-bold\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 12\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 66,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-sky-100 h-full overflow-y-auto p-5 h-[60vh]  shadow-inner\",\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-5 py-5 flex mb-1 flex-col \".concat(message.sender === \"user\" ? \"items-end\" : \"items-start\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \" py-2 \",\n                                style: {\n                                    color: \"Black\"\n                                },\n                                children: message.sender === \"user\" ? \"You\" : \"Bot\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 92,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-4 py-2 w-fit\",\n                                style: {\n                                    background: message.sender === \"user\" ? \"#4CAF50\" : \"#008CBA\",\n                                    color: \"white\",\n                                    borderRadius: \"5px\"\n                                },\n                                children: message.text\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 87,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-100 p-4 flex flex-row gap-4 focus-visible:border-cyan-400\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        value: newMessage,\n                        onChange: (e)=>setNewMessage(e.target.value),\n                        placeholder: \"Type your message...\",\n                        className: \"w-full min-h-[5vh] px-4 text-black focus:outline-cyan-400\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 117,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"text-white bg-cyan-400 px-6 py-2 rounded-xl\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 124,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 116,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n        lineNumber: 65,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RoomChat, \"8raD47dAwGSK4PIIt6vvIEGRMjI=\");\n_c = RoomChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomChat);\nvar _c;\n$RefreshReg$(_c, \"RoomChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jvb21jaGF0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNyQjtBQUNtQztBQUM3QjtBQUVwQyxNQUFNUSxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYyxTQUFTQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXRDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLGtCQUFrQjtZQUN0QixJQUFJQyxlQUFlQyxlQUFlQyxPQUFPLENBQUM7WUFFMUMsSUFBSSxDQUFDRixjQUFjO2dCQUNqQkEsZUFBZVgsZ0RBQU1BO2dCQUNyQlksZUFBZUUsT0FBTyxDQUFDLFdBQVdIO1lBQ3BDO1lBRUEsT0FBT0E7UUFDVDtRQUVBRixVQUFVQztJQUNaLEdBQUcsRUFBRTtJQUdMLE1BQU1LLG9CQUFvQjtRQUN4QixJQUFJWCxXQUFXWSxJQUFJLE9BQU8sSUFBSTtZQUU1QkMsUUFBUUMsR0FBRyxDQUFDLG9CQUFvQjtnQkFBRUMsT0FBT2Y7Z0JBQVlJO1lBQVE7WUFFN0QsSUFBSTtnQkFDRixNQUFNWSxXQUFXLE1BQU1DLE1BQU0sOERBQThEO29CQUN6RkMsUUFBUTtvQkFDUkMsU0FBUzt3QkFDUCxnQkFBZ0I7b0JBQ2xCO29CQUNBQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7d0JBQ25CUCxPQUFPZjt3QkFDUEksU0FBU0E7b0JBQ1g7Z0JBQ0Y7Z0JBRUEsSUFBSVksU0FBU08sRUFBRSxFQUFFO29CQUNmLE1BQU1DLFNBQVMsTUFBTVIsU0FBU1MsSUFBSTtvQkFDbEMsTUFBTUMsa0JBQWtCRixNQUFNLENBQUMsRUFBRSxDQUFDRyxJQUFJO29CQUV0QzVCLFlBQVk7MkJBQUlEO3dCQUFVOzRCQUFFNkIsTUFBTTNCOzRCQUFZNEIsUUFBUTt3QkFBTzt3QkFBRzs0QkFBRUQsTUFBTUQ7NEJBQWlCRSxRQUFRO3dCQUFNO3FCQUFFO29CQUN6R3pCLGVBQWV1QjtvQkFDZnpCLGNBQWM7Z0JBQ2hCLE9BQU87b0JBQ0xZLFFBQVFnQixLQUFLLENBQUMsVUFBVWIsU0FBU2MsVUFBVTtnQkFDN0M7WUFDRixFQUFFLE9BQU9ELE9BQU87Z0JBQ2RoQixRQUFRZ0IsS0FBSyxDQUFDLFVBQVVBO1lBQzFCO1FBQ0Y7SUFDRjtJQUtBLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFVOzswQkFDWCw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNYLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2YsOERBQUN4QyxtREFBS0E7Z0NBQ0p5QyxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKRixXQUFVO2dDQUNWRyxPQUFPO2dDQUNQQyxRQUFROzs7Ozs7MENBRVYsOERBQUNDO2dDQUFHTCxXQUFVOzBDQUFxQjs7Ozs7Ozs7Ozs7O2tDQUduQyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNoQiw4REFBQ3RDLDJHQUFTQTtnQ0FBQ3NDLFdBQVU7Ozs7OzswQ0FDckIsOERBQUN2QywyR0FBU0E7Z0NBQUN1QyxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzFCLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDWmxDLFNBQVN3QyxHQUFHLENBQUMsQ0FBQ0MsU0FBU0Msc0JBQ3RCLDhEQUFDVDt3QkFDREMsV0FBVyxnQ0FBd0YsT0FBeERPLFFBQVFYLE1BQU0sS0FBSyxTQUFTLGNBQWM7OzBDQUluRiw4REFBQ2E7Z0NBQ0RULFdBQVU7Z0NBQ1JVLE9BQU87b0NBQ0xDLE9BQU87Z0NBQ1Q7MENBRUVKLFFBQVFYLE1BQU0sS0FBSyxTQUFTLFFBQVE7Ozs7OzswQ0FHeEMsOERBQUNhO2dDQUNEVCxXQUFVO2dDQUNSVSxPQUFPO29DQUNMRSxZQUFZTCxRQUFRWCxNQUFNLEtBQUssU0FBUyxZQUFZO29DQUNwRGUsT0FBTztvQ0FFUEUsY0FBYztnQ0FDaEI7MENBRUNOLFFBQVFaLElBQUk7Ozs7Ozs7dUJBckJWYTs7Ozs7Ozs7OzswQkEyQlgsOERBQUNUO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2M7d0JBQ0NDLE1BQUs7d0JBQ0xDLE9BQU9oRDt3QkFDUGlELFVBQVUsQ0FBQ0MsSUFBTWpELGNBQWNpRCxFQUFFQyxNQUFNLENBQUNILEtBQUs7d0JBQzdDSSxhQUFZO3dCQUNacEIsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDcUI7d0JBQU9DLFNBQVMzQzt3QkFBbUJxQixXQUFVO2tDQUErQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTXJHO0dBNUhNbkM7S0FBQUE7QUE4SE4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcm9vbWNoYXQuanN4PzU4NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xyXG5pbXBvcnQgeyBYTWFya0ljb24sIE1pbnVzSWNvbiAgfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkJ1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IFJvb21DaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYm90UmVzcG9uc2UsIHNldEJvdFJlc3BvbnNlXSA9IHVzZVN0YXRlKCcnKTsgXHJcbiAgY29uc3QgW3VzZXJfaWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVbmlxdWVVc2VySWQgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBzdG9yZWRVc2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2lkJyk7XHJcblxyXG4gICAgICBpZiAoIXN0b3JlZFVzZXJJZCkge1xyXG4gICAgICAgIHN0b3JlZFVzZXJJZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJfaWQnLCBzdG9yZWRVc2VySWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3RvcmVkVXNlcklkO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRVc2VySWQoZ2V0VW5pcXVlVXNlcklkKCkpO1xyXG4gIH0sIFtdKTsgXHJcbiAgXHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKG5ld01lc3NhZ2UudHJpbSgpICE9PSAnJykge1xyXG5cclxuICAgICAgY29uc29sZS5sb2coJ1NlbmRpbmcgcGF5bG9hZDonLCB7IHF1ZXJ5OiBuZXdNZXNzYWdlLCB1c2VyX2lkIH0pO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCdodHRwczovL21ybmV1cmFsbmV0LWNoYWluLWxpbmstYWkuaGYuc3BhY2UvYm90X2ludGVyYWN0aW9uJywge1xyXG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBxdWVyeTogbmV3TWVzc2FnZSxcclxuICAgICAgICAgICAgdXNlcl9pZDogdXNlcl9pZCxcclxuICAgICAgICAgIH0pLFxyXG4gICAgICAgIH0pO1xyXG4gIFxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgY29uc3QgYm90UmVzcG9uc2VUZXh0ID0gcmVzdWx0WzBdLnRleHQ7XHJcbiAgXHJcbiAgICAgICAgICBzZXRNZXNzYWdlcyhbLi4ubWVzc2FnZXMsIHsgdGV4dDogbmV3TWVzc2FnZSwgc2VuZGVyOiAndXNlcicgfSwgeyB0ZXh0OiBib3RSZXNwb25zZVRleHQsIHNlbmRlcjogJ2JvdCcgfV0pO1xyXG4gICAgICAgICAgc2V0Qm90UmVzcG9uc2UoYm90UmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgIHNldE5ld01lc3NhZ2UoJycpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuXHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J3JvdW5kZWQtbGcgYm9yZGVyLXNvbGlkIGJvcmRlci0yIHctc2NyZWVuIGgtc2NyZWVuIG0tMCBwLTAgIGgtWzEwMCVdICcgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHRleHQtd2hpdGUgcHgtNyBweS02IGJnLWN5YW4tNDAwIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtNCc+XHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz1cIi9GbG9hdGluZ1JvYm90LmpwZ1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiQ2hhdGJvdCBMb2dvXCJcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXs0NX1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezQ1fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQnPkNoYXRib3Q8L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IGdhcC0yJz5cclxuICAgICAgICAgICA8TWludXNJY29uIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgaC04IHctOCBmb250LWJvbGRcIiAvPlxyXG4gICAgICAgICAgIDxYTWFya0ljb24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBoLTggdy04IGZvbnQtYm9sZFwiIC8+XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1za3ktMTAwIGgtZnVsbCBvdmVyZmxvdy15LWF1dG8gcC01IGgtWzYwdmhdICBzaGFkb3ctaW5uZXInID5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNSBweS01IGZsZXggbWItMSBmbGV4LWNvbCAke21lc3NhZ2Uuc2VuZGVyID09PSAndXNlcicgPyAnaXRlbXMtZW5kJyA6ICdpdGVtcy1zdGFydCd9YH1cclxuICAgICAgICAgICAga2V5PXtpbmRleH1cclxuICAgICAgICAgICBcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPScgcHktMiAnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnQmxhY2snLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAge21lc3NhZ2Uuc2VuZGVyID09PSAndXNlcicgPyAnWW91JyA6ICdCb3QnfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9J3B4LTQgcHktMiB3LWZpdCdcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICcjNENBRjUwJyA6ICcjMDA4Q0JBJyxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttZXNzYWdlLnRleHR9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCBwLTQgZmxleCBmbGV4LXJvdyBnYXAtNCBmb2N1cy12aXNpYmxlOmJvcmRlci1jeWFuLTQwMCcgPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBtaW4taC1bNXZoXSBweC00IHRleHQtYmxhY2sgZm9jdXM6b3V0bGluZS1jeWFuLTQwMCdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2V9IGNsYXNzTmFtZT0ndGV4dC13aGl0ZSBiZy1jeWFuLTQwMCBweC02IHB5LTIgcm91bmRlZC14bCcgPlxyXG4gICAgICAgICAgU2VuZFxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBSb29tQ2hhdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJJbWFnZSIsIlhNYXJrSWNvbiIsIk1pbnVzSWNvbiIsInY0IiwidXVpZHY0IiwiUm9vbUNoYXQiLCJtZXNzYWdlcyIsInNldE1lc3NhZ2VzIiwibmV3TWVzc2FnZSIsInNldE5ld01lc3NhZ2UiLCJib3RSZXNwb25zZSIsInNldEJvdFJlc3BvbnNlIiwidXNlcl9pZCIsInNldFVzZXJJZCIsImdldFVuaXF1ZVVzZXJJZCIsInN0b3JlZFVzZXJJZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJoYW5kbGVTZW5kTWVzc2FnZSIsInRyaW0iLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJyZXN1bHQiLCJqc29uIiwiYm90UmVzcG9uc2VUZXh0IiwidGV4dCIsInNlbmRlciIsImVycm9yIiwic3RhdHVzVGV4dCIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJzcGFuIiwic3R5bGUiLCJjb2xvciIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJpbnB1dCIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/roomchat.jsx\n"));

/***/ })

});