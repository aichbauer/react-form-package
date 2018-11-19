(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"./docz/button.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js"),r=a("./src/index.js"),l=a("./node_modules/docz/dist/index.m.js");function p(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components,a=p(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"button"}},"Button"),m.a.createElement(o.MDXTag,{name:"p",components:n},"This component has to be a child within the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component. This component gets the state from the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component and returns it on its onClick prop. If the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component has the validate prop set, the button will be disabled as long as the form is valid."),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic Usage"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import {\n  Form,\n  Button,\n} from 'react-form-package';\n")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Render a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," with a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," component."),m.a.createElement(l.Playground,{__position:0,__code:'<Form>\n  <div>\n    <Button\n      id="submit"\n      type="submit"\n      onClick={state => alert(JSON.stringify(state, null, 2))}\n    >\n      Click me to see the state of the form\n    </Button>\n  </div>\n</Form>',__scope:{props:a,Form:r.d,Field:r.b,Button:r.a}},m.a.createElement(r.d,null,m.a.createElement("div",null,m.a.createElement(r.a,{id:"submit",type:"submit",onClick:function(e){return alert(JSON.stringify(e,null,2))}},"Click me to see the state of the form")))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"usage-with-actual-values"}},"Usage with actual values"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import {\n  Form,\n  Button,\n  Field,\n} from 'react-form-package';\n")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Render a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," with a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," and a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field />")," component."),m.a.createElement(l.Playground,{__position:1,__code:'<Form>\n  <div>\n    <div>Email</div>\n    <div>\n      <Field id="email" type="email" reuqired />\n    </div>\n  </div>\n  <div>\n    <Button\n      id="submit"\n      type="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:a,Form:r.d,Field:r.b,Button:r.a}},m.a.createElement(r.d,null,m.a.createElement("div",null,m.a.createElement("div",null,"Email"),m.a.createElement("div",null,m.a.createElement(r.b,{id:"email",type:"email",reuqired:!0}))),m.a.createElement("div",null,m.a.createElement(r.a,{id:"submit",type:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit")))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Property\xa0"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Required"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Default"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"id\xa0"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"true"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"type"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"true"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"submit"))),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"onClick"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"returns the state of the form")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"rfpRole"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"only needed for ",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"/dynamic-field-2"}},"dynamically added fields"),", either ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"addField")," or ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"removeField"))),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"fieldId"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"only needed for ",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"/dynamic-field-2"}},"dynamically added fields")," on a button with rfpRole ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"removeField")," (the id of the field to remove)")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"field"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Object"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"only needed for ",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"/dynamic-field-2"}},"dynamically added fields")," on a button with rfpRole ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"addField"),". This object holds at least ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"type"),", and may hold ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"min"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"max"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"required"))))))}}}]);