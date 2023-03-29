import React from 'react'
import Select from 'react-select'
import {Units} from './Units'

const Searchbar = ({ handleChange }) => {
    let list = Object.keys(Units).map(y => /Type/.test(y) ? "" :({ label: y, value: y })).filter(n => n) 

    return (
        <div style={{width: '300px'}}>
            <Select 
                name="units"
                className="basic-single"
                classNamePrefix="select"
                options={list}
                onChange={(e) => handleChange(e.value)}
            />
        </div>
    )
}

export default Searchbar