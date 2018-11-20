(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"./docz/12.customErrorMessages.mdx":function(e,n,t){"use strict";t.r(n);var o=t("./node_modules/react/index.js"),r=t.n(o),a=t("./node_modules/@mdx-js/tag/dist/index.js"),s=t("./src/index.js"),i=t("./node_modules/docz/dist/index.m.js");function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}n.default=function(e){var n=e.components,t=l(e,["components"]);return r.a.createElement(a.MDXTag,{name:"wrapper",components:n},r.a.createElement(a.MDXTag,{name:"h1",components:n,props:{id:"custom-error-messages"}},"Custom Error Messages"),r.a.createElement(a.MDXTag,{name:"p",components:n},"If you want to display your own error messages, use the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"errorMessage")," property on the ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field />"),", ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Select/>"),", or ",r.a.createElement(a.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<RadioGroup/>")," component."),r.a.createElement(i.Playground,{__position:0,__code:'<Form>\n  <div>\n    <div>Email</div>\n    <Field\n      id="email"\n      type="email"\n      required\n      errorMessage="This is a custom error message!"\n    />\n  </div>\n  <div>\n    <Button\n      type="submit"\n      id="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:t,Form:s.d,Button:s.a,Field:s.b}},r.a.createElement(s.d,null,r.a.createElement("div",null,r.a.createElement("div",null,"Email"),r.a.createElement(s.b,{id:"email",type:"email",required:!0,errorMessage:"This is a custom error message!"})),r.a.createElement("div",null,r.a.createElement(s.a,{type:"submit",id:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit")))))}}}]);