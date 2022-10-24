import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  
  return (
    <div>
      <Head>
        <title>Brendan | iOS Developer</title>
        <meta name="description" content="I'm a mobile developer specializing in developing and designing apps." />
        <link rel="icon" href="/favicon.ico" />
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    <Contact />
    </div>
  )
}