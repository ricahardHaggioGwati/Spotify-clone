import Button from './Ui/Button';
import Link from 'next/link';
import classes from './Section.module.css';

const Section = () => {
	return (
		<section className={classes.rapper}>
			<article className={classes.content}>
				<div>
                    <h1>Get Premium free for 1 month</h1>
                    <br></br>
					<h2>Just R59.99/month after. Cancel anytime.</h2>
					<div id={classes.buttons}>
						<Button text='Get Started' color={true} />
                        <Button text='View Plans' color={false} />
					</div>
					<p><Link href='/'>Terms and conditions apply</Link>. 1 month free not available for users who have already tried Premium.</p>
				</div>
			</article>
		</section>
	);
};

export default Section;
