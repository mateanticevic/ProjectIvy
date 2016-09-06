  var TableCities = React.createClass({

      componentDidMount: function () {
        console.log('mount success');

      },
      render: function () {
    var countryNodes = this.props.data.map(function(city) {
		return (
			<tr key={city.ValueId}>
				<td>{city.Name}</td>
				<td>{city.LocationCenter.Latitude}</td>
				<td>{city.LocationCenter.Longitude}</td>
			</tr>
		);
	});
        return (
          <table id="table-cities" className="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>Latitude</th>
					<th>Longitude</th>
				</tr>
			</thead>
			<tbody>
				{countryNodes}
			</tbody>
          </table>
        )
      }
  });

module.exports = TableCities;