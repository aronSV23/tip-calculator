import React, { useEffect, useState } from 'react';
import './Result.css';

export const Result = ({ bill, tipPercentage, numberOfPeople }) => {
    const [result, setResult] = useState({tipTotal: '00.00', totalAmount: '00.00'})

    const calculos = () => {
        const tipAmount = () => ((bill * (tipPercentage / 100)) / numberOfPeople).toFixed(2);
        const total = () => ((bill + (bill * (tipPercentage / 100))) / numberOfPeople).toFixed(2);
        if (tipPercentage >= 0 && bill >= 0 && numberOfPeople > 0) {
            setResult({tipTotal: tipAmount(), totalAmount: total()})
        }
    }

    useEffect(() => {
        calculos()
    }, [bill, tipPercentage, numberOfPeople]) 

    return (

        <div className="result-txt">
            <div className="text-amount">
                <div>
                    <h2>Tip Amount</h2>
                    <p>/ person</p>
                </div>
                <h3>$<span>{result.tipTotal}</span></h3>
            </div>
            <div className="total-amount">
                <div>
                    <h2>Total</h2>
                    <p>/ person</p>
                </div>
                <h3>$<span>{result.totalAmount}</span></h3>
            </div>
        </div>

    );
};

