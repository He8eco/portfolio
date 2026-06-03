import mail from '../assets/images/icons/mail.svg'
import telegram from '../assets/images/icons/telegram.svg'
import gitHubLink from '../assets/images/icons/github-link.svg'
import info from '../assets/images/icons/info.svg'

export function ContactsSection() {
  const contacts = [
    {
      icon: mail,
      type: 'Email',
      address: 'He8eco@yandex.ru',
      annotation: 'Отвечу в ближайшее время',
      link: 'mailto:He8eco@yandex.ru',
    },
    {
      icon: telegram,
      type: 'Telegram',
      address: 't.me/He8eco',
      annotation: 'Быстрая связь и обсуждение',
      link: 'https://t.me/He8eco',
      target: true,
      rel: true,
    },
    {
      icon: gitHubLink,
      type: 'GitHub',
      address: 'github.com/He8eco',
      annotation: 'Код и проекты',
      link: 'https://github.com/He8eco',
      target: true,
      rel: true,
    },
  ]

  return (
    <section id="contacts" className="contacts">
      <div className="cooperation">
        <div className="cooperation-info">
          <div className="cooperation-info-image">
            <img src={mail} alt="" />
          </div>
          <div className="cooperation-info-text">
            <p>
              Давайте создадим <br />
              что-то классное вместе
            </p>
            <p>
              Открыт к интересным проектам
              <br />и сотрудничеству
            </p>
          </div>
        </div>
        <a
          href="https://t.me/He8eco"
          target="_blank"
          rel="noopener noreferrer"
          className="button-contact blue"
        >
          Связаться со мной →
        </a>
      </div>
      <div className="contacts-list">
        {contacts.map((contact) => (
          <a
            href={contact.link}
            target={contact.target ? '_blank' : ''}
            rel={contact.rel ? 'noopener noreferrer' : ''}
            className="contact-block"
          >
            <img src={contact.icon} alt="" />
            <div className="contact-info">
              <p>{contact.type}</p>
              <p className="contact-address">{contact.address}</p>
              <p>{contact.annotation}</p>
            </div>
            <span className="arrow">→</span>
          </a>
        ))}
      </div>
      <div className="phone">
        <img src={info} alt="" />
        <div className="phone-info">
          <p className="contact-address">Телефон по запросу</p>
          <p>Напишите любым удобным способом, и я свяжусь с вами</p>
        </div>
      </div>
    </section>
  )
}
