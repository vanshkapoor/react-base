import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state = {
    person:[
      { id:'11', name:'raj', age:2},
      { id:'22', name:'sameer', age:232},
      { id:'33', name:'khan', age:22},
    ],
    toggle:false
  }

  namechangehandler = (event,id) => {

    const personindex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.person[personindex]
    };
    person.name = event.target.value;

    const persons = [...this.state.person];  //or slice
    persons[personindex] = person;


    this.setState({
      person: persons
    });

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
    const persons=this.state.person.slice();
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
              return <Person click = {() => this.deletehandler(index)} 
                             name={personn.name}
                             age={personn.age} 
                             key={personn.id} 
                             change={(event) => this.namechangehandler(event,personn.id)} />
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
