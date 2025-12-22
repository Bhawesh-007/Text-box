import React from 'react'
import Navbar from '../../components/Navbar'
import Textbox from '../../components/Textbox';
import './App.css'
import {useState} from 'react'

function App() {
  const[color,setColor] = useState('white');
 
  const togglemode = ()=>{
    if(color==="white")setColor('black');
    else setColor('white');
  }
  return (
    <>
    <Navbar mode = {color} togglemode ={togglemode}/>
    <Textbox heading ="Enter Text To Analyze"/>
    
    </>

  )
}

export default App