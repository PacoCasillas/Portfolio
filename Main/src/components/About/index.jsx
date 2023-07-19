import React from 'react';
import aboutMeImage from '../../assets/large/portraits/face-pic.jpg';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img
            src={aboutMeImage}
            alt="Faceshot of Francisco"
            style={{ 
              borderRadius: "50%",
              width: "10%",
              height: "auto",
            }}

          />        
        </div>
        <p>
        Hi there!
        </p>
        <p>
        I'm a junior full-stack developer with a passion for designing and developing applications. I love the challenge of creating something that people can use and enjoy. I'm eager to kick-start my career in the industry and I’m excited to be part of the online world that is constantly changing and evolving.
        </p>
        <p>
        I have a strong foundation in back-end development, with experience in JavaScript, Node.js, SQL, noSQL, and Express. I've also used HTML, CSS, and React to build several successful front-end applications. I enjoy learning new technologies and frameworks, and I'm always up for a challenge.
        </p>
        <p>
        In addition to my technical skills, I’m also highly motivated and results-oriented. I’m a quick learner and I’m always willing to go the extra mile. I’m also a team player who likes to ask questions and I’m always willing to help others. I have to say being part of a team that I can learn from and develop with is one of the things that I look forward to the most. 
        </p>
        <p>
        Outside of coding, I'm passionate about my family, gardening, and DIY projects. My wife and I recently started having kids and I’m really enjoying being a dad. In the garden, I grow a variety of fruits, vegetables, and flowers. As a homeowner, there are always new projects to take on and I enjoy the process of learning new skills.
        </p>
      </div>
    </section>
  );
}

export default About;
