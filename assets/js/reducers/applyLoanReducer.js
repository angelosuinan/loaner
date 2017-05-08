export default function reducer(state={
	application: {
		balance: 0,
		loan_name: "MORTGAGE",
		payment: "MONTHLY",
		number_of_installments: 1,
        limit: 100000,
        loan_amount: null,
	},
	successloan:{
        loan_name: null,
        due_date: null,
        balance: null,
        payment: null,
        number_of_installments: null,
        approve: false,
	},
    counter: {
        past: [],
        present: 0,
        future: [1,2,3,4,5],
    },
	fetching: false,
	fetched: false,
	error: null,
}, action, ) {
	switch (action.type) {
		case "POSTED_APPLY_LOAN": {
			return {...state, posting:true };
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
      return {
	      ...state,
	      counter:{...state,
	      past: [ ...state.counter.past, state.counter.present ],
	      present: next,
	      future: newfuture,
        }
      }
    }
    case "SAVE_APPLICATION": {
        return{
            ...state,
            application: action.payload,
        }
    }
    case "RESET_STATE": {
      return {
        ...state,
        application: {
        balance: null,
        loan_name: null,
        payment: null,
        number_of_installments: null,
        },
        counter: {
	        past: [],
	        present: 0,
	        future: [1,2,3,4,5],
        },
        successloan:{
          balance: 0,
          loan_name: "MORTGAGE",
          payment: "MONTHLY",
          number_of_installments: null,
          limit: 100000,
          loan_amount: null,
      	},
    	}
    }
	}
	return state;
}
