
import React, { Component } from "react";
class Loader extends Component {
    render() {
        return (
            <div className="text-center">
                <div className="spinner-border text-success" role="status">
                    <span className="sr-only"> loading </span>
                </div>

            </div>
        );
    }
}



export default Loader;