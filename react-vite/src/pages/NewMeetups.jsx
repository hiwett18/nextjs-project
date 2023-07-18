import { useNavigate } from 'react-router-dom'
import NewMeetupForm from "../components/meetups/NewMeetupForm"


function NewMeetupsPage(){
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://react-getting-started-af851-default-rtdb.firebaseio.com/meetups.json', {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers:{
                'Content-Type': 'application/json'
            }
        }).then(()=> {
            navigate('/');  
        }
        )
    }
    return(
        <>
        <h1>New Meetup Page</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </>
    )

}

export default NewMeetupsPage