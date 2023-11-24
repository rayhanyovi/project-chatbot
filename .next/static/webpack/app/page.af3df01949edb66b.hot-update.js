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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MinusIcon,XMarkIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/MinusIcon.js\");\n/* harmony import */ var _barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MinusIcon,XMarkIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst RoomChat = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [botResponse, setBotResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user_id, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUniqueUserId = ()=>{\n            let storedUserId = sessionStorage.getItem(\"user_id\");\n            if (!storedUserId) {\n                storedUserId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                sessionStorage.setItem(\"user_id\", storedUserId);\n            }\n            return storedUserId;\n        };\n        setUserId(getUniqueUserId());\n    }, []);\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() !== \"\") {\n            const userMessage = {\n                text: newMessage,\n                sender: \"user\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    userMessage\n                ]);\n            setNewMessage(\"\");\n            try {\n                setLoading(true);\n                const response = await fetch(\"https://mrneuralnet-chain-link-ai.hf.space/bot_interaction\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        query: newMessage,\n                        user_id: user_id\n                    })\n                });\n                if (response.ok) {\n                    const result = await response.json();\n                    const botResponseText = result[0].text;\n                    const botResponseMessage = {\n                        text: botResponseText,\n                        sender: \"bot\"\n                    };\n                    setMessages((prevMessages)=>[\n                            ...prevMessages,\n                            botResponseMessage\n                        ]);\n                    setBotResponse(botResponseText);\n                } else {\n                    console.error(\"Error:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error:\", error);\n            } finally{\n                setLoading(false);\n            }\n        }\n    };\n    const handleKeyPress = (e)=>{\n        if (e.key === \"Enter\") {\n            handleSendMessage();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row text-white px-7 py-6 bg-cyan-400 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/FloatingRobot.jpg\",\n                                alt: \"Chatbot Logo\",\n                                className: \"rounded-full\",\n                                width: 45,\n                                height: 45\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                        className: \"text-2xl font-bold\",\n                                        children: \"Chatbot\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                        lineNumber: 84,\n                                        columnNumber: 11\n                                    }, undefined),\n                                    loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Chatbot is typing...\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                        lineNumber: 87,\n                                        columnNumber: 13\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"text-white h-8 w-8 font-bold\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 95,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"text-white h-8 w-8 font-bold\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 96,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-y-auto p-5 bg-sky-100 shadow-inner\",\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-5 py-5 flex mb-1 flex-col \".concat(message.sender === \"user\" ? \"items-end\" : \"items-start\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"py-2\",\n                                style: {\n                                    color: \"Black\"\n                                },\n                                children: message.sender === \"user\" ? \"You\" : \"Bot\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-4 py-2 w-fit max-w-4xl\",\n                                style: {\n                                    background: message.sender === \"user\" ? \"#4CAF50\" : \"#008CBA\",\n                                    color: \"white\",\n                                    borderRadius: \"5px\"\n                                },\n                                children: message.text\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 115,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 102,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 100,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-100 p-4 flex flex-row gap-4 focus-visible:border-cyan-400\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onKeyDown: handleKeyPress,\n                        type: \"text\",\n                        value: newMessage,\n                        onChange: (e)=>setNewMessage(e.target.value),\n                        placeholder: \"Type your message...\",\n                        className: \"w-full min-h-[5vh] px-4 text-black focus:outline-cyan-400\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"text-white px-6 py-2 rounded-xl \".concat(loading ? \"bg-gray-500\" : \"bg-cyan-400\"),\n                        disabled: loading,\n                        children: loading ? \"...\" : \"Send\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 138,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 129,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RoomChat, \"qx3HU7/0Xi4TYOT5Z3ciMLCB+gw=\");\n_c = RoomChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomChat);\nvar _c;\n$RefreshReg$(_c, \"RoomChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jvb21jaGF0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNwQjtBQUNrQztBQUM3QjtBQUVwQyxNQUFNUSxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYyxTQUFTQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixrQkFBa0I7WUFDdEIsSUFBSUMsZUFBZUMsZUFBZUMsT0FBTyxDQUFDO1lBRTFDLElBQUksQ0FBQ0YsY0FBYztnQkFDakJBLGVBQWViLGdEQUFNQTtnQkFDckJjLGVBQWVFLE9BQU8sQ0FBQyxXQUFXSDtZQUNwQztZQUVBLE9BQU9BO1FBQ1Q7UUFFQUosVUFBVUc7SUFDWixHQUFHLEVBQUU7SUFFTCxNQUFNSyxvQkFBb0I7UUFDeEIsSUFBSWIsV0FBV2MsSUFBSSxPQUFPLElBQUk7WUFDNUIsTUFBTUMsY0FBYztnQkFBRUMsTUFBTWhCO2dCQUFZaUIsUUFBUTtZQUFPO1lBQ3ZEbEIsWUFBWSxDQUFDbUIsZUFBaUI7dUJBQUlBO29CQUFjSDtpQkFBWTtZQUM1RGQsY0FBYztZQUVkLElBQUk7Z0JBQ0ZNLFdBQVc7Z0JBRVgsTUFBTVksV0FBVyxNQUFNQyxNQUFNLDhEQUE4RDtvQkFDekZDLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dCQUNuQkMsT0FBTzFCO3dCQUNQSSxTQUFTQTtvQkFDWDtnQkFDRjtnQkFFQSxJQUFJZSxTQUFTUSxFQUFFLEVBQUU7b0JBQ2YsTUFBTUMsU0FBUyxNQUFNVCxTQUFTVSxJQUFJO29CQUNsQyxNQUFNQyxrQkFBa0JGLE1BQU0sQ0FBQyxFQUFFLENBQUNaLElBQUk7b0JBQ3RDLE1BQU1lLHFCQUFxQjt3QkFBRWYsTUFBTWM7d0JBQWlCYixRQUFRO29CQUFNO29CQUVsRWxCLFlBQVksQ0FBQ21CLGVBQWlCOytCQUFJQTs0QkFBY2E7eUJBQW1CO29CQUNuRTVCLGVBQWUyQjtnQkFDakIsT0FBTztvQkFDTEUsUUFBUUMsS0FBSyxDQUFDLFVBQVVkLFNBQVNlLFVBQVU7Z0JBQzdDO1lBQ0YsRUFBRSxPQUFPRCxPQUFPO2dCQUNkRCxRQUFRQyxLQUFLLENBQUMsVUFBVUE7WUFDMUIsU0FBVTtnQkFDUjFCLFdBQVc7WUFDYjtRQUNGO0lBQ0Y7SUFFQSxNQUFNNEIsaUJBQWlCLENBQUNDO1FBQ3RCLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxTQUFTO1lBQ3JCeEI7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUN5QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUMvQyxtREFBS0E7Z0NBQ0pnRCxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKRixXQUFVO2dDQUNWRyxPQUFPO2dDQUNQQyxRQUFROzs7Ozs7MENBRVYsOERBQUNMOztrREFDRCw4REFBQ007d0NBQUdMLFdBQVU7a0RBQXFCOzs7Ozs7b0NBRWxDakMseUJBQ0MsOERBQUN1QztrREFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tDQU9QLDhEQUFDUDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUM3QywyR0FBU0E7Z0NBQUM2QyxXQUFVOzs7Ozs7MENBQ3JCLDhEQUFDOUMsMkdBQVNBO2dDQUFDOEMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUl6Qiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1p6QyxTQUFTZ0QsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ1Y7d0JBQ0NDLFdBQVcsZ0NBQXdGLE9BQXhEUSxRQUFROUIsTUFBTSxLQUFLLFNBQVMsY0FBYzs7MENBR3JGLDhEQUFDZ0M7Z0NBQ0NWLFdBQVU7Z0NBQ1ZXLE9BQU87b0NBQ0xDLE9BQU87Z0NBQ1Q7MENBRUNKLFFBQVE5QixNQUFNLEtBQUssU0FBUyxRQUFROzs7Ozs7MENBR3ZDLDhEQUFDZ0M7Z0NBQ0NWLFdBQVU7Z0NBQ1ZXLE9BQU87b0NBQ0xFLFlBQVlMLFFBQVE5QixNQUFNLEtBQUssU0FBUyxZQUFZO29DQUNwRGtDLE9BQU87b0NBQ1BFLGNBQWM7Z0NBQ2hCOzBDQUVDTixRQUFRL0IsSUFBSTs7Ozs7Ozt1QkFuQlZnQzs7Ozs7Ozs7OzswQkF5QlgsOERBQUNWO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2U7d0JBQ0NDLFdBQVdwQjt3QkFDWHFCLE1BQUs7d0JBQ0xDLE9BQU96RDt3QkFDUDBELFVBQVUsQ0FBQ3RCLElBQU1uQyxjQUFjbUMsRUFBRXVCLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDN0NHLGFBQVk7d0JBQ1pyQixXQUFVOzs7Ozs7a0NBRVosOERBQUNzQjt3QkFDQ0MsU0FBU2pEO3dCQUNUMEIsV0FBVyxtQ0FBMkUsT0FBeENqQyxVQUFVLGdCQUFnQjt3QkFDeEV5RCxVQUFVekQ7a0NBRVRBLFVBQVUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0dBOUlNVDtLQUFBQTtBQWdKTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yb29tY2hhdC5qc3g/NTg0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBYTWFya0ljb24sIE1pbnVzSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvc29saWQnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IFJvb21DaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYm90UmVzcG9uc2UsIHNldEJvdFJlc3BvbnNlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcl9pZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVbmlxdWVVc2VySWQgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBzdG9yZWRVc2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2lkJyk7XHJcblxyXG4gICAgICBpZiAoIXN0b3JlZFVzZXJJZCkge1xyXG4gICAgICAgIHN0b3JlZFVzZXJJZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJfaWQnLCBzdG9yZWRVc2VySWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3RvcmVkVXNlcklkO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRVc2VySWQoZ2V0VW5pcXVlVXNlcklkKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAobmV3TWVzc2FnZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJNZXNzYWdlID0geyB0ZXh0OiBuZXdNZXNzYWdlLCBzZW5kZXI6ICd1c2VyJyB9O1xyXG4gICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCB1c2VyTWVzc2FnZV0pO1xyXG4gICAgICBzZXROZXdNZXNzYWdlKCcnKTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9tcm5ldXJhbG5ldC1jaGFpbi1saW5rLWFpLmhmLnNwYWNlL2JvdF9pbnRlcmFjdGlvbicsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IG5ld01lc3NhZ2UsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zdCBib3RSZXNwb25zZVRleHQgPSByZXN1bHRbMF0udGV4dDtcclxuICAgICAgICAgIGNvbnN0IGJvdFJlc3BvbnNlTWVzc2FnZSA9IHsgdGV4dDogYm90UmVzcG9uc2VUZXh0LCBzZW5kZXI6ICdib3QnIH07XHJcblxyXG4gICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgYm90UmVzcG9uc2VNZXNzYWdlXSk7XHJcbiAgICAgICAgICBzZXRCb3RSZXNwb25zZShib3RSZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInKSB7XHJcbiAgICAgIGhhbmRsZVNlbmRNZXNzYWdlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIGgtc2NyZWVuJz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgdGV4dC13aGl0ZSBweC03IHB5LTYgYmctY3lhbi00MDAganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTQnPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9GbG9hdGluZ1JvYm90LmpwZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkNoYXRib3QgTG9nb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs0NX1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0NX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkJz5DaGF0Ym90PC9oMT4gXHJcblxyXG4gICAgICAgICAge2xvYWRpbmcgJiYgKFxyXG4gICAgICAgICAgICA8cD5DaGF0Ym90IGlzIHR5cGluZy4uLjwvcD5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICBcclxuXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTInPlxyXG4gICAgICAgICAgPE1pbnVzSWNvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGgtOCB3LTggZm9udC1ib2xkXCIgLz5cclxuICAgICAgICAgIDxYTWFya0ljb24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBoLTggdy04IGZvbnQtYm9sZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBvdmVyZmxvdy15LWF1dG8gcC01IGJnLXNreS0xMDAgc2hhZG93LWlubmVyJz5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC01IHB5LTUgZmxleCBtYi0xIGZsZXgtY29sICR7bWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICdpdGVtcy1lbmQnIDogJ2l0ZW1zLXN0YXJ0J31gfVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHktMidcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdCbGFjaycsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttZXNzYWdlLnNlbmRlciA9PT0gJ3VzZXInID8gJ1lvdScgOiAnQm90J31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTQgcHktMiB3LWZpdCBtYXgtdy00eGwnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG1lc3NhZ2Uuc2VuZGVyID09PSAndXNlcicgPyAnIzRDQUY1MCcgOiAnIzAwOENCQScsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttZXNzYWdlLnRleHR9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdiZy1ncmF5LTEwMCBwLTQgZmxleCBmbGV4LXJvdyBnYXAtNCBmb2N1cy12aXNpYmxlOmJvcmRlci1jeWFuLTQwMCc+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleVByZXNzfVxyXG4gICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJUeXBlIHlvdXIgbWVzc2FnZS4uLlwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9J3ctZnVsbCBtaW4taC1bNXZoXSBweC00IHRleHQtYmxhY2sgZm9jdXM6b3V0bGluZS1jeWFuLTQwMCdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBweC02IHB5LTIgcm91bmRlZC14bCAke2xvYWRpbmcgPyAnYmctZ3JheS01MDAnIDogJ2JnLWN5YW4tNDAwJ31gfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAnLi4uJyA6ICdTZW5kJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbUNoYXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJYTWFya0ljb24iLCJNaW51c0ljb24iLCJ2NCIsInV1aWR2NCIsIlJvb21DaGF0IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwiYm90UmVzcG9uc2UiLCJzZXRCb3RSZXNwb25zZSIsInVzZXJfaWQiLCJzZXRVc2VySWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldFVuaXF1ZVVzZXJJZCIsInN0b3JlZFVzZXJJZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJoYW5kbGVTZW5kTWVzc2FnZSIsInRyaW0iLCJ1c2VyTWVzc2FnZSIsInRleHQiLCJzZW5kZXIiLCJwcmV2TWVzc2FnZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicXVlcnkiLCJvayIsInJlc3VsdCIsImpzb24iLCJib3RSZXNwb25zZVRleHQiLCJib3RSZXNwb25zZU1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiaGFuZGxlS2V5UHJlc3MiLCJlIiwia2V5IiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsInAiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJzcGFuIiwic3R5bGUiLCJjb2xvciIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJpbnB1dCIsIm9uS2V5RG93biIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/roomchat.jsx\n"));

/***/ })

});