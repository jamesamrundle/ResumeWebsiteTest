import React, {Component} from 'react';
import '../public/css/layout.css'


class About  extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "James Rundle",
            bio: "Hi " +
                "I am " +
                "James\n" +
                "I like programming!\n" +
                " 3 time semi-pro tummy-stick league champion, midwest division  U+1F60E",
            address0:{
                street: "123 Drury Lane",
                city: "Seattle",
                state: "Washington",
                zip: "67460",
            },
            address : { street : "123 Drury Lane",
                        theRest : "Seatle, WA 12345"},
            phone: "111-222-3333",
            email: "jamesamrundle@gmail.com",
            image: "./images/MYFACE.jpg"
        }
    }

    render() {
        let {bio,street,city,state,address,zip,phone,email,name,image, address0} = this.props.data;
        return (
            <section id="about" >
            <div className="grid">

                <div className="pic">
                <img className="profile-pic" src="../images/MYFACE.jpg" />
                </div>

                <div className="main-col">


                    <h2>About Me</h2>
                    <p>{bio}</p>


                    <div className="contact-details">
                    <h2>Contact Details</h2>
                    <p>
                        <span>{name}</span> <br />
                        <span>{address.street}</span> <br />
                        <span>{address.city} {address.state}, {address.zip}</span><br />
                        <br/>
                        <span>{phone}</span><br />
                        <span>{email}</span><br />
                    </p>
                    </div>

                <div className="download">
                    <p>
                        <a href="../public/pika.png" className="button" download><button>Download Resume</button></a>
                    </p>
                </div>

            </div>

            </div>
            </section>
        );
    }
}

export default About;