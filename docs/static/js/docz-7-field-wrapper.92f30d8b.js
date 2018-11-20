(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"./docz/7.fieldWrapper.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),m=a.n(t),o=a("./node_modules/@mdx-js/tag/dist/index.js");a("./src/index.js"),a("./node_modules/docz/dist/index.m.js");function r(e,n){if(null==e)return{};var a,t,m=function(e,n){if(null==e)return{};var a,t,m={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(m[a]=e[a]);return m}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(m[a]=e[a])}return m}n.default=function(e){var n=e.components;r(e,["components"]);return m.a.createElement(o.MDXTag,{name:"wrapper",components:n},m.a.createElement(o.MDXTag,{name:"h1",components:n,props:{id:"fieldwrapper"}},"FieldWrapper"),m.a.createElement(o.MDXTag,{name:"blockquote",components:n},m.a.createElement(o.MDXTag,{name:"p",components:n,parentName:"blockquote"},"This component is here for edge cases where you get the state from another component and you have to pass it to the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component manually, e.g. third party components.")),m.a.createElement(o.MDXTag,{name:"p",components:n},"This component has to be a child within the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component. This component exposes three additional props to its child component so that you are able to use third party components."),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"basic-usage"}},"Basic Usage"),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import {\n  Form,\n  FieldWrapper,\n} from 'react-form-package';\n")),m.a.createElement(o.MDXTag,{name:"p",components:n},"Render a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," with an ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<FieldWrapper />")," and a ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Button />")," component."),m.a.createElement(o.MDXTag,{name:"p",components:n},"Take a look into the ",m.a.createElement(o.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"/third-party-components"}},"Third Party Components Section")," to see how you can use this component properly."),m.a.createElement(o.MDXTag,{name:"pre",components:n},m.a.createElement(o.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx",metaString:""}},'  <Form>\n    <div>\n      <FieldWrapper type="text" id="fieldwrapper">\n        {/*\n          Render a child component that gets access to\n\n          onFocus\n          onBlur\n          onChange\n        */}\n      </FieldWrapper>\n    <div>\n      <Button id="submit" type="submit" onClick={(state) => {\n        alert(JSON.stringify(state, null, 2));\n        alert(\'open the console to see the whole state...\');\n        console.log(state);\n      }}\n      >Submit</Button>\n    </div>\n  </Form>\n')),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"props"}},"Props"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Property\xa0"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Required"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Default"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"id\xa0"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"true"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"type"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"true"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"checkbox"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"date"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"textarea"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"datetime-local"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"email"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"number"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"tel"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"text"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"password"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"time"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"url"),", ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"file"))),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"required"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Bool"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"min"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"-1"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"max"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"-1"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"errorMessage"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"String"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"define your own custom error message for the input")))),m.a.createElement(o.MDXTag,{name:"h2",components:n,props:{id:"props-that-get-exposed-to-the-child-component"}},"Props that get exposed to the child component"),m.a.createElement(o.MDXTag,{name:"table",components:n},m.a.createElement(o.MDXTag,{name:"thead",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"thead"},m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Property\xa0"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Type"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Required"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Default"),m.a.createElement(o.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Description"))),m.a.createElement(o.MDXTag,{name:"tbody",components:n,parentName:"table"},m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"onFocus"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"pass your ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"value")," to this function to update the state of the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"<Form />")," component")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"onChange"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"pass your ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"value")," to this function to update the state of the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"<Form />")," component")),m.a.createElement(o.MDXTag,{name:"tr",components:n,parentName:"tbody"},m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"onBlur"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"Func"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"false"),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}}),m.a.createElement(o.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"pass your ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"value")," to this function to update the state of the ",m.a.createElement(o.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"<Form />")," component")))))}}}]);