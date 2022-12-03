import React from 'react';

export default function InputLabel({ forInput, value, className, children }) {
    return (
        <label htmlFor={forInput} className={`left-full text-1xl dark:text-black font-sans` + className}>
            {value ? value : children}
        </label>
    );
}
