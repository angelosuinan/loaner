
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
      render(){
        return(
         
          <h1> Appy Loan</h1>
         
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
          <center>
          <Link to="loan"><button className="btn btn-primary">View Loans</button></Link> &nbsp;
          <Link to="appyLoan"><button className="btn btn-primary">Apply Loan</button></Link>&nbsp;
          <Link to="installment"><button className="btn btn-primary">Pay an Installment</button></Link>&nbsp;
           {this.props.children}
           </center> 
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


