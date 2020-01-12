import React from "react";
import Gallery from "react-photo-gallery";
import Image from "./components/Image";

class Favorites extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            info: ""
        }
        this.unlikeImage = this.unlikeImage.bind(this);
        this.getImage = this.getImage.bind(this);
        this.infoAboutLikedPhoto = this.infoAboutLikedPhoto.bind(this);
    }
    componentDidMount() {
        if(localStorage.getItem('favorites')){
            let fotos = JSON.parse(localStorage.getItem('favorites'));
            this.setState({
                photos: fotos.map(item => {
                    return { src: item, width: 1, height: 1 }
                })
            })
        }
        this.infoAboutLikedPhoto();
    }
    unlikeImage(id) {
        let fotos = this.state.photos;
        fotos.splice(id, 1);
        this.setState({
            photos: fotos
        })
    }
    getImage({ index, left, top, photo }) {
        return (
            <Image
                margin={"2px"}
                index={index}
                photo={photo}
                left={left}
                top={top}
                key={"image " + index}
                unlikeImage={this.unlikeImage}
                isLike={true}
            />
        );
    }
    infoAboutLikedPhoto() {
        if(JSON.parse(localStorage.getItem('favorites')).length <= 0){
            this.setState({info: "You haven't liked any pictures :("});
        }
    }
    render() {
        return (
            <div className="favorites">
                <div className="container">
                    <h1 className="text-center mb-4">{ this.state.info }</h1>
                    <Gallery photos={this.state.photos} renderImage={this.getImage} limitNodeSearch={4}/>
                </div>
            </div>
        );
    }
}

export default Favorites;