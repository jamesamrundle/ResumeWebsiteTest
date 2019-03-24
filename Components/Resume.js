import React, {Component} from 'react';
// import '../public/css/layout.css'



class Resume  extends Component {
    constructor(props) {
        super(props);
        console.log(this.props)
    }


        education = () => {return this.props.data.education.map( (school) =>{
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
            this.props.data.jobs.map( (job) =>{
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
            this.props.data.skills.map((skill)=>{
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