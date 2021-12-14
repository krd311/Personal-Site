import React from 'react'
import "./styles/toolbar.css"

const Toolbar = () => {
    return (
        <div class='toolbar' >
            <a href='' class='toolbar-text'>Home</a>
            <a href='https://www.linkedin.com/in/kyle-doliente-877133225/' class='toolbar-text' target="_blank" rel="noopener noreferrer">LinkedIn</a>   
            <a href='https://github.com/krd311' class='toolbar-text' target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href='https://drive.google.com/file/d/1cpaIXXZBXsTlevPgCuJZEbwHUA_WPWr8/view?usp=sharing' class='toolbar-text' target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
    )
}

export default Toolbar
