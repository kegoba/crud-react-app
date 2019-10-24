import React, {Component} from "react"
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Create from "./create"
import Home from "./home"
import Login from "./login"
import View from "./view"
import Reg from "./reg"
import Edith from "./edith"
import Auth from "./auth"
import ProtectedRoute from "./protectedRoute"


class Menu extends Component{
    constructor(){
        super()
        this.handleLogout = this.handleLogout.bind(this)
        this.state ={
            Auth : false,
            handleLogout: ""

        }
    }
    handleLogout(e) {
        Auth.LogOut()
        console.log(Auth.logOut)
    }
    render(){

        return(


            <Router className="container text-center">
                <div className="menu">
                    <nav className="navbar navbar-expand-lg navbar-light ">
                        <a className="navbar-brand" href=""> kelvinapp  </a>
                        <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#dropDrown">
                            <span className="navbar-toggler-icon"> </span>
                    </button>
                        <div className="collapse navbar-collapse" id="dropDrown" >
                            <ul className="navbar-nav ">
                                
                                        <li className="nav-item">
                                            <Link to={"/"} className="nav-link" > Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/create"} className="nav-link"> Create </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/view"} className="nav-link"> Show record </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/logout"} className="nav-link"> logout </Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to={"/login"} className="nav-link" > Login </Link>
                                        </li>                             
                            </ul>
                        </div>
                            </nav>
                </div>
                    <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/login" component={Login} />
                    <Route path="/reg" component={Reg} />
                    <ProtectedRoute path="/create" component={Create} />
                    <ProtectedRoute path="/view" component={View} />
                    <ProtectedRoute path="/edith/:id" component={Edith} />         

                    </Switch>

                </Router>



        )
    }
}

export default Menu
