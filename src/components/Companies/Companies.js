import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Company from '../Company/Company';
import './Companies.css';


const Companies = () => {
    const [ companies, setCompanies ] = useState( [] );
    const [contact, setContact] = useState([]);
    useEffect( () => {
        fetch( './devdata.JSON' )
            .then( res => res.json() )
            .then( data => setCompanies( data ) );
    }, [] )
    const handleAddToContact = (companyList) => {
        const addList = [ ...contact, companyList ]
        setContact( addList );
    }
    return (
        <div className="companies">
            <div className="container">
                <div className="company">
                    {
                        companies.map( company => <Company
                            key={ company.key }
                            company={ company }
                            handleAddToContact={handleAddToContact}
                        ></Company> )
                    }
                 </div>
                <div className="card">
                    <Card contact={contact}></Card>
                 </div>
            </div>
        </div>
    );
};

export default Companies;