import React from "react";
import { Link } from "react-router";
import { connect } from "react-redux";
import {bindActionCreators} from "redux";

import { fetchNotifications, activeNotifications} from "../actions/notificationsActions";
import LoanItem from "./LoanItem.js";

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
    var activeNotif;
    if(!notifications.length){
        return <p> No New Notifications</p>
        {activeNotif}
       }
    const {dispatch} = this.props;
    const actions = bindActionCreators(activeNotifications, dispatch);
    const mappednotifications  = notifications.map(function(x){
            return (
                  <NotificationDumb actions={actions} x={x}   />
              )
    
            });
    const { loanNotif } = this.props;
    
    var x= loanNotif[0];
    if(loanNotif[0]){
   
      activeNotif= <ul ><LoanItem loan={x} /> </ul>;
      
      }
      
		return(
			<div class="Notification">
			{mappednotifications}
      {activeNotif}
			</div>

			)
	}
}

class NotificationDumb extends React.Component {

  render(){

    const {actions, x} = this.props;
    return (

      <ul key = {x.pk}>
        <div class="alert alert-dismissible alert-success">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
          <strong>Congratulations!</strong> 
         <p onClick={() => actions(x.loan)} >Your Loan with an id number has {x.loan} been approved</p>       
        </div>

      </ul>

      )
  }
}