import classNames from 'classnames';
import styles from './cards.module.scss';
import { Card } from '../card/card';

export interface CardsProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Cards = ({ className }: CardsProps) => {
    return <div className={classNames(styles.root, className)}>
        <Card className={styles.c1} />
        <Card className={styles.c2} />
        <Card className={styles.c3} />
        <Card className={styles.c4} />
        <Card className={styles.c5} />
        <Card className={styles.c6} />
        <Card className={styles.c7} />
        <Card className={styles.c8} />
    </div>;
};
