# react-form-package

[![npm](https://img.shields.io/npm/v/react-form-package.svg?style=flat-square)](https://www.npmjs.com/package/react-form-package)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-form-package.svg?style=flat-square)
[![Travis branch](https://img.shields.io/travis/com/aichbauer/react-form-package/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/react-form-package)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/react-form-package/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/react-form-package)
[![storybook](https://img.shields.io/badge/docs%20with-docz-1F2D3D.svg?style=flat-square)](https://aichbauer.github.io/react-form-package)

> A declarative form component with inbuilt validation and state management

## Table of Contents

* [Documentation](https://aichbauer.github.io/react-form-package)
* [Why?](#why)
* [Installation](#installation)
* [Simple Form](#simple-form)
* [Components](#components)
  * [Form](#form)
  * [Button](#button)
  * [Field](#field)
  * [RadioGroup](#radiogroup)
  * [Select](#select)
* [Dynamic Fields](#dynamic-fields)
* [State](#state)
* [onFocus, onChange, onBlur](#onfocus-onchange-onblur)
* [Styling](#styling)
* [License](#license)

## Why?

> TL;DR: I wanted a form with inbuilt validation and state management that a developer can use only by knowing HTML

Forms! A pain in the ass for a user when they are not well developed. Mostly because developing forms is a pain in the ass too.

Why is developing good forms not easy?

Because

* of a lot of communication between the user and the program
* there are a lot of changes in the state of a program
* of the validation of the user input

I wanted a form that a developer can use only by knowing HTML. Most frontend developers know how a valid HTML form looks like on first sight but no frontend developer knows how a JavaScript library works when its been used for the first time. That is the reason why `react-form-package` was created. By using `react-form-package` you create a similar structure to a valid HTML form. Thats it. Input validation, form state management, and user communication is all handled by `react-form-package`.

### Why not use formik or react-final-form

Most of the `form libraries` I found were using `render props` or `higher order components`, which is not a ideal set up for a form because when the forms are getting more complex the more confusing the code will get. A form should be declarative, and what is more declartive than a plain HTML form? Not a `render prop hell` or `higher order confusion`. Also I did not find any library that came with an inbuilt validation system. Why do you need this? You should not consider writing your own validations if an email is always validated the same way, or the structure of a url is always the same. Writing your validations yourself can mislead you to produce duplicate code and this could lead to more bugs. What is also important: being flexible with styling. This is also not always easy with libararies. `react-form-package` only brings the logic and you choose how to style it. `CSS-in-JS`, `CSS`, or the `style prop`, it is up to you.

## Installation

```sh
$ npm i react-form-package -S
```

or

```sh
$ yarn add react-form-package
```

## Simple Form

> For more detailed information you can take a look at the [documentation](https://aichbauer.github.io/react-form-package)

There are five different components within this package.

```jsx
import {
  Button,
  Field,
  Form,
  RadioGroup,
  Select,
} from 'react-form-package';
```

If you are familiar with writing HTML forms than you are all set up. There are no complex data props or functions that you have to call before you can set up a form and validate its input like in most other libraries. Why should you care about writing the validations for your form yourself? An email, a date, a url, and so on, will always have the same structure. `react-form-package` will not only help you by your forms state management, it also will help you validating your forms correctly.

### Basic Usage

* *Every `<Button>`, `<Field>`, `<RadioGroup>`, and `<Select>` component must have an **id property** and a **type property** *
* *`<Select>` components have `<option>` childs which must have a **value property** *
* *`<RadioGroup>` components have `<input>` childs which must have an **id property**, **type property**, and **name property** *
* *If you want the form to valitate inputs and show error messages simply add a **validate prop** on the `<Form>` component *

In this example we use all components and types this library supports:

```jsx
const myForm = (props) => (
<Form
  validate
>
  <div>
    <div>checkbox</div>
    <Field type="checkbox" id="checkbox" />
  </div>
  <div>
    <div>textarea</div>
    <Field rows="5" cols="30" type="textarea" id="textarea" />
  </div>
  <div>
    <div>date</div>
    <Field type="date" id="date" />
  </div>
  <div>
    <div>datetime-local</div>
    <Field type="datetime-local" id="datetime-local" />
  </div>
  <div>
    <div>email</div>
    <Field type="email" id="email" />
  </div>
  <div>
    <div>number</div>
    <Field type="number" id="number" />
  </div>
  <div>
    <div>tel</div>
    <Field type="tel" id="tel" />
  </div>
  <div>
    <div>text</div>
    <Field type="text" id="text" />
  </div>
  <div>
    <div>password</div>
    <Field type="password" id="password" />
  </div>
  <div>
    <div>time</div>
    <Field type="time" id="time" />
  </div>
  <div>
    <div>url</div>
    <Field type="url" id="url" />
  </div>
  <div>
    <div>select</div>
    <Select id="select" type="select">
      <option disabled value="">--- Choose an option ---</option>
      <option value="option1">option 1</option>
      <option value="option2">option 2</option>
      <option value="option3">option 3</option>
    </Select>
  </div>
  <div>
    <div>radio</div>
    <RadioGroup type="radio" id="radio">
      <input type="radio" name="radio" id="radio1" />
      radio 1
      <input type="radio" name="radio" id="radio2" />
      radio 2
      <input type="radio" name="radio" id="radio3" />
      radio 3
    </RadioGroup>
  </div>
  <div>
    <Button id="submit" type="submit" onClick={(state) => console.log(state)}>submit</Button>
  </div>
</Form>
);
```

## Components

For more detailed information you can take a look at the [documentation](https://aichbauer.github.io/react-form-package).

### Form

This component is a wrapper for all the other components in this library. This component handles the global state for the form itself.

#### Basic Usage

> For more detailed information you can take a look at the [documentation](https://aichbauer.github.io/react-form-package)

Render a table.

```jsx
import { Form } from 'react-form-package';

const myForm = (props) => (
  <Form>
    {/*
      here comes your form
      mix HTML with other
      components from this
      library: e.g.
      <Button />
      <Field />
      <RadioGroup />
      <Select />
    */}
  </Form>
);
```

#### Props

Property | Type | Required | Default | Description
---|---|---|---|---
validate| Bool | false | |
input | Element |  `<input className="rfp-input" />` | |
checkbox | Element |  `<input className="rfp-checkbox" />` | |
radio | Element |  `<input className="rfp-radio-group" />` | |
radioContainer | Element |  `<div className="rfp-radio-group-container" />` | | The Element that wraps the radio elements.
button | Element |  `<button className="rfp-button" />` | |
select | Element |  `<select className="rfp-select" />` | |
textarea | Element | `<textarea className="rfp-textarea" />` | |
error | Element | `<div className="rfp-error-label" />` | |

### Button

This component has to be a child within the `<Form />` component. This component gets the state from the `<Form />` component and returns it on its onClick prop. If the `<Form />` component has the validate prop set, the button will be disabled as long as the form is valid.

#### Basic Usage

> For more detailed information you can take a look at the [documentation](https://aichbauer.github.io/react-form-package)

Render a `<Form />` with a `<Button />` component.

```jsx
import {
  Form,
  Button,
} from 'react-form-package';

const myForm = (props) => (
<Form>
  <div>
    <Button
      id="submit"
      type="submit"
      onClick={state => alert(JSON.stringify(state, null, 2))}
    >
      Click me to see the state of the form
    </Button>
  </div>
</Form>
);
```

#### Props

Property | Type | Required | Default | Description
---|---|---|---|---
id | String | true | |
type | String | true | | `submit`
onClick | Func | false | | returns the state of the form

### Field

This component has to be a child within the `<Form />` component. This component handles its own state and on any state change it will report it to the `<Form />` component which validates the whole form.

#### Basic Usage

> For more detailed information you can take a look at the [documentation](https://aichbauer.github.io/react-form-package)

Render a `<Form />` with an email `<Field />` and a `<Button />` component.

```jsx
import {
  Form,
  Field,
} from 'react-form-package';

const myForm = (props) => (
  <Form>
    <div>
      <div>Email</div>
      <div>
        <Field id="email" type="email" reuqired />
      </div>
    </div>
  </Form>
);
```

#### Props

Property | Type | Required | Default | Description
---|---|---|---|---
id | String | true | |
type | String | true | | `checkbox`, `date`, `textarea`, `datetime-local`, `email`, `number`, `tel`, `text`, `password`, `time`, `url`
required | Bool | false | false |
min | String | false | -1 |
max | String | false | -1 |
onFocus | Func | false | | get access to the state of the form when the user focus on the input
onChange | Func | false | | get access to the state of the form when the user changes the input
onBlur | Func | false | | get access to the state of the form when the user blurs the input

### RadioGroup

This component has to be a child within the `<Form />` component. This component must have `<input />` components with the type="radio" as children. These children components must have a name prop which has to match the parents id. The id of the children will be the value of the `<RadioGroup />` component when clicked.

#### Basic Usage

> For more detailed information you can take a look at the [documentation](https://aichbauer.github.io/react-form-package)

Render a `<Form />` with a `<RadioGroup />` component.

```jsx
import {
  Form,
  RadioGroup,
} from 'react-form-package';

const myForm = (props) => (
  <Form>
    <div>Choose an option</div>
    <RadioGroup type="radio" id="option">
      <div>
        <div>option 1</div>
        <input type="radio" name="option" id="option1" />
      </div>
      <div>
        <div>option 2</div>
        <input type="radio" name="option" id="option2" />
      </div>
      <div>
        <div>option 3</div>
        <input type="radio" name="option" id="option3" />
      </div>
    </RadioGroup>
  </Form>
);
```

#### Props

Property | Type | Required | Default | Description
---|---|---|---|---
id | String | true | |
type | String | true | | `radio`
required | Bool | false | false |
onFocus | Func | false | | get access to the state of the form when the user focus on the input
onChange | Func | false | | get access to the state of the form when the user changes the input
onBlur | Func | false | | get access to the state of the form when the user blurs the input

### Select

This component has to be a child within the `<Form />` component. This component must have `<option />` components with an value prop as children.

#### Basic Usage

> For more detailed information you can take a look at the [documentation](https://aichbauer.github.io/react-form-package)

Render a `<Form />` with a `<Select />` and a `<Button />` component.

```jsx
import {
  Form,
  Select,
} from 'react-form-package';

const myForm = (props) => (
  <Form>
    <div>Select an option</div>
    <Select id="select" type="select">
      <option disabled value="">
        --- Select an option ---
      </option>
      <option value="option1">option 1</option>
      <option value="option2">option 2</option>
      <option value="option3">option 3</option>
    </Select>
  </Form>
);
```

#### Props

Property | Type | Required | Default | Description
---|---|---|---|---
id | String | true | |
type | String | true | | `select`
required | Bool | false | false |
onFocus | Func | false | | get access to the state of the form when the user focus on the input
onChange | Func | false | | get access to the state of the form when the user changes the input
onBlur | Func | false | | get access to the state of the form when the user blurs the input

## Dynamic Fields

Sometimes you need to create your `Form` out of dynamic data, e.g. from data you received from a server. This is mostly the case when using `checkboxes`, `radio groups`, or `select fields`.

For example: you could receive the data from the server and than use `setState` to set the data for your `checkboxes`, `radio groups`, and `select fields` used in your `<Form />` component.

```js
async componentDidMount() {
  const response = await getDataFromServer();

  this.setState({
    checkboxData: response.data.checkboxData,
    selectData: response.data.selectData,
    radioData: response.data.radioData,
  });
}
```

Than in your render function you would return something like:

```jsx
<Form>
  <div>
    {checkboxData.map((checkbox) => (
      <div>
        <div>{checkbox.name}</div>
        <Field id={checkbox.id} type="checkbox" />
      </div>
    ))}
  </div>
  <div>
    <Select type="select" id="select">
      <option
        disabled
        value=""
      >
        --- Select an option ---
      </option>
      {selectData.map((selectOption) => (
        <option value={selectOption.value}>{selectOption.name}</option>
      ))}  
    </Select>
  </div>
  <div>
    <RadioGroup type="radio" id="radioID">
      {radioData.map((radioOption) => (
        <div>
          <div>{radioOption.name}</div>
          <input type="radio" name="radioID" id={radioOption.id} />
        </div>
      ))}  
    </RadioGroup>
  </div>
  <div>
    <Button type="submit" id="submit" onClick={(state) => {
        alert(JSON.stringify(state, null, 2));
        alert('open the console to see the whole state...');
        console.log(state);
      }}>
      Submit
    </Button>
  </div>
</Form>
```


## State

> Working with the state data and meta data

A simple Example of how your Form could look like:

```jsx
<Form>
  <Field id="email" type="email" required />
  <Field id="password" type="password" required />
  <Button
    id="button"
    type="submit"
    onClick={(state) => this.handleOnClick(state)}
  >
    Submit
  </Button>
</Form>
```

> You can also use `onFocus`, `onChange`, and `onBlur` on every `Field`, `Select`, or `RadioGroup` components to get access to the state of the form ([more info](#onfocus-onchange-onblur))

As you can see the `<Button />` component has a `onClick` property. This property takes a function. The `handleOnClick` function could look something like:

```js
async handleOnClick(state) {
  // do something with the state
  // e.g. send data to a server
  try {
    const response = await fetch('https://server.com/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json; charset=utf-8',
      },
      body: JSON.stringify(state.data);
    });
    // do something with the response
  } catch(error) {
    // do something with the error
  }
}
```

As you can see the `state` parameter is an object. It has three different properties.

* **data**: `object`
* **meta**: `object`
* **formValid**: `boolean`

In our case `data` would hold:

```json
{
  "data": {
    "email": "",
    "password": ""
  }
}
```

`meta` would hold:

```json
{
  "meta": {
    "email": {
      "initialValue": "",
      "dirty": false,
      "pristine": true,
      "visited": false,
      "touched": false,
      "value": "",
      "valid": false,
      "invalid": true,
      "rules": {
        "type": "email",
        "min": -1,
        "max": -1,
        "required": true,
      }
    },
    "password": {
      "initialValue": "",
      "dirty": false,
      "pristine": true,
      "visited": false,
      "touched": false,
      "value": "",
      "valid": false,
      "invalid": true,
      "rules": {
        "type": "password",
        "min": -1,
        "max": -1,
        "required": true,
      }
    }
  }
}
```

`formValid` would hold:

```json
{
  "formValid": false
}
```

### Meta Description

Meta data gives you an overview of what happened on that field. E.g. if a field is `pristine` you could deside to not send its data to the server since, nothing changed.

Property | Type | Description
---|---|---
initialValue | `String` or `Bool` |
dirty | `Bool` | `true` if the `value !== initialValue`
pristine | `Bool` | `true` if the `value === initialValue`
visited | `Bool` | `true` if this field was focused (`onFocus`)
touched | `Bool` | `true` if this field was blurred (`onBlur`)
value | `String` or `Bool` |
valid | `Bool` | `true` if this field is valid (passed all rules)
invalid | `Bool` | `true` if this field is invalid (failed at least one rules)
rules | `object` | the rules for the validation of this field
rules.type | `String` | `checkbox`, `date`, `textarea`, `datetime-local`, `email`, `number`, `tel`, `text`, `password`, `time`, `url`, `radio`, `select`
rules.min | `Number` | this field has to have at least `min` characters (`Int`)
rules.max | `Number` | this field has to have at maximum `max` characters (`Int`)
rules.required | `Bool` | this field is required (has to have a value)

## onFocus, onChange, onBlur

> get access to the state everytime the user interacts with your form

Sometimes, access to the forms state is needed even before the user submits the form. This can be if you want to store the forms state on the server on every change (e.g. every time the user changes a input or everytime the user blurs an input) or you want to check if the users input is already taken (e.g. a user might not be allowed to use a email or a username that is already taken and you want to give the user a fast respond before the user even submits the form).

You are not able to modify the state on this callbacks since `react-form-package` takes care of the state management, but you can use the state to communicate with a server or change the UI corresponding to the current state.

### onFocus

```jsx
import {
  Form,
  Field,
} from 'react-form-package';
```

Render a `<Form />` with an email `<Field />` component and a `onFocus` property.

```jsx
  <Form>
    {/* do something with the state onFocus */}
    <Field
      id="email"
      type="email"
      value="test@example.com"
      onFocus={(state) => console.log(state)}
    />
  </Form>
```

### onChange

```jsx
import {
  Form,
  Field,
} from 'react-form-package';
```

Render a `<Form />` with an email `<Field />` component and a `onChange` property.

```jsx
  <Form>
    {/* do something with the state onChange */}
    <Field
      id="email"
      type="email"
      value="test@example.com"
      onChange={(state) => console.log(state)}
    />
  </Form>
```

### onBlur

```jsx
import {
  Form,
  Field,
} from 'react-form-package';
```

Render a `<Form />` with an email `<Field />` component and a `onBlur` property.

```jsx
  <Form>
    {/* do something with the state onBlur */}
    <Field
      id="email"
      type="email"
      value="test@example.com"
      onBlur={(state) => console.log(state)}
    />
  </Form>
```

## Styling

To style this form you have three different options, all requires to pass a React component to a form prop.

### CSS-in-JS

> In this section we will use a library that uses `styled-components` to style our form

First you have to import the this library and the Form Components you want to use for your styling. In this example we will use [styled-bootstrap-components](https://aichbauer.github.io/styled-bootstrap-components).

```jsx
import {
 Form,
 Field,
 Button,
} from 'react-form-package';
import {
  Label,
  FormGroup,
  FormControl,
  Column,
  Button as Btn,
} from 'styled-bootstrap-components';
```

The next step is to create you form and pass the styled components as props to the `<Form />` component

```jsx
  <Form
    input={<FormControl />}
    button={<Btn primary mt="3px" mb="3px" />}
  >
    <FormGroup row nomb>
      <Column sm={6}>
        <FormGroup>
          <Label>Email</Label>
          <Field id="email" type="email" placeholder="Email" />
        </FormGroup>
      </Column>
      <Column sm={12}>
        <Button id="submit" type="submit" onClick={(state) => console.log(state)} primary>Submit</Button>
      </Column>
    </FormGroup>
  </Form>
```

### style prop

> In this section we will use a the `style` prop to style our form

To style your form pass components to the `<Form />` component that are styled with the style tag. When you create your own `<input />`, `<button />` components do not forget do bind functions like `onClick`, `onChange`, `onFocus`, `onBlur`. This functions are needed to make `react-form-package` work properly.

```jsx
const MyButton = (props) => (
  <button
    type="submit"
    style={{
      margin: '10px 0px',
      padding: '8px 24px',
      borderRadius: '5px',
      border: 'none',
      background: '#7FDBFF',
      color: '#001f3f',
      cursor: 'pointer',
    }}
    onClick={props.onClick}
  >
    {props.children}
  </button>
);

const MyInput = (props) => (
  <input
    style={{
      margin: '10px 0px',
      padding: '8px 3px',
      border: '1px solid #7FDBFF',
      borderRadius: '5px',
      color: 'black',
    }}
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
  />
);
```

The next step is to simply create you form and pass the styled components as props to the `<Form />` component

```jsx
  <Form
    button={<MyButton />}
    input={<MyInput />}
  >
    <div>
      Email
    </div>
    <Field type="email" id="email2" placeholder="Email" />
    <Button type="submit" id="submit2" onClick={(state) => console.log(state)}>Submit</Button>
  </Form>
```

### CSS and className

> In this section we will use a the `className` prop and a css file to style our form

To style your form pass components to the `<Form />` component that have `className` prop and use css files (make sure to have an appropriate loader for your bundler).

```css
.button {
  background: #001f3f;
  border: 1px solid black;
  padding: 8px 24px;
  border-radius: 3px;
  color: white;
  cursor: pointer;
}

.input {
  margin: 10px 0px;
  padding: 8px 3px;
  border: 1px solid #001f3f;
  border-radius: 5px;
}
```

Import your `CSS file` to your application and make sure you have a loader for css.

```jsx
import './style.css';

const MyClassNameButton = (props) => (
  <button
    clssName="button"
  >
    {children}
  </button>
);

const MyClassNameInput = (props) => (
  <input
    className="input"
    value={props.value}
    placeholder={props.placeholder}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
  />
);
```

The next step is to create you form and pass the styled components as props to the `<Form />` component.

```jsx
  <Form
    button={<MyClassNameButton />}
    input={<MyClassNameInput />}
  >
    <div>
      Email
    </div>
    <Field type="email" id="email2" placeholder="Email" />
    <Button type="submit" id="submit2" onClick={(state) => console.log(state)}>Submit</Button>
  </Form>
```

### Passing props

To actually make your own components working with `react-form-package` you have to pass some props.

#### components

* The `Prop` is the prop on the `<Form />` component.
* `HTML` is the actual HTML element to use.
* `Props` are the props you have to pass these components e.g. `id={prop.id} or id={this.prop.id}` or  `onChange={prop.onChange} or onChange={this.prop.onChange}`.
* `Info` shows you which props you have to bind.

Prop | HTML | Props | Info
---|--- | --- | ---
input | input | `id`, `type`, `onChange`, `onBlur`, `onFocus` |
checkbox | input | `id`,`type`, `onChange`, `onBlur`, `onFocus` |
radio | div | `id`,`type`, `onChange`, `onBlur`, `onFocus`, `children` | this is a wrapper that renders every child, and watch out for `<input type="radio" value="someValue" name="theIdRadioGroup" />` and handles their state
button | input | `id`, `type`, `onClick`, `children` |
select | select | `id`, `type`, `onChange`, `onBlur`, `onFocus`, `children` | this is a wrapper that renders every child, and watch out for `<option value="someValue" />` and handles their state
textarea | textarea | `id`, `type`, `onChange`, `onBlur`, `onFocus` |

A `textarea` example:

```jsx
const myTextarea = (props) => (
  <textarea
    id={props.id}
    type={props.type}
    onChange={props.onChange}
    onBlur={props.onBlur}
    onFocus={props.onFocus}
  />
);
```

## License

MIT © Lukas Aichbauer
