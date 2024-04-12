import React from 'react'

export const TipButton = ({value, tipPercentage, handleBtnTip}) => {
  return (
    <li>
        <button 
        type="button" 
        className={`percentage-button ${tipPercentage === value && 'active'}`} 
        onClick={() => handleBtnTip(value)}>
            {value}%
        </button>
    </li>

  )
}
