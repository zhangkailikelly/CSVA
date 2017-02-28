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
				TotalArea: {
								displayName: "TotalArea"
				}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
				filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Total/TotalArea.jsx",
				components: _components,
				locals: [module],
				imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
				filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Total/TotalArea.jsx",
				components: _components,
				locals: [],
				imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
				return function (Component) {
								return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
				};
}

var TotalArea = _wrapComponent("TotalArea")(function (_React$Component) {
				_inherits(TotalArea, _React$Component);

				function TotalArea() {
								_classCallCheck(this, TotalArea);

								return _possibleConstructorReturn(this, (TotalArea.__proto__ || Object.getPrototypeOf(TotalArea)).call(this));
				}

				_createClass(TotalArea, [{
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
																												" \u5F00\u653E\u9762\u79EF "
																								)
																				)
																),
																_react3.default.createElement(
																				"form",
																				{ className: "form-horizontal", id: "totalAreaForm", onSubmit: "return totalAreaAdd()" },
																				_react3.default.createElement(
																								"div",
																								{ className: "form-group MT" },
																								_react3.default.createElement(
																												"label",
																												{ className: "col-sm-2 control-label" },
																												"\u5F00\u653E\u9762\u79EF"
																								),
																								_react3.default.createElement(
																												"div",
																												{ className: "col-sm-4" },
																												_react3.default.createElement("input", { type: "number", min: "0", required: "", value: "", id: "total_openArea", name: "total[openArea]", className: "form-control" })
																								),
																								_react3.default.createElement(
																												"label",
																												{ className: "col-sm-1 control-label" },
																												"\u5E73\u65B9\u7C73"
																								)
																				),
																				_react3.default.createElement(
																								"div",
																								{ className: "form-group" },
																								_react3.default.createElement(
																												"label",
																												{ className: "col-sm-2 control-label" },
																												"\u4F53\u80B2\u573A\u9986\u9762\u79EF"
																								),
																								_react3.default.createElement(
																												"div",
																												{ className: "col-sm-4" },
																												_react3.default.createElement("input", { type: "text", min: "0", readOnly: "readonly", id: "stadium_stadiumArea", name: "stadium[stadiumArea]", className: "form-control" })
																								),
																								_react3.default.createElement(
																												"label",
																												{ className: "col-sm-1 control-label" },
																												"\u5E73\u65B9\u7C73"
																								)
																				),
																				_react3.default.createElement(
																								"div",
																								{ className: "form-group" },
																								_react3.default.createElement(
																												"label",
																												{ className: "col-sm-2 control-label" },
																												"\u5360\u6BD4"
																								),
																								_react3.default.createElement(
																												"div",
																												{ className: "col-sm-4" },
																												_react3.default.createElement("input", { type: "text", required: "", id: "zanbi", readonly: "readonly", className: "form-control" })
																								)
																				),
																				_react3.default.createElement(
																								"div",
																								{ className: "form-group" },
																								_react3.default.createElement(
																												"div",
																												{ className: "col-sm-offset-2 col-sm-10" },
																												_react3.default.createElement(
																																"button",
																																{ type: "submit", id: "totalAreaBtn", className: "btn btn-default" },
																																"\u786E\u5B9A"
																												)
																								)
																				)
																)
												);
								}
				}]);

				return TotalArea;
}(_react3.default.Component));

exports.default = TotalArea;
;

//# sourceMappingURL=TotalArea.js.map