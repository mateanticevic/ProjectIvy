import Expenses from "../expenses/Index"
import Incomes from "../incomes/Index"
import Movies from "../movies/Index"
import Organization from "../organization/Index"
import Home from "../dashboard/Index"

var NavBar = React.createClass({

    openHome: function(){
        this.setContent(<Home />);
    },
    openExpenses: function(){
        this.setContent(<Expenses />);
    },
    openIncomes: function(){
        this.setContent(<Incomes />);
    },
    openMovies: function(){
        this.setContent(<Movies />);
    },
    openOrganization: function(){
        this.setContent(<Organization />);
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
                            <li><a href="#" onClick={this.openHome}><i className={faIcon("fa-home fa-lg")} aria-hidden="true"></i></a></li>
                            <li><a href="#" onClick={this.openExpenses}>Expenses</a></li>
                            <li><a href="#" onClick={this.openIncomes}>Incomes</a></li>
                            <li><a href="#" onClick={this.openOrganization}>Organization</a></li>
                            <li><a href="#" onClick={this.openMovies}>Movies</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
});

module.exports = NavBar;