import type { NextPage } from 'next'
import Nav from '../components/Ui/Nav'
import Section from '../components/Sections/Section'
import PremiumSection from '../components/Sections/PremiumSection'
import PlanSection from '../components/Sections/PlanSection'

const Home: NextPage = () => {

  return <>
    <Nav />
    <Section />
    <PremiumSection />
    <PlanSection />
  </>
}

export default Home
