import React, { useState } from 'react';
import Navbar from '/components/Navbar';
import Textbox from '/components/Textbox';
import Alerti from '/components/Alerti';
import './App.css';

function App() {
  const [color, setColor] = useState('white');
  const [alertu, setAlert] = useState(null);

  const togglemode = () => {
    if (color === 'white') {
      setColor('black');
      showAlert('Success!!', 'Dark Mode applied');
    } else {
      setColor('white');
      showAlert('Success!!', 'Light Mode applied');
    }
  };

  const showAlert = (type, message) => {
    setAlert({ type, msg: message });
    setTimeout(() => {
      setAlert(null)
    },1500);
  };

  return (
    <div className={color === 'black' ? 'page dark-page' : 'page'}>
      <Navbar mode={color} togglemode={togglemode} />
      <Alerti alert={alertu} color={color} />
      <Textbox heading="Enter Text To Analyze" mode={color} showAlert = {showAlert}/>
    </div>
  );
}

export default App;
