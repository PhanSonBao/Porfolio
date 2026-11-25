export default function ProjectCard({ project, copy }) {
  return (
    <article id={project.id} className={project.featured ? 'project-card featured' : 'project-card'} aria-labelledby={project.id + '-title'}>
      <p className="eyebrow">{project.category}</p>
      <h3 id={project.id + '-title'}>{project.title}</h3>
      <p>{project.description}</p>
      <ul className="tech-list" aria-label={copy.technologies}>
        {project.tech.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      {project.modules && (
        <ul className="module-list" aria-label={copy.modules}>
          {project.modules.map((module) => <li key={module}>{module}</li>)}
        </ul>
      )}
      <div className="contribution">
        <h4>{copy.contribution}</h4>
        <p>{project.contribution}</p>
      </div>
      <details className="case-study">
        <summary>{copy.caseStudy}</summary>
        <dl>
          <dt>{copy.problem}</dt>
          <dd>{project.problem}</dd>
          <dt>{copy.implementation}</dt>
          <dd>{project.implementation}</dd>
        </dl>
        {project.dependencies && (
          <figure className="architecture">
            <figcaption>{copy.dependencies}</figcaption>
            <ul>
              {project.dependencies.map(([layer, dependency]) => (
                <li key={layer + dependency}>
                  <span>{layer}</span>
                  <span className="dependency-arrow" aria-label={copy.dependsOn}>→</span>
                  <span>{dependency}</span>
                </li>
              ))}
            </ul>
          </figure>
        )}
      </details>
    </article>
  )
}

