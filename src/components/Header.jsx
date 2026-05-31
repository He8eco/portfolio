import { useState } from 'react'

export function Header() {
  const [activeButton, setActiveButton] = useState('ru')

  return (
    <header>
      <a href="#" className="logo" aria-label="HeBeco">
        <span>HeB</span>
        <span className="logo-accent">eco</span>
      </a>
      <nav>
        <a href="#">Главная</a>
        <a href="#">Навыки</a>
        <a href="#">Проекты</a>
        <a href="#">Контакты</a>
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
