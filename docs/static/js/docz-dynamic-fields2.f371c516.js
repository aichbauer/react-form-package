(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docz/dynamicFields2.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),i=t("./src/index.js"),c=t("./node_modules/docz/dist/index.m.js"),l=t("./docz/data/checkboxes.js"),m=t("./docz/data/select.js"),s=t("./docz/data/radio.js");function p(e){return(p="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function h(e,n){return!n||"object"!==p(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function y(e,n){return(y=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}var g={name:""},b=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=h(this,f(n).call(this,e))).state={text:"",companies:[g]},t.child=o.a.createRef(),t}var t,a,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&y(e,n)}(n,o.a.Component),t=n,(a=[{key:"handleAddCompany",value:function(){var e=this,n=this.state.companies;n[n.length-1].name&&this.setState({companies:n.concat([g])},function(){return e.child.current.updateState()})}},{key:"handleOnChange",value:function(e,n,t){var a=this,o=this.state.companies,r=e.data[n];if(!isNaN(t)){var i=o.map(function(e,n){return n!==t?e:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){d(e,n,t[n])})}return e}({},e,{name:r})});return this.setState({companies:i},function(){return a.handleAddCompany()})}return this.setState(d({},n,r))}},{key:"render",value:function(){var e=this,n=this.state,t=n.text,a=n.companies;return o.a.createElement(i.c,{ref:this.child},o.a.createElement("div",null,o.a.createElement(i.b,{type:"text",id:"text",value:t,placeholder:"Not a dynamic field",onChange:function(n){return e.handleOnChange(n,"text")}})),a.map(function(n,t){return o.a.createElement("div",null,o.a.createElement(i.b,{id:"company-".concat(t),value:n.name,placeholder:"Company ".concat(t),type:"text",onChange:function(n){return e.handleOnChange(n,"company-".concat(t),t)}}))}),o.a.createElement("div",null,o.a.createElement(i.a,{id:"submit",type:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit")))}}])&&u(t.prototype,a),r&&u(t,r),n}();function C(e){return(C="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function w(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function v(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function x(e,n){return!n||"object"!==C(n)&&"function"!==typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function E(e){return(E=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function O(e,n){return(O=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}b.__docgenInfo={description:"",methods:[{name:"handleAddCompany",docblock:null,modifiers:[],params:[],returns:null},{name:"handleOnChange",docblock:null,modifiers:[],params:[{name:"formState",type:null},{name:"id",type:null},{name:"index",type:null}],returns:null}],displayName:"DynamicFieldsOnChange"};var D={name:""},S=function(e){function n(e){var t;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),(t=x(this,E(n).call(this,e))).state={text:"",companies:[D]},t.child=o.a.createRef(),t}var t,a,r;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&O(e,n)}(n,o.a.Component),t=n,(a=[{key:"handleAddCompany",value:function(){var e=this,n=this.state.companies;this.setState({companies:n.concat([D])},function(){return e.child.current.updateState()})}},{key:"handleRemoveCompany",value:function(e){var n=this,t=this.state.companies;this.setState({companies:t.filter(function(n,t){return e!==t})},function(){return n.child.current.updateState()})}},{key:"handleOnChange",value:function(e,n,t){var a=this.state.companies,o=e.data[n];if(!isNaN(t)){var r=a.map(function(e,n){return n!==t?e:function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},a=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(a=a.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.forEach(function(n){w(e,n,t[n])})}return e}({},e,{name:o})});return this.setState({companies:r})}return this.setState(w({},n,o))}},{key:"render",value:function(){var e=this,n=this.state,t=n.text,a=n.companies;return o.a.createElement(i.c,{ref:this.child},o.a.createElement("div",null,o.a.createElement(i.b,{type:"text",id:"text",value:t,placeholder:"Not a dynamic field",onChange:function(n){return e.handleOnChange(n,"text")}})),a.map(function(n,t){return o.a.createElement("div",null,o.a.createElement(i.b,{id:"company-".concat(t),value:n.name,placeholder:"Company ".concat(t),type:"text",onChange:function(n){return e.handleOnChange(n,"company-".concat(t),t)}}),o.a.createElement("button",{type:"button",onClick:function(){return e.handleRemoveCompany(t)}},"Remove Company"))}),o.a.createElement("div",null,o.a.createElement("button",{type:"button",onClick:function(){return e.handleAddCompany()}},"Add Company")),o.a.createElement("div",null,o.a.createElement(i.a,{id:"submit",type:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit")))}}])&&v(t.prototype,a),r&&v(t,r),n}();function T(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}S.__docgenInfo={description:"",methods:[{name:"handleAddCompany",docblock:null,modifiers:[],params:[],returns:null},{name:"handleRemoveCompany",docblock:null,modifiers:[],params:[{name:"idx",type:null}],returns:null},{name:"handleOnChange",docblock:null,modifiers:[],params:[{name:"formState",type:null},{name:"id",type:null},{name:"index",type:null}],returns:null}],displayName:"DynamicFieldsOnClick"};n.default=function(e){var n=e.components,t=T(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"dynamic-fields"}},"Dynamic Fields"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Note: Working with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dynamically added fields")," will become easier in the future. Right now, this is only possible with rerendering the form with the old form data and adding the new field.")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Sometimes you do not know how many fields your form should have, so you need a way to add dynamic fields on user events, e.g. on a button click if a user should decide if a new field is needed, or on a change of a field, e.g. when a field is filled a new field should appear."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"onchange"}},"onChange"),o.a.createElement(r.MDXTag,{name:"p",components:n},"First off, import your components."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import React from 'react';\nimport {\n  Form,\n  Field,\n  Button,\n} from 'react-form-package';\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"The next step is to create a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"class")," that will render our form. "),o.a.createElement(r.MDXTag,{name:"p",components:n},"To add new form inputs dynamically we need to store a copy of our form values in the state of the parent component. This can be done via the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange")," function (or ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onBlur"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onFocus"),"). "),o.a.createElement(r.MDXTag,{name:"p",components:n},"Next step is to add a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"ref")," to our ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component, so that we are able to update the internal state of our ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component and add a new field. See ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"constructor")," function and ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component."),o.a.createElement(r.MDXTag,{name:"p",components:n},"Now we need to update the state of our parent component. See the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"handleOnChange")," function. We check if we add a index if there is a index we change the value in the index of the array or else we change the value of of the passed id."),o.a.createElement(r.MDXTag,{name:"p",components:n},"The last step before rendering our form is to create a function that will add a new field to our array. See ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"handleAddField")," function."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},'const companyTemplate = {\n  name: \'\',\n};\n\nclass DynamicFieldsOnChange extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      text: \'\',\n      companies: [\n        companyTemplate,\n      ],\n    };\n\n    // our reference to our form\n    // so that we are able to update\n    // the form state\n    this.child = React.createRef();\n  }\n\n  handleAddCompany() {\n    const { companies } = this.state;\n    const { length } = companies;\n\n    // if the last field is not empty add a new one\n    // in the callback of our setState we create\n    // the new state of our form via the new children\n    // in this component\n    // note that we use a ref here\n    if (companies[length - 1].name) {\n      this.setState({\n        companies: companies.concat([companyTemplate]),\n      }, () => this.child.current.updateState());\n    }\n  }\n\n  handleOnChange(formState, id, index) {\n    const { companies } = this.state;\n    const myValue = formState.data[id];\n\n    // if it is a dynamic field change the\n    // value based on the index of this array\n    if (!isNaN(index)) {\n      const newCompanies = companies.map((company, idx) => {\n        if (idx !== index) {\n          return company;\n        }\n\n        const newCompany = {\n          ...company,\n          name: myValue,\n        };\n\n        return newCompany;\n      });\n\n      // in the callback we add a new field\n      return this.setState({\n        companies: newCompanies,\n      }, () => this.handleAddCompany());\n    }\n\n    // else update the other fields\n    // based on the id\n    return this.setState({\n      [id]: myValue,\n    });\n  }\n\n  render() {\n    const {\n      text,\n      companies,\n    } = this.state;\n\n    // - we need to pass the values\n    //   of the state of this component\n    // - we need to add our handleOnChange\n    // - we need to set our ref\n    return (\n      <Form\n        ref={this.child}\n      >\n        <div>\n          <Field\n            type="text"\n            id="text"\n            value={text}\n            placeholder="Not a dynamic field"\n            onChange={(state) => this.handleOnChange(state, \'text\')}\n          />\n        </div>\n        {/* render our dynamic fields */}\n        {companies.map((company, idx) => (\n          <div>\n            <Field\n              id={`company-${idx}`}\n              value={company.name}\n              placeholder={`Company ${idx}`}\n              type="text"\n              onChange={(state) => this.handleOnChange(state, `company-${idx}`, idx)}\n            />\n          </div>\n        ))}\n        <div>\n          <Button\n            id="submit"\n            type="submit"\n            onClick={(state) => {\n              alert(JSON.stringify(state, null, 2));\n              alert(\'open the console to see the whole state...\');\n              console.log(state);\n            }}\n          >\n            Submit\n          </Button>\n        </div>\n      </Form>\n    );\n  }\n}\n\nexport { DynamicFieldsOnChange };\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Now render this Component. Everytime you fill out a Company field a new one will appear. Also our Fields will be validated accoringly."),o.a.createElement(c.Playground,{__position:0,__code:"<DynamicFieldsOnChange />",__scope:{props:t,Form:i.c,Button:i.a,Field:i.b,Select:i.e,RadioGroup:i.d,checkboxData:l.a,selectData:m.a,radioData:s.a,DynamicFieldsOnChange:b,DynamicFieldsOnClick:S}},o.a.createElement(b,null)),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"onclick"}},"onClick"),o.a.createElement(r.MDXTag,{name:"p",components:n},"First off, import your components."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import React from 'react';\nimport {\n  Form,\n  Field,\n  Button,\n} from 'react-form-package';\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"The next step is to create a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"class")," that will render our form. "),o.a.createElement(r.MDXTag,{name:"p",components:n},"Everything stays the same as in the example above, except:"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"we do not call the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"handleAddCompany")," function in the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"handleOnChange")," function, instead we call it on a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onClick")," of a button."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"we have a new ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"handleRemoveCompany")," function that is also called on a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onClick")," of another function.")),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},'const companyTemplate = {\n  name: \'\',\n};\n\nclass DynamicFieldsOnClick extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      text: \'\',\n      companies: [\n        companyTemplate,\n      ],\n    };\n\n    // our reference to our form\n    // so that we are able to update\n    // the form state\n    this.child = React.createRef();\n  }\n\n  handleAddCompany() {\n    const { companies } = this.state;\n\n    // in the callback of our setState we create\n    // the new state of our form via the new children\n    // in this component\n    // note that we use a ref here\n    this.setState({\n      companies: companies.concat([companyTemplate]),\n    }, () => this.child.current.updateState());\n  }\n\n  handleRemoveCompany(idx) {\n    const { companies } = this.state;\n\n    // in the callback of our setState we create\n    // the new state of our form via the new children\n    // in this component\n    // note that we use a ref here\n    this.setState({\n      companies: companies.filter((_, index) => idx !== index),\n    }, () => this.child.current.updateState());\n  }\n\n  handleOnChange(formState, id, index) {\n    const { companies } = this.state;\n    const myValue = formState.data[id];\n\n    // if it is a dynamic field change the\n    // value based on the index of this array\n    if (!isNaN(index)) {\n      const newCompanies = companies.map((company, idx) => {\n        if (idx !== index) {\n          return company;\n        }\n\n        const newCompany = {\n          ...company,\n          name: myValue,\n        };\n\n        return newCompany;\n      });\n\n      // in the callback we add a new field\n      return this.setState({\n        companies: newCompanies,\n      });\n    }\n\n    // else update the other fields\n    // based on the id\n    return this.setState({\n      [id]: myValue,\n    });\n  }\n\n  render() {\n    const {\n      text,\n      companies,\n    } = this.state;\n\n    // - we need to pass the values\n    //   of the state of this component\n    // - we need to add our handleOnChange\n    // - we need to set our ref\n    return (\n      <Form\n        ref={this.child}\n      >\n        <div>\n          <Field\n            type="text"\n            id="text"\n            value={text}\n            placeholder="Not a dynamic field"\n            onChange={(state) => this.handleOnChange(state, \'text\')}\n          />\n        </div>\n        {/* render our dynamic fields */}\n        {companies.map((company, idx) => (\n          <div>\n            <Field\n              id={`company-${idx}`}\n              value={company.name}\n              placeholder={`Company ${idx}`}\n              type="text"\n              onChange={(state) => this.handleOnChange(state, `company-${idx}`, idx)}\n            />\n            <button\n              type="button"\n              onClick={() => this.handleRemoveCompany(idx)}\n            >\n              Remove Company\n            </button>\n          </div>\n        ))}\n        <div>\n          <button\n            type="button"\n            onClick={() => this.handleAddCompany()}\n          >\n            Add Company\n          </button>\n        </div>\n        <div>\n          <Button\n            id="submit"\n            type="submit"\n            onClick={(state) => {\n              alert(JSON.stringify(state, null, 2));\n              alert(\'open the console to see the whole state...\');\n              console.log(state);\n            }}\n          >\n            Submit\n          </Button>\n        </div>\n      </Form>\n    );\n  }\n}\n\nexport { DynamicFieldsOnClick };\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"Now render this Component. Everytime you click on the button ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Add Company")," you get a new field, and everytime you click on the button ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Remove Company")," you remove the corresponding field."),o.a.createElement(c.Playground,{__position:1,__code:"<DynamicFieldsOnClick />",__scope:{props:t,Form:i.c,Button:i.a,Field:i.b,Select:i.e,RadioGroup:i.d,checkboxData:l.a,selectData:m.a,radioData:s.a,DynamicFieldsOnChange:b,DynamicFieldsOnClick:S}},o.a.createElement(S,null)))}}}]);