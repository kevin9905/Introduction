import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1 className="title_experience">Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Sep 2021 - now</h3>
            <p>
              Under the supervision of the incubator13 project
              officer(s)/agent(s) de project, the Instructor of Youth Coding
              club establishes programming and web development materials and
              deliver the lessons accordingly. Provide support the participants,
              (aged 10 to 17 years old) individually and write/ host bi-monthly
              interactive trainings for the participants. Maintain and update
              the Incubator13’s webpage by using HTML, CSS, WordPress. Publish
              relevant and informative content of the course and group
              activities on the cohort social media pages and sharing software
            </p>
          </div>
        </div>
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>Sep 2020 - April 2021</h3>
            <p>
              Developed the web application using HTML, CSS, JavaScript,
              Bootstrap. Integrated third party services and hosted the website,
              database with Google Firebase. Automated workflow by using GitHub.
              Contributed towards with Microsoft Team, with Agile methodology
              and Kanban board to track the progress of each member
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
