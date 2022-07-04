import { Fragment } from 'react';
import Link from 'next/link';
import classes from './PlanItem.module.css';
import BlackButton  from '../../Ui/Button';
import SvgTickComponenet from '../../Ui/SvgTickComponenet';

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
				<ul className={classes.plan_list}>
					{span && <li className={classes.plan_blue_list}>{type[1]}</li>}
					<li className={classes.plan_white_list}>{type[0]}</li>
				</ul>
				<h3>{title}</h3>
				<p className={classes.first_description}>{description[0]}</p>
				<p className={classes.second_description}>{description[1]}</p>
				<hr className={classes.rule}></hr>
			</div>
			<ul className={classes.list_option}>
				{content.map((item) => (
					<li key={Math.random.toString() + item}>
						<div className={classes.list_svg}>
							<SvgTickComponenet className={classes.list_tick} />
						</div>
						<p>{item}</p>
					</li>
				))}
			</ul>
			<div className={classes.button_container}>
					<BlackButton text='Get started'/>
			</div>
			{terms.map((item) => (
				<div className={classes.terms_container}>
					<p>
						<Link href='/'>{item.hyperLink}</Link>
						{item.text}
					</p>
				</div>
			))}
		</Fragment>
	);
};

export default PlanItem;
