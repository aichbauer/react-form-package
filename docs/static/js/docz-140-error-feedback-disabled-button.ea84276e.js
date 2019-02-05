(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"./docz/140.errorFeedbackDisabledButton.mdx":function(e,t,n){"use strict";n.r(t);var o=n("./node_modules/react/index.js"),r=n.n(o),a=n("./node_modules/@mdx-js/tag/dist/index.js"),i=n("./node_modules/docz/dist/index.m.js"),s=n("./src/index.js"),l=n("./node_modules/styled-popover-component/lib/index.js"),d=n("./node_modules/styled-button-component/lib/index.js"),p=n("./node_modules/styled-form-component/lib/index.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var v=function(e){function t(e){var n,o,r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),o=this,(n=!(r=u(t).call(this,e))||"object"!==c(r)&&"function"!==typeof r?h(o):r).state={top:0,left:0,hidden:!0,notValidFields:""},n.handlePopover=n.handlePopover.bind(h(h(n))),n}var n,o,a;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,r.a.Component),n=t,(o=[{key:"handlePopover",value:function(e,t){var n=this,o=this.state.hidden,r=Object.entries(t.meta).map(function(e){if(!e[1].valid)return e[0]});r=r.filter(function(e){return void 0!==e}),t.formValid||this.setState({top:e.target.offsetTop-e.target.offsetHeight,left:e.target.offsetLeft+e.target.offsetWidth,hidden:!o,notValidFields:r.join()},function(){var e=n.state.hidden;setTimeout(function(){return n.setState({hidden:!e})},1500)})}},{key:"render",value:function(){var e=this,t=this.state,n=t.top,o=t.left,a=t.hidden,i=t.notValidFields;return r.a.createElement(s.d,{validate:!0,input:r.a.createElement(p.FormControl,null),button:r.a.createElement(d.Button,{primary:!0,mt:"3px",mb:"3px"})},r.a.createElement(s.b,{type:"email",id:"email",required:!0}),r.a.createElement("div",null,r.a.createElement(s.a,{danger:!0,onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)},onMouseEnter:function(t,n){return e.handlePopover(t,n)}},"Hover button to show which fields are not valid"),r.a.createElement(l.Popover,{hidden:a,style:{top:"".concat(n,"px"),left:"".concat(o,"px")},right:!0},r.a.createElement(l.PopoverArrow,{right:!0}),r.a.createElement(l.PopoverHeader,{right:!0},"You need to fill out this fields"),r.a.createElement(l.PopoverBody,{right:!0},i))))}}])&&m(n.prototype,o),a&&m(n,a),t}();function b(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}v.__docgenInfo={description:"",methods:[{name:"handlePopover",docblock:null,modifiers:[],params:[{name:"ev",type:null},{name:"state",type:null}],returns:null}],displayName:"PopoverHint"};t.default=function(e){var t=e.components,n=b(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:t},r.a.createElement(a.MDXTag,{name:"h1",components:t,props:{id:"feedback-on-disabled-button"}},"Feedback on disabled Button"),r.a.createElement(a.MDXTag,{name:"p",components:t},"Sometimes it is necessary to show an informal error message to the user when is hovering on a disabled button (which means the form is not valid yet)."),r.a.createElement(a.MDXTag,{name:"p",components:t},"For this example we use a popover for our disabled button that gives the user a hint what should be filled."),r.a.createElement(a.MDXTag,{name:"p",components:t},"First import all the components that we need. We use ",r.a.createElement(a.MDXTag,{name:"a",components:t,parentName:"p",props:{href:"https://aichbauer.github.io/styled-bootstrap-components"}},"styled-bootstrap-components")," for our popup. You could also use a toast or something similar to indicate the user what fields are open."),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metaString:""}},"import {\n  Form,\n  Field,\n  Button,\n} from 'react-form-package';\nimport {\n  Popover,\n  PopoverArrow,\n  PopoverBody,\n  PopoverHeader,\n} from 'styled-bootstrap-component';\n")),r.a.createElement(a.MDXTag,{name:"p",components:t},"Next we make use of the buttons ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onMouseEnter")," function (unfortunatly the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"onMouseLeave")," function does not work on disabled buttons so we can not use it to hide the popover), and a ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"setTimeout")," to hide the popover."),r.a.createElement(a.MDXTag,{name:"pre",components:t},r.a.createElement(a.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-js",metaString:""}},'class PopoverHint extends React.Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      top: 0,\n      left: 0,\n      hidden: true,\n      notValidFields: \'\',\n    };\n\n    this.handlePopover = this.handlePopover.bind(this);\n  }\n\n  handlePopover(ev, state) {\n    const { hidden } = this.state;\n\n    let notValidFields = Object.entries(state.meta).map((entry) => {\n      if (!entry[1].valid) {\n        return entry[0];\n      }\n    });\n\n    notValidFields = notValidFields.filter((i) => i !== undefined);\n\n    if (!state.formValid) {\n      this.setState({\n        top: ev.target.offsetTop - ev.target.offsetHeight,\n        left: ev.target.offsetLeft + ev.target.offsetWidth,\n        hidden: !hidden,\n        notValidFields: notValidFields.join(),\n      }, () => {\n        const { hidden: h } = this.state;\n        setTimeout(() => this.setState({\n          hidden: !h,\n        }), 1500);\n      });\n    }\n  }\n\n  render() {\n    const {\n      top,\n      left,\n      hidden,\n      notValidFields,\n    } = this.state;\n\n    return (\n      <Form\n        validate\n        input={<FormControl />}\n        button={<Btn primary mt="3px" mb="3px" />}\n      >\n        <Field type="email" id="email" required />\n        <div>\n          <Button\n            danger\n            onClick={(state) => {\n              alert(JSON.stringify(state, null, 2));\n              alert(\'open the console to see the whole state...\');\n              console.log(state);\n            }}\n            onMouseEnter={(e, state) => this.handlePopover(e, state)}\n          >\n            Hover button to show which fields are not valid\n          </Button>\n          <Popover\n            hidden={hidden}\n            style={{\n              top: `${top}px`,\n              left: `${left}px`,\n            }}\n            right\n          >\n            <PopoverArrow right />\n            <PopoverHeader right>You need to fill out this fields</PopoverHeader>\n            <PopoverBody right>{notValidFields}</PopoverBody>\n          </Popover>\n        </div>\n      </Form>\n    );\n  }\n}\n\nexport { PopoverHint };\n')),r.a.createElement(a.MDXTag,{name:"p",components:t},"Now we render the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<PopoverHint />")," and can see the result."),r.a.createElement(i.Playground,{__position:0,__code:"<PopoverHint />",__scope:{props:n,Form:s.d,Field:s.b,Button:s.a,PopoverHint:v}},r.a.createElement(v,null)))}}}]);