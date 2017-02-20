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

var _actions = require("../../redux/actions/actions.js");

var action = _interopRequireWildcard(_actions);

var _reactRedux = require("react-redux");

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	Rule: {
		displayName: "Rule"
	}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Rule/Rule.jsx",
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Rule/Rule.jsx",
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var Rule = _wrapComponent("Rule")(function (_React$Component) {
	_inherits(Rule, _React$Component);

	function Rule() {
		_classCallCheck(this, Rule);

		return _possibleConstructorReturn(this, (Rule.__proto__ || Object.getPrototypeOf(Rule)).call(this));
	}

	_createClass(Rule, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _props = this.props;
			var dispatch = _props.dispatch;
			var tableData = _props.tableData;

			dispatch(action.getRuleListData());
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
						{ className: "nav nav-sidebar", id: "side-menu" },
						_react3.default.createElement(
							"li",
							{ className: "nav-header" },
							_react3.default.createElement(
								_reactRouter.Link,
								{ to: "/manage/Rule", onlyActiveOnIndex: true, activeClassName: "cur" },
								"\u8BBE\u7F6E\u8BC4\u5206\u89C4\u5219",
								_react3.default.createElement("span", { className: "pull-right glyphicon glyphicon-menu-right", "aria-hidden": "true" })
							)
						),
						_react3.default.createElement(
							"li",
							{ className: "nav-header" },
							_react3.default.createElement(
								_reactRouter.Link,
								{ to: "/manage/Rule/2", activeClassName: "cur" },
								"\u8BBE\u7F6E\u8BC4\u5206\u5217\u8868",
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

	return Rule;
}(_react3.default.Component));

;
exports.default = (0, _reactRedux.connect)()(Rule);

//# sourceMappingURL=Rule.js.map