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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MinusIcon,XMarkIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/MinusIcon.js\");\n/* harmony import */ var _barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MinusIcon,XMarkIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst RoomChat = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [botResponse, setBotResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user_id, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUniqueUserId = ()=>{\n            let storedUserId = sessionStorage.getItem(\"user_id\");\n            if (!storedUserId) {\n                storedUserId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                sessionStorage.setItem(\"user_id\", storedUserId);\n            }\n            return storedUserId;\n        };\n        setUserId(getUniqueUserId());\n    }, []);\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() !== \"\") {\n            const userMessage = {\n                text: newMessage,\n                sender: \"user\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    userMessage\n                ]);\n            setNewMessage(\"\");\n            try {\n                setLoading(true);\n                const response = await fetch(\"https://mrneuralnet-chain-link-ai.hf.space/bot_interaction\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        query: newMessage,\n                        user_id: user_id\n                    })\n                });\n                if (response.ok) {\n                    const result = await response.json();\n                    const botResponseText = result[0].text;\n                    const botResponseMessage = {\n                        text: botResponseText,\n                        sender: \"bot\"\n                    };\n                    setMessages((prevMessages)=>[\n                            ...prevMessages,\n                            botResponseMessage\n                        ]);\n                    setBotResponse(botResponseText);\n                } else {\n                    console.error(\"Error:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error:\", error);\n            } finally{\n                setLoading(false);\n            }\n        }\n    };\n    const handleKeyPress = (e)=>{\n        if (e.key === \"Enter\") {\n            handleSendMessage();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row text-white px-7 py-6 bg-cyan-400 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/FloatingRobot.jpg\",\n                                alt: \"Chatbot Logo\",\n                                className: \"rounded-full\",\n                                width: 45,\n                                height: 45\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Chatbot\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 83,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"text-white h-8 w-8 font-bold\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 87,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"text-white h-8 w-8 font-bold\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 88,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-y-auto p-5 bg-sky-100 shadow-inner\",\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-5 py-5 flex mb-1 flex-col \".concat(message.sender === \"user\" ? \"items-end\" : \"items-start\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"py-2\",\n                                style: {\n                                    color: \"Black\"\n                                },\n                                children: message.sender === \"user\" ? \"You\" : \"Bot\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 98,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-4 py-2 w-fit max-w-4xl\",\n                                style: {\n                                    background: message.sender === \"user\" ? \"#4CAF50\" : \"#008CBA\",\n                                    color: \"white\",\n                                    borderRadius: \"5px\"\n                                },\n                                children: message.sender === \"bot\" && loading ? \"...\" : message.text\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 107,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 94,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 92,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-100 p-4 flex flex-row gap-4 focus-visible:border-cyan-400\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onKeyDown: handleKeyPress,\n                        type: \"text\",\n                        value: newMessage,\n                        onChange: (e)=>setNewMessage(e.target.value),\n                        placeholder: \"Type your message...\",\n                        className: \"w-full min-h-[5vh] px-4 text-black focus:outline-cyan-400\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"text-white px-6 py-2 rounded-xl \".concat(loading ? \"bg-gray-500\" : \"bg-cyan-400\"),\n                        disabled: loading,\n                        children: loading ? \"...\" : \"Send\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 130,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n        lineNumber: 73,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RoomChat, \"qx3HU7/0Xi4TYOT5Z3ciMLCB+gw=\");\n_c = RoomChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomChat);\nvar _c;\n$RefreshReg$(_c, \"RoomChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jvb21jaGF0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNwQjtBQUNrQztBQUM3QjtBQUVwQyxNQUFNUSxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYyxTQUFTQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBQ3RDLE1BQU0sQ0FBQ2dCLFNBQVNDLFdBQVcsR0FBR2pCLCtDQUFRQSxDQUFDO0lBRXZDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1pQixrQkFBa0I7WUFDdEIsSUFBSUMsZUFBZUMsZUFBZUMsT0FBTyxDQUFDO1lBRTFDLElBQUksQ0FBQ0YsY0FBYztnQkFDakJBLGVBQWViLGdEQUFNQTtnQkFDckJjLGVBQWVFLE9BQU8sQ0FBQyxXQUFXSDtZQUNwQztZQUVBLE9BQU9BO1FBQ1Q7UUFFQUosVUFBVUc7SUFDWixHQUFHLEVBQUU7SUFFTCxNQUFNSyxvQkFBb0I7UUFDeEIsSUFBSWIsV0FBV2MsSUFBSSxPQUFPLElBQUk7WUFDNUIsTUFBTUMsY0FBYztnQkFBRUMsTUFBTWhCO2dCQUFZaUIsUUFBUTtZQUFPO1lBQ3ZEbEIsWUFBWSxDQUFDbUIsZUFBaUI7dUJBQUlBO29CQUFjSDtpQkFBWTtZQUM1RGQsY0FBYztZQUVkLElBQUk7Z0JBQ0ZNLFdBQVc7Z0JBRVgsTUFBTVksV0FBVyxNQUFNQyxNQUFNLDhEQUE4RDtvQkFDekZDLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dCQUNuQkMsT0FBTzFCO3dCQUNQSSxTQUFTQTtvQkFDWDtnQkFDRjtnQkFFQSxJQUFJZSxTQUFTUSxFQUFFLEVBQUU7b0JBQ2YsTUFBTUMsU0FBUyxNQUFNVCxTQUFTVSxJQUFJO29CQUNsQyxNQUFNQyxrQkFBa0JGLE1BQU0sQ0FBQyxFQUFFLENBQUNaLElBQUk7b0JBQ3RDLE1BQU1lLHFCQUFxQjt3QkFBRWYsTUFBTWM7d0JBQWlCYixRQUFRO29CQUFNO29CQUVsRWxCLFlBQVksQ0FBQ21CLGVBQWlCOytCQUFJQTs0QkFBY2E7eUJBQW1CO29CQUNuRTVCLGVBQWUyQjtnQkFDakIsT0FBTztvQkFDTEUsUUFBUUMsS0FBSyxDQUFDLFVBQVVkLFNBQVNlLFVBQVU7Z0JBQzdDO1lBQ0YsRUFBRSxPQUFPRCxPQUFPO2dCQUNkRCxRQUFRQyxLQUFLLENBQUMsVUFBVUE7WUFDMUIsU0FBVTtnQkFDUjFCLFdBQVc7WUFDYjtRQUNGO0lBQ0Y7SUFFQSxNQUFNNEIsaUJBQWlCLENBQUNDO1FBQ3RCLElBQUlBLEVBQUVDLEdBQUcsS0FBSyxTQUFTO1lBQ3JCeEI7UUFDRjtJQUNGO0lBRUEscUJBQ0UsOERBQUN5QjtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUMvQyxtREFBS0E7Z0NBQ0pnRCxLQUFJO2dDQUNKQyxLQUFJO2dDQUNKRixXQUFVO2dDQUNWRyxPQUFPO2dDQUNQQyxRQUFROzs7Ozs7MENBRVYsOERBQUNDO2dDQUFHTCxXQUFVOzBDQUFxQjs7Ozs7Ozs7Ozs7O2tDQUdyQyw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNiLDhEQUFDN0MsMkdBQVNBO2dDQUFDNkMsV0FBVTs7Ozs7OzBDQUNyQiw4REFBQzlDLDJHQUFTQTtnQ0FBQzhDLFdBQVU7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFJekIsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNaekMsU0FBUytDLEdBQUcsQ0FBQyxDQUFDQyxTQUFTQyxzQkFDdEIsOERBQUNUO3dCQUNDQyxXQUFXLGdDQUF3RixPQUF4RE8sUUFBUTdCLE1BQU0sS0FBSyxTQUFTLGNBQWM7OzBDQUdyRiw4REFBQytCO2dDQUNDVCxXQUFVO2dDQUNWVSxPQUFPO29DQUNMQyxPQUFPO2dDQUNUOzBDQUVDSixRQUFRN0IsTUFBTSxLQUFLLFNBQVMsUUFBUTs7Ozs7OzBDQUd2Qyw4REFBQytCO2dDQUNDVCxXQUFVO2dDQUNWVSxPQUFPO29DQUNMRSxZQUFZTCxRQUFRN0IsTUFBTSxLQUFLLFNBQVMsWUFBWTtvQ0FDcERpQyxPQUFPO29DQUNQRSxjQUFjO2dDQUNoQjswQ0FFQ04sUUFBUTdCLE1BQU0sS0FBSyxTQUFTWCxVQUFVLFFBQVF3QyxRQUFROUIsSUFBSTs7Ozs7Ozt1QkFuQnhEK0I7Ozs7Ozs7Ozs7MEJBeUJYLDhEQUFDVDtnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNjO3dCQUNDQyxXQUFXbkI7d0JBQ1hvQixNQUFLO3dCQUNMQyxPQUFPeEQ7d0JBQ1B5RCxVQUFVLENBQUNyQixJQUFNbkMsY0FBY21DLEVBQUVzQixNQUFNLENBQUNGLEtBQUs7d0JBQzdDRyxhQUFZO3dCQUNacEIsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDcUI7d0JBQ0NDLFNBQVNoRDt3QkFDVDBCLFdBQVcsbUNBQTJFLE9BQXhDakMsVUFBVSxnQkFBZ0I7d0JBQ3hFd0QsVUFBVXhEO2tDQUVUQSxVQUFVLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtHQXRJTVQ7S0FBQUE7QUF3SU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcm9vbWNoYXQuanN4PzU4NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgWE1hcmtJY29uLCBNaW51c0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcblxyXG5jb25zdCBSb29tQ2hhdCA9ICgpID0+IHtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmV3TWVzc2FnZSwgc2V0TmV3TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2JvdFJlc3BvbnNlLCBzZXRCb3RSZXNwb25zZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3VzZXJfaWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VW5pcXVlVXNlcklkID0gKCkgPT4ge1xyXG4gICAgICBsZXQgc3RvcmVkVXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcl9pZCcpO1xyXG5cclxuICAgICAgaWYgKCFzdG9yZWRVc2VySWQpIHtcclxuICAgICAgICBzdG9yZWRVc2VySWQgPSB1dWlkdjQoKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyX2lkJywgc3RvcmVkVXNlcklkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN0b3JlZFVzZXJJZDtcclxuICAgIH07XHJcblxyXG4gICAgc2V0VXNlcklkKGdldFVuaXF1ZVVzZXJJZCgpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKG5ld01lc3NhZ2UudHJpbSgpICE9PSAnJykge1xyXG4gICAgICBjb25zdCB1c2VyTWVzc2FnZSA9IHsgdGV4dDogbmV3TWVzc2FnZSwgc2VuZGVyOiAndXNlcicgfTtcclxuICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgdXNlck1lc3NhZ2VdKTtcclxuICAgICAgc2V0TmV3TWVzc2FnZSgnJyk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbXJuZXVyYWxuZXQtY2hhaW4tbGluay1haS5oZi5zcGFjZS9ib3RfaW50ZXJhY3Rpb24nLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBuZXdNZXNzYWdlLFxyXG4gICAgICAgICAgICB1c2VyX2lkOiB1c2VyX2lkLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgY29uc3QgYm90UmVzcG9uc2VUZXh0ID0gcmVzdWx0WzBdLnRleHQ7XHJcbiAgICAgICAgICBjb25zdCBib3RSZXNwb25zZU1lc3NhZ2UgPSB7IHRleHQ6IGJvdFJlc3BvbnNlVGV4dCwgc2VuZGVyOiAnYm90JyB9O1xyXG5cclxuICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIGJvdFJlc3BvbnNlTWVzc2FnZV0pO1xyXG4gICAgICAgICAgc2V0Qm90UmVzcG9uc2UoYm90UmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBoYW5kbGVTZW5kTWVzc2FnZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBoLXNjcmVlbic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHRleHQtd2hpdGUgcHgtNyBweS02IGJnLWN5YW4tNDAwIGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC00Jz5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvRmxvYXRpbmdSb2JvdC5qcGdcIlxyXG4gICAgICAgICAgICBhbHQ9XCJDaGF0Ym90IExvZ29cIlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGxcIlxyXG4gICAgICAgICAgICB3aWR0aD17NDV9XHJcbiAgICAgICAgICAgIGhlaWdodD17NDV9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC0yeGwgZm9udC1ib2xkJz5DaGF0Ym90PC9oMT5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTInPlxyXG4gICAgICAgICAgPE1pbnVzSWNvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGgtOCB3LTggZm9udC1ib2xkXCIgLz5cclxuICAgICAgICAgIDxYTWFya0ljb24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBoLTggdy04IGZvbnQtYm9sZFwiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBvdmVyZmxvdy15LWF1dG8gcC01IGJnLXNreS0xMDAgc2hhZG93LWlubmVyJz5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC01IHB5LTUgZmxleCBtYi0xIGZsZXgtY29sICR7bWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICdpdGVtcy1lbmQnIDogJ2l0ZW1zLXN0YXJ0J31gfVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHktMidcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdCbGFjaycsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttZXNzYWdlLnNlbmRlciA9PT0gJ3VzZXInID8gJ1lvdScgOiAnQm90J31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTQgcHktMiB3LWZpdCBtYXgtdy00eGwnXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IG1lc3NhZ2Uuc2VuZGVyID09PSAndXNlcicgPyAnIzRDQUY1MCcgOiAnIzAwOENCQScsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttZXNzYWdlLnNlbmRlciA9PT0gJ2JvdCcgJiYgbG9hZGluZyA/ICcuLi4nIDogbWVzc2FnZS50ZXh0fVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctZ3JheS0xMDAgcC00IGZsZXggZmxleC1yb3cgZ2FwLTQgZm9jdXMtdmlzaWJsZTpib3JkZXItY3lhbi00MDAnPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlQcmVzc31cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLi5cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWluLWgtWzV2aF0gcHgtNCB0ZXh0LWJsYWNrIGZvY3VzOm91dGxpbmUtY3lhbi00MDAnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVTZW5kTWVzc2FnZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT17YHRleHQtd2hpdGUgcHgtNiBweS0yIHJvdW5kZWQteGwgJHtsb2FkaW5nID8gJ2JnLWdyYXktNTAwJyA6ICdiZy1jeWFuLTQwMCd9YH1cclxuICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gJy4uLicgOiAnU2VuZCd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb21DaGF0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiWE1hcmtJY29uIiwiTWludXNJY29uIiwidjQiLCJ1dWlkdjQiLCJSb29tQ2hhdCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJuZXdNZXNzYWdlIiwic2V0TmV3TWVzc2FnZSIsImJvdFJlc3BvbnNlIiwic2V0Qm90UmVzcG9uc2UiLCJ1c2VyX2lkIiwic2V0VXNlcklkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRVbmlxdWVVc2VySWQiLCJzdG9yZWRVc2VySWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwidXNlck1lc3NhZ2UiLCJ0ZXh0Iiwic2VuZGVyIiwicHJldk1lc3NhZ2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5Iiwib2siLCJyZXN1bHQiLCJqc29uIiwiYm90UmVzcG9uc2VUZXh0IiwiYm90UmVzcG9uc2VNZXNzYWdlIiwiY29uc29sZSIsImVycm9yIiwic3RhdHVzVGV4dCIsImhhbmRsZUtleVByZXNzIiwiZSIsImtleSIsImRpdiIsImNsYXNzTmFtZSIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwiaDEiLCJtYXAiLCJtZXNzYWdlIiwiaW5kZXgiLCJzcGFuIiwic3R5bGUiLCJjb2xvciIsImJhY2tncm91bmQiLCJib3JkZXJSYWRpdXMiLCJpbnB1dCIsIm9uS2V5RG93biIsInR5cGUiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/roomchat.jsx\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/MinusIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/MinusIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n\nfunction MinusIcon({\n  title,\n  titleId,\n  ...props\n}, svgRef) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", Object.assign({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 24 24\",\n    fill: \"currentColor\",\n    \"aria-hidden\": \"true\",\n    ref: svgRef,\n    \"aria-labelledby\": titleId\n  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", {\n    id: titleId\n  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    fillRule: \"evenodd\",\n    d: \"M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z\",\n    clipRule: \"evenodd\"\n  }));\n}\nconst ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(MinusIcon);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForwardRef);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkL2VzbS9NaW51c0ljb24uanMiLCJtYXBwaW5ncyI6Ijs7QUFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsc0JBQXNCLGdEQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtCQUErQixnREFBbUI7QUFDckQ7QUFDQSxHQUFHLDhCQUE4QixnREFBbUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CLDZDQUFnQjtBQUNuQywrREFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkL2VzbS9NaW51c0ljb24uanM/MTc0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIE1pbnVzSWNvbih7XG4gIHRpdGxlLFxuICB0aXRsZUlkLFxuICAuLi5wcm9wc1xufSwgc3ZnUmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIHJlZjogc3ZnUmVmLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRpdGxlSWRcbiAgfSwgcHJvcHMpLCB0aXRsZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwge1xuICAgIGlkOiB0aXRsZUlkXG4gIH0sIHRpdGxlKSA6IG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGQ6IFwiTTMuNzUgMTJhLjc1Ljc1IDAgMDEuNzUtLjc1aDE1YS43NS43NSAwIDAxMCAxLjVoLTE1YS43NS43NSAwIDAxLS43NS0uNzV6XCIsXG4gICAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0pKTtcbn1cbmNvbnN0IEZvcndhcmRSZWYgPSBSZWFjdC5mb3J3YXJkUmVmKE1pbnVzSWNvbik7XG5leHBvcnQgZGVmYXVsdCBGb3J3YXJkUmVmOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/MinusIcon.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n\nfunction XMarkIcon({\n  title,\n  titleId,\n  ...props\n}, svgRef) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"svg\", Object.assign({\n    xmlns: \"http://www.w3.org/2000/svg\",\n    viewBox: \"0 0 24 24\",\n    fill: \"currentColor\",\n    \"aria-hidden\": \"true\",\n    ref: svgRef,\n    \"aria-labelledby\": titleId\n  }, props), title ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"title\", {\n    id: titleId\n  }, title) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"path\", {\n    fillRule: \"evenodd\",\n    d: \"M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z\",\n    clipRule: \"evenodd\"\n  }));\n}\nconst ForwardRef = react__WEBPACK_IMPORTED_MODULE_0__.forwardRef(XMarkIcon);\n/* harmony default export */ __webpack_exports__[\"default\"] = (ForwardRef);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9AaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkL2VzbS9YTWFya0ljb24uanMiLCJtYXBwaW5ncyI6Ijs7QUFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Qsc0JBQXNCLGdEQUFtQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLCtCQUErQixnREFBbUI7QUFDckQ7QUFDQSxHQUFHLDhCQUE4QixnREFBbUI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsbUJBQW1CLDZDQUFnQjtBQUNuQywrREFBZSxVQUFVIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkL2VzbS9YTWFya0ljb24uanM/YmM5NyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmZ1bmN0aW9uIFhNYXJrSWNvbih7XG4gIHRpdGxlLFxuICB0aXRsZUlkLFxuICAuLi5wcm9wc1xufSwgc3ZnUmVmKSB7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInN2Z1wiLCBPYmplY3QuYXNzaWduKHtcbiAgICB4bWxuczogXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLFxuICAgIHZpZXdCb3g6IFwiMCAwIDI0IDI0XCIsXG4gICAgZmlsbDogXCJjdXJyZW50Q29sb3JcIixcbiAgICBcImFyaWEtaGlkZGVuXCI6IFwidHJ1ZVwiLFxuICAgIHJlZjogc3ZnUmVmLFxuICAgIFwiYXJpYS1sYWJlbGxlZGJ5XCI6IHRpdGxlSWRcbiAgfSwgcHJvcHMpLCB0aXRsZSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGl0bGVcIiwge1xuICAgIGlkOiB0aXRsZUlkXG4gIH0sIHRpdGxlKSA6IG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZmlsbFJ1bGU6IFwiZXZlbm9kZFwiLFxuICAgIGQ6IFwiTTUuNDcgNS40N2EuNzUuNzUgMCAwMTEuMDYgMEwxMiAxMC45NGw1LjQ3LTUuNDdhLjc1Ljc1IDAgMTExLjA2IDEuMDZMMTMuMDYgMTJsNS40NyA1LjQ3YS43NS43NSAwIDExLTEuMDYgMS4wNkwxMiAxMy4wNmwtNS40NyA1LjQ3YS43NS43NSAwIDAxLTEuMDYtMS4wNkwxMC45NCAxMiA1LjQ3IDYuNTNhLjc1Ljc1IDAgMDEwLTEuMDZ6XCIsXG4gICAgY2xpcFJ1bGU6IFwiZXZlbm9kZFwiXG4gIH0pKTtcbn1cbmNvbnN0IEZvcndhcmRSZWYgPSBSZWFjdC5mb3J3YXJkUmVmKFhNYXJrSWNvbik7XG5leHBvcnQgZGVmYXVsdCBGb3J3YXJkUmVmOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\n"));

/***/ })

});