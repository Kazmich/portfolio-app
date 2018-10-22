import React, { Component } from "react";

class Gallery extends Component {
  render() {
    return (
      <div className="parent">
        <img className="obraz" src="/images/obraz.png" alt="fuck" />
        <img className="ramka" src="/images/ramka.png" alt="fuck" />
      </div>
    );
  }
}
export default Gallery;
