import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
    return <div>

        <div className={s.bird}>
            <img src="https://assets.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
        </div>
        <div className={s.NewPosts}>
            <textarea className={s.text}></textarea>
            <div>
                
                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <div><h4>My Posts</h4>
        </div>
        <Post message= "Hello gays"  like='24' />
        <Post message= "It's my first post" like='5'/>
        
    </div>
}
export default MyPosts;