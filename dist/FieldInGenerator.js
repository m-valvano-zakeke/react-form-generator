(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './typeOfFields/input', './typeOfFields/checkbox', './typeOfFields/select', './typeOfFields/optionBuilder', './typeOfFields/textArea', './FormBuilder.css'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./typeOfFields/input'), require('./typeOfFields/checkbox'), require('./typeOfFields/select'), require('./typeOfFields/optionBuilder'), require('./typeOfFields/textArea'), require('./FormBuilder.css'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.input, global.checkbox, global.select, global.optionBuilder, global.textArea, global.FormBuilder);
        global.FieldInGenerator = mod.exports;
    }
})(this, function (exports, _react, _input, _checkbox, _select, _optionBuilder, _textArea) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _input2 = _interopRequireDefault(_input);

    var _checkbox2 = _interopRequireDefault(_checkbox);

    var _select2 = _interopRequireDefault(_select);

    var _optionBuilder2 = _interopRequireDefault(_optionBuilder);

    var _textArea2 = _interopRequireDefault(_textArea);

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

    var FieldInGenerator = function (_Component) {
        _inherits(FieldInGenerator, _Component);

        function FieldInGenerator(props) {
            _classCallCheck(this, FieldInGenerator);

            var _this = _possibleConstructorReturn(this, (FieldInGenerator.__proto__ || Object.getPrototypeOf(FieldInGenerator)).call(this));

            _this.jsonField = {};

            _this.addToJson = function (jsonToAdd) {
                if (!jsonToAdd) return;
                var actualJson = _this.jsonField;
                Object.keys(jsonToAdd).map(function (key) {
                    actualJson[key] = jsonToAdd[key];
                });
                _this.jsonField = actualJson;

                _this.props.addToFormJson(_this.props.actualElem.index, actualJson);
            };

            _this.counter = 0;

            _this.getCounter = function () {
                return _this.counter++;
            };

            _this.objectField = props.definedFields[props.actualElem.typefield];

            var newState = {
                generalFieldsShow: false,
                extraFieldsShow: false
            };

            _this.state = newState;
            _this.jsonField = _extends({}, props.jsonData, {
                "typeField": props.actualElem.typefield
            });
            props.addToFormJson(props.actualElem.index, _this.jsonField);
            return _this;
        }

        _createClass(FieldInGenerator, [{
            key: 'render',
            value: function render() {
                var _this2 = this;

                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        'div',
                        { className: "headerBar index_" + this.props.actualElem.index },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'b',
                                null,
                                'Field ',
                                this.props.jsonData.readOnly ? this.props.jsonData.label : ""
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'typeField' },
                                '(',
                                this.props.actualElem.typefield,
                                ')'
                            ),
                            _react2.default.createElement(
                                'span',
                                { className: 'requied' },
                                this.props.jsonData.required ? "*" : ""
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'buttons' },
                            !this.props.jsonData.readOnly && _react2.default.createElement(
                                'button',
                                { className: 'btn btn-secondary delete_button', onClick: function onClick() {
                                        if (window.confirm("Are you sure you want delete this field?")) {
                                            _this2.props.deleteField(_this2.props.actualElem.index);
                                        }
                                    } },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'material-icons' },
                                    'delete'
                                ),
                                'Delete field'
                            ),
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-secondary edit_button', onClick: function onClick() {
                                        _this2.setState(_extends({}, _this2.state, {
                                            generalFieldsShow: !_this2.state.generalFieldsShow
                                        }));
                                    } },
                                _react2.default.createElement(
                                    'i',
                                    { className: 'material-icons' },
                                    'edit'
                                ),
                                'Edit field'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: this.state.generalFieldsShow ? "mainField show" : "mainField hidden" },
                        _react2.default.createElement(
                            'div',
                            { className: 'fieldsTop' },
                            Object.keys(this.props.definedFields['toAllFields'].fields).map(function (item) {
                                var actualInput = _this2.props.definedFields['toAllFields'].fields[item];
                                if (_this2.props.definedFields['toAllFields'].showFields.has(item)) {
                                    if (_this2.props.definedFields[_this2.props.actualElem.typefield].banField != undefined) if (_this2.props.definedFields[_this2.props.actualElem.typefield].banField.has(item)) return;
                                    if (actualInput) switch (actualInput.inputType) {
                                        case 'textarea':
                                            return _react2.default.createElement(_textArea2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        case 'text':
                                            return _react2.default.createElement(_input2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        case 'number':
                                            return _react2.default.createElement(_input2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        case 'checkbox':
                                            return _react2.default.createElement(_checkbox2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        case 'optionBuilder':
                                            return _react2.default.createElement(_optionBuilder2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        case 'select':
                                            return _react2.default.createElement(_select2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                    }
                                }
                            }),
                            Object.keys(this.props.definedFields[this.props.actualElem.typefield].fields).map(function (item) {
                                var actualInput = _this2.props.definedFields[_this2.props.actualElem.typefield].fields[item];
                                if (_this2.objectField.showFields && _this2.objectField.showFields.has(item)) {
                                    if (actualInput) switch (actualInput.inputType) {
                                        case 'textarea':
                                            return _react2.default.createElement(_textArea2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        case 'text':
                                            return _react2.default.createElement(_input2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        case 'number':
                                            return _react2.default.createElement(_input2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        case 'checkbox':
                                            return _react2.default.createElement(_checkbox2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        case 'optionBuilder':
                                            return _react2.default.createElement(_optionBuilder2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        case 'select':
                                            return _react2.default.createElement(_select2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                    }
                                }
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'button-show-more' },
                            _react2.default.createElement(
                                'button',
                                { className: 'btn btn-secondary', onClick: function onClick() {
                                        _this2.setState(_extends({}, _this2.state, {
                                            extraFieldsShow: !_this2.state.extraFieldsShow
                                        }));
                                    } },
                                this.state.extraFieldsShow ? "Hide extra fields" : "Show extra fields",
                                this.state.extraFieldsShow ? _react2.default.createElement(
                                    'i',
                                    { className: 'material-icons' },
                                    'expand_less'
                                ) : _react2.default.createElement(
                                    'i',
                                    { className: 'material-icons' },
                                    'expand_more'
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: this.state.extraFieldsShow ? "hideExtraOptions show" : "hideExtraOptions hidden" },
                            _react2.default.createElement(
                                'div',
                                { className: 'fieldsBottom' },
                                Object.keys(this.props.definedFields['toAllFields'].fields).map(function (item) {
                                    var _React$createElement;

                                    var actualInput = _this2.props.definedFields['toAllFields'].fields[item];
                                    if (!_this2.props.definedFields['toAllFields'].showFields.has(item)) {
                                        if (_this2.props.definedFields[_this2.props.actualElem.typefield].banField != undefined) if (_this2.props.definedFields[_this2.props.actualElem.typefield].banField.has(item)) return;
                                        if (actualInput) switch (actualInput.inputType) {
                                            case 'textarea':
                                                return _react2.default.createElement(_textArea2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                            case 'text':
                                                return _react2.default.createElement(_input2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                            case 'number':
                                                return _react2.default.createElement(_input2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                            case 'checkbox':
                                                return _react2.default.createElement(_checkbox2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                            case 'optionBuilder':
                                                return _react2.default.createElement(_optionBuilder2.default, (_React$createElement = { readOnly: _this2.props.jsonData.readOnly }, _defineProperty(_React$createElement, 'readOnly', _this2.props.formJson.readOnly), _defineProperty(_React$createElement, 'index', _this2.props.actualElem.index), _defineProperty(_React$createElement, 'updateLabel', _this2.updateLabel), _defineProperty(_React$createElement, 'jsonData', _this2.jsonField), _defineProperty(_React$createElement, 'jsonCollector', _this2.addToJson), _defineProperty(_React$createElement, 'key', _this2.getCounter()), _defineProperty(_React$createElement, 'formJson', actualInput), _React$createElement));
                                            case 'select':
                                                return _react2.default.createElement(_select2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        }
                                    }
                                }),
                                Object.keys(this.props.definedFields[this.props.actualElem.typefield].fields).map(function (item) {
                                    var actualInput = _this2.props.definedFields[_this2.props.actualElem.typefield].fields[item];
                                    if (!(_this2.objectField.showFields && _this2.objectField.showFields.has(item))) {
                                        if (actualInput) switch (actualInput.inputType) {
                                            case 'textarea':
                                                return _react2.default.createElement(_textArea2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                            case 'text':
                                                return _react2.default.createElement(_input2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                            case 'number':
                                                return _react2.default.createElement(_input2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                            case 'checkbox':
                                                return _react2.default.createElement(_checkbox2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                            case 'optionBuilder':
                                                return _react2.default.createElement(_optionBuilder2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                            case 'select':
                                                return _react2.default.createElement(_select2.default, { readOnly: _this2.props.jsonData.readOnly, index: _this2.props.actualElem.index, updateLabel: _this2.updateLabel, jsonData: _this2.jsonField, jsonCollector: _this2.addToJson, key: _this2.getCounter(), formJson: actualInput });
                                        }
                                    }
                                })
                            )
                        )
                    )
                );
            }
        }]);

        return FieldInGenerator;
    }(_react.Component);

    exports.default = FieldInGenerator;
});