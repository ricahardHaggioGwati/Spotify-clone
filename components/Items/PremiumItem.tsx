import classes from './PremiumItem.module.css';

interface Item { 
    title: string;
    text: string;
    image: string;
}

const PremiumItem: React.FC<Item> = ({ title, text, image }) => {
    return (
        <div className={classes.premium_item}>
            <div className={classes.premium_item__image}>
                <img src={image} alt={title} />
            </div>
            <div className={classes.premium_item__text}>
                <h5>{title}</h5>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default PremiumItem