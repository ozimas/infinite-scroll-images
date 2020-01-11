import React from "react";

class Image extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="single-dog">
        <img
          className={"single-dog__image"}
          src={this.props.photo.src}
          width={this.props.photo.width}
          height={this.props.photo.height}
          style={{margin: this.props.margin}}
          alt={"Image dog " + this.props.index}
        />
      </div>
    );
  }
}

export default Image;
