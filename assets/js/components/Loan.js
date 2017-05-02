import React from "react";
import LoanItem from "./LoanItem"

import { connect } from "react-redux";

import { fetchLoans } from "../actions/loansActions";

@connect((store) => {
  return {
    loans: store.loans.loans
  }
})
export default class Loan extends React.Component{
    
     componentWillMount() {
    this.props.dispatch(fetchLoans())
  }
    render(){
      const { loans } = this.props;

     
     
       if(!loans.length){
        return <p> No Existing Loans</p>
       }

      const  mappedloans  = loans.map(function(x){
            return <ul key={x.pk}><LoanItem loan={x} /> </ul>;

            });
   
        return(
          <div>
        <h1></h1>
       
        <div id ="loansdiv"> 
          {mappedloans}
        </div>
       
        </div>
        );
      }
    }

