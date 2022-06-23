import React from 'react'

function Experience() {
  return (
    <div className='experience'>
        <div className="projects">
            <h2>Projects</h2>
            <div>
            <h3>Insurance Calculator Application</h3>
            <h4>React JS project</h4>
            <ul>
                <li>• lead generator insurance application</li>
                <li>• offering insurance packages based on age group</li>
                <li>• sending data to Google Sheets and confirmation e-mail to client</li>
                <li>• responsive layout</li>
            </ul>
            <a href="https://www.ebiztosito.com" target='_blank'>Check out!</a>
            </div>
        </div>
        <div className='work'>
            <h2>Work experience</h2>
        <div>
            <p>2020-</p>
            <h3>Self-employed entrepreneur</h3>
            <h4>web developer, graphic designer</h4>
            <ul>
                <li>• web development (company websites and web apps)</li>
                <li>• graphic design (mobile app UI & UX designs, print designs)</li>
                <li>• ad management (FB & Google Ads management)</li>
            </ul>
        </div>
        <div>
            <p>2018-2020</p>
            <h3>Pannon Business Network</h3>
            <h4>junior project manager</h4>
            <ul>
                <li>• daily contact with the partner companies</li>
                <li>• organizing business events and B2B meetings</li>
                <li>• developing communication and marketing strategies</li>
            </ul>
        </div>
        </div>
        <div className="stack">
            <h2>Technology Stack</h2>
            <div>
                <img src={require('../images/stack01.png')} alt='Technology Stack 1.' />
            </div>
            <div>
                <img src={require('../images/stack02.png')} alt='Technology Stack 2.' />
            </div>

        </div>
        <div className="skills">
            <h2>Skills</h2>
            <ul>
                <li>• continous self-development</li>
                <li>• openness to learn new programming languages</li>
                <li>• proactive approach</li>
                <li>• systemic mentality</li>
                <li>• Google Search Ninja</li>
            </ul>
        </div>
    </div>
  )
}

export default Experience