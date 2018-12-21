import React, { Component } from 'react';
import './App.css';
import Radium,{ StyleRoot } from 'radium';
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
      backgroundColor:'blue',
      padding:'8px',
      color:'white',
      ':hover':{
          backgroundColor:'lightblue',
          color:'black'
      }

    };

    let persons = null;
    
    if(this.state.toggle === true)
    {
        persons = (
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

        style.backgroundColor='black';
        style[':hover'] = {
          backgroundColor:'grey',
          color:'black'
      }

    }

//    let classes = ['blue', 'bold'].join(' ');
    var classes=[];
    if(this.state.person.length <= 2)
    {
      classes.push('blue');
    }
    if(this.state.person.length <=1)
    {
      classes.push('bold');
    }
    var classes1 = classes.join(' ');



    return (
      <StyleRoot>
      <div className="App">
        <h1 className={classes1}> from app.js file</h1>

       <button style={style} key="k1" onClick={this.switchNameHandler.bind(this,'khannaa')}>switch user</button>  
       <button style={style} key="k2" onClick={this.togglecontenthandler}>toggle</button>
              
        {persons}


      </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
