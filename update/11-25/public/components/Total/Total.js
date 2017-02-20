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

var _leftsidebar = require("../../lib/leftsidebar");

var _leftsidebar2 = _interopRequireDefault(_leftsidebar);

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
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Total/Total.jsx",
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Total/Total.jsx",
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
		var _ref;

		_classCallCheck(this, TotalTableInfo);

		for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
			arg[_key] = arguments[_key];
		}

		return _possibleConstructorReturn(this, (_ref = TotalTableInfo.__proto__ || Object.getPrototypeOf(TotalTableInfo)).call.apply(_ref, [this].concat(arg)));
	}

	_createClass(TotalTableInfo, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			(0, _leftsidebar2.default)();
		}
	}, {
		key: "render",
		value: function render() {
			return _react3.default.createElement(
				"div",
				{ className: "content clearfix" },
				_react3.default.createElement(
					"div",
					{ className: "sidebar pull-left" },
					_react3.default.createElement(
						"ul",
						{ id: "accordion", className: "nav nav-sidebar accordion open" },
						_react3.default.createElement(
							"li",
							{ className: "open" },
							_react3.default.createElement(
								_reactRouter.Link,
								{ to: "/users/Total", onlyActiveOnIndex: true, className: "link" },
								"\u5F00\u653E\u4FE1\u606F",
								_react3.default.createElement("span", { className: "pull-right glyphicon glyphicon-menu-right", "aria-hidden": "true" })
							),
							_react3.default.createElement(
								"ul",
								{ className: "nav submenu", style: { display: 'block' } },
								_react3.default.createElement(
									"li",
									null,
									_react3.default.createElement(
										_reactRouter.Link,
										{ to: "/users/Total/11", activeClassName: "cur" },
										"\u5F00\u653E\u60C5\u51B5"
									)
								)
							)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								_reactRouter.Link,
								{ to: "/users/Total/21", className: "link" },
								"\u7EFC\u5408\u6548\u76CA",
								_react3.default.createElement("span", { className: "pull-right glyphicon glyphicon-menu-right", "aria-hidden": "true" })
							),
							_react3.default.createElement(
								"ul",
								{ className: "nav submenu" },
								_react3.default.createElement(
									"li",
									null,
									_react3.default.createElement(
										_reactRouter.Link,
										{ to: "/users/Total/21", activeClassName: "cur" },
										"\u6548\u76CA\u5217\u8868"
									)
								)
							)
						),
						_react3.default.createElement(
							"li",
							null,
							_react3.default.createElement(
								_reactRouter.Link,
								{ to: "/users/Total/31", className: "link" },
								"\u7279\u8272\u52A0\u5206",
								_react3.default.createElement("span", { className: "pull-right glyphicon glyphicon-menu-right", "aria-hidden": "true" })
							)
						)
					)
				),
				_react3.default.createElement(
					"div",
					{ className: "rightContent pull-left" },
					this.props.children
				)
			);
		}
	}]);

	return TotalTableInfo;
}(_react3.default.Component));

exports.default = TotalTableInfo;
;

//# sourceMappingURL=Total.js.map