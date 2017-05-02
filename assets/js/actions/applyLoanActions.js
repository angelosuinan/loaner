import axios from "axios";

export function postApplyLoan() {
    return function(dispatch) {

        var Bal=this.state.balance;
        var Pay=this.refs.payment.value;
        var Name=this.refs.loan_name.value;
        var Inst=this.refs.ints.value;
        var csrfToken = getCookie('csrftoken');
        axios({
    	method: 'post',
    	url: 'http://127.0.0.1:8000/list/',
	   	data: {
	      balance: Bal,
          payment: Pay,
          loan_name: Name,
          number_of_installments: Inst
	    },
	    headers:{
	     "X-CSRFToken": csrfToken
	    }
	  	}) .then(function (response) {
	      dispatch({type: "POSTED_APPLY_LOAN_FULFILLED", payload:loans[present]})
	    })
	    .catch(function (error) {
	      dispatch({type: "POSTED_APPLY_LOAN_REJECTED", payload: error})
	    });
  
	}
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