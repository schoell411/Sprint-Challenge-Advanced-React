import React from 'react';
import useDarkMode from '../hooks/useDarkMode';

const initialValue = {
  dark : false
}

const DarkSwitch = () => {
  const [darkMode, setDarkMode] = useDarkMode('darkMode', initialValue);

  const toggleMode = e => {
  e.preventDefault();
  setDarkMode(!darkMode);
  };

  return (
    <div className="topNav">
      <h4>Dark Mode</h4>
      <div className="switch">
      <div className="dark-mode_toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
      {/* <h4>Dark Mode</h4> */}
      </div>
    </div>
  )

};

export default DarkSwitch;