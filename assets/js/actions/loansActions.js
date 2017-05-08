import axios from "axios";

export function fetchLoans () {
	return function(dispatch) {
		axios.get("/list/?format=json")
			.then((response) => {
				dispatch({type: "FETCHED_LOANS_FULFILLED", payload:response.data});
			})
			.catch((err) =>{
				dispatch({type: "FETCHED_LOANS_REJECTED", payload: err});
			});
		};
}

export function sortLoanName(value) {
	return{
		type: "SORT_LOAN_NAME",
		payload: value,
	};
}
