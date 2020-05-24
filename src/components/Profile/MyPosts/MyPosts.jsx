import React from 'react';
import s from "./MyPosts.module.css";
import Post from './Post/Post';

const MyPosts = (props) => {
    let postElements =
        props.postData.map(p => <Post message={p.message} like={p.like} />)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
        newPostElement.current.value = " ";
    }
    return <div>

        <div className={s.bird}>


            <img src="https://assets.jpegmini.com/user/images/slider_puffin_before_mobile.jpg" />
        </div>
        <div className={s.postBlock}>
            <h3>My Posts</h3>
        </div>
        <div className={s.NewPosts}>
            <textarea ref={newPostElement} className={s.text}></textarea>
            <div>

                <button onClick={addPost}>Add post</button>
                <button>Remove</button>
            </div>
        </div>
        {postElements}

    </div>
}
export default MyPosts;