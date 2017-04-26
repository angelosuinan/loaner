import React from "react";
import { Link } from "react-router";


import Welcome from "./Welcome"


export default class Layout extends React.Component {
  render() {
    return (
       <div>
          
          
               <ul class="nav nav-tabs" id ="tabs">
               
            <li class=""><Link to="loan"  aria-expanded="false">View Loan</Link></li>
            <li class=""><Link to="appyLoan"  aria-expanded="true">Apply Loan</Link></li>
            <li class=""><Link to="installment"  aria-expanded="true">Pay an Installment</Link></li>
            <li class="dropdown">
              <a class="dropdown-toggle" data-toggle="dropdown" href="#">
                Dropdown <span className="caret"></span>
              </a>
              <ul class="dropdown-menu">
                <li><a href="#dropdown1" data-toggle="tab">Action</a></li>
                <li class="divider"></li>
                <li><a href="#dropdown2" data-toggle="tab">Another action</a></li>
              </ul>
            </li>
          </ul>
     {this.props.children}
       </div>
   
    );
  }
}
           
