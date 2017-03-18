var ItemsPanel = React.createClass({
    render:function(){
        return(
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h4 className="panel-title">{this.props.title}&nbsp;
                        {this.props.count && this.props.count > 0 &&
                            '(' + this.props.count + ')'                        
                        }
                    </h4>
                </div>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
});

module.exports = ItemsPanel;