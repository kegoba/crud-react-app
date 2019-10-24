import React, {Component} from "react";
import Auth from "./auth"


class Login extends Component{
    constructor(props){
        super(props)
            this.onchangeEmail = this.onchangeEmail.bind(this);
            this.onchangePassword = this.onchangePassword.bind(this);
            this.handlesubmit = this.handlesubmit.bind(this)
            this.handlereg = this.handlereg.bind(this)

            this.state={
                email : "" ,
                password : "",
                user : "",
                isLogin: false,
                data : ""
              
            }

    }
    

    onchangeEmail(event) {
       // console.log(event.target.value)
        this.setState({
            email: event.target.value
        });
    }



onchangePassword(event){
    console.log(event.target.value)
    this.setState({
        password: event.target.value
    });
}
data ={
    user : "kelvin",
    location :" lagos"
}

    handlesubmit = (Authenticate)=>{
        Auth.signin(()=>{
            this.setState(()=>({
                isLogin:true
            }))
        })
        
        console.log("login successful", this.state.data)
        this.props.history.push("/create")
   
}

handlereg = (event)=>{
    console.log(event.target.email)
    this.props.history.push("/reg")
}

    render(){
        return(
            <form className=" container text-center">
                <div className="login text-center">
                  <div className="container-fluid">
                    <div className="row">
                    <div className="col">
                        <label role="name"> Email </label>
                        <div className="col">
                                    <input type="text" className=""  onChange={this.onchangeEmail} value={this.state.email}/>
                        </div>
                        </div>
                    </div>
                    </div>
                        <div className="container">
                            <div className="row">
                               <div className="col">
                                <label role="name"> Password </label>

                                <div className="col">
                                    <input type="password" onChange={this.onchangePassword} value={this.state.password} />
                                </div>
                            </div>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                <button  className="btn btn-success" onClick={this.handlesubmit} > Login </button>
                                </div>
                            </div>
                        </div>
                            <div className="container">
                            <div className="row">
                                <div className="col">
                                <button  className="btn btn-success" onClick={this.handlereg} > Register  </button>
                                </div>
                            </div>
                        </div>
                    </div>


              </form>


        )
    }
}

export default Login;
