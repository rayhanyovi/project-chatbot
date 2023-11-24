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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=MinusIcon,XMarkIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/MinusIcon.js\");\n/* harmony import */ var _barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! __barrel_optimize__?names=MinusIcon,XMarkIcon!=!@heroicons/react/24/solid */ \"(app-pages-browser)/./node_modules/@heroicons/react/24/solid/esm/XMarkIcon.js\");\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst RoomChat = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [botResponse, setBotResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user_id, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUniqueUserId = ()=>{\n            let storedUserId = sessionStorage.getItem(\"user_id\");\n            if (!storedUserId) {\n                storedUserId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                sessionStorage.setItem(\"user_id\", storedUserId);\n            }\n            return storedUserId;\n        };\n        setUserId(getUniqueUserId());\n    }, []);\n    const handleSendMessage = async ()=>{\n        if (newMessage.trim() !== \"\") {\n            try {\n                const response = await fetch(\"https://mrneuralnet-chain-link-ai.hf.space/bot_interaction\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        query: newMessage,\n                        user_id: user_id\n                    })\n                });\n                if (response.ok) {\n                    const result = await response.json();\n                    const botResponseText = result[0].text;\n                    setMessages([\n                        ...messages,\n                        {\n                            text: newMessage,\n                            sender: \"user\"\n                        },\n                        {\n                            text: botResponseText,\n                            sender: \"bot\"\n                        }\n                    ]);\n                    setBotResponse(botResponseText);\n                    setNewMessage(\"\");\n                } else {\n                    console.error(\"Error:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error:\", error);\n            }\n        }\n    };\n    const handleKeyPress = (e)=>{\n        // Mengecek apakah tombol yang ditekan adalah \"Enter\"\n        if (e.key === \"Enter\") {\n            handleSendMessage(); // Jalankan handleSendMessage jika \"Enter\" ditekan\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"rounded-lg border-solid border-2 w-screen h-screen m-0 p-0  h-[100%] \",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row text-white px-7 py-6 bg-cyan-400 justify-between\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row items-center gap-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"/FloatingRobot.jpg\",\n                                alt: \"Chatbot Logo\",\n                                className: \"rounded-full\",\n                                width: 45,\n                                height: 45\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 73,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-2xl font-bold\",\n                                children: \"Chatbot\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 80,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 72,\n                        columnNumber: 13\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"flex flex-row gap-2\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                className: \"text-white h-8 w-8 font-bold\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 84,\n                                columnNumber: 12\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_MinusIcon_XMarkIcon_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                className: \"text-white h-8 w-8 font-bold\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 85,\n                                columnNumber: 12\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 13\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 71,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-sky-100 h-full overflow-y-auto p-5 h-[80vh]  shadow-inner\",\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-5 py-5 flex mb-1 flex-col \".concat(message.sender === \"user\" ? \"items-end\" : \"items-start\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \" py-2 \",\n                                style: {\n                                    color: \"Black\"\n                                },\n                                children: message.sender === \"user\" ? \"You\" : \"Bot\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 97,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-4 py-2 w-fit\",\n                                style: {\n                                    background: message.sender === \"user\" ? \"#4CAF50\" : \"#008CBA\",\n                                    color: \"white\",\n                                    borderRadius: \"5px\"\n                                },\n                                children: message.text\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 106,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 92,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-gray-100 p-4 flex flex-row gap-4 focus-visible:border-cyan-400\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        onKeyDown: handleKeyPress,\n                        type: \"text\",\n                        value: newMessage,\n                        onChange: (e)=>setNewMessage(e.target.value),\n                        placeholder: \"Type your message...\",\n                        className: \"w-full min-h-[5vh] px-4 text-black focus:outline-cyan-400\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 122,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"text-white bg-cyan-400 px-6 py-2 rounded-xl\",\n                        children: \"Send\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 131,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 121,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RoomChat, \"8raD47dAwGSK4PIIt6vvIEGRMjI=\");\n_c = RoomChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomChat);\nvar _c;\n$RefreshReg$(_c, \"RoomChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jvb21jaGF0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFtRDtBQUNyQjtBQUNtQztBQUM3QjtBQUVwQyxNQUFNUSxXQUFXOztJQUNmLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHVCwrQ0FBUUEsQ0FBQyxFQUFFO0lBQzNDLE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztJQUM3QyxNQUFNLENBQUNZLGFBQWFDLGVBQWUsR0FBR2IsK0NBQVFBLENBQUM7SUFDL0MsTUFBTSxDQUFDYyxTQUFTQyxVQUFVLEdBQUdmLCtDQUFRQSxDQUFDO0lBRXRDQyxnREFBU0EsQ0FBQztRQUNSLE1BQU1lLGtCQUFrQjtZQUN0QixJQUFJQyxlQUFlQyxlQUFlQyxPQUFPLENBQUM7WUFFMUMsSUFBSSxDQUFDRixjQUFjO2dCQUNqQkEsZUFBZVgsZ0RBQU1BO2dCQUNyQlksZUFBZUUsT0FBTyxDQUFDLFdBQVdIO1lBQ3BDO1lBRUEsT0FBT0E7UUFDVDtRQUVBRixVQUFVQztJQUNaLEdBQUcsRUFBRTtJQUdMLE1BQU1LLG9CQUFvQjtRQUN4QixJQUFJWCxXQUFXWSxJQUFJLE9BQU8sSUFBSTtZQUk1QixJQUFJO2dCQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFBTSw4REFBOEQ7b0JBQ3pGQyxRQUFRO29CQUNSQyxTQUFTO3dCQUNQLGdCQUFnQjtvQkFDbEI7b0JBQ0FDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQzt3QkFDbkJDLE9BQU9wQjt3QkFDUEksU0FBU0E7b0JBQ1g7Z0JBQ0Y7Z0JBRUEsSUFBSVMsU0FBU1EsRUFBRSxFQUFFO29CQUNmLE1BQU1DLFNBQVMsTUFBTVQsU0FBU1UsSUFBSTtvQkFDbEMsTUFBTUMsa0JBQWtCRixNQUFNLENBQUMsRUFBRSxDQUFDRyxJQUFJO29CQUV0QzFCLFlBQVk7MkJBQUlEO3dCQUFVOzRCQUFFMkIsTUFBTXpCOzRCQUFZMEIsUUFBUTt3QkFBTzt3QkFBRzs0QkFBRUQsTUFBTUQ7NEJBQWlCRSxRQUFRO3dCQUFNO3FCQUFFO29CQUN6R3ZCLGVBQWVxQjtvQkFDZnZCLGNBQWM7Z0JBQ2hCLE9BQU87b0JBQ0wwQixRQUFRQyxLQUFLLENBQUMsVUFBVWYsU0FBU2dCLFVBQVU7Z0JBQzdDO1lBQ0YsRUFBRSxPQUFPRCxPQUFPO2dCQUNkRCxRQUFRQyxLQUFLLENBQUMsVUFBVUE7WUFDMUI7UUFDRjtJQUNGO0lBRUEsTUFBTUUsaUJBQWlCLENBQUNDO1FBQ3RCLHFEQUFxRDtRQUNyRCxJQUFJQSxFQUFFQyxHQUFHLEtBQUssU0FBUztZQUNyQnJCLHFCQUFxQixrREFBa0Q7UUFDekU7SUFDRjtJQUdBLHFCQUNFLDhEQUFDc0I7UUFBSUMsV0FBVTs7MEJBQ1gsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDWCw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUNmLDhEQUFDMUMsbURBQUtBO2dDQUNKMkMsS0FBSTtnQ0FDSkMsS0FBSTtnQ0FDSkYsV0FBVTtnQ0FDVkcsT0FBTztnQ0FDUEMsUUFBUTs7Ozs7OzBDQUVWLDhEQUFDQztnQ0FBR0wsV0FBVTswQ0FBcUI7Ozs7Ozs7Ozs7OztrQ0FHbkMsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FDaEIsOERBQUN4QywyR0FBU0E7Z0NBQUN3QyxXQUFVOzs7Ozs7MENBQ3JCLDhEQUFDekMsMkdBQVNBO2dDQUFDeUMsV0FBVTs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUsxQiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ1pwQyxTQUFTMEMsR0FBRyxDQUFDLENBQUNDLFNBQVNDLHNCQUN0Qiw4REFBQ1Q7d0JBQ0RDLFdBQVcsZ0NBQXdGLE9BQXhETyxRQUFRZixNQUFNLEtBQUssU0FBUyxjQUFjOzswQ0FJbkYsOERBQUNpQjtnQ0FDRFQsV0FBVTtnQ0FDUlUsT0FBTztvQ0FDTEMsT0FBTztnQ0FDVDswQ0FFRUosUUFBUWYsTUFBTSxLQUFLLFNBQVMsUUFBUTs7Ozs7OzBDQUd4Qyw4REFBQ2lCO2dDQUNEVCxXQUFVO2dDQUNSVSxPQUFPO29DQUNMRSxZQUFZTCxRQUFRZixNQUFNLEtBQUssU0FBUyxZQUFZO29DQUNwRG1CLE9BQU87b0NBRVBFLGNBQWM7Z0NBQ2hCOzBDQUVDTixRQUFRaEIsSUFBSTs7Ozs7Ozt1QkFyQlZpQjs7Ozs7Ozs7OzswQkEyQlgsOERBQUNUO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ2M7d0JBRUNDLFdBQVduQjt3QkFDWG9CLE1BQUs7d0JBQ0xDLE9BQU9uRDt3QkFDUG9ELFVBQVUsQ0FBQ3JCLElBQU05QixjQUFjOEIsRUFBRXNCLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDN0NHLGFBQVk7d0JBQ1pwQixXQUFVOzs7Ozs7a0NBRVosOERBQUNxQjt3QkFBT0MsU0FBUzdDO3dCQUFtQnVCLFdBQVU7a0NBQStDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNckc7R0FuSU1yQztLQUFBQTtBQXFJTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yb29tY2hhdC5qc3g/NTg0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnXHJcbmltcG9ydCB7IFhNYXJrSWNvbiwgTWludXNJY29uICB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvc29saWQnXHJcbmltcG9ydCB7IHY0IGFzIHV1aWR2NCB9IGZyb20gJ3V1aWQnO1xyXG5cclxuY29uc3QgUm9vbUNoYXQgPSAoKSA9PiB7XHJcbiAgY29uc3QgW21lc3NhZ2VzLCBzZXRNZXNzYWdlc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgY29uc3QgW25ld01lc3NhZ2UsIHNldE5ld01lc3NhZ2VdID0gdXNlU3RhdGUoJycpO1xyXG4gIGNvbnN0IFtib3RSZXNwb25zZSwgc2V0Qm90UmVzcG9uc2VdID0gdXNlU3RhdGUoJycpOyBcclxuICBjb25zdCBbdXNlcl9pZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGdldFVuaXF1ZVVzZXJJZCA9ICgpID0+IHtcclxuICAgICAgbGV0IHN0b3JlZFVzZXJJZCA9IHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ3VzZXJfaWQnKTtcclxuXHJcbiAgICAgIGlmICghc3RvcmVkVXNlcklkKSB7XHJcbiAgICAgICAgc3RvcmVkVXNlcklkID0gdXVpZHY0KCk7XHJcbiAgICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSgndXNlcl9pZCcsIHN0b3JlZFVzZXJJZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBzdG9yZWRVc2VySWQ7XHJcbiAgICB9O1xyXG5cclxuICAgIHNldFVzZXJJZChnZXRVbmlxdWVVc2VySWQoKSk7XHJcbiAgfSwgW10pOyBcclxuICBcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAobmV3TWVzc2FnZS50cmltKCkgIT09ICcnKSB7XHJcblxyXG4gICAgXHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbXJuZXVyYWxuZXQtY2hhaW4tbGluay1haS5oZi5zcGFjZS9ib3RfaW50ZXJhY3Rpb24nLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBuZXdNZXNzYWdlLFxyXG4gICAgICAgICAgICB1c2VyX2lkOiB1c2VyX2lkLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcbiAgXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zdCBib3RSZXNwb25zZVRleHQgPSByZXN1bHRbMF0udGV4dDtcclxuICBcclxuICAgICAgICAgIHNldE1lc3NhZ2VzKFsuLi5tZXNzYWdlcywgeyB0ZXh0OiBuZXdNZXNzYWdlLCBzZW5kZXI6ICd1c2VyJyB9LCB7IHRleHQ6IGJvdFJlc3BvbnNlVGV4dCwgc2VuZGVyOiAnYm90JyB9XSk7XHJcbiAgICAgICAgICBzZXRCb3RSZXNwb25zZShib3RSZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgc2V0TmV3TWVzc2FnZSgnJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIHJlc3BvbnNlLnN0YXR1c1RleHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGUpID0+IHtcclxuICAgIC8vIE1lbmdlY2VrIGFwYWthaCB0b21ib2wgeWFuZyBkaXRla2FuIGFkYWxhaCBcIkVudGVyXCJcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICBoYW5kbGVTZW5kTWVzc2FnZSgpOyAvLyBKYWxhbmthbiBoYW5kbGVTZW5kTWVzc2FnZSBqaWthIFwiRW50ZXJcIiBkaXRla2FuXHJcbiAgICB9XHJcbiAgfTtcclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0ncm91bmRlZC1sZyBib3JkZXItc29saWQgYm9yZGVyLTIgdy1zY3JlZW4gaC1zY3JlZW4gbS0wIHAtMCAgaC1bMTAwJV0gJyA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgdGV4dC13aGl0ZSBweC03IHB5LTYgYmctY3lhbi00MDAganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC00Jz5cclxuICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgc3JjPVwiL0Zsb2F0aW5nUm9ib3QuanBnXCJcclxuICAgICAgICAgICAgICBhbHQ9XCJDaGF0Ym90IExvZ29cIlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgICAgd2lkdGg9ezQ1fVxyXG4gICAgICAgICAgICAgIGhlaWdodD17NDV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtMnhsIGZvbnQtYm9sZCc+Q2hhdGJvdDwvaDE+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgZ2FwLTInPlxyXG4gICAgICAgICAgIDxNaW51c0ljb24gY2xhc3NOYW1lPVwidGV4dC13aGl0ZSBoLTggdy04IGZvbnQtYm9sZFwiIC8+XHJcbiAgICAgICAgICAgPFhNYXJrSWNvbiBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIGgtOCB3LTggZm9udC1ib2xkXCIgLz5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXNreS0xMDAgaC1mdWxsIG92ZXJmbG93LXktYXV0byBwLTUgaC1bODB2aF0gIHNoYWRvdy1pbm5lcicgPlxyXG4gICAgICAgIHttZXNzYWdlcy5tYXAoKG1lc3NhZ2UsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2BweC01IHB5LTUgZmxleCBtYi0xIGZsZXgtY29sICR7bWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICdpdGVtcy1lbmQnIDogJ2l0ZW1zLXN0YXJ0J31gfVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9JyBweS0yICdcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdCbGFjaycsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICB7bWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICdZb3UnIDogJ0JvdCd9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT0ncHgtNCBweS0yIHctZml0J1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBtZXNzYWdlLnNlbmRlciA9PT0gJ3VzZXInID8gJyM0Q0FGNTAnIDogJyMwMDhDQkEnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnNXB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAge21lc3NhZ2UudGV4dH1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcblxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLWdyYXktMTAwIHAtNCBmbGV4IGZsZXgtcm93IGdhcC00IGZvY3VzLXZpc2libGU6Ym9yZGVyLWN5YW4tNDAwJyA+XHJcbiAgICAgICAgPGlucHV0XHJcblxyXG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlQcmVzc31cclxuICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVHlwZSB5b3VyIG1lc3NhZ2UuLi5cIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWluLWgtWzV2aF0gcHgtNCB0ZXh0LWJsYWNrIGZvY3VzOm91dGxpbmUtY3lhbi00MDAnXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfSBjbGFzc05hbWU9J3RleHQtd2hpdGUgYmctY3lhbi00MDAgcHgtNiBweS0yIHJvdW5kZWQteGwnID5cclxuICAgICAgICAgIFNlbmRcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbUNoYXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJYTWFya0ljb24iLCJNaW51c0ljb24iLCJ2NCIsInV1aWR2NCIsIlJvb21DaGF0IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwiYm90UmVzcG9uc2UiLCJzZXRCb3RSZXNwb25zZSIsInVzZXJfaWQiLCJzZXRVc2VySWQiLCJnZXRVbmlxdWVVc2VySWQiLCJzdG9yZWRVc2VySWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJ0cmltIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInF1ZXJ5Iiwib2siLCJyZXN1bHQiLCJqc29uIiwiYm90UmVzcG9uc2VUZXh0IiwidGV4dCIsInNlbmRlciIsImNvbnNvbGUiLCJlcnJvciIsInN0YXR1c1RleHQiLCJoYW5kbGVLZXlQcmVzcyIsImUiLCJrZXkiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwibWFwIiwibWVzc2FnZSIsImluZGV4Iiwic3BhbiIsInN0eWxlIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwiaW5wdXQiLCJvbktleURvd24iLCJ0eXBlIiwidmFsdWUiLCJvbkNoYW5nZSIsInRhcmdldCIsInBsYWNlaG9sZGVyIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/roomchat.jsx\n"));

/***/ })

});