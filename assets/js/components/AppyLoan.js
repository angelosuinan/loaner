import { Link } from "react-router";
import React from "react";

 function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
class LoanType extends React.Component{
  render(){

    return(
      <p>SDADS</p>
      )
  }
}
class LoanAmount extends React.Component{
  render(){

    return(
      <p>SDADS</p>
      )
  }
}
class PaymentMethod extends React.Component{
  render(){

    return(
      <p>SDADS</p>
      )
  }
}
class NumberofInstallment extends React.Component{
  render(){

    return(
      <p>SDADS</p>
      )
  }
}
 export default class AppyLoan extends React.Component{
       constructor(){
        super();
        this.state = {
          balance:0,
        }
       }
    handleSubmit(event) {
       
        console.log(
        this.refs.bal.value,
        this.refs.loan_name.value,
        this.refs.payment.value
          );
        var Bal=this.state.balance;
        var Pay=this.refs.payment.value;
        var Name=this.refs.loan_name.value;
        var Inst=this.refs.ints.value;


        var send = function(){ 
        var csrfToken = getCookie('csrftoken');
        axios({
        method: 'post',
        url: 'http://127.0.0.1:8000/list/',
        data: {
            balance: Bal,
            payment: Pay,
            loan_name: Name,
            number_of_installments: Inst
          },
          headers:{
           "X-CSRFToken": csrfToken
          }
        }) .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        }
        send();
        event.preventDefault();

                location.href = "/#"

    }
    handleAmount(e){
      var x = e.target.value * 1.2
      this.setState({balance : x })
    }
                  render(){
       
            var p = "SA";
        return(
          <div>

           <form class="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
  <fieldset>
    <legend>Apply A Loan</legend>
    <div class="form-group">
      <label for="inputnumber" class="col-lg-2 control-label" >PAYMENT</label>
      <div class="col-lg-10">
        <p>{this.state.balance}</p>
      </div>
    </div>
    <div class="form-group">
      <label for="inputnumber"  class="col-lg-2 control-label" >Loan Amount</label>
      <div class="col-lg-10">
        <input type="number" onChange={this.handleAmount.bind(this)}class="form-control" id="inputAmount" placeholder="Loan Amount" ref= "bal"/>
      </div>
    </div>

     <div class="form-group">
      <label for="select" class="col-lg-2 control-label">Loan Type</label>
      <div class="col-lg-10">
        <select class="form-control" id="select" ref="loan_name"   >
          <option >MORTGAGE</option>
          <option >PERSONAL</option>
          <option>AUTO</option>
          <option>HOME</option>
          <option>STUDENT</option>
        </select>
      </div>
    </div>

    <div class="form-group">
      <label for="select" class="col-lg-2 control-label">Payment Method</label>
      <div class="col-lg-10">
        <select class="form-control" id="select" ref="payment" >
          <option>MONTHLY</option>
          <option>SEMI-ANNUALLY</option>
          <option>ANNUALLY</option>
        </select>
      </div>
    </div>
    <div class="form-group">
      <label for="inputnumber" class="col-lg-2 control-label" >Number of Installment(ex. 12months for MONTHLY, 2years for ANNUALLY 
        5 installments for SEMI-ANNUALLY in 2 and 1/2 years) </label>
    <div class="col-lg-10">
        <input type="number" class="form-control" id="inputInstallments" placeholder="Number of Installment" ref= "ints" />
      </div>
    </div>


    <div class="form-group">
      <div class="col-lg-10 col-lg-offset-2">
        <button type="reset" class="btn btn-default">Cancel</button>
        <button type="submit" class="btn btn-primary" value="submit" >Submit</button>
      </div>
    </div>
  </fieldset>
  </form>
  <Link to="LoanType">ASD</Link>
  </div>
          );
      }
    }
    