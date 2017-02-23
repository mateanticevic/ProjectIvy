import ItemsPanel from "../common/ItemsPanel";
import Options from "../common/Options";

var TaskAddEdit = React.createClass({
	  componentDidMount: function() {
	  },
    onProjectChange: function(projectId) {
      this.props.onChange('projectId', projectId);      
    },
    onPriorityChange: function(priorityId){
      this.props.onChange('priorityId', priorityId);
    },
    onNameChange: function(event){
      this.props.onChange('name', event.target.value);
    },
	  onTypeChange: function(typeId) {
      this.props.onChange('typeId', typeId);
	  },
      render: function () {

        return (
          <ItemsPanel title="New">
            <form>
              <div className="row">
                <div className="col-md-2">
                  <Options items={this.props.projects}
                           onChange={this.onProjectChange}
                           defaultText="Select project"/>
                </div>
                <div className="col-md-2">
                  <Options items={this.props.types}
                           onChange={this.onTypeChange}
                           defaultText="Select type"/>
                </div>
                <div className="col-md-2">
                  <Options items={this.props.priorities}
                           onChange={this.onPriorityChange}
                           defaultText="Select priority"/>
                </div>
                <div className="col-md-5">
                  <input type="text" className="form-control" placeholder="Title" onChange={this.onNameChange} />
                </div>
                <div className="col-md-1">
                  <button type="button" className="btn btn-default" onClick={this.props.onSave}>Confirm</button>
                </div>
              </div>
            </form>
          </ItemsPanel>
        )
      }
  });  
   
module.exports = TaskAddEdit;