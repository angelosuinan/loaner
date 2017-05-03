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
    counter: {
        past: [],
        present: 0,
        future: [1,2,3,4],
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
        case "UNDO": {
            const previous = state.counter.past[state.counter.past.length-1];
            const newPast = state.counter.past.slice(0, state.counter.past.length - 1);
            console.log(previous)
            return{
            ...state,
            counter:{ ...state,
                past: newPast , 
                present: previous, 
                future: [state.counter.present, ...state.counter.future]
                }
            }
        }
        case "REDO": {
            const next = state.counter.future[0];
            const newfuture = state.counter.future.slice(1)
            console.log(next)
            return {
                ...state,
                counter:{...state, 
                past: [ ...state.counter.past, state.counter.present ],
                present: next,
                future: newfuture,
                }
            }
        }
	}
    return state;
}