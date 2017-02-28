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

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  RuleAdd: {
    displayName: 'RuleAdd'
  }
};

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/Rule/RuleAdd.jsx',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: 'C:/Users/kellyZhang/Desktop/CSVA/public/components/Rule/RuleAdd.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformHmrLibIndexJs2(_CUsersKellyZhangDesktopCSVAPublicNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var RuleAdd = _wrapComponent('RuleAdd')(function (_React$Component) {
  _inherits(RuleAdd, _React$Component);

  function RuleAdd() {
    _classCallCheck(this, RuleAdd);

    return _possibleConstructorReturn(this, (RuleAdd.__proto__ || Object.getPrototypeOf(RuleAdd)).call(this));
  }

  _createClass(RuleAdd, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // $('.mydate').datetimepicker({
      // 	 format: 'yyyy-mm-dd',
      // 	 language:  'zh-CN',
      // 	 minView: 2,
      // 	 autoclose:true
      // 	});
    }
  }, {
    key: 'ruleAdd',
    value: function ruleAdd(e) {
      var _props = this.props,
          dispatch = _props.dispatch,
          store = _props.store;

      e.preventDefault();
      var startDate = this.refs.startDate.value,
          name = this.refs.ruleName.value.trim(),
          endDate = this.refs.endDate.value,
          isCurrent = this.refs.rule.checked ? 1 : 2;
      if (startDate && endDate && name) {
        var datas = { startDate: startDate, endDate: endDate, isCurrent: isCurrent, name: name };
        dispatch(action.addRule(datas));
      }

      //-------!!!!----发送失败删除store里新添加的评分规则项
      // $.ajax({
      // 		 type: 'POST',
      // 		 url: 'http://139.129.131.105:8802',
      //  		success: function(data){
      // 	  	 if(data.state){
      //     		 swal("成功!", "规则添加成功", "success");
      // 	  	 }else{
      //          alert("oh my gad 失败了");
      //          dispatch(action.faleRule())
      // 	  		 }
      //  	 },
      //     error:function(){
      //          alert("oh my gad 失败了");
      //          dispatch(action.faleRule())
      //     }
      // 	});
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

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
              ' \u6DFB\u52A0\u8BC4\u5206\u89C4\u5219 '
            )
          )
        ),
        _react3.default.createElement(
          'form',
          { className: 'form-horizontal', id: 'ruleAddForm', onSubmit: this.ruleAdd },
          _react3.default.createElement(
            'div',
            { className: 'form-group MT', style: { marginRight: "0px" } },
            _react3.default.createElement(
              'label',
              { className: 'col-sm-2 control-label' },
              '\u8D77\u59CB\u65F6\u95F4'
            ),
            _react3.default.createElement(
              'div',
              { className: 'col-sm-4' },
              _react3.default.createElement('input', { ref: 'startDate', type: 'text', required: '', name: 'rule[startDate]', className: 'form-control mydate' })
            ),
            _react3.default.createElement(
              'label',
              { className: 'col-sm-2 control-label' },
              '\u7ED3\u675F\u65F6\u95F4'
            ),
            _react3.default.createElement(
              'div',
              { className: 'col-sm-4' },
              _react3.default.createElement('input', { ref: 'endDate', type: 'text', required: '', name: 'rule[endDate]', className: 'form-control mydate' })
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'form-group', style: { marginRight: "0px" } },
            _react3.default.createElement(
              'label',
              { className: 'col-sm-2 control-label' },
              '\u89C4\u5219\u540D\u79F0'
            ),
            _react3.default.createElement(
              'div',
              { className: 'col-sm-10' },
              _react3.default.createElement('input', { ref: 'ruleName', type: 'text', required: '', name: 'rule[name]', className: 'form-control' })
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
                _react3.default.createElement('input', { type: 'radio', ref: 'rule', name: 'rule[isCurrent]', defaultChecked: 'checked', id: 'inlineRadio1', value: '1' }),
                '\u662F'
              ),
              _react3.default.createElement(
                'label',
                { className: 'radio-inline' },
                _react3.default.createElement('input', { type: 'radio', name: 'rule[isCurrent]', id: 'inlineRadio2', value: '2' }),
                '\u5426'
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
                { type: 'submit', id: 'ruleAddBtn', onClick: function onClick(e) {
                    _this2.ruleAdd(e);
                  }, className: 'btn btn-default' },
                '\u6DFB\u52A0'
              )
            )
          )
        )
      );
    }
  }]);

  return RuleAdd;
}(_react3.default.Component));

;
exports.default = (0, _reactRedux.connect)()(RuleAdd);

//# sourceMappingURL=RuleAdd.js.map