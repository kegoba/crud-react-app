

import React , {Component} from "react"

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = { price: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ price: event.target.value });
    }

    handleSubmit(event) {
        alert("this value was submited" + this.state.price)
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name:
          <input type="text" value={this.state.price} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}



export default Test;