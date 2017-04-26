import React from "react";
import LoanItem from "./LoanItem";


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

  export default class Installment extends React.Component{
    constructor(){
         super();      
      this.state ={
        loans: [],
        present:0,
      }
    }
    componentDidMount(){
      axios.get(`/list/?format=json`)
      .then(res => {
     var arr =  Object.keys(res).map(key => res[key])
   
     var arr =  Object.keys(arr[0]).map(key => arr[0][key])
     this.setState({loans: arr, present: arr.length-1});
      }).catch(function (error) {
       console.log(error);
       }); 
    }
    handleLeft(e){
      if (this.state.present !=0){
      var x = this.state.present-1;
      this.setState({present:  x});
    }
    console.log(this.state.present);
         
    }
    handleRight(e){
      if (this.state.present !=this.state.loans.length-1){
        var x = this.state.present+1;
      this.setState({present:  x});
      }
    
    }
    handleSubmit(event){
      var loan = this.state.loans;
      var present = this.state.present;

      var pk = loan[present].pk;
      var n = loan[present].loan_name;
      var p = this.refs.inputInst.value;
      var send = function(){ 
            var csrfToken = getCookie('csrftoken');
                  axios({
            method: 'post',
            url: 'http://127.0.0.1:8000/list/post',
           data: {
              price: p,
              loan: pk,
              loan_name: n,
            },
            headers:{
             "X-CSRFToken": csrfToken
            }
          }) .then(function (response) {
              console.log(response);
            })
            .catch(function (error) {
              console.log(error);
            });
          }
      send();
      event.preventDefault();
      location.href="/#";
    }
    render(){
      var loanitem;
  
      if (this.state.loans.length != 0 ){
        if (this.state.loans[this.state.present].balance <= 0){
          if(this.state.present !=0){
            var x = this.state.present-1;
          this.setState({present: x});
          }
          else if (this.state.present !=this.state.loans.length-1){
            var x = this.state.present+1;
          this.setState({present:  x});
          } 
        }
        var loan = this.state.loans[this.state.present];
        loanitem = <LoanItem loan={loan} />
        
      }
        return(
          <div>
           <button class="left" onClick={this.handleLeft.bind(this)}>left</button>
          <button class="right" onClick={this.handleRight.bind(this)}>right</button>
        
          <div class="loans-div">

          {loanitem}          
          </div>

          <form onSubmit={this.handleSubmit.bind(this)}>
            <fieldset>
            <legend>Pay An Installment</legend>
            <div class="form-group">
                  <label  class="col-lg-2 control-label">Pay </label>
                  <div class="col-lg-10">
                    <input type="number" ref="inputInst"class="form-control" id="inputEmail" placeholder="Pay Amount" />
                  </div>
                </div>
                <div class="form-group">
                      <div class="col-lg-10 col-lg-offset-2">
                        <button type="reset" class="btn btn-default">Cancel</button>
                        <button type="submit" class="btn btn-primary">Submit</button>
                      </div>
                    </div>
              </fieldset>
          </form>
         
      
       
        </div>
        );
      }
    }
