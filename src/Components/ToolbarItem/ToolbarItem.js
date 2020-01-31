import React from 'react';
import classes from './ToolbarItem.module.css';

const ToolbarItem = (props) => {
  return(
    <div className={classes.ToolbarItem}>
        {props.category}
    </div>
  )
}
export default ToolbarItem;