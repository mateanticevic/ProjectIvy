var WidgetSmall = React.createClass({

	  componentDidMount: function() {
          console.log("done!");
	  },
      componentDidUpdate: function(prevProps, prevState){
          if(this.props.value != undefined){
              $(this.loadingIcon).hide();
          }
      },
      render: function () {

        return (
			<div>
                <div className="widget">
                    <div className="widget-title">{this.props.title}</div>
                    <div className="widget-content">
                        <span className="widget-value">{this.props.value}</span> <span className="widget-unit">{this.props.unit}</span>
                        <i ref={(icon) => this.loadingIcon = icon} className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                    </div>
                </div>
            </div>
        )
      }
  });  
   
module.exports = WidgetSmall;