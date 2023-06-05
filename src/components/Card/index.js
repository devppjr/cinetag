import { useFavoriteContext } from 'contexts/Favorites';
import styles from './Card.module.css';
import iconFavorite from './favoritar.png';
import iconUnfavorite from './desfavoritar.png';
import { Link } from 'react-router-dom';

function Card({ id, titulo, capa }) {
    const { favorite, addFavorite } = useFavoriteContext();
    const isFavorite = favorite.some((fav) => fav.id === id);
    const icon = !isFavorite ? iconFavorite : iconUnfavorite;

    return (
        <div className={styles.container}>
            <Link className={styles.link} to={`/${id}`}>
                <img src={capa} alt={titulo} className={styles.cover} />
                <h2>{titulo}</h2>
            </Link>
            <img src={icon}
                alt="Favoritar filme"
                className={styles.favorite}
                onClick={() => {
                    addFavorite({ id, titulo, capa })
                }} />
        </div>

    )
}

export default Card;
