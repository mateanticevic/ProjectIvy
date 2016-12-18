var TextBox = React.createClass({

      componentDidMount: function () {

      },
      onChange:function(event){
        this.props.onChange(event.target.value);
      },
      render: function () {
        return (
        <div>
          <input
            placeholder={this.props.placeholder}
            type={this.props.type}
            onChange={this.onChange}
            className="form-control"/>
        </div>
        )
      }
  });
  
module.exports = TextBox;