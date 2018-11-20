import React from 'react';
import { Form, Button, Field } from '../../src';

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
