import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Display  from './Display'

class App extends React.Component{

  constructor(props){
    
    super(props);
    this.state = {currentCount: 1};

  }

  propriet(prop){

    this.props = 1;

  }

  handleDecrement(e){
    

    this.setState({currentCount: this.state.currentCount - 1 })
    
  }
  
  handleIncrement(e){
    

    this.setState({currentCount: this.state.currentCount + 1 })
    
  }

  render(){

    return (
    
      <div><h1>HW</h1>

        <button onClick={() => this.handleIncrement()} >+ </button>
        <button onClick={() => this.handleDecrement()}>-</button>
        <Display  currentCount={this.state.currentCount} />
      </div>

    );

  }

}


export default App;
