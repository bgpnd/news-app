import React, { Component } from "react";
import {
  Link,
} from "react-router-dom";
 
class Home extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
 
  componentDidMount() { 
    
    fetch("https://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=9c12044433534cf280a6e23957838d00")
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.articles.map(data => (
      {
        author: `${data.author}`,
        title: `${data.title}`,
        thumbnail: `${data.urlToImage}`,
        content: `${data.content}`,
      }
      )))
    .then(items => this.setState({
      items,
      isLoaded: false
    }))
    .catch(error => console.log('parsing failed', error))

    
    
    }
 
    render() {
      const {items } = this.state;
        return (
          <>
            {
              items.length > 0 ? items.map(item => {
              const {author, title, thumbnail} = item;
               return (
 
               <Link to="/url" className="berita">
               <figure className="berita_thumb">
                 <img src={thumbnail} alt={title}/> 
              </figure>
               <div className="berita_detail">
                 <p className="berita_detail_author">
                  {author} 
                 </p>
                  <p className="berita_detail_title">
                    {title} 
                  </p>
                </div>
 
              </Link>
              );
            }) : null
          }
          </>
        );
 
    }
  }
 
export default Home;