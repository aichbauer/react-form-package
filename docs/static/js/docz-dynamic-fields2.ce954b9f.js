(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docz/dynamicFields2.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),i=t("./node_modules/@mdx-js/tag/dist/index.js"),r=t("./src/index.js"),l=t("./node_modules/docz/dist/index.m.js");function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function m(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,n){return(s=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function u(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var h=function(e){function n(e){var t,a,o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),a=this,(t=!(o=p(n).call(this,e))||"object"!==c(o)&&"function"!==typeof o?u(a):o).state={companies:[{id:"company-0"}]},t.addField=t.addField.bind(u(u(t))),t.removeField=t.removeField.bind(u(u(t))),t.calculateAvailableId=t.calculateAvailableId.bind(u(u(t))),t}var t,a,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&s(e,n)}(n,o.a.Component),t=n,(a=[{key:"calculateAvailableId",value:function(){var e=this.state.companies.map(function(e){return parseInt(e.id.split("-")[1],10)}),n=Math.max.apply(Math,m(e));return(n=n!==-1/0?n:0)+1}},{key:"addField",value:function(e,n){var t=this.state.companies,a=this.calculateAvailableId();e.data[n]&&parseInt(n.split("-")[1],10)+1===a&&this.setState({companies:t.concat({id:"company-".concat(a)})})}},{key:"removeField",value:function(e){var n=this.state.companies;this.setState({companies:n.filter(function(n,t){return e!==t})})}},{key:"render",value:function(){var e=this,n=this.state.companies,t=this.calculateAvailableId();return o.a.createElement(r.d,null,n.map(function(a,i){return o.a.createElement("div",null,o.a.createElement(r.b,{id:a.id,placeholder:"Company ".concat(a.id.split("-")[1]),type:"text",required:!0,dynamic:!0,field:{id:"company-".concat(t),type:"text",required:!0},onChange:function(n){return e.addField(n,a.id)}}),n.length>1&&o.a.createElement(r.a,{id:"removeField",rfpRole:"removeField",type:"button",fieldId:a.id,onClick:function(){return e.removeField(i)}},"Remove Company"))}),o.a.createElement("div",null,o.a.createElement(r.a,{id:"submit",type:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"submit")))}}])&&d(t.prototype,a),i&&d(t,i),n}();function f(e){return(f="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e){return function(e){if(Array.isArray(e)){for(var n=0,t=new Array(e.length);n<e.length;n++)t[n]=e[n];return t}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function g(e,n){for(var t=0;t<n.length;t++){var a=n[t];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function b(e){return(b=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,n){return(v=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function F(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}h.__docgenInfo={description:"",methods:[{name:"calculateAvailableId",docblock:null,modifiers:[],params:[],returns:null},{name:"addField",docblock:null,modifiers:[],params:[{name:"state",type:null},{name:"id",type:null}],returns:null},{name:"removeField",docblock:null,modifiers:[],params:[{name:"idx",type:null}],returns:null}],displayName:"DynamicFieldsOnChange"};var E=function(e){function n(e){var t,a,o;return function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,n),a=this,(t=!(o=b(n).call(this,e))||"object"!==f(o)&&"function"!==typeof o?F(a):o).state={companies:[{id:"company-0"}]},t.addField=t.addField.bind(F(F(t))),t.removeField=t.removeField.bind(F(F(t))),t.calculateAvailableId=t.calculateAvailableId.bind(F(F(t))),t}var t,a,i;return function(e,n){if("function"!==typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&v(e,n)}(n,o.a.Component),t=n,(a=[{key:"calculateAvailableId",value:function(){var e=this.state.companies.map(function(e){return parseInt(e.id.split("-")[1],10)}),n=Math.max.apply(Math,y(e));return(n=n!==-1/0?n:0)+1}},{key:"addField",value:function(){var e=this.state.companies,n=this.calculateAvailableId();this.setState({companies:e.concat({id:"company-".concat(n)})})}},{key:"removeField",value:function(e){var n=this.state.companies;this.setState({companies:n.filter(function(n,t){return e!==t})})}},{key:"render",value:function(){var e=this,n=this.state.companies,t=this.calculateAvailableId();return o.a.createElement(r.d,{validate:!0},n.map(function(n,t){return o.a.createElement("div",null,o.a.createElement(r.b,{id:n.id,placeholder:"Company ".concat(n.id.split("-")[1]),type:"text",required:!0}),o.a.createElement(r.a,{id:"removeField",rfpRole:"removeField",type:"button",fieldId:n.id,onClick:function(){return e.removeField(t)}},"Remove Company"))}),o.a.createElement("div",null,o.a.createElement(r.a,{id:"addField",rfpRole:"addField",type:"button",field:{id:"company-".concat(t),type:"text",required:!0},onClick:function(){return e.addField()}},"Add Company Field")),o.a.createElement("div",null,o.a.createElement(r.a,{id:"submit",type:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"submit")))}}])&&g(t.prototype,a),i&&g(t,i),n}();function T(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}E.__docgenInfo={description:"",methods:[{name:"calculateAvailableId",docblock:null,modifiers:[],params:[],returns:null},{name:"addField",docblock:null,modifiers:[],params:[],returns:null},{name:"removeField",docblock:null,modifiers:[],params:[{name:"idx",type:null}],returns:null}],displayName:"DynamicFieldsOnClick"};n.default=function(e){var n=e.components,t=T(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",components:n},o.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"dynamic-fields"}},"Dynamic Fields"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Sometimes you do not know how many fields your form should have, so you need a way to add dynamic fields on user events, e.g. on a button click if a user should decide if a new field is needed, or on a change of a field, e.g. when a field is filled a new field should appear."),o.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"onclick"}},"onClick"),o.a.createElement(i.MDXTag,{name:"p",components:n},"First off, import your components."),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import React from 'react';\nimport {\n  Form,\n  Field,\n  Button,\n} from 'react-form-package';\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"The next step is to create a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"class")," that will render our form."),o.a.createElement(i.MDXTag,{name:"p",components:n},"The state is allways handled by ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react-form-package"),", the only thing that you need todo is to handle the appearence of the form, e.g. add or remove the input."),o.a.createElement(i.MDXTag,{name:"p",components:n},"We need create a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addField"),", ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"removeField"),", and optionally a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"calculateAvailableId")," function. The ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"calculateAvailableId")," is only nessacary if you work on non unique index-based ids so that you ensure you do not overide an existing id."),o.a.createElement(i.MDXTag,{name:"p",components:n},"The ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addField")," function is here to add a new Field when you click on a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," component."),o.a.createElement(i.MDXTag,{name:"p",components:n},"To update the state of the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component, you need to add a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"rfpRole")," property and a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"field")," or a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fieldId")," property to a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," component."),o.a.createElement(i.MDXTag,{name:"p",components:n},"The ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"rfpRole")," takes a string which is either ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"addField")," or ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"removeField"),". "),o.a.createElement(i.MDXTag,{name:"p",components:n},"If you use the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," component to add a new field to the state of the form component you need to provide a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"field")," property which takes an object that represents your new ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field />")," component. This object has to have at least a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"id")," and a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"type"),", but you can extend this object with rules like: ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"min"),", ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"max"),", and ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"required"),"."),o.a.createElement(i.MDXTag,{name:"p",components:n},"If you use the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," component to add remove an existing field from the state of the form component you need to provide a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"fieldId")," property which takes a string: the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"id")," of the field you want to remove."),o.a.createElement(i.MDXTag,{name:"p",components:n},"In the state of the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"DynamicFields")," component you have to create an array where you add refrences to the fields of your dynamic ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field />")," components. To add new fields you need to add a new refrence, so that the part of the DOM rerenders with the new Field Component. To remove the Fields not only from the state of the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component but also from the DOM, you need to remove the refrences in your state that the component rerenders that part of the DOM."),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},'class DynamicFields extends React.Component {\n  constructor(props) {\n    super(props);\n\n    this.state = {\n      // the field refrences that we use to render in our <Form /> component\n      companies: [\n        {\n          id: \'company-0\',\n        },\n      ],\n    };\n\n    this.addField = this.addField.bind(this);\n    this.removeField = this.removeField.bind(this);\n    this.calculateAvailableId = this.calculateAvailableId.bind(this);\n  }\n\n  calculateAvailableId() {\n    const {\n      companies,\n    } = this.state;\n\n    const arr = companies.map((item) => parseInt(item.id.split(\'-\')[1], 10));\n\n    let currentHighestId = Math.max(...arr);\n    currentHighestId = currentHighestId !== -Infinity ? currentHighestId : 0;\n\n    const highestAvailableId = currentHighestId + 1;\n\n    return highestAvailableId;\n  }\n\n  addField() {\n    const {\n      companies,\n    } = this.state;\n\n    const highestAvailableId = this.calculateAvailableId();\n\n    // add a new field refrence to the <Form /> component\n    this.setState({\n      companies: companies.concat({ id: `company-${highestAvailableId}` }),\n    });\n  }\n\n  removeField(idx) {\n    const {\n      companies,\n    } = this.state;\n\n    // remove a field refrence to the <Form /> component\n    this.setState({\n      companies: companies.filter((_, index) => idx !== index),\n    });\n  }\n\n  render() {\n    const {\n      companies,\n    } = this.state;\n\n    const highestAvailableId = this.calculateAvailableId();\n\n    return (\n      <Form\n        validate\n      >\n        {/* render the <Field /> components based on our field refrences */}\n        {companies.map((company, idx) => (\n          <div>\n            <Field\n              id={company.id}\n              placeholder={`Company ${company.id.split(\'-\')[1]}`}\n              type="text"\n              required\n            />\n            <Button\n              id="removeField"\n              // add the rfpRole property\n              rfpRole="removeField"\n              type="button"\n              // add the fieldId property to remove the field from the state of the <Form /> component\n              fieldId={company.id}\n              onClick={() => this.removeField(idx)}\n            >\n              Remove Company\n            </Button>\n          </div>\n        ))}\n        <div>\n          <Button\n            id="addField"\n            // add the rfpRole property\n            rfpRole="addField"\n            type="button"\n            // add the field property to add to the state state of the <Form /> component\n            field={{\n              id: `company-${highestAvailableId}`,\n              type: \'text\',\n              required: true,\n            }}\n            onClick={() => this.addField()}\n          >\n            Add Company\n          </Button>\n        </div>\n        <div>\n          <Button\n            id="submit"\n            type="submit"\n            onClick={(state) => {\n              alert(JSON.stringify(state, null, 2));\n              alert(\'open the console to see the whole state...\');\n              console.log(state);\n            }}\n          >\n            submit\n          </Button>\n        </div>\n      </Form>\n    );\n  }\n}\n\nexport { DynamicFields };\n')),o.a.createElement(i.MDXTag,{name:"p",components:n},"Now render this Component. Everytime you click on the button ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Add Company")," you get a new field, and everytime you click on the button ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Remove Company")," you remove the corresponding field."),o.a.createElement(l.Playground,{__position:0,__code:"<DynamicFieldsOnClick />",__scope:{props:t,Form:r.d,Button:r.a,Field:r.b,Select:r.f,RadioGroup:r.e,DynamicFieldsOnChange:h,DynamicFieldsOnClick:E}},o.a.createElement(E,null)),o.a.createElement(i.MDXTag,{name:"h2",components:n,props:{id:"onchange"}},"onChange"),o.a.createElement(i.MDXTag,{name:"p",components:n},"First off, import your components."),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"import React from 'react';\nimport {\n  Form,\n  Field,\n  Button,\n} from 'react-form-package';\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"The next step is to create a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"class")," that will render our form. "),o.a.createElement(i.MDXTag,{name:"p",components:n},"Everything stays the same as in the example above, except:"),o.a.createElement(i.MDXTag,{name:"p",components:n},"That we now use a ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dynamic")," property and the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"field")," property on the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field />")," component. the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"field")," property takes the same properties as in the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," component. The ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"dynamic")," property indicates that this ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field />")," component is dynamic and adds a new field in the state of the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component when this ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field />")," is filled."),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"class DynamicFields extends React.Component {\n  constructor(props) {\n    super(props);\n\n    // the field refrences that we use to render in our <Form /> component\n    this.state = {\n      companies: [\n        {\n          id: 'company-0',\n        },\n      ],\n    };\n\n    this.addField = this.addField.bind(this);\n    this.removeField = this.removeField.bind(this);\n    this.calculateAvailableId = this.calculateAvailableId.bind(this);\n  }\n\n  calculateAvailableId() {\n    const {\n      companies,\n    } = this.state;\n\n    const arr = companies.map((item) => parseInt(item.id.split('-')[1], 10));\n\n    let currentHighestId = Math.max(...arr);\n    currentHighestId = currentHighestId !== -Infinity ? currentHighestId : 0;\n\n    const highestAvailableId = currentHighestId + 1;\n\n    return highestAvailableId;\n  }\n\n  addField(state, id) {\n    const {\n      companies,\n    } = this.state;\n\n    const highestAvailableId = this.calculateAvailableId();\n\n    // add a new field refrence to the <Form /> component\n    if (state.data[id] && parseInt(id.split('-')[1], 10) + 1 === highestAvailableId) {\n      this.setState({\n        companies: companies.concat({ id: `company-${highestAvailableId}` }),\n      });\n    }\n  }\n\n  removeField(idx) {\n    const {\n      companies,\n    } = this.state;\n\n    // remove a field refrence to the <Form /> component\n    this.setState({\n      companies: companies.filter((_, index) => idx !== index),\n    });\n  }\n\n  render() {\n    const {\n      companies,\n    } = this.state;\n\n    const highestAvailableId = this.calculateAvailableId();\n\n    return (\n      <Form>\n        {/* render the <Field /> components based on our field refrences */}\n        {companies.map((company, idx) => (\n          <div>\n            <Field\n              id={company.id}\n              placeholder={`Company ${company.id.split('-')[1]}`}\n              type=\"text\"\n              required\n              // add the dynamic property \n              dynamic\n              // add the field property to add to the state state of the <Form /> component\n              field={{\n                id: `company-${highestAvailableId}`,\n                type: 'text',\n                required: true,\n              }}\n              onChange={(state) => this.addField(state, company.id)}\n            />\n            {companies.length && (\n              <Button\n                id=\"removeField\"\n                // add the rfpRole property\n                rfpRole=\"removeField\"\n                type=\"button\"\n                // add the fieldId property to remove the field from the state of the <Form /> component\n                fieldId={company.id}\n                onClick={() => this.removeField(idx)}\n              >\n                Remove Company\n              </Button>\n            )}\n\n          </div>\n        ))}\n        <div>\n          <Button\n            id=\"submit\"\n            type=\"submit\"\n            onClick={(state) => {\n              alert(JSON.stringify(state, null, 2));\n              alert('open the console to see the whole state...');\n              console.log(state);\n            }}\n          >\n            submit\n          </Button>\n        </div>\n      </Form>\n    );\n  }\n}\n\nexport { DynamicFieldsOnChange };\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"Now render this Component. Everytime you fill out the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field />")," component you will add a new ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field />"),", and everytime you click on the button ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Remove Company")," you remove the corresponding field."),o.a.createElement(l.Playground,{__position:1,__code:"<DynamicFieldsOnChange />",__scope:{props:t,Form:r.d,Button:r.a,Field:r.b,Select:r.f,RadioGroup:r.e,DynamicFieldsOnChange:h,DynamicFieldsOnClick:E}},o.a.createElement(h,null)))}}}]);