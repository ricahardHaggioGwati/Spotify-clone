import classes from './Button.module.css';

interface Prop {
	text: string;
}

const Button: React.FC<Prop> = (props) => {
	return <button className={`${classes.button}`}>{props.text}</button>;
};

export const ButtonT: React.FC<Prop> = (props) => {
	return <button className={classes.buttonT}>{props.text}</button>;
};

export default Button;
