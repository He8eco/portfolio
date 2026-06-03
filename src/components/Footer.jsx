import mail from '../assets/images/icons/mail-footer.svg'
import telegram from '../assets/images/icons/telegram-footer.svg'
import gitHubLink from '../assets/images/icons/github-link-footer.svg'
import arrowTop from '../assets/images/icons/arrow-top.svg'

export function Footer() {
  return (
    <footer className="footer">
      <p className="footer-copy">
        © 2024 <span>HeBeco</span>
      </p>

      <div className="footer-links">
        <a href="#top">
          <img src={arrowTop} alt="" />
        </a>
        <a href="https://t.me/He8eco" target="_blank" rel="noopener noreferrer">
          <img src={telegram} alt="" />
        </a>
        <a
          href="https://github.com/He8eco"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={gitHubLink} alt="" />
        </a>
        <a href="mailto:He8eco@yandex.ru">
          <img src={mail} alt="" />
        </a>
      </div>

      <div className="footer-spacer"></div>
    </footer>
  )
}
