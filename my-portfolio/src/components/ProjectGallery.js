import { projects } from "../data/projects";
import { useState } from "react";

const ProjectGallery = () => {
    const [filter, setFilter] = useState("All");

    const filteredProjects = projects.filter((project) =>
        filter === "All" ? true : project.category === filter
    );

    return (
        <section className="project-gallery">
            <h2>My Projects</h2>
            <div className="filter-buttons">
                {["All", "AI", "Automation"].map((category) => (
                    <button key={category} onClick={() => setFilter(category)}>
                        {category}
                    </button>
                ))}
            </div>
            <div className="project-list">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">
                            View Project
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ProjectGallery;
