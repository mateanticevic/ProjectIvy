
  var PasswordTextBox = React.createClass({

      componentDidMount: function () {
        console.log('mount success');

      },
      render: function () {
        return (
			<div>
				<input
					id="login-box-password"
					type="password"
					className="form-control"
          value={this.props.password}
					placeholder="Password"/>
			</div>
        )
      }
  });
  
  module.exports = PasswordTextBox;