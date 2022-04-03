import React from 'react'
import './styles/home.css'
import './styles/experience.css'
import { useMediaQuery } from 'react-responsive'


export const Experience = () => {
    const experienceText = "My first programming language was Python. It was crucial for me to grasp the basics of programming, and it was my only proficient language until I picked up C++. I have also learned Java and was introduced to MySQL through coursework."
    const experienceText1 = " In terms of web development, I self-taught React, CSS, and HTML when I had spare time."
    const ctcText = "Currently, I am a frontend developer in Commit the Change, an organization at UCI that creates software for nonprofit organizations and UCI students. Right now, my team and I are working on a web application that locates and displays restroom locations on campus. "
    const learningAssistantText = "I was also a learning assistant for the introductory Python class for UCI. My responsibilties included managing breakout rooms in lecture, hosting office hours, and grading assignments. "

    const isMobile = useMediaQuery({ query: '(max-width: 750px)' });
    const experienceTextFomat = isMobile ? 'experience-header-mobile' : 'experience-header';
    
    return (
        <div class={experienceTextFomat}>
            Experience
            <div class='experience-text'>
                {experienceText + experienceText1} 

                <br></br>
                <br></br>

                {ctcText}
                {learningAssistantText}
            </div>
        </div>
    )
}

export default Experience
