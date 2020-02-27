import React from 'react';
import { Jumbotron } from 'react-bootstrap';

const Event = props => {
    return (
        <Jumbotron style={{ padding: '2rem 2rem' }}>
            <h2>{props.event.attributes.event_type} - {props.event.attributes.company.name}</h2>
            <p>{props.event.attributes.description}</p>
        </Jumbotron>
    );
};

export default Event;