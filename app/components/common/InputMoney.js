var InputMoney = React.createClass({

	  componentDidMount: function() {
	  },
      render: function () {

        return (
            <div className="input-group">
                <input type="number" className="form-control" value={this.props.value} onChange={this.props.onValueChange} />
                <span className="input-group-addon">{this.props.currency}</span>
            </div>
        )
      }
  });  
   
module.exports = InputMoney;