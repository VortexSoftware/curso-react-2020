import React from 'react'
import classNames from 'classnames'

const Option = ({title, onSelect, selected}) => {
    const getClassName = () => {
        return classNames({
            'option': true,
            'option--selected': selected 
        })
    }

    return (
        <div className={getClassName()} onClick={() => onSelect(title)}>{title}</div>
    )
}

export default Option





