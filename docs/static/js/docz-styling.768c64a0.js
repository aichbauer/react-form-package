(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"./docz/style/style.css":function(e,n,a){},"./docz/styling.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),r=a("./node_modules/@mdx-js/tag/dist/index.js"),m=a("./node_modules/docz/dist/index.m.js"),l=a("./src/index.js"),p=a("./node_modules/styled-base-components/lib/index.js"),s=a("./node_modules/styled-form-component/lib/index.js"),c=a("./node_modules/styled-grid-system-component/lib/index.js"),i=a("./node_modules/styled-button-component/lib/index.js"),d=function(e){return o.a.createElement("button",{type:"submit",style:{margin:"10px 0px",padding:"8px 24px",borderRadius:"5px",border:"none",background:"#7FDBFF",color:"#001f3f",cursor:"pointer"},onClick:e.onClick},e.children)};d.__docgenInfo={description:"",methods:[],displayName:"MyButton"};var u=function(e){return o.a.createElement("input",{style:{margin:"10px 0px",padding:"8px 3px",border:"1px solid #7FDBFF",borderRadius:"5px",color:"black"},id:e.id,onFocus:e.onFocus,onChange:e.onChange,onBlur:e.onBlur})};u.__docgenInfo={description:"",methods:[],displayName:"MyInput"};a("./docz/style/style.css");var g=function(e){return o.a.createElement("button",{type:"submit",className:"button",onClick:e.onClick},e.children)};g.__docgenInfo={description:"",methods:[],displayName:"MyClassNameButton"};var E=function(e){return o.a.createElement("input",{className:"input",id:e.id,onFocus:e.onFocus,onChange:e.onChange,onBlur:e.onBlur})};function h(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},r=Object.keys(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)a=r[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}E.__docgenInfo={description:"",methods:[],displayName:"MyClassNameInput"};n.default=function(e){var n=e.components,a=h(e,["components"]);return o.a.createElement(r.MDXTag,{name:"wrapper",components:n},o.a.createElement(r.MDXTag,{name:"h1",components:n,props:{id:"styling"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h1",props:{"aria-hidden":!0,href:"#styling"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Styling"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To style this form you have three different options, all requires to pass a React component to a form prop."),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"css-in-js"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#css-in-js"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"CSS-in-JS"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"In this section we will use a library that uses ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"styled-components")," to style our form")),o.a.createElement(r.MDXTag,{name:"p",components:n},"First you have to import the this library and the Form Components you want to use for your styling. In this example we will use ",o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"p",props:{href:"https://aichbauer.github.io/styled-bootstrap-components/"}},"styled-bootstrap-components"),"."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"import {\n\xa0Form, \n Field, \n Button, \n Select, \n RadioGroup,\n} from 'react-form-package';\nimport {\n  Label,\n  FormGroup,\n  FormControl,\n  FormCheck,\n  FormCheckInput,\n  Column,\n  Button as Btn,\n} from 'styled-bootstrap-components';\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"The next step is to create you form and pass the styled components as props to the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component."),o.a.createElement(m.Playground,{__position:0,__code:'<Form\n  validate\n  input={<FormControl />}\n  select={<FormControl select />}\n  button={<Btn primary mt="3px" mb="3px" />}\n  checkbox={<FormCheckInput />}\n  radio={<FormCheckInput />}\n  error={<div style={{ color: \'red\' }} />}\n>\n  <FormGroup row nomb>\n    <Column sm={6}>\n      <FormGroup>\n        <Label>Email</Label>\n        <Field id="email" type="email" placeholder="Email" />\n      </FormGroup>\n    </Column>\n    <Column sm={6}>\n      <FormGroup>\n        <Label>Password</Label>\n        <Field id="password" type="password" placeholder="Password" />\n      </FormGroup>\n    </Column>\n  </FormGroup>\n  <FormGroup row nomb>\n    <Column sm={12}>\n      <FormGroup>\n        <Label>Address</Label>\n        <Field id="address" type="text" placeholder="1234 Main St" />\n      </FormGroup>\n    </Column>\n  </FormGroup>\n  <FormGroup row>\n    <Column sm={12}>\n      <FormGroup>\n        <Label>Address 2</Label>\n        <Field\n          id="address2"\n          type="text"\n          placeholder="Apartment, Studio, or floor"\n        />\n      </FormGroup>\n    </Column>\n  </FormGroup>\n  <FormGroup row nomb>\n    <Column sm={6}>\n      <FormGroup>\n        <Label>City</Label>\n        <Field id="city" type="text" />\n      </FormGroup>\n    </Column>\n    <Column sm={4}>\n      <FormGroup>\n        <Label>State</Label>\n        <Select id="state" type="select">\n          <option disabled value="">\n            --- Choose a state ---\n          </option>\n          <option value="austria">Austria</option>\n          <option value="germany">Germany</option>\n          <option value="swiss">Swiss</option>\n        </Select>\n      </FormGroup>\n    </Column>\n    <Column sm={2}>\n      <FormGroup>\n        <Label>Zip</Label>\n        <Field id="zip" type="text" />\n      </FormGroup>\n    </Column>\n  </FormGroup>\n  <FormGroup row>\n    <Column sm={12}>\n      <FormCheck ml="20px">\n        <Field id="checkbox" type="checkbox" />\n        <Label>Accept Terms and Conditions</Label>\n      </FormCheck>\n    </Column>\n  </FormGroup>\n  <FormGroup row>\n    <Column sm={12}>\n      <Label>Choose an option</Label>\n      <RadioGroup type="radio" id="radio" required>\n        <FormCheck>\n          <FormCheckInput type="radio" name="radio" id="test" />\n          <Label>Option 1</Label>\n        </FormCheck>\n        <FormCheck>\n          <FormCheckInput type="radio" name="radio" id="test2" />\n          <Label>Option 2</Label>\n        </FormCheck>\n      </RadioGroup>\n    </Column>\n  </FormGroup>\n  <FormGroup row nomb>\n    <Column sm={12}>\n      <Button\n        id="submit"\n        type="submit"\n        onClick={state => {\n          alert(JSON.stringify(state, null, 2))\n          alert(\'open the console to see the whole state...\')\n          console.log(state)\n        }}\n        primary\n      >\n        Submit\n      </Button>\n    </Column>\n  </FormGroup>\n</Form>',__scope:{props:a,Form:l.c,Field:l.b,Button:l.a,Select:l.e,RadioGroup:l.d,Label:p.Label,FormGroup:s.FormGroup,FormControl:s.FormControl,FormCheck:s.FormCheck,FormCheckInput:s.FormCheckInput,Column:c.Column,Btn:i.Button,MyButton:d,MyInput:u,MyClassNameButton:g,MyClassNameInput:E}},o.a.createElement(l.c,{validate:!0,input:o.a.createElement(s.FormControl,null),select:o.a.createElement(s.FormControl,{select:!0}),button:o.a.createElement(i.Button,{primary:!0,mt:"3px",mb:"3px"}),checkbox:o.a.createElement(s.FormCheckInput,null),radio:o.a.createElement(s.FormCheckInput,null),error:o.a.createElement("div",{style:{color:"red"}})},o.a.createElement(s.FormGroup,{row:!0,nomb:!0},o.a.createElement(c.Column,{sm:6},o.a.createElement(s.FormGroup,null,o.a.createElement(p.Label,null,"Email"),o.a.createElement(l.b,{id:"email",type:"email",placeholder:"Email"}))),o.a.createElement(c.Column,{sm:6},o.a.createElement(s.FormGroup,null,o.a.createElement(p.Label,null,"Password"),o.a.createElement(l.b,{id:"password",type:"password",placeholder:"Password"})))),o.a.createElement(s.FormGroup,{row:!0,nomb:!0},o.a.createElement(c.Column,{sm:12},o.a.createElement(s.FormGroup,null,o.a.createElement(p.Label,null,"Address"),o.a.createElement(l.b,{id:"address",type:"text",placeholder:"1234 Main St"})))),o.a.createElement(s.FormGroup,{row:!0},o.a.createElement(c.Column,{sm:12},o.a.createElement(s.FormGroup,null,o.a.createElement(p.Label,null,"Address 2"),o.a.createElement(l.b,{id:"address2",type:"text",placeholder:"Apartment, Studio, or floor"})))),o.a.createElement(s.FormGroup,{row:!0,nomb:!0},o.a.createElement(c.Column,{sm:6},o.a.createElement(s.FormGroup,null,o.a.createElement(p.Label,null,"City"),o.a.createElement(l.b,{id:"city",type:"text"}))),o.a.createElement(c.Column,{sm:4},o.a.createElement(s.FormGroup,null,o.a.createElement(p.Label,null,"State"),o.a.createElement(l.e,{id:"state",type:"select"},o.a.createElement("option",{disabled:!0,value:""},"--- Choose a state ---"),o.a.createElement("option",{value:"austria"},"Austria"),o.a.createElement("option",{value:"germany"},"Germany"),o.a.createElement("option",{value:"swiss"},"Swiss")))),o.a.createElement(c.Column,{sm:2},o.a.createElement(s.FormGroup,null,o.a.createElement(p.Label,null,"Zip"),o.a.createElement(l.b,{id:"zip",type:"text"})))),o.a.createElement(s.FormGroup,{row:!0},o.a.createElement(c.Column,{sm:12},o.a.createElement(s.FormCheck,{ml:"20px"},o.a.createElement(l.b,{id:"checkbox",type:"checkbox"}),o.a.createElement(p.Label,null,"Accept Terms and Conditions")))),o.a.createElement(s.FormGroup,{row:!0},o.a.createElement(c.Column,{sm:12},o.a.createElement(p.Label,null,"Choose an option"),o.a.createElement(l.d,{type:"radio",id:"radio",required:!0},o.a.createElement(s.FormCheck,null,o.a.createElement(s.FormCheckInput,{type:"radio",name:"radio",id:"test"}),o.a.createElement(p.Label,null,"Option 1")),o.a.createElement(s.FormCheck,null,o.a.createElement(s.FormCheckInput,{type:"radio",name:"radio",id:"test2"}),o.a.createElement(p.Label,null,"Option 2"))))),o.a.createElement(s.FormGroup,{row:!0,nomb:!0},o.a.createElement(c.Column,{sm:12},o.a.createElement(l.a,{id:"submit",type:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)},primary:!0},"Submit"))))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"style-prop"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#style-prop"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"style prop"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"In this section we will use a the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"style")," prop to style our form")),o.a.createElement(r.MDXTag,{name:"p",components:n},"To style your form pass components to the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component that are styled with the style tag. When you create your own ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<input />"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<button />")," components do not forget do bind functions like ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onClick"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onChange"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onFocus"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"onBlur"),". This functions are needed to make ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react-form-package")," work properly."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"const MyButton = (props) => (\n  <button\n    type=\"submit\"\n    style={{\n      margin: '10px 0px',\n      padding: '8px 24px',\n      borderRadius: '5px',\n      border: 'none',\n      background: '#7FDBFF',\n      color: '#001f3f',\n      cursor: 'pointer',\n    }}\n    onClick={props.onClick}\n  >\n    {props.children}\n  </button>\n);\n\nconst MyInput = (props) => (\n  <input\n    style={{\n      margin: '10px 0px',\n      padding: '8px 3px',\n      border: '1px solid #7FDBFF',\n      borderRadius: '5px',\n      color: 'black',\n    }}\n    value={props.value}\n    placeholder={props.placeholder}\n    onChange={props.onChange}\n    onBlur={props.onBlur}\n    onFocus={props.onFocus}\n  />\n);\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"The next step is to create you form and pass the styled components as props to the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component."),o.a.createElement(m.Playground,{__position:1,__code:'<Form button={<MyButton />} input={<MyInput />}>\n  <div>Email</div>\n  <Field type="email" id="email2" placeholder="Email" />\n  <Button\n    type="submit"\n    id="submit2"\n    onClick={state => {\n      alert(JSON.stringify(state, null, 2))\n      alert(\'open the console to see the whole state...\')\n      console.log(state)\n    }}\n  >\n    Submit\n  </Button>\n</Form>',__scope:{props:a,Form:l.c,Field:l.b,Button:l.a,Select:l.e,RadioGroup:l.d,Label:p.Label,FormGroup:s.FormGroup,FormControl:s.FormControl,FormCheck:s.FormCheck,FormCheckInput:s.FormCheckInput,Column:c.Column,Btn:i.Button,MyButton:d,MyInput:u,MyClassNameButton:g,MyClassNameInput:E}},o.a.createElement(l.c,{button:o.a.createElement(d,null),input:o.a.createElement(u,null)},o.a.createElement("div",null,"Email"),o.a.createElement(l.b,{type:"email",id:"email2",placeholder:"Email"}),o.a.createElement(l.a,{type:"submit",id:"submit2",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit"))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"css-and-classname"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#css-and-classname"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"CSS and className"),o.a.createElement(r.MDXTag,{name:"blockquote",components:n},o.a.createElement(r.MDXTag,{name:"p",components:n,parentName:"blockquote"},"In this section we will use a the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"className")," prop and a css file to style our form")),o.a.createElement(r.MDXTag,{name:"p",components:n},"To style your form pass components to the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component that have ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"className")," prop and use css files (make sure to have an appropriate loader for your bundler)."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-css"}},".button {\n  background: #001f3f;\n  border: 1px solid black;\n  padding: 8px 24px;\n  border-radius: 3px;\n  color: white;\n  cursor: pointer;\n}\n\n.input {\n  margin: 10px 0px;\n  padding: 8px 3px;\n  border: 1px solid #001f3f;\n  border-radius: 5px;\n}\n")),o.a.createElement(r.MDXTag,{name:"p",components:n},"Import your ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"CSS file")," to your application and make sure you have a proper loader for your stylesheet."),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},'import \'./style.css\';\n\nconst MyClassNameButton = (props) => (\n  <button\n    clssName="button"\n  >\n    {children}\n  </button>\n);\n\nconst MyClassNameInput = (props) => (\n  <input\n    className="input"\n    value={props.value}\n    placeholder={props.placeholder}\n    onChange={props.onChange}\n    onBlur={props.onBlur}\n    onFocus={props.onFocus}\n  />\n);\n')),o.a.createElement(r.MDXTag,{name:"p",components:n},"The next step is to create you form and pass the styled components as props to the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component."),o.a.createElement(m.Playground,{__position:2,__code:'<Form button={<MyClassNameButton />} input={<MyClassNameInput />}>\n  <div>Email</div>\n  <Field type="email" id="email3" placeholder="Email" />\n  <Button\n    type="submit"\n    id="submit2"\n    onClick={state => {\n      alert(JSON.stringify(state, null, 2))\n      alert(\'open the console to see the whole state...\')\n      console.log(state)\n    }}\n  >\n    Submit\n  </Button>\n</Form>',__scope:{props:a,Form:l.c,Field:l.b,Button:l.a,Select:l.e,RadioGroup:l.d,Label:p.Label,FormGroup:s.FormGroup,FormControl:s.FormControl,FormCheck:s.FormCheck,FormCheckInput:s.FormCheckInput,Column:c.Column,Btn:i.Button,MyButton:d,MyInput:u,MyClassNameButton:g,MyClassNameInput:E}},o.a.createElement(l.c,{button:o.a.createElement(g,null),input:o.a.createElement(E,null)},o.a.createElement("div",null,"Email"),o.a.createElement(l.b,{type:"email",id:"email3",placeholder:"Email"}),o.a.createElement(l.a,{type:"submit",id:"submit2",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit"))),o.a.createElement(r.MDXTag,{name:"h2",components:n,props:{id:"passing-props"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h2",props:{"aria-hidden":!0,href:"#passing-props"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"Passing props"),o.a.createElement(r.MDXTag,{name:"p",components:n},"To make your own components work with ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"react-form-package")," you have to pass some props."),o.a.createElement(r.MDXTag,{name:"h3",components:n,props:{id:"components"}},o.a.createElement(r.MDXTag,{name:"a",components:n,parentName:"h3",props:{"aria-hidden":!0,href:"#components"}},o.a.createElement(r.MDXTag,{name:"span",components:n,parentName:"a",props:{className:"icon-link"}},"#")),"components"),o.a.createElement(r.MDXTag,{name:"ul",components:n},o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},"The ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Prop")," is the prop on the ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"<Form />")," component."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"HTML")," is the actual HTML element to use."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Props")," are the props you have to pass these components e.g. ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"id={prop.id} or id={this.prop.id}")," or  ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"onChange={prop.onChange} or onChange={this.prop.onChange}"),"."),o.a.createElement(r.MDXTag,{name:"li",components:n,parentName:"ul"},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"li"},"Info")," shows you which props you have to bind.")),o.a.createElement(r.MDXTag,{name:"table",components:n},o.a.createElement(r.MDXTag,{name:"thead",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"thead"},o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Prop"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"HTML"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Props"),o.a.createElement(r.MDXTag,{name:"th",components:n,parentName:"tr",props:{align:null}},"Info"))),o.a.createElement(r.MDXTag,{name:"tbody",components:n,parentName:"table"},o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"input"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"input"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"type"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onChange"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onBlur"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onFocus")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"checkbox"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"input"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id"),",",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"type"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onChange"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onBlur"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onFocus")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"radio"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"div"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id"),",",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"type"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onChange"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onBlur"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onFocus"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"children")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"this is a wrapper that renders every child, and watch out for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},'<input type="radio" value="someValue" name="theIdRadioGroup" />')," and handles their state")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"button"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"input"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"\xa0",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"type"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onClick"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"children")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"select"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"select"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"type"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onChange"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onBlur"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onFocus"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"children")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"this is a wrapper that renders every child, and watch out for ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},'<option value="someValue" />')," and handles their state")),o.a.createElement(r.MDXTag,{name:"tr",components:n,parentName:"tbody"},o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"textarea"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},"textarea"),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}},o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"id"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"type"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onChange"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onBlur"),", ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"td"},"onFocus")),o.a.createElement(r.MDXTag,{name:"td",components:n,parentName:"tr",props:{align:null}})))),o.a.createElement(r.MDXTag,{name:"p",components:n},"A ",o.a.createElement(r.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"textarea")," example:"),o.a.createElement(r.MDXTag,{name:"pre",components:n},o.a.createElement(r.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-jsx"}},"const myTextarea = (props) => (\n  <textarea\n    id={props.id}\n    type={props.type}\n    onChange={props.onChange}\n    onBlur={props.onBlur}\n    onFocus={props.onFocus}\n  />\n);\n")))}}}]);