import type { NextPage } from 'next';
import Nav from '../components/Ui/Nav';
import Footer from '../components/Ui/Footer';
import Section from '../components/Home/Sections/Section';
import PlanSection from '../components/Home/Sections/PlanSection';
import PremiumSection from '../components/Home/Sections/PremiumSection';

const Home: NextPage = () => {
	return (
		<>
			<Nav />
			<Section />
			<PremiumSection />
			<PlanSection />
			<Footer />
		</>
	);
};

export default Home;
