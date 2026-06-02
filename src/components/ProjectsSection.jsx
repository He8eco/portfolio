import artPlast from '../assets/images/art-plast.png'
import biomech from '../assets/images/biomech.png'
import gameexplorer from '../assets/images/gameexplorer.png'
import gitHubLink from '../assets/images/icons/github-link.svg'
import web from '../assets/images/icons/web.svg'

export function ProjectsSection() {
  const projects = [
    {
      name: 'Арт-Пласт',
      cover: artPlast,
      type: 'Коммерческий',
      description:
        'Интернет-магазин, разработанный с нуля на React и Firebase. Каталог товаров, детальные карточки, фильтрация, адаптивный дизайн и удобный интерфейс.',
      tags: ['React', 'Firebase', 'Tailwind CSS', 'React Router'],
      web: 'https://art-plast-vakansiya.vercel.app/',
      github: 'https://github.com/He8eco/art-plast-vakansiya',
    },
    {
      name: 'Biomech',
      cover: biomech,
      type: 'Учебный проект',
      description:
        'Участие в проекте BioMech, где я занимался реализацией прототипов дизайнов из Figma в код, дорабатывая дизайны страниц и добавляя функциональные элементы (функционал писал на ванильном JS), анимации и адаптируя плагины для специфических задач.',
      tags: ['JS', 'HTML', 'CSS', 'Canvas'],
      github: 'https://github.com/NadezhdaVoskan/BioMech',
    },
    {
      name: 'Game Explorer',
      cover: gameexplorer,
      type: 'Учебный проект',
      description:
        'Каталог фильмов с поиском, фильтрацией и сортировкой. Получение данных из Supabase, добавление в избранное и адаптивный интерфейс.',
      tags: ['React', 'Supabase', 'React Router'],
      web: 'https://game-explorer-ivory.vercel.app/',
      github:
        'https://github.com/He8eco/frontend-workflow-lab/tree/main/game-explorer',
    },
  ]

  return (
    <section className="section">
      <h3 className="section-header">Мои проекты</h3>
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
