import React from 'react'
import './styles/experience.css'
import './styles/projects.css'

export const Projects = (props) => {
    let experienceClass = '';

    if (!props.check){
        experienceClass = 'experience-header projects-header'
    }
    else{
        experienceClass = 'experience-header-mobile projects-header'
    }
    return (
        <div class ={experienceClass}>
            Projects
            <br></br>
            <div class='experience-text'>
                <strong>Package Tracker </strong>
                <a class = 'links' href='https://github.com/krd311/shipmentTracker target="_blank" rel="noopener noreferrer"'>
                    (link)
                </a>

                <br></br>
                - This was an application that used Python webscraping to get shipping information from USPS's website.
                I gained experience with Python, APIS, the Python Flask library, and I experimented with web development 
                for the first time. I also learned the basics of GitHub.

                <br></br>
                <br></br>
                <strong>Photo Portfolio Website </strong>
                <a class='links' href="https://github.com/krd311/DisposablePortfolio" target="_blank" rel="noopener noreferrer">
                    (link)
                </a>
                <br></br>
                - This is a website that displays photos that I took with a disposable camera. It was done using
                a CSS grid and HTML. I grew more familiar with HTML and CSS and continued to use GitHub.

                <br></br>
                <br></br>
                <strong>Discord Music Bot </strong>
                <a class='links' href="https://github.com/krd311/discord-music-bot" target="_blank" rel="noopener noreferrer">
                    (link)
                </a>
                <br></br>
                - This is an in-progress discord bot that takes YouTube links from users and plays audio from the video. I learned about Discord's API and polished my Python skills.
                
                <br></br>
                <br></br>
                <strong>Personal Website </strong>
                <a class='links' href="https://github.com/krd311/personal-site" target="_blank" rel="noopener noreferrer">
                    (link)
                </a>
                <br></br>
                - This is my personal website! I use it to display relevant information about me and give recruiters more to look at! It was developed using React and helped me become more comfortable with it and its syntax. I also gained more experience with HTML and CSS.
            </div>
        </div>
    )
}

export default Projects
