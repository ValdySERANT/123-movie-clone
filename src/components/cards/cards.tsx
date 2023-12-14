// Correcting the import path and usage
import classNames from 'classnames';
import styles from './cards.module.scss';
import Card from '../card/card'; // Ensure the correct import path for Card

export interface CardsProps {
    className?: string;
}


export const Cards: React.FC<CardsProps> = ({ className }) => {
    return (
        <div className={classNames(styles.root, className)}>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card /></div>
    );
};
