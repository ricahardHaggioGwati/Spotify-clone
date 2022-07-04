import classes from './StudentItem.module.css';
import { WhiteButton } from '../Ui/Button';

const StudentItem: React.FC = () => {
	return (
		<ul className={classes.student_plan_container}>
			<li className={classes.student_plan_item}>
				<h3>Students get Premium free for 1 month</h3>
				<div>
					<WhiteButton text='Learn more'/>
				</div>
			</li>
		</ul>
	);
};

export default StudentItem;
