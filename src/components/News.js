import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';

export default class News extends Component {
   
    static defaultProps = {
        country:'in',
        pageSize:8,
        category:'sports',
      }
    

     static propTypes ={
         country:PropTypes.string,
         pageSize:PropTypes.number,
         category:PropTypes.string,
     }


    constructor(){
        super();
        this.state={
          articles: [],
          loading:false,
          page:1
        }
    }
    
    async componentDidMount(){
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7cc2aafcf3447dcb49481b0367c6607&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults
        })
    }
    

    handlePrevChange=async ()=>{
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7cc2aafcf3447dcb49481b0367c6607&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
       
        this.setState({
            page:this.state.page-1,
            articles:parsedData.articles
        })
    }

    handleNextChange= async ()=>{

        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7cc2aafcf3447dcb49481b0367c6607&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
       
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
       
        this.setState({
            page:this.state.page+1,
            articles:parsedData.articles,
            loading:false
        })
    }

    render() {
    return (
        <div className="container">
            <h1 className="text-center" style={{margin:'40px 0px'}}>Top Trending News </h1>
          {this.state.loading && <Spinner/> }
            
            <div className="row my-3">
                
                {  !this.state.loading &&  this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title?element.title:" "} description={element.description?element.description:" "} imgUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} date={element.publishedAt} author={element.author}/>
                    </div>
                })}


               <div class="container d-flex justify-content-between">
               <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevChange}> &larr; Previous</button>
               <button  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextChange}>Next &rarr; </button>

               </div>



            </div>
        </div>
        )
    }
}
