import ItemsPanel from "../common/ItemsPanel"

var Incomes = React.createClass({

	  componentDidMount: function() {

        api.getIncomes({}).OnSuccess = function(data){
            this.setState({
                incomes: data
            });
        }.bind(this);

	  },
	  getInitialState: function() {
		return {
            incomes: { items: [], count: null}
        };
	  },
      render: function () {
          var incomes = this.state.incomes.items.map(function(item) {
              return(
                <tr>
                    <td>{formatDateString(item.timestamp)}</td>
                    <td>{item.type.name}</td>
                    <td>{item.description}</td>
                    <td>{item.source.name}</td>
                    <td>{item.amount}</td>
                    <td>{item.currency.valueId}</td>
                </tr>
              )
          });
        return (
					<div>
						<div className="col-lg-12">
							<ItemsPanel title="Incomes" count={this.state.incomes.count}>
                                <table className="table">
                                                <thead>
                                                    <tr>
                                                        <th>Timestamp</th>
                                                        <th>Type</th>
                                                        <th>Description</th>
                                                        <th>Payee</th>
                                                        <th>Amount</th>
                                                        <th>Currency</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {incomes}
                                                </tbody>
                                </table>
							</ItemsPanel>
						</div>
					</div>
        )
      }
  });  
   
module.exports = Incomes;