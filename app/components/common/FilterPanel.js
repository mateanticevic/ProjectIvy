var FilterPanel = React.createClass({
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">{this.props.title}</h3>
                </div>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = FilterPanel;