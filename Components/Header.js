import React, {Component} from 'react';
// import '../public/css/layout.css'


class Header extends Component {


    render() {
        let {name, occupation, objective, address} = this.props.data;

        return (
            <header id="home">

                <nav id="nav-wrap">
                    <ul id="nav" className="nav">
                        <li><a href="#home" className="smoothscroll" >home</a></li>
                        <li><a href="#about" className="smoothscroll">about</a></li>
                        <li><a>resume</a></li>
                    </ul>
                </nav>

                <div className="row banner banner-text" >

                <h1>{name} <span style={{"font-size":9+"pt","font":"helvetica" }}>thats me</span></h1>
                    <h3> I'm a {address.city} based <span>{occupation}</span> who is {objective}</h3>
                </div>


            </header>
        );
    }
}

export default Header;