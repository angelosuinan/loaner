
    class Loan extends React.Component{
      render(){
        const name = "aaaa";
         var get_json = function(){ axios.get('/list/?format=json')
          .then(function (response) {
          $("#l").text( response['data']);
          console.log(response['data'])
          var x=0;
          
          for (let value of response['data']) {
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
                  </div> \
                </div> \
              </div>';
            var div = $(html);
            $("#loansdiv").append(div)
            x++;
          }
          
          })
     .catch(function (error) {
       console.log(error);
       });
        }
        get_json();
        return(
          <div>
        <h1>It works  </h1>
        <p id ="l"></p>
        <div id ="loansdiv"></div>
      
       
        </div>
        );
      }
    }
    class AppyLoan extends React.Component{
       


       handleSubmit(event) {
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
 console.log(
    this.refs.bal.value,
    this.refs.loan_name.value,
    this.refs.payment.value
  );
 var Bal=this.refs.bal.value;
 var Pay=this.refs.payment.value;
 var Name=this.refs.loan_name.value;


        var send = function(){ 
var csrfToken = getCookie('csrftoken');
        axios({
  method: 'post',
  url: 'http://127.0.0.1:8000/list/',
 data: {
    balance: Bal,
    payment: Pay,
    loan_name: Name
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
          <option >MORTAGE</option>
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
    class Installment extends React.Component{
      render(){
        const name = "aaaa";
         var get_json = function(){ axios.get('/list/?format=json')
          .then(function (response) {
          $("#l").text( response['data']);
          console.log(response['data'])
          var x=0;
          
          for (let value of response['data']) {
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
                  </div> \
                </div> \
              </div>';
            var div = $(html);
            $("#loansdiv").append(div)
            x++;
          }
          
          })
     .catch(function (error) {
       console.log(error);
       });
        }
        get_json();
        return(
         <div>
          <h1> Installments</h1>
            <div id ="loansdiv"></div>
            </div>
          );
      }
    }

    class Layout extends React.Component{
      
      render(){

        return(
        
          <div >
          
          <Link to="loan"><button className="btn btn-primary">View Loans</button></Link> &nbsp;
          <Link to="appyLoan"><button className="btn btn-primary">Apply Loan</button></Link>&nbsp;
          <Link to="installment"><button className="btn btn-primary">Pay an Installment</button></Link>&nbsp;
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


