import SvgComponenet from './SvgComponent';
import classes from './Footer.module.css';

const Footer = () => {
	return (
		<footer className={classes.footer}>
			<div className={classes.web_links_container}>
				<SvgComponenet className={classes.svg} />
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
					<i className='fab fa-instagram'></i>
				</a>
				<a href='#'>
					<i className='fab fa-twitter'></i>
				</a>
				<a href='#'>
					<i className='fab fa-facebook'></i>
				</a>
			</div>
			<div className={classes.other_links}>
				<a href='#'>Legal</a>
				<a href='#'>Privacy Center</a>
				<a href='#'>Privacy Policy</a>
				<a href='#'>Cookies</a>
				<a href='#'>About Ads</a>
				<a href='#'>Additional CA Privacy Disclosures</a>
			</div>
			<div className={classes.copyright}>
				<a href='#'>
					<i className='fas fa-globe-europe'></i> USA
				</a>
				<p>
					<i className='far fa-copyright'></i> 2021 Spotify AB
				</p>
			</div>
		</footer>
	);
};

export default Footer;
