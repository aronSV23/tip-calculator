// App.js
import React, { useState } from 'react';
import './App.css';
import { BillInput } from './Components/BillInput/BillInput';
import { PeopleInput } from './Components/PeopleInput/PeopleInput';
import { Result } from './Components/Result/Result';
import { TipPercentage } from './Components/TipPercentage/TipPercentage';

const App = () => {
  const [bill, setBill] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const [numberOfPeople, setNumberOfPeople] = useState(1);
  const [customTipPercentage, setCustomTipPercentage] = useState(0)

  const handleNumberOfPeople = (e) => {
    if (e.target.value === '') {
      setNumberOfPeople('')
    } else {
      setNumberOfPeople(parseInt(e.target.value))
    }
  };

  const handleCustomTipChange = (e) => {
    setCustomTipPercentage(parseFloat(e.target.value));
    setTipPercentage(parseFloat(e.target.value));
  };

  const handleBtnTip = (value) => {
    setCustomTipPercentage(0);
    setTipPercentage(parseInt(value));
  };

  const handleReset = () => {
    setCustomTipPercentage(0);
    setBill(0);
    setTipPercentage(0);
    setNumberOfPeople(1);
  };

  return (
    <>
    <header><img src="./src/assets/logo.svg" alt=""/></header>
    <div className="general-wrapper">
            <div className="data-wrapper">
        <BillInput value={bill} onChange={(e) => setBill(parseFloat(e.target.value))} />
        <TipPercentage
          tipPercentage={tipPercentage}
          handleCustomTipChange={handleCustomTipChange}
          handleBtnTip={handleBtnTip}
          customTipPercentage={customTipPercentage}
        />
        <PeopleInput value={numberOfPeople} onChange={handleNumberOfPeople} />
      </div>
      <div className="result-wrapper">
      <Result bill={bill} tipPercentage={tipPercentage} numberOfPeople={numberOfPeople} />
      <button type="button" className="reset-button" onClick={handleReset}>RESET</button>
      </div>
    </div>
    </>
  );
};

export default App;
