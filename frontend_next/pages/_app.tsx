import '../styles/globals.css'
import '../styles/App.scss'
import './components/Navbar/Navbar.scss';
import './containers/Header/Header.scss';
import './containers/About/About.scss';
import './containers/Footer/Footer.scss';
import './containers/Skills/Skills.scss';
import './containers/Testimonials/Testimonials.scss';
import './containers/Work/Work.scss';

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
