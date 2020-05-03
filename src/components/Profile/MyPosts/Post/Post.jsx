import React from 'react';
import s from "./Post.module.css";

const Post = (props) => {
    return <div>

        <div className={s.posts}>
            <div className={s.item}>
                <img src="https://klike.net/uploads/posts/2019-03/1551511801_1.jpg" />
                {props.message}
                <div>
                    <span className={s.like}>Like </span>{props.like}

                </div>
            </div>

            {/* <div className={s.item}>
            <img src="https://вайбер-ок.рф/wp-content/uploads/2018/06/2-min.jpg" />
                Post 2
</div>      
 <div className={s.item}>
 <img src="https://lh3.googleusercontent.com/proxy/MzA81SpOGvl1jkyYN-d1ySOkKqj-PDSrV6jSXP6TfNDewsPPcrl4zWhC8GWZ5GmeuetD-05XFDrpg0-XVhBfKySCsvZIxvspmQpLhwUf-d76XrE1jb-4ZHLAPQ" />
                Post 3
</div>
            <div className={s.item}>
            <img src="https://2ch.hk/b/thumb/165980324/15119711525330s.jpg" />
                Post 4
</div>
<div className={s.item}>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnlAdyxd4UknsriFer_YtT3KhPwulNE-bQKNgKJ5PycMqCV3Gh&usqp=CAU" />
                Post 5
</div>
            <div className={s.item}>
            <img src="https://lh3.googleusercontent.com/proxy/AvKenKufPuz0NTJ_zOprzccduTjR0Csux9I5sR8IENzRNAcT6oLtXWrJOkn_59yeXfgwfWokOzty-gdY0l0pw6fPBtFmcf3hJXiOlt-sNWT3SS-Hz9NDyJoJFvs2iBcGTARdjdEpn7spRA" />
                Post 6
</div> */}
        </div>
    </div>


}
export default Post;