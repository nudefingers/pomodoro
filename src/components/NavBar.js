import React from 'react';

function NavBar({ changeMode, isWork }) {
  return (
    <div className="item">
      <div
        className={`modeButton ${isWork ? 'active' : ''}`}
        onClick={() => changeMode(true)}>
        Work Mode
      </div>
      <div
        className={`modeButton ${!isWork ? 'active' : ''}`}
        onClick={() => changeMode(false)}>
        Break Mode
      </div>
    </div>
  );
}

export default NavBar;
