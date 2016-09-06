import Expenses from "../expenses/Index"
import Incomes from "../incomes/Index"
import Movies from "../movies/Index"

var NavBar = React.createClass({

    openExpenses: function(){
        this.setContent(<Expenses />);
    },
    openIncomes: function(){
        this.setContent(<Incomes />);
    },
    openMovies: function(){
        this.setContent(<Movies />);
    },
    setContent: function(module){
        var mountNode = document.getElementById("content");
        ReactDOM.render(module, mountNode);
    },
    render:function(){
        return(
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="nav navbar-nav">
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="true">
                                    Finance <span className="caret"></span>
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a href="#" onClick={this.openExpenses}>Expenses</a></li>
                                    <li><a href="#" onClick={this.openIncomes}>Incomes</a></li>
                                </ul>
                            </li>
                            <li><a href="#" onClick={this.openExpenses}>Expenses</a></li>
                            <li><a href="#" onClick={this.openIncomes}>Incomes</a></li>
                            <li><a href="#" onClick={this.openMovies}>Movies</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});

module.exports = NavBar;