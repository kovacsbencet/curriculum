import React from 'react'

function Profile() {

    return (
        <div className='profile'>
            <div className='picture'>
                <img src={require('../images/kovacsbencetcv.png')} alt='Bence Kovacs Frontend Developer' width='400px'/>
                <h1>Bence</h1>
                <h2>Kovács</h2>
                <p>web developer</p>
            </div>
            <div className='about'>
                <h2>Introduction</h2>
                <h4>Currently I'm working as a freelance web developer and graphic designer. I'm looking forward to join a professional web development team and strengthen my skills and knowledge through interesting and challenging projects.</h4>
                <p>As a web developer I think the most important skills are the continous self-development, proactive and systemic mentality and to be able to find solutions to unknown problems.</p>
            </div>
            <div className='personal'>
                <h2>Info</h2>
                <h3>Personal info</h3>
                <ul>
                    <li>Kovács Bence Tamás</li>
                    <li>1996.11.07.</li>
                    <li>9700 Szombathely, Szegfű str. 15.</li>
                    <li>kovacsbencet@gmail.com</li>
                    <li>+36 70 636 5506</li>
                </ul>
            </div>
            <div className='social'>
                <h2>Social</h2>
                <h3>Social media</h3>
                <ul>
                    <li><a href="https://instagram.com/kovacsbencet" target='_blank'>@kovacsbencet</a></li>
                    <li><a href="https://facebook.com/fb.com/bence.kovacs.967" target='_blank'>fb.com/bence.kovacs.967</a></li>
                    <li><a href="https://linkedin.com/kovacsbencet" target='_blank'>linkedin.com/kovacsbencet</a></li>
                    <li><a href="https://github.com/kovacsbencet" target='_blank'>github.com/kovacsbencet</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Profile