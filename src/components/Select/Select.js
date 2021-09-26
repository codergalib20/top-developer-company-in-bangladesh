import React from 'react';
import './Select.css';
const Select = ( props ) => {
    return (
        <div className="select-name">
           {props.con.name}
        </div>
    );
};

export default Select;