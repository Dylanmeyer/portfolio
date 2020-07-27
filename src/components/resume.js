import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";
import Profile from "./avatar/profile.jpg";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src={Profile} alt="avatar" className="avatar-img" />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Dylan Meyer</h2>
            <h4 style={{ color: "grey" }}>About Me</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              I am a very dedicated and hardworking individual who constantly
              enjoys learning new things and not shy for a challenge. I always
              do my best in every situation and never afraid to ask for help. I
              am a teamplayer and enjoy working with like-minded individuals who
              have the same drive and determination as myself.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Suburb</h5>
            <p>Westridge Mitchell's Plain</p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Hobbies</h5>
            <ul>
              <li>Playing Guitar</li>
              <li>Working out </li>
              <li>Rapping </li>
              <li>Skateboarding </li>
              <li>Playing Games </li>
            </ul>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2012}
              endYear={2016}
              schoolName="Princeton Senior Secondary"
              schoolSubjects=" Pure Maths, Physics, Civil Engineering, Engineering Graphics Design, English, Afrikaans"
            />
            <Education
              startYear={2004}
              endYear={2011}
              schoolName="Parkhurst Primary School"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Job Experience</h2>

            <Experience
              startYear={2017}
              endYear={2019}
              jobName=" (Junior Mechanical Inspector - Tellumat (PTY) Ltd)"
              jobDescription="Completed an internship at Tellumat (PTY) Ltd where I worked as a junior mechanical inspector. My
              duties included inspecting all incoming electronic and custom mechanical components for various
              projects.
              "
            />

            <Experience
              startYear={2016}
              endYear={2016}
              jobName=" (General Worker - Checkers)"
              jobDescription="I worked at Checkers during the December holidays as a General Worker dealing with mainly packing shelves ,stock count and dealing with customers."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Coding Skills</h2>
            <Skills skill="Javascript" progress={45} />
            <Skills skill="HTML/CSS" progress={70} />
            <Skills skill="Python" progress={70} />
            <Skills skill="NodeJS" progress={40} />
            <Skills skill="React" progress={40} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
