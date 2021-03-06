import React from "react";
import LoanItem from "./LoanItem";
import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import { fetchLoansWithInstallments,
  postLoanInstallments } from "../actions/installmentsActions";


@connect((store) => {
  return {
    loans: store.installments.installments,
    posted: store.installments.posted
  };
})
export default class Installment extends React.Component{
  constructor(){
    super();
    this.state ={
    present:0,
    }
  }
  componentWillMount(){
    this.props.dispatch(fetchLoansWithInstallments());
  }
  handleLeft(e){
    if (this.state.present !=0){
    var x = this.state.present-1;
    this.setState({present:  x});
    }
  }
  handleRight(e){
    if (this.state.present !=this.props.loans.length-1){
    var x = this.state.present+1;
    this.setState({present:  x});
    }
  }
  handleSubmit(value){
    const { loans } = this.props;
    const {present} = this.state;
    this.props.dispatch(postLoanInstallments(loans, present, value));
  }
  payAnother(props){
    location.reload();
  }
  render(){
    var loanitem;
    const { loans, posted } = this.props;
    console.log(posted);
    const { dispatch } = this.props;
    const actions = bindActionCreators(fetchLoansWithInstallments, dispatch);
    if(posted){
      var loan = loans;
      return (
        <div class="loans-div">
          <center><p> PAID AN INSTALLMENT IN THIS LOAN </p>
            <button onClick ={actions}>Pay Another Installment</button>
          </center>
          <LoanItem loan={loan} />
        </div>
      )
    }
    if(!loans.length){
    return <p> No Approved Loans</p>
    }
    var loan = loans[this.state.present];
    var min = get_next_installment(loan);
    loanitem = <LoanItem loan={loan} />
    var max = loan.balance
        return(
          <div>
              <center>
                <button class="btn btn-info btn-arrow-left" onClick={this.handleLeft.bind(this)}>left</button>
                <button class="btn btn-info btn-arrow-right" onClick={this.handleRight.bind(this)}>right</button>
              </center>
            <InstallmentDumb loanitem={loanitem} passSubmit={this.handleSubmit.bind(this)} />
          </div>
        );
      }
    }


class InstallmentDumb extends React.Component {
  handleSubmit(event){
    const { passSubmit } = this.props;
    passSubmit(this.refs.inputInst.value)
    event.preventDefault();
  }
  render(){
    const {loanitem, passSubmit} = this.props;
    return(
      <div>
        <div class="loans-div">

            {loanitem}
        </div>

        <form onSubmit={this.handleSubmit.bind(this)}>
        <fieldset>
        <legend>Pay An Installment</legend>
        <div class="form-group">
          <label  class="col-lg-2 control-label">Pay </label>
          <div class="col-lg-10">
            <input type="number" ref="inputInst" class="form-control" placeholder="Pay Amount" />
          </div>
        </div>
        <div class="form-group">
          <div class="col-lg-10 col-lg-offset-2">
            <button type="reset" class="btn btn-default">Cancel</button>
            <button type="submit" class="btn btn-primary">Submit</button>
          </div>
        </div>
        </fieldset>
        </form>
      </div>
    )
  }
}


var get_next_installment = function(value){
  var min =0;
  if (value['number_of_installments'] != 0){
    if (value['payment'] == 'MONTHLY'){
      min = value['balance'] / value['number_of_installments'];
    }
    else if (value['payment'] == 'SEMI-ANNUALLY'){
      min = value['balance'] / value['number_of_installments'];
    }
    else if (value['payment'] == 'ANNUALLY'){
      min = value['balance'] / value['number_of_installments'];
    }
  }
  return min;
}
