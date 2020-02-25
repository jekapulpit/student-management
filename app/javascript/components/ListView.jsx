import React from 'react';
import { connect } from "react-redux";
import StudentList from "./students/StudentList";
import "react-datepicker/dist/react-datepicker.css";

const ListView = props => {
    switch (props.currentTab) {
        case 'students': return (<StudentList />);
        default: return <p>some other list</p>
    }
};

const mapStateToProps = state => ({
    currentTab: state.tabs.currentTab,
});

export default connect(mapStateToProps, null)(ListView);
