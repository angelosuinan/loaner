import React from "react";
import LoanItem from "./LoanItem"

import { connect } from "react-redux";
import ReactBootstrapSlider from 'react-bootstrap-slider';
import { fetchLoans, sortLoanName } from "../actions/loansActions";


@connect((store) => {

  return {
    loans: store.loans.loans,
    fetched: store.loans.fetched
  }
})
export default class Loan extends React.Component{

    componentWillMount() {
        this.props.dispatch(fetchLoans())
    }

    handleSortLoanName(value) {
        const { dispatch} = this.props
        dispatch(fetchLoans())
        setTimeout(function(){ dispatch(sortLoanName(value))}, 100);
        
                
    }

    render(){
        const { loans } = this.props;

     
                
        if(!loans.length){
        return <p> No Existing Loans</p>
        }
        
   
        return(
                 
        
        <div id ="loansdiv">
        
          <LoanDumb loans={loans} handleSortLoanName={this.handleSortLoanName.bind(this)}/>
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