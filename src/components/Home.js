import React from 'react';
import './styles/home.css';
import me from './images/me.jpeg';
import Skills from './Skills';
import Experience from './Experience';
import Projects from './Projects';

export const Home = () => {
    const text1 = "Hello! My name is Kyle and I am in my third year as a computer science major at the University of California, Irvine.\n I am looking to gain experience in the software engineering field through internship and projects."
    const text2 = "I reside in San Diego, California and my interests include gaming, computers, and hiking!"
    
    return (
        <>
            <div class='home'>
                <div class='welcome-text'>
                    Welcome to my personal site!
                </div>
                <div class='home-section'>
                        <img src={me} class='selfImage'/>
                        <figcaption class='caption'>Kyle Doliente</figcaption>
                        <div class='about-text'>
                            <div class='about-text-border'>
                                About Me
                                <div class='description'>
                                    <div>
                                        {text1}

                                        <br></br>
                                        <br></br>

                                        {text2}
                                    </div>
                                </div>
                                <br></br>
                            </div>
                            <Skills/>
                        </div>
                        <Experience/>
                        <Projects/>
                </div>
            </div>
        </>
    )
}

export default Home
