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

var _reactRouter = require("react-router");

var _reactRedux = require("react-redux");

var _actions = require("../../redux/actions/actions.js");

var action = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	StadiumInfo: {
		displayName: "StadiumInfo"
	}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Stadium/StadiumInfo.jsx",
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Stadium/StadiumInfo.jsx",
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var StadiumInfo = _wrapComponent("StadiumInfo")(function (_React$Component) {
	_inherits(StadiumInfo, _React$Component);

	function StadiumInfo() {
		_classCallCheck(this, StadiumInfo);

		return _possibleConstructorReturn(this, (StadiumInfo.__proto__ || Object.getPrototypeOf(StadiumInfo)).call(this));
	}

	_createClass(StadiumInfo, [{
		key: "checkdatas",
		value: function checkdatas(value) {
			//点击时传一改变状态和数据的索引,更新本地store
			//获得此条数据的id
			var _props = this.props,
			    dispatch = _props.dispatch,
			    i = _props.i,
			    id = _props.id,
			    state = _props.state;

			dispatch(action.checkState(value, i, state));
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			{/*获取改变审查状态的那条数据*/}
			var data = this.props.data;

			console.log(data);
			return _react3.default.createElement(
				"div",
				null,
				_react3.default.createElement(
					"form",
					{ id: "stadiumAuditViewForm", className: "animated fadeInDown" },
					_react3.default.createElement(
						"ul",
						{ className: "RightInfo" },
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u5BA1\u6838\u72B6\u6001"
							),
							function (obj) {
								if (obj == 0) return "不限";
								if (obj == 1) return "正在审核";
								if (obj == 2) return "审核通过";
								if (obj == 3) return "审核不通过";
							}(data.state)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u573A\u9986\u540D\u79F0"
							),
							_react3.default.createElement(
								"span",
								null,
								data.name
							)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u6240\u5728\u57CE\u5E02"
							),
							_react3.default.createElement(
								"span",
								null,
								data.city
							)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u5EFA\u6210\u65F6\u95F4"
							),
							_react3.default.createElement(
								"span",
								null,
								data.buildDate
							),
							_react3.default.createElement(
								"em",
								null,
								"\u5E74"
							)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u6295\u8D44\u91D1\u989D"
							),
							_react3.default.createElement(
								"span",
								null,
								data.investmentAmount
							),
							_react3.default.createElement(
								"em",
								null,
								"\u4E07"
							)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u573A\u9986\u7EA7\u522B"
							),
							_react3.default.createElement(
								"span",
								null,
								data.level
							)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u5EA7\u4F4D\u6570"
							),
							_react3.default.createElement(
								"span",
								null,
								data.seats
							),
							_react3.default.createElement(
								"em",
								null,
								"\u4E2A"
							)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u56ED\u533A\u7528\u5730\u9762\u79EF"
							),
							_react3.default.createElement(
								"span",
								null,
								data.parkArea
							),
							"\u5E73\u65B9\u7C73"
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u4F53\u80B2\u573A\u5730\u9762\u79EF"
							),
							_react3.default.createElement(
								"span",
								null,
								data.stadiumArea
							),
							"\u5E73\u65B9\u7C73"
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u5305\u542B\u8FD0\u52A8\u7C7B\u578B"
							),
							_react3.default.createElement(
								"span",
								null,
								data.sports
							)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u573A\u9986\u5730\u5740"
							),
							_react3.default.createElement(
								"span",
								null,
								data.address
							)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u573A\u9986\u56FE\u7247"
							),
							_react3.default.createElement("span", null)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u573A\u9986\u7535\u8BDD"
							),
							_react3.default.createElement(
								"span",
								null,
								data.contantsPhone
							)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u8054\u7CFB\u4EBA\u540D\u79F0"
							),
							_react3.default.createElement("span", null)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								"label",
								null,
								"\u8054\u7CFB\u4EBA\u624B\u673A"
							),
							_react3.default.createElement("span", null)
						)
					),
					_react3.default.createElement(
						_reactRouter.Link,
						{ to: "/manage/stadium/1/" },
						_react3.default.createElement(
							"button",
							{ onClick: function onClick() {
									_this2.checkdatas(2);
								}, type: "button", style: { margin: "0 0 40px 190px" }, id: "auditYesBtn", className: "BlueBut" },
							"\u5BA1\u6838\u901A\u8FC7"
						)
					),
					_react3.default.createElement(
						_reactRouter.Link,
						{ to: "/manage/stadium/1/" },
						_react3.default.createElement(
							"button",
							{ onClick: function onClick() {
									_this2.checkdatas(3);
								}, type: "button", style: { margin: "0 0 40px 40px" }, id: "auditNoBtn", className: "BlueBut" },
							"\u5BA1\u6838\u4E0D\u901A\u8FC7"
						)
					)
				)
			);
		}
	}]);

	return StadiumInfo;
}(_react3.default.Component));

;
/**
 * 过滤函数
 * @param  i =>当前数据所在数组的索引
 * @return data=>当前数据对象
 */
function select(store) {
	return {
		data: store.checkData,
		i: store.checkData.index,
		id: store.checkData.id,
		state: store.checkData.state
	};
}
exports.default = (0, _reactRedux.connect)(select)(StadiumInfo);

//# sourceMappingURL=StadiumInfo.js.map