import classes from './PlanSection.module.css';
import PlanItem from '../Items/PlanItem';
import { PlanItemsData } from '../../Data/Data';
import StudentItem from '../Items/StudentItem';

const PlanSection: React.FC = () => {
	return (
		<section className={classes.section}>
			<article>
				<h2>Pick your Premium</h2>
				<h3>
					Listen without limits on your phone, speaker, and other devices.
				</h3>
				<div className={classes.plan_list}>
					{PlanItemsData.map((item) => (
						<PlanItem
							type={item.type}
							title={item.title}
							description={item.description}
							terms={item.terms}
							key={item.title}
							content={item.options}
						/>
					))}
				</div>
				<StudentItem/>
			</article>
		</section>
	);
};

export default PlanSection;
