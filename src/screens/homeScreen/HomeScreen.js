import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Nalin from "../../images/NALIN.jpeg";
import "./HomeScreen.css";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { AnimatedOnScroll } from "react-animated-css-onscroll";
export default function HomeScreen() {
  return (
    <div>
      <AnimatedOnScroll
        animationIn="fadeIn"
        animationInDuration={5000}
        isVisible={true}
      >
        <Jumbotron fluid className="HomeScreenJumbotron">
          <Container className="HomeScreenSmallIntro">
            <img src={Nalin} className="HomeSceenProfilePicture" />
            <h1 className="HomeScreenH1">Nalin Agrawal</h1>
            <h2 className="HomeScreenH2">
              Competitive Programmer | MERN Stack Developer | Android Developer
            </h2>
            <p className="HomeScreenP">
              A competitive programmer and developer. Good grip on Data
              Structures. Self-Motivated and Enthusiastic Developer. Have
              knowledge of DS, Algorithms, Android development and Web
              Development.
            </p>
          </Container>
        </Jumbotron>
      </AnimatedOnScroll>
      <AnimatedOnScroll
        animationIn="slideInUp"
        animationInDuration={1000}
        isVisible={true}
      >
        <Container className="HomeScreenSkills">
          <h1 className="HomeScreenSkillsH1">Skills </h1>
          <Grid container spacing={3}>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <span
                  class="iconify HomeScreenSkillContentIcon"
                  data-icon="file-icons:c"
                  data-inline="false"
                  style={{ height: "28px", width: "28px" }}
                ></span>
                <p className="HomeScreenSkillContentP">C++</p>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <span
                  class="iconify HomeScreenSkillContentIcon"
                  data-icon="teenyicons:c-solid"
                  data-inline="false"
                  style={{ height: "28px", width: "28px" }}
                ></span>
                <p className="HomeScreenSkillContentP">C</p>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <i class="fab fa-python fa-2x HomeScreenSkillContentIcon">
                  <p className="HomeScreenSkillContentP">Python</p>
                </i>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <i class="fab fa-java fa-2x HomeScreenSkillContentIcon">
                  <p className="HomeScreenSkillContentP">Java</p>
                </i>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <i class="fab fa-android fa-2x HomeScreenSkillContentIcon">
                  <p className="HomeScreenSkillContentP">Android</p>
                </i>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <span
                  class="iconify HomeScreenSkillContentIcon"
                  data-icon="simple-icons:firebase"
                  data-inline="false"
                  style={{ height: "28px", width: "28px" }}
                ></span>
                <p className="HomeScreenSkillContentP">Firebase</p>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <i class="fab fa-react fa-2x HomeScreenSkillContentIcon">
                  <p className="HomeScreenSkillContentP">React</p>
                </i>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <i class="fab fa-node-js fa-2x HomeScreenSkillContentIcon">
                  <p className="HomeScreenSkillContentP">NodeJs</p>
                </i>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <span
                  class="iconify HomeScreenSkillContentIcon"
                  data-icon="cib:mongodb"
                  data-inline="false"
                  style={{ height: "28px", width: "28px" }}
                ></span>
                <p className="HomeScreenSkillContentP">MongoDB</p>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <span
                  class="iconify HomeScreenSkillContentIcon"
                  data-icon="grommet-icons:mysql"
                  data-inline="false"
                  style={{ height: "28px", width: "28px" }}
                ></span>
                <p className="HomeScreenSkillContentP">MySQL</p>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <i class="fab fa-bootstrap fa-2x HomeScreenSkillContentIcon">
                  <p className="HomeScreenSkillContentP">Bootstrap</p>
                </i>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <i class="fab fa-html5 fa-2x HomeScreenSkillContentIcon">
                  <p className="HomeScreenSkillContentP">HTML</p>
                </i>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <i class="fab fa-css3-alt fa-2x HomeScreenSkillContentIcon">
                  <p className="HomeScreenSkillContentP">CSS</p>
                </i>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <i class="fab fa-github fa-2x HomeScreenSkillContentIcon">
                  <p className="HomeScreenSkillContentP">Github</p>
                </i>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <i class="fab fa-git-alt fa-2x HomeScreenSkillContentIcon">
                  <p className="HomeScreenSkillContentP">Git</p>
                </i>
              </div>
            </Grid>
            <Grid item xs={3} sm={3}>
              <div className="HomeScreenSkillContent">
                <span
                  class="iconify HomeScreenSkillContentIcon"
                  data-icon="cib:heroku"
                  data-inline="false"
                  style={{ height: "28px", width: "28px" }}
                ></span>
                <p className="HomeScreenSkillContentP">Heroku</p>
              </div>
            </Grid>
          </Grid>
        </Container>
      </AnimatedOnScroll>
    </div>
  );
}
