var DatePicker = React.createClass({
    componentDidMount: function() {
        $("#" + this.props.id).data('date', this.props.date);
    },
    onChange: function(e){
        alert();
    },
    render: function() {
        return(
            <div className="form-group">
                <div id={this.props.id} className='input-group date'>
                    <input type='text' className="form-control" value={formatDateForQuery(this.props.date)} onChange={this.onChange}/>
                    <span className="input-group-addon">
                        <span className="glyphicon glyphicon-calendar"></span>
                    </span>
                </div>
            </div>
        )
    }
});

module.exports = DatePicker;