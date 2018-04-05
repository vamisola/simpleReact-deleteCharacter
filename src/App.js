import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './Components/ValidationComponent';
import CharComponent from './Components/CharComponent';

class App extends Component {

  state = {
    userInput: '',
  }

  inputTextChangedHandler = (event) => {
    this.setState({
      userInput: event.target.value
    });
  }

  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({userInput: updatedText});
  }

  render() {
    let charList = this.state.userInput.split('').map((ch, index) => {
      return <CharComponent 
        character={ch} 
        key={index}
        clicked={() => this.deleteCharHandler(index)}
      />;
    });



    return (
      <div className="App">
        <h1> A Simple React App</h1>
        <p>It will delete an inputted character when clicked.</p>
        <hr />
        <input type="text" onChange={this.inputTextChangedHandler} value={this.state.userInput} placeholder="Type here..."/>
        <p><strong>{this.state.userInput} </strong> <br /> <br />Text Length: {(this.state.userInput).length}</p>
        <ValidationComponent textLength={this.state.userInput.length}/>
        <hr />
        {charList}
      </div>
    );
  }
}

export default App;
