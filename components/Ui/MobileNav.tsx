import classes from './MobileNav.module.css';
import { useState } from 'react';
import Link from 'next/link';
import Logo from './Svg/Logo';

const MobileNav = () => {
	const [isActive, setIsActive] = useState(false);

	const toggleActive = () => {
		setIsActive(!isActive);
	};

	return (
		<header className={classes.mobile}>
			<button
				onClick={toggleActive}
				className={`${classes.hamburger} ${isActive ? classes.active : ''}`}>
				<div className={classes.bar}></div>
			</button>
			<nav className={`${classes.mobile_nav} ${isActive ? classes.active : ''}`}>
				<Link href='/'>Premium</Link>
				<Link href='/'>Support</Link>
				<Link href='/'>Download</Link>
				<hr className={classes.line}></hr>
				<Link href='/'>Sign up</Link>
				<Link href='/'>Log in</Link>
				<Logo className={classes.svg} />
			</nav>
			
		</header>
	);
};

export default MobileNav;
