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

var _reactRedux = require("react-redux");

var _actions = require("../../redux/actions/actions.js");

var action = _interopRequireWildcard(_actions);

var _SF = require("../../images/SF1.png");

var _SF2 = _interopRequireDefault(_SF);

var _SF3 = require("../../images/SF2.png");

var _SF4 = _interopRequireDefault(_SF3);

var _SF5 = require("../../images/SF3.png");

var _SF6 = _interopRequireDefault(_SF5);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	StadiumDataCount: {
		displayName: "StadiumDataCount"
	}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Stadium/StadiumDataCount.jsx",
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: "C:/Users/kellyZhang/Desktop/CSVA/public/components/Stadium/StadiumDataCount.jsx",
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var StadiumDataCount = _wrapComponent("StadiumDataCount")(function (_React$Component) {
	_inherits(StadiumDataCount, _React$Component);

	function StadiumDataCount() {
		_classCallCheck(this, StadiumDataCount);

		return _possibleConstructorReturn(this, (StadiumDataCount.__proto__ || Object.getPrototypeOf(StadiumDataCount)).call(this));
	}

	_createClass(StadiumDataCount, [{
		key: "componentDidMount",
		value: function componentDidMount() {
			var _props = this.props,
			    dispatch = _props.dispatch,
			    id = _props.id;

			console.log(id);
			// $('.mydate').datetimepicker({
			// 	 format: 'yyyy-mm-dd',
			// 	 language:  'zh-CN',
			// 	 minView: 2,
			// 	 autoclose:true
			// 	});
			dispatch(action.costList());
		}
	}, {
		key: "searchBtn",
		value: function searchBtn() {
			var dispatch = this.props.dispatch;

			var filters = {
				startTime: this.refs.startTime.value,
				endTime: this.refs.endTime.value,
				tel: this.refs.tel.value,
				priceType: this.refs.priceType.value
			};
			dispatch(action.search({ sDataCount: filters }));
		}
	}, {
		key: "render",
		value: function render() {
			var _this2 = this;

			var _props2 = this.props,
			    dispatch = _props2.dispatch,
			    tableData = _props2.tableData,
			    searchContent = _props2.searchContent;

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
							"span",
							null,
							"\u573A\u9986\u5217\u8868"
						),
						" >",
						_react3.default.createElement(
							"span",
							null,
							" \u514D\u8D39\u4F4E\u6536\u8D39\u6570\u636E "
						)
					)
				),
				_react3.default.createElement(
					"div",
					{ className: "topSearch RightInfo mLR" },
					_react3.default.createElement(
						"form",
						{ className: "clearfix", id: "stadiumDataCountForm" },
						_react3.default.createElement(
							"div",
							{ className: "pull-left", style: { marginRight: '50px' } },
							_react3.default.createElement(
								"div",
								{ className: "form-group input-group-sm" },
								_react3.default.createElement(
									"label",
									null,
									"\u8D77\u59CB\u65F6\u95F4:"
								),
								_react3.default.createElement("input", { ref: "startTime", type: "text", className: "leastInput searchInput mydate" })
							),
							_react3.default.createElement(
								"div",
								{ className: "form-group input-group-sm clearfix" },
								_react3.default.createElement(
									"label",
									{ className: "pull-left", style: { marginTop: '6px' } },
									"\u4F18\u60E0\u7C7B\u578B:"
								),
								_react3.default.createElement(
									"select",
									{ ref: "priceType", className: "pull-left", name: "sdcType" },
									_react3.default.createElement(
										"option",
										{ value: "0" },
										"\u4E0D\u9650"
									),
									_react3.default.createElement(
										"option",
										{ value: "1" },
										"\u514D\u8D39"
									),
									_react3.default.createElement(
										"option",
										{ value: "2" },
										"\u4F4E\u6536\u8D39"
									)
								)
							)
						),
						_react3.default.createElement(
							"div",
							{ className: "pull-left" },
							_react3.default.createElement(
								"div",
								{ className: "form-group input-group-sm" },
								_react3.default.createElement(
									"label",
									null,
									"\u622A\u6B62\u65F6\u95F4:"
								),
								_react3.default.createElement("input", { ref: "endTime", type: "text", className: "leastInput searchInput mydate" })
							),
							_react3.default.createElement(
								"div",
								{ className: "form-group input-group-sm" },
								_react3.default.createElement(
									"label",
									null,
									"\u624B\u673A\u53F7\u7801:"
								),
								_react3.default.createElement("input", { ref: "tel", type: "text", className: "leastInput" })
							)
						),
						_react3.default.createElement(
							"button",
							{ onClick: function onClick() {
									_this2.searchBtn();
								}, type: "button", className: "blueBut", id: "CountSearchBtn" },
							_react3.default.createElement("span", { className: "glyphicon glyphicon-search", "aria-hidden": "true" }),
							"\u641C \u7D22"
						)
					)
				),
				_react3.default.createElement(
					"div",
					{ className: "SfCount" },
					_react3.default.createElement(
						"p",
						null,
						"\u4F4E\u6536\u8D39\u6570\u636E\u7EDF\u8BA1"
					),
					_react3.default.createElement(
						"ul",
						null,
						_react3.default.createElement(
							"li",
							{ className: "clearfixs" },
							_react3.default.createElement("img", { className: "pull-left", src: _SF2.default }),
							_react3.default.createElement(
								"div",
								{ className: "pull-left" },
								_react3.default.createElement(
									"span",
									null,
									"\u4F18\u60E0\u4EBA\u6B21"
								),
								_react3.default.createElement(
									"em",
									null,
									statistics(tableData).count
								)
							)
						),
						_react3.default.createElement(
							"li",
							{ className: "clearfixs" },
							_react3.default.createElement("img", { className: "pull-left", src: _SF4.default }),
							_react3.default.createElement(
								"div",
								{ className: "pull-left" },
								_react3.default.createElement(
									"span",
									null,
									"\u514D\u8D39\u4EBA\u6B21"
								),
								_react3.default.createElement(
									"em",
									null,
									"90"
								)
							)
						),
						_react3.default.createElement(
							"li",
							{ className: "clearfixs" },
							_react3.default.createElement("img", { className: "pull-left", src: _SF6.default }),
							_react3.default.createElement(
								"div",
								{ className: "pull-left" },
								_react3.default.createElement(
									"span",
									null,
									"\u4F18\u60E0\u91D1\u989D"
								),
								_react3.default.createElement(
									"em",
									null,
									statistics(tableData).price
								)
							)
						)
					)
				),
				_react3.default.createElement(
					"div",
					{ id: "CountWrap", className: "table-responsive normal mLR tbodyLeft", style: { marginTop: "20px" } },
					_react3.default.createElement(
						"table",
						{ className: "table tableColor tablebor NoMB", id: "stadiumTable" },
						_react3.default.createElement(
							"thead",
							{ className: "tabelH" },
							_react3.default.createElement(
								"tr",
								null,
								_react3.default.createElement(
									"th",
									{ style: { width: '125px' } },
									"\u7528\u6237\u540D\u79F0"
								),
								_react3.default.createElement(
									"th",
									{ style: { width: '220px' } },
									"\u8EAB\u4EFD\u8BC1\u53F7\u7801"
								),
								_react3.default.createElement(
									"th",
									{ style: { width: '130px' } },
									"\u8FD0\u52A8\u7C7B\u578B"
								),
								_react3.default.createElement(
									"th",
									{ style: { width: '150px' } },
									"\u65E5\u671F"
								),
								_react3.default.createElement(
									"th",
									{ style: { width: '80px' } },
									"\u6298\u6263"
								),
								_react3.default.createElement(
									"th",
									{ style: { width: '130px' } },
									"\u4F18\u60E0\u91D1\u989D"
								),
								_react3.default.createElement(
									"th",
									{ style: { width: '130px' } },
									"\u4F18\u60E0\u4EBA\u6B21"
								)
							)
						),
						_react3.default.createElement(
							"tbody",
							null,
							tableData.length == 0 ? _react3.default.createElement(
								"tr",
								null,
								_react3.default.createElement(
									"td",
									null,
									"\u6CA1\u6709\u7B26\u5408\u6761\u4EF6\u7684\u6570\u636E"
								)
							) : tableData.map(function (index, i) {
								return _react3.default.createElement(
									"tr",
									{ key: i },
									_react3.default.createElement(
										"td",
										{ style: { width: '125px' } },
										index.name
									),
									_react3.default.createElement(
										"td",
										{ style: { width: '220px' } },
										index.cardID
									),
									_react3.default.createElement(
										"td",
										{ style: { width: '130px' } },
										index.sports
									),
									_react3.default.createElement(
										"td",
										{ style: { width: '150px' } },
										index.day
									),
									_react3.default.createElement(
										"td",
										{ style: { width: '80px' } },
										index.discount
									),
									_react3.default.createElement(
										"td",
										{ style: { width: '130px' } },
										index.priceType
									),
									_react3.default.createElement(
										"td",
										{ style: { width: '130px' } },
										index.discountAmount
									)
								);
							})
						)
					)
				)
			);
		}
	}]);

	return StadiumDataCount;
}(_react3.default.Component));

;
/**
 * 低收费数据统计
 * @param  {[type]} data 统计的数据表
 * @return {[type]} price 优惠金额
 *                  count 优惠人次
 */
function statistics(data) {
	var obj = {
		price: 0,
		count: 0
	};
	data.map(function (index) {
		obj.price += index.priceType;
		obj.count += index.count;
	});
	return obj;
}
/**
 * 过滤
 * 	tableData：表格展示数据
 * 	searchContent：搜索条件
 */

/**
 * 过滤函数
 * 
 */
function filter(data, filters) {
	var arr = [];
	if (filters.type === "search") {
		data.map(function (index) {
			if (index.priceType == filters.sDataCount.priceType && index.day == filters.sDataCount.startTime && index.phone == filters.sDataCount.tel) {
				arr.push(index);
			}
		});
		return arr;
	}
	return data;
}
function select(store) {
	return {
		tableData: filter(store.data.StadiumDataCount == undefined ? [] : store.data.StadiumDataCount, store.search),
		searchContent: store.search,
		id: store.lookData.id
	};
}
exports.default = (0, _reactRedux.connect)(select)(StadiumDataCount);

//# sourceMappingURL=StadiumDataCount.js.map