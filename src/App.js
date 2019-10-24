import React, { Component } from 'react';
import './App.css';
import Footer from "./component/footer"
import Menu  from "./component/menu"


class App extends Component {
  constructor() {
    super()
    this.state = {
         
    }
  }
  
  render() {
    return (
     <div className="App" >
        <Menu />
        
        <div className='footer'>
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
