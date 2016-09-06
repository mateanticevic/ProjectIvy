  var TableCountries = React.createClass({

      componentDidMount: function () {
        console.log('mount success');

      },
      render: function () {
    var countryNodes = this.props.data.map(function(country) {
		return (
			<tr key={country.TwoLetterCode}>
				<td>{country.Name}</td>
				<td>{country.DialingCode}</td>
				<td>{country.TwoLetterCode}</td>
				<td>{country.ThreeLetterCode}</td>
			</tr>
		);
	});
        return (
          <table id="table-countries" className="table">
			<thead>
				<tr>
					<th>Name</th>
					<th>DialingCode</th>
					<th>TwoLetterCode</th>
					<th>ThreeLetterCode</th>
				</tr>
			</thead>
			<tbody>
				{countryNodes}
			</tbody>
          </table>
        )
      }
  });

module.exports = TableCountries;