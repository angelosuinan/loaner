import axios from "axios";

export function postApplication(val) {
    return function(dispatch) {

        
        var csrfToken = getCookie('csrftoken');
        axios({
    	method: 'post',
    	url: 'http://127.0.0.1:8000/list/',
	   	data: val,
	    headers:{
	     "X-CSRFToken": csrfToken
	    }
	  	}) .then(function (response) {
            console.log(response);
	      dispatch({type: "POSTED_APPLY_LOAN_FULFILLED", payload:val})
	    })
	    .catch(function (error) {
	      dispatch({type: "POSTED_APPLY_LOAN_REJECTED", payload: error})
	    });
  
	}
}

export function undo() {
    return{
        type: "UNDO",
    }
}
export function redo() {
    return{
        type: "REDO",
    }
}

export function saveApplication(value) {
    return{
        type: "SAVE_APPLICATION",
        payload: value,
    }
}

export function resetState(){
    return{
        type: "RESET_STATE"
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