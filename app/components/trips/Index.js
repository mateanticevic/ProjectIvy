import ItemsPanel from "../common/ItemsPanel"

var Trips = React.createClass({

	  componentDidMount: function() {

        api.getTrips().OnSuccess = function(data){
            this.setState({
                trips: data
            });
        }.bind(this);

	  },
	  getInitialState: function() {
		return {
            trips: { items: [], count: null}
        };
	  },
      render: function () {
          var trips = this.state.trips.items.map(function(item) {
            
              var upcoming = new Date() < new Date(item.timestampStart);
              var year = new Date(item.timestampStart).getFullYear();
              var cities = item.cities == null ? null : item.cities.map(function(city){return city.name;});

              return(
                <tr>
                    <td>
                        { upcoming &&
                        <span className="label label-success">{year}</span>
                        }
                        { !upcoming &&
                        <span className="label label-default">{year}</span>
                        }
                    </td>
                    <td>{item.name}</td>
                    <td>{cities &&
                        cities.join(", ")
                        }</td>
                </tr>
              )
          });
        return (
					<div>
						<div className="col-lg-12">
							<ItemsPanel title="Trips" count={this.state.trips.count}>
                                <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Year</th>
                                                        <th>Name</th>
                                                        <th>Cities</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {trips}
                                                </tbody>
                                </table>
							</ItemsPanel>
						</div>
					</div>
        )
      }
  });  
   
module.exports = Trips;