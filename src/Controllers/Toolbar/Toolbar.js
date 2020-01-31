import React from 'react';
import classes from './Toolbar.module.css';
import ToolbarItem from '../../Components/ToolbarItem/ToolbarItem';


const Toolbar = (props) => {
  return(
    <div className={classes.Toolbar}>
        <div className={classes.Logo}>HackerNews</div>
        <div className={classes.Items}>
          <ToolbarItem className={classes.Item} category="Top"/>
          <ToolbarItem className={classes.Item} category="Best"/>
          <ToolbarItem className={classes.Item} category="New"/>

        </div>
    </div>
  )
}
export default Toolbar;