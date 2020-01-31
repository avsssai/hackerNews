import React, { Component } from 'react';
import classes from './NewsItem.module.css';
import Axios from 'axios';

class NewsItem extends Component{

  state = {
    article:[]
  }
  componentDidMount(){
    Axios.get(`https://hacker-news.firebaseio.com/v0/item/${this.props.id}.json?print=pretty`)
      .then(res=>{
        this.setState({
          article:res
        });
        console.log(res);
      })
      .catch(err=>console.log(err));
  }
  render(){
    const article = this.state.article;
    if(article && article.data){
      var title = article.data.title;
      var by = article.data.by;
      var descendants = article.data.descendants;
      var url = article.data.url;
      var score = article.data.score;
    }else{
    }
    return(
      <div className={classes.NewsItem}>

          <div className={classes.Title}>
            <div className={classes.Srl}>{this.props.srl}. </div>
            <div className={classes.ScoreArrow}>&#8679;</div>
            <div className={classes.Score}>{score}</div>
            <a href={url}>{title}</a>
          </div>
          <div className={classes.Details}>
            <div className={classes.By}>by <span className={classes.Name}>{by}</span></div>
            <div className={classes.Comments}>comments({descendants})</div>


          </div>

      </div>
    )
  
  }
} 
export default NewsItem;