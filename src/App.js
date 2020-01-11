import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import "bootstrap/dist/css/bootstrap.css";

class App extends React.Component {
    constructor(props){
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
            photos: this.state.photos.concat(
              res.data.map(item_url => {
                return {src: item_url, width: 1, height: 1};
              })
            )
          });
        });
      }

    render() {
        return 'App';
    }
}

export default App;