import React from 'react';
import Form from '../components/Form';
import mobileTeam from '../assets/about/mobile/image-team-members.jpg'
import tabletTeam from '../assets/about/tablet/image-team-members.jpg'
import deskTeam from '../assets/about/desktop/image-team-members.jpg'

const About = () => {
  return (
    <main className='about'>  

        <section>
            <h1>We empower innovators by delivering access to the financial system</h1>

            <div className='container'>
                <h2>Our Vision</h2>
                <p>Our main goal is to build beautiful consumer experiences along with developer-friendly 
                             infrastructure. The result is an intelligent tool that gives everyone the ability to create 
                             amazing products that solve big problems. We are deeply focused on democratizing financial 
                             services through technology.</p>
            </div>

            <div className='container'>
                <h2>Our Business</h2>
                <p>At the core of our platform is the technical infrastructure APIs that connect consumers. 
                            Our innovative product provides key insights for businesses and individuals, as well as 
                             robust reporting for traditional financial institutions and developers.</p>
            </div>

            <picture className="about-img">            
            <source media="(max-width:719px)" srcSet={mobileTeam}/>
            <source media="(max-width:1279px)" srcSet={tabletTeam}/>
            <source media="(min-width: 1280px)" srcSet={deskTeam} />
            <img className="hero__about__img" src={mobileTeam} alt="team members at work"/>
             </picture>

             <div className='team-info'>
                <div>
                    <h4>Team Members</h4>
                    <h1>300+</h1>
                </div>

                <div>
                    <h4>Offices in the US</h4>
                    <h1>3</h1>
                </div>

                <div>
                    <h4>Transactions analyzed</h4>
                    <h1>10M+</h1>
                </div>

             </div>

            <div className='container'>
                <h2>
                The Culture
                </h2>

                <p>
                We strongly believe there's always an opportunity to learn from each other outside of
                day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups.
                We always value cross-team collaboration and diversity of thought, no matter the job title.
                </p>
            </div>

            <div className='container'>
                <h2>
                The People
                </h2>

                <p>
                We're all passionate about building a more efficient and inclusive financial infrastructure
                together. At PayAPI, we have diverse backgrounds and skills.
                </p>
            </div>

            <h2>Ready to start?</h2>
            <Form />
        </section>

    </main>
  )
}

export default About