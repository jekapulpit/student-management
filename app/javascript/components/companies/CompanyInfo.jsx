import React from 'react';
import { Button } from "react-bootstrap";
import { deleteCompany } from '../../services/companiesServices'

const CompanyInfo = props => {
    return (
        <div>
            <p>{props.company.attributes.name}</p>
            <p>E-mail: {props.company.attributes.contact.email}</p>
            <p>Phone number: {props.company.attributes.contact.phone_number}</p>
            <p>Address: {props.company.attributes.contact.address}</p>
            <Button onClick={() => props.toggleHandleEditCompany()}>edit</Button>
            <Button variant="danger" onClick={() => {
                deleteCompany(props.company.id).then((result) => {
                    if(result.success)
                        props.toggleDeleteCompany(props.company)
                });
            }}>delete</Button>
        </div>
    );
};


export default CompanyInfo;
