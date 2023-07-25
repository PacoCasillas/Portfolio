import React, { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'eventopia',
      description: 'Full Stack',
      link: "https://eventopia-ea333846024a.herokuapp.com/",
      repo: "https://github.com/PacoCasillas/Eventopia"
    },
    {
      name: 'movie-dashboard',
      description: 'Front End',
      link: "https://timebytes.github.io/Movie-Dashboard/",
      repo: "https://github.com/PacoCasillas/Movie-Dashboard"
    },
    {
      name: 'text-editor',
      description: 'PWA',
      link: "https://github.com/PacoCasillas/Text-Editor",
      repo: "https://github.com/PacoCasillas/Text-Editor"
    },
    {
      name: 'note-taker',
      description: 'Express JS',
      link: "https://francisco-express-note-taker.herokuapp.com/index.html",
      repo: "https://github.com/PacoCasillas/express-note-taker"
    },
    {
      name: 'day-planner',
      description: 'Third Party APIs',
      link: "https://pacocasillas.github.io/Daily-Planner/",
      repo: "https://github.com/PacoCasillas/Daily-Planner"
    },
    {
      name: 'password-generator',
      description: 'JavaScript',
      link: "https://pacocasillas.github.io/password-generator/",
      repo: "https://github.com/PacoCasillas/password-generator"
    },
    {
      name: 'regex-gist',
      description: 'Computer Science',
      link: "https://gist.github.com/PacoCasillas/856dfd294e6871090b525e3310ec3392",
    },
    

  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
