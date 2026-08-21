import Logo from '../Logo'

import * as S from './styles'

const socials = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com',
    path: 'M12 2.2c3.2 0 3.6 0 4.9.07 1.2.05 1.8.25 2.2.42.6.22 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c0 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2 0-1.8-.2-2.2-.4a3.9 3.9 0 0 1-1.4-.9c-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c0-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2Zm0 5.3a4.5 4.5 0 1 0 0 9 4.5 4.5 0 0 0 0-9Zm0 7.4a2.9 2.9 0 1 1 0-5.8 2.9 2.9 0 0 1 0 5.8Zm5.7-7.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z'
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com',
    path: 'M13.5 21.9v-8.1h2.7l.4-3.2h-3.1V8.6c0-.9.3-1.6 1.6-1.6h1.6V4.1c-.3 0-1.3-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v2.4H7.5v3.2h2.7v8.1h3.3Z'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com',
    path: 'M21.5 6.4c-.7.3-1.5.6-2.3.7a3.6 3.6 0 0 0 1.6-2 7.3 7.3 0 0 1-2.3.9 3.6 3.6 0 0 0-6.2 3.3A10.3 10.3 0 0 1 4.8 5.4a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.2-.2-1.6-.4a3.6 3.6 0 0 0 2.9 3.6c-.6.2-1.2.2-1.7.1a3.6 3.6 0 0 0 3.4 2.5A10.3 10.3 0 0 1 3 18.1a14.6 14.6 0 0 0 7.9 2.3c9.5 0 14.7-8 14.4-15.2-.7.5-1.3 1-1.8 1.2Z'
  }
]

const Footer = () => (
  <S.Wrapper>
    <div className="container">
      <Logo />
      <S.Socials>
        {socials.map((social) => (
          <li key={social.name}>
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.name}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d={social.path} />
              </svg>
            </a>
          </li>
        ))}
      </S.Socials>
      <S.Disclaimer>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </S.Disclaimer>
    </div>
  </S.Wrapper>
)

export default Footer
