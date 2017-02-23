import ItemsPanel from "../common/ItemsPanel"
import TaskAddEdit from "./TaskAddEdit"

var Organization = React.createClass({

    toggle: function(){
        this.setState({
            modal: !this.state.modal
        });
    },
	  componentDidMount: function() {
          
          this.updateTasksNew();

          api.getTasks('in-progress').OnSuccess = function(items){
              this.setState({tasksInProgress: items});
            }.bind(this);

          api.getTasks('to-do').OnSuccess = function(items){
              this.setState({tasksToDo: items});
            }.bind(this);

          api.getProjects().OnSuccess = function(projects){
              this.setState({projects: projects});
            }.bind(this);

          api.getTaskTypes().OnSuccess = function(types){
              this.setState({types: types});
            }.bind(this);

          api.getTaskPriorities().OnSuccess = function(priorities){
              this.setState({priorities: priorities});
            }.bind(this);
	  },
	  getInitialState: function() {
		return {
            projects: [],
            types: [],
            priorities: [],
            taskNew: {},
            tasksToDo: [],
            tasksNew: [],
            tasksInProgress: []
        };
	  },
      onDragTaskStart: function(event){
          console.log(event);
      },
      onDropTask: function(event){
          console.log(event);
      },
      onTaskChange: function(property, value){
          this.state.taskNew[property] = value;
          this.setState({newTask: this.state.newTask});
      },
      onTaskSave: function(){
          api.putTask(this.state.taskNew).OnSuccess = function(){
              this.updateTasksNew();
            }.bind(this);
      },
      updateTasksNew: function(){
          api.getTasks('new').OnSuccess = function(items){
              this.setState({tasksNew: items});
            }.bind(this);
      },
      taskRender: function(task, that){

          var taskId = task.projectValueId + "-" + task.valueId;

          return(
              <li key={taskId}
                  className="list-group-item list-item-overflow-hidden"
                  draggable="true" onDragStart={() => this.onDragTaskStart(event)}
                  title={task.name}
                  onDragEnd={() => this.onDropTask(event)}>
                <span className="label label-default">{task.projectValueId}-{task.valueId}</span>
                &nbsp;{task.name}
                {task.lastChange.status}
              </li>
              )
      },
      render: function () {
          
          var tasksInProgress = this.state.tasksInProgress.map(this.taskRender, this);
          var tasksNew = this.state.tasksNew.map(this.taskRender, this);
          var tasksToDo = this.state.tasksToDo.map(this.taskRender, this);

        return (
            <div>
                <div className="row">
                    <div className="col-md-12">
                        <TaskAddEdit projects={this.state.projects}
                                     types={this.state.types}
                                     priorities={this.state.priorities}
                                     onSave={this.onTaskSave}
                                     onChange={this.onTaskChange} />
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <ItemsPanel title="New" ondrop={this.onDropTask}>
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
            </div>
        )
      }
  });  
   
module.exports = Organization;