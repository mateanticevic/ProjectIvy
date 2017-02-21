import CarLogWidget from "./CarLogWidget";
import Widget from "./Widget";
import Map from "../common/Map";

var Dashboard = React.createClass({

	  componentDidMount: function() {
        this.updateCarLogLatest();       
        this.loadDay(dateTime.today);
	  },
      loadDay: function(day) {

        this.setState({
            trackingCount: { value: null, unit: "" },
            trackingDistance: { value: null, unit: "" },
            webTimeTotal: { value: null, unit: "" },
            expenseSum: null,
            movieCount: null
        });

        var formatted = formatDateForQuery(day);

        var from = formatted;
        var to = formatted + "T23:59:59";

        api.getMovieCount(from, to).OnSuccess = function(count){
            this.setState({movieCount: count});
        }.bind(this);

        api.getWebTimeTotal(from, to).OnSuccess = function(total){
            var formatted = formatSeconds(total);

            this.setState({webTimeTotal: formatted});
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
            carLogEntry: {},
            carLogLast: {},
            currentDay: new Date(),
            webTimeTotal: { value: 0, unit: "" },
            trackingCount: { value: 0, unit: "" },
            trackingDistance: { value: 0, unit: "" },
            trackingLast: {latitude: 0, longitude: 0},
            trackingDay: []
        };
	  },
      onClickNextDay: function() {
          var nextDay = dateTime.next(this.state.currentDay);
          this.setState({currentDay: nextDay});

          this.loadDay(nextDay);
      },
      onCarLogChange: function(keyValue) {
        this.state.carLogEntry[keyValue.key] = keyValue.value;
        this.setState({carLogEntry: this.state.carLogEntry});
      },
      onCarLogSave: function() {
          api.putCarLog("punto", this.state.carLogEntry).OnSuccess = function(){
              this.updateCarLogLatest();
              this.setState({carLogEntry: { odometer: '' }});
          }.bind(this);
      },
      onClickPreviousDay: function() {
          var previousDay = dateTime.previous(this.state.currentDay);
          this.setState({currentDay: previousDay});

          this.loadDay(previousDay);
      },
      updateCarLogLatest: function(){
        api.getCarLogLatest("punto").OnSuccess = function(carLog){
            this.setState({carLogLast: carLog});
        }.bind(this);
      },
      render: function () {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3">
                        <CarLogWidget new={this.state.carLogEntry}
                                      last={this.state.carLogLast}
                                      onChange={this.onCarLogChange}
                                      onSave={this.onCarLogSave} />
                    </div>
                </div>
                <div className="row">
                    <div className="btn-group btn-group-sm" role="group" aria-label="Large button group">
                        <button type="button" className="btn btn-default" onClick={this.onClickPreviousDay}>Previous</button>
                        <button type="button" className="btn btn-default" onClick={this.onClickNextDay}>Next</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <Map location={this.state.trackingLast} route={this.state.trackingDay} />
                    </div>            
                    <div className="col-lg-4">
                        <div className="row">
                            <Widget value={this.state.movieCount} title="Movies watched"/>
                            <Widget value={this.state.expenseSum} unit="kn" title="Spent"/>
                        </div>
                        <div className="row">
                            <Widget value={this.state.trackingCount.number} unit={this.state.trackingCount.unit} title="Tracking count"/>
                            <Widget value={this.state.trackingDistance.number} unit="km" title="Distance day"/>                    
                        </div>
                        <div className="row">
                            <Widget value={this.state.webTimeTotal.number} unit={this.state.webTimeTotal.unit}  title="Online"/>             
                        </div>
                    </div>
                </div>
            </div>
        )
      }
  });  
   
module.exports = Dashboard;