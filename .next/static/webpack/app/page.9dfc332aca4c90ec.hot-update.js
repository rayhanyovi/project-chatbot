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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! uuid */ \"(app-pages-browser)/./node_modules/uuid/dist/esm-browser/v4.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst RoomChat = ()=>{\n    _s();\n    const [messages, setMessages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [newMessage, setNewMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [botResponse, setBotResponse] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [user_id, setUserId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const getUniqueUserId = ()=>{\n            let storedUserId = sessionStorage.getItem(\"user_id\");\n            if (!storedUserId) {\n                storedUserId = (0,uuid__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                sessionStorage.setItem(\"user_id\", storedUserId);\n            }\n            return storedUserId;\n        };\n        setUserId(getUniqueUserId());\n    }, []);\n    const handleSendMessage = async ()=>{\n        console.log(\"Sending payload:\", {\n            query: newMessage,\n            user_id: user_id\n        });\n        if (newMessage.trim() !== \"\") {\n            const userMessage = {\n                text: newMessage,\n                sender: \"user\"\n            };\n            setMessages((prevMessages)=>[\n                    ...prevMessages,\n                    userMessage\n                ]);\n            setNewMessage(\"\");\n            try {\n                setLoading(true);\n                const response = await fetch(\"https://mrneuralnet-chain-link-ai.hf.space/bot_interaction\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        query: newMessage,\n                        user_id: user_id\n                    })\n                });\n                if (response.ok) {\n                    const result = await response.json();\n                    const botResponseText = result[0].text;\n                    const botResponseMessage = {\n                        text: botResponseText,\n                        sender: \"bot\"\n                    };\n                    setMessages((prevMessages)=>[\n                            ...prevMessages,\n                            botResponseMessage\n                        ]);\n                    setBotResponse(botResponseText);\n                } else {\n                    console.error(\"Error:\", response.statusText);\n                }\n            } catch (error) {\n                console.error(\"Error:\", error);\n            } finally{\n                setLoading(false);\n            }\n        }\n    };\n    const handleKeyPress = (e)=>{\n        if (e.key === \"Enter\" && !e.shiftKey) {\n            e.preventDefault(); // Prevent the default behavior (line break)\n            handleSendMessage();\n        }\n    };\n    // Menangani representasi teks dengan line break dalam JSX\n    const renderMessageText = (text)=>{\n        return text.split(\"\\n\").map((line, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                children: [\n                    line,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 83,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, index, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, undefined));\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col h-screen\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-row text-white px-7 py-6 bg-zinc-900 justify-between\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-row items-center gap-4\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                            src: \"/FloatingRobot.jpg\",\n                            alt: \"Chatbot Logo\",\n                            className: \"rounded-full\",\n                            width: 45,\n                            height: 45\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                            lineNumber: 92,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-2xl font-bold\",\n                                    children: \"Chatbot\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                    lineNumber: 100,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"\".concat(loading ? \"opacity-1\" : \"opacity-0\"),\n                                    children: \"Chatbot is typing...\"\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                            lineNumber: 99,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                    lineNumber: 91,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 90,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex-grow overflow-y-auto p-5 bg-zinc-800 shadow-inner\",\n                children: messages.map((message, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"px-5 py-5 flex mb-1 flex-col \".concat(message.sender === \"user\" ? \"items-end\" : \"items-start\"),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"py-2\",\n                                style: {\n                                    color: \"Black\"\n                                },\n                                children: message.sender === \"user\" ? \"You\" : \"Bot\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 112,\n                                columnNumber: 13\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"px-4 py-2 w-fit max-w-4xl break-all\",\n                                style: {\n                                    background: message.sender === \"user\" ? \"#4CAF50\" : \"#008CBA\",\n                                    color: \"white\",\n                                    borderRadius: \"5px\"\n                                },\n                                children: renderMessageText(message.text)\n                            }, void 0, false, {\n                                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                                lineNumber: 121,\n                                columnNumber: 13\n                            }, undefined)\n                        ]\n                    }, index, true, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 108,\n                        columnNumber: 11\n                    }, undefined))\n            }, void 0, false, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 106,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"bg-zinc-800 p-4 flex flex-row gap-4 focus-visible:border-cyan-400\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                        onKeyDown: handleKeyPress,\n                        value: newMessage,\n                        onChange: (e)=>setNewMessage(e.target.value),\n                        placeholder: \"Type your message...\",\n                        className: \"w-full min-h-[5vh] max-h-[20vh] px-4 text-black focus:outline-cyan-400 resize-none\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 136,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: handleSendMessage,\n                        className: \"text-white px-6 py-2 rounded-xl \".concat(loading ? \"bg-gray-500\" : \"bg-cyan-400\"),\n                        disabled: loading,\n                        children: loading ? \"...\" : \"Send\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                        lineNumber: 143,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n                lineNumber: 135,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Portofolio\\\\Project_Chatbot\\\\project-chatbot\\\\src\\\\components\\\\roomchat.jsx\",\n        lineNumber: 89,\n        columnNumber: 5\n    }, undefined);\n};\n_s(RoomChat, \"qx3HU7/0Xi4TYOT5Z3ciMLCB+gw=\");\n_c = RoomChat;\n/* harmony default export */ __webpack_exports__[\"default\"] = (RoomChat);\nvar _c;\n$RefreshReg$(_c, \"RoomChat\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL3Jvb21jaGF0LmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBbUQ7QUFDcEI7QUFDa0M7QUFDN0I7QUFFcEMsTUFBTVEsV0FBVzs7SUFDZixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUMsRUFBRTtJQUMzQyxNQUFNLENBQUNVLFlBQVlDLGNBQWMsR0FBR1gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDWSxhQUFhQyxlQUFlLEdBQUdiLCtDQUFRQSxDQUFDO0lBQy9DLE1BQU0sQ0FBQ2MsU0FBU0MsVUFBVSxHQUFHZiwrQ0FBUUEsQ0FBQztJQUN0QyxNQUFNLENBQUNnQixTQUFTQyxXQUFXLEdBQUdqQiwrQ0FBUUEsQ0FBQztJQUV2Q0MsZ0RBQVNBLENBQUM7UUFDUixNQUFNaUIsa0JBQWtCO1lBQ3RCLElBQUlDLGVBQWVDLGVBQWVDLE9BQU8sQ0FBQztZQUUxQyxJQUFJLENBQUNGLGNBQWM7Z0JBQ2pCQSxlQUFlYixnREFBTUE7Z0JBQ3JCYyxlQUFlRSxPQUFPLENBQUMsV0FBV0g7WUFDcEM7WUFFQSxPQUFPQTtRQUNUO1FBRUFKLFVBQVVHO0lBQ1osR0FBRyxFQUFFO0lBRUwsTUFBTUssb0JBQW9CO1FBQ3hCQyxRQUFRQyxHQUFHLENBQUMsb0JBQW9CO1lBQzlCQyxPQUFPaEI7WUFDUEksU0FBU0E7UUFDWDtRQUVBLElBQUlKLFdBQVdpQixJQUFJLE9BQU8sSUFBSTtZQUM1QixNQUFNQyxjQUFjO2dCQUFFQyxNQUFNbkI7Z0JBQVlvQixRQUFRO1lBQU87WUFDdkRyQixZQUFZLENBQUNzQixlQUFpQjt1QkFBSUE7b0JBQWNIO2lCQUFZO1lBQzVEakIsY0FBYztZQUVkLElBQUk7Z0JBQ0ZNLFdBQVc7Z0JBRVgsTUFBTWUsV0FBVyxNQUFNQyxNQUFNLDhEQUE4RDtvQkFDekZDLFFBQVE7b0JBQ1JDLFNBQVM7d0JBQ1AsZ0JBQWdCO29CQUNsQjtvQkFDQUMsTUFBTUMsS0FBS0MsU0FBUyxDQUFDO3dCQUNuQlosT0FBT2hCO3dCQUNQSSxTQUFTQTtvQkFDWDtnQkFDRjtnQkFFQSxJQUFJa0IsU0FBU08sRUFBRSxFQUFFO29CQUNmLE1BQU1DLFNBQVMsTUFBTVIsU0FBU1MsSUFBSTtvQkFDbEMsTUFBTUMsa0JBQWtCRixNQUFNLENBQUMsRUFBRSxDQUFDWCxJQUFJO29CQUN0QyxNQUFNYyxxQkFBcUI7d0JBQUVkLE1BQU1hO3dCQUFpQlosUUFBUTtvQkFBTTtvQkFFbEVyQixZQUFZLENBQUNzQixlQUFpQjsrQkFBSUE7NEJBQWNZO3lCQUFtQjtvQkFDbkU5QixlQUFlNkI7Z0JBQ2pCLE9BQU87b0JBQ0xsQixRQUFRb0IsS0FBSyxDQUFDLFVBQVVaLFNBQVNhLFVBQVU7Z0JBQzdDO1lBQ0YsRUFBRSxPQUFPRCxPQUFPO2dCQUNkcEIsUUFBUW9CLEtBQUssQ0FBQyxVQUFVQTtZQUMxQixTQUFVO2dCQUNSM0IsV0FBVztZQUNiO1FBQ0Y7SUFDRjtJQUVBLE1BQU02QixpQkFBaUIsQ0FBQ0M7UUFDdEIsSUFBSUEsRUFBRUMsR0FBRyxLQUFLLFdBQVcsQ0FBQ0QsRUFBRUUsUUFBUSxFQUFFO1lBQ3BDRixFQUFFRyxjQUFjLElBQUksNENBQTRDO1lBQ2hFM0I7UUFDRjtJQUNGO0lBRUEsMERBQTBEO0lBQzFELE1BQU00QixvQkFBb0IsQ0FBQ3RCO1FBQ3pCLE9BQU9BLEtBQUt1QixLQUFLLENBQUMsTUFBTUMsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNqQyw4REFBQ3hELHVEQUFjOztvQkFDWnVEO2tDQUNELDhEQUFDRzs7Ozs7O2VBRmtCRjs7Ozs7SUFLekI7SUFFQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNEO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFBSUMsV0FBVTs7c0NBQ2IsOERBQUN6RCxtREFBS0E7NEJBQ0owRCxLQUFJOzRCQUNKQyxLQUFJOzRCQUNKRixXQUFVOzRCQUNWRyxPQUFPOzRCQUNQQyxRQUFROzs7Ozs7c0NBRVYsOERBQUNMOzs4Q0FDQyw4REFBQ007b0NBQUdMLFdBQVU7OENBQXFCOzs7Ozs7OENBQ25DLDhEQUFDTTtvQ0FBRU4sV0FBVyxHQUF1QyxPQUFwQzNDLFVBQVUsY0FBYzs4Q0FBZTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7MEJBSzlELDhEQUFDMEM7Z0JBQUlDLFdBQVU7MEJBQ1puRCxTQUFTNkMsR0FBRyxDQUFDLENBQUNhLFNBQVNYLHNCQUN0Qiw4REFBQ0c7d0JBQ0NDLFdBQVcsZ0NBQXdGLE9BQXhETyxRQUFRcEMsTUFBTSxLQUFLLFNBQVMsY0FBYzs7MENBR3JGLDhEQUFDcUM7Z0NBQ0NSLFdBQVU7Z0NBQ1ZTLE9BQU87b0NBQ0xDLE9BQU87Z0NBQ1Q7MENBRUNILFFBQVFwQyxNQUFNLEtBQUssU0FBUyxRQUFROzs7Ozs7MENBR3ZDLDhEQUFDcUM7Z0NBQ0NSLFdBQVU7Z0NBQ1ZTLE9BQU87b0NBQ0xFLFlBQVlKLFFBQVFwQyxNQUFNLEtBQUssU0FBUyxZQUFZO29DQUNwRHVDLE9BQU87b0NBQ1BFLGNBQWM7Z0NBQ2hCOzBDQUVDcEIsa0JBQWtCZSxRQUFRckMsSUFBSTs7Ozs7Ozt1QkFuQjVCMEI7Ozs7Ozs7Ozs7MEJBeUJYLDhEQUFDRztnQkFBSUMsV0FBVTs7a0NBQ2IsOERBQUNhO3dCQUNDQyxXQUFXM0I7d0JBQ1g0QixPQUFPaEU7d0JBQ1BpRSxVQUFVLENBQUM1QixJQUFNcEMsY0FBY29DLEVBQUU2QixNQUFNLENBQUNGLEtBQUs7d0JBQzdDRyxhQUFZO3dCQUNabEIsV0FBVTs7Ozs7O2tDQUVaLDhEQUFDbUI7d0JBQ0NDLFNBQVN4RDt3QkFDVG9DLFdBQVcsbUNBQTJFLE9BQXhDM0MsVUFBVSxnQkFBZ0I7d0JBQ3hFZ0UsVUFBVWhFO2tDQUVUQSxVQUFVLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUs3QjtHQW5KTVQ7S0FBQUE7QUFxSk4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcm9vbWNoYXQuanN4PzU4NGUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcclxuaW1wb3J0IHsgWE1hcmtJY29uLCBNaW51c0ljb24gfSBmcm9tICdAaGVyb2ljb25zL3JlYWN0LzI0L3NvbGlkJztcclxuaW1wb3J0IHsgdjQgYXMgdXVpZHY0IH0gZnJvbSAndXVpZCc7XHJcblxyXG5jb25zdCBSb29tQ2hhdCA9ICgpID0+IHtcclxuICBjb25zdCBbbWVzc2FnZXMsIHNldE1lc3NhZ2VzXSA9IHVzZVN0YXRlKFtdKTtcclxuICBjb25zdCBbbmV3TWVzc2FnZSwgc2V0TmV3TWVzc2FnZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2JvdFJlc3BvbnNlLCBzZXRCb3RSZXNwb25zZV0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW3VzZXJfaWQsIHNldFVzZXJJZF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0VW5pcXVlVXNlcklkID0gKCkgPT4ge1xyXG4gICAgICBsZXQgc3RvcmVkVXNlcklkID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgndXNlcl9pZCcpO1xyXG5cclxuICAgICAgaWYgKCFzdG9yZWRVc2VySWQpIHtcclxuICAgICAgICBzdG9yZWRVc2VySWQgPSB1dWlkdjQoKTtcclxuICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCd1c2VyX2lkJywgc3RvcmVkVXNlcklkKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHN0b3JlZFVzZXJJZDtcclxuICAgIH07XHJcblxyXG4gICAgc2V0VXNlcklkKGdldFVuaXF1ZVVzZXJJZCgpKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVNlbmRNZXNzYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ1NlbmRpbmcgcGF5bG9hZDonLCB7XHJcbiAgICAgIHF1ZXJ5OiBuZXdNZXNzYWdlLFxyXG4gICAgICB1c2VyX2lkOiB1c2VyX2lkLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKG5ld01lc3NhZ2UudHJpbSgpICE9PSAnJykge1xyXG4gICAgICBjb25zdCB1c2VyTWVzc2FnZSA9IHsgdGV4dDogbmV3TWVzc2FnZSwgc2VuZGVyOiAndXNlcicgfTtcclxuICAgICAgc2V0TWVzc2FnZXMoKHByZXZNZXNzYWdlcykgPT4gWy4uLnByZXZNZXNzYWdlcywgdXNlck1lc3NhZ2VdKTtcclxuICAgICAgc2V0TmV3TWVzc2FnZSgnJyk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vbXJuZXVyYWxuZXQtY2hhaW4tbGluay1haS5oZi5zcGFjZS9ib3RfaW50ZXJhY3Rpb24nLCB7XHJcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBuZXdNZXNzYWdlLFxyXG4gICAgICAgICAgICB1c2VyX2lkOiB1c2VyX2lkLFxyXG4gICAgICAgICAgfSksXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgY29uc3QgYm90UmVzcG9uc2VUZXh0ID0gcmVzdWx0WzBdLnRleHQ7XHJcbiAgICAgICAgICBjb25zdCBib3RSZXNwb25zZU1lc3NhZ2UgPSB7IHRleHQ6IGJvdFJlc3BvbnNlVGV4dCwgc2VuZGVyOiAnYm90JyB9O1xyXG5cclxuICAgICAgICAgIHNldE1lc3NhZ2VzKChwcmV2TWVzc2FnZXMpID0+IFsuLi5wcmV2TWVzc2FnZXMsIGJvdFJlc3BvbnNlTWVzc2FnZV0pO1xyXG4gICAgICAgICAgc2V0Qm90UmVzcG9uc2UoYm90UmVzcG9uc2VUZXh0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3I6JywgcmVzcG9uc2Uuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yOicsIGVycm9yKTtcclxuICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUtleVByZXNzID0gKGUpID0+IHtcclxuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyAmJiAhZS5zaGlmdEtleSkge1xyXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIFByZXZlbnQgdGhlIGRlZmF1bHQgYmVoYXZpb3IgKGxpbmUgYnJlYWspXHJcbiAgICAgIGhhbmRsZVNlbmRNZXNzYWdlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgLy8gTWVuYW5nYW5pIHJlcHJlc2VudGFzaSB0ZWtzIGRlbmdhbiBsaW5lIGJyZWFrIGRhbGFtIEpTWFxyXG4gIGNvbnN0IHJlbmRlck1lc3NhZ2VUZXh0ID0gKHRleHQpID0+IHtcclxuICAgIHJldHVybiB0ZXh0LnNwbGl0KCdcXG4nKS5tYXAoKGxpbmUsIGluZGV4KSA9PiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2luZGV4fT5cclxuICAgICAgICB7bGluZX1cclxuICAgICAgICA8YnIgLz5cclxuICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LWNvbCBoLXNjcmVlbic+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdmbGV4IGZsZXgtcm93IHRleHQtd2hpdGUgcHgtNyBweS02IGJnLXppbmMtOTAwXHQganVzdGlmeS1iZXR3ZWVuJz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIgZ2FwLTQnPlxyXG4gICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgIHNyYz1cIi9GbG9hdGluZ1JvYm90LmpwZ1wiXHJcbiAgICAgICAgICAgIGFsdD1cIkNoYXRib3QgTG9nb1wiXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtZnVsbFwiXHJcbiAgICAgICAgICAgIHdpZHRoPXs0NX1cclxuICAgICAgICAgICAgaGVpZ2h0PXs0NX1cclxuICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LTJ4bCBmb250LWJvbGQnPkNoYXRib3Q8L2gxPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake2xvYWRpbmcgPyAnb3BhY2l0eS0xJyA6ICdvcGFjaXR5LTAnfWB9PkNoYXRib3QgaXMgdHlwaW5nLi4uPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgtZ3JvdyBvdmVyZmxvdy15LWF1dG8gcC01IGJnLXppbmMtODAwXHQgc2hhZG93LWlubmVyJz5cclxuICAgICAgICB7bWVzc2FnZXMubWFwKChtZXNzYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2BweC01IHB5LTUgZmxleCBtYi0xIGZsZXgtY29sICR7bWVzc2FnZS5zZW5kZXIgPT09ICd1c2VyJyA/ICdpdGVtcy1lbmQnIDogJ2l0ZW1zLXN0YXJ0J31gfVxyXG4gICAgICAgICAgICBrZXk9e2luZGV4fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT0ncHktMidcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICdCbGFjaycsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHttZXNzYWdlLnNlbmRlciA9PT0gJ3VzZXInID8gJ1lvdScgOiAnQm90J31cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9J3B4LTQgcHktMiB3LWZpdCBtYXgtdy00eGwgYnJlYWstYWxsJ1xyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBtZXNzYWdlLnNlbmRlciA9PT0gJ3VzZXInID8gJyM0Q0FGNTAnIDogJyMwMDhDQkEnLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICc1cHgnLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7cmVuZGVyTWVzc2FnZVRleHQobWVzc2FnZS50ZXh0KX1cclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J2JnLXppbmMtODAwXHQgcC00IGZsZXggZmxleC1yb3cgZ2FwLTQgZm9jdXMtdmlzaWJsZTpib3JkZXItY3lhbi00MDAnPlxyXG4gICAgICAgIDx0ZXh0YXJlYVxyXG4gICAgICAgICAgb25LZXlEb3duPXtoYW5kbGVLZXlQcmVzc31cclxuICAgICAgICAgIHZhbHVlPXtuZXdNZXNzYWdlfVxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXROZXdNZXNzYWdlKGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgIHBsYWNlaG9sZGVyPSdUeXBlIHlvdXIgbWVzc2FnZS4uLidcclxuICAgICAgICAgIGNsYXNzTmFtZT0ndy1mdWxsIG1pbi1oLVs1dmhdIG1heC1oLVsyMHZoXSBweC00IHRleHQtYmxhY2sgZm9jdXM6b3V0bGluZS1jeWFuLTQwMCByZXNpemUtbm9uZSdcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNlbmRNZXNzYWdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXtgdGV4dC13aGl0ZSBweC02IHB5LTIgcm91bmRlZC14bCAke2xvYWRpbmcgPyAnYmctZ3JheS01MDAnIDogJ2JnLWN5YW4tNDAwJ31gfVxyXG4gICAgICAgICAgZGlzYWJsZWQ9e2xvYWRpbmd9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAge2xvYWRpbmcgPyAnLi4uJyA6ICdTZW5kJ31cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgUm9vbUNoYXQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiSW1hZ2UiLCJYTWFya0ljb24iLCJNaW51c0ljb24iLCJ2NCIsInV1aWR2NCIsIlJvb21DaGF0IiwibWVzc2FnZXMiLCJzZXRNZXNzYWdlcyIsIm5ld01lc3NhZ2UiLCJzZXROZXdNZXNzYWdlIiwiYm90UmVzcG9uc2UiLCJzZXRCb3RSZXNwb25zZSIsInVzZXJfaWQiLCJzZXRVc2VySWQiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsImdldFVuaXF1ZVVzZXJJZCIsInN0b3JlZFVzZXJJZCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJoYW5kbGVTZW5kTWVzc2FnZSIsImNvbnNvbGUiLCJsb2ciLCJxdWVyeSIsInRyaW0iLCJ1c2VyTWVzc2FnZSIsInRleHQiLCJzZW5kZXIiLCJwcmV2TWVzc2FnZXMiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5Iiwib2siLCJyZXN1bHQiLCJqc29uIiwiYm90UmVzcG9uc2VUZXh0IiwiYm90UmVzcG9uc2VNZXNzYWdlIiwiZXJyb3IiLCJzdGF0dXNUZXh0IiwiaGFuZGxlS2V5UHJlc3MiLCJlIiwia2V5Iiwic2hpZnRLZXkiLCJwcmV2ZW50RGVmYXVsdCIsInJlbmRlck1lc3NhZ2VUZXh0Iiwic3BsaXQiLCJtYXAiLCJsaW5lIiwiaW5kZXgiLCJGcmFnbWVudCIsImJyIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJoMSIsInAiLCJtZXNzYWdlIiwic3BhbiIsInN0eWxlIiwiY29sb3IiLCJiYWNrZ3JvdW5kIiwiYm9yZGVyUmFkaXVzIiwidGV4dGFyZWEiLCJvbktleURvd24iLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicGxhY2Vob2xkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/roomchat.jsx\n"));

/***/ })

});