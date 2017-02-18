import Options from "./Options";
import DatePicker from "../common/DatePicker";
import InputMoney from "../common/InputMoney";

var NewExpense = React.createClass({

	  componentDidMount: function() {
	  },
      getCurrencyById: function(id){       
          for(var i = 0; i < this.props.currencies.length; i++){
              if(this.props.currencies[i].code == id){
                  return this.props.currencies[i];
              }
          }
      },
	  getInitialState: function() {
		return {
            currencies: [],
            expense: this.props.expense,
            expenseTypes: [],
            selectedCurrencySymbol: "",
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
          this.setState({selectedCurrencySymbol: this.getCurrencyById(currencyId).symbol});
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
                                    <InputMoney value={this.props.expense.amount} onValueChange={this.onAmountChange} currency={this.state.selectedCurrencySymbol} />
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