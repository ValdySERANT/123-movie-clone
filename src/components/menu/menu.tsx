import classNames from 'classnames';
import styles from './menu.module.scss';

export interface MenuProps {
    className?: string;
}

const sortBy: string[] = ["Popularity", "Most Voted", "Release Date"];
const genres: string[] = ["Action", "Horror", "Comedy"];

export const Menu = ({ className }: MenuProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.logo}>
                <img src="https://play-lh.googleusercontent.com/HLpYdMw9wjDOSw-G3EjdS9IQ1kM3VydWtLZPqSurEWR7KBr0YQW6Qu6ceKvXBT0wPUU=w480-h960" className={styles.logoImg} alt="123MovieHub" />
            </div>
            <span className={styles.title}>Sort By</span>
            <hr className={styles.hr} />
            <ul className={styles.list}>
                {sortBy.map(item => (
                    <li className={styles.listItem} key={item}>{item}</li>
                ))}
            </ul>
            <span className={styles.title}>Genre<hr className={styles.hr} />
            </span>
            <ul className={styles.list}>
                {genres.map(genre => (
                    <li className={styles.listItem} key={genre}>{genre}</li>
                ))}
            </ul>
        </div>
    );
};
