import ItemsPanel from "../common/ItemsPanel";

var CarLogWidget = React.createClass({
    onOdometerChange: function(event) {
        this.props.onChange({key: "odometer", value: event.target.value});
    },
    render: function(){
        return(
        <ItemsPanel title="Car log entry">
            <div className="row">
                <form>
                    <div className="col-md-8">
                        <div className="input-group">
                            <input type="number" className="form-control" onChange={this.onOdometerChange} value={this.props.new.odometer}/>
                            <span className="input-group-addon">km</span>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <button type="button" className="btn btn-default" onClick={this.props.onSave}>Confirm</button>
                    </div>
                </form>
            </div>
            <div className="row">
                <div className="col-md-9">
                    <span>{formatDateTimeString(this.props.last.timestamp)}</span>
                </div>
                <div className="col-md-3">
                    <span>{this.props.last.odometer}km</span>
                </div>
            </div>
        </ItemsPanel>
        )
    }
});

module.exports = CarLogWidget;