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

var _reactDom = require("react-dom");

require("../lib/fullcalendar-2.7.0/fullcalendar.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
    DailyCalendar: {
        displayName: "DailyCalendar"
    }
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
    filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Calendar.jsx",
    components: _components,
    locals: [module],
    imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
    filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Calendar.jsx",
    components: _components,
    locals: [],
    imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
    return function (Component) {
        return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
    };
}

var DailyCalendar = _wrapComponent("DailyCalendar")(function (_React$Component) {
    _inherits(DailyCalendar, _React$Component);

    function DailyCalendar() {
        var _ref;

        _classCallCheck(this, DailyCalendar);

        for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
            arg[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(this, (_ref = DailyCalendar.__proto__ || Object.getPrototypeOf(DailyCalendar)).call.apply(_ref, [this].concat(arg)));
    }

    _createClass(DailyCalendar, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            var _this = this;
            $('#calendar').fullCalendar({
                titleFormat: {
                    month: 'YYYY 年  MM 月' // September 2009
                },
                buttonText: {
                    today: '今天',
                    month: '月',
                    week: '周',
                    day: '天'
                },
                dayNamesShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
                dayClick: function dayClick(date) {
                    console.log(date.format());
                    // _this.setState({time:date.format()})
                },
                editable: true,
                eventLimit: true // allow "more" link when too many events
            });
        }
    }, {
        key: "render",
        value: function render() {
            return _react3.default.createElement("div", { id: "calendar", className: "pull-left fc fc-cursor fc-ltr fc-unthemed", style: { maxWidth: '500px', margin: '15px 0 0 12px' } });
        }
    }]);

    return DailyCalendar;
}(_react3.default.Component));

exports.default = DailyCalendar;

//# sourceMappingURL=Calendar.js.map