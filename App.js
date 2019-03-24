import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Footer from './Components/Footer';
import Contact from "./Components/Contact";

import {data} from "./public/resumeInfo"
import {sendMessage} from "./Components/emailHandler";

class App extends Component {
    constructor(props) {


        super(props);
        this.state = {name:"",message:"",email:"",subject:""}
    }

    required = ["name","message","email"];

    saveData = (event) => {
      let  target = event.target
        let field = target.name
        let value = target.value

        this.setState({[field]:value})
    };
   // env = require('env2')('../.env');

// your app goes here
    submitData=(event)=>{
        event.preventDefault()
        let state= this.state

        let validated = true;

        let re =/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;


        for(let each of this.required){
             if(each === "email"){
                 validated = re.test(this.state.email)
             }
            if (this.state[each] === "" ) validated =false;
        };



        console.log("submit data : ",this.state,validated)
         if(validated === true) sendMessage(this.state)
    }

    render() {
        return (

        <div className="App">
            <Header data={data.main}/>
            <About  data={data.main}/>
            <Resume data={data.resume} />
            <Contact saveData={this.saveData} submitData={this.submitData}/>
            <Footer/>
        </div>
    );
  }
}

export default App;
