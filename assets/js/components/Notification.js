import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import { fetchNotifications, activeNotifications} from "../actions/notificationsActions";

@connect((store) => {

  return {
    notifications: store.notifications.notifications,
    loanNotif: store.loanNotif.loanNotif
  }
})
export default class Notification extends React.Component{
	

	componentWillMount(){
		this.props.dispatch(fetchNotifications());
	}
  

	render(){
		const {notifications} = this.props;
    
    if(!notifications.length){
        return <p> No New Notifications</p>
       }
    const {dispatch} = this.props;
    const actions = bindActionCreators(activeNotifications, dispatch);
    const mappednotifications  = notifications.map(function(x){
            return (
              <ul key = {x.pk}>
                <div class="alert alert-dismissible alert-success">
                  <button type="button" class="close" data-dismiss="alert">&times;</button>
                  <strong>Congratulations!</strong> 
                 <p onClick={() => actions(x.loan)} >Your Loan with an id number has {x.loan} been approved</p>
                </div>
              </ul>

              )
    
            });
    const { loanNotif } = this.props;
    var activeNotif = function(){}
    console.log(loanNotif);
    if(loanNotif[0]){
    activeNotif = function(){
      return (
        <div id="jumbo" class="panel panel-primary"> 
                    <div class="panel-heading"> 
                      <h1 class="panel-title">{loanNotif[0].loan_name}</h1> 
                    </div> 
                    <div class="spanel-body"> 
                      <div class="list-group"> 
                        <a href="#" class="list-group-item active"> 
                          Nearest Due date: {loanNotif[0].due_date}
                        </a> 
                        <a href="#" class="list-group-item"> 
                        Payment Method: {loanNotif[0].payment} 
                        </a> 
                        <a href="#" class="list-group-item active"> 
                        Balance: {loanNotif[0].balance}
                        </a> 
                        <a href="#" class="list-group-item "> 
                        Remaining Installment: {loanNotif[0].number_of_installments}
                        </a> 
                        <a href="#" class="list-group-item "> 
                        Installments: installments
                        </a> 
                        <a href="#" class="list-group-item "> 
                        Approve: {String(loanNotif[0].approve)}
                        </a> 
                      </div> 
                    </div> 
                  </div>

        )
    }
  }
  
		return(
			<div class="Notification">
			{mappednotifications}
      {activeNotif()}
			</div>

			)
	}
}