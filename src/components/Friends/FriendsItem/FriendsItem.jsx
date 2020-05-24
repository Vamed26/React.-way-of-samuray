import React from 'react';
import s from "./../Friends.module.css";


const FriendsItem=(props)=> {
return (
<div>
        <div className={s.item}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQnlAdyxd4UknsriFer_YtT3KhPwulNE-bQKNgKJ5PycMqCV3Gh&usqp=CAU" />
        </div>
        
         <div>
        {props.news}
        </div>
</div>

)
}




export default FriendsItem;