import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';



class App extends Component{

  state ={
    userInput: ''
  }

inputChangedHandler =(event)=>{
  this.setState({userInput:event.target.value});

} 

deleteCharHandler =(index) =>{

  const text = this.state.userInput.split('');

  text.splice(index,1);

  const updatedText = text.join('');

  this.setState({userInput:updatedText});
}

render(){

  const charList = this.state.userInput.split('').map((ch,index) =>{
    return <Char 
      character={ch} 
      key={index}
      clicked={ ()=> this.deleteCharHandler(index)}/>
  });
  
  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <input 
        type="text" 
        onChange={this.inputChangedHandler} 
        value={this.state.userInput}/>
        {this.state.userInput}

       <Validation inputLength={this.state.userInput.length}/>
       {charList}
    </div>
  );

}


}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
