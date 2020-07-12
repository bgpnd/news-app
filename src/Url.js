import React, { Component } from "react";
// import {
//   Link,
// } from "react-router-dom";
 
class Home extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }
 
  componentDidMount() { 
    
    fetch("http://newsapi.org/v2/top-headlines?country=id&category=technology&apiKey=9c12044433534cf280a6e23957838d00")
    .then(res => res.json())
    .then(parsedJSON => parsedJSON.articles.map(data => (
      {
        content: `${data.content}`,
      }
      )))
    .then(items => this.setState({
      items,
      isLoaded: false
    }))
    .catch(error => console.log('parsing failed', error))

    
    
    }
//  render content berita (tapi masih belum ketemu cara biar satu content saja yang tampil)
    render() {
      const {items } = this.state;
        return (
          <>
            {
              items.length > 0 ? items.map(item => {
              const {content} = item;
               return (

                <div className="berita_content">
               <p>{content}</p>
                </div>
              );
            }) : null
          }
          </>
        );
 
    }
  }
 
export default Home;