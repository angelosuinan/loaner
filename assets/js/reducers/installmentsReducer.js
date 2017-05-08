export default function reducer(action, state={
	installments: {
	  pk: null,
	  loan_name: null,
	  due_date: null,
	  loanee: null,
	  balance: null,
	  payment: null,
	  number_of_installments: null,
	  approve: null,
	},
	fetching: false,
	fetched: false,
	posting: false,
	posted: false,
	error: null,
}){
	switch (action.type){
		case "FETCHED_LOANS_INSTALLMENT": {
			return {...state, fetching:true, }
		}
		case "FETCHED_LOANS_INSTALLMENT_REJECTED" : {
			return {...state, fetching: false, error: action.payload}
		}
		case "FETCHED_LOANS_INSTALLMENT_FULFILLED" : {
			return {
	      ...state,
	      fetching: false,
	      fetched: true,
	      posted: false,
	      installments: action.payload,
	    	}
		}
		case "POSTED_LOANS_INSTALLMENT": {
			return {...state, posting:true}
		}
		case "POSTED_LOANS_INSTALLMENT_REJECTED" : {
			 return {...state, posting: false, error: action.payload}
		}
		case "POSTED_LOANS_INSTALLMENT_FULFILLED" : {
			return {
	      ...state,
	      posting: false,
	      posted: true,
	      installments: action.payload,
    	}
		}
	}
	return state;
}
