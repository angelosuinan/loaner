import axios from "axios";


export function fetchLoansWithInstallments() {
	return function(dispatch) {
		axios.get("/list/filter?format=json")
			.then((response) => {
				dispatch({type: "FETCHED_LOANS_INSTALLMENT_FULFILLED", payload:response.data});
			})
			.catch((err) => {
				dispatch({type: "FETCHED_LOANS_INSTALLMENT_REJECTED", payload: err});
			});
		};
}


export function postLoanInstallments(loans, present, price) {
	return function(dispatch) {
		var pk = loans[present].pk;
      var n = loans[present].loan_name;
    	var csrfToken = getCookie('csrftoken');
      axios({
    	method: 'post',
    	url: 'http://127.0.0.1:8000/list/post',
	   	data: {
	      price: price,
	      loan: pk,
	      loan_name: n,
	    },
	    headers:{
	     "X-CSRFToken": csrfToken
	    }
	  	}) .then(function (response) {
	      dispatch({type: "POSTED_LOANS_INSTALLMENT_FULFILLED", payload:loans[present]});
	    })
	    .catch(function (error) {
	    	dispatch({type: "POSTED_LOANS_INSTALLMENT_REJECTED", payload: error});
	    });
	};
}


function getCookie(name) {
  var cookieValue = null;
  if (document.cookie && document.cookie !== '') {
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = jQuery.trim(cookies[i]);
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}
