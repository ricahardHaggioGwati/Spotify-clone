import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faTwitter,
	faFacebookF,
} from '@fortawesome/free-brands-svg-icons';

import Logo from './Svg/Logo';
import Globe from './Svg/Globe';
import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<nav className={classes.navgitation}>
				<div className={classes.logo_container}>
					<Logo className={classes.svg} />
				</div>
				<div className={classes.web_links_container}>
					<div className={classes.web_links}>
						<div className={classes.company}>
							<h5>Company</h5>
							<a href='#'>About</a>
							<a href='#'>Jobs</a>
							<a href='#'>For the Record</a>
						</div>

						<div className={classes.communities}>
							<h5>Communities</h5>
							<a href='#'>For Artists</a>
							<a href='#'>Developers</a>
							<a href='#'>Advertising</a>
							<a href='#'>Investors</a>
							<a href='#'>Vendors</a>
						</div>
						<div className={classes.useful_links}>
							<h5>Useful Links</h5>
							<a href='#'>Support</a>
							<a href='#'>Web Player</a>
							<a href='#'>Free Mobile App</a>
						</div>
					</div>
				</div>
				<div className={classes.social_links}>
					<a href='#'>
						<FontAwesomeIcon icon={faInstagram} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={faTwitter} />
					</a>
					<a href='#'>
						<FontAwesomeIcon icon={faFacebookF} />
					</a>
				</div>
				<div className={classes.other_links}>
					<a href='#'>Legal</a>
					<a href='#'>Privacy Center</a>
					<a href='#'>Privacy Policy</a>
					<a href='#'>Cookies</a>
					<a href='#'>About Ads</a>
				</div>
				<div className={classes.copyright}>
					<a href='#'>
						<Globe /> USA
					</a>
					<p>
						<a href='#'>{`© ${new Date().getFullYear()} Spotify AB`}</a>
					</p>
				</div>
			</nav>
		</footer>
	);
};

export default Footer;
