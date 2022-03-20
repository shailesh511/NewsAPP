import React, { Component } from 'react'

export default class Newsitem extends Component {
  render() {

    const { title, description, imgUrl, newsUrl, source, date, author } = this.props;
    return (
      <div className="card">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
         {source}
        </span>

        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <p className="card-text"><small className="text-muted">by {!author ? "unknown" : author} on {new Date(date).toUTCString()}</small></p>

          <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read more</a>
        </div>
      </div>
    )
  }
}
