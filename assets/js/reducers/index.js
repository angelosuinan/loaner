import { combineReducers } from "redux";

import loans from "./loansReducer";
import installments from "./installmentsReducer";


export default combineReducers({
	loans,
	installments,
});