(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(["exports", "react"], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require("react"));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.optionBuilder = mod.exports;
    }
})(this, function (exports, _react) {
    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
    }

    function _toConsumableArray(arr) {
        if (Array.isArray(arr)) {
            for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
                arr2[i] = arr[i];
            }

            return arr2;
        } else {
            return Array.from(arr);
        }
    }

    var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];

            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }

        return obj;
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor) descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
            }
        }

        return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);
            if (staticProps) defineProperties(Constructor, staticProps);
            return Constructor;
        };
    }();

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var OptionBuilder = function (_Component) {
        _inherits(OptionBuilder, _Component);

        //initial state
        function OptionBuilder(props) {
            _classCallCheck(this, OptionBuilder);

            var _this = _possibleConstructorReturn(this, (OptionBuilder.__proto__ || Object.getPrototypeOf(OptionBuilder)).call(this));

            _this.counter = 2;

            _this.getCounter = function () {
                return _this.counter++;
            };

            _this.state = {
                resultOption: props.jsonData[props.formJson.name] || [{ pos: 1, label: "", value: "" }]
            };
            props.jsonCollector(_defineProperty({}, props.formJson.name, _this.state.resultOption));
            return _this;
        }

        _createClass(OptionBuilder, [{
            key: "render",
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    "div",
                    { className: "field-input" },
                    _react2.default.createElement(
                        "label",
                        { className: "mainLabel" },
                        _react2.default.createElement(
                            "span",
                            { "data-tip": this.props.formJson.description },
                            this.props.formJson.label,
                            this.props.formJson.required ? _react2.default.createElement(
                                "span",
                                { className: "requiredStar" },
                                "*"
                            ) : ""
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "optionFields" },
                            _react2.default.createElement(
                                "ul",
                                null,
                                this.state.resultOption.map(function (item, index) {
                                    return _react2.default.createElement(
                                        "li",
                                        { key: item.pos },
                                        _react2.default.createElement(
                                            "span",
                                            { className: "index" },
                                            index + 1,
                                            "."
                                        ),
                                        _react2.default.createElement("input", { type: "text", className: "form-control", placeholder: "Label", value: item.label || "", onChange: function onChange(e) {
                                                _this2.setState(_extends({}, _this2.state, {
                                                    resultOption: [].concat(_toConsumableArray(_this2.state.resultOption.map(function (elem) {
                                                        if (elem.pos == item.pos) elem.label = e.target.value;
                                                        return elem;
                                                    })))
                                                }), function () {
                                                    _this2.props.jsonCollector(_defineProperty({}, _this2.props.formJson.name, _this2.state.resultOption));
                                                });
                                            } }),
                                        _react2.default.createElement("input", { type: "text", className: "form-control", placeholder: "Value", value: item.value || "", onChange: function onChange(e) {
                                                _this2.setState(_extends({}, _this2.state, {
                                                    resultOption: [].concat(_toConsumableArray(_this2.state.resultOption.map(function (elem) {
                                                        if (elem.pos == item.pos) elem.value = e.target.value;
                                                        return elem;
                                                    })))
                                                }), function () {
                                                    _this2.props.jsonCollector(_defineProperty({}, _this2.props.formJson.name, _this2.state.resultOption));
                                                });
                                            } }),
                                        item.pos == 1 ? "" : _react2.default.createElement(
                                            "button",
                                            {
                                                className: "btn btn-secondary btn-remove-option",
                                                title: "Remove option",
                                                onClick: function onClick() {
                                                    _this2.setState(_extends({}, _this2.state, {
                                                        resultOption: [].concat(_toConsumableArray(_this2.state.resultOption.filter(function (elem) {
                                                            if (elem.pos == item.pos) return false;
                                                            return true;
                                                        })))
                                                    }));
                                                }
                                            },
                                            _react2.default.createElement(
                                                "i",
                                                { className: "material-icons" },
                                                "cancel"
                                            )
                                        )
                                    );
                                })
                            ),
                            _react2.default.createElement(
                                "button",
                                { className: "btn btn-secondary", onClick: function onClick() {
                                        _this2.setState(_extends({}, _this2.state, {
                                            resultOption: [].concat(_toConsumableArray(_this2.state.resultOption), [{ pos: _this2.getCounter(), label: "", value: "" }])
                                        }));
                                        _this2.getCounter();
                                    } },
                                _react2.default.createElement(
                                    "i",
                                    { className: "material-icons" },
                                    "add"
                                ),
                                "Add option"
                            )
                        )
                    )
                );
            }
        }]);

        return OptionBuilder;
    }(_react.Component);

    exports.default = OptionBuilder;
});