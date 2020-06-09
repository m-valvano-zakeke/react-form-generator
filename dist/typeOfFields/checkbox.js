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
        global.checkbox = mod.exports;
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

    var Checkbox = function (_Component) {
        _inherits(Checkbox, _Component);

        function Checkbox(props) {
            _classCallCheck(this, Checkbox);

            var _this = _possibleConstructorReturn(this, (Checkbox.__proto__ || Object.getPrototypeOf(Checkbox)).call(this));

            _this.handleInputChange = function () {
                _this.setState(_extends({}, _this.state, {
                    is_checked: !_this.state.is_checked
                }), function () {
                    if (_this.props.formJson.name == 'required') {
                        if (_this.state.is_checked) {
                            //is required
                            document.querySelector(".index_" + _this.props.index + " span.requied").innerHTML = "*";
                        } else {
                            document.querySelector(".index_" + _this.props.index + " span.requied").innerHTML = "";
                        }
                    }
                    _this.props.jsonCollector(_defineProperty({}, _this.props.formJson.name, _this.state.is_checked));
                });
            };

            _this.state = {
                is_checked: props.jsonData[props.formJson.name] || props.formJson.value || false
            };
            props.jsonCollector(_defineProperty({}, props.formJson.name, _this.state.is_checked));

            return _this;
        }

        _createClass(Checkbox, [{
            key: 'componentDidMount',
            value: function componentDidMount() {
                $('#formBuilder input[type=checkbox]').checkbox();
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    'div',
                    { className: 'field-input' },
                    _react2.default.createElement(
                        'div',
                        { className: 'radio-box' },
                        _react2.default.createElement(
                            'label',
                            { className: 'mainLabel radiobox' },
                            _react2.default.createElement('input', {
                                type: 'checkbox',
                                checked: this.state.is_checked,
                                onChange: function onChange() {
                                    return _this2.handleInputChange();
                                }
                            }),
                            _react2.default.createElement(
                                'span',
                                null,
                                this.props.formJson.label
                            )
                        )
                    )
                );
            }
        }]);

        return Checkbox;
    }(_react.Component);

    exports.default = Checkbox;
});