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
        global.select = mod.exports;
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

    var Select = function (_Component) {
        _inherits(Select, _Component);

        //initial state
        function Select(props) {
            _classCallCheck(this, Select);

            var _this = _possibleConstructorReturn(this, (Select.__proto__ || Object.getPrototypeOf(Select)).call(this));

            _this.state = {
                text: props.jsonData[props.formJson.name] || ""
            };
            if (!_this.state.text && props.formJson.options.length) props.jsonCollector(_defineProperty({}, props.formJson.name, props.formJson.options[0]['value']));else props.jsonCollector(_defineProperty({}, props.formJson.name, _this.state.text));
            return _this;
        }

        //change input value


        _createClass(Select, [{
            key: 'changeValue',
            value: function changeValue(e) {
                this.setState({
                    text: e.target.value
                });
                this.props.jsonCollector(_defineProperty({}, this.props.formJson.name, e.target.value));
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                $('select[name=' + this.props.formJson.name + ']').combobox();
            }
        }, {
            key: 'render',
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    'div',
                    { className: 'field-input' },
                    _react2.default.createElement(
                        'span',
                        { className: 'mainLabel' },
                        _react2.default.createElement(
                            'span',
                            { 'data-tip': this.props.formJson.description },
                            this.props.formJson.label,
                            this.props.formJson.required ? _react2.default.createElement(
                                'span',
                                { className: 'requiredStar' },
                                '*'
                            ) : ""
                        ),
                        _react2.default.createElement(
                            'select',
                            {
                                value: this.state.text,
                                name: this.props.formJson.name,
                                onChange: function onChange(e) {
                                    return _this2.changeValue(e);
                                }
                            },
                            this.props.formJson.options.map(function (field) {
                                return _react2.default.createElement(
                                    'option',
                                    { key: field.value, value: field.value },
                                    field.label
                                );
                            })
                        )
                    )
                );
            }
        }]);

        return Select;
    }(_react.Component);

    exports.default = Select;
});