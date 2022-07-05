import classes from './Nav.module.css';
import Link from 'next/link';
import SvgLogoComponent from './Svg/Logo';
import MobileNav from './MobileNav';

const Nav: React.FC = () => {
	return (
		<nav className={classes.nav}>
			<SvgLogoComponent className={classes.svg} />
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
	);
};

export default Nav;
