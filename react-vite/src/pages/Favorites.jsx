import { useContext } from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";


function FavoritesPage(){
    const faboritesCtx = useContext(FavoritesContext); 

    let content;

    if (faboritesCtx.totalFavorites === 0){
        content = <p>You got no favorites yet. Start adding some?</p>
    } else {
        content = <MeetupList meetups={faboritesCtx.favoirtes} />
    }

    return(
     
        <section>
        <h1>Favorites Page</h1>
        {content}
        </section>
    )

}

export default FavoritesPage