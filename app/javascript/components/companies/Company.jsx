import React from 'react';
import { connect } from "react-redux";
import { Button, Card, Accordion } from 'react-bootstrap';
import { deleteCompany, handleEditCompany, selectCompany, updateCompany, cancelNewEvent } from "../../actions";
import CompanyInfo from "./CompanyInfo";
import CompanyForm from "./CompanyForm";

const Company = props => {
    let editable = (props.selectedCompany.id === props.company.id && props.selectedCompany.editable);
    let fullInformation = (editable ? <CompanyForm
        specs={props.specs}
        company={props.company}
        toggleHandleEditCompany={props.toggleHandleEditCompany}
        toggleUpdateCompany={props.toggleUpdateCompany}/> : <CompanyInfo
        toggleDeleteCompany={props.toggleDeleteCompany}
        company={props.company}
        toggleHandleEditCompany={props.toggleHandleEditCompany}/>);
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle
                    onClick={() => {
                        props.toggleSelectCompany(props.company, props.events);
                    }}
                    as={Button}
                    variant="text"
                    eventKey={props.company.id}>
                    {props.company.attributes.name}
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={props.company.id}>
                <Card.Body>
                    {fullInformation}
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    );
};

const mapStateToProps = state => ({
    selectedCompany: state.companies.selectedCompany,
    events: state.events.events,
    specs: state.companies.specs
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleHandleEditCompany: () => {
            dispatch(handleEditCompany())
        },
        toggleSelectCompany: (company) => {
            dispatch(cancelNewEvent());
            dispatch(selectCompany(company));
        },
        toggleDeleteCompany: (company) => {
            dispatch(deleteCompany(company))
        },
        toggleUpdateCompany: (company) => {
            dispatch(updateCompany(company))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Company);
