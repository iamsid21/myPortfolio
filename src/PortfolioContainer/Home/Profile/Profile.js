import React from 'react';
import Typical from 'react-typical';
import './Profile.css'
import ScrollService from '../../../utilities/ScrollService';

function Profile() {
    return (
        <div className='profile-container'>
            <div className='profile-parent'>
                <div className='profile-details'>
                    <div className='colz'>
                        <div className='colz-icon'>
                        <a href="https://www.linkedin.com/in/siddharth-pathak21/">
                            <i className="fa fa-linkedin-square">
                            </i>
                        </a>
                        <a href="https://github.com/iamsid21">
                            <i className="fa fa-github-square">
                            </i>
                        </a>
                        <a href="https://twitter.com/Siddharth____P">
                            <i className="fa fa-twitter-square">
                            </i>
                        </a>
                        <a href="mailto:iamsiddharthpathak@gmail.com">
                            <i className="fa fa-google-plus-square">
                            </i>
                        </a>
                        </div>
                    </div>


                    <div className='profile-details-name'>
                        <span className='primary-text'>
                            {" "}
                            Hello, I'm <span className='highlighted-text'>Siddharth Pathak</span>
                        </span>
                    </div>
                    <div className='profile-details-role'>
                    <span className='primary-text'>
                            {" "}
                            <h1 class="typing">I'am a Full Stack Developer 💻</h1>
                            <span className='profile-role-tagline'>
                                I can build scalable Front-end and Back-end <br /> applications across diverse platforms.
                            </span>
                        </span> 
                    </div>
                    <div className='profile-options'>
                        <button className='btn primary-btn'
                         onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
                            Hire me{" "}
                        </button>
                        <a href ='Resume_SiddharthPathak.pdf' download='Resume_SiddharthPathak.pdf'>
                            <button className='btn highlighted-btn'>Get Resume</button>
                        </a>
                    </div>
                </div>
                <div className='profile-picture'>
                    <div className='profile-picture-background'>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;