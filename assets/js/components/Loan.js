import React from "react";
import LoanItem from "./LoanItem";

import { connect } from "react-redux";
var Slider = require("bootstrap-slider");
import { fetchLoans, sortLoanName } from "../actions/loansActions";


@connect((store) => {
  return {
    loans: store.loans.loans,
    fetched: store.loans.fetched,
    loans_sorted: store.loans_sorted.loans_sorted
  };
})


export default class Loan extends React.Component{
    componentWillMount() {
      this.props.dispatch(fetchLoans())
    }
    handleSortLoanName(value) {
      const { dispatch} = this.props
      dispatch(sortLoanName(value))
    }
    handleSort(e) {
      const { handleSortLoanName} = this.props;
      this.handleSortLoanName(e.target.value)
    }
    render(){
      const { loans , loans_sorted } = this.props;
        if  (!loans.length)  {
          return <div><p> No Existing Loans</p><button onClick={this.handleSort.bind(this)} value="ALL">UNDO</button></div>
        }
        var to_show_loans = loans;
        if (loans_sorted.length) {
            to_show_loans =loans_sorted;
        }
        return(
          <div id ="loansdiv">
            <LoanDumb loans={to_show_loans} handleSortLoanName={this.handleSortLoanName.bind(this)}/>
          </div>
        );
      }
    }


class LoanDumb extends React.Component {
    handleSort(e) {
        const { handleSortLoanName} = this.props;
        handleSortLoanName(e.target.value)
    }
    render(){
      const {loans} = this.props;
      const  mappedloans  = loans.map(function(x){
      return <ul key={x.pk}><LoanItem loan={x} /> </ul>;
    });
      return(
        <div>
          <button onClick={this.handleSort.bind(this)} value="MORTGAGE">MORTGAGE</button>
          <button onClick={this.handleSort.bind(this)} value="HOUSE">HOUSE</button>
          <button onClick={this.handleSort.bind(this)} value="PERSONAL">PERSONAL</button>
          <button onClick={this.handleSort.bind(this)} value="AUTO">AUTO</button>
          <button onClick={this.handleSort.bind(this)} value="STUDENT">STUDENT</button>
          <button onClick={this.handleSort.bind(this)} value="ALL">UNDO</button>
          <br />
          {mappedloans}
        </div>
      )
    }
}
