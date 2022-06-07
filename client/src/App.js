import logo from './logo.svg';
import './App.css';
import React from 'react';
import { useState } from 'react';
import axios from 'axios';

// importing components 
import Header from './components/Header';
import Editor from './components/Editor';
import Output from './components/Output';
import Language from './components/Language';
import { useEffect } from 'react';
import Email from './components/Email';


function App() {
  
  const [code, setCode] = useState('');
  const [output , setOutput] = useState('');
  const [language , setLanguage] = useState('cpp');
  const [placeholder , setPlaceholder] = useState('');
  const [outputPlaceholder , setOutputPlaceholder] = useState('cpp');
  const [displayEmail , toggleDisplayEmail] = useState(false);

  useEffect(() => {
     
  function onSetPlaceholder(){
    if(language=='cpp'){
      const text = '   Type your C++ code here...';
      setPlaceholder(text);
    }else if(language=='py'){
      const text = "   Type your Python code here...";
      setPlaceholder(text);
    }
  }

  function onSetOutputPlaceholder(){
    if(language=='cpp'){
      const text = '  C++ Output goes here';
      setOutputPlaceholder(text);
    }else if(language=='py'){
      const text = '  Python Output goes here';
      setOutputPlaceholder(text);
    }
  }

  onSetPlaceholder();
  onSetOutputPlaceholder();

  } , [language])



  const SubmitCode = async (code) => {
    console.log(code);
    console.log(language);

    //sending the code 
    // makign a post request 
    const payLoad = {
      language : `${language}`,
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
      <Header toggleDisplayEmail = {toggleDisplayEmail} displayEmail = {displayEmail} />
      <Language setLanguage = {setLanguage} />
      <div className='flex flex-row justify-around w-full h-full'> 
            <Editor code  = {code} onSubmit = {SubmitCode} setCode = {setCode} placeholder = {placeholder} />
            <Output output = {output} outputPlaceholder = {outputPlaceholder} />
      </div>
      <Email displayEmail = {displayEmail} toggleDisplayEmail = {toggleDisplayEmail} />
    </div>
  );
}

export default App;
