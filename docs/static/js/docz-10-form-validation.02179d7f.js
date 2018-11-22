(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"./docz/10.formValidation.mdx":function(e,a,n){"use strict";n.r(a);var t=n("./node_modules/react/index.js"),m=n.n(t),o=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./src/index.js"),r=n("./node_modules/docz/dist/index.m.js");function i(e,a){if(null==e)return{};var n,t,m=function(e,a){if(null==e)return{};var n,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||(m[n]=e[n]);return m}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],a.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(m[n]=e[n])}return m}a.default=function(e){var a=e.components,n=i(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:a},m.a.createElement(o.MDXTag,{name:"h1",components:a,props:{id:"form-validation"}},"Form Validation"),m.a.createElement(o.MDXTag,{name:"p",components:a},"Almost any form needs validation in some way. Fortunatly ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"react-form-package")," comes with an declarative inbuild validation system."),m.a.createElement(o.MDXTag,{name:"p",components:a},"What does decalrative mean in that way?"),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"basic-example"}},"Basic Example"),m.a.createElement(o.MDXTag,{name:"p",components:a},"If you want that your input field only allows valid emails you can add the type ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"email")," to the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<Field />")," component. If you also set ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"validate")," property on the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<Form />")," component the button only allowes to submit if the form is completely valid."),m.a.createElement(o.MDXTag,{name:"p",components:a},"In the next example you are able to submit the form if the input is empty (because this field is not required) and if the input value is set to a valid email, but not if the input value is not a valid email."),m.a.createElement(r.Playground,{__position:0,__code:'<Form validate>\n  <div>\n    Email\n    <div>\n      <Field type="email" id="email" />\n    </div>\n  </div>\n  <div>\n    <Button\n      type="submit"\n      id="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:n,Form:l.d,Field:l.b,Button:l.a}},m.a.createElement(l.d,{validate:!0},m.a.createElement("div",null,"Email",m.a.createElement("div",null,m.a.createElement(l.b,{type:"email",id:"email"}))),m.a.createElement("div",null,m.a.createElement(l.a,{type:"submit",id:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit")))),m.a.createElement(o.MDXTag,{name:"p",components:a},"If you add the property ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"required")," to the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<Field />")," component, everything stays the same except that you are not able to submit the form if the input value is empty."),m.a.createElement(r.Playground,{__position:1,__code:'<Form validate>\n  <div>\n    Email\n    <div>\n      <Field type="email" id="email" required />\n    </div>\n  </div>\n  <div>\n    <Button\n      type="submit"\n      id="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:n,Form:l.d,Field:l.b,Button:l.a}},m.a.createElement(l.d,{validate:!0},m.a.createElement("div",null,"Email",m.a.createElement("div",null,m.a.createElement(l.b,{type:"email",id:"email",required:!0}))),m.a.createElement("div",null,m.a.createElement(l.a,{type:"submit",id:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit")))),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"type-validation"}},"Type validation"),m.a.createElement(o.MDXTag,{name:"p",components:a},"A ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<Field />")," component can have diffferent ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"type")," properties."),m.a.createElement(o.MDXTag,{name:"p",components:a},"Additionally to the validation, if the browser supports HTML5 input types the input fields will be displayed as them, only allowing numbers by default if the type is set to ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"number"),", etc. If the browser does not support HTML5 it will automatically uses a text input that keeps the validation. If the user inputs a non numeric character in a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"number")," input it will display the the error message and you cannot submit the form."),m.a.createElement(o.MDXTag,{name:"table",components:a},m.a.createElement(o.MDXTag,{name:"thead",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"checkbox")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"no")," additional validation")),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"date")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"validates if the input value matches the format ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"YYYY-MM-DD"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"textarea")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"no")," additional validation")),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"datetime-local")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"validates if the input value matches the format ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"YYYY-MM-DDTHH:MM"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"email")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"validates if the input value matches the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"standard email format"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"number")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"validates if the input value matches a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"valid number"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"tel")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"validates if the input value matches the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"standard phone number format"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"text")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"no")," additional validation")),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"password")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"no")," additional validation")),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"time")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"validates if the input value matches the format ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"HH:MM"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"url")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"validates if the input value matches the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"standard url format"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"file")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"no")," additional validation")))),m.a.createElement(o.MDXTag,{name:"h2",components:a,props:{id:"additional-rules"}},"Additional rules"),m.a.createElement(o.MDXTag,{name:"p",components:a},"If you are using a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<Field />")," component you can also add some additional rules for the validation.\n",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"required")," will work on all components, the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<Field />"),", the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<RadioGroup />"),", and the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"<Select />")),m.a.createElement(o.MDXTag,{name:"table",components:a},m.a.createElement(o.MDXTag,{name:"thead",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Property"),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:a,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:a,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"required")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Bool"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"validates if the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"input value is not empty"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"min")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"validates if the input value is at least ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"min characters long"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"max")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"validates if the input value is at least ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"max characters long"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"match")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"Regex"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"validates if the input value matches the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"regular expression"))),m.a.createElement(o.MDXTag,{name:"tr",components:a,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"sameAs")),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:a,parentName:"tr",props:{align:null}},"\xa0validates if the input of this field has the same value as specified in ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"td"},"sameAs"))))),m.a.createElement(o.MDXTag,{name:"p",components:a},"Example with the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"required"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"min"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"max"),", and ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:a,parentName:"p"},"sameAs")," properties:"),m.a.createElement(r.Playground,{__position:2,__code:'<Form validate>\n  <div>\n    Text required, min, max\n    <div>\n      <Field type="text" id="text" min="2" max="5" required />\n    </div>\n  </div>\n  <div>\n    Password has to be the same as password 2\n    <div>\n      <Field type="password" id="password" sameAs="password2" required />\n    </div>\n  </div>\n  <div>\n    Password 2 has to be the same as password\n    <div>\n      <Field type="password" id="password2" sameAs="password" required />\n    </div>\n  </div>\n  <div>\n    <Button\n      type="submit"\n      id="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:n,Form:l.d,Field:l.b,Button:l.a}},m.a.createElement(l.d,{validate:!0},m.a.createElement("div",null,"Text required, min, max",m.a.createElement("div",null,m.a.createElement(l.b,{type:"text",id:"text",min:"2",max:"5",required:!0}))),m.a.createElement("div",null,"Password has to be the same as password 2",m.a.createElement("div",null,m.a.createElement(l.b,{type:"password",id:"password",sameAs:"password2",required:!0}))),m.a.createElement("div",null,"Password 2 has to be the same as password",m.a.createElement("div",null,m.a.createElement(l.b,{type:"password",id:"password2",sameAs:"password",required:!0}))),m.a.createElement("div",null,m.a.createElement(l.a,{type:"submit",id:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit")))),m.a.createElement(o.MDXTag,{name:"p",components:a},"Example with the match property:"),m.a.createElement(r.Playground,{__position:3,__code:'<Form validate>\n  <div>\n    Text required and has to match "react"\n    <div>\n      <Field type="text" id="text" match={/react/} required />\n    </div>\n  </div>\n  <div>\n    <Button\n      type="submit"\n      id="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:n,Form:l.d,Field:l.b,Button:l.a}},m.a.createElement(l.d,{validate:!0},m.a.createElement("div",null,'Text required and has to match "react"',m.a.createElement("div",null,m.a.createElement(l.b,{type:"text",id:"text",match:/react/,required:!0}))),m.a.createElement("div",null,m.a.createElement(l.a,{type:"submit",id:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit")))),m.a.createElement(o.MDXTag,{name:"p",components:a},"This is just a simple example, off course you are able to pass any regular expression you would like. If you would like to customize the error messages take a look at ",m.a.createElement(o.MDXTag,{name:"a",components:a,parentName:"p",props:{href:"/custom-error-messages"}},"custom error messages")))}}}]);