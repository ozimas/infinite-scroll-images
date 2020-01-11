import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      api_url: "/api/shibes?count=16"
    };
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    axios.get(this.state.api_url).then(res => {
      this.setState({
        photos: this.state.photos.concat(res.data)
      });
    });
  }

  render() {
    return (
      <div className="container">
        <InfiniteScroll
          dataLength={this.state.photos.length}
          scrollThreshold="200px"
          next={this.fetchImages}
          hasMore={true}
          loader={"Loading..."}
        >
          {this.state.photos.map(item=>{
              return <img src={item} />
          })}
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
