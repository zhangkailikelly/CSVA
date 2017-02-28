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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
	ServiceAdd2: {
		displayName: 'ServiceAdd2'
	}
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/SportsService/ServiceAdd2.jsx',
	components: _components,
	locals: [module],
	imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/SportsService/ServiceAdd2.jsx',
	components: _components,
	locals: [],
	imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
	return function (Component) {
		return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	};
}

var ServiceAdd2 = _wrapComponent('ServiceAdd2')(function (_React$Component) {
	_inherits(ServiceAdd2, _React$Component);

	function ServiceAdd2() {
		_classCallCheck(this, ServiceAdd2);

		return _possibleConstructorReturn(this, (ServiceAdd2.__proto__ || Object.getPrototypeOf(ServiceAdd2)).call(this));
	}

	_createClass(ServiceAdd2, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			$('.mydate').datetimepicker({
				format: 'yyyy-mm-dd hh:ii',
				language: 'zh-CN',
				autoclose: true
			});
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
							'label',
							null,
							' \u6DFB\u52A0\u8FD0\u52A8\u5065\u8EAB\u6307\u5BFC '
						)
					)
				),
				_react3.default.createElement(
					'form',
					{ className: 'form-horizontal', id: 'gameAddForm' },
					_react3.default.createElement(
						'div',
						{ className: 'form-group MT noMR' },
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u6D3B\u52A8\u540D\u79F0'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-10' },
							_react3.default.createElement('input', { type: 'text', className: 'form-control', required: '', name: 'service[name]', placeholder: '\u6D3B\u52A8\u540D\u79F0' })
						)
					),
					_react3.default.createElement(
						'div',
						{ className: 'form-group noMR' },
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u57F9\u8BAD\u673A\u6784\u540D\u79F0'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-10' },
							_react3.default.createElement('input', { type: 'text', className: 'form-control', required: '', name: 'service[unit]', placeholder: '\u57F9\u8BAD\u673A\u6784\u540D\u79F0' })
						)
					),
					_react3.default.createElement(
						'div',
						{ className: 'form-group noMR' },
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u57F9\u8BAD\u5185\u5BB9'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-10' },
							_react3.default.createElement('input', { type: 'text', className: 'form-control', required: '', name: 'service[content]', placeholder: '\u57F9\u8BAD\u5185\u5BB9' })
						)
					),
					_react3.default.createElement(
						'div',
						{ className: 'form-group noMR' },
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u662F\u5426\u6536\u8D39'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-10' },
							_react3.default.createElement(
								'label',
								{ className: 'radio-inline' },
								_react3.default.createElement('input', { type: 'radio', name: 'service[fee]', defaultValue: '1' }),
								'\u6536\u8D39'
							),
							_react3.default.createElement(
								'label',
								{ className: 'radio-inline' },
								_react3.default.createElement('input', { type: 'radio', name: 'service[fee]', defaultChecked: 'checked', defaultValue: '2' }),
								'\u514D\u8D39'
							)
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
							_react3.default.createElement('input', { type: 'text', required: '', name: 'service[startDate]', className: 'form-control mydate' })
						),
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u7ED3\u675F\u65F6\u95F4'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-4' },
							_react3.default.createElement('input', { type: 'text', required: '', name: 'service[endDate]', className: 'form-control mydate' })
						)
					),
					_react3.default.createElement(
						'div',
						{ className: 'form-group noMR' },
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u57F9\u8BAD\u8054\u7CFB\u4EBA'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-4' },
							_react3.default.createElement('input', { type: 'text', name: 'service[contants]', className: 'form-control' })
						),
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u8054\u7CFB\u7535\u8BDD'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-4' },
							_react3.default.createElement('input', { type: 'text', name: 'service[contantsPhone]', className: 'form-control' })
						)
					),
					_react3.default.createElement(
						'div',
						{ className: 'form-group noMR' },
						_react3.default.createElement(
							'label',
							{ className: 'col-sm-2 control-label' },
							'\u53D7\u8BAD\u8005\u4EBA\u6570'
						),
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-10' },
							_react3.default.createElement('input', { type: 'text', required: '', name: 'service[number]', className: 'form-control' })
						)
					),
					_react3.default.createElement(
						'div',
						{ className: 'form-group noMR' },
						_react3.default.createElement(
							'div',
							{ className: 'col-sm-offset-2 col-sm-10' },
							_react3.default.createElement(
								'button',
								{ type: 'submit', id: 'serviceAddBtn', className: 'btn btn-default' },
								'\u6DFB\u52A0'
							)
						)
					),
					_react3.default.createElement('input', { type: 'hidden', name: 'service[type]' })
				)
			);
		}
	}]);

	return ServiceAdd2;
}(_react3.default.Component));

exports.default = ServiceAdd2;
;

//# sourceMappingURL=ServiceAdd2.js.map