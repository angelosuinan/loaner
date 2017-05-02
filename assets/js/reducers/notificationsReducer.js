export default function reducer(state={
	notifications: {
		pk: null,
		loan: null,
		approve_this_loan: null,
	},
	fetching: false,
	fetched: false,
	error: null,
	loanNotif: {
		pk: null,
		loan_name: null,
		due_date: null,
		loanee: null,
		balance: null,
		payment: null,
		number_of_installments: null,
		approve: null,
	},
}, action){
	switch (action.type){
		case "FETCHED_NOTIFICATIONS": {
			return {...state, fetching:true, }
		}
		case "FETCHED_NOTIFICATIONS_REJECTED" : {
			 return {...state, fetching: false, error: action.payload}
		}
		case "FETCHED_NOTIFICATIONS_FULFILLED" : {
			
			return {
          ...state,
          fetching: false,
          fetched: true,
          notifications: action.payload,
        	}	
		}
		case "ACTIVE_NOTIFICATIONS": {
			return {...state, fetching:true, }
		}
		case "ACTIVE_NOTIFICATIONS_REJECTED" : {
			 return {...state, fetching: false, error: action.payload}
		}
		case "ACTIVE_NOTIFICATIONS_FULFILLED" : {
			
			return {
          ...state,
          fetching: false,
          fetched: true,
          loanNotif: action.payload,
        	}	
		}

	}
	return state;
}