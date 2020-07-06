import React from 'react';

const SelectField = (props) => {
    const {
        options,
        optionName,
        optionKey,
        optionValue,
        defaultValue,
        value,
        onChange
    } = props;
    let showSelect = null;
    if (options) {
        showSelect = (
            <div className="form-group">
                <select className="form-control" value={value} onChange={onChange}>
                    <option defaultValue={defaultValue}>{defaultValue}</option>
                    {
                        options
                            .map((option) => (
                                <option
                                    key={option[optionKey]}
                                    value={option[optionValue]}
                                >
                                    {option[optionName]}
                                </option>
                            ))
                    }
                </select>
            </div>
        );
    }
    return showSelect;
};

export default SelectField;