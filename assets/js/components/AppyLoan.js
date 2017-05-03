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
       constructor(){
        super();
        this.state = {
          balance:0,
          LoanType:null,
          LoanAmount: null,
          NumberofInstallment: null,
        }
        
        
       }
      
    handleSubmit(event) {

        event.preventDefault();
        location.href = "/#"

    }
    handleAmount(event){
        
    }
    handleUndo(e){
        this.props.dispatch(undo());
    
    }
    handleRedo(event){
        this.props.dispatch(redo());
       
    }

    render(){

    const { dispatch } = this.props;
    const undo = bindActionCreators(postApplyLoan, dispatch);
    
    
    
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

    <DummyApplyLoan counter={this.props.counter['present']} />
    

    
  </fieldset>
  </form>
    <center>
    <button class="btn btn-primary btn-lg" onClick={this.handleUndo.bind(this)}>GO BACK</button>&nbsp;
    <button class="btn btn-primary btn-lg" onClick={this.handleRedo.bind(this)}>PROCEED</button>
    </center>
    </div>  
          );
      }
    }

class DummyApplyLoan extends React.Component {

    render(){
        switch(this.props.counter){
            case 0 : {
                return(
                <div>
                 <div class="form-group">
                      <label for="inputnumber"  class="col-lg-2 control-label" >Loan Amount</label>
                      <div class="col-lg-10">
                        <input type="number" ref={()=>"AS"} onChange={this.handleAmount} class="form-control" id="inputAmount" placeholder="Loan Amount" ref= "bal"/>
                      </div>
                    </div>
                    
                    </div>
                    )
            }
            case 1 : {
                
                    return(
                        <div>
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
                        
                        </div>
                    )
            }
            case 2 : {
                    return(
                        <div>
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
                        
                        </div>
                    )
            }
            case 3 : {
                return(
                    <div>
                        <div class="form-group">
                          <label for="inputnumber" class="col-lg-2 control-label" >Number of Installment(ex. 12months for MONTHLY, 2years for ANNUALLY 
                            5 installments for SEMI-ANNUALLY in 2 and 1/2 years) </label>
                        <div class="col-lg-10">
                            <input type="number" class="form-control" id="inputInstallments" placeholder="Number of Installment" ref= "ints" />
                          </div>
                        </div>
                        
                        </div>
                    )
            }
            case 4 : {
                return(
                    <div>
                       <div class="form-group">
                         <div class="col-lg-10 col-lg-offset-2">
                           <button type="reset" class="btn btn-default">Cancel</button>
                           <button type="submit" class="btn btn-primary" value="submit" >Submit</button>
                         </div>
                       </div>
                       
                       </div>
                   )
            }
        }
    }

}
    