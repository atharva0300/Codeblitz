import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {
  
  const [code, setCode] = useState('');
  const [output , setOutput] = useState('');

  const handleSubmit = async () => {
    console.log(code);

    //sending the code 
    // makign a post request 
    const payLoad = {
      language : 'cpp',
      code,
    }

    try{
      const {data} = await axios.post('http://localhost:5000/run' , payLoad)
      // extracting the data from the output object

      console.log(data);
      
      setOutput(data.output);
     
    }catch(err){
      console.log('Axios Error : ' , err);
      // display the error
    }
  }

  return (
    <div className="App">
      <h1>Online Code Compiler</h1>
      <textarea rows = '20' cols = '75' value = {code} onChange = {(e) =>{setCode(e.target.value)} } placeholder = "Type you C++ code here">

      </textarea>
      <br/>
      <button type = "submit" onClick={handleSubmit}>Submit</button>
    
      <br/>
      <h2>{output}</h2>
    </div>
  );
}

export default App;
