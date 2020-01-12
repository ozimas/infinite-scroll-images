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
        this.setLikeState = this.setLikeState.bind(this);
        this.setLikeToLocalStorage = this.setLikeToLocalStorage.bind(this);
        this.getFavoritesFromLocalStorage = this.getFavoritesFromLocalStorage.bind(this);
        this.setFavoritesToLocalStorage = this.setFavoritesToLocalStorage.bind(this);
    }
    componentDidMount() {
        if(this.getFavoritesFromLocalStorage === null){
            localStorage.setItem(
                'favorites',
                JSON.stringify([])
            )
        }
    }
    setLikeToLocalStorage() {
        this.setFavoritesToLocalStorage(this.state.url);
    }
    getFavoritesFromLocalStorage(){
        return JSON.parse(localStorage.getItem('favorites'));
    }
    setFavoritesToLocalStorage(data){
        let favorites = this.getFavoritesFromLocalStorage();
        if(!this.state.like) favorites.push(data);
        else favorites.splice(favorites.indexOf(data), 1);
        localStorage.setItem(
            'favorites',
            JSON.stringify(favorites)
        )
    }
    setLikeState(){
        this.setState({
            like: !this.state.like
        });
    }
    clickLikeIt() {
        this.setLikeState();
        this.setLikeToLocalStorage();
    }
    render() {
        return (
            <div
                className={`single__like ${this.state.like ? "like" : ""}`}
                onClick={this.clickLikeIt}
            >
                <span className="heart"></span>
      </div>
        );
    }
}

export default Like;
