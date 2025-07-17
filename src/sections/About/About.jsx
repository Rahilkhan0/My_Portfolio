import './About.css';
import myimg from '../../assets/images/IMG_1282.jpg';
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm Rahil Khan, a dedicated full-stack java developer with a strong focus on backend development using <strong>Spring Boot</strong>.
              I enjoy designing scalable, secure, and efficient backend systems that power modern web applications.
            </p>
           
            
            
          </div>
          <div className="about-image">
            <img src={myimg} alt="Rahil Khan" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
