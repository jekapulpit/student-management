import React from 'react';
import { connect } from "react-redux";
import { Container, Row, Button, Accordion, Card } from 'react-bootstrap';
import Company from "./Company";
import NewCompany from "./NewCompany";

const CompanyList = props => {
  let companyList = props.companies.map((company) => {
    return(<Company company={company} key={company.id}/>)
  });

  let activeKey = (props.createInProcess ? "0" : props.selectedCompany.id);

  return (
      <Accordion activeKey={activeKey}>
        <NewCompany />
        {companyList}
      </Accordion>
  );
};

const mapStateToProps = state => ({
  selectedCompany: state.companies.selectedCompany,
  companies: state.companies.companies,
  createInProcess: state.companies.addingNew,
});

export default connect(mapStateToProps, null)(CompanyList);