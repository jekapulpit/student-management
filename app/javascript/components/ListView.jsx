import React from 'react';
import { connect } from "react-redux";

const ListView = props => {
    return (
        <p>list with {props.currentTab}</p>
    );
};

const mapStateToProps = state => ({
    currentTab: state.tabs.currentTab,
});

export default connect(mapStateToProps, null)(ListView);
