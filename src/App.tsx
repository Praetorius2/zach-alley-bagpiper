import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { MidImage } from './components/MidImage'
import { About } from './components/About'
import { Expect } from './components/Expect'
import { Inquire } from './components/Inquire'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focusable-skip focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:bg-night-deep focus:px-4 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Intro />
        <Services />
        <MidImage />
        <About />
        <Expect />
        <Inquire />
      </main>
      <Footer />
    </>
  )
}

export default App
