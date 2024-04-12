import React from 'react';
import './PeopleInput.css';

export const PeopleInput = ({ value, onChange }) => {
  return (
    <>
    <h2>Number of People<span className={`advertising-off ${value <= 0 && 'advertising'}`}>can't be zero</span></h2>
    <label htmlFor="input-people">
      <input
        id="input-people"
        className={`input-people ${value <= 0 && 'input-invalid'}`}
        type="number"
        value={value}
        min="1"
        onChange={onChange}
      />
    </label>
  </>
  )
};

