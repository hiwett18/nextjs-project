import MeetupItem from '/Users/hiwot-w/Documents/TKH-NextJs/nextjs-project/react-vite/src/components/meetups/MeetupItem.jsx';
import classes from './MeetupList.module.css'

function MeetupList(props) {
return (
    <ul className={classes.list}>
        {props.meetups.map((meetup) => (
        <MeetupItem 
        keys={meetup.id} 
        id={meetup.id} 
        image={meetup.image} 
        title={meetup.title} 
        address={meetup.address} 
        description={meetup.description} /> 
        ))}

    </ul>
);
}

export default MeetupList