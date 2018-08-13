// Import Components 
import React, { Component } from 'react';
import Input from './components/Input.js';
import CarouselSlider from './components/CarouselSlider.js';
import PictureDetail from './components/PictureDetail.js';
import './App.css'

// Define constants 
const url = 'https://api.flickr.com/services';
const getPhotosMethod = 'flickr.galleries.getPhotos';
const getInfo = 'flickr.photos.getInfo';
const api_key = 'f5231189e07d68f3d961f03b1b109ea3';
const format = "json&nojsoncallback=1";

// Store data in a state
class App extends Component {
  constructor() {
    super();
    this.state = {
      flickrData: null,
      showCarousel: false,
      pictureDetail: null,
    };
  }

// Fetch Flickr data
  fetchData = (data) => {
    fetch(url + "/rest/?method=" + getPhotosMethod + "&api_key=" + api_key + "&gallery_id=" + data + "&format=" + format)
      .then(response => response.json())
      .then(data => this.setState({ flickrData: data, showCarousel: true }, () => console.log(this.state.flickrData)))
  }

// Get Picture details 
  getPictureDetails = (data) => {
    fetch(url + "/rest/?method=" + getInfo + "&api_key=" + api_key + "&photo_id=" + data.id + "&format=" + format)
      .then(response => response.json())
      .then(data => this.setState({ pictureDetail: data }));
  }

// Render the data to the webpage
  render() {
    return (
      <div>
        <h1 className = "h1">Flickria</h1>
        <Input fetchData={this.fetchData} />
        <PictureDetail pictureDetail={this.state.pictureDetail} />
        <CarouselSlider data={this.state.flickrData} showCarousel={this.state.showCarousel} getPictureDetails={this.getPictureDetails} />
      </div>      
    );
  }
}

// Export App 
export default App;