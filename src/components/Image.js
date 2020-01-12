import React from "react";
import Loader from "./Loader";
import Like from "./Like";
import "./Image.css";

class Image extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
    };

    this.isLoaded = this.isLoaded.bind(this);
  }
  isLoaded() {
    this.setState({
      loaded: true
    });
  }
  render() {
    return (
      <div className="single">
        {this.state.loaded ? "" : <Loader />}
        <Like url={this.props.photo.src} unlikeImage={this.props.unlikeImage} isLike={this.props.isLike} />
        <img
          className={`single__image rounded ${
            this.state.loaded ? "load-image" : "unload-image"
          }`}
          src={this.props.photo.src}
          width={this.props.photo.width}
          height={this.props.photo.height}
          style={{ margin: this.props.margin }}
          alt={"Image dog " + this.props.index}
          onLoad={this.isLoaded}
        />
      </div>
    );
  }
}

export default Image;
