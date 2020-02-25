import React from 'react';
import {Button} from "react-bootstrap";

const StudentInfo = props => {
    let studentDisplayName = `${props.student.attributes.profile.first_name} ${props.student.attributes.profile.last_name}, ${props.student.attributes.spec.name}`;
    return (
        <div>
            <p>{`${studentDisplayName}, ${props.student.attributes.profile.date_of_birth}`}</p>
            <p>E-mail: {props.student.attributes.contact.email}</p>
            <p>Phone number: {props.student.attributes.contact.phone_number}</p>
            <p>Address: {props.student.attributes.contact.address}</p>
            <Button onClick={() => props.toggleHandleEditStudent()}>edit</Button>
        </div>
    );
};


export default StudentInfo;
