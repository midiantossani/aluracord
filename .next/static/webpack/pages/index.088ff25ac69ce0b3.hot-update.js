"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PaginaInicial; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _skynexui_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @skynexui/components */ \"./node_modules/@skynexui/components/dist/esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../config.json */ \"./config.json\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : (typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]);\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction GlobalStyles() {\n    return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n        id: \"30a5a40f32de958f\",\n        children: \"*{margin:0;\\npadding:0;\\nbox-sizing:border-box;\\nlist-style:none}\\nbody{font-family:'Open Sans', sans-serif}\\nhtml, body, #__next{min-height:100vh;\\ndisplay:-webkit-box;\\ndisplay:-webkit-flex;\\ndisplay:-ms-flexbox;\\ndisplay:flex;\\n-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\\n#__next>*{-webkit-flex:1;\\n-ms-flex:1;\\nflex:1}\"\n    }, void 0, false, void 0, this);\n}\n_c = GlobalStyles;\nfunction Titulo(props) {\n    var Tag = props.tag || 'h1';\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Tag, {\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"97a008ee63dc0c1a\",\n                        [\n                            Tag,\n                            _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[300]\n                        ]\n                    ]\n                ]),\n                /*#__PURE__*/ children: props.children\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"97a008ee63dc0c1a\",\n                dynamic: [\n                    Tag,\n                    _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[300]\n                ],\n                children: \"\".concat(Tag, \".__jsx-style-dynamic-selector{color:\").concat(_config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[300], \";\\nfont-size:24px;\\nfont-weight:600}\")\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true));\n}\n_c1 = Titulo;\nfunction PaginaInicial() {\n    _s();\n    //const username = 'midiantossani';\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_3___default().useState('midiantossani'), 2), username = ref[0], setUsername = ref[1];\n    var roteamento = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    console.log(roteamento);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                lineNumber: 60,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                styleSheet: {\n                    display: 'flex',\n                    alignItems: 'center',\n                    justifyContent: 'center',\n                    backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[800],\n                    backgroundImage: 'url(https://images.unsplash.com/photo-1583119912267-cc97c911e416?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)',\n                    backgroundRepeat: 'no-repeat',\n                    backgroundSize: 'cover',\n                    backgroundBlendMode: 'multiply',\n                    backgroundPosition: 'center'\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                    styleSheet: {\n                        display: 'flex',\n                        alignItems: 'center',\n                        justifyContent: 'space-between',\n                        flexDirection: {\n                            xs: 'column',\n                            sm: 'row'\n                        },\n                        width: '100%',\n                        maxWidth: '700px',\n                        borderRadius: '20px',\n                        padding: '32px',\n                        margin: '16px',\n                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',\n                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[800]\n                    },\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            as: \"form\",\n                            onSubmit: function onSubmit(infosDoEvento) {\n                                infosDoEvento.preventDefault();\n                                console.log('Algu\\xe9m submeteu o form');\n                                roteamento.push('/chat');\n                            //window.location.href = '/chat';\n                            },\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                justifyContent: 'center',\n                                width: {\n                                    xs: '100%',\n                                    sm: '50%'\n                                },\n                                textAlign: 'center',\n                                marginBottom: '32px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Titulo, {\n                                    tag: \"h2\",\n                                    children: \"Boas vindas de volta!\"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                                    lineNumber: 98,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    variant: \"body3\",\n                                    styleSheet: {\n                                        marginBottom: '32px',\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500]\n                                    },\n                                    children: _config_json__WEBPACK_IMPORTED_MODULE_5__.name\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                                    lineNumber: 99,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.TextField, {\n                                    value: username,\n                                    onChange: function onChange(event) {\n                                        console.log('usu\\xe1rio digitou', event.target.value);\n                                        //onde está o valor?\n                                        var valor = event.target.value;\n                                        //Trocar o valor da variável\n                                        //Através do React e avisa quem precisa\n                                        setUsername(valor);\n                                    },\n                                    fullWidth: true,\n                                    textFieldColors: {\n                                        neutral: {\n                                            textColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[\"050\"],\n                                            mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[700],\n                                            mainColorHighlight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[800],\n                                            backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[999]\n                                        }\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                                    lineNumber: 114,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Button, {\n                                    type: \"submit\",\n                                    label: \"Entrar\",\n                                    fullWidth: true,\n                                    buttonColors: {\n                                        contrastColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[100],\n                                        mainColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[700],\n                                        mainColorLight: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[500],\n                                        mainColorStrong: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[800]\n                                    }\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                                    lineNumber: 134,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                            lineNumber: 85,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Box, {\n                            styleSheet: {\n                                display: 'flex',\n                                flexDirection: 'column',\n                                alignItems: 'center',\n                                maxWidth: '200px',\n                                padding: '16px',\n                                backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[999],\n                                border: '1px solid',\n                                borderColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[999],\n                                borderRadius: '10px',\n                                flex: 1,\n                                minHeight: '240px'\n                            },\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Image, {\n                                    styleSheet: {\n                                        borderRadius: '50%',\n                                        marginBottom: '16px'\n                                    },\n                                    src: \"https://github.com/\".concat(username, \".png\")\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                                    lineNumber: 165,\n                                    columnNumber: 15\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_skynexui_components__WEBPACK_IMPORTED_MODULE_2__.Text, {\n                                    variant: \"body4\",\n                                    styleSheet: {\n                                        color: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.neutrals[200],\n                                        backgroundColor: _config_json__WEBPACK_IMPORTED_MODULE_5__.theme.colors.primary[700],\n                                        padding: '3px 10px',\n                                        borderRadius: '1000px'\n                                    },\n                                    children: username\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                                    lineNumber: 172,\n                                    columnNumber: 15\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                            lineNumber: 150,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                    lineNumber: 69,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Daredevil UNIFEI\\\\Documents\\\\estudos\\\\aluracord\\\\pages\\\\index.js\",\n                lineNumber: 61,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true));\n}; //Componente React\n /*function HomePage() {\r\n    return (\r\n    <div>\r\n        \r\n        <GlobalStyles /> \r\n        <titulo tag=\"h2\">Boas vindas de volta!</titulo>\r\n        <h2>Discord - Alura Matrix</h2>\r\n       \r\n    </div>\r\n    )\r\n  }\r\n  \r\n  export default HomePage\r\n  */ \n_s(PaginaInicial, \"AeYWtxYSooJ9d50yrLroib2USx8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c2 = PaginaInicial;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"GlobalStyles\");\n$RefreshReg$(_c1, \"Titulo\");\n$RefreshReg$(_c2, \"PaginaInicial\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7O29HQU9KUCxxREFBRzs0QkFDRndCLFVBQVUsRUFBRSxDQUFDO2dDQUNYQyxPQUFPLEVBQUUsQ0FBTTtnQ0FDZlMsYUFBYSxFQUFFLENBQVE7Z0NBQ3ZCUixVQUFVLEVBQUUsQ0FBUTtnQ0FDcEJZLFFBQVEsRUFBRSxDQUFPO2dDQUNqQkUsT0FBTyxFQUFFLENBQU07Z0NBQ2ZaLGVBQWUsRUFBRXJCLG9FQUFvQztnQ0FDckRnRSxNQUFNLEVBQUUsQ0FBVztnQ0FDbkJDLFdBQVcsRUFBRWpFLG9FQUFvQztnQ0FDakRnQyxZQUFZLEVBQUUsQ0FBTTtnQ0FDcEJrQyxJQUFJLEVBQUUsQ0FBQztnQ0FDUEMsU0FBUyxFQUFFLENBQU87NEJBQ3BCLENBQUM7OzRHQUVBdEUsdURBQUs7b0NBQ0pvQixVQUFVLEVBQUUsQ0FBQzt3Q0FDWGUsWUFBWSxFQUFFLENBQUs7d0NBQ25CVyxZQUFZLEVBQUUsQ0FBTTtvQ0FDdEIsQ0FBQztvQ0FDRHlCLEdBQUcsRUFBRyxDQUFtQixxQkFBVyxNQUFJLENBQWJ4RCxRQUFRLEVBQUMsQ0FBSTs7Ozs7OzRHQUV6Q2pCLHNEQUFJO29DQUNIaUQsT0FBTyxFQUFDLENBQU87b0NBQ2YzQixVQUFVLEVBQUUsQ0FBQzt3Q0FDWDRCLEtBQUssRUFBRTdDLG9FQUFvQzt3Q0FDM0NxQixlQUFlLEVBQUVyQixtRUFBbUM7d0NBQ3BEaUMsT0FBTyxFQUFFLENBQVU7d0NBQ25CRCxZQUFZLEVBQUUsQ0FBUTtvQ0FDeEIsQ0FBQzs4Q0FFQXBCLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRdkIsQ0FBQyxDQUVILENBQWtCO0FBRWxCLENBYUk7R0EzSm9CRjs7UUFHRFg7OztNQUhDVyxhQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBCdXR0b24sIFRleHQsIFRleHRGaWVsZCwgSW1hZ2UgfSBmcm9tICdAc2t5bmV4dWkvY29tcG9uZW50cyc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IGFwcENvbmZpZyBmcm9tICcuLi9jb25maWcuanNvbic7XHJcblxyXG5mdW5jdGlvbiBHbG9iYWxTdHlsZXMoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8c3R5bGUgZ2xvYmFsIGpzeD57YFxyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBib2R5IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyogQXBwIGZpdCBIZWlnaHQgKi8gXHJcbiAgICAgICAgaHRtbCwgYm9keSwgI19fbmV4dCB7XHJcbiAgICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICAjX19uZXh0IHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICNfX25leHQgPiAqIHtcclxuICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIC4vQXBwIGZpdCBIZWlnaHQgKi8gXHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuZnVuY3Rpb24gVGl0dWxvKHByb3BzKSB7XHJcbiAgICBjb25zdCBUYWcgPSBwcm9wcy50YWcgfHwgJ2gxJztcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICA8VGFnPntwcm9wcy5jaGlsZHJlbn08L1RhZz5cclxuICAgICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgJHtUYWd9IHtcclxuICAgICAgICAgICAgY29sb3I6JHthcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbMzAwXX07XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFnaW5hSW5pY2lhbCgpIHtcclxuICAgIC8vY29uc3QgdXNlcm5hbWUgPSAnbWlkaWFudG9zc2FuaSc7XHJcbiAgICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IFJlYWN0LnVzZVN0YXRlKCdtaWRpYW50b3NzYW5pJyk7XHJcbiAgICBjb25zdCByb3RlYW1lbnRvID0gdXNlUm91dGVyKCk7XHJcbiAgICBjb25zb2xlLmxvZyhyb3RlYW1lbnRvKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcbiAgICAgICAgPEJveFxyXG4gICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzgwMF0sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogJ3VybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTU4MzExOTkxMjI2Ny1jYzk3YzkxMWU0MTY/aXhsaWI9cmItMS4yLjEmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OCZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTg3MCZxPTgwKScsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLCBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJywgYmFja2dyb3VuZEJsZW5kTW9kZTogJ211bHRpcGx5JywgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPEJveFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgeHM6ICdjb2x1bW4nLFxyXG4gICAgICAgICAgICAgICAgc206ICdyb3cnLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgd2lkdGg6ICcxMDAlJywgbWF4V2lkdGg6ICc3MDBweCcsXHJcbiAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMjBweCcsIHBhZGRpbmc6ICczMnB4JywgbWFyZ2luOiAnMTZweCcsXHJcbiAgICAgICAgICAgICAgYm94U2hhZG93OiAnMCAycHggMTBweCAwIHJnYigwIDAgMCAvIDIwJSknLFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s4MDBdLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcbiAgICAgICAgICAgIDxCb3hcclxuICAgICAgICAgICAgICBhcz1cImZvcm1cIlxyXG4gICAgICAgICAgICAgIG9uU3VibWl0PXtmdW5jdGlvbiAoaW5mb3NEb0V2ZW50bykge1xyXG4gICAgICAgICAgICAgICAgaW5mb3NEb0V2ZW50by5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FsZ3XDqW0gc3VibWV0ZXUgbyBmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICByb3RlYW1lbnRvLnB1c2goJy9jaGF0JylcclxuICAgICAgICAgICAgICAgIC8vd2luZG93LmxvY2F0aW9uLmhyZWYgPSAnL2NoYXQnO1xyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiB7IHhzOiAnMTAwJScsIHNtOiAnNTAlJyB9LCB0ZXh0QWxpZ246ICdjZW50ZXInLCBtYXJnaW5Cb3R0b206ICczMnB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPFRpdHVsbyB0YWc9XCJoMlwiPkJvYXMgdmluZGFzIGRlIHZvbHRhITwvVGl0dWxvPlxyXG4gICAgICAgICAgICAgIDxUZXh0IHZhcmlhbnQ9XCJib2R5M1wiIHN0eWxlU2hlZXQ9e3sgbWFyZ2luQm90dG9tOiAnMzJweCcsIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLnByaW1hcnlbNTAwXSB9fT5cclxuICAgICAgICAgICAgICAgIHthcHBDb25maWcubmFtZX1cclxuICAgICAgICAgICAgICA8L1RleHQ+XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgey8qPGlucHV0IFxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2Z1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAvL29uZGUgZXN0w6EgbyB2YWxvcj9cclxuICAgICAgICAgICAgICAgICAgY29uc3QgdmFsb3IgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgIC8vVHJvY2FyIG8gdmFsb3IgZGEgdmFyacOhdmVsXHJcbiAgICAgICAgICAgICAgICAgIC8vQXRyYXbDqXMgZG8gUmVhY3QgZSBhdmlzYSBxdWVtIHByZWNpc2FcclxuICAgICAgICAgICAgICAgICAgc2V0VXNlcm5hbWUodmFsb3IpO1xyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPiovfVxyXG4gICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICB2YWx1ZT17dXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd1c3XDoXJpbyBkaWdpdG91JywgZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgLy9vbmRlIGVzdMOhIG8gdmFsb3I/XHJcbiAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbG9yID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAvL1Ryb2NhciBvIHZhbG9yIGRhIHZhcmnDoXZlbFxyXG4gICAgICAgICAgICAgICAgICAvL0F0cmF2w6lzIGRvIFJlYWN0IGUgYXZpc2EgcXVlbSBwcmVjaXNhXHJcbiAgICAgICAgICAgICAgICAgIHNldFVzZXJuYW1lKHZhbG9yKTtcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHRleHRGaWVsZENvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICBuZXV0cmFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWycwNTAnXSxcclxuICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbNzAwXSxcclxuICAgICAgICAgICAgICAgICAgICBtYWluQ29sb3JIaWdobGlnaHQ6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs4MDBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5uZXV0cmFsc1s5OTldLFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHR5cGU9J3N1Ym1pdCdcclxuICAgICAgICAgICAgICAgIGxhYmVsPSdFbnRyYXInXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9ycz17e1xyXG4gICAgICAgICAgICAgICAgICBjb250cmFzdENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzW1wiMTAwXCJdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMucHJpbWFyeVs3MDBdLFxyXG4gICAgICAgICAgICAgICAgICBtYWluQ29sb3JMaWdodDogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzUwMF0sXHJcbiAgICAgICAgICAgICAgICAgIG1haW5Db2xvclN0cm9uZzogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzgwMF0sXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICB7LyogRm9ybXVsw6FyaW8gKi99XHJcbiAgXHJcbiAgXHJcbiAgICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgICAgICA8Qm94XHJcbiAgICAgICAgICAgICAgc3R5bGVTaGVldD17e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIG1heFdpZHRoOiAnMjAwcHgnLFxyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzk5OV0sXHJcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcxcHggc29saWQnLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IGFwcENvbmZpZy50aGVtZS5jb2xvcnMubmV1dHJhbHNbOTk5XSxcclxuICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwcHgnLFxyXG4gICAgICAgICAgICAgICAgZmxleDogMSxcclxuICAgICAgICAgICAgICAgIG1pbkhlaWdodDogJzI0MHB4JyxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzUwJScsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogJzE2cHgnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIHNyYz17YGh0dHBzOi8vZ2l0aHViLmNvbS8ke3VzZXJuYW1lfS5wbmdgfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJib2R5NFwiXHJcbiAgICAgICAgICAgICAgICBzdHlsZVNoZWV0PXt7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBhcHBDb25maWcudGhlbWUuY29sb3JzLm5ldXRyYWxzWzIwMF0sXHJcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogYXBwQ29uZmlnLnRoZW1lLmNvbG9ycy5wcmltYXJ5WzcwMF0sXHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICczcHggMTBweCcsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzEwMDBweCdcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3VzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvVGV4dD5cclxuICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIHsvKiBQaG90byBBcmVhICovfVxyXG4gICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgPC9Cb3g+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4vL0NvbXBvbmVudGUgUmVhY3RcclxuXHJcbi8qZnVuY3Rpb24gSG9tZVBhZ2UoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgICBcclxuICAgICAgICA8R2xvYmFsU3R5bGVzIC8+IFxyXG4gICAgICAgIDx0aXR1bG8gdGFnPVwiaDJcIj5Cb2FzIHZpbmRhcyBkZSB2b2x0YSE8L3RpdHVsbz5cclxuICAgICAgICA8aDI+RGlzY29yZCAtIEFsdXJhIE1hdHJpeDwvaDI+XHJcbiAgICAgICBcclxuICAgIDwvZGl2PlxyXG4gICAgKVxyXG4gIH1cclxuICBcclxuICBleHBvcnQgZGVmYXVsdCBIb21lUGFnZVxyXG4gICovIl0sIm5hbWVzIjpbIkJveCIsIkJ1dHRvbiIsIlRleHQiLCJUZXh0RmllbGQiLCJJbWFnZSIsIlJlYWN0IiwidXNlUm91dGVyIiwiYXBwQ29uZmlnIiwiR2xvYmFsU3R5bGVzIiwiVGl0dWxvIiwicHJvcHMiLCJUYWciLCJ0YWciLCJ0aGVtZSIsImNvbG9ycyIsInByaW1hcnkiLCJjaGlsZHJlbiIsIlBhZ2luYUluaWNpYWwiLCJ1c2VTdGF0ZSIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJyb3RlYW1lbnRvIiwiY29uc29sZSIsImxvZyIsInN0eWxlU2hlZXQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZEltYWdlIiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZEJsZW5kTW9kZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImZsZXhEaXJlY3Rpb24iLCJ4cyIsInNtIiwid2lkdGgiLCJtYXhXaWR0aCIsImJvcmRlclJhZGl1cyIsInBhZGRpbmciLCJtYXJnaW4iLCJib3hTaGFkb3ciLCJuZXV0cmFscyIsImFzIiwib25TdWJtaXQiLCJpbmZvc0RvRXZlbnRvIiwicHJldmVudERlZmF1bHQiLCJwdXNoIiwidGV4dEFsaWduIiwibWFyZ2luQm90dG9tIiwidmFyaWFudCIsImNvbG9yIiwibmFtZSIsInZhbHVlIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsInZhbG9yIiwiZnVsbFdpZHRoIiwidGV4dEZpZWxkQ29sb3JzIiwibmV1dHJhbCIsInRleHRDb2xvciIsIm1haW5Db2xvciIsIm1haW5Db2xvckhpZ2hsaWdodCIsInR5cGUiLCJsYWJlbCIsImJ1dHRvbkNvbG9ycyIsImNvbnRyYXN0Q29sb3IiLCJtYWluQ29sb3JMaWdodCIsIm1haW5Db2xvclN0cm9uZyIsImJvcmRlciIsImJvcmRlckNvbG9yIiwiZmxleCIsIm1pbkhlaWdodCIsInNyYyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

});