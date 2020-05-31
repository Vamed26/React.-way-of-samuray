import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from './ProfailInfo/ProfileInfo';

const Profile = (props) => {
   
    return <div>

            <ProfileInfo />
            <MyPosts posts={props.postData} 
            newPostText={props.newPostText}
            addPost={props.addPost} 
            updateNewPostText={props.updateNewPostText}/>
    </div>

}
export default Profile;