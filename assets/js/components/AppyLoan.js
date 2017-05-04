import { Link } from "react-router";
import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { redo, postApplication, undo, saveApplication, resetState } from "../actions/applyLoanActions";


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
        if (this.props.counter['present']==4){
            console.log("MAKE A POST REQUEST")
            this.props.dispatch(postApplication(this.props.application))
            event.preventDefault();
        }
        if(this.props.counter['present']==5){
            this.props.dispatch(resetState())
            event.preventDefault();
            location.href = "/#"
            return;
        }
        this.props.dispatch(redo());
        event.preventDefault();
    }
    handleAmount(val){
        console.log(val)
        this.props.dispatch(saveApplication(val))
    }

    render(){

    
    let buttona = null;
    let buttonb = null;
    if (this.props.counter['present']!=5){
        if (this.props.counter['present']!=4) {
            buttona=<button type class="btn btn-primary btn-lg" onClick={this.handleUndo.bind(this)}>UNDO</button>
            buttonb=<input type="submit" class="btn btn-primary btn-lg" value="PROCEED" />
        }else{
            buttona=<button class="btn btn-primary btn-lg" onClick={this.handleUndo.bind(this)}>UNDO</button>
        }
    }
    return(
        <div>
            <form class="form-horizontal" onSubmit={this.handleRedo.bind(this)}>
            <fieldset>
            <legend>Apply A Loan</legend>
    

            <DummyApplyLoan counter={this.props.counter['present']} onHandleAmount={this.handleAmount.bind(this)} 
                currentState={this.props.application}/>
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
    constructor(props){
        super(props);
        
        this.state = props.currentState
       }
    handleAmount(e){
           var limit;
    switch(this.props.counter){
     
        case 0 : { 
            switch(e.target.value){
                case "MORTGAGE":{ 
                    limit=100000;
                    this.setState({limit: limit, loan_name: "MORTGAGE"},
                        )
                    this.props.onHandleAmount({...this.state, limit: limit, loan_name: "MORTGAGE" })
                    
                    break;
                } 

                case "AUTO": {
                    limit = 1000000;
                    this.setState({limit: limit, loan_name: "AUTO"})
                    this.props.onHandleAmount({...this.state, limit: limit, loan_name: "AUTO" })
                    
                    break;
                }
                case "PERSONAL": {
                    limit = 20000;
                    this.setState({limit: limit, loan_name: "PERSONAL"})
                    this.props.onHandleAmount({...this.state, limit: limit, loan_name: "PERSONAL" })
                    break;
                }

                case "HOUSE": {
                    limit=1500000;
                    this.setState({limit: limit, loan_name: "HOUSE"})
                    this.props.onHandleAmount({...this.state, limit: limit, loan_name: "HOUSE" })
                    break;
                }
                case "STUDENT": {
                    limit:50000
                    this.setState({limit: limit, loan_name: "STUDENT"})
                    this.props.onHandleAmount({...this.state, limit: limit, loan_name: "STUDENT" })
                    break;
                }
            }
            break;
        }
        case 1 : {
            var x = (e.target.value * 1.2).toFixed(2);
            this.setState({balance : x, loan_amount: e.target.value },function () {})
            this.props.onHandleAmount({...this.state, balance: x, loan_amount: e.target.value})
        }
        case 2 : {
                       
            switch(e.target.value){
                case "MONTHLY": {this.setState({payment : "MONTHLY"})
                this.props.onHandleAmount({...this.state, payment : "MONTHLY" })
                break;}
                case "SEMI-ANNUALLY": {this.setState({payment: "SEMI-ANNUALLY",})
                this.props.onHandleAmount({...this.state, payment : "SEMI-ANNUALLY" })
                break;} 
                case "ANNUALLY": {this.setState({payment: "ANNUALLY",})
                this.props.onHandleAmount({...this.state, payment : "ANNUALLY" })
                break;  }
                }
                break;
        }
        case 3 : {
            var x = this.refs.ints.value;
            this.setState({number_of_installments: x})
            this.props.onHandleAmount({...this.state, number_of_installments: x })
            break;
        }
        case 5 : {
            //this.props.onHandleAmount(this.state)
        }
    }
       
        
        
            
    }
    handleSubmit(e){

    }
    componentDidMount(){
      
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
                            <select class="form-control" id="select" value={this.state.loan_name} ref="loan_name" onChange={this.handleAmount.bind(this)} >
                              <option >MORTGAGE</option>
                              <option >PERSONAL</option>
                              <option>AUTO</option>
                              <option>HOUSE</option>
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
                    <p>{this.state.loan_name}</p>
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
                        <p>{this.state.loan_name}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >LOAN AMOUNT</label>
                      <div class="col-lg-10">
                        <p>{this.state.loan_amount}</p>
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
                        <p>{this.state.loan_name}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >LOAN AMOUNT</label>
                      <div class="col-lg-10">
                        <p>{this.state.loan_amount}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >LOAN DURATION</label>
                      <div class="col-lg-10">
                        <p>{this.state.payment}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >Number of Installment(ex. 12months for MONTHLY, 2years for ANNUALLY 
                        5 installments for SEMI-ANNUALLY in 2 and 1/2 years) </label>
                    <div class="col-lg-10">
                        <input type="number" class="form-control" id="inputInstallments" min="1" placeholder="Number of Installment" ref= "ints" onChange={this.handleAmount.bind(this)}  />
                        {this.state.number_of_installments}
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
                        <p>{this.state.loan_name}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >LOAN AMOUNT</label>
                      <div class="col-lg-10">
                        <p>{this.state.loan_amount}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >LOAN DURATION</label>
                      <div class="col-lg-10">
                        <p>{this.state.payment}</p>
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputnumber" class="col-lg-2 control-label" >LOAN DURATION</label>
                      <div class="col-lg-10">
                        <p>{this.state.number_of_installments}</p>
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
                    <center>
                    <p> CONGRATULATION ON YOUR APPLICATION. PLEASE WAIT APPROXIMATELY 24 HOURS FOR APPROVAL </p>
                    <button>VIEW LOANS </button>
                    </center>
                    </div>
                    )
            }
        }
    }

}
    