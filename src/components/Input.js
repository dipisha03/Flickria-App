// Import React 
import React from 'react';

// Store value in a state 
export default class Input extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
  }

// Capture the value the user types in 
  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

// Fetch the data when the user clicks submit 
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.fetchData(this.state.value);
  }

// Render the value to the webpage
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p className = "p">Want to see what the Indian festival of colors (aka Holi) looks like?</p>
          <p className = "p">Search Flickr gallery ID 72157694204760175.</p>
          <p className = "p">You can search by any Flickr gallery ID you desire.</p>
          <p className = "p">Also, you can click on the pictures for more details. </p>
    
          <input className = "input" value={this.state.value} onChange={this.handleChange} />
          <button className = "button" type="submit">Go wild 🌲🐉👽</button>
        </form>
      </div>
    );
  }
};

