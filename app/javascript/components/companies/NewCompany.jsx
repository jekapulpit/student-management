import React from 'react';
import { connect } from "react-redux";
import { Button, Card, Accordion } from 'react-bootstrap';
import { handleNewCompany, addCompany } from "../../actions";
import NewCompanyForm from "./NewCompanyForm";

const NewCompany = props => {
    let createInProcess = (props.createInProcess ? 'Cancel' : 'Add new company');
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle
                    as={Button}
                    onClick={() => props.toggleHandleNewCompany()}
                    variant="text"
                    eventKey="0">
                    {createInProcess}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>
                    <NewCompanyForm
                        specs={props.specs}
                        toggleHandleNewCompany={props.toggleHandleNewCompany}
                        toggleCreateCompany={props.toggleCreateCompany}/>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

const mapStateToProps = state => ({
    createInProcess: state.companies.addingNew,
    specs: state.companies.specs
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleHandleNewCompany: () => {
            dispatch(handleNewCompany())
        },
        toggleCreateCompany: (company) => {
            dispatch(addCompany(company))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCompany);
