import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import me from '../assets/img/me.jpg'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";


function NavBar() {
    const [activeLink,setActiveLink]= useState('home');
    const [scrolled,setScrolled]= useState(false);
    useEffect(()=>{
        const onScroll=()=>{
            if(window.scrollY>50){
                setScrolled(true);
            }
            else{
                setScrolled(false);
            }
        }
        window.addEventListener("scroll",onScroll);
        return()=> window.removeEventListener("scroll",onScroll);
    },[])
    const onUpdateActiveLink=(value)=>{
        setActiveLink(value);
    }
  return (
    <Navbar expand="lg" className={scrolled?"scrolled":""}>
      <Container>
        <Navbar.Brand href="#home">
          <img  className='mr-3 border-white-2 rounded-full h-12.25 w-12.25'src={me} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink=='home'? 'active navbar-link':'navbar-link'} onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink=='skills'? 'active navbar-link':'navbar-link'}  onClick={()=> onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects"  className={activeLink=='projects'? 'active navbar-link':'navbar-link'}  onClick={()=> onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/ashmita-singh-988a3a215" target="_blank">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100023664276290&mibextid=ZbWKwL" target="_blank">
                <img src={navIcon2} alt="" />
              </a>
              <a href="https://instagram.com/ashmita_2207?igshid=NGExMmI2YTkyZg==" target="_blank">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <button className="vvd " onClick={() => console.log("connect")}>
              <span> Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
