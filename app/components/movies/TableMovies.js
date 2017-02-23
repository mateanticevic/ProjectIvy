  var TableMovies = React.createClass({

      componentDidMount: function () {
        console.log('mount success');

      },
      render: function () {
    var nodes = this.props.items.map(function(movie) {
		return (
			<tr key={movie.ImdbId}>
				<td>{formatDateString(movie.timestamp)}</td>
				<td>{movie.title}</td>
				<td>{movie.year}</td>
				<td>
					<a target="_blank" href={'http://www.imdb.com/title/' + movie.imdbId}>
						<span className="fa fa-imdb fa-lg" aria-hidden="true"></span> {movie.imdbId}
					</a>
				</td>
				<td>{movie.runtime} min</td>
				<td>{movie.rating}</td>
				<td>{movie.myRating}</td>
			</tr>
		);
	});
        return (
          <table id="table-movies" className="table">
						<thead>
							<tr>
								<th>Watched</th>
								<th>Title</th>
								<th>Year</th>
								<th>ImdbId</th>
								<th>Runtime</th>
								<th>Rating</th>
								<th>MyRating</th>
							</tr>
						</thead>
						<tbody>
							{nodes}
						</tbody>
          </table>
        )
      }
  });

module.exports = TableMovies;