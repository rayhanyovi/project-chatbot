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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst RoomChat = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [botResponse, setBotResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user_id, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUniqueUserId = ()=>{\n            let storedUserId = sessionStorage.getItem(\"user_id\");\n            if (!storedUserId) {\n                storedUserId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                sessionStorage.setItem(\"user_id\", storedUserId);\n            }\n            return storedUserId;\n        };\n        setUserId(getUniqueUserId());\n    }, []);\n    const handleSendMessage = async ()=>{\n        console.log(\"Sending payload:\", {\n            query: newMessage,\n            user_id: user_id\n        });\n        if (newMessage.trim() !== \"\") {\n            const userMessage = {\n                text: newMessage,\n                sender: \"user\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    userMessage\n                ]);\n            setNewMessage(\"\");\n            try {\n                setLoading(true);\n                const response = await fetch(\"https://mrneuralnet-chain-link-ai.hf.space/bot_interaction\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        query: newMessage,\n                        user_id: user_id\n                    })\n                });\n                if (response.ok) {\n                    const result = await response.json();\n                    const botResponseText = result[0].text;\n                    const botResponseMessage = {\n                        text: botResponseText,\n                        sender: \"bot\"\n                    };\n                    setMessages((prevMessages)=>[\n                            ...prevMessages,\n                            botResponseMessage\n                        ]);\n                    setBotResponse(botResponseText);\n                } else {\n                    console.error(\"Error:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error:\", error);\n            } finally{\n                setLoading(false);\n            }\n        }\n    };\n    const handleKeyPress = (e)=>{\n        if (e.key === \"Enter\" && !e.shiftKey) {\n            e.preventDefault(); // Prevent the default behavior (line break)\n            handleSendMessage();\n        }\n    };\n    // Menangani representasi teks dengan line break dalam JSX\n    const renderMessageText = (text, isUser)=>{\n        // Check if the message is from the user or the bot\n        if (isUser) {\n            // For user messages, keep the existing behavior\n            return text.split(\"\\n\").map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                    children: [\n                        line,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                            lineNumber: 86,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                    lineNumber: 84,\n                    columnNumber: 9\n                }, undefined));\n        } else {\n            // For bot messages, remove the first line break\n            const lines = text.split(\"\\n\");\n            if (lines.length > 0 && lines[0] === \"\") {\n                lines.shift();\n            }\n            return lines.map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                    children: [\n                        line,\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, index, true, {\n                    fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                    lineNumber: 97,\n                    columnNumber: 9\n                }, undefined));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row text-white px-2 py-6 bg-zinc-900 justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/bot_img2.jpg\",\n                            alt: \"Chatbot Logo\",\n                            className: \"rounded-full border-none outline-none\",\n                            width: 45,\n                            height: 45\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                            lineNumber: 110,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-2xl font-bold text-gray-300\",\n                                    children: \"Chainlink Chatbot\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"\".concat(loading ? \"opacity-1\" : \"opacity-0\"),\n                                    children: \"Chatbot is typing...\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                    lineNumber: 119,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                            lineNumber: 117,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                    lineNumber: 109,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-y-auto p-5 bg-zinc-800 shadow-inner\",\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-5 py-5 flex mb-1 flex-col \".concat(message.sender === \"user\" ? \"items-end\" : \"items-start\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"py-2\",\n                                style: {\n                                    color: \"white\",\n                                    fontWeight: \"bold\"\n                                },\n                                children: message.sender === \"user\" ? \"You\" : \"Bot\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 130,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-5 py-3 w-fit max-w-4xl break-all  \".concat(message.sender === \"user\" ? \"bg-orange-700 text-gray-100\" : \"bg-zinc-900 text-gray-300\"),\n                                style: {\n                                    borderRadius: \"5px\"\n                                },\n                                children: renderMessageText(message.text)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 140,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 126,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 124,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-zinc-900 p-4 flex flex-row gap-4 focus-visible:border-cyan-400\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        onKeyDown: handleKeyPress,\n                        value: newMessage,\n                        onChange: (e)=>setNewMessage(e.target.value),\n                        placeholder: \"Type your message...\",\n                        className: \"w-full min-h-[5vh] max-h-[20vh] px-4 py-2 text-gray-300 bg-zinc-800 resize-none rounded-xl placeholder:text-gray-300/30 focus-visible:outline outline-offset-0 outline-orange-700/50    \"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 153,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"text-white px-6 py-2 rounded-xl \".concat(loading ? \"bg-gray-500\" : \"bg-orange-700\"),\n                        disabled: loading,\n                        children: loading ? \"...\" : \"Send\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 160,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 152,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RoomChat, \"qx3HU7/0Xi4TYOT5Z3ciMLCB+gw=\");\n_c = RoomChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomChat);\nvar _c;\n$RefreshReg$(_c, \"RoomChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jvb21jaGF0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDcEI7QUFDa0M7QUFDN0I7QUFFcEMsTUFBTVEsV0FBVzs7SUFDZixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2MsU0FBU0MsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN0QyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsa0JBQWtCO1lBQ3RCLElBQUlDLGVBQWVDLGVBQWVDLE9BQU8sQ0FBQztZQUUxQyxJQUFJLENBQUNGLGNBQWM7Z0JBQ2pCQSxlQUFlYixnREFBTUE7Z0JBQ3JCYyxlQUFlRSxPQUFPLENBQUMsV0FBV0g7WUFDcEM7WUFFQSxPQUFPQTtRQUNUO1FBRUFKLFVBQVVHO0lBQ1osR0FBRyxFQUFFO0lBRUwsTUFBTUssb0JBQW9CO1FBQ3hCQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CO1lBQzlCQyxPQUFPaEI7WUFDUEksU0FBU0E7UUFDWDtRQUVBLElBQUlKLFdBQVdpQixJQUFJLE9BQU8sSUFBSTtZQUM1QixNQUFNQyxjQUFjO2dCQUFFQyxNQUFNbkI7Z0JBQVlvQixRQUFRO1lBQU87WUFDdkRyQixZQUFZLENBQUNzQixlQUFpQjt1QkFBSUE7b0JBQWNIO2lCQUFZO1lBQzVEakIsY0FBYztZQUVkLElBQUk7Z0JBQ0ZNLFdBQVc7Z0JBRVgsTUFBTWUsV0FBVyxNQUFNQyxNQUFNLDhEQUE4RDtvQkFDekZDLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMs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Q2hDLElBQU1wQyxjQUFjb0MsRUFBRWlDLE1BQU0sQ0FBQ0YsS0FBSzt3QkFDN0NHLGFBQVk7d0JBQ1psQixXQUFVOzs7Ozs7a0NBRVosOERBQUNtQjt3QkFDQ0MsU0FBUzVEO3dCQUNUd0MsV0FBVyxtQ0FBNkUsT0FBMUMvQyxVQUFVLGdCQUFnQjt3QkFDeEVvRSxVQUFVcEU7a0NBRVRBLFVBQVUsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSzdCO0dBcEtNVDtLQUFBQTtBQXNLTiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9yb29tY2hhdC5qc3g/NTg0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xyXG5pbXBvcnQgeyBYTWFya0ljb24sIE1pbnVzSWNvbiB9IGZyb20gJ0BoZXJvaWNvbnMvcmVhY3QvMjQvc29saWQnO1xyXG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcclxuXHJcbmNvbnN0IFJvb21DaGF0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttZXNzYWdlcywgc2V0TWVzc2FnZXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtuZXdNZXNzYWdlLCBzZXROZXdNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbYm90UmVzcG9uc2UsIHNldEJvdFJlc3BvbnNlXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbdXNlcl9pZCwgc2V0VXNlcklkXSA9IHVzZVN0YXRlKCcnKTtcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCBnZXRVbmlxdWVVc2VySWQgPSAoKSA9PiB7XHJcbiAgICAgIGxldCBzdG9yZWRVc2VySWQgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCd1c2VyX2lkJyk7XHJcblxyXG4gICAgICBpZiAoIXN0b3JlZFVzZXJJZCkge1xyXG4gICAgICAgIHN0b3JlZFVzZXJJZCA9IHV1aWR2NCgpO1xyXG4gICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3VzZXJfaWQnLCBzdG9yZWRVc2VySWQpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gc3RvcmVkVXNlcklkO1xyXG4gICAgfTtcclxuXHJcbiAgICBzZXRVc2VySWQoZ2V0VW5pcXVlVXNlcklkKCkpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2VuZE1lc3NhZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZygnU2VuZGluZyBwYXlsb2FkOicsIHtcclxuICAgICAgcXVlcnk6IG5ld01lc3NhZ2UsXHJcbiAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAobmV3TWVzc2FnZS50cmltKCkgIT09ICcnKSB7XHJcbiAgICAgIGNvbnN0IHVzZXJNZXNzYWdlID0geyB0ZXh0OiBuZXdNZXNzYWdlLCBzZW5kZXI6ICd1c2VyJyB9O1xyXG4gICAgICBzZXRNZXNzYWdlcygocHJldk1lc3NhZ2VzKSA9PiBbLi4ucHJldk1lc3NhZ2VzLCB1c2VyTWVzc2FnZV0pO1xyXG4gICAgICBzZXROZXdNZXNzYWdlKCcnKTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9tcm5ldXJhbG5ldC1jaGFpbi1saW5rLWFpLmhmLnNwYWNlL2JvdF9pbnRlcmFjdGlvbicsIHtcclxuICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IG5ld01lc3NhZ2UsXHJcbiAgICAgICAgICAgIHVzZXJfaWQ6IHVzZXJfaWQsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICBjb25zdCBib3RSZXNwb25zZVRleHQgPSByZXN1bHRbMF0udGV4dDtcclxuICAgICAgICAgIGNvbnN0IGJvdFJlc3BvbnNlTWVzc2FnZSA9IHsgdGV4dDogYm90UmVzcG9uc2VUZXh0LCBzZW5kZXI6ICdib3QnIH07XHJcblxyXG4gICAgICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgYm90UmVzcG9uc2VNZXNzYWdlXSk7XHJcbiAgICAgICAgICBzZXRCb3RSZXNwb25zZShib3RSZXNwb25zZVRleHQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvcjonLCByZXNwb25zZS5zdGF0dXNUZXh0KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgZXJyb3IpO1xyXG4gICAgICB9IGZpbmFsbHkge1xyXG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlS2V5UHJlc3MgPSAoZSkgPT4ge1xyXG4gICAgaWYgKGUua2V5ID09PSAnRW50ZXInICYmICFlLnNoaWZ0S2V5KSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCB0aGUgZGVmYXVsdCBiZWhhdmlvciAobGluZSBicmVhaylcclxuICAgICAgaGFuZGxlU2VuZE1lc3NhZ2UoKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICAvLyBNZW5hbmdhbmkgcmVwcmVzZW50YXNpIHRla3MgZGVuZ2FuIGxpbmUgYnJlYWsgZGFsYW0gSlNYXHJcbiAgY29uc3QgcmVuZGVyTWVzc2FnZVRleHQgPSAodGV4dCwgaXNVc2VyKSA9PiB7XHJcbiAgICAvLyBDaGVjayBpZiB0aGUgbWVzc2FnZSBpcyBmcm9tIHRoZSB1c2VyIG9yIHRoZSBib3RcclxuICAgIGlmIChpc1VzZXIpIHtcclxuICAgICAgLy8gRm9yIHVzZXIgbWVzc2FnZXMsIGtlZXAgdGhlIGV4aXN0aW5nIGJlaGF2aW9yXHJcbiAgICAgIHJldHVybiB0ZXh0LnNwbGl0KCdcXG4nKS5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAge2xpbmV9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICApKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIEZvciBib3QgbWVzc2FnZXMsIHJlbW92ZSB0aGUgZmlyc3QgbGluZSBicmVha1xyXG4gICAgICBjb25zdCBsaW5lcyA9IHRleHQuc3BsaXQoJ1xcbicpO1xyXG4gICAgICBpZiAobGluZXMubGVuZ3RoID4gMCAmJiBsaW5lc1swXSA9PT0gJycpIHtcclxuICAgICAgICBsaW5lcy5zaGlmdCgpO1xyXG4gICAgICB9XHJcbiAgXHJcbiAgICAgIHJldHVybiBsaW5lcy5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAge2xpbmV9XHJcbiAgICAgICAgICA8YnIgLz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICApKTtcclxuICAgIH1cclxuICB9O1xyXG4gIFxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1jb2wgaC1zY3JlZW4nPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyB0ZXh0LXdoaXRlIHB4LTIgcHktNiBiZy16aW5jLTkwMFx0IGp1c3RpZnktYmV0d2Vlbic+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC00Jz5cclxuICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICBzcmM9XCIvYm90X2ltZzIuanBnXCJcclxuICAgICAgICAgICAgYWx0PVwiQ2hhdGJvdCBMb2dvXCJcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1mdWxsIGJvcmRlci1ub25lIG91dGxpbmUtbm9uZVwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs0NX1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0NX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQgdGV4dC1ncmF5LTMwMCc+Q2hhaW5saW5rIENoYXRib3Q8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2xvYWRpbmcgPyAnb3BhY2l0eS0xJyA6ICdvcGFjaXR5LTAnfWB9PkNoYXRib3QgaXMgdHlwaW5nLi4uPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBvdmVyZmxvdy15LWF1dG8gcC01IGJnLXppbmMtODAwXHQgc2hhZG93LWlubmVyJz5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC01IHB5LTUgZmxleCBtYi0xIGZsZXgtY29sICR7bWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICdpdGVtcy1lbmQnIDogJ2l0ZW1zLXN0YXJ0J31gfVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHktMidcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0Oidib2xkJ1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7bWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICdZb3UnIDogJ0JvdCd9XHJcbiAgICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcHgtNSBweS0zIHctZml0IG1heC13LTR4bCBicmVhay1hbGwgICR7bWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICdiZy1vcmFuZ2UtNzAwIHRleHQtZ3JheS0xMDAnIDogJ2JnLXppbmMtOTAwIHRleHQtZ3JheS0zMDAnfWB9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzVweCcsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHtyZW5kZXJNZXNzYWdlVGV4dChtZXNzYWdlLnRleHQpfVxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT0nYmctemluYy05MDBcdCBwLTQgZmxleCBmbGV4LXJvdyBnYXAtNCBmb2N1cy12aXNpYmxlOmJvcmRlci1jeWFuLTQwMCc+XHJcbiAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICBvbktleURvd249e2hhbmRsZUtleVByZXNzfVxyXG4gICAgICAgICAgdmFsdWU9e25ld01lc3NhZ2V9XHJcbiAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHNldE5ld01lc3NhZ2UoZS50YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9J1R5cGUgeW91ciBtZXNzYWdlLi4uJ1xyXG4gICAgICAgICAgY2xhc3NOYW1lPSd3LWZ1bGwgbWluLWgtWzV2aF0gbWF4LWgtWzIwdmhdIHB4LTQgcHktMiB0ZXh0LWdyYXktMzAwIGJnLXppbmMtODAwIHJlc2l6ZS1ub25lIHJvdW5kZWQteGwgcGxhY2Vob2xkZXI6dGV4dC1ncmF5LTMwMC8zMCBmb2N1cy12aXNpYmxlOm91dGxpbmUgb3V0bGluZS1vZmZzZXQtMCBvdXRsaW5lLW9yYW5nZS03MDAvNTAgICAgJ1xyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlU2VuZE1lc3NhZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2B0ZXh0LXdoaXRlIHB4LTYgcHktMiByb3VuZGVkLXhsICR7bG9hZGluZyA/ICdiZy1ncmF5LTUwMCcgOiAnYmctb3JhbmdlLTcwMCd9YH1cclxuICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHtsb2FkaW5nID8gJy4uLicgOiAnU2VuZCd9XHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IFJvb21DaGF0O1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkltYWdlIiwiWE1hcmtJY29uIiwiTWludXNJY29uIiwidjQiLCJ1dWlkdjQiLCJSb29tQ2hhdCIsIm1lc3NhZ2VzIiwic2V0TWVzc2FnZXMiLCJuZXdNZXNzYWdlIiwic2V0TmV3TWVzc2FnZSIsImJvdFJlc3BvbnNlIiwic2V0Qm90UmVzcG9uc2UiLCJ1c2VyX2lkIiwic2V0VXNlcklkIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRVbmlxdWVVc2VySWQiLCJzdG9yZWRVc2VySWQiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwiaGFuZGxlU2VuZE1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwicXVlcnkiLCJ0cmltIiwidXNlck1lc3NhZ2UiLCJ0ZXh0Iiwic2VuZGVyIiwicHJldk1lc3NhZ2VzIiwicmVzcG9uc2UiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIm9rIiwicmVzdWx0IiwianNvbiIsImJvdFJlc3BvbnNlVGV4dCIsImJvdFJlc3BvbnNlTWVzc2FnZSIsImVycm9yIiwic3RhdHVzVGV4dCIsImhhbmRsZUtleVByZXNzIiwiZSIsImtleSIsInNoaWZ0S2V5IiwicHJldmVudERlZmF1bHQiLCJyZW5kZXJNZXNzYWdlVGV4dCIsImlzVXNlciIsInNwbGl0IiwibWFwIiwibGluZSIsImluZGV4IiwiRnJhZ21lbnQiLCJiciIsImxpbmVzIiwibGVuZ3RoIiwic2hpZnQiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJhbHQiLCJ3aWR0aCIsImhlaWdodCIsImgxIiwicCIsIm1lc3NhZ2UiLCJzcGFuIiwic3R5bGUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJib3JkZXJSYWRpdXMiLCJ0ZXh0YXJlYSIsIm9uS2V5RG93biIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJwbGFjZWhvbGRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJkaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/roomchat.jsx\n"));

/***/ })

});