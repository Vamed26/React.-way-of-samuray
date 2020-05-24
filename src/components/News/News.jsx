import React from 'react';
import s from "./News.module.css";
import NewsItem from './NewsItem/NewsItem';
const News =(props) => {
  let messagesElements = props.newsData.map(n => <NewsItem news={n.news} />)
    return  (
      <div>
<h2> New News</h2>
<div>
  {messagesElements}
  </div>
     </div>

    )
}
export default News;