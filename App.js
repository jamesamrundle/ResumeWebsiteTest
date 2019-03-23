import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import About from './Components/About';
import Resume from './Components/Resume';
import Footer from './Components/Footer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "James Rundle",
            bio: "Hi " +
                "I am " +
                "James\n" +
                "I like programming!\n" +
                ` \n3 time semi-pro tummy-stick league champion, midwest division`,

            address:{
                street: "123 Drury Lane",
                city: "Seattle",
                state: "Washington",
                zip: "67460",
            },
            phone: "111-222-3333",
            email: "jamesamrundle@gmail.com",
            image: "./images/MYFACE.jpg",

            objective: "Interested in securing an internship in which I both leverage and expand my coding skills",
            occupation: "Aspiring Software Developer"

        }
    }


    render() {
    return (
        <div className="App">
            <Header data={this.state}/>
            <About  data={this.state}/>
            <Resume/>
        </div>
    );
  }
}

export default App;
