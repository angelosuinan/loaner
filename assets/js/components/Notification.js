import React from "react";
import { Link } from "react-router";
export default class Notification extends React.Component{
	constructor(){
		super();
		this.state = {
			approvals:[],
			loans:[]
		}
	}

	componentDidMount(){
		axios.get(`/approval`)
      .then(res => {
     var arr =  Object.keys(res).map(key => res[key])
   
     var arr =  Object.keys(arr[0]).map(key => arr[0][key])
     
     this.setState({approvals: arr});
      }).catch(function (error) {
       console.log(error);
       }); 
      axios.get(`/list/?format=json`)
      .then(res => {
     var arr =  Object.keys(res).map(key => res[key])
   
     var arr =  Object.keys(arr[0]).map(key => arr[0][key])
     
     this.setState({loans: arr});
      }).catch(function (error) {
       console.log(error);
       }); 
	}
	render(){
		var notifications = <div> <p>No New Notification</p></div>;
			if (this.state.approvals){
		  notifications= this.state.approvals.map(x =>
            <div class="notif">
            <div class="alert alert-dismissible alert-success">
              <button type="button" class="close" data-dismiss="alert">&times;</button>
              <strong>Congratulations!</strong> 
              <a > Your Loan with an id number has {x.loan} been approved </a>
            </div>
            <p></p>
            </div>
            )
		}
		
		return(
			<div class="Notification">
			{notifications}
			</div>

			)
	}
}