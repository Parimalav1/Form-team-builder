import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import logo from './logo.svg';
import './App.css';
import TeammemberForm from './TeammemberForm';
import Teammembers from './Teammembers';

const firstTeammember = {
  id: uuid(),
  username: 'Parimala',
  email: 'parimala.thodupunoori@gmail.com',
  role: 'student'
}

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

function App() {
  const [teammemberList, setTeammemberList] = useState([firstTeammember]);
  const [formValues, setFormValues] = useState(initialFormValues);//state to hold formvalues
  const [problem, setProblem] = useState('');
  // const [membersToEdit, setMemberToEdit} = props

  // defining change handler and pulling values to event object(target)
  const onInputChange = event => {
    const { name, value } = event.target
    console.log('onInputChange: ' + 'name: ' + name + ' value: ' + value);
    setFormValues({
      ...formValues,
      [name]: value
    })
  }

  const onClear = event => {
    event.preventDefault();
    //setTeammemberList([]);
    setFormValues(initialFormValues);
  }

  const onClearList = event => {
    event.preventDefault();
    setTeammemberList([]);
  }

  // defining submit handler, not allow the page to reload
  const onSubmit = evt => {
    console.log('onSubmit: ' + JSON.stringify(formValues));
    evt.preventDefault();
    if (!formValues.username || !formValues.email || !formValues.role) {
      setProblem('Please fill the forms')
      return
    }
    setProblem('')

    // making a new teammember object
    const nextteammember = {
      id: uuid(),
      username: formValues.username.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }
    setTeammemberList([nextteammember, ...teammemberList])
    console.log(teammemberList);
    setFormValues(initialFormValues)//clearing the form
  }

  return (
    <div className="App">
      {/* <header className="App-header">
        <span style={{ color: 'coral' }}>{problem}</span>
        <h1>Team</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <h2>Team Members</h2>
      {
        teammemberList.map(x => {
          return (
            <Teammembers key={x.id} info={x} />
          )
        })
      }
      <div style={{margin: '20px 0px'}}>
        <button onClick={onClearList}>Clear List</button>
      </div>
      <hr></hr>

      {/* //The component and its props */}
      <TeammemberForm
        values={formValues}
        change={onInputChange}
        submit={onSubmit}
        clear={onClear}
      />
    </div>
  );
}

export default App;
