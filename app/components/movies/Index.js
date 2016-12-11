import ItemsPanel from "../common/ItemsPanel"
import TableMovies from "./TableMovies"
import Widget from "../dashboard/WidgetSmall"

var Movies = React.createClass({

	  componentDidMount: function() {

        api.getMovies({}).OnSuccess = function(items){
            this.setState({movies: items});
        }.bind(this);

        api.getMovieCount().OnSuccess = function(count){
            this.setState({totalCount: count});
        }.bind(this);				

        api.getMovieCount(dateTime.firstDayThisYear.formatted, dateTime.today.formatted).OnSuccess = function(count){
            this.setState({yearCount: count});
        }.bind(this);

        api.getMovieCount(dateTime.firstDayThisMonth.formatted, dateTime.today.formatted).OnSuccess = function(count){
            this.setState({monthCount: count});
        }.bind(this);

        api.getMovieCount(dateTime.firstDayThisWeek.formatted, dateTime.today.formatted).OnSuccess = function(count){
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