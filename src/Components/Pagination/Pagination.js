import React from 'react';
import classes from './Pagination.module.css';

const Pagination = (props) => {
    var numbersList = Math.floor(props.numberOfPages/10);

    // var numbersBar = numbers.map(num => {
    //     return <div className={classes.Pagination} key={num}>{num}</div>
    // })
    const numbers = [...Array(numbersList+1).keys()].slice(1);
    const numberButtons = numbers.map((num,i) => {
        return <div className={classes.NumberButton} key={num} onClick={()=>props.click(num)}>{num}</div>
    })

  return(
    <div className={classes.Pagination}>
        {numberButtons}
    </div>
  )
}
export default Pagination;