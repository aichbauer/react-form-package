(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{vhS2:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk"),n("mXGw");var a=n("/FXl"),i=n("TjRS"),o=n("oXiK"),l=n("ZFoC"),r=n("5HJp");n("aD51");function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"docz/120.stateManipulation.mdx"}});var c={_frontmatter:s},p=i.a;function d(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,["components"]);return Object(a.b)(p,u({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"state-manipulation"},"State Manipulation"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"How to manipulate the state before it is validated")),Object(a.b)("p",null,"Sometimes you need to manipulate the value of a input. It is not recommended, but there are some edge cases and situations where this comes in handy, e.g. you have an input and you have to ensure that the user capitalizes the first letter, e.g. on names."),Object(a.b)("p",null,"For this use cases there is a property called ",Object(a.b)("inlineCode",{parentName:"p"},"preOnChange"),". This property takes a function that returns the new value of the input. You can only manipulate the value of the current input field."),Object(a.b)("p",null,"The next example manipulates the input value that it always capitalizes the first letter of every word in the input field."),Object(a.b)(l.c,{__position:0,__code:'<Form validate>\n  <div>\n    <div>Name:</div>\n    <Field\n      id="name"\n      type="text"\n      // `value` is the current value of the input field\n      preOnChange={value => autocapitalize(value, \'words\')}\n      required\n    />\n  </div>\n  <div>\n    <Button\n      id="submit"\n      type="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:n,DefaultLayout:i.a,Form:o.d,Field:o.b,Button:o.a,Playground:l.c,autocapitalize:r.autocapitalize},mdxType:"Playground"},Object(a.b)(o.d,{validate:!0,mdxType:"Form"},Object(a.b)("div",null,Object(a.b)("div",null,"Name:"),Object(a.b)(o.b,{id:"name",type:"text",preOnChange:function(e){return Object(r.autocapitalize)(e,"words")},required:!0,mdxType:"Field"})),Object(a.b)("div",null,Object(a.b)(o.a,{id:"submit",type:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)},mdxType:"Button"},"Submit")))))}d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"docz/120.stateManipulation.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---docz-120-state-manipulation-mdx-aae87ec0298737325b5c.js.map