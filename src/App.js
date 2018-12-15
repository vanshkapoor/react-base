import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    person:[
      {name:'khan', age:22},
      {name:'raj', age:2},
      {name:'sameer', age:232}
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
  deletehandler =(personindex)=>{
    const persons=this.state.person;
    persons.splice(personindex,1);
    this.setState({
      person:persons
    });

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
    {  persons = (
          <div>
            { this.state.person.map((personn,index) =>{
              return <Person click = {() => this.deletehandler(index)} name={personn.name} age={personn.age} />
            })}
          </div>
    );       
    }

    return (
      <div className="App">
        <h1> from app.js file</h1>
        <button style={style} onClick={this.switchNameHandler.bind(this,'khannaa')}>switch user</button>
        <button style={style} onClick={this.togglecontenthandler}>toggle</button>
      

        {persons}


      </div>
    );
  }
}

export default App;
