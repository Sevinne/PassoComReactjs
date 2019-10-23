import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Display  from './Display'

class App extends React.Component{

  constructor(props){
    
    super(props);
    this.state = {currentCount: 1,
    outrav: 2}; //pode colocar qualque quantidade de variavel nos props e states

  }

  handleDecrement(e){
    

    this.setState({currentCount: this.state.currentCount - 1 })
    this.setState({outrav: this.state.outrav - 2})
    
  }
  
  handleIncrement(e){
    

    this.setState({currentCount: this.state.currentCount + 1 })
    this.setState({outrav: this.state.outrav + 2})
    
  }

  render(){

    return (
    
      <div><h1>HW</h1>

        <button onClick={() => this.handleIncrement()} >+ </button>
        <button onClick={() => this.handleDecrement()}>-</button>
        <Display  currentCount={this.state.currentCount} />
        <Display  currentCount={this.state.outrav} />
      </div>

    );

  }

}


export default App;
