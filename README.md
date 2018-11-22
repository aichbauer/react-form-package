# react-form-package

[![npm](https://img.shields.io/npm/v/react-form-package.svg?style=flat-square)](https://www.npmjs.com/package/react-form-package)
![npm bundle size (minified + gzip)](https://img.shields.io/bundlephobia/minzip/react-form-package.svg?style=flat-square)
[![Travis branch](https://img.shields.io/travis/com/aichbauer/react-form-package/master.svg?style=flat-square)](https://travis-ci.org/aichbauer/react-form-package)
[![Codecov branch](https://img.shields.io/codecov/c/github/aichbauer/react-form-package/master.svg?style=flat-square)](https://codecov.io/gh/aichbauer/react-form-package)
[![storybook](https://img.shields.io/badge/docs%20with-docz-1F2D3D.svg?style=flat-square)](https://aichbauer.github.io/react-form-package)

> A declarative form component with inbuilt validation and state management

## Table of Contents

* [Documentation](https://aichbauer.github.io/react-form-package)
* [Installation](#installation)
* [Simple Form](#simple-form)
* [Components](#components)
  * [Form](#form)
  * [Button](#button)
  * [Field](#field)
  * [FieldWrapper](#fieldwrapper)
  * [RadioGroup](#radiogroup)
  * [Select](#select)
* [Form Validation](#form-validation)
* [State](#state)
* [Custom Error Messages](#custom-error-messages)
* [Styling](#styling)
* [Dynamic Fields](#dynamic-fields)
* [Dynamic Fields 2](#dynamic-fields-2)
  * [Add new Fields onClick](#add-new-fields-onclick)
  * [Add new Fields onChange](#add-new-fields-onchange)
* [Dynamic Fields 3](#dynamic-fields-3)
* [Bind Input Fields](#bind-input-fields)
* [onFocus, onChange, onBlur](#onfocus-onchange-onblur)
* [Third Party Components](#third-party-components)
  * [Autocomplete with Downshift](#autocomplete)
* [File Upload](#file-upload)
* [Why?](#why)
* [License](#license)

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

There are five (six) different components within this package. The `<FieldWrapper />` component is only here for edge cases, e.g. working with third party components. So for this simple example we stick to these five:

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

* Every `<Button>`, `<Field>`, `<RadioGroup>`, and `<Select>` component must have an **id property** and a **type property**
* `<Select>` components have `<option>` childs which must have a **value property**
* `<RadioGroup>` components have `<input>` childs which must have an **id property**, **type property**, and **name property**
* If you want the form to valitate inputs and show error messages simply add a **validate prop** on the `<Form>` component

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
rfpRole | String | false | | only needed for [dynamically added fields](#dynamic-field-2), either `addField` or `removeField`
fieldId | String | false | | only needed for [dynamically added fields](#dynamic-field-2) on a button with rfpRole `removeField` (the id of the field to remove)
field | Object | false | | only needed for [dynamically added fields](#dynamic-field-2) on a button with rfpRole `addField`. This object holds at least `id`, `type`, and may hold `min`, `max`, `required`

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
type | String | true | | `checkbox`, `date`, `textarea`, `datetime-local`, `email`, `number`, `tel`, `text`, `password`, `time`, `url`, `file`
required | Bool | false | false |
min | String | false | -1 |
max | String | false | -1 |
match | RegEx | false | | the input value has to match the `regular expression`
sameAs | String | the input value has to have the same value as the input field with the id specified in `sameAs`
errorMessage | String | false | | define your own custom error message for the input
onFocus | Func | false | | get access to the state of the form when the user focus on the input
onChange | Func | false | | get access to the state of the form when the user changes the input
onBlur | Func | false | | get access to the state of the form when the user blurs the input
dynamic | Bool | false | | only needed for [dynamically added fields](#dynamic-field-2)
field | Object | false | | only needed for [dynamically added fields](#dynamic-field-2). This object holds at least `id`, `type`, and may hold `min`, `max`, `required`
bintTo | String | false | | only needed for [binding input fields](#bind-input-fields). The id of the inpu you want to manipulate
bindToCallback | Func | false | | only needed for [binding input fields](#bind-input-fields). The callback to set the target's (`bindTo`) input value, which gets called `onChange`

### FieldWrapper

> This component is here for edge cases where you get the state from another component and you have to pass it to the `<Form />` component manually, e.g. third party components.

This component has to be a child within the `<Form />` component. This component exposes three additional props to its child component so that you are able to use third party components.

#### Basic Usage

```jsx
import {
  Form,
  FieldWrapper,
} from 'react-form-package';
```

Render a `<Form />` with an `<FieldWrapper />` and a `<Button />` component.

Take a look into the [Third Party Components Section](#third-party-components) to see how you can use this component properly.

```jsx
  <Form>
    <div>
      <FieldWrapper type="text" id="fieldwrapper">
        {/*
          Render a child component that gets access to

          onFocus
          onBlur
          onChange
        */}
      </FieldWrapper>
    <div>
      <Button id="submit" type="submit" onClick={(state) => {
        alert(JSON.stringify(state, null, 2));
        alert('open the console to see the whole state...');
        console.log(state);
      }}
      >Submit</Button>
    </div>
  </Form>
```

#### Props

Property | Type | Required | Default | Description
---|---|---|---|---
id | String | true | |
type | String | true | | `checkbox`, `date`, `textarea`, `datetime-local`, `email`, `number`, `tel`, `text`, `password`, `time`, `url`, `file`
required | Bool | false | false |
min | String | false | -1 |
max | String | false | -1 |
match | RegEx | false | | the input value has to match the `regular expression`
sameAs | String | the input value has to have the same value as the input field with the id specified in `sameAs`
errorMessage | String | false | | define your own custom error message for the input

#### Props that get exposed to the child component

Property | Type | Required | Default | Description
---|---|---|---|---
onFocus | Func | false | | pass your `value` to this function to update the state of the `<Form />` component
onChange | Func | false | | pass your `value` to this function to update the state of the `<Form />` component
onBlur | Func | false | | pass your `value` to this function to update the state of the `<Form />` component

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
errorMessage | String | false | | define your own custom error message for the input
onFocus | Func | false | | get access to the state of the form when the user focus on the input
onChange | Func | false | | get access to the state of the form when the user changes the input
onBlur | Func | false | | get access to the state of the form when the user blurs the input
bintTo | String | false | | only needed for [binding input fields](#bind-input-fields). The id of the inpu you want to manipulate
bindToCallback | Func | false | | only needed for [binding input fields](#bind-input-fields). The callback to set the target's (`bindTo`) input value, which gets called `onChange`

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
errorMessage | String | false | | define your own custom error message for the input
onFocus | Func | false | | get access to the state of the form when the user focus on the input
onChange | Func | false | | get access to the state of the form when the user changes the input
onBlur | Func | false | | get access to the state of the form when the user blurs the input
bintTo | String | false | | only needed for [binding input fields](#bind-input-fields). The id of the inpu you want to manipulate
bindToCallback | Func | false | | only needed for [binding input fields](#bind-input-fields). The callback to set the target's (`bindTo`) input value, which gets called `onChange`

## Form Validation

Almost any form needs validation in some way. Fortunatly `react-form-package` comes with an declarative inbuild validation system.

What does decalrative mean in that way?

### Basic Example

If you want that your input field only allows valid emails you can add the type `email` to the `<Field />` component. If you also set `validate` property on the `<Form />` component the button only allowes to submit if the form is completely valid.

In the next example you are able to submit the form if the input is empty (because this field is not required) and if the input value is set to a valid email, but not if the input value is not a valid email.

```jsx
<Form
  validate
>
  <div>
    Email
    <div>
      <Field type="email" id="email" />
    </div>
  </div>
  <div>
    <Button
      type="submit"
      id="submit"
      onClick={(state) => {
        alert(JSON.stringify(state, null, 2));
        alert('open the console to see the whole state...');
        console.log(state);
      }}
    >
      Submit
    </Button>
  </div>
</Form>
```

If you add the property `required` to the `<Field />` component, everything stays the same except that you are not able to submit the form if the input value is empty.

```jsx
<Form
  validate
>
  <div>
    Email
    <div>
      <Field type="email" id="email" required />
    </div>
  </div>
  <div>
    <Button
      type="submit"
      id="submit"
      onClick={(state) => {
        alert(JSON.stringify(state, null, 2));
        alert('open the console to see the whole state...');
        console.log(state);
      }}
    >
      Submit
    </Button>
  </div>
</Form>
```

### Type validation

A `<Field />` component can have diffferent `type` properties.

Additionally to the validation, if the browser supports HTML5 input types the input fields will be displayed as them, only allowing numbers by default if the type is set to `number`, etc. If the browser does not support HTML5 it will automatically uses a text input that keeps the validation. If the user inputs a non numeric character in a `number` input it will display the the error message and you cannot submit the form.

Type| Description 
---|---
`checkbox` | `no` additional validation
`date` | validates if the input value matches the format `YYYY-MM-DD`
`textarea` | `no` additional validation
`datetime-local` | validates if the input value matches the format `YYYY-MM-DDTHH:MM`
`email` | validates if the input value matches the `standard email format`
`number` | validates if the input value matches a `valid number`
`tel` | validates if the input value matches the `standard phone number format`
`text` | `no` additional validation
`password` | `no` additional validation
`time` | validates if the input value matches the format `HH:MM`
`url` | validates if the input value matches the `standard url format`
`file` | `no` additional validation

### Additional rules

If you are using a `<Field />` component you can also add some additional rules for the validation.
`required` will work on all components, the `<Field />`, the `<RadioGroup />`, and the `<Select />`

Property | Type | Description
---|---|---
`required` | Bool | validates if the `input value is not empty`
`min` | String | validates if the input value is at least `min characters long`
`max` | String | validates if the input value is at least `max characters long`
`match` | Regex | validates if the input value matches the `regular expression`

Example with the `required`, `min`, `max`, and `sameAs` properties:

```jsx
<Form
  validate
>
  <div>
    Text required, min, max
    <div>
      <Field type="text" id="text" min="2" max="5" required />
    </div>
  </div>
  <div>
    Password has to be the same as password 2
    <div>
      <Field type="password" id="password" sameAs="password2" required />
    </div>
  </div>
  <div>
    Password 2 has to be the same as password
    <div>
      <Field type="password" id="password2" sameAs="password" required />
    </div>
  </div>
  <div>
    <Button
      type="submit"
      id="submit"
      onClick={(state) => {
        alert(JSON.stringify(state, null, 2));
        alert('open the console to see the whole state...');
        console.log(state);
      }}
    >
      Submit
    </Button>
  </div>
</Form>
```

Example with the match property:

```jsx
<Form
  validate
>
  <div>
    Text required and has to match "react"
    <div>
      <Field type="text" id="text" match={/react/} required />
    </div>
  </div>
  <div>
    <Button
      type="submit"
      id="submit"
      onClick={(state) => {
        alert(JSON.stringify(state, null, 2));
        alert('open the console to see the whole state...');
        console.log(state);
      }}
    >
      Submit
    </Button>
  </div>
</Form>
```

This is just a simple example, off course you are able to pass any regular expression you would like. If you would like to customize the error messages take a look at [custom error messages](#custom-error-messages)

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

## Custom Error Messages

If you want to display your own error messages, use the `errorMessage` property on the `<Field />`, `<Select/>`, or `<RadioGroup/>` component.

```jsx
<Form>
  <div>
    <div>Email</div>
    <Field id="email" type="email" required errorMessage="This is a custom error message!" />
  </div>
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

## Dynamic Fields 2

Sometimes you do not know how many fields your form should have, so you need a way to add dynamic fields on user events, e.g. on a button click if a user should decide if a new field is needed, or on a change of a field, e.g. when a field is filled a new field should appear.

### Add new Fields onClick

First off, import your components.

```js
import React from 'react';
import {
  Form,
  Field,
  Button,
} from 'react-form-package';
```

The next step is to create a `class` that will render our form.

The state is allways handled by `react-form-package`, the only thing that you need todo is to handle the appearence of the form, e.g. add or remove the input.

We need create a `addField`, `removeField`, and optionally a `calculateAvailableId` function. The `calculateAvailableId` is only nessacary if you work on non unique index-based ids so that you ensure you do not overide an existing id.

The `addField` function is here to add a new Field when you click on a `<Button />` component.

To update the state of the `<Form />` component, you need to add a `rfpRole` property and a `field` or a `fieldId` property to a `<Button />` component.

The `rfpRole` takes a string which is either `addField` or `removeField`. 

If you use the `<Button />` component to add a new field to the state of the form component you need to provide a `field` property which takes an object that represents your new `<Field />` component. This object has to have at least a `id` and a `type`, but you can extend this object with rules like: `min`, `max`, and `required`.

If you use the `<Button />` component to add remove an existing field from the state of the form component you need to provide a `fieldId` property which takes a string: the `id` of the field you want to remove.

In the state of the `DynamicFields` component you have to create an array where you add refrences to the fields of your dynamic `<Field />` components. To add new fields you need to add a new refrence, so that the part of the DOM rerenders with the new Field Component. To remove the Fields not only from the state of the `<Form />` component but also from the DOM, you need to remove the refrences in your state that the component rerenders that part of the DOM.

```jsx
class DynamicFields extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      // the field refrences that we use to render in our <Form /> component
      companies: [
        {
          id: 'company-0',
        },
      ],
    };

    this.addField = this.addField.bind(this);
    this.removeField = this.removeField.bind(this);
    this.calculateAvailableId = this.calculateAvailableId.bind(this);
  }

  calculateAvailableId() {
    const {
      companies,
    } = this.state;

    const arr = companies.map((item) => parseInt(item.id.split('-')[1], 10));

    let currentHighestId = Math.max(...arr);
    currentHighestId = currentHighestId !== -Infinity ? currentHighestId : 0;

    const highestAvailableId = currentHighestId + 1;

    return highestAvailableId;
  }

  addField() {
    const {
      companies,
    } = this.state;

    const highestAvailableId = this.calculateAvailableId();

    // add a new field refrence to the <Form /> component
    this.setState({
      companies: companies.concat({ id: `company-${highestAvailableId}` }),
    });
  }

  removeField(idx) {
    const {
      companies,
    } = this.state;

    // remove a field refrence to the <Form /> component
    this.setState({
      companies: companies.filter((_, index) => idx !== index),
    });
  }

  render() {
    const {
      companies,
    } = this.state;

    const highestAvailableId = this.calculateAvailableId();

    return (
      <Form
        validate
      >
        {/* render the <Field /> components based on our field refrences */}
        {companies.map((company, idx) => (
          <div>
            <Field
              id={company.id}
              placeholder={`Company ${company.id.split('-')[1]}`}
              type="text"
              required
            />
            <Button
              id="removeField"
              // add the rfpRole property
              rfpRole="removeField"
              type="button"
              // add the fieldId property to remove the field from the state of the <Form /> component
              fieldId={company.id}
              onClick={() => this.removeField(idx)}
            >
              Remove Company
            </Button>
          </div>
        ))}
        <div>
          <Button
            id="addField"
            // add the rfpRole property
            rfpRole="addField"
            type="button"
            // add the field property to add to the state state of the <Form /> component
            field={{
              id: `company-${highestAvailableId}`,
              type: 'text',
              required: true,
            }}
            onClick={() => this.addField()}
          >
            Add Company
          </Button>
        </div>
        <div>
          <Button
            id="submit"
            type="submit"
            onClick={(state) => {
              alert(JSON.stringify(state, null, 2));
              alert('open the console to see the whole state...');
              console.log(state);
            }}
          >
            submit
          </Button>
        </div>
      </Form>
    );
  }
}

export { DynamicFields };
```

Now render this Component. Everytime you click on the button `Add Company` you get a new field, and everytime you click on the button `Remove Company` you remove the corresponding field.

### Add new Fields onChange

First off, import your components.

```js
import React from 'react';
import {
  Form,
  Field,
  Button,
} from 'react-form-package';
```

The next step is to create a `class` that will render our form. 

Everything stays the same as in the example above, except:

That we now use a `dynamic` property and the `field` property on the `<Field />` component. the `field` property takes the same properties as in the `<Button />` component. The `dynamic` property indicates that this `<Field />` component is dynamic and adds a new field in the state of the `<Form />` component when this `<Field />` is filled.

```jsx
class DynamicFields extends React.Component {
  constructor(props) {
    super(props);

    // the field refrences that we use to render in our <Form /> component
    this.state = {
      companies: [
        {
          id: 'company-0',
        },
      ],
    };

    this.addField = this.addField.bind(this);
    this.removeField = this.removeField.bind(this);
    this.calculateAvailableId = this.calculateAvailableId.bind(this);
  }

  calculateAvailableId() {
    const {
      companies,
    } = this.state;

    const arr = companies.map((item) => parseInt(item.id.split('-')[1], 10));

    let currentHighestId = Math.max(...arr);
    currentHighestId = currentHighestId !== -Infinity ? currentHighestId : 0;

    const highestAvailableId = currentHighestId + 1;

    return highestAvailableId;
  }

  addField(state, id) {
    const {
      companies,
    } = this.state;

    const highestAvailableId = this.calculateAvailableId();

    // add a new field refrence to the <Form /> component
    if (state.data[id] && parseInt(id.split('-')[1], 10) + 1 === highestAvailableId) {
      this.setState({
        companies: companies.concat({ id: `company-${highestAvailableId}` }),
      });
    }
  }

  removeField(idx) {
    const {
      companies,
    } = this.state;

    // remove a field refrence to the <Form /> component
    this.setState({
      companies: companies.filter((_, index) => idx !== index),
    });
  }

  render() {
    const {
      companies,
    } = this.state;

    const highestAvailableId = this.calculateAvailableId();

    return (
      <Form>
        {/* render the <Field /> components based on our field refrences */}
        {companies.map((company, idx) => (
          <div>
            <Field
              id={company.id}
              placeholder={`Company ${company.id.split('-')[1]}`}
              type="text"
              required
              // add the dynamic property 
              dynamic
              // add the field property to add to the state state of the <Form /> component
              field={{
                id: `company-${highestAvailableId}`,
                type: 'text',
                required: true,
              }}
              onChange={(state) => this.addField(state, company.id)}
            />
            {companies.length && (
              <Button
                id="removeField"
                // add the rfpRole property
                rfpRole="removeField"
                type="button"
                // add the fieldId property to remove the field from the state of the <Form /> component
                fieldId={company.id}
                onClick={() => this.removeField(idx)}
              >
                Remove Company
              </Button>
            )}

          </div>
        ))}
        <div>
          <Button
            id="submit"
            type="submit"
            onClick={(state) => {
              alert(JSON.stringify(state, null, 2));
              alert('open the console to see the whole state...');
              console.log(state);
            }}
          >
            submit
          </Button>
        </div>
      </Form>
    );
  }
}

export { DynamicFieldsOnChange };
```

Now render this Component. Everytime you fill out the `<Field />` component you will add a new `<Field />`, and everytime you click on the button `Remove Company` you remove the corresponding field.

## Dynamic Fields 3

When you have a part of your form that consists of multiple fields that needs to be dynamic, e.g. `streetname` and `housenumber`. >ou can add multiple fields to the state of the `<Form />` component by simle passing an array of objects to the `field` property instead of a single object. The same way you can remove multiple fields from state of the `<Form />` component, by passing an array of strings to the `fieldId` property instead of a single string.

### Add multiple dynamic fields to the state

First off, import your components.

```js
import React from 'react';
import {
  Form,
  Field,
  Button,
} from 'react-form-package';
```

Now create your component:

```jsx
class MultipleDynamicFields extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      companies: [
        {
          id: 'street-0',
        },
      ],
    };

    this.addField = this.addField.bind(this);
    this.removeField = this.removeField.bind(this);
    this.calculateAvailableId = this.calculateAvailableId.bind(this);
  }

  calculateAvailableId() {
    const {
      companies,
    } = this.state;

    const arr = companies.map((item) => parseInt(item.id.split('-')[1], 10));

    let currentHighestId = Math.max(...arr);
    currentHighestId = currentHighestId !== -Infinity ? currentHighestId : 0;

    const highestAvailableId = currentHighestId + 1;

    return highestAvailableId;
  }

  addField() {
    const {
      companies,
    } = this.state;

    const highestAvailableId = this.calculateAvailableId();

    this.setState({
      companies: companies.concat({ id: `street-${highestAvailableId}` }),
    });
  }

  removeField(idx) {
    const {
      companies,
    } = this.state;

    this.setState({
      companies: companies.filter((_, index) => idx !== index),
    });
  }

  render() {
    const {
      companies,
    } = this.state;

    const highestAvailableId = this.calculateAvailableId();

    return (
      <Form
        validate
      >
        {companies.map((street, idx) => (
          <div>
            <div>
              <Field
                id={`${street.id}`}
                placeholder="Street name"
                type="text"
                required
              />
            </div>
            <div>
              <Field
                id={`housenumber-${street.id.split('-')[1]}`}
                placeholder="House number"
                type="number"
                required
              />
            </div>
            <Button
              id="removeField"
              rfpRole="removeField"
              type="button"
              // pass multiple fieldIds 
              // in an array to the 
              // fieldId
              fieldId={[
                `${street.id}`,
                `housenumber-${street.id.split('-')[1]}`,
              ]}
              onClick={() => this.removeField(idx)}
            >
              Remove Company
            </Button>
          </div>
        ))}
        <div>
          <Button
            id="addField"
            rfpRole="addField"
            type="button"
            // pass multiple field objects 
            // in an array to the 
            // field property
            field={[
              {
                id: `street-${highestAvailableId}`,
                type: 'text',
                required: true,
              },
              {
                id: `housenumber-${highestAvailableId}`,
                type: 'number',
                required: true,
              },
            ]}
            onClick={() => this.addField()}
          >
            Add Company Field
          </Button>
        </div>
        <div>
          <Button
            id="submit"
            type="submit"
            onClick={(state) => {
              alert(JSON.stringify(state, null, 2));
              alert('open the console to see the whole state...');
              console.log(state);
            }}
          >
            submit
          </Button>
        </div>
      </Form>
    );
  }
}

export { MultipleDynamicFields };
```

Now lets render this component and see how you can add and remove multiple fields.

## Bind Input Fields

Sometimes a input value depends on another input value, e.g. the use inputs a range of house numbers and you have to calculate the dependend household count. So that the user is able to skip some fields but is also able to chnage the value if the user knows it better.

### Bind an input value to another input value

To handle such cases there are two properties available on the `<Field />`, the `<RadioGroup />`, and the `<Select />` component.

Property | Type | Required | Default | Description
---|---|---|---|---
bindTo | String | false | | the `id` of the field you want to maipulate
bindToCallback | Func | false | | the callback to set the target's (`bindTo`) input value, which gets called `onChange`

#### Basic Usage

In our example we bind our first `housenumbers` input to the second `households` input. As long as the bound input field (`bindTo`, in our example the households field) is untouched (not blurred) the `binToCallback` will be executed `onChange` of the field where we have the `bindTo` and `bindToCallback` properties. The `bindToCallback` expects a String as return value, and gets the input value of the current input field `housenumbers`.

```jsx
<Form>
  <div>
    <div>
      House numbers:
    </div>
    <Field
      id="housenumbers"
      type="text"
      placeholder="2-7"
      // bind this field to field with id `households`
      bindTo="households"
      // when this field changes set the value of the
      // bound field (`households`) to the result of
      // this function, either a string or a boolean
      bindToCallback={
        (value) => {
          const numbers = value.includes('-')
            ? value.split('-')
            : value;

          if (!Array.isArray(numbers)) {
            return '1';
          }

          const number1 = parseInt(numbers[0]);
          const number2 = parseInt(numbers[1]);

          if (!number2 || number2 === number1) {
            return '1';
          }

          if (number2 < number1) {
            return '0';
          }

          const households = (number2 - number1 + 1).toString();

          return households;
        }
      }
    />
  </div>
  <div>
    <div>
      Households:
    </div>
    <Field 
      id="households"
      type="number"
      placeholder="6"
    />
  </div>
  <div>
    <Button
      id="submit"
      type="submit"
      onClick={(state) => {
        alert(JSON.stringify(state, null, 2));
        alert('open the console to see the whole state...');
        console.log(state);
      }}
    >
      Submit
    </Button>
  </div>
</Form>
```

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

## Third Party Components

> Working with third party components

Sometimes you need to work with third party components to make something work properly, e.g. you need an autocompletion. `react-form-package` does not provide an autocompletion by default, but luckily you can use third party components within `react-form-package` and keep all the functionality.

To give you an example of how to create a autocompletion form we use [downshift](https://github.com/paypal/downshift#readme).

`react-form-package` has a `<FieldWrapper />` component. This component exposes three props to the child component: `onFocus`, `onBlur`, and `onChange`.

This props are functions that takes exactly one argument: `value`. Which should be a `string` for input fields or a `boolean` for a checkbox.

### Autocomplete

First off, import your components.

```js
import React from 'react';
import Downshift from 'downshift';
```

The next step is to create a `Autocomplete` component.

We use the standard example from the [downshift](https://github.com/paypal/downshift#readme) documentation.

We use the exposed function props to change the state of the `<Form />`. take a look at the `onChange` function of the `<Downshift />` component, or the `onFocus` and `onBlur` function on the input component.

```jsx
// ./Autocomplete.js

const items = [
  { value: 'apple' },
  { value: 'pear' },
  { value: 'orange' },
  { value: 'grape' },
  { value: 'banana' },
];

const Autocomplete = (props) => (
  <Downshift
    // here we are using the onChange function
    onChange={(item) => props.onChange(item.value)}
    itemToString={(item) => (item ? item.value : '')}
  >
    {({
      getInputProps,
      getItemProps,
      getLabelProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
      selectedItem,
    }) => (
      <div>
        <label {...getLabelProps()}>Enter a fruit: </label>
        <input
          {...getInputProps()}
          // here we are using the onFocus and onBlur function
          onFocus={(e) => props.onFocus(e.target.value)}
          onBlur={(e) => props.onBlur(e.target.value)}
          placeholder="apple"
        />
        <ul {...getMenuProps()}>
          {isOpen
            ? items
              .filter((item) => !inputValue || item.value.includes(inputValue))
              .map((item, index) => (
                <li
                  {...getItemProps({
                    key: item.value,
                    index,
                    item,
                    style: {
                      backgroundColor:
                        highlightedIndex === index ? 'lightgray' : 'white',
                      fontWeight: selectedItem === item ? 'bold' : 'normal',
                    },
                  })}
                >
                  {item.value}
                </li>
              ))
            : null}
        </ul>
      </div>
    )}
  </Downshift>
);

export { Autocomplete };
```

Now we have to import all components that we need and use our `<FieldWrapper />` component inside the `<Form />` component.

```js
import React from 'react';
import { Autocomplete } from './Autocomplete';
import {
  Form,
  FieldWrapper,
  Button,
} from 'react-form-package';
```

If you visit the focus and blur the input now there will be a error message, telling you that this field is required. If you type something and select a fruit from the autocompletion you will be able to submit the form.

```jsx
<Form
  validate
>
  <div>
  <FieldWrapper type="text" id="autocomplete" required>
    <Autocomplete />
  </FieldWrapper>
  </div>
  <div>
    <Button 
      type="submit"
      onClick={(state) => {
        alert(JSON.stringify(state, null, 2));
        alert('open the console to see the whole state...');
        console.log(state);
      }}
    >
      Submit
    </Button>
  </div>
</Form>
```

## File Upload

Sometimes you need to upload files with your form, e.g. if you want to upload a profile picture for a user.

Use a `<Field />` with the type `file` and you will get the `FileList` object back as value in the `data` object.

```jsx
<Form
  validate
  enctype="multipart/form-data"
>
  <Field type="file" id="profilePicture" required />
  <Button
    id="submit"
    type="submit"
    onClick={(state) => {
      alert(JSON.stringify(state, null, 2));
      alert('open the console to see the whole state...');
      console.log(state);
    }}
  >
    Submit
  </Button>
</Form>
```

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

## License

MIT © Lukas Aichbauer
