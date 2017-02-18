  import If from "../common/If"
	
	var TableExpenses = React.createClass({

      componentDidMount: function () {

      },
			getInitialState: function() {
			return {
					expenses: []
				};
			},
      render: function () {

				var that = this;

				var expenseNodes = this.props.items.map(function(expense) {
				return (
					<tr key={expense.valueId}>
						<td>{formatDateString(expense.date)}</td>
						<td>
							{expense.expenseType.icon &&
								<i className={faIcon(expense.expenseType.icon)} aria-hidden="true"></i>	
							}
							&nbsp;{expense.expenseType.name}
						</td>
						<td>
							{expense.vendor && expense.vendor.name}
						</td>
						<td>{expense.comment}</td>
						<td>{expense.amount}</td>
						<td>{expense.currency.code}</td>
						<td>
							<button type="button" className="btn btn-default btn-xs" aria-label="Left Align" onClick={() => that.props.onEdit(expense)}>
								<span className="glyphicon glyphicon-pencil" aria-hidden="true"></span> Edit
							</button>
						</td>
					</tr>
				);
			});

			var minPage = this.props.page <= 3 ? 1 : this.props.page - 2;

			var pgs = [minPage, minPage + 1, minPage + 2, minPage + 3, minPage + 4];

			var pageNodes = pgs.map(function(pg){
				return(
					<li><a href="#" onClick={() => that.props.onPageClick(pg)}>{pg}</a></li>
				);
			});

        return (
					<div>
						<table id="table-expenses" className="table">
							<thead>
								<tr>
									<th>Date</th>
									<th>Expense type</th>
									<th>Vendor</th>
									<th>Comment</th>
									<th>Amount</th>
									<th>Currency</th>
									<th></th>									
								</tr>
							</thead>
							<tbody>
								{expenseNodes}
							</tbody>
						</table>
						<nav aria-label="Page navigation">
							<ul className="pagination">
								<li>
									<a href="#" aria-label="Previous">
										<span aria-hidden="true">&laquo;</span>
									</a>
								</li>
								{pageNodes}
								<li>
									<a href="#" aria-label="Next">
										<span aria-hidden="true">&raquo;</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
        )
      }
  });

module.exports = TableExpenses;