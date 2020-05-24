import React from 'react';
import s from "./../News.module.css";
const NewsItem =(props) => {

    return  (
     
     <div>
       <div className={s.item}>
        <img src="https://2ch.hk/b/thumb/165980324/15119711525330s.jpg" />
        </div>
        <div className= {s.news}>
  {props.news}
       </div>
     </div>

    )
}
export default NewsItem;