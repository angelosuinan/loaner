import React from "react";
import { Link } from "react-router";


import Welcome from "./Welcome"


export default class Layout extends React.Component {
  render() {
    return (
      <div>
        <br />
        <div class="navigation">
          <ul class="nav nav-tabs" id ="tabs">
          <Link to="notification"  aria-expanded="true"> <div class="col-sm-3 btn btn-primary btn-lg">Notifications</div></Link>
          <Link to="loan"   aria-expanded="false">  <div class="col-sm-3 btn btn-info btn-lg">View Loan</div></Link>
          <Link to="appyLoan"  aria-expanded="true"><div class="col-sm-3 btn btn-primary btn-lg">Apply Loan</div></Link>
          <Link to="installment"  aria-expanded="true"><div class="col-sm-3 btn btn-info btn-lg">Pay an Installment</div></Link>
          </ul>
        </div>
        <br />
        {this.props.children}
      </div>
    );
  }
}
