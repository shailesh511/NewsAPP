import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";
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


    constructor(props){
        super(props);
        this.state={
          articles: [],
          loading:false,
          page:1,
          totalResults:0
        }

        document.title=this.capitalizeFirstLetter(this.props.category)+" - News App";
    }

    capitalizeFirstLetter = (word)=>{
        return word.charAt(0).toUpperCase() + word.slice(1);
    }
    
    async updateNews(){
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7cc2aafcf3447dcb49481b0367c6607&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({loading:true});
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        })
      
    }


    async componentDidMount(){
       /*  let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7cc2aafcf3447dcb49481b0367c6607&page=1&pageSize=${this.props.pageSize}`
        let data = await fetch(url);
        let parsedData=await data.json();
        console.log(parsedData);
        this.setState({
            articles:parsedData.articles,
            totalResults:parsedData.totalResults,
            loading:false
        }) */
        this.updateNews();
    }
    

  

    fetchMoreData = async () => {
       
       this.setState({page:this.state.page+1})
       const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=a7cc2aafcf3447dcb49481b0367c6607&page=${this.state.page}&pageSize=${this.props.pageSize}`;
       this.setState({loading:true});
       let data = await fetch(url);
       let parsedData=await data.json();
       console.log(parsedData); 
       this.setState({
           articles: this.state.articles.concat( parsedData.articles ),
           totalResults:parsedData.totalResults,
           loading:false
       })

      };

    render() {
    return (
        <div className="container">
            <h1 className="text-center" style={{margin:'40px 0px'}}>Top {this.capitalizeFirstLetter(this.props.category)} News </h1>
          
          {/* {this.state.loading && <Spinner/> } */}
            
          <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner/>}
        >

            <div className="row my-3">
                        
                { this.state.articles.map((element)=>{
                    return <div className="col-md-4" key={element.url}>
                    <Newsitem title={element.title?element.title:" "} description={element.description?element.description:" "} imgUrl={element.urlToImage} newsUrl={element.url} source={element.source.name} date={element.publishedAt} author={element.author}/>
                    </div>
                })}
             </div>
             </InfiniteScroll>
{/* 
               <div className="container d-flex justify-content-between">
               <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevChange}> &larr; Previous</button>
               <button  disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextChange}>Next &rarr; </button>

               </div>

 */}

            
        </div>
        )
    }
}
