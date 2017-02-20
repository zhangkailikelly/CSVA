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
	benefitTableInfo: {
		displayName: "benefitTableInfo"
	}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Profit/benefitTableInfo.jsx",
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Profit/benefitTableInfo.jsx",
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var benefitTableInfo = _wrapComponent("benefitTableInfo")(function (_React$Component) {
	_inherits(benefitTableInfo, _React$Component);

	function benefitTableInfo() {
		_classCallCheck(this, benefitTableInfo);

		return _possibleConstructorReturn(this, (benefitTableInfo.__proto__ || Object.getPrototypeOf(benefitTableInfo)).call(this));
	}

	_createClass(benefitTableInfo, [{
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
						" ",
						_react3.default.createElement(
							"label",
							null,
							" \u7EFC\u5408\u6548\u76CA "
						),
						" > ",
						_react3.default.createElement(
							"label",
							null,
							"\u6548\u76CA\u5217\u8868"
						)
					)
				),
				_react3.default.createElement(
					"div",
					{ id: "cheapInfoWrap", className: "table-responsive normal tbodyLeft mLR" },
					_react3.default.createElement(
						"table",
						{ className: "table tableColor tablebor NoMB MT ", id: "benefitTable" },
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
									{ rowSpan: "4", align: "center", valign: "middle" },
									"\u8FD0\u8425\u6548\u76CA"
								),
								_react3.default.createElement(
									"td",
									null,
									"*1.1\u63A5\u5F85\u603B\u91CF"
								),
								_react3.default.createElement(
									"td",
									null,
									"\u6BCF\u4E07\u5E73\u7C73\u9762\u79EF\uFF08\u573A\u9986\u56ED\u533A\u7528\u5730\u9762\u79EF\uFF09\u5168\u5E74\u63A5\u5F85\u4EBA\u6B21\uFF08\u5305\u62EC\u5065\u8EAB\u3001\u57F9\u8BAD\u3001\u53C2\u4E0E\u6216\u89C2\u770B\u8D5B\u4E8B\u6D3B\u52A8\u53CA\u6587\u827A\u6F14\u51FA\uFF09"
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										"span",
										null,
										"40%"
									)
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										_reactRouter.Link,
										{ to: "/users/Total/22/" },
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
									"*1.2 \u63A5\u5F85\u4EBA\u6B21\u589E\u957F"
								),
								_react3.default.createElement(
									"td",
									null,
									"\u63A5\u5F85\u4EBA\u6B21\u5E74\u589E\u957F\u7387\uFF08\u672C\u5E74\u5EA6\u4E0E\u4E0A\u5E74\u5EA6\u76F8\u6BD4\uFF09"
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										"span",
										null,
										"40%"
									)
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										_reactRouter.Link,
										{ to: "/users/Total/23/" },
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
									"*1.3 \u6536\u652F\u6BD4\u4F8B"
								),
								_react3.default.createElement(
									"td",
									null,
									"\u7ECF\u8425\u6536\u5165\u4E0E\u8FD0\u8425\u652F\u51FA\u7684\u6BD4\u503C"
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										"span",
										null,
										"40%"
									)
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										_reactRouter.Link,
										{ to: "/users/Total/24/" },
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
									"*1.4 \u6536\u5165\u589E\u957F"
								),
								_react3.default.createElement(
									"td",
									null,
									"\u573A\u9986\u7ECF\u8425\u6536\u5165\u5E74\u589E\u957F\u7387\uFF08\u672C\u5E74\u5EA6\u4E0E\u4E0A\u5E74\u5EA6\u76F8\u6BD4\uFF09"
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										"span",
										null,
										"40%"
									)
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										_reactRouter.Link,
										{ to: "/users/Total/25/" },
										"\u67E5\u770B\u6570\u636E"
									)
								)
							),
							_react3.default.createElement(
								"tr",
								null,
								_react3.default.createElement(
									"td",
									{ rowSpan: "2", align: "center", valign: "middle" },
									"\u793E\u4F1A\u5F71\u54CD"
								),
								_react3.default.createElement(
									"td",
									null,
									"*2.1 \u516C\u76CA\u6D3B\u52A8"
								),
								_react3.default.createElement(
									"td",
									null,
									"\u514D\u8D39\u4E3E\u529E\u6216\u627F\u529E\u4F53\u80B2\u8D5B\u4E8B\u3001\u7FA4\u4F53\u6D3B\u52A8\u3001\u4F53\u80B2\u5065\u8EAB\u6280\u80FD\u57F9\u8BAD\u3001\u56FD\u6C11\u4F53\u8D28\u6D4B\u8BD5\u53CA\u5176\u4ED6\u6587\u4F53\u6D3B\u52A8\u53C2\u4E0E\u6216\u670D\u52A1\u4EBA\u6B21"
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										"span",
										null,
										"40%"
									)
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										_reactRouter.Link,
										{ to: "/users/Total/26/" },
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
									"*2.2 \u6EE1\u610F\u5EA6"
								),
								_react3.default.createElement(
									"td",
									null,
									"\u987E\u5BA2\u6EE1\u610F\u5EA6"
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										"span",
										null,
										"40%"
									)
								),
								_react3.default.createElement(
									"td",
									null,
									_react3.default.createElement(
										_reactRouter.Link,
										{ to: "/users/Total/27/" },
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

	return benefitTableInfo;
}(_react3.default.Component));

exports.default = benefitTableInfo;
;

//# sourceMappingURL=benefitTableInfo.js.map