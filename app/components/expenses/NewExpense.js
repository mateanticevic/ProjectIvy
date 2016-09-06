import Options from "./Options";
import DatePicker from "../common/DatePicker";

var NewExpense = React.createClass({

	  componentDidMount: function() {
	  },
	  getInitialState: function() {
		return {
            currencies: [],
            expense: this.props.expense,
            expenseTypes: [],
            vendors: []
        };
	  },
      onDelete: function(){
          api.deleteExpense(this.props.expense.valueId).OnSuccess = function(id){
          };         
      },
      onAmountChange: function(event){
          this.props.onChange('amount', event.target.value);
      },
      onCurrencyChange: function(currencyId){
          this.props.onChange('currencyValueId', currencyId);
      },
      onDateChange: function(event){
          alert(event.target.value);
          this.setState({date: event.target.value});
      },
      onCommentChange: function(event){
          this.props.onChange('comment', event.target.value);
      },
      onTypeChange: function(typeId){
          this.props.onChange('expenseTypeValueId', typeId);
      },
      onVendorChange: function(vendorId){
          this.props.onChange('vendorValueId', vendorId);
      },
      onSave: function(){

          this.props.onChange('date', formatDateForQuery($("#date").data('date')));

          if(this.props.expense.valueId){
              api.postExpense(this.props.expense).OnSuccess = function(id){
                };
          }
          else{
              api.putExpense(this.props.expense).OnSuccess = function(id){
                };
          }
      },
      render: function () {

        return (
                <div className="panel panel-default">
                    <div className="panel-heading">
                        {this.props.expense.valueId &&
                            <h4 className="panel-title">{this.props.expense.valueId} expense</h4>
                        }
                        <button type="button" className="btn btn-danger pull-right" aria-label="Left Align" onClick={this.onDelete}>
                            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span> Delete
                        </button>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-3">
                            </div>
                            <div className="col-md-6">
                                <div className="row">
                                    <Options label="Type" items={this.props.types}
                                                          onChange={this.onTypeChange}
                                                          selectedValue={this.props.expense.expenseTypeValueId}
                                                          defaultText="Select type"/>
                                    <Options label="Vendor" items={this.props.vendors}
                                                            onChange={this.onVendorChange}
                                                            selectedValue={this.props.expense.vendorValueId}
                                                            defaultText="Select vendor"/>
                                    <Options label="Currency" items={this.props.currencies}
                                                              onChange={this.onCurrencyChange}
                                                              selectedValue={this.props.expense.currencyValueId}
                                                              defaultText="Select currency"/>
                                    <DatePicker id="date" date={this.props.expense.date} onChange={this.onDateChange} />
                                    <div className="input-group">
                                        <input type="text" className="form-control" value={this.props.expense.amount} onChange={this.onAmountChange} />
                                        <span className="input-group-addon">kn</span>
                                    </div>
                                    <div className="input-group">
                                        <span className="input-group-addon">Comment</span>
                                        <input type="text" className="form-control" value={this.props.expense.comment} onChange={this.onCommentChange} />
                                    </div>
                                    <button type="button" className="btn btn-default" onClick={this.onSave}>Save</button>
                                </div>
                            </div>
                            <div className="col-md-3">
                            </div>
                        </div>
                    </div>
                </div>
        )
      }
  });  
   
module.exports = NewExpense;