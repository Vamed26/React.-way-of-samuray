import React from 'react';
import s from "./Friends.module.css";
import FriendsItem from './FriendsItem/FriendsItem';


const Friends=(props)=> {
   
    let friendsElements = props.friendsData.map(f => <FriendsItem news={f.news} />)
return (
    
     <div>
    {friendsElements}
    </div>


)
}




export default Friends;