import { Hero } from '../components/Hero'
import { Intro } from '../components/Intro'
import { Services } from '../components/Services'
import { MidImage } from '../components/MidImage'
import { About } from '../components/About'
import { Expect } from '../components/Expect'
import { Inquire } from '../components/Inquire'
import { PageMeta } from '../components/PageMeta'

export function HomePage() {
  return (
    <>
      <PageMeta
        title="Zach Alley — Highland Bagpiper | Denver & Boulder"
        description="Professional Highland bagpiper based in Denver and Boulder. Funerals, memorials, weddings, ceremonies, and events across Colorado’s Front Range and beyond."
        path="/"
        ogImage="flatirons"
      />
      <Hero />
      <Intro />
      <Services />
      <MidImage />
      <About />
      <Expect />
      <Inquire />
    </>
  )
}
