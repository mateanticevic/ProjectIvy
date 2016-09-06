var Options = React.createClass({

	  componentDidMount: function() {
	  },
      onSelectChange: function(event){
          this.props.onChange(event.target.value);
      },
      render: function () {

        var that = this;

        var expenseTypes = this.props.items.map(function(option){

            if(option.valueId == that.props.selectedValue){
                return(
                    <option key={option.valueId} value={option.valueId} selected="selected">{option.name}</option>
                );
            }
            else{
                return(
                    <option key={option.valueId} value={option.valueId}>{option.name}</option>
                );
            }

        });

        return (
			<div>
                <div className="col-lg-6">
                    {this.props.label}
                </div>
                <div className="col-lg-6">
                    <select className="form-control" onChange={this.onSelectChange}>
                        {this.props.defaultText &&
                            <option>{this.props.defaultText}</option>
                        }
                        {expenseTypes}
                    </select>
                </div>
            </div>
        )
      }
  });  
   
module.exports = Options;