import React from 'react';
import classes from './Top.module.css';
import NewsController from '../../Controllers/NewsController/NewsController';

const Top = (props) => {
  return(
    <div className={classes.Layout}>
        <NewsController className={classes.NewsController} source="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"/>
    </div>
  )
}
export default Top;