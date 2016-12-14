var Widget = React.createClass({

	  componentDidMount: function() {
          $(this.unit).hide();
	  },
      componentDidUpdate: function(prevProps, prevState){
          if(this.props.value != undefined && this.props.value != null){
              $(this.loadingIcon).hide();
              $(this.unit).show();
          }
          else{
              $(this.loadingIcon).show();
              $(this.unit).hide();              
          }
      },
      render: function () {

        return (
			<div>
                <div className="widget">
                    <div className="widget-title">{this.props.title}</div>
                    <div className="widget-content">
                        <span className="widget-value">{this.props.value}</span> <span ref={(unit) => this.unit = unit} className="widget-unit">{this.props.unit}</span>
                        <i ref={(icon) => this.loadingIcon = icon} className="fa fa-circle-o-notch fa-spin fa-3x fa-fw"></i>
                    </div>
                </div>
            </div>
        )
      }
  });  
   
module.exports = Widget;