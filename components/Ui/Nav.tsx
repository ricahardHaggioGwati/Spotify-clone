import classes from './Nav.module.css';
import Link from 'next/link';
import SvgLogoComponent from './Svg/Logo';
import MobileNav from './MobileNav';

const Nav: React.FC = () => {
	return (
		<div className={classes.nav_container}>
			<nav className={classes.nav}>
				<div className={classes.svg_container}>
					<SvgLogoComponent className={classes.svg} />
				</div>
				<ul className={classes.nav_links}>
					<Link href='/'>Premium</Link>
					<Link href='/'>Support</Link>
					<Link href='/'>Download</Link>
					<span className={classes.line}></span>
					<Link href='/'>Sign up</Link>
					<Link href='/'>Log in</Link>
				</ul>
				<MobileNav />
			</nav>
		</div>
	);
};

export default Nav;
