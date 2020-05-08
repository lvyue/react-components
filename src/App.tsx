import React from 'react';
import logo from './logo.svg';
import './App.css';
import SelectCountryCode from './components/select-country-code';
import './components/select-country-code/index.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{width:"100%",background: '#00f000a0'}}>
          <SelectCountryCode  countryCode={"852"}><div>xxxxxx</div></SelectCountryCode>
        </div>
      </header>
    </div>
  );
}

export default App;
