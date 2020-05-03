import React from 'react';
import s from "./Profile.module.css";
import MyPosts from './MyPosts/MyPosts';

const Profile =() => {
    return  <div className={s.content}>
    <div className={s.stile}>
        <img src='https://storge.pic2.me/upload/624/584d22148c69d.jpg' />
    </div>
    <div>
        <MyPosts/>
    </div>
    </div>

}
export default Profile;