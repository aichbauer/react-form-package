import React from 'react';
import {
  Form,
  Field,
  Button,
} from '../../src';
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverHeader,
} from 'styled-popover-component';
import {
  Button as Btn,
} from 'styled-button-component';
import {
  FormControl,
} from 'styled-form-component';

class PopoverHint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: 0,
      left: 0,
      hidden: true,
      notValidFields: '',
    };

    this.handlePopover = this.handlePopover.bind(this);
  }

  handlePopover(ev, state) {
    const { hidden } = this.state;

    let notValidFields = Object.entries(state.meta).map((entry) => {
      if (!entry[1].valid) {
        return entry[0];
      }
    });

    notValidFields = notValidFields.filter((i) => i !== undefined);

    if (!state.formValid) {
      this.setState({
        top: ev.target.offsetTop - ev.target.offsetHeight,
        left: ev.target.offsetLeft + ev.target.offsetWidth,
        hidden: !hidden,
        notValidFields: notValidFields.join(),
      }, () => {
        const { hidden: h } = this.state;
        setTimeout(() => this.setState({
          hidden: !h,
        }), 1500);
      });
    }
  }

  render() {
    const {
      top,
      left,
      hidden,
      notValidFields,
    } = this.state;

    return (
      <Form
        validate
        input={<FormControl />}
        button={<Btn primary mt="3px" mb="3px" />}
      >
        <Field type="email" id="email" required />
        <div>
          <Button
            danger
            onClick={(state) => {
              alert(JSON.stringify(state, null, 2));
              alert('open the console to see the whole state...');
              console.log(state);
            }}
            onMouseEnter={(e, state) => this.handlePopover(e, state)}
          >
            Hover button to show which fields are not valid
          </Button>
          <Popover
            hidden={hidden}
            style={{
              top: `${top}px`,
              left: `${left}px`,
            }}
            right
          >
            <PopoverArrow right />
            <PopoverHeader right>You need to fill out this fields</PopoverHeader>
            <PopoverBody right>{notValidFields}</PopoverBody>
          </Popover>
        </div>
      </Form>
    );
  }
}

export { PopoverHint };
