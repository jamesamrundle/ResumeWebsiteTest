import React, {Component} from 'react';
// import '../public/css/layout.css'


class About  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "James Rundle",
            image: "../public/images/JamesBoeing.jpg",
            bio: "Hi " +
                "I am " +
                "James\n" +
                "I like programming!",
            street: "123 Drury Lane",
            city: "Seattle",
            state: "Washington",
            zip: "67460",
            address : { street : "123 Drury Lane",
                        theRest : "Seatle, WA 12345"},
            phone: "111-222-3333",
            email: "jamesamrundle@gmail.com"
        }
    }

    render() {
        let {bio,street,city,state,address,zip,phone,email,name,image} = this.state;
        return (
            <section id="" >
            <div className="">
                <img className="" src="./images/MYFACE.jpg" />
                <div>
                    <h2>About Me</h2>
                    <p>{bio}</p>
                </div>
                <div>
                    <h2>Contact Details</h2>
                    <p>
                        <span>{name}</span> <br />
                        <span>{address.street}</span> <br />
                        <span>{address.theRest}</span><br />
                        <br/>
                        <span>{phone}</span><br />
                        <span>{email}</span><br />
                    </p>
                </div>
            </div>
            </section>
        );
    }
}

export default About;