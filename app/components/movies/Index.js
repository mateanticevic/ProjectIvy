import ItemsPanel from "../common/ItemsPanel"
import TableMovies from "./TableMovies"
import Widget from "../dashboard/Widget"
import FilterPanel from "../common/FilterPanel"
import Options from "../common/Options"

var Movies = React.createClass({

	  componentDidMount: function() {

        this.getMovies();

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
	  onRatedHigherChange: function(rating){
		  this.setState({ratedHigher: rating}, this.getMovies);
	  },
	  onRatedLowerChange: function(rating){
		  this.setState({ratedLower: rating}, this.getMovies);
	  },
	  onMyRatingChange: function(myRating){
		  this.setState({myRating: myRating}, this.getMovies);
	  },
	  onTitleChanged: function(e) {
		  this.setState({title: e.target.value}, this.getMovies);
	  },
	  onYearChange: function(year) {
		  this.setState({year: year}, this.getMovies);
	  },
	  getMovies: function() {

		var query = {
			myRating: this.state.myRating,
			ratingHigher: this.state.ratedHigher,
			ratingLower: this.state.ratedLower,
			title: this.state.title,
			year: this.state.year
		};

        api.getMovies(query).OnSuccess = function(data){
            this.setState({movies: data});
        }.bind(this);
	  },
	  getRatings: function(){

		  var ratings = [];

		  for(var i = 100; i > 0; i--){
			  ratings.push({valueId: (i/10), name: (i/10).toString()});
		  }

		  return ratings;
	  },
	  getYears: function(){
		  var currentYear = new Date().getFullYear();

		  var years = [];

		  for(var i = currentYear; i >= 1900; i--){
			  years.push({valueId: i, name: i.toString()});
		  }

		  return years;
	  },
	  getMyRatings: function(){

		  var myRatings = [];

		  for(var i = 10; i >= 1; i--){
			  myRatings.push({valueId: i, name: i.toString()});
		  }

		  return myRatings;
	  },
	  getInitialState: function() {
		return {
			movies: {items: [], count: 0},
			myRatings: this.getMyRatings(),
			ratings: this.getRatings(),
			years: this.getYears(),
			title: ""
		};
	  },
      render: function () {
        return (
					<div>
						<div className="row">
							<div className="col-md-3">
								<Widget value={this.state.totalCount} title="Total"/>
							</div>
							<div className="col-md-3">
								<Widget value={this.state.yearCount} title="Year"/>
							</div>
							<div className="col-md-3">
								<Widget value={this.state.monthCount} title="Month"/>
							</div>
							<div className="col-md-3">
								<Widget value={this.state.weekCount} title="Week"/>
							</div>
						</div>
						<div className="row">
							<div className="col-md-3">
								<FilterPanel title="Search">
									<div className="row row-spacing">
										<div className="col-md-12">
											<input className="form-control" type="text" placeholder="Title" onChange={this.onTitleChanged} />
										</div>
									</div>
									<div className="row row-spacing">
										<div className="col-md-12">
											<Options items={this.state.years}
													 onChange={this.onYearChange}
													 defaultText="Year"/>
										</div>
									</div>
									<div className="row row-spacing">
										<div className="col-md-12">
											<Options items={this.state.myRatings}
													 onChange={this.onMyRatingChange}
													 defaultText="My rating"/>
										</div>
									</div>
									<div className="row row-spacing">
										<div className="col-md-12">
											<Options items={this.state.ratings}
													 onChange={this.onRatedHigherChange}
													 defaultText="Rated higher"/>
										</div>
									</div>
									<div className="row row-spacing">
										<div className="col-md-12">
											<Options items={this.state.ratings}
													 onChange={this.onRatedLowerChange}
													 defaultText="Rated lower"/>
										</div>
									</div>
								</FilterPanel>
							</div>
							<div className="col-md-9">
								<ItemsPanel title="Movies" count={this.state.movies.count}>
									<TableMovies items={this.state.movies.items} />
								</ItemsPanel>
							</div>
						</div>
					</div>
        )
      }
  });  
   
module.exports = Movies;