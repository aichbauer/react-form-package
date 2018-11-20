(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./docz/9.select.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),r=t("./node_modules/@mdx-js/tag/dist/index.js"),m=t("./src/index.js"),p=t("./node_modules/docz/dist/index.m.js");function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components,t=l(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"select"}},"Select"),o.a.createElement(r.MDXTag,{name:"p",components:n},"This component has to be a child within the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component. This component must have ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<option />")," components with an value prop as children."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic Usage"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import {\n  Form,\n  Select,\n} from 'react-form-package';\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Render a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," with a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Select />")," and a ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," component."),o.a.createElement(p.Playground,{__position:0,__code:'<Form>\n  <div>\n    <div>Select an option</div>\n    <Select id="select" type="select">\n      <option disabled value="">\n        --- Select an option ---\n      </option>\n      <option value="option1">option 1</option>\n      <option value="option2">option 2</option>\n      <option value="option3">option 3</option>\n    </Select>\n    <div>\n      <Button\n        id="submit"\n        type="submit"\n        onClick={state => {\n          alert(JSON.stringify(state, null, 2))\n          alert(\'open the console to see the whole state...\')\n          console.log(state)\n        }}\n      >\n        Submit\n      </Button>\n    </div>\n  </div>\n</Form>',__scope:{props:t,Form:m.d,Select:m.f,Button:m.a}},o.a.createElement(m.d,null,o.a.createElement("div",null,o.a.createElement("div",null,"Select an option"),o.a.createElement(m.f,{id:"select",type:"select"},o.a.createElement("option",{disabled:!0,value:""},"--- Select an option ---"),o.a.createElement("option",{value:"option1"},"option 1"),o.a.createElement("option",{value:"option2"},"option 2"),o.a.createElement("option",{value:"option3"},"option 3")),o.a.createElement("div",null,o.a.createElement(m.a,{id:"submit",type:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit"))))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Property\xa0"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Required"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Default"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"id\xa0"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"true"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"type"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"true"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"select"))),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"required"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Bool"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"errorMessage"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"define your own custom error message for the input")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"onFocus"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"get access to the state of the form when the user focus on the input")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"onChange"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"get access to the state of the form when the user changes the input")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"onBlur"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"get access to the state of the form when the user blurs the input")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"bintTo"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0only needed for ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"/bind-input-fields"}},"binding input fields"),". The id of the inpu you want to manipulate")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"bindToCallback"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"only needed for ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"/bind-input-fields"}},"binding input fields"),". The callback to set the target's (",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"bindTo"),") input value, which gets called ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onChange"))))))}}}]);