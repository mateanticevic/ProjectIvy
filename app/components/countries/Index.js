import TableCountries from "./TableCountries"
import TableCities from "./TableCities"

var ReactApp = React.createClass({

	  componentDidMount: function() {
		$.ajax({
		  url: this.props.url,
		  dataType: 'json',
		  cache: false,
		  success: function(data) {
			this.setState({data: data});
		  }.bind(this),
		  error: function(xhr, status, err) {
		  }.bind(this)
		});
	  },
	  getInitialState: function() {
		return {data: []};
	  },
      render: function () {
        return (
			<TableCities data={this.state.data} />
        )
      }
  });  
   
module.exports = ReactApp;