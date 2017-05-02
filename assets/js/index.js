import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, hashHistory } from "react-router";

import Layout from "./components/Layout";
import Loan from "./components/Loan";
import AppyLoan from "./components/AppyLoan";
import Installment from "./components/Installment";
import Welcome from "./components/Welcome";
import Notification from "./components/Notification";
import LoanItem from "./components/LoanItem";
import {LoanType } from "./components/AppyLoan";

import store from "./store";

const app = document.getElementById('app')

ReactDOM.render(
	<Provider store={store} >
        <Router history ={hashHistory}> 
           <Route path="/"  component={Layout}>
	           <IndexRoute component={Loan}></IndexRoute>
	           <Route path="loan" component={Loan}></Route>
	           <Route path="appyLoan" component={AppyLoan}></Route>
	           <Route path="installment" component={Installment}></Route>
	           <Route path="notification" component={Notification}></Route>
	           <Route path="individualloan" component={LoanItem}></Route>
	           <Route path="LoanType" component={LoanType}></Route>
           </Route>           
  		</Router>
  	</Provider>
  ,app);
