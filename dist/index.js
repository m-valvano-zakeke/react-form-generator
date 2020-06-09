(function (global, factory) {
    if (typeof define === "function" && define.amd) {
        define(['exports', 'react', './Field.js', './FieldInGenerator.js', '../../../Scripts/utils/Helpers', './FormBuilder.css'], factory);
    } else if (typeof exports !== "undefined") {
        factory(exports, require('react'), require('./Field.js'), require('./FieldInGenerator.js'), require('../../../Scripts/utils/Helpers'), require('./FormBuilder.css'));
    } else {
        var mod = {
            exports: {}
        };
        factory(mod.exports, global.react, global.Field, global.FieldInGenerator, global.Helpers, global.FormBuilder);
        global.index = mod.exports;
    }
})(this, function (exports, _react, _Field, _FieldInGenerator, _Helpers) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _react2 = _interopRequireDefault(_react);

    var _Field2 = _interopRequireDefault(_Field);

    var _FieldInGenerator2 = _interopRequireDefault(_FieldInGenerator);

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

    var FormBuilder = function (_Component) {
        _inherits(FormBuilder, _Component);

        function FormBuilder(props) {
            _classCallCheck(this, FormBuilder);

            var _this = _possibleConstructorReturn(this, (FormBuilder.__proto__ || Object.getPrototypeOf(FormBuilder)).call(this));

            _this.jsonToLoad = [];
            _this.pos = 0;
            _this.outsideForm = false;

            _this.clearFromPlaceHolders = function () {
                var arrOfPlaceholders = document.querySelectorAll('.placeholder, .placeholder-up');
                if (arrOfPlaceholders.length) {
                    var _iteratorNormalCompletion = true;
                    var _didIteratorError = false;
                    var _iteratorError = undefined;

                    try {
                        for (var _iterator = arrOfPlaceholders[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                            var i = _step.value;

                            i.classList.remove('placeholder');
                            i.classList.remove('placeholder-up');
                        }
                    } catch (err) {
                        _didIteratorError = true;
                        _iteratorError = err;
                    } finally {
                        try {
                            if (!_iteratorNormalCompletion && _iterator.return) {
                                _iterator.return();
                            }
                        } finally {
                            if (_didIteratorError) {
                                throw _iteratorError;
                            }
                        }
                    }
                }
            };

            _this.fields = {
                text: {
                    showFields: new Set(['type']),
                    classIcon: 'text_fields', // class for icon from notawesome
                    label: _Helpers.T._("Text field", "Admin"), //show this label
                    typeInput: "text", //Field recognize by this variable
                    fields: {
                        'type': {
                            'inputType': "select",
                            'label': _Helpers.T._('Type', 'Admin'),
                            'name': 'type',
                            'options': [{
                                'label': _Helpers.T._('text', 'Admin'),
                                'value': 'text'
                            }, {
                                'label': _Helpers.T._('email', 'Admin'),
                                'value': 'email'
                            }, {
                                'label': _Helpers.T._('password', 'Admin'),
                                'value': 'password'
                            }, {
                                'label': 'tel',
                                'value': 'tel'
                            }, {
                                'label': 'url',
                                'value': 'url'
                            }]
                        },
                        'minLength': {
                            'inputType': "number",
                            'label': 'Min length',
                            'value': "",
                            'step': '1',
                            'name': 'min_length'
                        },
                        'maxLength': {
                            'inputType': "number",
                            'label': 'Max length',
                            'value': "",
                            'step': '1',
                            'name': 'max_length'
                        },
                        'sufix': {
                            'inputType': "text",
                            'label': 'Sufix',
                            'value': "",
                            'name': 'sufix'
                        }
                    }
                },
                number: {
                    classIcon: 'calculate',
                    showFields: new Set([]),
                    label: "Number",
                    typeInput: "number",
                    fields: {
                        'minValue': {
                            'inputType': "number",
                            'label': 'Min',
                            'value': "",
                            'step': '0.1',
                            'name': 'min_value'
                        },
                        'maxValue': {
                            'inputType': "number",
                            'label': 'Max',
                            'value': "",
                            'step': '0.1',
                            'name': 'max_value'
                        },
                        'step': {
                            'inputType': "number",
                            'label': 'Step',
                            'value': "",
                            'step': '0.1',
                            'name': 'step'
                        },
                        'sufix': {
                            'inputType': "text",
                            'label': 'Sufix',
                            'value': "",
                            'name': 'sufix'
                        }
                    }
                },
                textArea: {
                    classIcon: 'format_align_left',
                    label: _Helpers.T._("Text area", "Admin"),
                    typeInput: "textArea",
                    fields: {
                        'minLength': {
                            'inputType': "number",
                            'label': _Helpers.T._('Min length', 'Admin'),
                            'value': "",
                            'step': '1',
                            'name': 'min_length'
                        },
                        'maxLength': {
                            'inputType': "number",
                            'label': _Helpers.T._('Max length', 'Admin'),
                            'value': "",
                            'step': '1',
                            'name': 'max_length'
                        },
                        'cols': {
                            'inputType': "number",
                            'label': 'Cols',
                            'value': "30",
                            'step': '1',
                            'name': 'cols'
                        },
                        'rows': {
                            'inputType': "number",
                            'label': _Helpers.T._('Rows', 'Admin'),
                            'value': "10",
                            'step': '1',
                            'name': 'rows'
                        }
                    }
                },
                // autocomplete: {
                //     classIcon: 'fa-clone',
                //     showFields: new Set(['optionBuilder']),
                //     label: "Text autocomplete",
                //     typeInput: "autocomplete",
                //     fields: {
                //         'optionBuilder': {
                //             'inputType': "optionBuilder",
                //             'label': 'Options',
                //             'value': "",
                //             'name': 'options'
                //         },
                //     }
                // },
                inputRadio: {
                    classIcon: 'radio_button_checked',
                    showFields: new Set(['optionBuilder']),
                    label: _Helpers.T._("Input Radio group", "Admin"),
                    typeInput: "inputRadio",
                    fields: {
                        'optionBuilder': {
                            'inputType': "optionBuilder",
                            'label': _Helpers.T._('Options', 'Admin'),
                            'value': "",
                            'name': 'options'
                        }
                    }
                },
                inputCheckbox: {
                    classIcon: 'check_box',
                    showFields: new Set([]),
                    label: _Helpers.T._("Checkbox", "Admin"),
                    typeInput: "inputCheckbox",
                    fields: {
                        'defaultSelected': {
                            'inputType': "checkbox",
                            'label': _Helpers.T._('Default selected', 'Admin'),
                            'value': false,
                            'name': 'defaultSelected'
                        }
                    }
                },
                select: {
                    classIcon: 'view_list',
                    showFields: new Set(['optionBuilder']),
                    label: _Helpers.T._("Select", "Admin"),
                    typeInput: "select",
                    fields: {
                        'optionBuilder': {
                            'inputType': "optionBuilder",
                            'label': _Helpers.T._('Options', 'Admin'),
                            'value': "",
                            'name': 'options'
                        }
                    },
                    banField: new Set(['placeholder'])
                },
                // fileUpload: {
                //     classIcon: 'fa-download',
                //     showFields: new Set(['optionBuilder']),
                //     label: "Upload file",
                //     typeInput: "fileUpload",
                //     fields: {
                //     }
                // },
                // button: {
                //     classIcon: 'fa-circle',
                //     showFields: new Set(['type']),
                //     label: "Button",
                //     typeInput: "button",
                //     fields: {
                //         'type' : {
                //             'inputType': "select",
                //             'label': 'Type',
                //             'name': 'type',
                //             'options': [
                //                 {
                //                     'label': 'Button',
                //                     'value': 'button'
                //                 },
                //                 {
                //                     'label': 'Submit',
                //                     'value': 'submit'
                //                 },
                //                 {
                //                     'label': 'Reset',
                //                     'value': 'reset'
                //                 },
                //             ]
                //         },
                //     },
                //     banField: new Set([
                //         'placeholder',
                //         'defaultValue',
                //         'required',
                //         'tipText',
                //         'name'
                //     ])
                // },
                header: {
                    classIcon: 'drag_handle',
                    showFields: new Set(['headerLevel', 'Headertext']),
                    label: _Helpers.T._("Header", "Admin"),
                    typeInput: "header",
                    fields: {
                        'Headertext': {
                            'inputType': "text",
                            'label': _Helpers.T._('Header text', 'Admin'),
                            'value': "",
                            'name': 'headertext'
                        },
                        'headerLevel': {
                            'inputType': "select",
                            'label': 'Header level',
                            'name': 'headerlevel',
                            'options': [{
                                'label': 'H1',
                                'value': 'h1'
                            }, {
                                'label': 'H2',
                                'value': 'h2'
                            }, {
                                'label': 'H3',
                                'value': 'h3'
                            }, {
                                'label': 'H4',
                                'value': 'h4'
                            }, {
                                'label': 'H5',
                                'value': 'h5'
                            }, {
                                'label': 'H6',
                                'value': 'h6'
                            }]
                        }
                    },
                    banField: new Set(['placeholder', 'defaultValue', 'required', 'tipText', 'required', 'label', 'name'])
                },
                paragraph: {
                    classIcon: 'format_textdirection_l_to_r',
                    showFields: new Set(['content']),
                    label: _Helpers.T._("Paragraph", "Admin"),
                    typeInput: "paragraph",
                    fields: {
                        'content': {
                            'inputType': "textarea",
                            'label': 'Content',
                            'value': "",
                            'name': 'content',
                            'placeholder': _Helpers.T._('Put paragraph content', 'Admin')
                        }
                    },
                    banField: new Set(['placeholder', 'defaultValue', 'required', 'tipText', 'required', 'label', 'name'])
                },
                // hiddenInput: {
                //     classIcon: 'fa-eye-slash',
                //     showFields: new Set(['value']),
                //     label: "Hidden input",
                //     typeInput: "hiddenInput",
                //     fields: {
                //         'value': {
                //             'inputType': "text",
                //             'label': 'Value',
                //             'value': "",
                //             'name': 'value'
                //         },
                //     },
                //     banField: new Set([
                //         'placeholder',
                //         'defaultValue',
                //         'required',
                //         'tipText',
                //         'required',
                //         'label',
                //         'defaultValue',
                //         'class'
                //     ])
                // },
                toAllFields: {
                    showFields: new Set(['required', 'label']),
                    fields: {
                        'label': {
                            'inputType': "text",
                            'label': _Helpers.T._('Label', 'Admin'),
                            'value': "",
                            'name': 'label'
                        },
                        'name': {
                            'inputType': "text",
                            'label': _Helpers.T._('Name', 'Admin'),
                            'value': "",
                            'name': 'name'
                        },
                        'required': {
                            'inputType': "checkbox",
                            'label': _Helpers.T._('Required', 'Admin'),
                            'value': false,
                            'name': 'required'
                        },
                        'class': {
                            'inputType': "text",
                            'label': 'CSS class',
                            'value': "",
                            'name': 'class'
                        },
                        'tipText': {
                            'inputType': "text",
                            'label': 'Title',
                            'value': "",
                            'name': 'tipText'
                        },
                        'placeholder': {
                            'inputType': "text",
                            'label': 'Placeholder',
                            'value': "",
                            'name': 'placeholder'
                        },
                        'defaultValue': {
                            'inputType': "text",
                            'label': 'Default value',
                            'value': "",
                            'name': 'value'
                        }
                    }
                }
            };
            _this.state = {
                fieldsInForm: [],
                onDragField: false,
                fieldsToEdit: []
            };

            _this.normalElem = function (typefield, number) {
                var optionalJson = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                return {
                    typefield: typefield,
                    number: number,
                    index: Math.random().toString(36).substring(4) + "_" + new Date().getTime(),
                    optionalJson: _extends({}, optionalJson),
                    classList: ''
                };
            };

            _this.counter = 0;

            _this.getCounter = function () {
                return _this.counter++;
            };

            _this.formJson = {};

            _this.jsonCollector = function () {

                var jsonInCorrectOrder = _this.getJson();

                if (document.getElementById('result')) document.getElementById('result').innerHTML = JSON.stringify(jsonInCorrectOrder, null, 4);
            };

            _this.getJson = function () {

                var jsonInCorrectOrder = [];

                _this.state.fieldsToEdit.map(function (item) {
                    jsonInCorrectOrder.push(item.optionalJson);
                });
                return jsonInCorrectOrder;
            };

            _this.addToFormJson = function (name, value) {
                _this.formJson[name] = _extends({}, value);

                var jsonInCorrectOrder = [];

                _this.state.fieldsToEdit = _this.state.fieldsToEdit.map(function (item) {

                    if (item.index == name) item.optionalJson = value;
                    jsonInCorrectOrder.push(item.optionalJson);
                    return item;
                });

                if (_this.props.makeActionWhenJsonChange) _this.props.makeActionWhenJsonChange(jsonInCorrectOrder);
                _this.jsonCollector();
            };

            _this.deleteField = function (index) {
                _this.setState(_extends({}, _this.state, {
                    fieldsToEdit: _this.state.fieldsToEdit.filter(function (item) {
                        if (index == item.index) return false;
                        return true;
                    })
                }));
                delete _this.formJson[index];
            };

            if (props.fields) {
                _this.fields = Object.assign(_this.fields, props.fields);
            }

            if (props.jsonToLoad != undefined) {
                //load existing json
                var arrayRes = [];
                Object.keys(props.jsonToLoad).map(function (item) {
                    arrayRes.push(_this.normalElem(props.jsonToLoad[item].typeField, _this.getCounter(), props.jsonToLoad[item]));
                });

                _this.state.fieldsToEdit = arrayRes;
                _this.state.formToGenerate = [];
            }
            return _this;
        }

        _createClass(FormBuilder, [{
            key: 'someElementOfArrayHasClass',
            value: function someElementOfArrayHasClass(arr, className) {
                var result = false;
                arr.map(function (elem) {
                    if (elem.className) if (elem.className.includes(className)) {
                        result = true;
                    }
                });
                return result;
            }
        }, {
            key: 'returnElementOfArrayHasClass',
            value: function returnElementOfArrayHasClass(arr, className) {
                var result = false;
                arr.map(function (elem) {
                    if (elem.className) if (elem.className.includes(className)) {
                        result = elem;
                    }
                });

                return result;
            }
        }, {
            key: 'componentWillUnmount',
            value: function componentWillUnmount() {
                // fix Warning: Can't perform a React state update on an unmounted component
                this.setState = function (state, callback) {
                    return;
                };
            }
        }, {
            key: 'componentDidMount',
            value: function componentDidMount() {
                var _this2 = this;

                // if(this.props.jsonToLoad)
                //     this.jsonToLoad = this.props.jsonToLoad


                document.addEventListener("dragstart", function (event) {
                    if (document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") {
                        event.preventDefault();
                        return;
                    }
                    _this2.dragedElement = event.target;
                    _this2.dragedElement.classList.add('actualmoving');

                    if (event.target.className.includes('elementOFDrag')) {
                        _this2.dragedElement = event.target;
                    }
                    _this2.outsideForm = false;
                });
                document.addEventListener("dragover", function (event) {
                    event.preventDefault();
                    var dragedFieldClassNames = _this2.dragedElement.className;

                    if (_this2.someElementOfArrayHasClass(event.path, 'formBuilderGroup')) {
                        //mouse over formbuilder
                        if (dragedFieldClassNames.includes('fieldToDrag')) {
                            //field is moving from right bar to generator form


                            //there aren't any field in generator form
                            if (_this2.state.fieldsToEdit.length == 0) {
                                document.getElementById("formBuilder-form").classList.add("placeholder");
                            } else {
                                //there is some field in generator form
                                _this2.clearFromPlaceHolders();
                                var allExistingFields = document.querySelectorAll('.elementOFDrag');

                                if (_this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag')) {
                                    //position relative to existing fields

                                    var posAct = 0;

                                    var _iteratorNormalCompletion2 = true;
                                    var _didIteratorError2 = false;
                                    var _iteratorError2 = undefined;

                                    try {
                                        for (var _iterator2 = allExistingFields[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                            var item = _step2.value;

                                            if (item.getAttribute('data-order-form-builder') == _this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag').getAttribute('data-order-form-builder')) {
                                                _this2.pos = posAct;
                                                break;
                                            }
                                            posAct++;
                                        }
                                        //add placeholder to existing field
                                    } catch (err) {
                                        _didIteratorError2 = true;
                                        _iteratorError2 = err;
                                    } finally {
                                        try {
                                            if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                                _iterator2.return();
                                            }
                                        } finally {
                                            if (_didIteratorError2) {
                                                throw _iteratorError2;
                                            }
                                        }
                                    }

                                    allExistingFields[_this2.pos].classList.add("placeholder-up");
                                } else {
                                    //mouse over form but not on element, so select default under
                                    document.getElementById("formBuilder-form").classList.add("placeholder");
                                    //position on last item
                                    if (allExistingFields) _this2.pos = allExistingFields.length;
                                }
                            }
                        } else {
                            //moving existing field

                            //clear before placeholder first
                            _this2.clearFromPlaceHolders();

                            //get existing fields
                            var allExistingFields = document.querySelectorAll('.elementOFDrag');

                            //check if actual dragged element is on it self, if yes it won't show placeholder
                            if (_this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag') && _this2.dragedElement.getAttribute('data-order-form-builder') == _this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag').getAttribute('data-order-form-builder')) return;

                            if (_this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag')) {
                                //position relative to existing fields
                                var posAct = 0;

                                var blockAfterElementPlaceholder = false;
                                var _iteratorNormalCompletion3 = true;
                                var _didIteratorError3 = false;
                                var _iteratorError3 = undefined;

                                try {
                                    for (var _iterator3 = allExistingFields[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                                        var item = _step3.value;

                                        if (_this2.dragedElement.getAttribute('data-order-form-builder') == item.getAttribute('data-order-form-builder')) {
                                            //it's element draged over it self
                                            blockAfterElementPlaceholder = posAct;
                                        }
                                        if (item.getAttribute('data-order-form-builder') == _this2.returnElementOfArrayHasClass(event.path, 'elementOFDrag').getAttribute('data-order-form-builder')) {
                                            //define position of element on which drag element is over
                                            _this2.pos = posAct;
                                        }
                                        posAct++;
                                    }
                                } catch (err) {
                                    _didIteratorError3 = true;
                                    _iteratorError3 = err;
                                } finally {
                                    try {
                                        if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                            _iterator3.return();
                                        }
                                    } finally {
                                        if (_didIteratorError3) {
                                            throw _iteratorError3;
                                        }
                                    }
                                }

                                if (_this2.pos == blockAfterElementPlaceholder + 1) {
                                    //block placeholder after draged element
                                    return;
                                }
                                allExistingFields[_this2.pos].classList.add("placeholder-up");
                            } else {
                                //mouse is over form but any existing element
                                document.getElementById("formBuilder-form").classList.add("placeholder");
                                //position on last item
                                _this2.pos = allExistingFields.length;
                            }
                        }
                        //inform drag drop that mouse is over form
                        _this2.outsideForm = false;
                    } else {
                        //mouse outside form generator
                        _this2.clearFromPlaceHolders();
                        _this2.outsideForm = true;
                    }
                });
                document.addEventListener('dragend', function (event) {
                    if (_this2.outsideForm) {
                        //existing form outside form, so don't show its postion migration
                        _this2.dragedElement.classList.remove('actualmoving');
                        return;
                    }
                    if (_this2.dragedElement.className.includes('fieldToDrag')) {
                        //field moved from right sidebar to generator

                        event.preventDefault();
                        //add first field to generator form
                        if (_this2.state.fieldsToEdit.length == 0) {
                            _this2.setState(_extends({}, _this2.state, {
                                fieldsToEdit: [_this2.normalElem(_this2.dragedElement.getAttribute('data-type-field'), _this2.getCounter())]
                            }), function () {
                                _this2.clearFromPlaceHolders();
                            });
                        } else {
                            //add next field to list
                            var newFieldsToEdit = _this2.state.fieldsToEdit.slice();

                            //add element to correct position
                            newFieldsToEdit.splice(_this2.pos, 0, _this2.normalElem(_this2.dragedElement.getAttribute('data-type-field'), _this2.getCounter()));
                            _this2.setState(_extends({}, _this2.state, {
                                fieldsToEdit: newFieldsToEdit

                            }), function () {
                                _this2.clearFromPlaceHolders();
                            });
                        }
                    } else {
                        //field is existing and is moving
                        _this2.dragedElement.classList.remove('actualmoving');

                        var _newFieldsToEdit = _this2.state.fieldsToEdit.slice();

                        //define element which was dragged to move
                        var element;
                        _newFieldsToEdit.map(function (item) {
                            if (item.number == _this2.dragedElement.getAttribute('data-order-form-builder')) {
                                element = item;
                            }
                        });
                        //add element in correct position
                        _newFieldsToEdit.splice(_this2.pos, 0, _extends({}, element, {
                            number: _this2.getCounter()
                        }));
                        //remove element from old position
                        _newFieldsToEdit = _newFieldsToEdit.filter(function (item) {
                            if (item.number == _this2.dragedElement.getAttribute('data-order-form-builder')) {
                                return false;
                            }
                            return true;
                        });
                        _this2.setState(_extends({}, _this2.state, {
                            fieldsToEdit: _newFieldsToEdit
                        }), function () {
                            _this2.clearFromPlaceHolders();
                        });
                    }
                }, false);
            }
        }, {
            key: 'render',
            value: function render() {
                var _this3 = this;

                return _react2.default.createElement(
                    'div',
                    { id: 'formBuilder' },
                    _react2.default.createElement(
                        'div',
                        { id: 'formBuilder-form', className: 'formBuilderGroup' },
                        this.state.fieldsToEdit.map(function (item) {
                            return _react2.default.createElement(
                                'div',
                                { key: item.number, 'data-order-form-builder': item.number, draggable: 'true', className: item.classList + " elementOFDrag" },
                                _react2.default.createElement(_FieldInGenerator2.default, { deleteField: _this3.deleteField, addToFormJson: _this3.addToFormJson, actualElem: item, definedFields: _this3.fields, jsonData: item.optionalJson || _this3.formJson[item.index] || {} })
                            );
                        })
                    ),
                    _react2.default.createElement(
                        'div',
                        { id: 'optionColumn' },
                        Object.keys(this.fields).map(function (field) {
                            if (field != "toAllFields") return _react2.default.createElement(_Field2.default, { 'data-field': _this3.fields[field], key: _this3.getCounter(), className: 'elementOFDrag' });
                        }),
                        _react2.default.createElement(
                            'button',
                            { type: 'button', id: 'preview-form', className: 'btn btn-primary', onClick: function onClick() {
                                    _this3.props.onSaveForm(_this3.getJson());
                                } },
                            'Preview'
                        )
                    )
                );
            }
        }]);

        return FormBuilder;
    }(_react.Component);

    exports.default = FormBuilder;
});