import ItemsPanel from "../common/ItemsPanel"

var Movies = React.createClass({

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
                    <div className="col-lg-12">
                        <ItemsPanel title="In progress">
                            <ul className="list-group">
                                {tasksInProgress}
                            </ul>
                        </ItemsPanel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ItemsPanel title="To do">
                            <ul className="list-group">
                                {tasksToDo}
                            </ul>
                        </ItemsPanel>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <ItemsPanel title="New">
                            {tasksNew}
                        </ItemsPanel>
                    </div>
                </div>
            </div>
        )
      }
  });  
   
module.exports = Movies;