import { useState } from 'react'

export function Header() {
  const [activeButton, setActiveButton] = useState('ru')

  return (
    <header id="top">
      <a href="#top" className="logo" aria-label="HeBeco">
        <span>HeB</span>
        <span className="logo-accent">eco</span>
      </a>
      <nav>
        <a href="#top">Главная</a>
        <a href="#skills">Навыки</a>
        <a href="#projects">Проекты</a>
        <a href="#contacts">Контакты</a>
      </nav>
      <div className="languages">
        <button
          type="button"
          className={activeButton === 'ru' ? 'active' : ''}
          onClick={() => setActiveButton('ru')}
        >
          ru
        </button>
        /
        <button
          type="button"
          className={activeButton === 'en' ? 'active' : ''}
          onClick={() => setActiveButton('en')}
        >
          en
        </button>
      </div>
    </header>
  )
}
