import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    person:[
      {name:'khan', age:22},
      {name:'raj', age:2}
    ],
    toggle:false
  }

  namechangehandler = (event) => {
    this.setState({
      person:[
        { name: event.target.value, age:2 },
        { name:'rajuu', age:22 }
      ]

    })

  }

  switchNameHandler = (newname) => {
    //console.log("button was clicked");
    this.setState({
      person:[
        { name: newname, age:2 },
        { name:'rajuu', age:22 }
      ]

    })
  }

  togglecontenthandler =()=> {
    const showstate = this.state.toggle;
    this.setState({
      toggle:!showstate
    });
  }



  render() {
    
    const style={
      backgroundColor:'steel blue',
      padding:'8px',
    };

    let persons = null;
    
    if(this.state.toggle === true)
    {
      persons = (
        <div>
          <Person name="toggling 2.0" age="2"></Person>

        </div>
      )
        
    }

    return (
      <div className="App">
        <h1> from app.js file</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this,'khannaa')}>switch user</button>
        <button style={style} onClick={this.togglecontenthandler}>toggle</button>
        
        {
          this.state.toggle===true ?
          <div>
          <Person name="vansh" age="20">vansh</Person>
          <Person />
          <Person name="hero" age="21">hero</Person>
          <Person name= {this.state.person[1].name}  age={this.state.person[1].age}  />
          <Person name= {this.state.person[0].name}  age={this.state.person[0].age} click={this.switchNameHandler.bind(this,'harish')} change={this.namechangehandler} /> 
          </div> : null
        }


        {persons}


      </div>
    );
  }
}

export default App;
