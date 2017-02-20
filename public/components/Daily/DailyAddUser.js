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

var _Calendar = require('../Calendar.jsx');

var _Calendar2 = _interopRequireDefault(_Calendar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	DailyAddUser: {
		displayName: 'DailyAddUser'
	}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/Daily/DailyAddUser.jsx',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/Daily/DailyAddUser.jsx',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var linestyle = { width: '98px' };

var DailyAddUser = _wrapComponent('DailyAddUser')(function (_React$Component) {
	_inherits(DailyAddUser, _React$Component);

	function DailyAddUser() {
		_classCallCheck(this, DailyAddUser);

		return _possibleConstructorReturn(this, (DailyAddUser.__proto__ || Object.getPrototypeOf(DailyAddUser)).call(this));
	}

	_createClass(DailyAddUser, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			$('#dailyAddUserForm .mydate').datetimepicker({
				format: 'hh:ii',
				language: 'zh-CN',
				minView: 0,
				startView: 1,
				maxView: 1,
				autoclose: true
			});
			$('#dailyAddUserForm .mydate').datetimepicker(hourConfig);
		}
	}, {
		key: 'render',
		value: function render() {
			return _react3.default.createElement(
				'div',
				null,
				_react3.default.createElement(
					'div',
					{ className: 'location' },
					_react3.default.createElement(
						'h3',
						null,
						'> ',
						_react3.default.createElement(
							'span',
							null,
							' \u6DFB\u52A0\u65E5\u5E38\u6D3B\u52A8\u7528\u6237 '
						)
					)
				),
				_react3.default.createElement(
					'form',
					{ className: 'form-horizontal', id: 'dailyAddUserForm' },
					_react3.default.createElement(
						'div',
						{ className: 'form-group MT noMR' },
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u7528\u6237\u59D3\u540D'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-4' },
							_react3.default.createElement('input', { type: 'text', required: '', className: 'form-control' })
						),
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u8EAB\u4EFD\u8BC1\u53F7\u7801'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-4' },
							_react3.default.createElement('input', { type: 'text', className: 'form-control' })
						)
					),
					_react3.default.createElement(
						'div',
						{ className: 'form-group noMR' },
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u624B\u673A\u53F7\u7801'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-4' },
							_react3.default.createElement('input', { type: 'text', className: 'form-control' })
						),
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u8FD0\u52A8\u7C7B\u578B'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-4' },
							_react3.default.createElement('input', { type: 'text', className: 'form-control' })
						)
					),
					_react3.default.createElement(
						'div',
						{ className: 'form-group noMR' },
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u8D77\u59CB\u65F6\u95F4'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-4' },
							_react3.default.createElement('input', { type: 'text', 'data-date-format': 'hh:ii', className: 'form-control mydate' })
						),
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u7ED3\u675F\u65F6\u95F4'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-4' },
							_react3.default.createElement('input', { type: 'text', 'data-date-format': 'hh:ii', className: 'form-control mydate' })
						)
					),
					_react3.default.createElement(
						'div',
						{ className: 'form-group' },
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u662F\u5426\u4E3A\u5F53\u524D\u89C4\u5219'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-10' },
							_react3.default.createElement(
								'label',
								{ className: 'radio-inline' },
								_react3.default.createElement('input', { type: 'radio', defaultValue: '1', name: 'rule' }),
								'\u5168\u4EF7'
							),
							_react3.default.createElement(
								'label',
								{ className: 'radio-inline' },
								_react3.default.createElement('input', { type: 'radio', defaultValue: '2', name: 'rule' }),
								'\u4F18\u60E0\u4EF7'
							),
							_react3.default.createElement(
								'label',
								{ className: 'radio-inline' },
								_react3.default.createElement('input', { type: 'radio', defaultChecked: 'checked', defaultValue: '3', name: 'rule' }),
								'\u514D\u8D39'
							)
						)
					),
					_react3.default.createElement(
						'div',
						{ className: 'form-group' },
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-offset-2 col-sm-10' },
							_react3.default.createElement(
								'button',
								{ type: 'submit', className: 'OrangeButF' },
								'\u6DFB\u52A0'
							)
						)
					)
				)
			);
		}
	}]);

	return DailyAddUser;
}(_react3.default.Component));

exports.default = DailyAddUser;
;

//# sourceMappingURL=DailyAddUser.js.map