(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"./docz/dynamicFIelds.mdx":function(e,n,a){"use strict";a.r(n);var t=a("./node_modules/react/index.js"),o=a.n(t),i=a("./node_modules/@mdx-js/tag/dist/index.js"),r=a("./src/index.js"),m=a("./node_modules/docz/dist/index.m.js"),c=[{id:1,name:"name 1"},{id:2,name:"name 2"},{id:3,name:"name 3"}],l=[{value:"option1",name:"option 1"},{value:"option2",name:"option 2"},{value:"option3",name:"option 3"}],d=[{id:"radio1",name:"radio 1"},{id:"radio2",name:"radio 2"},{id:"radio3",name:"radio 3"}];function p(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}n.default=function(e){var n=e.components,a=p(e,["components"]);return o.a.createElement(i.MDXTag,{name:"wrapper",components:n},o.a.createElement(i.MDXTag,{name:"h1",components:n,props:{id:"dynamic-fields"}},"Dynamic Fields"),o.a.createElement(i.MDXTag,{name:"p",components:n},"Sometimes you need to create your ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"Form")," out of dynamic data, e.g. from data you received from a server. This is mostly the case when using ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"checkboxes"),", ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"radio groups"),", or ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"select fields"),"."),o.a.createElement(i.MDXTag,{name:"p",components:n},"For example: you could receive the data from the server and than use ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"setState")," to set the data for your ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"checkboxes"),", ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"radio groups"),", and ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"select fields")," used in your ",o.a.createElement(i.MDXTag,{name:"inlineCode",components:n,parentName:"p"},"<Form />")," component."),o.a.createElement(i.MDXTag,{name:"pre",components:n},o.a.createElement(i.MDXTag,{name:"code",components:n,parentName:"pre",props:{className:"language-js",metaString:""}},"async componentDidMount() {\n  const response = await getDataFromServer();\n\n  this.setState({\n    checkboxData: response.data.checkboxData,\n    selectData: response.data.selectData,\n    radioData: response.data.radioData,\n  });\n}\n")),o.a.createElement(i.MDXTag,{name:"p",components:n},"Than in your render function you would return something like:"),o.a.createElement(m.Playground,{__position:0,__code:'<Form>\n  <div>\n    {checkboxData.map(checkbox => (\n      <React.Fragment>\n        <div>{checkbox.name}</div>\n        <Field id={checkbox.id} type="checkbox" />\n      </React.Fragment>\n    ))}\n  </div>\n  <div>\n    <Select type="select" id="select">\n      <option disabled value="">\n        --- Select an option ---\n      </option>\n      {selectData.map(selectOption => (\n        <option value={selectOption.value}>{selectOption.name}</option>\n      ))}\n    </Select>\n  </div>\n  <div>\n    <RadioGroup type="radio" id="radioID">\n      {radioData.map(radioOption => (\n        <div>\n          <div>{radioOption.name}</div>\n          <input type="radio" name="radioID" id={radioOption.id} />\n        </div>\n      ))}\n    </RadioGroup>\n  </div>\n  <div>\n    <Button\n      type="submit"\n      id="submit"\n      onClick={state => {\n        alert(JSON.stringify(state, null, 2))\n        alert(\'open the console to see the whole state...\')\n        console.log(state)\n      }}\n    >\n      Submit\n    </Button>\n  </div>\n</Form>',__scope:{props:a,Form:r.d,Button:r.a,Field:r.b,Select:r.f,RadioGroup:r.e,checkboxData:c,selectData:l,radioData:d}},o.a.createElement(r.d,null,o.a.createElement("div",null,c.map(function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,e.name),o.a.createElement(r.b,{id:e.id,type:"checkbox"}))})),o.a.createElement("div",null,o.a.createElement(r.f,{type:"select",id:"select"},o.a.createElement("option",{disabled:!0,value:""},"--- Select an option ---"),l.map(function(e){return o.a.createElement("option",{value:e.value},e.name)}))),o.a.createElement("div",null,o.a.createElement(r.e,{type:"radio",id:"radioID"},d.map(function(e){return o.a.createElement("div",null,o.a.createElement("div",null,e.name),o.a.createElement("input",{type:"radio",name:"radioID",id:e.id}))}))),o.a.createElement("div",null,o.a.createElement(r.a,{type:"submit",id:"submit",onClick:function(e){alert(JSON.stringify(e,null,2)),alert("open the console to see the whole state..."),console.log(e)}},"Submit")))))}}}]);