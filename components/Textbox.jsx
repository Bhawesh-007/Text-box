import React, { useState } from 'react';

function Textbox(props) {
  const [text, setText] = useState("");      
  const [deftext, setDeftext] = useState(""); 

  const conv_upper = () => {
    setDeftext(deftext.toUpperCase());
  };

  const conv_lower = () => {
    setDeftext(deftext.toLowerCase());
  };

  const clear_iti = () => {
    setDeftext("");
    setText("");
  };

  const get_json = () => {
    try {
      const obj = {};
      deftext.split(',').forEach(pair => {
        const [key, value] = pair.split(':');
        if (!key || !value) throw new Error("Invalid data");
        obj[key.trim()] = value.trim();
      });

      const json = JSON.stringify(obj, null, 2);
      setText(json); 
    } catch {
      alert("☹️ INVALID data format!");
    }
  };

  const copyText = () => {
    navigator.clipboard.writeText(deftext);
    alert("Copied to clipboard!");
  };

  const change_it = (event) => {
    setDeftext(event.target.value); 
  };

  return (
    <div className="container mt-5 ">
      <div className='d-flex justify-content-center'>
      <h1>{props.heading}</h1>
      </div>

      
      <textarea
        className={`form-table vw-50 container ${props.mode==='black'?"bg-gray-transparent text-white":"bg-light"}`}
        rows="8"
        value={deftext}
        onChange={change_it}
        placeholder="Enter your text..."
      />

      <div className="container d-flex gap-2 my-4">
        <button className="btn btn-primary" onClick={conv_upper}>Convert To Upper</button>
        <button className="btn btn-primary" onClick={conv_lower}>Convert To Lower</button>
        <button className="btn btn-primary" onClick={clear_iti}>Clear</button>
        <button className="btn btn-primary" onClick={copyText}>Copy</button>
        <button className="btn btn-primary" onClick={get_json}>GET JSON</button>
      </div>

     
      <div className="mt-2 fw-bold fs-5">
        
        <div className="preview-box">
          <p className="fw-normal d-sm-inline">
            Words: {deftext.split(" ").filter(Boolean).length}
          </p>
        </div>
        <div className="preview-box mx-3">
          <p className="fw-normal d-sm-inline">
            Letters: {deftext.length}
          </p>
        </div>
        <p className="fw-normal mb-2">
          Read-Time: {0.008 * deftext.split(" ").filter(Boolean).length} minutes
        </p>
      </div>
      <div className='d-flex justify-content-center'>
      <h1>JSON-DATA</h1>
      </div>
      <textarea
        className={`form-table vw-50 container ${props.mode==='black'?"bg-gray-transparent text-white":"bg-light"}`}
        rows="8"
        value={text}
        placeholder="Preview appears here after GET JSON"
        readOnly
        
      />
    </div>
  );
}

export default Textbox;
