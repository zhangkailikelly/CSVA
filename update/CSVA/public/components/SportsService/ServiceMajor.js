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
	ServiceMajor: {
		displayName: 'ServiceMajor'
	}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/SportsService/ServiceMajor.jsx',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/SportsService/ServiceMajor.jsx',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var ServiceMajor = _wrapComponent('ServiceMajor')(function (_React$Component) {
	_inherits(ServiceMajor, _React$Component);

	function ServiceMajor() {
		_classCallCheck(this, ServiceMajor);

		return _possibleConstructorReturn(this, (ServiceMajor.__proto__ || Object.getPrototypeOf(ServiceMajor)).call(this));
	}

	_createClass(ServiceMajor, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var _props = this.props;
			var dispatch = _props.dispatch;
			var id = _props.id;

			dispatch(action.getMajorData(id));
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
							' \u8FD0\u52A8\u5065\u8EAB\u6307\u5BFC\u5217\u8868 '
						)
					)
				),
				_react3.default.createElement(
					'div',
					{ className: 'topSearch RightInfo mLR MB' },
					_react3.default.createElement(
						'form',
						{ className: 'form-inline', id: 'gameSearchForm' },
						_react3.default.createElement(
							'div',
							{ className: 'form-group' },
							_react3.default.createElement(
								'label',
								{ style: { width: "100px" } },
								'\u8FD0\u52A8\u961F(\u5458)\u540D\u5B57'
							),
							_react3.default.createElement('input', { type: 'text', className: 'form-control', placeholder: '\u8FD0\u52A8\u961F(\u5458)\u540D\u5B57' })
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
						{ className: 'table tableColor tablebor NoMB', id: 'gameTable' },
						_react3.default.createElement(
							'thead',
							{ className: 'tabelH' },
							_react3.default.createElement(
								'tr',
								null,
								_react3.default.createElement(
									'th',
									{ style: { width: '170px' } },
									'\u57F9\u8BAD\u540D\u79F0'
								),
								_react3.default.createElement(
									'th',
									{ style: { width: '168px' } },
									'\u57F9\u8BAD\u9879\u76EE'
								),
								_react3.default.createElement(
									'th',
									{ style: { width: '168px' } },
									'\u8D77\u59CB\u65F6\u95F4'
								),
								_react3.default.createElement(
									'th',
									{ style: { width: '168px' } },
									'\u7ED3\u675F\u65F6\u95F4'
								),
								_react3.default.createElement(
									'th',
									{ style: { width: '168px' } },
									'\u603B\u5929\u6570'
								),
								_react3.default.createElement(
									'th',
									{ style: { width: '104px' } },
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
										{ style: { width: '170px' } },
										index.name
									),
									_react3.default.createElement(
										'td',
										{ style: { width: '168px' } },
										index.unit
									),
									_react3.default.createElement(
										'td',
										{ style: { width: '168px' } },
										index.startDate
									),
									_react3.default.createElement(
										'td',
										{ style: { width: '168px' } },
										index.endDate
									),
									_react3.default.createElement(
										'td',
										{ style: { width: '168px' } },
										index.number
									),
									_react3.default.createElement(
										'td',
										{ style: { width: '104px' } },
										_react3.default.createElement(
											'button',
											{ className: 'btn btn-info btn-xs detBtn' },
											_react3.default.createElement(
												'a',
												{ name: '57eb8803f2a6e3c946377cc3' },
												'\u67E5\u770B'
											)
										),
										_react3.default.createElement(
											'button',
											{ className: 'btn btn-info btn-xs addTrainerBtn' },
											_react3.default.createElement(
												'a',
												{ name: '57eb8803f2a6e3c946377cc3' },
												'\u6DFB\u52A0\u53D7\u8BAD\u8005'
											)
										),
										_react3.default.createElement(
											'button',
											{ className: 'btn btn-warning btn-xs delBtn' },
											_react3.default.createElement(
												'a',
												{ name: '57eb8803f2a6e3c946377cc3' },
												'\u5220\u9664'
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

	return ServiceMajor;
}(_react3.default.Component));

;
function filter(store) {
	return {
		data: store.data.sporteMajor == undefined ? [] : store.data.sporteMajor,
		id: store.lookData.id
	};
}
exports.default = (0, _reactRedux.connect)(filter)(ServiceMajor);

//# sourceMappingURL=ServiceMajor.js.map