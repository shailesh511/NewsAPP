import React, { Component } from 'react'
//import {Link} from "react-router-dom";
export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/general">News app</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">


               <li className="nav-item"><a className="nav-link" href="/business"> business  </a>      </li>
               <li className="nav-item"><a className="nav-link" href="/entertainment"> entertainment  </a>  </li>
               <li className="nav-item"><a className="nav-link" href="/health"> health     </a>      </li>
               <li className="nav-item"><a className="nav-link" href="/science"> science     </a>     </li>
               <li className="nav-item"><a className="nav-link" href="/sports"> sports       </a>    </li>   
               <li className="nav-item"><a className="nav-link" href="/technology"> technology    </a>   </li>

              </ul>
             
            </div>
          </nav>
        )
    }
}
