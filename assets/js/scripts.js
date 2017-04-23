

function get_json(){ 
          axios.get('/list/?format=json')
          .then(function (response) {
          

          var x=0;
          
          for (let value of response['data']) {
            if (x = 0){
              continue;
            }
            var min = 0;
          if (value['number_of_installments'] != 0){
            if (value['payment'] == 'MONTHLY'){
              min = value['balance'] / value['number_of_installments'];
            }
            else if (value['payment'] == 'SEMI-ANNUALLY'){
                min = value['balance'] / value['number_of_installments'];
            }
            else if (value['payment'] == 'ANNUALLY'){
                min = value['balance'] / value['number_of_installments'];
            }
          }
            var html ='<div class="panel panel-primary"> \
                <div class="panel-heading"> \
                  <h1 class="panel-title">'+value['loan_name']+'</h1> \
                </div> \
                <div class="spanel-body"> \
                  <div class="list-group"> \
                    <a href="#" class="list-group-item active"> \
                      Nearest Due date: '+value['due_date']+'\
                    </a> \
                    <a href="#" class="list-group-item"> \
                    Payment Method: '+value['payment']+' \
                    </a> \
                    <a href="#" class="list-group-item active"> \
                    '+value['balance']+' \
                    </a> \
                    <a href="#" class="list-group-item "> \
                    Remaining Installment: '+value['number_of_installments']+' \
                    </a> \
                    <a href="#" class="list-group-item "> \
                    Next Installment: '+min+' \
                    </a> \
                  </div> \
                </div> \
              </div>';
            var div = $(html);
            $("#loansdiv").append(div)
            x++;
          }
          console.log(x);
          })
     .catch(function (error) {
       console.log(error);
       });
        }
    class Loan extends React.Component{
      constructor(){
        super();
        get_json();
      }

      render(){
        
         
        
        return(
          <div>
        <h1></h1>
        <p id ="l"></p>
        <div id ="loansdiv"></div>
      
       
        </div>
        );
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
    class AppyLoan extends React.Component{
       


       handleSubmit(event) {
       
 console.log(
    this.refs.bal.value,
    this.refs.loan_name.value,
    this.refs.payment.value
  );
 var Bal=this.refs.bal.value;
 var Pay=this.refs.payment.value;
 var Name=this.refs.loan_name.value;
 var Inst=this.refs.ints.value;


        var send = function(){ 
var csrfToken = getCookie('csrftoken');
        axios({
  method: 'post',
  url: 'http://127.0.0.1:8000/list/',
 data: {
    balance: Bal,
    payment: Pay,
    loan_name: Name,
    number_of_installments: Inst
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

 location.href = "/#"

       }
      render(){

        
var p = "SA";





        return(
          <div>

           <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
  <fieldset>
    <legend>Apply A Loan</legend>
    <div className="form-group">
      <label for="inputnumber" className="col-lg-2 control-label" >Loan Amount</label>
      <div className="col-lg-10">
        <input type="number" className="form-control" id="inputAmount" placeholder="Loan Amount" ref= "bal"/>
      </div>
    </div>

     <div className="form-group">
      <label for="select" className="col-lg-2 control-label">Loan Type</label>
      <div className="col-lg-10">
        <select className="form-control" id="select" ref="loan_name" >
          <option >MORTGAGE</option>
          <option >PERSONAL</option>
          <option>AUTO</option>
          <option>HOME</option>
          <option>STUDENT</option>
        </select>
      </div>
    </div>

    <div className="form-group">
      <label for="select" className="col-lg-2 control-label">Payment Method</label>
      <div className="col-lg-10">
        <select className="form-control" id="select" ref="payment" >
          <option>MONTHLY</option>
          <option>SEMI-ANNUALLY</option>
          <option>ANNUALLY</option>
        </select>
      </div>
    </div>
    <div className="form-group">
      <label for="inputnumber" className="col-lg-2 control-label" >Number of Installment(ex. 12months for MONTHLY, 2years for ANNUALLY 
        5 installments for SEMI-ANNUALLY in 2 and 1/2 years) </label>
    <div className="col-lg-10">
        <input type="number" className="form-control" id="inputInstallments" placeholder="Number of Installment" ref= "ints" />
      </div>
    </div>


    <div className="form-group">
      <div className="col-lg-10 col-lg-offset-2">
        <button type="reset" className="btn btn-default">Cancel</button>
        <button type="submit" className="btn btn-primary" value="submit" >Submit</button>
      </div>
    </div>
  </fieldset>
  </form>
  </div>
          );
      }
    }
    var totalnumber = 0;
         var get_json2 = function(){ axios.get('/list/?format=json')
          .then(function (response) {
          $("#l").text( response['data']);
          console.log(response['data'])
          var x=0;
          
          for (let value of response['data']) {

             var min = 0;
          if (value['number_of_installments'] != 0){
            if (value['payment'] == 'MONTHLY'){
              min = value['balance'] / value['number_of_installments'];
            }
            else if (value['payment'] == 'SEMI-ANNUALLY'){
                min = value['balance'] / value['number_of_installments'];
            }
            else if (value['payment'] == 'ANNUALLY'){
                min = value['balance'] / value['number_of_installments'];
            }
          }
          min = Math.round(min);
            var html ='<div class="panel panel-primary" style="width:90%; margin-left:10px;"> \
                <div class="panel-heading"> \
                  <h1 id ="'+x+'loan_name" class="panel-title">'+value['loan_name']+'</h1> \
                </div> \
                <div class="spanel-body"> \
                  <div class="list-group"> \
                    <a class="list-group-item "> \
                      Nearest Due date: '+value['due_date']+'\
                    </a> \
                    <a  id = "'+x+'pk" class="list-group-item ">'+value['pk']+'</a> \
                    <a  class="list-group-item active"> \
                    Payment Method: '+value['payment']+' \
                    </a> \
                    <a class="list-group-item "> \
                    '+value['balance']+' \
                    </a> \
                    <a href="#" class="list-group-item "> \
                    Remaining Installment: '+value['number_of_installments']+' \
                    </a> \
                    <a href="#" class="list-group-item active"> \
                    Next Installment in due_date: '+min+' \
                    </a> \
                      <a class="list-group-item active"> \
                         <legend>Pay</legend> \
                         <div class="form-group"> \
                               <div class="col-lg-10"> \
                                 <input id="'+x+'" min = "'+min+'" max="'+value['balance']+'" type="number" name = '+value['pk']+'" class="form-control"  placeholder="Amount to Pay"> \
                               </div> \
                             </div> \
                          <div class="form-group"> \
                                <div class="col-lg-10 col-lg-offset-2"> \
                                  <button type="reset" class="btn btn-default">Cancel</button> \
                                  <button type="submit" class="btn btn-primary">Submit</button> \
                                </div> \
                              </div> \
                      </a> \
                  </div> \
                </div> \
              </div>';
            var div = $(html);
            $("#loansdiv").append(div)
            x++;
          }
          $("#total-number").text(x);
          totalnumber=x;
          })
     .catch(function (error) {
       console.log(error);
       });
        }
    class Installment extends React.Component{
      constructor(){
        super();
        get_json2();
      }
      handleSubmit(event) {
        
        var total = $( "total-number" ).text();
        
        for(var x =0; x<totalnumber; x++){
          var y = $("#"+x+"").val();
          if (y ==""){
            continue;
          }
          console.log(y);
            var pk = $("#"+x+"pk").text();
            console.log(pk);
            var p = String(y);
            var n = $("#"+x+"loan_name").text();
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
        }
        send();
         
        event.preventDefault();
        location.href = "/#";
        
       }
      render(){
       
        
        return(
         <div>
         <p> <h3 id = "total-number"></h3><h3>Active Loans</h3></p>
           <form class="form-horizontal" onSubmit={this.handleSubmit.bind(this)}> 
                         <fieldset> 
            <div id ="loansdiv"></div>
            
             </fieldset> 
                         </form> 
                         </div>
          );
      }
    }

    class Layout extends React.Component{
      

      render(){

        return(
        
          <div >
          
          
               <ul className="nav nav-tabs">
            <li className=""><Link to="loan"  aria-expanded="false">View Loan</Link></li>
            <li className=""><Link to="appyLoan"  aria-expanded="true">Apply Loan</Link></li>
            <li className=""><Link to="installment"  aria-expanded="true">Pay an Installment</Link></li>
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                Dropdown <span className="caret"></span>
              </a>
              <ul className="dropdown-menu">
                <li><a href="#dropdown1" data-toggle="tab">Action</a></li>
                <li className="divider"></li>
                <li><a href="#dropdown2" data-toggle="tab">Another action</a></li>
              </ul>
            </li>
          </ul>
          
           {this.props.children}
           
          </div>
          );
      }
    }
    class Welcome extends React.Component{
      render(){
        
        return(
        <div>
        <h1> Welcome</h1>
        </div>
        );
      }
    }
 
    const app = $("#app")[0];
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Link = ReactRouter.Link;
var browserHistory = ReactRouter.browserHistory;
var hashHistory = ReactRouter.hashHistory;

    ReactDOM.render(
      <Router history={hashHistory}>
        <Route path="/"  component={Layout}>
        <IndexRoute component={Welcome}></IndexRoute>
        <Route path="loan" component={Loan}></Route>
        <Route path="appyLoan" component={AppyLoan}></Route>
        <Route path="installment" component={Installment}></Route>
        </Route>
      </Router>, 
      app);


