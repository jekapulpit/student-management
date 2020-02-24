import React from 'react';
import { connect } from "react-redux";
import { Nav, Navbar, Form, FormControl, Button } from 'react-bootstrap';
import { setTab } from "../actions";

const Header = props => {
    console.log(props.currentTab);
    return (
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#students">Student Management</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link onClick={() => props.toggleSetNewTab('students')} href="#students">Students</Nav.Link>
                <Nav.Link onClick={() => props.toggleSetNewTab('companies')} href="#companies">Companies</Nav.Link>
                <Nav.Link onClick={() => props.toggleSetNewTab('events')} href="#events">Events</Nav.Link>
                <Nav.Link onClick={() => props.toggleSetNewTab('contacts')} href="#contacts">Contacts</Nav.Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
};


const mapStateToProps = state => ({
    currentTab: state.tabs.currentTab,
});

const mapDispatchToProps = function(dispatch, ownProps) {
    return {
        toggleSetNewTab: (tab) => {
            dispatch(setTab(tab))
        },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
