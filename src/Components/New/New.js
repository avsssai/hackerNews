import React from 'react';
import classes from './New.module.css';
import NewsController from '../../Controllers/NewsController/NewsController';

const New = (props) => {
  return(
    <div className={classes.Layout}>
        <NewsController
         className={classes.NewsController} 
         source="https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty"/>
    </div>
  )
}
export default New;