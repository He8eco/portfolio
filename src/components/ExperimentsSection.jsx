import naturalForest from '../assets/images/natural-forest.png'
import grow from '../assets/images/grow.png'
import gitHubLink from '../assets/images/icons/github-link.svg'
import web from '../assets/images/icons/web.svg'

export function ExperimentsSection() {
  const projects = [
    {
      name: 'Natural Forest',
      cover: naturalForest,
      type: 'Учебный проект',
      description:
        'Практический лендинг, созданный по обучающему видео для изучения 3D-эффекта и композиции интерфейса.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Animation', '3D-effect'],
      web: 'https://natural-forest-tan.vercel.app/',
      github: 'https://github.com/He8eco/natural-forest',
    },
    {
      name: 'Grow',
      cover: grow,
      type: 'Учебный проект',
      description:
        'Практический лендинг с анимациями, созданный по обучающему видео для изучения scroll-анимаций, transitions и композиции интерфейса.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Animation', 'Swiper'],
      web: 'https://grow-lesson.vercel.app/',
      github: 'https://github.com/He8eco/grow-lesson',
    },
  ]

  return (
    <section id="projects" className="section">
      <h3 className="section-header">Практика / UI эксперименты</h3>
      <div className="section-projects">
        {projects.map((project) => (
          <div className="section-project">
            <img className="section-project-cover" src={project.cover} alt="" />
            <div className="project-info">
              <span className="type-project">{project.type}</span>
              <p className="project-info-name">{project.name}</p>
              <p className="project-description">{project.description}</p>
              <ul className="section-list">
                {project.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
              <div className="project-links">
                {project.web ? (
                  <a
                    className="project-link"
                    href={project.web}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={web} alt="" />
                    Сайт
                  </a>
                ) : (
                  <></>
                )}
                {project.github ? (
                  <a
                    className="project-link"
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={gitHubLink} alt="" />
                    GitHub
                  </a>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
