
    class Loan extends React.Component{
      render(){
        const name = "aaaa";
         var get_json = function(){ axios.get('/list/?format=json')
          .then(function (response) {
          $("#l").text( response['data']);
          console.log(response['data'])
          var x=0;
          for (let value of response['data']) {
            var div = $("<div id='loans-"+x+"'><p>TEst</p></div>");
            $("#loansdiv").append(div)
            x++;
          }
          var x=0
          for (let value of response['data']) {
              var p = $("<p id ='loan_name'>"+value['loan_name']+"</p>");
              $("#loans-"+x).append(p);
              var p = $("<p id ='due_date'>"+value['due_date']+"</p>");
              $("#loans-"+x).append(p);
              var p = $("<p id ='payment'>"+value['payment']+"</p>");
              $("#loans-"+x).append(p);
              var p = $("<p id ='balance'>"+value['balance']+"</p>");
             $("#loans-"+x).append(p);
              var p = $("<p id ='installment'>"+value['installment']+"</p>");
              $("#loans-"+x).append(p);
              x++
              }
          })
     .catch(function (error) {
       console.log(error);
       });
        }

        return(
          <div>
        <h1>It works  {get_json()}{name}</h1>
        <p id ="l"></p>
        <div id ="loansdiv"></div>
        <div id="loan_name_div"></div>
       
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
        var send = function(){ 
var csrfToken = getCookie('csrftoken');
        axios({
  method: 'post',
  url: 'http://127.0.0.1:8000/list/',
  data: {
    firstName: "SDDS",
    lastName: 'Flintstone'
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
    <legend>Legend</legend>
    <div className="form-group">
      <label for="inputEmail" className="col-lg-2 control-label">Email</label>
      <div className="col-lg-10">
        <input type="text" className="form-control" id="inputEmail" placeholder="Email" />
      </div>
    </div>
    <div className="form-group">
      <label for="inputPassword" className="col-lg-2 control-label">Password</label>
      <div className="col-lg-10">
        <input type="password" className="form-control" id="inputPassword" placeholder="Password" />
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Checkbox
          </label>
        </div>
      </div>
    </div>
    <div className="form-group">
      <label for="textArea" className="col-lg-2 control-label">Textarea</label>
      <div className="col-lg-10">
        <textarea className="form-control" rows="3" id="textArea"></textarea>
        <span className="help-block">A longer block of help text that breaks onto a new line and may extend beyond one line.</span>
      </div>
    </div>
    <div className="form-group">
      <label className="col-lg-2 control-label">Radios</label>
      <div className="col-lg-10">
        <div className="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
            Option one is this
          </label>
        </div>
        <div className="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
            Option two can be something else
          </label>
        </div>
      </div>
    </div>
    <div className="form-group">
      <label for="select" className="col-lg-2 control-label">Selects</label>
      <div className="col-lg-10">
        <select className="form-control" id="select" >
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <br />
       
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
        return(
         
          <h1> Install ment</h1>
          
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


