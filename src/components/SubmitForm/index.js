import React from 'react'
import { InputGroup, FormControl,} from 'react-bootstrap'


class SubmitForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      task: '',
      value: 0,
      error: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.task )
    if (this.state.task === ''){ 
      console.log('error')
      this.setState({ error: 'Field is empty! Type something to assign a task' });
      return
    }
    this.props.onFormSubmit(this.state.task, this.state.value, false);
    this.setState({ task: '', error: '' });

  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <p>Assign an engineer
        <select className="select" id="engineers" name="Assign engineer" onChange={(e) => this.setState({ value: e.target.value })} value={this.state.value}>
            {this.props.engineers.map((engineer, index) => {
              return (
                <option key={index} value={index}>{engineer.name}</option>
              )
            })}
          </select>
        </p>
        {this.state.error !== '' &&
        <p className="error">{this.state.error}</p>}
        <InputGroup className="mb-3">
          <FormControl
            aria-label="Default"
            aria-describedby="inputGroup-sizing-default"
            placeholder='Refuel vehicle'
            value={this.state.task}
            onChange={(e) => this.setState({ task: e.target.value })}
          />
        </InputGroup>
        <button className='btn-form'>Submit</button>
      </form>
    );
  }
}

export default SubmitForm;