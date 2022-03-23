import React, { Component } from 'react'
import { Route, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'
import Navbar from './components/Navbar'
import News from './components/News'


export default class App extends Component {

  //apiKey=process.env.REACT_APP_API;

   state={
     progress:0
   }

  setProgress=(progress)=>{
    this.setState({progress:progress})
  }

  render() {
    return (
      <>
      <BrowserRouter>
        
       <Navbar/>         
       <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
        
      />
            <Routes>
                <Route exact path="/" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  pageSize={5} country="in" category="general"></News>}></Route>
                 <Route exact path="/business" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  pageSize={5}  country='in' category='business'></News>}></Route>
                <Route exact path="/entertainment" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  pageSize={5} country="in" category="entertainment"></News>}></Route>
                <Route exact path="/general" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  pageSize={5} country="in" category="general"></News>}></Route>
                <Route exact path="/health" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  pageSize={5} country="in" category="health"></News>}></Route>
                <Route exact path="/science" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  pageSize={5} country="in" category="science"></News>}></Route>
                <Route exact path="/sports" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  pageSize={5} country="in" category="sports"></News>}></Route>
                <Route exact path="/technology" element={<News setProgress={this.setProgress}  apiKey={this.apiKey}  pageSize={5} country="in" category="technology"></News>}></Route> 
            </Routes>
        
         </BrowserRouter>
        

      </>
    )
  }
}
