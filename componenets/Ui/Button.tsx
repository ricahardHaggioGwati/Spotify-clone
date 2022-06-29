import classes from './Button.module.css';

interface Prop {
	text: string;
	color: boolean;
}

const Button: React.FC<Prop> = ({ text, color }) => {
	return (
		<button
			className={`${classes.button} ${color ? classes.black : classes.blue}`}
		>
			{text}
		</button>
	);
};

export default Button;
