(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{cJVV:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return b})),n.d(t,"default",(function(){return p}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),i=n("TjRS"),l=n("oXiK"),d=n("ZFoC");n("aD51");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var b={};void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&!b.hasOwnProperty("__filemeta")&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docz/90.formValidation.mdx"}});var o={_frontmatter:b},m=i.a;function p(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(m,r({},o,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"form-validation"},"Form Validation"),Object(a.b)("p",null,"Almost any form needs validation in some way. Fortunatly ",Object(a.b)("inlineCode",{parentName:"p"},"react-form-package")," comes with an declarative inbuild validation system."),Object(a.b)("p",null,"What does decalrative mean in that way?"),Object(a.b)("h2",{id:"basic-example"},"Basic Example"),Object(a.b)("p",null,"If you want that your input field only allows valid emails you can add the type ",Object(a.b)("inlineCode",{parentName:"p"},"email")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"<Field />")," component. If you also set ",Object(a.b)("inlineCode",{parentName:"p"},"validate")," property on the ",Object(a.b)("inlineCode",{parentName:"p"},"<Form />")," component the button only allowes to submit if the form is completely valid."),Object(a.b)("p",null,"In the next example you are able to submit the form if the input is empty (because this field is not required) and if the input value is set to a valid email, but not if the input value is not a valid email."),Object(a.b)(d.c,{__position:0,__code:'<Form validate>\n  <div>\n    Email\n    <div>\n      <Field type="email" id="email" />\n    </div>\n  </div>\n  <div>\n    <Button\n      type="submit"\n      id="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:n,DefaultLayout:i.a,Form:l.d,Field:l.b,Button:l.a,Playground:d.c},mdxType:"Playground"},Object(a.b)(l.d,{validate:!0,mdxType:"Form"},Object(a.b)("div",null,"Email",Object(a.b)("div",null,Object(a.b)(l.b,{type:"email",id:"email",mdxType:"Field"}))),Object(a.b)("div",null,Object(a.b)(l.a,{type:"submit",id:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)},mdxType:"Button"},"Submit")))),Object(a.b)("p",null,"If you add the property ",Object(a.b)("inlineCode",{parentName:"p"},"required")," to the ",Object(a.b)("inlineCode",{parentName:"p"},"<Field />")," component, everything stays the same except that you are not able to submit the form if the input value is empty."),Object(a.b)(d.c,{__position:1,__code:'<Form validate>\n  <div>\n    Email\n    <div>\n      <Field type="email" id="email" required />\n    </div>\n  </div>\n  <div>\n    <Button\n      type="submit"\n      id="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:n,DefaultLayout:i.a,Form:l.d,Field:l.b,Button:l.a,Playground:d.c},mdxType:"Playground"},Object(a.b)(l.d,{validate:!0,mdxType:"Form"},Object(a.b)("div",null,"Email",Object(a.b)("div",null,Object(a.b)(l.b,{type:"email",id:"email",required:!0,mdxType:"Field"}))),Object(a.b)("div",null,Object(a.b)(l.a,{type:"submit",id:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)},mdxType:"Button"},"Submit")))),Object(a.b)("h2",{id:"type-validation"},"Type validation"),Object(a.b)("p",null,"A ",Object(a.b)("inlineCode",{parentName:"p"},"<Field />")," component can have diffferent ",Object(a.b)("inlineCode",{parentName:"p"},"type")," properties."),Object(a.b)("p",null,"Additionally to the validation, if the browser supports HTML5 input types the input fields will be displayed as them, only allowing numbers by default if the type is set to ",Object(a.b)("inlineCode",{parentName:"p"},"number"),", etc. If the browser does not support HTML5 it will automatically uses a text input that keeps the validation. If the user inputs a non numeric character in a ",Object(a.b)("inlineCode",{parentName:"p"},"number")," input it will display the the error message and you cannot submit the form."),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"checkbox")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"no")," additional validation")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"date")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"validates if the input value matches the format ",Object(a.b)("inlineCode",{parentName:"td"},"YYYY-MM-DD"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"textarea")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"no")," additional validation")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"datetime-local")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"validates if the input value matches the format ",Object(a.b)("inlineCode",{parentName:"td"},"YYYY-MM-DDTHH:MM"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"email")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"validates if the input value matches the ",Object(a.b)("inlineCode",{parentName:"td"},"standard email format"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"number")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"validates if the input value matches a ",Object(a.b)("inlineCode",{parentName:"td"},"valid number"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"tel")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"validates if the input value matches the ",Object(a.b)("inlineCode",{parentName:"td"},"standard phone number format"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"text")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"no")," additional validation")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"password")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"no")," additional validation")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"time")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"validates if the input value matches the format ",Object(a.b)("inlineCode",{parentName:"td"},"HH:MM"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"url")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"validates if the input value matches the ",Object(a.b)("inlineCode",{parentName:"td"},"standard url format"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"file")),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"no")," additional validation")))),Object(a.b)("h2",{id:"additional-rules"},"Additional rules"),Object(a.b)("p",null,"If you are using a ",Object(a.b)("inlineCode",{parentName:"p"},"<Field />")," component you can also add some additional rules for the validation.\n",Object(a.b)("inlineCode",{parentName:"p"},"required")," will work on all components, the ",Object(a.b)("inlineCode",{parentName:"p"},"<Field />"),", the ",Object(a.b)("inlineCode",{parentName:"p"},"<RadioGroup />"),", and the ",Object(a.b)("inlineCode",{parentName:"p"},"<Select />")),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",r({parentName:"tr"},{align:null}),"Property"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Type"),Object(a.b)("th",r({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"required")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Bool"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"validates if the ",Object(a.b)("inlineCode",{parentName:"td"},"input value is not empty"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"min")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"String (digit or date (YYYY-MM-DD))"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"text"),", ",Object(a.b)("inlineCode",{parentName:"td"},"textarea"),", ",Object(a.b)("inlineCode",{parentName:"td"},"password"),": validates if the input value is at least ",Object(a.b)("inlineCode",{parentName:"td"},"min characters long"),"; ",Object(a.b)("inlineCode",{parentName:"td"},"number"),", ",Object(a.b)("inlineCode",{parentName:"td"},"date"),": validates if the input value is at least ",Object(a.b)("inlineCode",{parentName:"td"},"min"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"max")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"String (digit or date (YYYY-MM-DD))"),Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"text"),", ",Object(a.b)("inlineCode",{parentName:"td"},"textarea"),", ",Object(a.b)("inlineCode",{parentName:"td"},"password"),": validates if the input value is maximum ",Object(a.b)("inlineCode",{parentName:"td"},"max characters long"),"; ",Object(a.b)("inlineCode",{parentName:"td"},"number"),", ",Object(a.b)("inlineCode",{parentName:"td"},"date"),": validates if the input value is maximum ",Object(a.b)("inlineCode",{parentName:"td"},"max"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"match")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Regex"),Object(a.b)("td",r({parentName:"tr"},{align:null}),"validates if the input value matches the ",Object(a.b)("inlineCode",{parentName:"td"},"regular expression"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"sameAs")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"String"),Object(a.b)("td",r({parentName:"tr"},{align:null})," validates if the input of this field has the same value as the field specified in ",Object(a.b)("inlineCode",{parentName:"td"},"sameAs"))),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",r({parentName:"tr"},{align:null}),Object(a.b)("inlineCode",{parentName:"td"},"validate")),Object(a.b)("td",r({parentName:"tr"},{align:null}),"Func"),Object(a.b)("td",r({parentName:"tr"},{align:null})," a function that gets access to the value of the field ",Object(a.b)("inlineCode",{parentName:"td"},"(value) => // write your own validation")," (do not forget to write your own errorMessage)")))),Object(a.b)("p",null,"Example with the ",Object(a.b)("inlineCode",{parentName:"p"},"required"),", ",Object(a.b)("inlineCode",{parentName:"p"},"min"),", ",Object(a.b)("inlineCode",{parentName:"p"},"max"),", ",Object(a.b)("inlineCode",{parentName:"p"},"validate"),", and ",Object(a.b)("inlineCode",{parentName:"p"},"sameAs")," properties:"),Object(a.b)(d.c,{__position:2,__code:'<Form validate>\n  <div>\n    Text required, min, max\n    <div>\n      <Field type="text" id="text" min="2" max="5" required />\n    </div>\n  </div>\n  <div>\n    Number required, min, max\n    <div>\n      <Field type="number" id="number" min="2" max="5" required />\n    </div>\n  </div>\n  <div>\n    Text is required and has to validate the `validate` function (value ===\n    \'react\')\n    <div>\n      <Field\n        type="text"\n        id="validate"\n        validate={value => value === \'react\'}\n        errorMessage={\n          \'This field is required\\\\nThis field has to match "react"\'\n        }\n        required\n      />\n    </div>\n  </div>\n  <div>\n    Date required, min, max\n    <div>\n      <Field\n        type="date"\n        id="date"\n        min="2018-12-12"\n        max="2018-12-24"\n        required\n      />\n    </div>\n  </div>\n  <div>\n    Password has to be the same as password 2\n    <div>\n      <Field type="password" id="password" sameAs="password2" required />\n    </div>\n  </div>\n  <div>\n    Password 2 has to be the same as password\n    <div>\n      <Field type="password" id="password2" sameAs="password" required />\n    </div>\n  </div>\n  <div>\n    <Button\n      type="submit"\n      id="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:n,DefaultLayout:i.a,Form:l.d,Field:l.b,Button:l.a,Playground:d.c},mdxType:"Playground"},Object(a.b)(l.d,{validate:!0,mdxType:"Form"},Object(a.b)("div",null,"Text required, min, max",Object(a.b)("div",null,Object(a.b)(l.b,{type:"text",id:"text",min:"2",max:"5",required:!0,mdxType:"Field"}))),Object(a.b)("div",null,"Number required, min, max",Object(a.b)("div",null,Object(a.b)(l.b,{type:"number",id:"number",min:"2",max:"5",required:!0,mdxType:"Field"}))),Object(a.b)("div",null,"Text is required and has to validate the `validate` function (value === 'react')",Object(a.b)("div",null,Object(a.b)(l.b,{type:"text",id:"validate",validate:function(e){return"react"===e},errorMessage:'This field is required\\nThis field has to match "react"',required:!0,mdxType:"Field"}))),Object(a.b)("div",null,"Date required, min, max",Object(a.b)("div",null,Object(a.b)(l.b,{type:"date",id:"date",min:"2018-12-12",max:"2018-12-24",required:!0,mdxType:"Field"}))),Object(a.b)("div",null,"Password has to be the same as password 2",Object(a.b)("div",null,Object(a.b)(l.b,{type:"password",id:"password",sameAs:"password2",required:!0,mdxType:"Field"}))),Object(a.b)("div",null,"Password 2 has to be the same as password",Object(a.b)("div",null,Object(a.b)(l.b,{type:"password",id:"password2",sameAs:"password",required:!0,mdxType:"Field"}))),Object(a.b)("div",null,Object(a.b)(l.a,{type:"submit",id:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)},mdxType:"Button"},"Submit")))),Object(a.b)("p",null,"Example with the match property:"),Object(a.b)(d.c,{__position:3,__code:'<Form validate>\n  <div>\n    Text required and has to match "react"\n    <div>\n      <Field type="text" id="text" match={/react/} required />\n    </div>\n  </div>\n  <div>\n    <Button\n      type="submit"\n      id="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:n,DefaultLayout:i.a,Form:l.d,Field:l.b,Button:l.a,Playground:d.c},mdxType:"Playground"},Object(a.b)(l.d,{validate:!0,mdxType:"Form"},Object(a.b)("div",null,'Text required and has to match "react"',Object(a.b)("div",null,Object(a.b)(l.b,{type:"text",id:"text",match:/react/,required:!0,mdxType:"Field"}))),Object(a.b)("div",null,Object(a.b)(l.a,{type:"submit",id:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)},mdxType:"Button"},"Submit")))),Object(a.b)("p",null,"This is just a simple example, off course you are able to pass any regular expression you would like. If you would like to customize the error messages take a look at ",Object(a.b)("a",r({parentName:"p"},{href:"/react-form-package/custom-error-messages"}),"custom error messages")))}p&&p===Object(p)&&Object.isExtensible(p)&&!p.hasOwnProperty("__filemeta")&&Object.defineProperty(p,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docz/90.formValidation.mdx"}}),p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docz-90-form-validation-mdx-2df56e18a4869fc8445a.js.map