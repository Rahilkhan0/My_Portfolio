import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        {/* <div className="hero-content">
          <h1>Hi, I'm <span>Rahil Khan</span></h1>
          <h2>Your Profession</h2>
          <p>A brief introduction about yourself and what you do.</p>
          <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
        </div> */}
        <div className="hero-content">
  <h1>Hi, I'm <span>Rahil Khan</span></h1>
  <h2>Full-Stack Java Developer </h2>
  <p>
    I'm a passionate full-stack java developer . I enjoy building scalable applications and learning new technologies.
  </p>
   <div className="cta-buttons">
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="#contact" className="btn btn-secondary">Contact Me</a>
          </div>
</div>

        <div className="hero-image">
          <img src="src/assets/images/image.png" alt="Developer illustration" />
        </div>
      </div>
    </section>
  );
};

export default Hero;