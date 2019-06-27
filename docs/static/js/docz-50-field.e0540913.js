(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"./docz/50.field.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js"),o=a("./src/index.js"),l=a("./node_modules/docz/dist/index.m.js");function p(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components,a=p(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",components:n},m.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"field"}},"Field"),m.a.createElement(r.MDXTag,{name:"p",components:n},"This component has to be a child within the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component. This component handles its own state and on any state change it will report it to the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component which validates the whole form."),m.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic Usage"),m.a.createElement(r.MDXTag,{name:"pre",components:n},m.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import {\n  Form,\n  Field,\n} from 'react-form-package';\n")),m.a.createElement(r.MDXTag,{name:"p",components:n},"Render a ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," with an email ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Field />")," and a ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," component."),m.a.createElement(l.Playground,{__position:0,__code:'<Form>\n  <div>\n    <div>Email</div>\n    <div>\n      <Field\n        id="email"\n        type="email"\n        onBlur={state => console.log(\'blur\', state)}\n        reuqired\n      />\n    </div>\n  </div>\n  <div>\n    <Button\n      id="submit"\n      type="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:a,Form:o.d,Field:o.b,Button:o.a}},m.a.createElement(o.d,null,m.a.createElement("div",null,m.a.createElement("div",null,"Email"),m.a.createElement("div",null,m.a.createElement(o.b,{id:"email",type:"email",onBlur:function(e){return console.log("blur",e)},reuqired:!0}))),m.a.createElement("div",null,m.a.createElement(o.a,{id:"submit",type:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit")))),m.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),m.a.createElement(r.MDXTag,{name:"table",components:n},m.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Property\xa0"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Required"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Default"),m.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"id\xa0"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"true"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"type"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"true"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"checkbox"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"date"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"textarea"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"datetime-local"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"email"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"number"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"tel"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"text"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"password"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"time"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"url"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"file"))),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"required"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Bool"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"min"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String (digit or date (YYYY-MM-DD))"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"text"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"textarea"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"password"),": has to have at least ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"min")," characters; ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"number"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"date"),": has to be at least ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"min"))),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"max"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String (digit or date (YYYY-MM-DD))"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"text"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"textarea"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"password"),": has to have at least ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"min")," characters; ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"number"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"date"),": has to be at least ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"min"))),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"match"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"RegEx"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"the input value has to match the ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"regular expression"))),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"sameAs"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0the input value has to have the same value as the input field with the id specified in ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"sameAs")),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"preOnChange"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func\xa0"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false\xa0"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"manipulate the state before its validated (see ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"/state-manipulation"}},"State Manipulation"),")")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"errorMessage"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"define your own custom error message for the input")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"onFocus"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"get access to the state of the form when the user focus on the input")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"onChange"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"get access to the state of the form when the user changes the input")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"onBlur"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"get access to the state of the form when the user blurs the input")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"dynamic"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Bool"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"only needed for ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"/dynamic-field-2"}},"dynamically added fields"))),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"field"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Object"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"only needed for ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"/dynamic-field-2"}},"dynamically added fields"),". This object holds at least ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"type"),", and may hold ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"min"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"max"),", ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"required"))),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"bintTo"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String, Array"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0only needed for ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"/bind-input-fields"}},"binding input fields"),". The id/ids of the input/inputs you want to manipulate")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"bintToAllways"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Bool"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0only needed for ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"/bind-input-fields-2"}},"binding input fields"),". Only needed if you want that the bindToCallback is triggered even the bound input field was already touched (blurred)")),m.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"bindToCallback"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"only needed for ",m.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"td",props:{href:"/bind-input-fields"}},"binding input fields"),". The callback to set the target's (",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"bindTo"),") input value, which gets called ",m.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onChange")," (return a single value or an array of values)")))))}}}]);