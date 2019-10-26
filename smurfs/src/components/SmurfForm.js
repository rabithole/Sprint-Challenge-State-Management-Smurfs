import React, { useContext, useState } from 'react';
import { SmurfContext } from '../contexts/SmurfContext';

function SmurfForm(props) {
  // const smurf = useContext(SmurfContext);
  const { addSmurf } = useContext(SmurfContext);
  const [smurfs, addSmurfs] = useState([])

  const handleInputChange = e => {
    // e.preventDefault();
    e.persist();
    addSmurfs({ [e.target.name]: e.target.value });
    console.log(e.target.value)
  };

  addSmurf = smurfs => {

  }
  // handleInputChange = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

    return (
      <div className="SmurfForm">
        <form onSubmit={props.addSmurf}>
          <p>
            <input
              onChange={handleInputChange}
              placeholder="name"
              value={props.name}
              name="name"
              type='text'
            />
          </p>
          <p>
            <input
              onChange={handleInputChange}
              placeholder="age"
              value={props.age}
              name="age"
              type='text'
            />
          </p>
          <p>
            <input
              onChange={handleInputChange}
              placeholder="height"
              value={props.height}
              name="height"
              type='text'
            />
          </p>
          <button type="submit">Add to the village</button>
        </form>
      </div>
    );
}

export default SmurfForm;
