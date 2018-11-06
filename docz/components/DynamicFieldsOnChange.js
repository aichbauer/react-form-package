import React from 'react';
import {
  Form,
  Field,
  Button,
} from '../../src';

const companyTemplate = {
  name: '',
};

class DynamicFieldsOnChange extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: '',
      companies: [
        companyTemplate,
      ],
    };

    // our reference to our form
    // so that we are able to update
    // the form state
    this.child = React.createRef();
  }

  handleAddCompany() {
    const { companies } = this.state;
    const { length } = companies;

    // if the last field is not empty add a new one
    // in the callback of our setState we create
    // the new state of our form via the new children
    // in this component
    // note that we use a ref here
    if (companies[length - 1].name) {
      this.setState({
        companies: companies.concat([companyTemplate]),
      }, () => this.child.current.updateState());
    }
  }

  handleOnChange(formState, id, index) {
    const { companies } = this.state;
    const myValue = formState.data[id];

    // if it is a dynamic field change the
    // value based on the index of this array
    if (!isNaN(index)) {
      const newCompanies = companies.map((company, idx) => {
        if (idx !== index) {
          return company;
        }

        const newCompany = {
          ...company,
          name: myValue,
        };

        return newCompany;
      });

      // in the callback we add a new field
      return this.setState({
        companies: newCompanies,
      }, () => this.handleAddCompany());
    }

    // else update the other fields
    // based on the id
    return this.setState({
      [id]: myValue,
    });
  }

  render() {
    const {
      text,
      companies,
    } = this.state;

    // - we need to pass the values
    //   of the state of this component
    // - we need to add our handleOnChange
    // - we need to set our ref
    return (
      <Form
        ref={this.child}
      >
        <div>
          <Field
            type="text"
            id="text"
            value={text}
            placeholder="Not a dynamic field"
            onChange={(state) => this.handleOnChange(state, 'text')}
          />
        </div>
        {/* render our dynamic fields */}
        {companies.map((company, idx) => (
          <div>
            <Field
              id={`company-${idx}`}
              value={company.name}
              placeholder={`Company ${idx}`}
              type="text"
              onChange={(state) => this.handleOnChange(state, `company-${idx}`, idx)}
            />
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
            Submit
          </Button>
        </div>
      </Form>
    );
  }
}

export { DynamicFieldsOnChange };
