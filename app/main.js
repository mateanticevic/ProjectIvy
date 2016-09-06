import React from "react";
import ReactApp from "./components/ReactApp"
import NavBar from "./components/common/NavBar"
import Countries from "./components/countries/Index"
import Movies from "./components/movies/Index"
import Dashboard from "./components/dashboard/Index"
import Login from "./components/login/Index"
import NewExpense from "./components/expenses/NewExpense"
import Expenses from "./components/expenses/Index"
import Incomes from "./components/incomes/Index"

var navBarMount = document.getElementById("navbar");
ReactDOM.render(<NavBar />, navBarMount);

var mountNode = document.getElementById("content");
ReactDOM.render(<Dashboard />, mountNode);