import WidgetLarge from "./WidgetLarge";
import WidgetSmall from "./WidgetSmall";
import Map from "../common/Map";

var Dashboard = React.createClass({

	  componentDidMount: function() {

        var from = dateTime.today.formatted;
        var to = dateTime.today.formatted + "T23:59:59";

        api.getMovieCount(from, to).OnSuccess = function(count){
            this.setState({movieCount: count});
        }.bind(this);

        api.getExpenseSum(from, to).OnSuccess = function(sum){
            this.setState({expenseSum: sum});
        }.bind(this);        

        api.getTrackingCount(from, to).OnSuccess = function(count){
            var formatted = formatBigNumber(count, 1);

            this.setState({trackingCount: formatted});
        }.bind(this);

        api.getTrackingDistance(from, to).OnSuccess = function(count){
            var formatted = formatBigNumber(count, 1);

            this.setState({trackingDistance: formatted});
        }.bind(this);

        api.getTrackingLast().OnSuccess = function(last){
            this.setState({trackingLast: last});
            api.getTrackings(from, to).OnSuccess = function(trackings){
                this.setState({trackingDay: trackings});
            }.bind(this);                   
        }.bind(this);        

	  },
	  getInitialState: function() {
		return {
            trackingCount: { value: 0, unit: "" },
            trackingDistance: { value: 0, unit: "" },
            trackingLast: {latitude: 0, longitude: 0},
            trackingDay: []
        };
	  },
      render: function () {
        return (
			<div className="row">
                <div className="col-lg-8">
                    <Map location={this.state.trackingLast} route={this.state.trackingDay} />
                </div>            
                <div className="col-lg-4">
                    <div className="row">
                        <WidgetSmall value={this.state.movieCount} title="Movies watched"/>
                        <WidgetSmall value={this.state.expenseSum} unit="kn" title="Spent"/>
                    </div>
                    <div className="row">
                        <WidgetSmall value={this.state.trackingCount.number} unit={this.state.trackingCount.unit} title="Tracking count"/>
                        <WidgetSmall value={this.state.trackingDistance.number} unit="km" title="Distance day"/>                    
                    </div>
                </div>
            </div>
        )
      }
  });  
   
module.exports = Dashboard;