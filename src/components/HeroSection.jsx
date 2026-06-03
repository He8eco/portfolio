import heroImage from '../assets/images/hero-images.svg'
import css from '../assets/images/icons/css.svg'
import git from '../assets/images/icons/git.svg'
import html from '../assets/images/icons/html.svg'
import js from '../assets/images/icons/js.svg'
import supabase from '../assets/images/icons/sb.svg'
import react from '../assets/images/icons/react.svg'

export function HeroSection() {
  const skills = [
    { name: 'React', icon: react },
    { name: 'JavaScript', icon: js },
    { name: 'HTML', icon: html },
    { name: 'CSS', icon: css },
    { name: 'Supabase', icon: supabase },
    { name: 'Git', icon: git },
  ]

  return (
    <section className="hero">
      <div className="hero-intro">
        <div>
          <div className="hero-status">
            <span className="hero-status-dot"></span>
            <span>Доступен для новых проектов</span>
          </div>
          <h2 className="hero-title">
            Привет, я <span>Иван</span>
          </h2>
          <p className="hero-subtitle">Frontend-разработчик.</p>
          <p className="hero-description">
            Делаю аккуратные, современные и удобные <br />
            интерфейсы, которые решают задачи бизнеса.
          </p>
        </div>
        <img className="hero-image" src={heroImage} alt="heroImages" />
      </div>
      <ul className="hero-skills">
        {skills.map((skill) => (
          <li className="hero-skill" key={skill.name}>
            <img className="hero-skill-icon" src={skill.icon} alt="" />
            <span>{skill.name}</span>
          </li>
        ))}
      </ul>
      <div className="hero-buttons">
        <a href="#projects" className="button-contact blue">
          Посмотреть проекты
        </a>
        <a href="#contacts" className="button-contact">
          ✉ Связаться
        </a>
      </div>
    </section>
  )
}
