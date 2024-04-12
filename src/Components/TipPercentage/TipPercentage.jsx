import React from 'react';
import { TipButton } from '../TipButton/TipButton';
import './TipPercentage.css';
const tipOptions = [5, 10, 15, 25, 50]

export const TipPercentage = ({ tipPercentage, handleCustomTipChange, handleBtnTip, customTipPercentage }) => {
    return (
        <>
            <h2>Select Tip %</h2>
            <ul>
                {
                 tipOptions.map((tips, i) =><TipButton key={i} tipPercentage={tipPercentage} value={tips}  handleBtnTip={handleBtnTip} />)
                }
                <li><input
                    type="number"
                    placeholder="Custom"
                    className="percentage-button"
                    value={customTipPercentage}
                    onChange={handleCustomTipChange}
                /></li>
            </ul>
        </>
    )
}

