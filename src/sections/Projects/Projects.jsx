// import ProjectCard from '../../components/ProjectCard/ProjectCard';
// import './Projects.css';

// const Projects = () => {
//   // Replace with your actual projects
//   const projects = [
//     {
//       title: 'E-commerce Website',
//       description: 'A full-featured online store with cart functionality and payment integration.',
//       tags: ['React', 'Node.js', 'MongoDB'],
//       image: '/assets/images/project1.jpg',
//       links: {
//         demo: '#',
//         code: '#'
//       }
//     },
//     {
//       title: 'Task Management App',
//       description: 'A productivity application for organizing daily tasks with drag-and-drop interface.',
//       tags: ['React', 'Firebase', 'Material UI'],
//       image: '/assets/images/project2.jpg',
//       links: {
//         demo: '#',
//         code: '#'
//       }
//     },
//     {
//       title: 'Weather Dashboard',
//       description: 'Real-time weather information with 5-day forecast using weather API.',
//       tags: ['JavaScript', 'API', 'CSS'],
//       image: '/assets/images/project3.jpg',
//       links: {
//         demo: '#',
//         code: '#'
//       }
//     }
//   ];

//   return (
//     <section id="projects" className="projects">
//       <div className="container">
//         <h2 className="section-title">My Projects</h2>
//         <div className="projects-grid">
//           {projects.map((project, index) => (
//             <ProjectCard 
//               key={index}
//               title={project.title}
//               description={project.description}
//               tags={project.tags}
//               image={project.image}
//               links={project.links}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;\

// For named export version
import { ProjectCard } from '../../components/ProjectCard/ProjectCard';

// OR for default export version
// import ProjectCard from '../../components/ProjectCard/ProjectCard';
import portfolioImage from '../../assets/images/portfolio.jpeg';
import recoImage from '../../assets/images/Recommendationsystem.png';
import ratingAppImage from '../../assets/images/User.png';

const Projects = () => {
  const projects = [
    {
      title: 'Portfolio Website',
      description: 'A professional portfolio built with React and Vite showcasing my projects and skills.',
      tags: ['React', 'Vite', 'CSS'],
      image: portfolioImage,
      links: {
        demo: 'https://yourportfolio.com',
        code: 'https://github.com/yourusername/portfolio'
      }
    },
    {
      title: 'Ecommerce Recommendation System',
      description: 'An Ecomerce Application with inbuilt recommendation system.',
      tags: ['React', 'Flask', 'MAchine Learning'],
      image: recoImage ,
      links: {
        demo: 'https://github.com/Rahilkhan0/Ecommerce-Product-Recommendation-System/tree/master',
        code: 'https://github.com/Rahilkhan0/Ecommerce-Product-Recommendation-System/tree/master'
      }
    },
    {
      title: 'Store Rating App',
      description: ' An rating application for stores with a user-friendly interface.',
      tags: ['Node.js', 'Express', 'MySql' ],
      image:  ratingAppImage,
      links: {
        demo: 'https://github.com/Rahilkhan0/Store-Rating-Application-',
        code: 'https://github.com/Rahilkhan0/Store-Rating-Application-'
      }
    },
    

 
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">My Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Projects;