import { Link } from "react-router";
import React from "react";

import {bindActionCreators} from "redux";
import { connect } from "react-redux";
import {redo, postApplyLoan, undo } from "../actions/applyLoanActions";


@connect((store) => {

  return {
    application: store.application.application,
    successloan: store.successloan.successloan,
    counter: store.counter.counter,
  }
})
 export default class AppyLoan extends React.Component{

    handleSubmit(event) {

        event.preventDefault();
        location.href = "/#"

    }
    
    handleUndo(e){
        this.props.dispatch(undo());
event.preventDefault();
    }
    handleRedo(event){

        this.props.dispatch(redo());
      event.preventDefault();
    
    }
    handleAmount(val){

        console.log(val);
    }

    render(){

    const { dispatch } = this.props;
    const undo = bindActionCreators(postApplyLoan, dispatch);
    let buttona = null;
    let buttonb = null;
    if (this.props.counter['present']!=4) {
    buttona=<button type class="btn btn-primary btn-lg" onClick={this.handleUndo.bind(this)}>UNDO</button>
    buttonb=<input type="submit" class="btn btn-primary btn-lg" value="PROCEED" />
    } else {
      buttona=<button class="btn btn-primary btn-lg" onClick={this.handleUndo.bind(this)}>UNDO</button>
    }
    return(
          <div>

    <form class="form-horizontal" onSubmit={this.handleRedo.bind(this)}>
  <fieldset>
    <legend>Apply A Loan</legend>
    

    <DummyApplyLoan counter={this.props.counter['present']} onHandleAmount={this.handleAmount}/>
    

     <center>
    
    {buttonb}
    </center>
  </fieldset>
  </form>
   {buttona}&nbsp;
    </div>  
          );
      }
    }



class DummyApplyLoan extends React.Component {
    constructor(){
        super();
        this.state = {
          balance:0,
          limit:100000,
          LoanType:"MORTGAGE",
          LoanAmount: null,
          LoanDuration: "MONTHLY",
          NumberofInstallment: null,
        }    
       }
    handleAmount(e){
    switch(this.props.counter){
        case 0 : { 
            switch(e.target.value){
                case "MORTGAGE": this.setState({limit: 100000, LoanType: "MORTGAGE"}) 
            }
            switch(e.target.value){
                case "AUTO": this.setState({limit: 1000000, LoanType: "AUTO"})
            }
            switch(e.target.value){
                case "PERSONAL": this.setState({limit: 20000, LoanType: "PERSONAL"})
            }
            switch(e.target.value){
                case "HOME": this.setState({limit: 1500000, LoanType: "HOME"})
            }
            switch(e.target.value){
                case "STUDENT": this.setState({limit: 50000, LoanType: "STUDENT"})
            }
        }
        case 1 : {
            var x = e.target.value * 1.2
            this.setState({balance : x, LoanAmount: e.target.value })
        }
        case 2 : {
                       
            switch(e.target.value){
                case "MONTHLY": this.setState({LoanDuration : "MONTHLY"})
            }
            switch(e.target.value){
                case "SEMI-ANNUALLY": this.setState({LoanDuration: "SEMI-ANNUALLY",})
            }
            switch(e.target.value){
                case "ANNUALLY": this.setState({LoanDuration: "ANNUALLY",})
                }          
        }
        case 3 : {
            this.setState({NumberofInstallment: e.target.value})
        }
        case 5 : {
            //this.props.onHandleAmount(this.state)
        }
    }



        this.props.onHandleAmount(this.state.balance)
    }
    handleSubmit(e){

    }
    render(){
        
        switch(this.props.counter){
            case 0 : {
                return(
                        <div>
                        <div class="form-group">
                          <label for="inputnumber" class="col-lg-2 control-label" >PAYMENT</label>
                          <div class="col-lg-10">
                            <p>{this.state.balance}</p>
                          </div>
                        </div>
                         <div class="form-group">
                          <label for="select" class="col-lg-2 control-label">Loan Type</label>
                          <div class="col-lg-10">
                            <select class="form-control" id="select" value={this.state.LoanType} ref="loan_name" onChange={this.handleAmount.bind(this)} >
                              <option >MORTGAGE</option>
                              <option >PERSONAL</option>
                              <option>AUTO</option>
                              <option>HOME</option>
                              <option>STUDENT</option>
                            </select>
                          </div>
                    
                        </div>
                        <div class="form-group">
                          <label for="inputnumber" class="col-lg-2 control-label" >Loan Limit</label>
                          <div class="col-lg-10">
                            <p>{this.state.limit}</p>
                          </div>
                        </div>
                        </div>
                    )
            }
            case 1 : {
                return(
                <div>
                <div class="form-group">
                  <label for="inputnumber" class="col-lg-2 control-label" >PAYMENT</label>
                  <div class="col-lg-10">
                    <p>{this.state.balance}</p>
                  </div>
                </div>
                <div class="form-group">
                  <label for="inputnumber" class="col-lg-2 control-label" >Loan Type</label>
                  <div class="col-lg-10">
                    <p>{this.state.LoanType}</p>
                  </div>
                </div>
                 <div class="form-group">
                      <label for="inputnumber"  class="col-lg-2 control-label" >Loan Amount</label>
                      <div class="col-lg-10">
                        <input type="number" min="1000"max={this.state.limit} ref={()=>"AS"} onChange={this.handleAmount.bind(this)} 
                        class="form-control" id="inputAmount" placeholder="Loan Amount" ref= "bal"/>
                      </div>
                </div>
                <div class="form-group">
                  <label for="inputnumber" class="col-lg-2 control-label" >Loan Limit</label>
                  <div class="col-lg-10">
                    <p>{this.state.limit}</p>
                  </div>
                </div>
                    </div>
                    )
                    
            }
            case 2 : {
                    return(
                        <div>
                        <div class="form-group">
                          <label for="inputnumber" class="col-lg-2 control-label" >PAYMENT</label>
                          <div class="col-lg-10">
                            <p>{this.state.balance}</p>
                          </div>
                        </div>
                        
                        <div class="form-group">
                          <label for="inputnumber" class="col-lg-2 control-label" >Loan Type</label>
                          <div class="col-lg-10">
                            <p>{this.state.LoanType}</p>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="inputnumber" class="col-lg-2 control-label" >LOAN AMOUNT</label>
                          <div class="col-lg-10">
                            <p>{this.state.LoanAmount}</p>
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="select" class="col-lg-2 control-label">Payment Method</label>
                          <div class="col-lg-10">
                            <select class="form-control" id="select" ref="payment" onChange={this.handleAmount.bind(this)} >
                              <option>MONTHLY</option>
                              <option>SEMI-ANNUALLY</option>
                              <option>ANNUALLY</option>
                            </select>
                          </div>
                         
                        </div>
                        
                        </div>
                    )
            }
            case 3 : {
                return(
                <div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >PAYMENT</label>
                      <div class="col-lg-10">
                        <p>{this.state.balance}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >Loan Type</label>
                      <div class="col-lg-10">
                        <p>{this.state.LoanType}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >LOAN AMOUNT</label>
                      <div class="col-lg-10">
                        <p>{this.state.LoanAmount}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >LOAN DURATION</label>
                      <div class="col-lg-10">
                        <p>{this.state.LoanDuration}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >Number of Installment(ex. 12months for MONTHLY, 2years for ANNUALLY 
                        5 installments for SEMI-ANNUALLY in 2 and 1/2 years) </label>
                    <div class="col-lg-10">
                        <input type="number" class="form-control" id="inputInstallments" placeholder="Number of Installment" ref= "ints" onChange={this.handleAmount.bind(this)}  />
                      </div>
                      
                    </div>
                    
                </div>
                    )
            }
            case 4 : {
                return(
                    <div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >PAYMENT</label>
                      <div class="col-lg-10">
                        <p>{this.state.balance}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >PAYMENT</label>
                      <div class="col-lg-10">
                        <p>{this.state.balance}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >Loan Type</label>
                      <div class="col-lg-10">
                        <p>{this.state.LoanType}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >LOAN AMOUNT</label>
                      <div class="col-lg-10">
                        <p>{this.state.LoanAmount}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >LOAN DURATION</label>
                      <div class="col-lg-10">
                        <p>{this.state.LoanDuration}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >LOAN DURATION</label>
                      <div class="col-lg-10">
                        <p>{this.state.NumberofInstallment}</p>
                      </div>
                    </div>
                       <div class="form-group">
                         <div class="col-lg-10 col-lg-offset-2">
                           <button type="reset" class="btn btn-default">Cancel AND APPLY AGAIN</button>&nbsp;
                           <button type="submit" class="btn btn-primary" onClick={this.handleSubmit} value="submit" >Submit</button>
                         </div>
                        
                       </div>
                       
                       </div>
                   )
            }
            case 5 : {
                return(
                    <div>
                    <p> CONGRATULATION YOU </p>
                    </div>
                    )
            }
        }
    }

}
    