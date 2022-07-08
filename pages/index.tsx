import type { NextPage } from 'next';
import Nav from '../components/Ui/Nav';
import Footer from '../components/Ui/Footer';
import Section from '../components/index_page_components/Sections/Section';
import PlanSection from '../components/index_page_components/Sections/PlanSection';
import PremiumSection from '../components/index_page_components/Sections/PremiumSection';

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
