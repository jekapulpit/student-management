import React from 'react';
import { connect } from "react-redux";
import StudentView from "./students/StudentView";
import "react-datepicker/dist/react-datepicker.css";

const DetailView = props => {
    switch (props.currentTab) {
        case 'students': return (<StudentView />);
        default: return <p>some other entity</p>
    }
};

const mapStateToProps = state => ({
    currentTab: state.tabs.currentTab,
});

export default connect(mapStateToProps, null)(DetailView);
