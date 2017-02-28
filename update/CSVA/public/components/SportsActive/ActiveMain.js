'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('C:\\Users\\kellyZhang\\Desktop\\CSVA\\public\\node_modules\\redbox-react\\lib\\index.js');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('C:\\Users\\kellyZhang\\Desktop\\CSVA\\public\\node_modules\\react-transform-catch-errors\\lib\\index.js');

var _index4 = _interopRequireDefault(_index3);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _index5 = require('C:\\Users\\kellyZhang\\Desktop\\CSVA\\public\\node_modules\\react-transform-hmr\\lib\\index.js');

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _reactRedux = require('react-redux');

var _actions = require('../../redux/actions/actions.js');

var action = _interopRequireWildcard(_actions);

var _TablePage = require('../TablePage');

var _TablePage2 = _interopRequireDefault(_TablePage);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	GamesMain: {
		displayName: 'GamesMain'
	}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/SportsActive/ActiveMain.jsx',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/SportsActive/ActiveMain.jsx',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var GamesMain = _wrapComponent('GamesMain')(function (_React$Component) {
	_inherits(GamesMain, _React$Component);

	function GamesMain() {
		_classCallCheck(this, GamesMain);

		return _possibleConstructorReturn(this, (GamesMain.__proto__ || Object.getPrototypeOf(GamesMain)).call(this));
	}

	_createClass(GamesMain, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props;
			var dispatch = _props.dispatch;
			var id = _props.id;

			dispatch(action.getActiveMainData(id));
		}
	}, {
		key: 'render',
		value: function render() {
			var data = this.props.data;

			return _react3.default.createElement(
				'div',
				null,
				_react3.default.createElement(
					'div',
					{ className: 'location' },
					_react3.default.createElement(
						'h3',
						null,
						'>',
						_react3.default.createElement(
							'span',
							null,
							'\u7FA4\u4F53\u6D3B\u52A8'
						)
					)
				),
				_react3.default.createElement(
					'div',
					{ className: 'topSearch RightInfo  mLR' },
					_react3.default.createElement(
						'form',
						{ className: 'form-inline', id: 'gameSearchForm' },
						_react3.default.createElement(
							'div',
							{ className: 'form-group' },
							_react3.default.createElement(
								'label',
								null,
								'\u6D3B\u52A8\u540D\u79F0'
							),
							_react3.default.createElement('input', { type: 'text', className: 'form-control', id: 'gameName', placeholder: '\u6D3B\u52A8\u540D\u79F0' })
						),
						_react3.default.createElement(
							'div',
							{ className: 'form-group' },
							_react3.default.createElement(
								'label',
								null,
								'\u4E3B\u529E\u5355\u4F4D'
							),
							_react3.default.createElement('input', { type: 'text', className: 'form-control', id: 'hostUnit', placeholder: '\u4E3B\u529E\u5355\u4F4D' })
						),
						_react3.default.createElement(
							'div',
							{ className: 'form-group' },
							_react3.default.createElement(
								'label',
								null,
								'\u627F\u529E\u5355\u4F4D'
							),
							_react3.default.createElement('input', { type: 'text', className: 'form-control', id: 'undertakeUnit', placeholder: '\u627F\u529E\u5355\u4F4D' })
						),
						_react3.default.createElement(
							'button',
							{ type: 'button', className: 'btn btn-default', id: 'gameSearchBtn' },
							_react3.default.createElement(
								'a',
								null,
								'\u641C\u7D22'
							)
						)
					)
				),
				_react3.default.createElement(
					'div',
					{ className: 'table-responsive normal mLR tbodyLeft', style: { marginTop: "20px" } },
					_react3.default.createElement(
						'table',
						{ className: 'table tableColor tablebor NoMB' },
						_react3.default.createElement(
							'thead',
							{ className: 'tabelH' },
							_react3.default.createElement(
								'tr',
								null,
								_react3.default.createElement(
									'th',
									{ style: { width: '197px' } },
									'\u6D3B\u52A8\u540D\u79F0'
								),
								_react3.default.createElement(
									'th',
									{ style: { width: '206px' } },
									'\u8D77\u59CB\u65F6\u95F4'
								),
								_react3.default.createElement(
									'th',
									{ style: { width: '206px' } },
									'\u7ED3\u675F\u65F6\u95F4'
								),
								_react3.default.createElement(
									'th',
									{ style: { width: '195px' } },
									'\u89C2\u4F17\u4EBA\u6570'
								),
								_react3.default.createElement(
									'th',
									{ style: { width: '142px' } },
									'\u64CD\u4F5C'
								)
							)
						),
						_react3.default.createElement(
							'tbody',
							null,
							data.length == 0 ? _react3.default.createElement(
								'tr',
								null,
								_react3.default.createElement(
									'td',
									{ style: { width: '945px' } },
									'\u6CA1\u6709\u6570\u636E'
								)
							) : data.map(function (index, i) {
								return _react3.default.createElement(
									'tr',
									{ key: i },
									_react3.default.createElement(
										'td',
										{ style: { width: '197px' } },
										index.name
									),
									_react3.default.createElement(
										'td',
										{ style: { width: '206px' } },
										index.startDate
									),
									_react3.default.createElement(
										'td',
										{ style: { width: '206px' } },
										index.endDate
									),
									_react3.default.createElement(
										'td',
										{ style: { width: '195px' } },
										index.number
									),
									_react3.default.createElement(
										'td',
										{ style: { width: '142px' } },
										_react3.default.createElement(
											'button',
											{ className: 'btn btn-warning btn-xs delBtn' },
											_react3.default.createElement(
												'a',
												{
													name: '57eb3208f2a6e3c946377cc1' },
												'\u5220\u9664'
											)
										),
										_react3.default.createElement(
											'button',
											{ className: 'btn btn-info btn-xs detBtn' },
											_react3.default.createElement(
												'a',
												{
													name: '57eb3208f2a6e3c946377cc1' },
												'\u67E5\u770B'
											)
										)
									)
								);
							})
						)
					),
					_react3.default.createElement(_TablePage2.default, null)
				)
			);
		}
	}]);

	return GamesMain;
}(_react3.default.Component));

;
function filter(store) {
	return {
		data: store.data.groupActivity == undefined ? [] : store.data.groupActivity,
		id: store.lookData.id
	};
}
exports.default = (0, _reactRedux.connect)(filter)(GamesMain);

//# sourceMappingURL=ActiveMain.js.map