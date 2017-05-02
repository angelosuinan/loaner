export default function reducer(state={
	application: {
		LoanAmount: null,
		LoanType: null,
		PaymentMethod: null,
		NumberofInstallment: null,
	},
	successloan:{
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
		case "POSTED_APPLY_LOAN": {
			return {...state, posting:true}
		}
		case "POSTED_APPLY_LOAN__REJECTED" : {
			 return {...state, posting: false, error: action.payload}
		}
		case "POSTED_APPLY_LOAN__FULFILLED" : {
			
			return {
          ...state,
          posting: false,
          posted: true,
          successloan: action.payload,
        	}	
		}
	}
    return state;
}