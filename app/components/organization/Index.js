import ItemsPanel from "../common/ItemsPanel"
import NewTask from "./NewTask"

var Movies = React.createClass({

    toggle: function(){
        this.setState({
            modal: !this.state.modal
        });
    },
	  componentDidMount: function() {
          
          api.getTasks('in-progress').OnSuccess = function(items){
              this.setState({tasksInProgress: items});
            }.bind(this);

          api.getTasks('new').OnSuccess = function(items){
              this.setState({tasksNew: items});
            }.bind(this);

          api.getTasks('to-do').OnSuccess = function(items){
              this.setState({tasksToDo: items});
            }.bind(this);

	  },
	  getInitialState: function() {
		return {
            tasksToDo: [],
            tasksNew: [],
            tasksInProgress: []
        };
	  },
      taskRender: function(task){
          return(
              <li className="list-group-item">
                {task.projectValueId}-{task.valueId}
                &nbsp;{task.name}
                {task.lastChange.status}
                <span className="label label-success pull-right">Success</span>
              </li>
              )
      },
      render: function () {
          
          var tasksInProgress = this.state.tasksInProgress.map(this.taskRender);
          var tasksNew = this.state.tasksNew.map(this.taskRender);
          var tasksToDo = this.state.tasksToDo.map(this.taskRender);

        return (
            <div>
                <div className="row">
                    <button type="button" className="btn btn-default" data-toggle="modal" data-target="#myModal">
                        <span className="fa fa-plus"></span> New
                    </button>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <ItemsPanel title="New">
                            {tasksNew}
                        </ItemsPanel>
                    </div>
                    <div className="col-lg-4">
                        <ItemsPanel title="To do">
                            <ul className="list-group">
                                {tasksToDo}
                            </ul>
                        </ItemsPanel>
                    </div>
                    <div className="col-lg-4">
                        <ItemsPanel title="In progress">
                            <ul className="list-group">
                                {tasksInProgress}
                            </ul>
                        </ItemsPanel>
                    </div>
                </div>
                <NewTask />
            </div>
        )
      }
  });  
   
module.exports = Movies;