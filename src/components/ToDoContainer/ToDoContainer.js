import React from 'react';
import { Row, Container,} from 'react-bootstrap'
import TaskList from '../TaskList';
import SubmitForm from '../SubmitForm'
import Modal from '../TicketModal'
import EngineerJson from '../../static/engineerList.json';

class ToDoContainer extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
   modalShow: false,
    }
  }

  componentWillMount() {
    this.setState({ engineers: EngineerJson, })
  }

  handleSubmit = (task, index) => {
    let engineer = {name: this.state.engineers[index].name, tasks: [...this.state.engineers[index].tasks, task], completedTasks: this.state.engineers[index].completedTasks, color: this.state.engineers[index].color }
    this.state.engineers.splice(index, 1, engineer);
    this.setState({
      engineers: this.state.engineers,
      modalShow: false
    });
  }

  handleDelete = (engineer, indexKey) => {
    this.state.engineers.splice(indexKey, 1, engineer);
    this.setState({
      engineers: this.state.engineers
    });
  }

  setModalShow = (state) => {
    this.setState({
      modalShow: state
    });
  }


  render() {
    return (
      <Container>
        <div className="intro">
          <Row>
            <div className="col-12">
              <h1>Task list</h1>
            </div>
            <div className="col-12 col-md-6">
              <p className="u-no-margin">Lets get productive!</p>
              <p>Create a task and assign it to an engineer to get started.</p>
            </div>
            <div className="col-12 col-md-6 add-new-p">
              <i onClick={() => this.setModalShow(true)} className="fas fa-plus-square add-new" />
              <p className="">Create a new task </p>
            </div>
            <div>
              <Modal
                show={this.state.modalShow}
                onHide={() => this.setModalShow(false)}
              >  <SubmitForm engineers={this.state.engineers} onFormSubmit={this.handleSubmit} /></Modal>
            </div>
          </Row>
        </div>
        <Row>
          {this.state.engineers.map((engineer, index) => {
            return (
              <div key={index} className="col-12 col-md-4">
                <TaskList props={engineer} indexKey={index} onDelete={this.handleDelete} />
              </div>)
          })}
        </Row>
      </Container>
    );
  }
}


export default ToDoContainer;
