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
    <div className="dark-mode_toggle">
      <div
        onClick={toggleMode}
        className={darkMode ? 'toggle toggled' : 'toggle'}
      />
    </div>
  )

};

export default DarkSwitch;