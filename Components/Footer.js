import React, {Component} from 'react';
// import '../public/css/layout.css'


const Footer = () =>{

        return (
            <footer>
                <div className="row">
                    <ul className="copyright">
                        <li>&copy; Copyright 2017 Henri Leroy </li>
                        <li>Design by <a target="_blank" href="https://www.linkedin.com/in/letuscode/">Jason Williams</a></li>
                    </ul>

                    <div id="go-top">
                        <a title="back to top" href="#home">
                            <i className="icon-up-open"/>
                         </a>
                    </div>
                </div>
            </footer>
        );
    }


export default Footer