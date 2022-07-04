import classes from './Button.module.css';

interface Prop {
	text: string;
}

const BlackButton: React.FC<Prop> = ({ text }) => {
	return (
		<button className={`${classes.button} ${classes.black}`}>{text}</button>
	);
};

export const BlueButton: React.FC<Prop> = ({ text }) => {
	return (
		<button className={`${classes.button} ${classes.blue}`}>{text}</button>
	);
};

export const WhiteButton: React.FC<Prop> = ({ text }) => {
	return (
		<button className={`${classes.button} ${classes.white}`}>{text}</button>
	);
};


export default BlackButton;
