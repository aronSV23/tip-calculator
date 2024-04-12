import React from 'react';
import './BillInput.css';

export const BillInput = ({ value, onChange }) => {
    return (
        <>
            <h1>Bill</h1>
            <label htmlFor="input-bill">
                <input
                    className="input-bill"
                    id="input-bill"
                    type="number"
                    value={value}
                    min="0"
                    onChange={onChange}
                />
            </label>
        </>
    )
}

