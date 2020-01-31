import React from "react";
import classes from "./Toolbar.module.css";
import ToolbarItem from "../../Components/ToolbarItem/ToolbarItem";
import { Link } from "react-router-dom";

const Toolbar = props => {
  return (
    <div className={classes.Toolbar}>
      {/* <Link to="/" style={{ textDecoration: 'none' }}>
      <div className={classes.Logo}>HackerNews</div>
      </Link> */}
      <div className={classes.Logo}>HackerNews</div>

      <div className={classes.Items}>
        <Link to="/top" style={{ textDecoration: 'none' }}>
          <ToolbarItem className={classes.Item} category="Top" />
        </Link>
        <Link to="/best" style={{ textDecoration: 'none' }}>
          <ToolbarItem className={classes.Item} category="Best" />
        </Link>
        <Link to="/new" style={{ textDecoration: 'none' }}>
          <ToolbarItem className={classes.Item} category="New" />
        </Link>
      </div>
    </div>
  );
};
export default Toolbar;
