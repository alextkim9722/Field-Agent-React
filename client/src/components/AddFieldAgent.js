import { useState } from "react";

function AddFieldAgent({ handleAdd, handleCancel }) {
  const [firstName, setFirstName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [heightInInches, setHeightInInches] = useState('');
  const [errors, setErrors] = useState([]);

  let valid = true;

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  }

  const handleMiddleNameChange = (event) => {
    setMiddleName(event.target.value);
  }

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  }

  const handleDoBChange = (event) => {
    setDob(event.target.value);
  }

  const handleHeightInInchesChange = (event) => {
    setHeightInInches(event.target.value);
  }

  const checkForValidDate = (event) => {
    let input = event.target.value;
    if(input.charAt(4) !== '-' || input.charAt(7) !== '-'
    || isNaN(input.substring(0,4)) || isNaN(input.substring(5,7)) || isNaN(input.substring(8,11))
    || input.substring(0,4) === '' || input.substring(5,7) === '' || input.substring(8,11) === ''
    || input.length === 11) {
      if(isNaN(Date.parse(input))){
        alert("Date must be in YYYY-MM-DD format");
        valid = false;
      }
    }else{
      valid = true;
    }
  }

  const checkForHeightInInches = (event) => {
    if(isNaN(event.target.value)) {
      alert("Input must be a number.")
      valid = false;
    }else{
      valid = true;
    }
  }

  const handleSubmit = (event) => {
    if(valid){
      const newFieldAgent = {
        firstName,
        middleName,
        lastName,
        dob,
        heightInInches
      };

      const init = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newFieldAgent)
      };

      fetch('http://localhost:8080/api/agent', init)
        .then(response => {
          if (response.status === 201 || response.status === 400) {
            return response.json();
          }

          return Promise.reject('Something went wrong on the server :)');
        })
        .then(json => {
          if (json.id) {
            handleAdd(json);
          } else {
            setErrors(json);
          }
        })
        .catch(err => console.error(err));
    }else{
      alert("entries are not valid.")
    }
  }

  return (
    <>
      <h2 className="mt-5">Add FieldAgent</h2>
      <form>
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input className="form-control" type="text" id="firstName" name="firstName" value={firstName} onChange={handleFirstNameChange} ></input>
          <label htmlFor="middleName">Middle Name:</label>
          <input className="form-control" type="text" id="middleName" name="middleName" value={middleName} onChange={handleMiddleNameChange} ></input>
          <label htmlFor="lastName">Last Name:</label>
          <input className="form-control" type="text" id="lastName" name="lastName" value={lastName} onChange={handleLastNameChange} ></input>
          <label htmlFor="dob">Date of Birth:</label>
          <input className="form-control" type="text" id="dob" name="dob" value={dob} onChange={handleDoBChange} onBlur={checkForValidDate} ></input>
          <label htmlFor="heightInInches">Height in Inches:</label>
          <input className="form-control" type="text" id="heightInInches" name="heightInInches" value={heightInInches} onChange={handleHeightInInchesChange} onBlur={checkForHeightInInches} ></input>
        </div>
        <div className="form-group">
          <button className="btn btn-primary" type="submit" onClick={handleSubmit}>Add FieldAgent</button>
          &nbsp;
          <button className="btn btn-secondary" type="button" onClick={handleCancel}>Cancel</button>
        </div>
      </form>
      {errors.length ? (<>
          <div className="alert alert-danger">
            <span>The following Errors occurred:</span>
            <ul>
              {errors.map((err, i) => <li key={i}>{err}</li>)}
            </ul>
          </div>
        </>) : null}
    </>
  )

}

export default AddFieldAgent;