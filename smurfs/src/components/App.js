import React, { useEffect, useState } from "react";
import { Route } from 'react-router-dom';
import { SmurfContext } from '../contexts/SmurfContext';
import Smurfs from './Smurfs';
import SmurfForm from './SmurfForm';
import axios from 'axios';
import "./App.css";


function App(props) {
  const [smurf, setSmurfs] = useState([]);
  // const [newSmurf, smurfAdd] = useState([]);

  console.log(smurf)

  useEffect(() => {
    fetchSmurfs();

  },[])

  const fetchSmurfs = () => {
    axios.get('http://localhost:3333/smurfs')
      .then(result => {
        setSmurfs(result.data)

      })
      .catch(error => {
        console.log('There was a fetch error', error)
      })
      
  }

  const addSmurf = smurf => {
    console.log('add smurf')
    axios
    .post('http://localhost:3333/smurfs', smurf)
    .then(res => {
      setSmurfs(res.data) 
      }) 

    .catch(err => console.log(err))
  }
  
  return (
    <SmurfContext.Provider value={{ smurf, addSmurf }}> 
      <div className="App">
        <h1>SMURFS! 2.0 W/ Redux</h1>

         <Route 
          path='/'
          component={SmurfForm}
        />

        <Route 
          exact
          path='/'
          component={Smurfs}
        />
      </div>
    </SmurfContext.Provider>
  );
}

export default App;
