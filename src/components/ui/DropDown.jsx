import React, { useState } from 'react';
import Select from 'react-select';
export const DropDown = ({isMulti, value, setValue, options}) => {

    const handleChange = (option) => {
        setValue(option);
        console.log(option)
    };

    return (
        <Select
            value={value}
            onChange={handleChange}
            options={options}
            isSearchable={true}
            placeholder="Select an option"
            isMulti={isMulti}
        />
    );
}
