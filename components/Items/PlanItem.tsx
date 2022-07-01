import { Fragment } from 'react';
import Link from 'next/link';
import classes from './PlanItem.module.css';
import Button from '../Ui/Button';
import SvgTickComponenet from '../Ui/SvgTickComponenet';

interface Item {
	type: string[];
	title: string;
	description: string[];
	terms: { hyperLink: string; text: string }[];
	content: string[];
}

const PlanItem: React.FC<Item> = ({
	type,
	title,
	description,
	terms,
	content,
}) => {
	let span: boolean;

	if (type.length === 1) {
		span = false;
	} else {
		span = true;
	}

	return (
		<Fragment>
			<div className={classes.plan_head}>
				<ul>
					{span && <li className={classes.plan_blue_list}>{type[1]}</li>}
					<li className={classes.plan_plain_list}>{type[0]}</li>
				</ul>
				<h3 className={classes.plan_title}>{title}</h3>
				<p className={classes.first_description}>{description[0]}</p>
				<p className={classes.second_description}>{description[1]}</p>
				<hr className={classes.rule}></hr>
			</div>
			<ul className={classes.list_option}>
				{content.map((item) => (
					<li key={Math.random.toString() + item}>
						<div>
							<SvgTickComponenet className={classes.list_tick} />
						</div>
						<p>{item}</p>
					</li>
				))}
			</ul>
			<div className={classes.button_container}>
				<Button text='Get started' color={true} />
			</div>
			{terms.map((item) => (
				<div className={classes.terms_container}>
					<p>
						<a>{item.hyperLink}</a>
						{item.text}
					</p>
				</div>
			))}
		</Fragment>
	);
};

export default PlanItem;
