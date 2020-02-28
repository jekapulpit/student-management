import React from 'react';
import { connect } from "react-redux";
import "react-datepicker/dist/react-datepicker.css";
import EventList from "./events/EventList";

const DetailView = props => {
    return <EventList />
};

const mapStateToProps = state => ({
    currentTab: state.tabs.currentTab,
});

export default connect(mapStateToProps, null)(DetailView);
