import ItemsPanel from "../common/ItemsPanel"
import TableMovies from "./TableMovies"

var Movies = React.createClass({

	  componentDidMount: function() {

        api.getMovies({}).OnSuccess = function(items){
            this.setState({movies: items});
        }.bind(this);

	  },
	  getInitialState: function() {
		return {movies: []};
	  },
      render: function () {
        return (
					<div>
						<div className="col-lg-12">
							<ItemsPanel title="Movies">
								<TableMovies items={this.state.movies} />
							</ItemsPanel>
						</div>
					</div>
        )
      }
  });  
   
module.exports = Movies;