// Import React 
import React from 'react';

// Store picture details in a div
export default class PictureDetail extends React.Component {
  renderPictureDetail() {
    if (this.props.pictureDetail) {
      return (
        <div>
          <p className = "picturedetail"><b>Owner:</b> {this.props.pictureDetail.photo.owner.username}</p>
          <p className = "picturedetail"><b>Dates:</b> {this.props.pictureDetail.photo.dates.taken}</p>
          <p className = "picturedetail"><b>Views:</b> {this.props.pictureDetail.photo.views}</p>
        </div>
      );
    }
  }

// Render picture details to the webpage 
  render() {
    return (
      <div>
        {this.renderPictureDetail()}
      </div>
    );
  }
};