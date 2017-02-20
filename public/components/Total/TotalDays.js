"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = require("C:\\Users\\kellyZhang\\Desktop\\CSVA\\public\\node_modules\\redbox-react\\lib\\index.js");

var _index2 = _interopRequireDefault(_index);

var _index3 = require("C:\\Users\\kellyZhang\\Desktop\\CSVA\\public\\node_modules\\react-transform-catch-errors\\lib\\index.js");

var _index4 = _interopRequireDefault(_index3);

var _react2 = require("react");

var _react3 = _interopRequireDefault(_react2);

var _index5 = require("C:\\Users\\kellyZhang\\Desktop\\CSVA\\public\\node_modules\\react-transform-hmr\\lib\\index.js");

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    TotalDays: {
        displayName: "TotalDays"
    }
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Total/TotalDays.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Total/TotalDays.jsx",
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

// import Calendar from '../Calendar.jsx'

var TotalDays = _wrapComponent("TotalDays")(function (_React$Component) {
    _inherits(TotalDays, _React$Component);

    function TotalDays() {
        var _ref;

        _classCallCheck(this, TotalDays);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = TotalDays.__proto__ || Object.getPrototypeOf(TotalDays)).call.apply(_ref, [this].concat(arg)));
    }

    _createClass(TotalDays, [{
        key: "render",
        value: function render() {
            return _react3.default.createElement(
                "div",
                null,
                _react3.default.createElement(
                    "div",
                    { className: "location" },
                    _react3.default.createElement(
                        "h3",
                        null,
                        _react3.default.createElement(
                            "label",
                            null,
                            "\u5F00\u653E\u4FE1\u606F"
                        ),
                        "> ",
                        _react3.default.createElement(
                            "label",
                            null,
                            " \u5F00\u653E\u5929\u6570"
                        )
                    )
                ),
                _react3.default.createElement(
                    "form",
                    { className: "form-horizontal" },
                    _react3.default.createElement(
                        "div",
                        { className: "form-group MT" },
                        _react3.default.createElement(
                            "label",
                            { className: "col-sm-2 control-label" },
                            "\u5F00\u653E\u5929\u6570"
                        ),
                        _react3.default.createElement(
                            "div",
                            { className: "col-sm-4" },
                            _react3.default.createElement("input", { type: "number", className: "form-control" })
                        ),
                        _react3.default.createElement(
                            "label",
                            { className: "col-sm-1 control-label" },
                            "\u5929"
                        )
                    )
                ),
                _react3.default.createElement(
                    "div",
                    { className: "clearfix", style: { overflow: "hidden" } },
                    _react3.default.createElement(
                        "div",
                        { className: "pull-left rightCale", style: { marginTop: "15px", height: "409px", paddingTop: "200px" } },
                        _react3.default.createElement(
                            "div",
                            null,
                            "\u6570\u636E\u6765\u6E90\u4E8E"
                        ),
                        _react3.default.createElement(
                            "div",
                            null,
                            "\xA0 1.\u65E5\u5E38\u6570\u636E"
                        ),
                        _react3.default.createElement(
                            "div",
                            null,
                            "\xA0 2.\u6D3B\u52A8\u627F\u8F7D"
                        ),
                        _react3.default.createElement(
                            "div",
                            null,
                            "\xA0 3.\u4F53\u80B2\u670D\u52A1"
                        )
                    )
                )
            );
        }
    }]);

    return TotalDays;
}(_react3.default.Component));

exports.default = TotalDays;

//# sourceMappingURL=TotalDays.js.map