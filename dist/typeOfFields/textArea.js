(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react);
        global.textArea = mod.exports;
    }
})(this, function (exports, _react) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : {
            default: obj
        };
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

    var TextArea = function (_Component) {
        _inherits(TextArea, _Component);

        //initial state
        function TextArea(props) {
            _classCallCheck(this, TextArea);

            var _this = _possibleConstructorReturn(this, (TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call(this));

            if (props.formJson.name == 'label') {
                console.log("New");
                console.log(props.formJson);
                console.log(props.formJson.name);
            }
            _this.state = {
                text: props.jsonData[props.formJson.name] || props.formJson.value || ""
            };
            props.jsonCollector(_defineProperty({}, props.formJson.name, _this.state.text));

            return _this;
        }

        //change input value


        _createClass(TextArea, [{
            key: 'changeValue',
            value: function changeValue(e) {
                var _this2 = this;

                this.setState({
                    text: e.target.value
                }, function () {
                    if (_this2.props.formJson.name == 'label') {
                        document.querySelector(".index_" + _this2.props.index + " b").innerHTML = "Field " + _this2.state.text;
                    }
                    _this2.props.jsonCollector(_defineProperty({}, _this2.props.formJson.name, _this2.state.text));
                });
            }
        }, {
            key: 'render',
            value: function render() {
                var _this3 = this;

                return _react2.default.createElement(
                    'div',
                    { className: 'field-input' },
                    _react2.default.createElement(
                        'label',
                        { className: 'mainLabel inputLabel' },
                        _react2.default.createElement(
                            'span',
                            null,
                            this.props.formJson.label
                        ),
                        _react2.default.createElement('textarea', _extends({ placeholder: this.props.formJson.placeholder, onChange: function onChange(e) {
                                return _this3.changeValue(e);
                            }, defaultValue: this.state.text }, this.props.formJson.readOnly ? "disabled" : ""))
                    )
                );
            }
        }]);

        return TextArea;
    }(_react.Component);

    exports.default = TextArea;
});