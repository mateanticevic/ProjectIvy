import ItemsPanel from "../common/ItemsPanel"
import TableMovies from "./TableMovies"
import Widget from "../dashboard/WidgetSmall"

var Movies = React.createClass({

	  componentDidMount: function() {

				var today = new Date();

				var firstDayThisYear = new Date(today.getFullYear(), 0, 1);
				var firstDayThisMonth = new Date(today.getFullYear(), today.getMonth(), 1);
				var firstDayThisWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate() - today.getDay());

        api.getMovies({}).OnSuccess = function(items){
            this.setState({movies: items});
        }.bind(this);

        api.getMovieCount().OnSuccess = function(count){
            this.setState({totalCount: count});
        }.bind(this);				

        api.getMovieCount(formatDateForQuery(firstDayThisYear), formatDateForQuery(today)).OnSuccess = function(count){
            this.setState({yearCount: count});
        }.bind(this);

        api.getMovieCount(formatDateForQuery(firstDayThisMonth), formatDateForQuery(today)).OnSuccess = function(count){
            this.setState({monthCount: count});
        }.bind(this);

        api.getMovieCount(formatDateForQuery(firstDayThisWeek), formatDateForQuery(today)).OnSuccess = function(count){
            this.setState({weekCount: count});
        }.bind(this);		

	  },
	  getInitialState: function() {
		return {movies: []};
	  },
      render: function () {
        return (
					<div>
						<div className="row">
							<div className="col-lg-3">
								<Widget value={this.state.totalCount} title="Total"/>
							</div>
							<div className="col-lg-3">
								<Widget value={this.state.yearCount} title="Year"/>
							</div>
							<div className="col-lg-3">
								<Widget value={this.state.monthCount} title="Month"/>
							</div>
							<div className="col-lg-3">
								<Widget value={this.state.weekCount} title="Week"/>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<ItemsPanel title="Movies">
									<TableMovies items={this.state.movies} />
								</ItemsPanel>
							</div>
						</div>
					</div>
        )
      }
  });  
   
module.exports = Movies;