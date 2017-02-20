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
    TablePage: {
        displayName: "TablePage"
    }
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/TablePage.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/TablePage.jsx",
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var TablePage = _wrapComponent("TablePage")(function (_React$Component) {
    _inherits(TablePage, _React$Component);

    function TablePage() {
        _classCallCheck(this, TablePage);

        return _possibleConstructorReturn(this, (TablePage.__proto__ || Object.getPrototypeOf(TablePage)).apply(this, arguments));
    }

    _createClass(TablePage, [{
        key: "render",
        value: function render() {
            return _react3.default.createElement(
                "section",
                { className: "fr" },
                _react3.default.createElement(
                    "span",
                    null,
                    "\u7B2C 1 \u9875"
                ),
                "\xA0\xA0",
                _react3.default.createElement(
                    "span",
                    null,
                    "\u6BCF\u9875 2 \u6761\u6570\u636E"
                ),
                "\xA0\xA0",
                _react3.default.createElement(
                    "span",
                    null,
                    "\u5171 1 \u9875"
                ),
                "\xA0\xA0",
                _react3.default.createElement(
                    "span",
                    null,
                    "\u5171 1 \u6761\u6570\u636E"
                ),
                "\xA0\xA0",
                _react3.default.createElement(
                    "button",
                    { className: "btn btn-default", id: "firstPathBtn" },
                    "\u9996\u9875"
                ),
                _react3.default.createElement(
                    "button",
                    { className: "btn btn-default", id: "prevPageBtn" },
                    "\u4E0A\u4E00\u9875"
                ),
                _react3.default.createElement(
                    "button",
                    { className: "btn btn-default", id: "nextPageBtn" },
                    "\u4E0B\u4E00\u9875"
                ),
                _react3.default.createElement(
                    "button",
                    { className: "btn btn-default", id: "lastPageBtn" },
                    "\u5C3E\u9875"
                )
            );
        }
    }]);

    return TablePage;
}(_react3.default.Component));

exports.default = TablePage;

//# sourceMappingURL=TablePage.js.map