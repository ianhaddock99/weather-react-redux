import React from 'react'
import {
    Link
} from 'react-router-dom'
import Me from '../assets/ian.jpeg'


const About = () => {
  return (
    <>



    <div className="text-center justify-content-center">
    <img className="mb-4 pic1 rounded mt-5" src={Me}></img>
        <p className="blockquote">My name is Ian Haddock. I am a former Marine Corps veteran who is currently looking to transition into the field of software development. I feel that software development challenges me to use the most of my problem solving abilities and I enjoy working in teams to solve coding issues and create projects. Feel free to check out the applications I have made and contact me!</p>
        <p className="lead">Email: ianhaddock99@gmail.com</p>
    </div>

    <div className="text-center mt-4">
        <Link className="btn btn-xl btn-outline-light mr-3 mb-4" to="//github.com/ianhaddock99" target="_blank">GitHub</Link>
        <Link className="btn btn-xl btn-outline-light mb-4" to="//www.linkedin.com/in/ianhaddock99/" target="_blank">Linkedin</Link>
    </div>

    </>
  )
}

export default About
