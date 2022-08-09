import classes from './PremiumSection.module.css';
import PremiumItem from '../Items/PremiumItem';
import { PremiumItemsData } from '../../Data/Data';

const PremiumSection = () => {
	return (
		<section className={classes.premium_section}>
			<article className={classes.premium_content}>
				<header className={classes.premium_header}>
					<h2>Why go Premium?</h2>
				</header>
				<ul className={classes.premium_list}>
					{PremiumItemsData.map((item) => (
						<PremiumItem
							key={item.id}
							image={item.image}
							text={item.text}
							title={item.title}
						/>
					))}
				</ul>
			</article>
		</section>
	);
};

export default PremiumSection;
