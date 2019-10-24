import React, { Component } from "react";


class Reg extends Component{
    constructor(){
        super()
        this.onchangeName = this.onchangeName.bind(this);
        this.onchangeEmial = this.onchangeEmial.bind(this);
        this.onchangePassword = this.onchangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state={
            name : "",
            email : "",
            password: ""
        }
    }

    onchangeName (e){
        console.log(e.target.value)
        this.setState({
            name : e.target.value
        })
    }

    onchangeEmial(e){
        console.log(e.target.value)

        this.setState({
            email : e.target.value
        })
    }

    onchangePassword(e){
        console.log(e.target.value)
        this.setState({
            password: e.target.value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        this.props.history.push("/login")

    }

    render(){
        return(
            <form className=" container text-center">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label role="name">
                                Name:
                            </label>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                        <input type="text" onChange={this.onchangeName} value={this.state.name}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label role="name">
                                Email:
                            </label>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input type="text" onChange={this.onchangeEmial}  value={this.state.email}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <label role="name">
                                Password:
                            </label>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <input type="password" onChange={this.onchangePassword}  value={this.state.password}/>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <button type="submit" className="btn btn-primary" onClick={this.handleSubmit} > Submit </button>
                        </div>
                    </div>
                </div>



            </form>
        )
    }
}



export default Reg;
