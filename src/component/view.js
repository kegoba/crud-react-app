import React, {Component} from  "react";
//import { Link } from "react-dom";
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom'
import Loader from "./loader";


import "axios";
import Axios from "axios";

class View extends Component{
    constructor(props){
    super(props)
    //this.handleDelete = this.handleDelete.bind(this) 
    this.state={
        result : [],
        qry : [],
        id :"",
        isLoading: true
    }
    };

    componentDidMount() {
        Axios.get('https://kelvineapp.herokuapp.com/showapi/')
            .then(response => {
                this.setState({ 
                    result: response.data ,
                    isLoading: false,
                });

                return this.state.result
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    handleDelete(id) {
       console.log(id)
        Axios.delete("https://kelvineapp.herokuapp.com/deleteapi/" + id + "/")
            .then(response => {
               // this.setState({ result: response.data });
                this.props.history.push("/")
               // return this.state.result
            })
            .catch(function (error) {
                console.log(error);
            })
    
    }
    
render(){
    const { isLoading } = this.state;
    if (isLoading){
        return(
            <div className="loader">
            <Loader/>
            </div>
        )   
    }
    return (
        <div className="view">
            < table className="table table-responsive-sm ">
                <thead key="thead">
                    <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Product</th>
                        <th scope="col">price</th>
                        <th scope="col">Description</th>
                        <th scope="col"> Edith</th>
                        <th scope="col" > Delete</th>
                    </tr>
                </thead>

                
                <tbody>
                    {this.state.result.map((qry, i) => 
                        <tr key={qry.id} obj={i}>
                             <td>{qry.id}  </td>
                             <td>{qry.name}</td>
                            <td>{qry.product}</td>
                            <td>{qry.amount}</td>
                            <td>{qry.description}</td>
                            <td> <button > <Link to={"/edith/" + qry.id} className="nav-link"> Edith </Link> </button> </td>
                            <td> <button onClick={this.handleDelete.bind(this, qry.id)} >  Delete  </button> </td>
                         </tr>
                    
                    )}  
                </tbody>
               
            </table>
            
        </div>
    );
}

}

export default View;