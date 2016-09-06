import UsernameTextBox from "./login/UsernameTextBox"
import PasswordTextBox from "./login/PasswordTextBox"
import Movies from "./movies/Index"

var ReactApp = React.createClass({

	  componentDidMount: function() {
	  },
	  getInitialState: function() {
		return {username: 'xxx', password: '123456'};
	  },
	  handleUsernameChange: function(e) {
		this.setState({username: e.target.value});
	  },	
	  handlePasswordChange: function(e) {
		this.setState({password: e.target.value});
	  },		  
	  handleSubmit: function(e) {
		e.preventDefault();
		
		$.ajax({
		  type: "POST",
		  url: "https://api.anticevic.net/security/authenticate",
		  data: { Username: this.state.username, Password: this.state.password },
		  dataType: 'json',
		  cache: false,
		  success: function(data) {
			  if(data.IsSuccessful){
				var url = "https://api.anticevic.net/movie/seen/2015";
				var mountNode = document.getElementById("content");
				ReactDOM.render(<Movies url={url}/>, mountNode);
			  }
		  }.bind(this),
		  error: function(xhr, status, err) {
		  }.bind(this)
		});
	  },
      render: function () {
        return (
			<div id="login-box">
				<form onSubmit={this.handleSubmit}>
					<UsernameTextBox onChange={this.handleUsernameChange} />
					<PasswordTextBox onChange={this.handlePasswordChange} />
					<div>
						<button className="form-control">Login</button>
					</div>
				</form>
			</div>
        )
      }
  });  
   
module.exports = ReactApp;