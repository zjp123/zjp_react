webpackHotUpdate("static/development/pages/home.js",{

/***/ "./pages/layout/head.jsx":
/*!*******************************!*\
  !*** ./pages/layout/head.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout */ "./node_modules/antd/lib/layout/index.js");
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _src_base_base_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../src/base/base.css */ "./src/base/base.css");
/* harmony import */ var _src_base_base_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_src_base_base_css__WEBPACK_IMPORTED_MODULE_10__);







var _jsxFileName = "/Users/zhangjunpeng/day/zjp_react/pages/layout/head.jsx";



var Header = antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a.Header; // import '../src/components/header/header.less'

 // import logo from ""
// import Home from '../src/pages/home/home.jsx'
// import ShouYe from '../src/pages/index/index.jsx'
// import Register from '../src/pages/register/register.jsx'
// import Login from '../src/pages/login/login.jsx'
// import DevTools from 'mobx-react-devtools'
// import {Provider} from 'mobx-react';
// import stores from '../src/store/state'

__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // const sotres = new UserStore()
// import BasicExample from '../../router/router'


var Head =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Head, _Component);

  function Head(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Head);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Head).call(this, props));
    _this.sliderHandle = _this.sliderHandle.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.sliderLeave = _this.sliderLeave.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this));
    _this.handleClick = _this.handleClick.bind(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this)); // this.callbackHancle = this.callbackHancle.bind(this)

    _this.state = {
      isActive: 'index'
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Head, [{
    key: "componentDidMount",
    value: function componentDidMount() {} // console.log(navDom)
    // callbackHancle(type){
    //     if(type==="register"){type='reg'}
    //     if(type==="/"){type='index'}
    //     if(type==="login"){type='login'}
    //     if(type==="home"){type='home'}
    //     this.setState({
    //         isActive:type
    //     })
    // }

  }, {
    key: "handleClick",
    value: function handleClick(e) {
      // let sliderDom = $('.slider')
      // let indexi = $(e.target).parent().index()
      // // sliderDom[0].style.display = 'block'
      // sliderDom.show()
      // sliderDom.addClass('active')
      // // sliderDom[0].style.transition = 'all 0.5s ease'
      // sliderDom[0].style.left = indexi*100 + 'px'
      var type = $(e.target).parent().data('type'); // console.log(type)

      this.setState({
        isActive: type
      });
    }
  }, {
    key: "sliderLeave",
    value: function sliderLeave(e) {
      var sliderDom = $('.slider');
      var indexi = $(e.target).parent().index(); // sliderDom[0].style.display = 'none'

      sliderDom.hide();
      sliderDom.removeClass('active'); // sliderDom[0].style.transition = 'all 0.5s ease'

      console.log(indexi);
      sliderDom[0].style.left = indexi * 100 + 'px';
    }
  }, {
    key: "sliderHandle",
    value: function sliderHandle(e) {
      // let navDom = $('#router-list')
      // navDom[0].style.transition = 'all 0.5s ease'
      // console.log(this)
      var sliderDom = $('.slider');
      var indexi = $(e.target).parent().index(); // sliderDom[0].style.display = 'block'

      sliderDom.show();
      sliderDom.addClass('active'); // sliderDom[0].style.transition = 'all 0.5s ease'

      sliderDom[0].style.left = indexi * 100 + 'px';
    }
  }, {
    key: "render",
    value: function render() {
      var activestate = this.state.isActive; // console.log(activestate)

      this.call; // activestate=(activestate=='login'?'visted':'')
      // activestate=(activestate=='reg'?'visted':'')
      // activestate=(activestate=='home'?'visted':'')

      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(antd_lib_layout__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: "zjp-project",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(Header, {
        id: "header",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 110
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        id: "logo",
        className: "fl",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        className: "logoimg",
        src: "../static/zjp.jpg",
        alt: "logo",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("ul", {
        id: "router-list",
        className: "fr",
        onClick: this.handleClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 113
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: activestate == "index" ? "visted" : '',
        "data-type": "index",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, "\u9996\u9875"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: activestate == "home" ? "visted" : '',
        "data-type": "home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/home",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, "\u5BB6"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: activestate == "login" ? "visted" : '',
        "data-type": "login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/login",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 116
        },
        __self: this
      }, "\u767B\u5F55"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: activestate == "reg" ? "visted" : '',
        "data-type": "reg",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/register",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("a", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, "\u6CE8\u518C"))), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("li", {
        className: "slider",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })))))));
    }
  }]);

  return Head;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Head);

/***/ })

})
//# sourceMappingURL=home.js.fd69ca32575e2287f7ba.hot-update.js.map