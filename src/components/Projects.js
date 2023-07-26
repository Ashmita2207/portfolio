import React from 'react'
import { Col, Container ,Row,Nav,Tab} from 'react-bootstrap';
// import {ProjectCards} from './ProjectCards';
import 'animate.css';
import what from '../assets/img/what.jpeg'
import TrackVisibility from 'react-on-screen';
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg1 from '../assets/img/project-img1.png'
import projImg2 from '../assets/img/project-img2.png'
import projImg3 from '../assets/img/project-img3.png'
function Projects() {
    // const pro=[
    //     {
    //         title: "Business Startup",
    //         description: "Design & Development",
    //         imgUrl: projImg1,
    //       },
    //       {
    //         title: "Business Startup",
    //         description: "Design & Development",
    //         imgUrl: projImg2,
    //       },
    //       {
    //         title: "Business Startup",
    //         description: "Design & Development",
    //         imgUrl: projImg3,
    //       },
    //       {
    //         title: "Business Startup",
    //         description: "Design & Development",
    //         imgUrl: projImg1,
    //       },
    //       {
    //         title: "Business Startup",
    //         description: "Design & Development",
    //         imgUrl: projImg2,
    //       },
    //       {
    //         title: "Business Startup",
    //         description: "Design & Development",
    //         imgUrl: projImg3,
    //       },

    // ];
  return (
    <section className='project' id='projects'>
        <Container>
            <Row>
                <Col>
                <TrackVisibility>
                 {({isVisible})=>
                  <div className={isVisible? 'animate__animated animate__slideInUp': ''}>
                 <h2>Projects</h2>
                 <p>Here is an insight on all the indivdual and group projects i worked on.</p>
                 </div>}
                   </TrackVisibility>
                  <Tab.Container id='projects-tabs' defaultActiveKey='first'>
                 <Nav variant="pills"  className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content>
                    <Tab.Pane eventKey='first'>
                      <h5>Portfolio </h5>
                      This project is a personal portfolio created using front end and backend technologies like <br/>HTML, CSS ,Javascript, reactJs, bootstrap ,NodeJs, expressJs
                    This project was bootstrapped with Create React App.
                    <br/>Built using:

<br/>Front-end library: React
<br/>CSS framework: React-bootstrap
<br/>CSS animations library: Animate.css
<br/>s
<br/>
<img className='my' src={what} />
                       {/* <Row>{
                         pro.map((project,index)=> {
                                return(
                                    <ProjectCards key={index}
                                    {...project}/>
                                )
                            })
                            }
                        </Row>  */}
                    </Tab.Pane>
                    <Tab.Pane eventKey='second'>
                      <h5>Bus Reservation System</h5>Bus ticket reservation system
This project is a small scale representation of the bus booking websites.<br/>
 Using MySQL PHP HTML CSS javascript</Tab.Pane>
                    <Tab.Pane eventKey='third'><h5>Movie recomendation system</h5>
This is an ML-based approach <br/> to filtering or predicting the users' film preferences based on their past choices<br/> and
behavior. <br/> This is a group based project in which i worked on the frontend and API's</Tab.Pane>
                  </Tab.Content>
                  </Tab.Container>
                </Col>
            </Row>
        </Container>
        <img className='background-image-right' src={colorSharp2}/>
    </section>
  )
}

export default Projects