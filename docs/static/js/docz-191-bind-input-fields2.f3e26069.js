(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"./docz/191.bindInputFields2.mdx":function(e,n,t){"use strict";t.r(n);var a=t("./node_modules/react/index.js"),o=t.n(a),l=t("./node_modules/@mdx-js/tag/dist/index.js"),r=t("./src/index.js"),i=t("./node_modules/docz/dist/index.m.js");function m(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}n.default=function(e){var n=e.components,t=m(e,["components"]);return o.a.createElement(l.MDXTag,{name:"wrapper",components:n},o.a.createElement(l.MDXTag,{name:"h1",components:n,props:{id:"bind-input-fields"}},"Bind Input Fields"),o.a.createElement(l.MDXTag,{name:"p",components:n},"Sometimes it is not enough to bind the the value of an input field to just one single different input field. So you can also pass an array of ids to the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bindTo")," prop. As we learned in the ",o.a.createElement(l.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/bind-input-fields"}},"Bind Input Fields")," chapter, the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bindToCallback")," is only triggered when the input field to which it is bound was not touched (blurred) yet. This sometimes has a problematic effect, e.g. if you have a select input to choose a email template, but everytime the user switches the select option, the template should be switched, even if the user touched one of the fields it was bound to. This can be achieved if you set a property called ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bindToAlways"),". If you return a single value from the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bindToCallback")," every bound field will be populated with this value. If you want to have different values for each binding thn you can return an array of values. The binding will be in the same order as the order of the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bindTo")," array. If the length of the array of the return value of the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bindToCallback")," does not match the length of the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"bindTo")," ids, only the fields with an return value will be populated."),o.a.createElement(l.MDXTag,{name:"h2",components:n,props:{id:"bind-an-input-value-to-another-input-value"}},"Bind an input value to another input value"),o.a.createElement(l.MDXTag,{name:"p",components:n},"To handle such cases there are two properties available on the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field />"),", the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<RadioGroup />"),", and the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Select />")," component."),o.a.createElement(l.MDXTag,{name:"table",components:n},o.a.createElement(l.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(l.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(l.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Property\xa0"),o.a.createElement(l.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),o.a.createElement(l.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Required"),o.a.createElement(l.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Default"),o.a.createElement(l.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),o.a.createElement(l.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(l.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"bindTo"),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String, Array"),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id"),"/",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"ids")," of the field/fields you want to manipulate")),o.a.createElement(l.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"bindToAlways"),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Bool"),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"only needed if you want that the bindToCallback is triggered even the bound input field was already touched (blurred)")),o.a.createElement(l.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"bindToCallback"),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),o.a.createElement(l.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the callback to set the target's (",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"bindTo"),") input value, which gets called ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onChange"))))),o.a.createElement(l.MDXTag,{name:"h3",components:n,props:{id:"basic-usage"}},"Basic Usage"),o.a.createElement(l.MDXTag,{name:"p",components:n},"In our example we use ",o.a.createElement(l.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Select")," input to choose between different email templates."),o.a.createElement(i.Playground,{__position:0,__code:'<Form>\n    <div>\n      <div>Email Template:</div>\n      <Select\n        id="emailTemplate"\n        bindTo={[\'subject\', \'body\']}\n        bindToAlways\n        bindToCallback={value => {\n          if (value === \'friends\') {\n            return [\n              "What\'s up?", // subject as it appears first in the `bindTo` prop\n              \'Just take a look at this meme...\', // body as it appears second in the `bindTo` prop\n            ]\n          }\n          return [\n            \'Weekly report\',\n            `Dear Boss,\n...\n...\n            `,\n          ]\n        }}\n      >\n        <option disabled value="">\n          --- Select an email template ---\n        </option>\n        <option value="friends">Friends</option>\n        <option value="boss">Boss</option>\n      </Select>\n    </div>\n    <div>\n      <div>Subject:</div>\n      <Field id="subject" type="text" />\n    </div>\n    <div>\n      <div>Body:</div>\n      <Field id="body" type="textarea" rows="5" cols="40" />\n    </div>\n    <div>\n      <Button\n        id="submit"\n        type="submit"\n        onClick={state => {\n          alert(JSON.stringify(state, null, 2))\n          alert(\'open the console to see the whole state...\')\n          console.log(state)\n        }}\n      >\n        Submit\n      </Button>\n    </div>\n  </Form>',__scope:{props:t,Form:r.d,Field:r.b,Select:r.f,Button:r.a}},o.a.createElement(r.d,null,o.a.createElement("div",null,o.a.createElement("div",null,"Email Template:"),o.a.createElement(r.f,{id:"emailTemplate",bindTo:["subject","body"],bindToAlways:!0,bindToCallback:function(e){return"friends"===e?["What's up?","Just take a look at this meme..."]:["Weekly report","Dear Boss,\n...\n...\n            "]}},o.a.createElement("option",{disabled:!0,value:""},"--- Select an email template ---"),o.a.createElement("option",{value:"friends"},"Friends"),o.a.createElement("option",{value:"boss"},"Boss"))),o.a.createElement("div",null,o.a.createElement("div",null,"Subject:"),o.a.createElement(r.b,{id:"subject",type:"text"})),o.a.createElement("div",null,o.a.createElement("div",null,"Body:"),o.a.createElement(r.b,{id:"body",type:"textarea",rows:"5",cols:"40"})),o.a.createElement("div",null,o.a.createElement(r.a,{id:"submit",type:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit")))))}}}]);