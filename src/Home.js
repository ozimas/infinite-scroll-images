import React from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import Gallery from "react-photo-gallery";
import Loader from "./components/Loader";
import Image from "./components/Image";
import "bootstrap/dist/css/bootstrap.css";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            photos: [],
            api_url: "/api/shibes?count=16"
        };
        this.fetchImages = this.fetchImages.bind(this);
        this.getImage = this.getImage.bind(this);
        this.unlikeImage = this.unlikeImage.bind(this);
    }

    componentDidMount() {
        this.fetchImages();
        if(JSON.parse(localStorage.getItem('favorites')) === null){
            localStorage.setItem(
                'favorites',
                JSON.stringify([])
            )
        }
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
            />
        );
    }

    render() {
        return (
            <div className="home">
                <div className="container">
                    <InfiniteScroll
                        dataLength={this.state.photos.length}
                        scrollThreshold="200px"
                        next={this.fetchImages}
                        hasMore={true}
                        loader={<Loader />}
                    >
                        <Gallery photos={this.state.photos} renderImage={this.getImage} />
                    </InfiniteScroll>
                </div>
            </div>
        );
    }
}

export default Home;