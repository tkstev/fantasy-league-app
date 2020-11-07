import React from 'react';
import './App.css';
import Navbar from './Components/Navbar'
import Dashboard from './Components/Dashboard'
import Player from './Components/Player'
import Card from './Components/Card'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      "First": "Please select a player",
      "Second": "Please select a player",
      "Third": "Please select a player",
      "Short": "Please select a player",
      "Left": "Please select a player",
      "Center": "Please select a player",
      "Right": "Please select a player",
      "Catcher": "Please select a player",
      "Pitcher": "Please select a player"
    };
  }

  makeChoice = (position, name) => {
    this.setState(state => {
      state[position] = name
      return state
    })
  }
  render(){
    return (
        <div className="App">
            <Navbar />
            <Dashboard 
                first = {this.state.First}
                second = {this.state.Second} 
                third = {this.state.Third}
                short = {this.state.Short}
                left = {this.state.Left}
                right = {this.state.Right}
                center = {this.state.Center}
                catcher = {this.state.Catcher}
                pitcher = {this.state.Pitcher}/>

            <div className="card-container">
                <Card display = "First Base" position = "First" name1 ="Luke Voit" name2 = "Pete Alonso" makeChoice = {this.makeChoice}/>
                <Card display = "Second Base" position = "Second" name1 ="Robinson Cano" name2 = "DJ Lemahieu" makeChoice = {this.makeChoice}/>
                <Card display = "Third Base" position = "Third" name1 ="Jeff McNeil" name2 = "Gio Urshela" makeChoice = {this.makeChoice}/>
                <Card display = "Shortstop" position = "Short" name1 ="Amed Rosario" name2 = "Gleyber Torres" makeChoice = {this.makeChoice}/>
                <Card display = "Left Field " position = "Left" name1 ="JD Davis" name2 = "Brett Gardner" makeChoice = {this.makeChoice}/>
                <Card display = "Right Field" position = "Right" name1 ="Brandon Nimmo" name2 = "Aaron Judge" makeChoice = {this.makeChoice}/>
                <Card display = "Center Field" position = "Center" name1 ="Michael Conforto" name2 = "Aaron Hicks" makeChoice = {this.makeChoice}/>
                <Card display = "Catcher" position = "Catcher" name1 ="Wilson Ramos" name2 = "Gary Sanchez" makeChoice = {this.makeChoice}/>
                <Card display = "Pitcher" position = "Pitcher" name1 ="Jacob Degrom" name2 = "Pete Alonso" makeChoice = {this.makeChoice}/>

            </div>

            <Player />
        
        </div>
        );  
    }
}
export default App;
