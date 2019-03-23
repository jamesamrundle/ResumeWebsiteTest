import React, {Component} from 'react';
// import '../public/css/layout.css'



class Resume  extends Component {
    constructor(props) {
        super(props);
        this.state = {
            education: [{
                    name: "College of Charleston",
                    degreeAndGpa: "Bachelors of Computer Science : 3.5 ",
                    year: "2021",
                    description: "As a non traditional student I secured a multiple Summer internship at Boeing during my first semester. In consequent semester I maintained active involvment and leadership in department clubs and was lead developer on the M^3 project in Dr. Bowrings research lab.  "
                }
            ],
            jobs: [
                {
                    company: "Serta",
                    date: "2007 - 2015",
                    title: "Cheif Quaility Assurance Officer, Pillow Division",
                    description: "Rigourously testing pillows up to 10,000 successive face plants to ensure maximum integrity and analyze cool-side capacity thresholds"
                },
                {
                    company: "Lego",
                    date: "2017- current",
                    title: "Materials engineer",
                    description: "Used non-euclidian geometry, 6th dimensional cthonic sorcery and precalculus to increase foot-pain-infliction by .427 percent"
                }
                ],
                skills:[
                    {name:"Java Brewing",level:"60%"},
                    {name: "Python Charming", level:"55%"},
                    {name: "PHPhuck dat", level:"-70%"},
                    {name: "Spelling words comprised of the letter 'C'",level:"23%"},
                    {name: "Confections and Sweet-craft", level:"80%"}
                ]
            }
        }



        education = () => {return this.state.education.map( (school) =>{
            return(
                <div key={school.name} >
                    <h3>{school.name}</h3>
                    <p>{school.degreeAndGpa} {school.year}</p> <br/>
                    <p> {school.description} </p>
                </div>
            )
        }
        )
        };

        work = () => {return(
            this.state.jobs.map( (job) =>{
                return(
                    <div>
                        <h3>{job.company}</h3>
                        <p>{job.title} {job.date}</p>
                        <p>{job.description}</p>
                    </div>
                )
            })
        )
        };

        skills = () =>{ return(
            this.state.skills.map((skill)=>{
                var className = "bar-expand " + skill.name;
                return(
                    <li key={skill.name}>
                        <span style={{width:skill.level}} className={className}></span><em>{skill.name}</em>
                    </li>
                )
            })
        )
        };

    render() {
        return (
            <section id="resume">

                <div className="education">
                    <h1 className="header-col"><span>Education</span></h1>

                    <div className="main-col">
                        {this.education()}
                    </div>
                </div>

                <div className="work">
                    <h1 className="header-col"><span>Employment</span></h1>

                    <div className="main-col">
                    {this.work()}
                    </div>
                </div>

                <div className="skill">
                    <h1 className="header-col"><span>Skills</span></h1>

                    <div className="main-col">
                        <div className="bars">
                            <ul className="skills">
                            {this.skills()}
                            </ul>
                        </div>
                    </div>
                </div>

            </section>
        );
    }
}

export default Resume;