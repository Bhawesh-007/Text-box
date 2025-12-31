import React, { useEffect, useState } from 'react';

function Alerti({ alert, color }) {
  
  
  const isWhite = color === 'white';

  return (
    alert&&<div
     className={`alert alert-transition ${
        isWhite
          ? 'alert-success bg-success text-success'
          : 'alert-warning bg-warning text-dark'
      }`}
      role="alert"
    >
      <strong>{alert.type}</strong> {alert.msg}
    </div>
  );
}

export default Alerti;
