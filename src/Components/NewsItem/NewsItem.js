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
      })
      .catch(err=>console.log(err));
  }
  click = ()=>{
    this.props.commentsClicked();
  }

  render(){
    const article = this.state.article;
    if(article && article.data){
      var title = article.data.title;
      var by = article.data.by;
      var descendants = article.data.descendants;
      var url = article.data.url;
      var score = article.data.score;
      var id = article.data.id;
    }else{
    }
    const string = String(url);
    // eslint-disable-next-line
    var matches = string.match(/^https?\:\/\/([^\/?#]+)(?:[\/?#]|$)/i);

    var domainName = matches && matches[1];  // domain will be null if no match is found
    var commentsRoute = `/comments/${id}`;
    
    // const domainPattern = string.match(urlPattern);
    // var domainName = domainPattern[1];
    return(
      <div className={classes.NewsItem}>

          <div className={classes.Title}>
            <div className={classes.Srl}>{this.props.srl}. </div>
            <a href={url}>{title}</a>

            <span className={classes.Domain}> ({domainName})</span>

          </div>
          <div className={classes.Details}>
          <div className={classes.Score}>{score} points</div>

            <div className={classes.By}>by <span className={classes.Name}>{by}</span></div>
            <a className={classes.Comments} onClick={this.click} href={commentsRoute}>comments({descendants})</a>


          </div>

      </div>
    )
  
  }
} 
export default NewsItem;