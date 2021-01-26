import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <div className="about-background">
        <div className="container">
          <div className="page-title">
            <h1 className="about-title">About Me</h1>
          </div>
        </div>
        <div className="info-container">
          <div className="gallery">
            <div>
              <h2 className="tag">Just a little about me</h2>
              <h2 className="mirror">Just a little about me</h2>
            </div>
          </div>
          <div className="bio">
            <h2>Who Am I? </h2>
            <div className="about-underline"></div>
            <h4>Life in General</h4>
            <p className="first-paragraph">
              Hello! Who am I? Well, I’ve been asking that question for years. I
              even went to university and got a degree on the subject. If you
              guessed that I studied philosophy, then you guessed correctly.
              Lately, though, I’ve been spending every spare moment of my every
              waking hour playing with web things.
            </p>
            <p>
              Of course, the amount of time I spend dong that is balanced with
              other obligations … for example, I spend a great deal of time
              chasing a toddler around, playing soccer with him, going for walks
              or short hikes with my partner and son.
            </p>
            <p>
              This past summer (2020) we moved our family from my home-town of
              Winnipeg (Go Jets!), to Southern Ontario, the region where my wife
              grew up and not far from where I’d visit my grandparents in my
              youth.{' '}
            </p>
            <p>
              I’ll spare you the details on how we came to make that decision,
              but involved Covid-19 layoffs, and opportunity to move abroad to
              Central Asia, the last minute cancelation of those plans, and much
              more. Exciting times we are living in!
            </p>
            <p>
              There have been no fewer than four times throughout the last 2
              decades I came close to formalizing my love for tech and playing
              with software and heading into the world of development
              professionally.{' '}
            </p>
            <p>
              Most of my post-university years have been spent in the
              hospitality industry—specifically in the world of specialty
              coffee. I’ve worked in numerous cafes from regular ol’ part time
              barista through to manager until finally in 2017 I took the plunge
              and opened up my own cafe / pub hybrid. It was a massive
              undertaking, and was a profoundly rewarding experience but sadly
              it was not to last and we closed up 2 years later. At I’ll be an
              old man waxing poetic about the beautiful cafe I opened instead of
              rehashing my regrets at not giving it a go.
            </p>
            <div className="about-underline"></div>
            <h4>Technolgy</h4>
            <p>
              I’ve spend significant portions of my life immersed in technology
              in some capacity. Whether it was trying to get Sim City 2000 to
              work on an outdated PC every night for weeks on end, through to
              building my own PCs to function as dedicated Audio Workstations. I
              have always been the guy my friends would come to if they needed a
              tech problem resolved. I eventually became part of the original
              team that opened up the Apple Retail store in Winnipeg. It was a
              fun place to work, but If I was going to be doing work in the
              industry, I wanted to make, break, and fix things rather than sell
              computers to people.
            </p>
            <h5>Currently Proficient In:</h5>
            <ul>
              <li>WORDPRESS</li>
              <li>SHOPIFY</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>SASS</li>
              <li>SCSS</li>
              <li>BOOTSTRAP</li>
              <li>GIT</li>
              <li>UX/UI DESIGN</li>
              <li>JAVASCRIPT</li>
              <li>REACT</li>
              <li>DATABASE-DESIGN</li>
              <li>UML-DIAGRAMING</li>
              <li>SQL</li>
              <li>MYSQL</li>
            </ul>
            <h5>Learning and Plan-to-Learn:</h5>
            <ul className="learning">
              <li>
                RUBY
                <sub>Feb. 2021</sub>
                <sub>OC Coursework</sub>
              </li>
              <li>
                RAILS
                <sub>Feb. 2021</sub>
                <sub>OC Coursework</sub>
              </li>
              <li>
                API-INTEGRATION
                <sub>Feb.2021</sub>
                <sub>OC Coursework</sub>
              </li>
              <li>
                NODE.JS
                <sub>March 2021</sub>
                <sub>OC Coursework</sub>
              </li>
              <li>
                EXPRESS.JS
                <sub> spring 2021</sub>
              </li>
              <li>
                MONGO DB
                <sub>spring 2021</sub>
              </li>
              <li>
                VUE.JS
                <sub>sometime later</sub>
              </li>
              <li>
                ANGULAR
                <sub>summer 2021</sub>
              </li>
              <li>
                PYTHON
                <sub>summer 2021</sub>
              </li>
              <li>
                SO MUCH MORE
                <sub>forever ...</sub>
              </li>
            </ul>

            <div className="about-underline"></div>
            <h4>EDUCATION</h4>
            <p>University of Winnipeg: Degree, Philosophy Hons.</p>
            <sub>Graduated with Honours, 2012</sub>
            <p>OpenClassrooms: Full-Stack Developer Path</p>
            <sub>Course Completion Estimate: Spring 2021</sub>

            <div className="about-underline"></div>

            {/* Past Work Section */}
            <div className="past-work">
              <div>
                <h4>Past Work</h4>
                <div className="work-section">
                  <h6 className="work-title">Group Benefits Advisor</h6>
                  <div className="work-details">
                    <p className="company-name">
                      Group Strength Benefits Direct
                    </p>
                    <p className="timeframe">July 2019 - March 2020</p>
                  </div>
                  <p className="lead">
                    New Business Development through self-generated as well as
                    pre-vetted leads | Maintain, organize, update and give
                    logical structure to client portfolio through efficient use
                    of CRM software | Present weekly, and daily updates,
                    progress, challenges and successes to team
                  </p>
                </div>
                <div className="work-section">
                  <h6 className="work-title">
                    Residential & Commercial Painter
                  </h6>
                  <div className="work-details">
                    <p className="company-name">Simple Painting</p>
                    <p className="timeframe">December 2018 - July 2019</p>
                  </div>
                  <p className="lead">
                    New Business Development through self-generated as well as
                    pre-vetted leads | Maintain, organize, update and give
                    logical structure to client portfolio through efficient use
                    of CRM software | Present weekly, and daily updates,
                    progress, challenges and successes to team
                  </p>
                </div>
                <div className="work-section">
                  <h6 className="work-title">Owner / Operator</h6>
                  <div className="work-details">
                    <p className="company-name">Grey Owl Coffee Ltd.</p>
                    <p className="timeframe">November 2017 - February 2019</p>
                  </div>
                  <p className="lead">
                    Developed a detailed business plan and project build budget
                    to present to investors | Project Managed the building of
                    full sized café, organizing schedules for various
                    tradespeople | Hired café staff | Trained new hires in a
                    variety of roles | Oversaw payroll processing,
                    administrative duties, inventory control, coordinate with
                    vendors and order supplies as needed | Lead by example
                    spending time in customer facing role & taking on any task
                    that needed to be accomplished to ensure operations ran
                    smoothly | Modeled the highest quality customer service
                    while coaching staff to achieve the same standards and value
                  </p>
                </div>
                <div className="work-section">
                  <h6 className="work-title">Barista / Manager</h6>
                  <div className="work-details">
                    <p className="company-name">Parlour Coffee Ltd.</p>
                    <p className="timeframe">September 2011 - September 2015</p>
                  </div>
                  <p className="lead">
                    Part of original team launching café in 2011 | Worked
                    closely with owner as a barista while in university learning
                    and honing the skills required to operate the highest
                    quality specialty coffee establishment | Ensured a clean and
                    aesthetically pleasing experience for all customers | Met
                    the highest standards in quality while delivering top
                    customer service ensuring a solid base of repeat customers |{' '}
                    <br />
                    Promoted to Manager in 2014 | Ordered supplies and
                    maintained inventory levels | Modeled brand standards of
                    excellent customer service | trained new staff | Identified
                    problems and engineered novel solutions to present to owner
                    | Created, developed and delivered internal coffee training
                    documentation as well as external coffee shop newsletter to
                    send to customers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default About;
