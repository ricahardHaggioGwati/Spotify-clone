import classes from './Nav.module.css';
import Link from 'next/link';
import SvgComponent from './SvgComponent';

const Nav: React.FC = () => {
    

    return <nav className={classes.nav}>
        <SvgComponent className={classes.svg} />
            <ul className={classes.nav_links}>
                <Link href='/'>Premium</Link>
                <Link href='/'>Support</Link>
                <Link href='/'>Download</Link>
                <span className={classes.line}></span>
                <Link href='/'>Sign Up</Link>
                <Link href='/'>Log In</Link>
            </ul>
    </nav>
}

export default Nav;