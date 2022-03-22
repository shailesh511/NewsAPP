import React, { Component } from 'react'
import { Route, Router, Routes } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import News from './components/News'


export default class App extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
        
       <Navbar/>
            
            <Routes>
                <Route exact path="/" element={<News pageSize={5} country="in" category="general"></News>}></Route>
                 <Route exact path="/business" element={<News pageSize={5} country='in' category='business'></News>}></Route>
                <Route exact path="/entertainment" element={<News pageSize={5} country="in" category="entertainment"></News>}></Route>
                <Route exact path="/general" element={<News pageSize={5} country="in" category="general"></News>}></Route>
                <Route exact path="/health" element={<News pageSize={5} country="in" category="health"></News>}></Route>
                <Route exact path="/science" element={<News pageSize={5} country="in" category="science"></News>}></Route>
                <Route exact path="/sports" element={<News pageSize={5} country="in" category="sports"></News>}></Route>
                <Route exact path="/technology" element={<News pageSize={5} country="in" category="technology"></News>}></Route> 
            </Routes>
        
         </BrowserRouter>
        

      </>
    )
  }
}
