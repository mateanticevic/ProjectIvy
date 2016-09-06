var UsernameTextBox = React.createClass({

      componentDidMount: function () {
        console.log('mount success');

      },
      getInitialState: function() {
        return {username: this.props.username};
      },
      usernameChanged: function(event){
        this.setState({username: event.target.value});
      },
      render: function () {
        return (
			<div>
				<input
					id="login-box-username"
					placeholder="Username"
					type="text"
          onChange={this.usernameChanged}
          value={this.state.username}
					className="form-control"/>
			</div>
        )
      }
  });
  
    module.exports = UsernameTextBox;