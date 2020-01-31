import React from 'react';
import classes from './Best.module.css';
import NewsController from '../../Controllers/NewsController/NewsController';

const Best = (props) => {
  return(
    <div className={classes.Layout}>
        <NewsController 
        className={classes.NewsController} 
        source="https://hacker-news.firebaseio.com/v0/beststories.json?print=pretty"/>
    </div>
  )
}
export default Best;