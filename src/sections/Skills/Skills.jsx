import SkillBadge from '../../components/SkillBadge/SkillBadge';
import './Skills.css';

const Skills = () => {
  // Replace with your actual skills
  const skills = [
    { name: 'Spring Boot', level: 80 },
    { name: ' core and Advance Java', level: 90 },
    { name: 'React', level: 75 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'Node.js', level: 80 },
    { name: 'JavaScript', level: 85 },
    { name: 'SQL', level: 70 },
    { name: 'Git', level: 85 },
    { name: 'MongoDb', level: 90 },
    { name: 'UI/UX Design', level: 70 },
    { name: 'Python', level: 80 },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <SkillBadge 
              key={index} 
              name={skill.name} 
              level={skill.level} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;