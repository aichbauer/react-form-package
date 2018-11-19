import React from 'react';
import { Form, Button, Field } from '../../src';

class DynamicFieldsOnClick extends React.Component {
  constructor(props) {
    super(props);

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

  addField() {
    const {
      companies,
    } = this.state;

    const highestAvailableId = this.calculateAvailableId();

    this.setState({
      companies: companies.concat({ id: `company-${highestAvailableId}` }),
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
              rfpRole="removeField"
              type="button"
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
            rfpRole="addField"
            type="button"
            field={{
              id: `company-${highestAvailableId}`,
              type: 'text',
              required: true,
            }}
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

export { DynamicFieldsOnClick };
