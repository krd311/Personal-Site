import React from 'react'
import './styles/home.css'
import './styles/experience.css'

export const Experience = () => {
    const experienceText = "My first programming language was Python. It was crucial for me to grasp the basics of programming, and it was my main language until I picked up C++."
    const experienceText1 = " In terms of web development, I self-taught React, CSS, and HTML when I had spare time."
    const experienceText2 = " I am a current developer in Commit the Change at UCI, an organization that creates software for non-profit organizations. "
    const learningAssistantText = "I was also a learning assistant for the Fall 2020 quarter. My job was to help teach the introductory Python class for UCI. My responsibilties included managing breakout rooms in lecture, hosting office hours, and grading assignments."
    return (
        <div class='experience-header'>
            Experience
            <div class='experience-text'>
                {experienceText + experienceText1 + experienceText2} 

                <br></br>
                <br></br>

                {learningAssistantText}
            </div>
        </div>
    )
}

export default Experience
