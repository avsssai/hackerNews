import React,{ Component } from "react";
import classes from "./NewsController.module.css";
import NewsItem from '../../Components/NewsItem/NewsItem';
import Pagination from '../../Components/Pagination/Pagination';
import Axios from "axios";

class NewsController extends Component {
    state = {
        articles:[],
        pageNumber:1,
        numberOfPages:0
    }
    componentDidMount(){
        var source = `${this.props.source}`;
        console.log(source);
        Axios.get(source)
        .then(data => {
            const numberOfPages = data.data.length;
            this.setState({
                articles:data,
                numberOfPages:numberOfPages
            });
        })
        .catch(err => console.log(err));

    }
    changePage = (num) => {
        this.setState({
            pageNumber:num
        })
        console.log(num);
    }
    render(){
        let data = this.state.articles && this.state.articles.data;
        if(data){
            const pageNumber = (this.state.pageNumber-1)*10;
            const sliceEnd = pageNumber+10;
    
            var news = this.state.articles.data.slice(pageNumber,sliceEnd);
            
            var newsItems = (
                news.map((item,id) => {
                    return <NewsItem id={item} key={item} srl={pageNumber+id+1}/>
                })
            )
    
        }else{
            news = <h2>Loading....</h2>
        }
        return (
            <div className={classes.NewsController}>
                {newsItems}
                <Pagination numberOfPages={this.state.numberOfPages} click={this.changePage}/>
            </div>
        )
    }
}

export default NewsController;