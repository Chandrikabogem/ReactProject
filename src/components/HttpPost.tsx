import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const[data,setData]:any=useState()
  const [inputData,setInputData]:any=useState()

  function dataE(event:any):any{
    console.log(event.target.value);
    // setInputData(name:)

    
  }

  function get():any{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
  }

  function post():any{
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
      console.log(res.data);
      setData(res.data)
    })
  }

  return (
    <div className="App">
      <button onClick={get}>Get</button>
      <br />
      <input placeholder='Enter Name' name='name' onChange={dataE}></input>
      <input placeholder='Enter Email' name='email'></input>
      <input placeholder='Enter Mobile Number' name='mobileNumber'></input>
      <button onClick={post}>Post</button>
    </div>
  );
}

export default App;
