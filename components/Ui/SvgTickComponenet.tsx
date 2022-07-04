interface Props {
	className: string;
}

const SvgTickComponenet: React.FC<Props> = ({ className }) => {
	return (
		<svg
			className={className}
			width='20'
			height='22'
			xmlns='http://www.w3.org/2000/svg'
			fillRule='evenodd'
			clipRule='evenodd'
		>
			<path d='M24 4.685l-16.327 17.315-7.673-9.054.761-.648 6.95 8.203 15.561-16.501.728.685z' />
		</svg>
	);
};
export default SvgTickComponenet;
