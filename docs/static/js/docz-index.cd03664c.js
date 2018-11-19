(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"./docz/index.mdx":function(e,a,t){"use strict";t.r(a);var n=t("./node_modules/react/index.js"),r=t.n(n),o=t("./node_modules/@mdx-js/tag/dist/index.js"),m=t("./node_modules/docz/dist/index.m.js"),s=t("./src/index.js");function i(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}a.default=function(e){var a=e.components,t=i(e,["components"]);return r.a.createElement(o.MDXTag,{name:"wrapper",components:a},r.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"introduction"}},"Introduction"),r.a.createElement(o.MDXTag,{name:"p",components:a},r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://www.npmjs.com/package/react-form-package"}},r.a.createElement(o.MDXTag,{name:"img",components:a,parentName:"a",props:{src:"https://img.shields.io/npm/v/react-form-package.svg?style=flat-square",alt:"npm"}})),"\xa0",r.a.createElement(o.MDXTag,{name:"img",components:a,parentName:"p",props:{src:"https://img.shields.io/bundlephobia/minzip/react-form-package.svg?style=flat-square",alt:"npm bundle size (minified + gzip)"}}),"\xa0",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://travis-ci.org/aichbauer/react-form-package"}},r.a.createElement(o.MDXTag,{name:"img",components:a,parentName:"a",props:{src:"https://img.shields.io/travis/com/aichbauer/react-form-package/master.svg?style=flat-square",alt:"Travis branch"}})),"\xa0",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://codecov.io/gh/aichbauer/react-form-package"}},r.a.createElement(o.MDXTag,{name:"img",components:a,parentName:"a",props:{src:"https://img.shields.io/codecov/c/github/aichbauer/react-form-package/master.svg?style=flat-square",alt:"Codecov branch"}})),"\xa0",r.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"https://aichbauer.github.io/react-form-package"}},r.a.createElement(o.MDXTag,{name:"img",components:a,parentName:"a",props:{src:"https://img.shields.io/badge/docs%20with-docz-1F2D3D.svg?style=flat-square",alt:"storybook"}}))),r.a.createElement(o.MDXTag,{name:"blockquote",components:a},r.a.createElement(o.MDXTag,{name:"p",components:a,parentName:"blockquote"},"A declarative form component with inbuilt validation and state management")),r.a.createElement(o.MDXTag,{name:"p",components:a},"Install"),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-sh",metaString:""}},"$ npm i react-form-package -S\n")),r.a.createElement(o.MDXTag,{name:"p",components:a},"and import the components from ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-form-package")," and you are ready to go."),r.a.createElement(o.MDXTag,{name:"pre",components:a},r.a.createElement(o.MDXTag,{name:"code",components:a,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import {\n  Form,\n  Field,\n  Button,\n} from 'react-form-package';\n")),r.a.createElement(o.MDXTag,{name:"p",components:a},r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-form-package")," takes care about input validation, state management and user communication by using a declarative approach. ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-form-package")," provides you with the logic and you are responsible for the styling. Write down how your form should look like in a similar struckture as plain HTML and ",r.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-form-package")," takes care of the rest."),r.a.createElement(o.MDXTag,{name:"p",components:a},"But see for yourself:"),r.a.createElement(m.Playground,{__position:0,__code:'<Form validate>\n  <div>Register</div>\n  <div>\n    <div>Email</div>\n    <Field type="email" id="email" required />\n  </div>\n  <div>\n    <div>Password</div>\n    <Field type="password" id="password" min="8" required />\n  </div>\n  <div>\n    <div>Confirm Password</div>\n    <Field type="password" id="password2" min="8" required />\n  </div>\n  <div>\n    <Button\n      type="submit"\n      id="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Register\n    </Button>\n  </div>\n</Form>',__scope:{props:t,Form:s.d,Field:s.b,Button:s.a}},r.a.createElement(s.d,{validate:!0},r.a.createElement("div",null,"Register"),r.a.createElement("div",null,r.a.createElement("div",null,"Email"),r.a.createElement(s.b,{type:"email",id:"email",required:!0})),r.a.createElement("div",null,r.a.createElement("div",null,"Password"),r.a.createElement(s.b,{type:"password",id:"password",min:"8",required:!0})),r.a.createElement("div",null,r.a.createElement("div",null,"Confirm Password"),r.a.createElement(s.b,{type:"password",id:"password2",min:"8",required:!0})),r.a.createElement("div",null,r.a.createElement(s.a,{type:"submit",id:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Register")))))}}}]);