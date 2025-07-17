import './ProjectCard.css';

export const ProjectCard = ({ title, description, tags, image, links }) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={image} alt={title} />
      </div>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
        <div className="project-links">
          {links.demo && (
            <a href={links.demo} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo
            </a>
          )}
          {links.code && (
            <a href={links.code} target="_blank" rel="noopener noreferrer" className="project-link">
              View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
export default ProjectCard;