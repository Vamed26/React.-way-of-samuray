import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = () => {
    let postData= [
        {id: 1, message:"Hello gays", like: 26},
        {id: 2, message:"It's my first post", like: 15},
    
      ]
     let postElements = postData .map (p=> <Post message={p.message} like={p.like}/>)
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
        {postElements}

    </div>
}
export default MyPosts;