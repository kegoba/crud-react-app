import React, { Component } from "react";
import bed1 from "./image/bed1.jpg"
import bed2 from "./image/bed2.jpg"
import bed3 from "./image/bed3.jpg"

class Home extends Component {
    render() {
        return (
            <div className="home title">
            <div className="container">
                <div className="row">
                    <div className="col">  <h3>  Our show Room  </h3>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                     <div className="col col-xs-10">
                            <img src={bed1} />
                            <h4> Mini-Standard   </h4>
                            <p>This room can be assigned to just one person. it has just a single bed.<a href=""> click for more </a>  </p>
                     </div>
                        <div className="col col-xs-10">
                            <img src={bed2} />
                            <h4> Standard   </h4>
                            <p>This room can be assigned to just two people. it has two bed.<a href=""> click for more </a>  </p>
                        </div>
                        <div className="col col-xs-10">
                            <img src={bed3}/>
                            <h4> Executive   </h4>
                            <p>This room can be assigned to three or more people. it has two or more bed.<a href=""> click for more </a>  </p>
                        </div>
                </div>
            </div>
            </div>
        ) 

    }

}

export default Home;
