import react from '../assets/images/icons/react2.svg'
import cube from '../assets/images/icons/cube.svg'
import code from '../assets/images/icons/code.svg'

export function SkillsSection() {
  const skills = [
    {
      name: 'Frontend Development',
      icon: code,
      description:
        'Вёрстка и разработка адаптивных, быстрых и доступных интерфейсов.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Vite', 'Figma', 'Animation'],
    },
    {
      name: 'React & UI',
      icon: react,
      description:
        'Разработка SPA на React. Компонентный подход, состояния, маршрутизация, оптимизация.',
      tags: ['React', 'Redux Toolkit', 'React Router', 'Tailwind'],
    },
    {
      name: 'API / CMS / Tools',
      icon: cube,
      description:
        'Работа с API, базами данных, CMS, деплоем и инструментами контроля версий.',
      tags: ['Supabase', 'Firebase', 'WordPress', 'GitHub', 'Vercel'],
    },
  ]

  return (
    <section id="skills" className="section">
      <h3 className="section-header">Мои навыки</h3>
      <div className="section-skills">
        {skills.map((skill) => (
          <div className="section-skill">
            <div className="section-skill-title">
              <img src={skill.icon} alt="" />
              <span>{skill.name}</span>
            </div>
            <p className="section-skill-description">{skill.description}</p>
            <ul className="section-list">
              {skill.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
