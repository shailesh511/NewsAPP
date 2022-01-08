import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {

    constructor(){
        super();
        this.state={
          articles: [],
          loading:false
        }
    }
    
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=a7cc2aafcf3447dcb49481b0367c6607"
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }
    
    render() {
    return (
        <div className="container">
            <h3>Top Trending News </h3>
            <div className="row">
                {
                    this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title?element.title:" "} description={element.description?element.description:" "} imgUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}

            </div>
        </div>
        )
    }
}
