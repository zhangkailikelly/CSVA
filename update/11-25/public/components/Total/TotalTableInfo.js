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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
				TotalTableInfo: {
								displayName: "TotalTableInfo"
				}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
				filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Total/TotalTableInfo.jsx",
				components: _components,
				locals: [module],
				imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
				filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Total/TotalTableInfo.jsx",
				components: _components,
				locals: [],
				imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
				return function (Component) {
								return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
				};
}

var TotalTableInfo = _wrapComponent("TotalTableInfo")(function (_React$Component) {
				_inherits(TotalTableInfo, _React$Component);

				function TotalTableInfo() {
								_classCallCheck(this, TotalTableInfo);

								return _possibleConstructorReturn(this, (TotalTableInfo.__proto__ || Object.getPrototypeOf(TotalTableInfo)).call(this));
				}

				_createClass(TotalTableInfo, [{
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
																												" \u5F00\u653E\u4FE1\u606F "
																								),
																								" > ",
																								_react3.default.createElement(
																												"label",
																												null,
																												" \u5F00\u653E\u60C5\u51B5 "
																								)
																				)
																),
																_react3.default.createElement(
																				"div",
																				{ id: "stadiumWrap", className: "MT table-responsive normal mLR tbodyLeft" },
																				_react3.default.createElement(
																								"table",
																								{ className: "table tableColor tablebor NoMB", id: "totalTable" },
																								_react3.default.createElement(
																												"thead",
																												null,
																												_react3.default.createElement(
																																"tr",
																																null,
																																_react3.default.createElement(
																																				"td",
																																				{ colSpan: "2" },
																																				"\u8BC4\u4EF7\u6307\u6807"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u8BC4\u4EF7\u5185\u5BB9"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u6570\u503C"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u64CD\u4F5C"
																																)
																												)
																								),
																								_react3.default.createElement(
																												"tbody",
																												null,
																												_react3.default.createElement(
																																"tr",
																																null,
																																_react3.default.createElement(
																																				"td",
																																				{ rowSpan: "3", align: "center", valign: "middle" },
																																				"\u573A\u5730\u5F00\u653E"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"*1.1\u5F00\u653E\u9762\u79EF"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u4F53\u80B2\u573A\u9986\u548C\u533A\u57DF\u5185\u7684\u516C\u5171\u4F53\u80B2\u573A\u5730\u3001\u8BBE\u65BD\u7528\u4E8E\u63D0\u4F9B\u4F53\u80B2\u53CA\u76F8\u5173\u670D\u52A1\u7684\u9762\u79EF\u5360\u6BD4"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement("span", { id: "area" })
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement(
																																								_reactRouter.Link,
																																								{ to: "/users/Total/12" },
																																								"\u67E5\u770B\u6570\u636E"
																																				)
																																)
																												),
																												_react3.default.createElement(
																																"tr",
																																null,
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"*1.2 \u5F00\u653E\u5929\u6570"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u4F53\u80B2\u573A\u9986\u548C\u533A\u57DF\u5185\u7684\u573A\u5730\u3001\u8BBE\u65BD\u5168\u5E74\u5F00\u653E\u5929\u6570"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement("span", { id: "dailyOpenDays" }),
																																				"\u5929"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement(
																																								_reactRouter.Link,
																																								{ to: "/users/Total/13" },
																																								"\u67E5\u770B\u6570\u636E"
																																				)
																																)
																												),
																												_react3.default.createElement(
																																"tr",
																																null,
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"*1.3 \u5F00\u653E\u65F6\u95F4"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u4F53\u80B2\u573A\u9986\u3001\u914D\u5957\u8BBE\u65BD\u3001\u6237\u5916\u573A\u5730\u6BCF\u5468\u5F00\u653E\u65F6\u95F4"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement("span", { id: "dailyHours" }),
																																				"\u5C0F\u65F6"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement(
																																								_reactRouter.Link,
																																								{ to: "/users/Total/14" },
																																								"\u67E5\u770B\u6570\u636E"
																																				)
																																)
																												),
																												_react3.default.createElement(
																																"tr",
																																null,
																																_react3.default.createElement(
																																				"td",
																																				{ rowSpan: "3", align: "center", valign: "middle" },
																																				"\u6D3B\u52A8\u627F\u8F7D"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"*2.1 \u4F53\u80B2\u8D5B\u4E8B"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u4E3E\u529E\u6D3B\u627F\u529E\u4F53\u80B2\u8D5B\u4E8B\u6570\u91CF"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement("span", { id: "activeGame1" }),
																																				"\u6B21"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement(
																																								_reactRouter.Link,
																																								{ to: "/users/Total/15" },
																																								"\u67E5\u770B\u6570\u636E"
																																				)
																																)
																												),
																												_react3.default.createElement(
																																"tr",
																																null,
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"*2.2 \u7FA4\u4F53\u6D3B\u52A8"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u4E3E\u529E\u6216\u627F\u529E\u7FA4\u4F53\u6027\u4F53\u80B2\u6D3B\u52A8\uFF08\u542B\u7FA4\u4F17\u6027\u4F53\u80B2\u8D5B\u4E8B\uFF09\u7684\u6570\u91CF"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement("span", { id: "activeGame2" }),
																																				"\u6B21"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement(
																																								_reactRouter.Link,
																																								{ to: "/users/Total/16" },
																																								"\u67E5\u770B\u6570\u636E"
																																				)
																																)
																												),
																												_react3.default.createElement(
																																"tr",
																																null,
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"*2.3 \u5176\u4ED6\u6587\u4F53\u53CA\u76F8\u5173\u6D3B\u52A8"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u4E3E\u529E\u6216\u627F\u529E\u6587\u5316\u6D3B\u52A8\u3001\u6587\u827A\u6F14\u51FA\u3001\u6587\u4F53\u8BB2\u5EA7\u3001\u6587\u4F53\u5C55\u89C8\u7B49\u6D3B\u52A8\u7684\u6570\u91CF"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement("span", { id: "activeGame3" }),
																																				"\u6B21"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement(
																																								_reactRouter.Link,
																																								{ to: "/users/Total/17" },
																																								"\u67E5\u770B\u6570\u636E"
																																				)
																																)
																												),
																												_react3.default.createElement(
																																"tr",
																																null,
																																_react3.default.createElement(
																																				"td",
																																				{ rowSpan: "3", align: "center", valign: "middle" },
																																				"\u4F53\u80B2\u670D\u52A1"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"*3.1 \u4F53\u80B2\u57F9\u8BAD"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u4F53\u80B2\u57F9\u8BAD\u7684\u4EBA\u6B21"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement("span", { id: "service1" }),
																																				"\u4EBA\u6B21"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement(
																																								_reactRouter.Link,
																																								{ to: "/users/Total/18" },
																																								"\u67E5\u770B\u6570\u636E"
																																				)
																																)
																												),
																												_react3.default.createElement(
																																"tr",
																																null,
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"*3.2 \u8FD0\u52A8\u5065\u8EAB\u6307\u5BFC"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u56FD\u6C11\u4F53\u8D28\u6D4B\u8BD5\u3001\u8FD0\u52A8\u80FD\u529B\u8BC4\u4F30\u548C\u79D1\u5B66\u5065\u8EAB\u6307\u5BFC\u7684\u4EBA\u6B21"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement("span", { id: "service2" }),
																																				"\u4EBA\u6B21"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement(
																																								_reactRouter.Link,
																																								{ to: "/users/Total/19" },
																																								"\u67E5\u770B\u6570\u636E"
																																				)
																																)
																												),
																												_react3.default.createElement(
																																"tr",
																																null,
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"*3.3 \u4E13\u4E1A\u8BAD\u7EC3"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				"\u627F\u63A5\u4E13\u4E1A\u8FD0\u52A8\u961F\u8BAD\u7EC3\u8BAD\u7EC3\u7D2F\u8BA1\u5929\u6570"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement("span", { id: "service3" }),
																																				"\u5929"
																																),
																																_react3.default.createElement(
																																				"td",
																																				null,
																																				_react3.default.createElement(
																																								_reactRouter.Link,
																																								{ to: "/users/Total/20" },
																																								"\u67E5\u770B\u6570\u636E"
																																				)
																																)
																												)
																								)
																				)
																)
												);
								}
				}]);

				return TotalTableInfo;
}(_react3.default.Component));

exports.default = TotalTableInfo;
;

//# sourceMappingURL=TotalTableInfo.js.map