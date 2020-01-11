import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Gallery from "react-photo-gallery";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: [],
      api_url: "/api/shibes?count=16"
    };
    this.fetchImages = this.fetchImages.bind(this);
  }

  componentDidMount() {
    this.fetchImages();
  }

  fetchImages() {
    axios.get(this.state.api_url).then(res => {
      this.setState({
        photos: this.state.photos.concat(
          res.data.map(item_url => {
            return {
              src: item_url,
              width: 1,
              height: 1
            };
          })
        )
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
          <Gallery photos={this.state.photos} />
        </InfiniteScroll>
      </div>
    );
  }
}

export default App;
