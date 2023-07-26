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
              width: "30%",
              height: "auto",
            }}

          />        
        </div>
        <p>
        Hello!
        </p>
        <p>
        I'm Francisco Olivares Casillas, a full-stack web developer with a passion for building applications that make people's lives easier. I love the thrill of building something that people can use. Joining the online world, which is ever changing, is an exciting opportunity for me.       </p>
        <p>
        In my toolbox, I have expertise in JavaScript, Node.js, SQL, noSQL, and Express for back-end development. On the front-end, I've successfully used HTML, CSS, and React to craft user-friendly applications.         </p>
        <p>
        Besides being into tech, I'm highly motivated and results-oriented. I love learning, adapting quickly, and going the extra mile to deliver top-notch results. Coming from a sports background being a team player is my thing—I value learning from others and helping my teammates grow.        </p>
        <p>
        Beyond coding, I find joy in my family, gardening, and DIY projects. Embracing parenthood has been a beautiful journey, and I adore spending time with my daughter. In my garden, I cultivate a variety of fruits, veggies, and flowers. As a homeowner, I enjoy taking on new projects and learning new skills along the way.        </p>
        <p>
        I'm stoked to kick-start my career and collaborate with a dynamic team that encourages growth and creativity. Let's build amazing things together!
        </p>
      </div>
    </section>
  );
}

export default About;
