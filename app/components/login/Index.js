import TextBox from "./TextBox";
import Dashboard from "../dashboard/Index"
import NavBar from "../common/NavBar"

var Login = React.createClass({

	  componentDidMount: function() {
          if(localStorage.getItem("token")){
              api.token = localStorage.getItem("token");
              this.openDashboard();
          }
	  },
	  getInitialState: function() {
		return {
            username: "",
            password: ""
        };
	  },
      onLogin: function(){

          var login = api.postToken(this.state.username, this.state.password);

          login.OnSuccess = function(token){
              api.token = token;
              localStorage.setItem("token", token);
              this.openDashboard();      
          }.bind(this);

          login.OnError = function(xhr, ex){
              alert(ex);
          };
      },
      onPasswordChanged: function(value){
          this.setState({password: value});
      },
      onUsernameChanged: function(value){
          this.setState({username: value});
      },
      openDashboard: function(){
          var navBarMount = document.getElementById("navbar");
          ReactDOM.render(<NavBar />, navBarMount);
          
          var mountNode = document.getElementById("content");
          ReactDOM.render(<Dashboard />, mountNode);
      },
      render: function () {
        return (
			<div className="row">
                <div className="col-lg-2 col-lg-offset-5 panel panel-default vertical-align-center">
                    <div className="panel-body">
                        <form id="form-login">
                            <TextBox type="text" placeholder="Username" onChange={this.onUsernameChanged} />
                            <TextBox type="password" placeholder="Password" onChange={this.onPasswordChanged} />
                            <button type="button" className="btn btn-default" onClick={this.onLogin}>Log in</button>
                        </form>
                    </div>
                </div>
            </div>
        )
      }
  });  
   
module.exports = Login;