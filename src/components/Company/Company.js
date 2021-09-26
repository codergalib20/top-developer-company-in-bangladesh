import React from 'react';
import './Company.css';
const Company = ( props ) => {
    
    const { id, name, img, rating, clients, salary, employees, location } = props.company
    return (
        <div className="single-company">
            <div className="img">
                <img src={ img } alt="" />
            </div>
            <div className="info">
                <span className="number">{id }</span>
                <h3 className="name">{ name }</h3>
                <h4 className="salary">Salary ${ salary }</h4>
                <h4><i class="fas fa-users-cog"></i> { employees } Employees</h4>
                <h4 className="client"><span>Client : </span> { clients }</h4>
                <h4><i class="fas fa-map"></i> { location }</h4>
                <div className="buttons">
                    <button onClick={()=>props.handleAddToContact(props.company)}>add to contact</button>
                </div>
            </div>
        </div>
    );
};

export default Company;