(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"./docz/30.simpleForm.mdx":function(e,t,n){"use strict";n.r(t);var a=n("./node_modules/react/index.js"),o=n.n(a),i=n("./node_modules/@mdx-js/tag/dist/index.js"),l=n("./src/index.js"),r=n("./node_modules/docz/dist/index.m.js");function m(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}t.default=function(e){var t=e.components,n=m(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",components:t},o.a.createElement(i.MDXTag,{name:"h1",components:t,props:{id:"simple-form"}},"Simple Form"),o.a.createElement(i.MDXTag,{name:"p",components:t},"There are five (six) different components within this package. The ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"<FieldWrapper />")," component is only here for edge cases, e.g. working with third party components. So for this simple example we stick to these five:"),o.a.createElement(i.MDXTag,{name:"pre",components:t},o.a.createElement(i.MDXTag,{name:"code",components:t,parentName:"pre",props:{className:"language-jsx",metaString:""}},"import {\n  Button,\n  Field,\n  Form,\n  RadioGroup,\n  Select,\n} from 'react-form-package';\n")),o.a.createElement(i.MDXTag,{name:"p",components:t},"If you are familiar with writing HTML forms than you are all set up. There are no complex data props or functions that you have to call before you can set up a form and validate its input like in most other libraries. Why should you care about writing the validations for your form yourself? An email, a date, a url, and so on, will always have the same structure. ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"p"},"react-form-package")," will not only help you by your forms state management, it also will help you validating your forms correctly."),o.a.createElement(i.MDXTag,{name:"h2",components:t,props:{id:"basic-usage"}},"Basic Usage"),o.a.createElement(i.MDXTag,{name:"ul",components:t},o.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"li"},"Every ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"<Button>"),", ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"<Field>"),", ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"<RadioGroup>"),", and ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"<Select>")," component must have an ",o.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"em"},"id property")," and a ",o.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"em"},"type property")," ")),o.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"li"},o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"<Select>")," components have ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"<option>")," childs which must have a ",o.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"em"},"value property")," ")),o.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"li"},o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"<RadioGroup>")," components have ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"<input>")," childs which must have an ",o.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"em"},"id property"),", ",o.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"em"},"type property"),", and ",o.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"em"},"name property")," ")),o.a.createElement(i.MDXTag,{name:"li",components:t,parentName:"ul"},o.a.createElement(i.MDXTag,{name:"em",components:t,parentName:"li"},"If you want the form to valitate inputs and show error messages simply add a ",o.a.createElement(i.MDXTag,{name:"strong",components:t,parentName:"em"},"validate prop")," on the ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:t,parentName:"em"},"<Form>")," component "))),o.a.createElement(i.MDXTag,{name:"p",components:t},"In this example we use all components and types this library supports:"),o.a.createElement(r.Playground,{__position:0,__code:'<Form validate>\n  <div>\n    <div>checkbox</div>\n    <Field type="checkbox" id="checkbox" />\n  </div>\n  <div>\n    <div>textarea</div>\n    <Field rows="5" cols="30" type="textarea" id="textarea" />\n  </div>\n  <div>\n    <div>date</div>\n    <Field type="date" id="date" />\n  </div>\n  <div>\n    <div>datetime-local</div>\n    <Field type="datetime-local" id="datetime-local" />\n  </div>\n  <div>\n    <div>email</div>\n    <Field type="email" id="email" />\n  </div>\n  <div>\n    <div>number</div>\n    <Field type="number" id="number" />\n  </div>\n  <div>\n    <div>tel</div>\n    <Field type="tel" id="tel" />\n  </div>\n  <div>\n    <div>text</div>\n    <Field type="text" id="text" />\n  </div>\n  <div>\n    <div>password</div>\n    <Field type="password" id="password" />\n  </div>\n  <div>\n    <div>time</div>\n    <Field type="time" id="time" />\n  </div>\n  <div>\n    <div>url</div>\n    <Field type="url" id="url" />\n  </div>\n  <div>\n    <div>select</div>\n    <Select id="select" type="select">\n      <option disabled value="">\n        --- Choose an option ---\n      </option>\n      <option value="option1">option 1</option>\n      <option value="option2">option 2</option>\n      <option value="option3">option 3</option>\n    </Select>\n  </div>\n  <div>\n    <div>radio</div>\n    <RadioGroup type="radio" id="radio">\n      <input type="radio" name="radio" id="radio1" />\n      radio 1<input type="radio" name="radio" id="radio2" />\n      radio 2<input type="radio" name="radio" id="radio3" />\n      radio 3\n    </RadioGroup>\n  </div>\n  <div>\n    <Button\n      id="submit"\n      type="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      submit\n    </Button>\n  </div>\n</Form>',__scope:{props:n,Form:l.d,Field:l.b,Select:l.f,RadioGroup:l.e,Button:l.a}},o.a.createElement(l.d,{validate:!0},o.a.createElement("div",null,o.a.createElement("div",null,"checkbox"),o.a.createElement(l.b,{type:"checkbox",id:"checkbox"})),o.a.createElement("div",null,o.a.createElement("div",null,"textarea"),o.a.createElement(l.b,{rows:"5",cols:"30",type:"textarea",id:"textarea"})),o.a.createElement("div",null,o.a.createElement("div",null,"date"),o.a.createElement(l.b,{type:"date",id:"date"})),o.a.createElement("div",null,o.a.createElement("div",null,"datetime-local"),o.a.createElement(l.b,{type:"datetime-local",id:"datetime-local"})),o.a.createElement("div",null,o.a.createElement("div",null,"email"),o.a.createElement(l.b,{type:"email",id:"email"})),o.a.createElement("div",null,o.a.createElement("div",null,"number"),o.a.createElement(l.b,{type:"number",id:"number"})),o.a.createElement("div",null,o.a.createElement("div",null,"tel"),o.a.createElement(l.b,{type:"tel",id:"tel"})),o.a.createElement("div",null,o.a.createElement("div",null,"text"),o.a.createElement(l.b,{type:"text",id:"text"})),o.a.createElement("div",null,o.a.createElement("div",null,"password"),o.a.createElement(l.b,{type:"password",id:"password"})),o.a.createElement("div",null,o.a.createElement("div",null,"time"),o.a.createElement(l.b,{type:"time",id:"time"})),o.a.createElement("div",null,o.a.createElement("div",null,"url"),o.a.createElement(l.b,{type:"url",id:"url"})),o.a.createElement("div",null,o.a.createElement("div",null,"select"),o.a.createElement(l.f,{id:"select",type:"select"},o.a.createElement("option",{disabled:!0,value:""},"--- Choose an option ---"),o.a.createElement("option",{value:"option1"},"option 1"),o.a.createElement("option",{value:"option2"},"option 2"),o.a.createElement("option",{value:"option3"},"option 3"))),o.a.createElement("div",null,o.a.createElement("div",null,"radio"),o.a.createElement(l.e,{type:"radio",id:"radio"},o.a.createElement("input",{type:"radio",name:"radio",id:"radio1"}),"radio 1",o.a.createElement("input",{type:"radio",name:"radio",id:"radio2"}),"radio 2",o.a.createElement("input",{type:"radio",name:"radio",id:"radio3"}),"radio 3")),o.a.createElement("div",null,o.a.createElement(l.a,{id:"submit",type:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"submit")))))}}}]);