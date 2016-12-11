import ExpenseTable from "./ExpenseTable"
import NewExpense from "./NewExpense"
import Options from "./Options";
import DatePicker from "../common/DatePicker";
import ItemsPanel from "../common/ItemsPanel"
import FilterPanel from "../common/FilterPanel"
import Widget from "../dashboard/WidgetSmall"

var Index = React.createClass({
    componentDidMount: function () {

        api.getCurrencies().OnSuccess = function(items){
            this.setState({currencies: items});
        }.bind(this);

        api.getExpenses({}).OnSuccess = function(result){
            this.setState({
                expenses: result.items,
                expensePageCount: result.pages
            });
        }.bind(this);

        api.getVendors({}).OnSuccess = function(items){
            this.setState({vendors: items});
        }.bind(this);

        api.getExpenseTypes().OnSuccess = function(items){
            this.setState({expenseTypes: items});
        }.bind(this);

        api.getExpenseCount().OnSuccess = function(count){
            this.setState({totalCount: count});
        }.bind(this);

        api.getExpenseSum(dateTime.firstDayThisYear.formatted, dateTime.today.formatted).OnSuccess = function(sum){
            this.setState({yearSum: sum});
        }.bind(this);
    
        api.getExpenseSum(dateTime.firstDayThisMonth.formatted, dateTime.today.formatted).OnSuccess = function(sum){
            this.setState({monthSum: sum});
        }.bind(this);

        api.getExpenseSum(dateTime.today.formatted, dateTime.today.formatted).OnSuccess = function(sum){
            this.setState({todaySum: sum});
        }.bind(this);

    },
    getInitialState: function() {
        return {
            currencies: [],
            expense: defaults.expense(),
            expenses: [],
            expensePage: 0,
            expenseTypes: [],
            vendors: []
        };
    },
    onClickSearch: function(){

        var query={
            expenseTypeValueId: this.state.typeId,
            from: formatDateForQuery($("#date-from").data('date')),
            to: formatDateForQuery($("#date-to").data('date')),
            vendorValueId: this.state.vendorId
        };

        api.getExpenses(query).OnSuccess = function(result){
            this.setState({expenses: result.items});
        }.bind(this);
    },
    onExpenseEdit: function(expense){
        this.setState({expense: expenseToBinding(expense)});
    },
    onExpenseUpdated: function(field, value){
        this.state.expense[field] = value;
        this.setState({expense: this.state.expense});
    },
    onDateFromChange: function(){

    },
    onDateToChange: function(){

    },
    onPageChange: function(page){
        var query={
            expenseTypeValueId: this.state.typeId,
            from: formatDateForQuery($("#date-from").data('date')),
            to: formatDateForQuery($("#date-to").data('date')),
            page: page - 1,
            vendorValueId: this.state.vendorId
        };
        

        api.getExpenses(query).OnSuccess = function(result){
            this.setState({expenses: result.items});
            this.setState({expensePage: page});
        }.bind(this);
    },
    onTypeChange: function(id){
        this.setState({typeId: id});
    },
    onVendorChange: function(id){
        this.setState({vendorId: id});
    },
    render: function(){
        return (
            <div>
                <div className="row">
                    <div className="col-lg-2">
                        <Widget value={this.state.totalCount} title="Total count"/>
                    </div>
                    <div className="col-lg-2">
                        <Widget value={this.state.yearSum} title="Year" unit="kn"/>
                    </div>
                    <div className="col-lg-2">
                        <Widget value={this.state.monthSum} title="Month" unit="kn"/>
                    </div>
                    <div className="col-lg-2">
                        <Widget value={this.state.todaySum} title="Today" unit="kn"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-3">
                        <FilterPanel title="Search">
                            <Options label="Type"
                                    items={this.state.expenseTypes}
                                    onChange={this.onTypeChange}
                                    defaultText="All types"/>
                            <Options label="Vendor"
                                    items={this.state.vendors}
                                    onChange={this.onVendorChange}
                                    defaultText="All vendors"/>
                            <DatePicker id="date-from" />
                            <DatePicker id="date-to" />
                            <button type="button" className="btn btn-default" onClick={this.onClickSearch}>Search</button>
                        </FilterPanel>
                    </div>
                    <div className="col-lg-9">
                        <div className="row">
                            <ItemsPanel title="Expenses">
                                <ExpenseTable items={this.state.expenses}
                                            onEdit={this.onExpenseEdit}
                                            onPageClick={this.onPageChange}
                                            page={this.state.expensePage}
                                            pageCount={this.state.expensePageCount} />
                            </ItemsPanel>
                        </div>
                        <div className="row">
                            <NewExpense types={this.state.expenseTypes}
                                        vendors={this.state.vendors}
                                        currencies={this.state.currencies}
                                        expense={this.state.expense}
                                        onChange={this.onExpenseUpdated}/>
                        </div>
                    </div>
                </div>
            </div>
            )
        }
    });

module.exports = Index;