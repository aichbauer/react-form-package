(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./docz/state.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");function r(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components;r(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"state"}},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#state"}},m.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"State"),m.a.createElement(o.MDXTag,{name:"blockquote",components:n},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"blockquote"},"Working with the state data and meta data")),m.a.createElement(o.MDXTag,{name:"p",components:n},"A simple Example of how your Form could look like:"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},'<Form>\n  <Field id="email" type="email" required />\n  <Field id="password" type="password" required />\n  <Button\n    id="button"\n    type="submit"\n    onClick={(state) => this.handleOnClick(state)}\n  >\n    Submit\n  </Button>\n</Form>\n')),m.a.createElement(o.MDXTag,{name:"blockquote",components:n},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"blockquote"},"You can also use ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onFocus"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange"),", and ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onBlur")," on every ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Field"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Select"),", or ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"RadioGroup")," components to get access to the state of the form (",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/react-form-package/on-focus-on-change-on-blur"}},"more info"),")")),m.a.createElement(o.MDXTag,{name:"p",components:n},"As you can see the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," component has a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onClick")," property. This property takes a function. The ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"handleOnClick")," function could look something like:"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js"}},"async handleOnClick(state) {\n  // do something with the state\n  // e.g. send data to a server\n  try {\n    const response = await fetch('https://server.com/login', {\n      method: 'POST',\n      headers: {\n        'Content-Type': 'application/json; charset=utf-8',\n      },\n      body: JSON.stringify(state.data);\n    });\n    // do something with the response\n  } catch(error) {\n    // do something with the error\n  }\n}\n")),m.a.createElement(o.MDXTag,{name:"p",components:n},"As you can see the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"state")," parameter is an object. It has three different properties."),m.a.createElement(o.MDXTag,{name:"ul",components:n},m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"li"},"data"),": ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"object")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"li"},"meta"),": ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"object")),m.a.createElement(o.MDXTag,{name:"li",components:n,parentName:"ul"},m.a.createElement(o.MDXTag,{name:"strong",components:n,parentName:"li"},"formValid"),": ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"boolean"))),m.a.createElement(o.MDXTag,{name:"p",components:n},"In our case ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"data")," would hold:"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json"}},'{\n  "data": {\n    "email": "",\n    "password": ""\n  }\n}\n')),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"meta")," would hold:"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json"}},'{\n  "meta": {\n    "email": {\n      "initialValue": "",\n      "dirty": false,\n      "pristine": true,\n      "visited": false,\n      "touched": false,\n      "value": "",\n      "valid": false,\n      "invalid": true,\n      "rules": {\n        "type": "email",\n        "min": -1,\n        "max": -1,\n        "required": true,\n      }\n    },\n    "password": {\n      "initialValue": "",\n      "dirty": false,\n      "pristine": true,\n      "visited": false,\n      "touched": false,\n      "value": "",\n      "valid": false,\n      "invalid": true,\n      "rules": {\n        "type": "password",\n        "min": -1,\n        "max": -1,\n        "required": true,\n      }\n    }\n  }\n}\n')),m.a.createElement(o.MDXTag,{name:"p",components:n},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"formValid")," would hold:"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-json"}},'{\n  "formValid": false\n}\n')),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"meta-description"}},m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#meta-description"}},m.a.createElement(o.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Meta Description"),m.a.createElement(o.MDXTag,{name:"p",components:n},"Meta data gives you an overview of what happened on that field. E.g. if a field is ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"pristine")," you could deside to not send its data to the server since, nothing changed."),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Property\xa0"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"initialValue"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"String")," or ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Bool")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"dirty"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Bool")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"true")," if the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"value !== initialValue"))),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"pristine"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Bool")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"true")," if the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"value === initialValue"))),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"visited"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Bool")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"true")," if this field was focused (",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onFocus"),")")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"touched"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Bool")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"true")," if this field was blurred (",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onBlur"),")")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"value"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"String")," or ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Bool")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"valid"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Bool")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"true")," if this field is valid (passed all rules)")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"invalid"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Bool")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"true")," if this field is invalid (failed at least one rules)")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"rules"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"object")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the rules for the validation of this field")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"rules.type"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"String")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"checkbox"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"date"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"textarea"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"datetime-local"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"email"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"number"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"tel"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"text"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"password"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"time"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"url"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"radio"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"select"))),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"rules.min"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Number")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"this field has to have at least ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"min")," characters (",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Int"),")")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"rules.max"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Number")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"this field has to have at maximum ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"max")," characters (",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Int"),")")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"rules.required"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"Bool")),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"this field is required (has to have a value)")))))}}}]);