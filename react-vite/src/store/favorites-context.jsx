import { createContext, useState } from "react";

const FavoritesContext = createContext({
    favoirtes: [],
    totalFavorites: 0,
    addFavorite: (favoirteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}  
});

export function FavoritesContextProvider(props){
    const [userFavorites, setUserFavorites] = useState([]);
    
    function addFavoriteHandler(favoirteMeetup){
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoirteMeetup);
        }); 
    }

    function removeFavoriteHandler(meetupId){
        setUserFavorites(prevUserFavorites => {
            return prevUserFavorites.filter(meetup.Id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId){
        return userFavorites.some(meetup => meetup.Id === meetupId);
    }

    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };
    

    return <FavoritesContext.Provider value={context}>
        {props.children}
    </FavoritesContext.Provider>
}


export default FavoritesContext
