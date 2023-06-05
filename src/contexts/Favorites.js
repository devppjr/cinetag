import { createContext, useContext, useState } from "react";

export const FavoritesContext = createContext();
FavoritesContext.displayName = "Favorites";

export default function FavoritesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);

    return (
        <FavoritesContext.Provider
            value={{ favorite, setFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export function useFavoriteContext() {
    const { favorite, setFavorite } = useContext(FavoritesContext);

    function addFavorite(newFavorite) {
        const repeatedFavorite = favorite.some(fav => fav.id === newFavorite.id);

        let newFavorites = [...favorite];

        if (!repeatedFavorite) {
            newFavorites.push(newFavorite);
            return setFavorite(newFavorites);
        }

        newFavorites.splice(newFavorites.indexOf(newFavorite), 1);
        return setFavorite(newFavorites);
    }
    return {
        favorite,
        addFavorite,
    }
}
