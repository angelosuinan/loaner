export default function reducer(state={
	loans: {
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
	error: null,
}, action){
	switch (action.type){
		case "FETCHED_LOANS": {
			return {...state, fetching:true}
		}
		case "FETCHED_LOANS_REJECTED" : {
			 return {...state, fetching: false, error: action.payload}
		}
		case "FETCHED_LOANS_FULFILLED" : {
			
			return {
          ...state,
          fetching: false,
          fetched: true,
          loans: action.payload,
        	}	
		}
	}

	return state;
}