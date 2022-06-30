import type { NextPage } from 'next'
import Nav from '../components/Ui/Nav'
import Section from '../components/Sections/Section'
import PremiumSection from '../components/Sections/PremiumSection'


const Home: NextPage = () => {
  return <>
    <Nav />
    <Section />
    <PremiumSection/>
  </>
}

export default Home
