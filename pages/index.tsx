import type { NextPage } from 'next';
import Nav from '../components/Ui/Nav';
import Section from '../components/index_page_components/Sections/Section';
import PremiumSection from '../components/index_page_components/Sections/PremiumSection';
import PlanSection from '../components/index_page_components/Sections/PlanSection';

const Home: NextPage = () => {
	return (
		<>
			<Nav />
			<Section />
			<PremiumSection />
			<PlanSection />
		</>
	);
};

export default Home;
