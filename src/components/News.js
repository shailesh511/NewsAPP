import React, { Component } from 'react'
import Newsitem from './Newsitem'

export default class News extends Component {

    constructor(){
        super();
        this.state={
          articles: [],
          loading:false,
          page:1
        }
    }
    
    async componentDidMount(){
        let url="https://newsapi.org/v2/top-headlines?country=in&apiKey=a7cc2aafcf3447dcb49481b0367c6607&page=1&pageSize=20"
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults
        })
    }
    

    handlePrevChange=async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a7cc2aafcf3447dcb49481b0367c6607&page=${this.state.page-1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
       
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles
        })
    }

    handleNextChange= async ()=>{

     if(this.state.page+1>Math.ceil(this.state.totalResults/20))
     {

     }

else{
        let url=`https://newsapi.org/v2/top-headlines?country=in&apiKey=a7cc2aafcf3447dcb49481b0367c6607&page=${this.state.page+1}&pageSize=20`;
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
       
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles
        })
    }
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


               <div class="container d-flex justify-content-between">
               <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevChange}> &larr; Previous</button>
               <button type="button" className="btn btn-dark" onClick={this.handleNextChange}>Next &rarr; </button>

               </div>



            </div>
        </div>
        )
    }
}
