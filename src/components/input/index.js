import React from 'react'

const Input = ({title, onChangeValue, currency, value, type}) => {
    return (
        <div className='input'>
            <span>{title}</span>
            <div className='input__button'>
                <input 
                    type={type}
                    onChange={(event) => onChangeValue(event.target.value)}
                    value={value}
                    />
                {currency && <span>{currency}</span>}
            </div>
        </div>
    )
}

export default Input