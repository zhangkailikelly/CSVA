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

var _reactDom = require("react-dom");

var _reactRedux = require("react-redux");

var _actions = require("../../redux/actions/actions");

var action = _interopRequireWildcard(_actions);

var _StadiumListSearch = require("./StadiumListSearch");

var _StadiumListSearch2 = _interopRequireDefault(_StadiumListSearch);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	StadiumList: {
		displayName: "StadiumList"
	}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Stadium/StadiumList.jsx",
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Stadium/StadiumList.jsx",
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var StadiumList = _wrapComponent("StadiumList")(function (_Component) {
	_inherits(StadiumList, _Component);

	function StadiumList() {
		_classCallCheck(this, StadiumList);

		return _possibleConstructorReturn(this, (StadiumList.__proto__ || Object.getPrototypeOf(StadiumList)).call(this));
	}

	_createClass(StadiumList, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _props = this.props;
			var dispatch = _props.dispatch;
			var Data = _props.Data;

			if (Data.length != 0) return;
			dispatch(action.getStadiumsData());
		}
	}, {
		key: "viewData",
		value: function viewData(id) {
			var dispatch = this.props.dispatch;

			dispatch(action.viewData(id));
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props2 = this.props;
			var dispatch = _props2.dispatch;
			var Data = _props2.Data;

			return _react3.default.createElement(
				"div",
				null,
				_react3.default.createElement(_StadiumListSearch2.default, { search: function search(obj) {
						dispatch(action.search(obj));
					} }),
				_react3.default.createElement(
					"div",
					{ id: "ruleWrap", className: "table-responsive normal mLR tbodyLeft", style: { marginTop: "20px" } },
					_react3.default.createElement(
						"table",
						{ className: "table tableColor tablebor NoMB", id: "ruleTable" },
						_react3.default.createElement(
							"thead",
							{ className: "tabelH" },
							_react3.default.createElement(
								"tr",
								null,
								_react3.default.createElement(
									"th",
									{ style: { width: '150px' } },
									"\u573A\u9986\u540D\u79F0"
								),
								_react3.default.createElement(
									"th",
									{ style: { width: '115px' } },
									"\u6240\u5728\u57CE\u5E02"
								),
								_react3.default.createElement(
									"th",
									{ style: { width: '120px' } },
									"\u5BA1\u6838\u72B6\u6001"
								),
								_react3.default.createElement(
									"th",
									{ style: { width: '115px' } },
									"\u8FD0\u8425\u5355\u4F4D\u540D\u79F0"
								),
								_react3.default.createElement(
									"th",
									{ style: { width: '165px' } },
									"\u63D0\u4EA4\u65F6\u95F4"
								),
								_react3.default.createElement(
									"th",
									{ style: { width: '290px' } },
									"\u64CD\u4F5C"
								)
							)
						),
						_react3.default.createElement(
							"tbody",
							null,
							Data.length == 0 ? _react3.default.createElement(
								"tr",
								null,
								_react3.default.createElement(
									"td",
									{ style: { width: "955px", textAlign: "center" } },
									"\u6CA1\u6709\u6570\u636E"
								)
							) : Data.map(function (index, i) {
								return _react3.default.createElement(
									"tr",
									{ key: i },
									_react3.default.createElement(
										"td",
										{ style: { width: '150px' } },
										index.name
									),
									_react3.default.createElement(
										"td",
										{ style: { width: '115px' } },
										index.city
									),
									_react3.default.createElement(
										"td",
										{ style: { width: '120px' } },
										function (obj) {
											if (obj == 0) return "不限";
											if (obj == 1) return "正在审核";
											if (obj == 2) return "审核通过";
											if (obj == 3) return "审核不通过";
										}(index.state)
									),
									_react3.default.createElement(
										"td",
										{ style: { width: '115px' } },
										index.mainUnit
									),
									_react3.default.createElement(
										"td",
										{ style: { width: '165px' } },
										index.buildDate
									),
									_react3.default.createElement(
										"td",
										{ style: { width: '290px' } },
										_react3.default.createElement(
											"span",
											{ className: "auditBtn" },
											_react3.default.createElement(
												_reactRouter.Link,
												{ to: "/manage/stadium/2", onClick: function onClick() {
														dispatch(action.check(index, i));
													} },
												"\u5BA1\u6838"
											)
										),
										" |",
										_react3.default.createElement(
											"span",
											{ className: "auditViewBtn" },
											_react3.default.createElement(
												_reactRouter.Link,
												{ to: "/manage/stadium/3", onClick: function onClick() {
														_this2.viewData(index.id);
													} },
												"\u67E5\u770B\u8FD0\u8425\u6570\u636E"
											)
										),
										" |",
										_react3.default.createElement(
											"span",
											{ className: "auditCountBtn" },
											_react3.default.createElement(
												_reactRouter.Link,
												{ to: "/manage/stadium/4", onClick: function onClick() {
														return _this2.viewData(index.id);
													} },
												"\u67E5\u770B\u6570\u636E\u7EDF\u8BA1"
											)
										)
									)
								);
							})
						)
					)
				)
			);
		}
	}]);

	return StadiumList;
}(_react2.Component));

;
//筛选符合条件的
function filter(filters, data, type) {
	var arr = [];
	if (type == 'search') {
		data.map(function (index) {
			if (index.name == filters.cgName && index.city == filters.locaCity && index.state == filters.state && index.mainUnit == filters.department) {
				arr.push(index);
			}
		});
	} else {
		arr = data;
	}
	return arr;
}
//过滤store
function select(store) {
	return {
		da: store,
		searchs: store.search,
		Data: filter(store.search, store.data.stadium, store.search.type)
	};
}
exports.default = (0, _reactRedux.connect)(select)(StadiumList);

//# sourceMappingURL=StadiumList.js.map