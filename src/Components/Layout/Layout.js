import React from 'react';
import classes from './Layout.module.css';
import NewsController from '../../Controllers/NewsController/NewsController';

const Layout = (props) => {
  return(
    <div className={classes.Layout}>
        <NewsController className={classes.NewsController} source="https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"/>
    </div>
  )
}
export default Layout;