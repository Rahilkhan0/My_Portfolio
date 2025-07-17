import './SkillBadge.css';

const SkillBadge = ({ name, level }) => {
  return (
    <div className="skill-badge">
      <div className="skill-info">
        <span className="skill-name">{name}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBadge;