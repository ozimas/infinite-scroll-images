import React from "react";
import "./Like.css"

class Like extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            like: false,
            url: this.props.url
        }
        this.clickLikeIt = this.clickLikeIt.bind(this);
    }
    clickLikeIt() {
        this.setState({
            like: !this.state.like
        });
    }
    render() {
        return (
            <div
                className={`single__like ${this.state.like ? "like" : ""}`}
                onClick={this.clickLikeIt}
            >
                <span class="heart"></span>
      </div>
        );
    }
}

export default Like;
