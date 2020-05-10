import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
    let postData= [
        {id: 1, message:"Hello gays", like: 26},
        {id: 2, message:"It's my first post", like: 15},
    
      ]
    return <div> 

        <div className={s.bird}>

            
            <img src="https://assets.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
        </div>
        <div className={s.postBlock}>
            <h3>My Posts</h3>
        </div>
        <div className={s.NewPosts}>
            <textarea className={s.text}></textarea>
            <div>

                <button>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        <Post message={postData[0].message} like={postData[0].like}/>
        <Post message={postData[1].message} like={postData[1].like}/>

    </div>
}
export default MyPosts;