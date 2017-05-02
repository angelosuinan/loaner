import axios from "axios";

export function fetchNotifications() {
	return function(dispatch) {
		axios.get("/approval/?format=json")
			.then((response) => {
				dispatch({type: "FETCHED_NOTIFICATIONS_FULFILLED", payload:response.data})
			})
			.catch((err) => {
				dispatch({type: "FETCHED_NOTIFICATIONS_REJECTED", payload: err})
			})	
		}
}

export function activeNotifications(pk) {
	return function(dispatch) {
		axios.get("/list/filter")
			.then((response) => {
				var arr = response.data.filter(function (x) {
				  if(x.pk == pk)
				  		return x 
				});
				
				dispatch({type: "ACTIVE_NOTIFICATIONS_FULFILLED", payload:arr})
			})
			.catch((err) => {
				dispatch({type: "ACTIVE_NOTIFICATIONS_REJECTED", payload: err})
			})	
		}
}