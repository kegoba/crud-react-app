import React, {Component} from "react";
import axios from "axios";
import { Link }  from "react-dom";
class Create extends Component{
    constructor(props){
        super(props)
        this.onchangeName = this.onchangeName.bind(this);
        this.onchangeProduct = this.onchangeProduct.bind(this);
        this.onchangeAmount = this.onchangeAmount.bind(this);
        this.onchangeDescription = this.onchangeDescription.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: "",
            product : "",
            amount : "",
            description:"",
          
        }
    }
    onchangeName(event) {
        console.log(event.target.value)
        this.setState({
            name: event.target.value
        });
    }

    onchangeProduct(event){
        event.preventDefault();
        console.log(event.target.value)
    this.setState ({
        product : event.target.value
    });
    }
    onchangeAmount(event){
        event.preventDefault();
        console.log(event.target.value)
        this.setState({
            amount: event.target.value
        });
    }
    onchangeDescription (event){
        event.preventDefault();
    console.log(event.target.value)
    this.setState({
        description : event.target.value
    });
}
    handleSubmit = (event) =>{
        event.preventDefault();

        const postdata = { 
            "name": this.state.name ,
            "amount": this.state.amount,
            "product" : this.state.product, 
            "description": this.state.description 
        } 
            console.log(postdata)
        axios.post('https://kelvineapp.herokuapp.com/createapi/', postdata)
            .then((result) => {
                console.log(result.data)
                this.props.history.push("/view")
            
               
            })

        this.setState = {
            name: "",
            product: "",
            amount: "",
            description: "",

        }
       
    }     
    render(){
       
        return (
            <form className="text-center">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <label role="product"> Name </label>
                        <div className="col">
                                <input type="text" onChange={this.onchangeName} value={this.state.name} />
                        </div>
                    </div>
                </div>
            </div>
                 <div className="container">
                    <div className="row">
                        <div className="col">
                            <label role="product"> Product </label>
                            <div className="col">
                                <input type="text" onChange={this.onchangeProduct} value={this.state.product}/>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <label role="price"> Price </label>
                                <div className="col">
                            <input type="text" onChange={this.onchangeAmount} value={this.state.amount}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <label role="quality"> Description </label>
                                <div className="col">
                                <input type="text" onChange={this.onchangeDescription} value={this.state.description} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                            <button  onClick={this.handleSubmit} className="btn btn-success"> Save </button>
                            </div>
                        </div>

                    </div>
            </form>
        )
    }
}
export default Create;