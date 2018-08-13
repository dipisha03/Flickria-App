// Import react responsive carousel package 
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

// Construct a handleclick to get picture details
export default class CarouselSlider extends React.Component {
  handleClick = (picture) => {
    this.props.getPictureDetails(picture);
  }

// Render pictures from the Flickr gallery in a carousel when user onClicks
  renderPics = () => {
    if (!this.props.data || !this.props.data.photos) {

      return <p className="invalidId">Invalid gallery ID 😢</p>
    } else {
      return (
        <Carousel showArrows={true} dynamicHeight={true}>
          {this.props.data.photos.photo.map((picture, index) => {
            return (
              <div className= "pictures" key={index} onClick={() => this.handleClick(picture)}>
                <img alt="" src={`https://farm${picture.farm}.staticflickr.com/${picture.server}/${picture.id}_${picture.secret}.jpg`} />
              </div>
            )
          })}
        </Carousel>
      );
    }
  }

// Render the carousel on the webpage
  render() {
    if (!this.props.showCarousel) {
      return null;
    }
    return (
      <div> 
        <div style={{width: "100%"}}>
          {this.renderPics()}
        </div>
      </div>
    );
  }
};