// MovieCard.tsx
import classNames from 'classnames';
import styles from './card.module.scss';
import React from 'react';

const MovieCard: React.FC = () => {
    return (
        <div className={styles['movie-card']}>
            <img src="https://static.new-123movies.live/images/123movies/24CGtMtJER-0N_ObyPiM2QBAlFczNQKrDKuDgyHN2Yv2W4xZWNQ4SDUf5HMwTwjoLLTD9QQn8Pj_-SMT-YJTCS2GJxRF8z2PNBOa9KuwqwlMgWHKbK6u2ZOLOcnCnXpv.jpg" alt="Movie Poster" className={classNames('movie-poster', styles.img, styles.fixed)} />
            <div className={classNames(styles['movie-overlay'], styles['show-info'])}>
                <h3 className={styles['movie-title']}>Movie Title</h3>
                <p className={styles['movie-summary']}>A brief summary of the movie.</p>
                <button className={styles['watch-now']}>Watch Now</button>
            </div>
        </div>
    );
};

export default MovieCard;
