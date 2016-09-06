import PasswordTextBox from "./PasswordTextBox";
import UsernameTextBox from "./UsernameTextBox";

var Login = React.createClass({

	  componentDidMount: function() {
          $("#form-login").submit(function(event){
              alert();
          });
	  },
	  getInitialState: function() {
		return { username: "mate", password: "123456"};
	  },
      render: function () {
        return (
			<div className="row">
                <div className="col-lg-2 col-lg-offset-5 panel panel-default vertical-align-center">
                    <div className="panel-body">
                        <form id="form-login">
                            <UsernameTextBox username={this.state.username} />
                            <PasswordTextBox password={this.state.password} />
                        </form>
                    </div>
                </div>
            </div>
        )
      }
  });  
   
module.exports = Login;