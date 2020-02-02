import React from "react";
import classes from "./Loader.module.css";

const Loader = props => {
  return (
    <div className={classes.multiSpinnerContainer}>
    <div className={classes.multiSpinner}>
        <div className={classes.multiSpinner}>
            <div className={classes.multiSpinner}>
               <div className={classes.multiSpinner}>
                    <div className={classes.multiSpinner}>
                        <div className={classes.multiSpinner}></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


    );
};
export default Loader;
