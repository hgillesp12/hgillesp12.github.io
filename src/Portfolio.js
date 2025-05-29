import React, { useState } from 'react';
import './Portfolio.css';
import seaweedImage from './images/projects/seaweed/seaweed.png'; // Placeholder image
import droneImage from './images/projects/drone/drone.png'; // Placeholder image
import biosandFilterImage from './images/projects/biosand/biosand.png'; // Placeholder image
import esortitionImage from './images/projects/esortition/esortition.png'; // Placeholder image
import bosImage from './images/projects/bos/bos.png'; // Placeholder image
import seniorDesignImage from './images/projects/senior_design/senior_design.png'; // Placeholder image
import dbfImage from './images/projects/dbf/dbf.png'; // Placeholder image
import charityImage from './images/projects/charity/charity.png'; // Placeholder image
import surveyImage from './images/projects/survey/survey.png'; // Placeholder image

// https://flagcdn.com/en/codes.json

const projects = [
  {
    id: 1,
    title: "Sustainable Seaweed Farming (Coming August 2025)",
    image: seaweedImage, // Add your project images
    description: "On-going thesis at the University of Cambridge assessing current practices and pathways for sustainable, equitable growth in the seaweed industry.",
    tags: ["Causal Loop Diagram", "Sustainability", "Resilience"],
    buttons: [
      { text: "MPhil Course", url: "https://www-esdmphil.eng.cam.ac.uk/" },
      { text: "Hatch Seaweed Insights", url: "https://seaweedinsights.com/" },
      { text: "World Bank Report", url: "https://www.worldbank.org/en/topic/environment/publication/global-seaweed-new-and-emerging-markets-report-2023" }
    ],
    locations: [
      { name: "United Kingdom", code: "gb" },
      { name: "Philippines", code: "ph" },
      { name: "Tanzania", code: "tz" }
    ]
  },
  {
    id: 2,
    title: "Drone-Based Oak Monitoring",
    image: droneImage, // Add your project images
    description: "Developed deep learning algorithm ROS2 and Python for use by an unmanned aerial vehicle (UAV) to inspect trees for Acute Oak Decline (AOD). Distinction-level thesis at Imperial College London for the MSc in Computing.",
    tags: ["Robotics", "ROS2", "RViz", "Python", "Deep Learning", "YOLOv5"],
    buttons: [
      { text: "GitHub", url: "https://github.com/hgillesp12/aod_detection" },
      { text: "Presentation", url: "https://drive.google.com/file/d/1Ef2tnZcB19WXntpJwtl0GVi0ranJ10DQ/view?usp=sharing" },
      { text: "AOD Background", url: "https://www.forestresearch.gov.uk/tools-and-resources/fthr/pest-and-disease-resources/acute-oak-decline/" }
    ],
    locations: [
      { name: "United Kingdom", code: "gb" }
    ]
  },
  {
    id: 3,
    title: "Low-Cost Biosand Filter",
    image: biosandFilterImage, // Add your project images
    description: "Community-led development to create a low-cost, effective biosand filter for clean drinking water in Léogâne, Haiti. The five-gallon bucket frame design could be made at 50% cost to traditional concrete-framed designs. A franchise model for distribution was proposed, although the project was discontinued in 2020 due to political unrest.",
    tags: ["Design Thinking", "Survey", "Focus Groups", "Community Engagement", "Brainstorming Sessions"],
    buttons: [
      { text: "Full Report", url: "https://drive.google.com/file/d/1czG3Y70wmantKdLoLGAqWXtHatk_hEoD/view?usp=sharing" },
      { text: "Technical Drawings", url: "https://drive.google.com/file/d/14y5yQC43v9PzKJDg2grmD1mpmC8Bhmp7/view?usp=sharing" },
      { text: "Animation", url: "https://drive.google.com/file/d/1CZxzM0aOFClfZxVuxBSNP3Ysvg0ea4_5/view?usp=sharing" }
    ],
    locations: [
      { name: "United States", code: "us" },
      { name: "Haiti", code: "ht" }
    ]
  },
  {
    id: 4,
    title: "Hypersonic Wind Tunnel Research",
    image: bosImage, // Add your project images
    description: "Proved feasibility of background oriented schlieren (BOS) to capture flow visualisation around test models in the new Mach-6 quiet wind tunnel at the University of Notre Dame. The project involved using MATLAB to process images from a high-speed camera and extract velocity fields, demonstrating the potential of BOS for hypersonic flow visualisation.",
    tags: ["Particle Image Velocimetry (PIV)", "Background oriented schlieren (BOS)", "MATLAB", "Flow Visualisation"],
    buttons: [
      { text: "Research Paper", url: "https://arc.aiaa.org/doi/10.2514/6.2023-0119" },
      { text: "Hypersonic Lab Profile", url: "https://hyperlab.nd.edu/people/alumni/hannah-gillespie/" }
    ],
    locations: [
      { name: "United States", code: "us" }
    ]
  },
  {
    id: 5,
    title: "eSortition Voting Platform",
    image: esortitionImage, // Add your project images
    description: "Secure digital voting platform developed with a microservices architecture fully containerized with Docker and deployed on Azure. The platform allows for secure, transparent, and efficient voting processes.",
    tags: ["Docker", "Azure", "Python", "Flask", "React"],
    buttons: [
      { text: "GitHub", url: "https://github.com/Diveenaa/esortition" },
      { text: "Video Demo", url: "https://youtu.be/Sb_yrYrNDhg" }
    ],
    locations: [
      { name: "United Kingdom", code: "gb" }
    ]
  },
  {
    id: 6,
    title: "Traction-Control Robotic System",
    image: seniorDesignImage, // Add your project images
    description: "Designed, built, and tested a 21-lb autonomous vehicle capable of pushing a 30-lb payload 20 feet without skid marks, using custom control systems, electromagnet-assisted traction, and a sub-$600 budget.",
    tags: ["Robotics", "Arduino", "C++", "Control Systems", "Electromagnetics"],
    buttons: [
      { text: "Video Demo", url: "https://drive.google.com/file/d/1GYNr6dypYQGQq9SWQrkW-YzpdyFPahvY/view?usp=sharing" },
      { text: "Design Review", url: "https://drive.google.com/file/d/115TV99K-x2Gc8fvURLIITKRNasJYgHf2/view?usp=sharing" }
    ],
    locations: [
      { name: "United States", code: "us" }
    ]
  },
  {
    id: 7,
    title: "Remote-Controlled Aircraft",
    image: dbfImage, // Add your project images
    description: "Led a 25-member team through the full design cycle of a remote-controlled aircraft for AIAA’s international DBF competition—transforming club operations, mentoring structure, and engineering execution to achieve a top-10 finish out of 100+ teams worldwide.",
    tags: ["Electronics", "Solidworks", "Electromagnetics"],
    buttons: [
      { text: "Full Report", url: "https://drive.google.com/file/d/1OU95OOhbe32pR-RaA1aHBs5tMj-fM58F/view?usp=sharing" },
      { text: "Technical Drawings", url: "https://drive.google.com/file/d/12KU2RujG9uUftM-dT-3UUJWWC5lvG_Zc/view?usp=sharing" },
      { text: "Website", url: "https://sites.nd.edu/aiaa-club/dbf/" }
    ],
    locations: [
      { name: "United States", code: "us" }
    ]
  },
  {
    id: 8,
    title: "Charity Collaboration Platform",
    image: charityImage, // Add your project images
    description: "UnityImpact is a web platform that strengthens collaboration among charities through shared scheduling, citywide bulletins, and an interactive map. Built with Python, HTML, and Postgres, it integrates with the Charity Commission API and is deployed via GitHub Actions to Vercel, with automated testing using PyTest to ensure reliability.",
    tags: ["HTML", "Python", "Postgres", "GitHub Actions", "Vercel", "PyTest"],
    buttons: [
      { text: "GitHub", url: "https://github.com/hgillesp12/charity_platform" },
      { text: "Live App", url: "https://charity-platform-sigma.vercel.app/" },
      { text: "Report", url: "https://drive.google.com/file/d/1B7oR_Z9AkdZBovvZ32BaQJnIjA370t3v/view?usp=sharing" }
    ],
    locations: [
      { name: "United Kingdom", code: "gb" }
    ]
  },
  {
    id: 9,
    title: "Haiti Housing Survey",
    image: surveyImage, // Add your project images
    description: "Conducted NSF-funded field research on post-disaster homeowner behavior in Haiti, designing a 60+ question Creole-language survey and training local teams to implement it, resulting in 1,392 responses to inform community resilience strategies.",
    tags: ["Fulcrum", "Random Surveying", "Data Processing", "Data Analysis"],
    buttons: [
      { text: "Conference Paper", url: "https://drive.google.com/file/d/1yjBAS4F-QQt9T5p3Q2IfQ4JJ6h0AEZsq/view?usp=sharing" }
    ],
    locations: [
      { name: "United States", code: "us" },
      { name: "Haiti", code: "ht" }
    ]
  },
  // Add more projects here
];

function ProjectModal({ project, onClose }) {
  const handleOverlayClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="project-modal">
        {project.buttons && project.buttons.length > 0 && (
          <div className="modal-button-panel">
            {project.buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                className="modal-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {button.text}
              </a>
            ))}
          </div>
        )}

        <div className="project-content">
          <button className="modal-close" onClick={onClose}>&times;</button>
          <h2>{project.title}</h2>
          <img src={project.image} alt={project.title} />
          <p>{project.description}</p>
          
          <div className="project-tags">
            {project.tags.map(tag => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {project.locations && (
          <div className="project-flags">
            {project.locations.map((location, index) => (
              <div key={index} className="project-location">
                <img 
                  src={`https://flagcdn.com/${location.code}.svg`} 
                  alt={location.name} 
                />
                <span>{location.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="portfolio-section">
      <h3>Portfolio</h3>
      <div className="portfolio-grid">
        {projects.map(project => (
          <div
            key={project.id}
            className="portfolio-tile"
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="tile-overlay">
              <h3>{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Portfolio;