import React from "react";
import LoanItem from "./LoanItem"
export default class Loan extends React.Component{
    constructor(){
        super();      
      this.state ={
        loans:[]
      }

    }
    componentDidMount(){
      axios.get(`/list/?format=json`)
      .then(res => {
     var arr =  Object.keys(res).map(key => res[key])
   
     var arr =  Object.keys(arr[0]).map(key => arr[0][key])
     console.log(arr[0]);
     this.setState({loans: arr});
      }).catch(function (error) {
       console.log(error);
       }); 
    }      
    render(){
        var loanitem = this.state.loans.map(x =>
            <LoanItem loan={x} />
            )
        
        return(
          <div>
        <h1></h1>
       
        <div id ="loansdiv"> 
          {loanitem}
        </div>
       
        </div>
        );
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
