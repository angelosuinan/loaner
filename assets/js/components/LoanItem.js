import React from "react";

export default class LoanItem extends React.Component {


  render() {
   var loan = this.props.loan;

   var min = get_next_installment(loan);
   return(
   
    <div id="jumbo" class="panel panel-primary"> 
                <div class="panel-heading"> 
                  <h1 class="panel-title">{loan.loan_name}</h1> 
                </div> 
                <div class="spanel-body"> 
                  <div class="list-group"> 
                    <a href="#" class="list-group-item active"> 
                      Nearest Due date: {loan.due_date}
                    </a> 
                    <a href="#" class="list-group-item"> 
                    Payment Method: {loan.payment} 
                    </a> 
                    <a href="#" class="list-group-item active"> 
                    Balance: {loan.balance}
                    </a> 
                    <a href="#" class="list-group-item "> 
                    Remaining Installment: {loan.number_of_installments}
                    </a> 
                    <a href="#" class="list-group-item "> 
                    Next Installment: {min} 
                    </a> 
                  
                    <a href="#" class="list-group-item "> 
                    Installments: installments
                    </a> 
                  </div> 
                </div> 
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
