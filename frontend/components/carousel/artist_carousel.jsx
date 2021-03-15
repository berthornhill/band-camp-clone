import React from "react";
import Arrow from "./arrow";
import CarouselContent from "./artist_carousel_content";

// Modular React Carousel Component. Requires and keys-array indexs and corresponding object containing obejcts with keys that corresponding to keys-array in the array.
// Builds two functional "Arrow" components which are passed the corresponding directional change function( nextSlide, previousSlide) as well as directional string and url for the desired image to be rendered as the button.

class ArtistCarousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      pagedArray: this.setPages(this.props.keysArray, this.props.cardsPerPage),
    };
    this.nextSlide = this.nextSlide.bind(this);
    this.previousSlide = this.previousSlide.bind(this);
    this.setPages = this.setPages.bind(this);
  }

  componentDidUpdate(pastProps) {
    if (pastProps.keysArray !== this.props.keysArray) {
      const updatedArray = this.setPages(
        this.props.keysArray,
        this.props.cardsPerPage
      );
      this.setState({ pagedArray: updatedArray });
    }
  }

  // sets the initial 'keys-array' passed to the carousel into a 2D array based on the desired number of items per page, also passed as props as 'cardsPerPage'.

  setPages(array, cardsPerPage) {
    const pagedArray = [];
    while (array.length != 0) {
      pagedArray.push(array.slice(0, cardsPerPage));
      for (let index = 0; index < cardsPerPage; index++) {
        array.shift();
      }
    }
    return pagedArray;
  }

  nextSlide() {
    const nextSlide = this.state.currentIndex + 1;
    const length = this.state.pagedArray.length;

    nextSlide === length
      ? this.setState({ currentIndex: 0 })
      : this.setState({ currentIndex: nextSlide });
  }
  previousSlide() {
    const prevSlide = this.state.currentIndex - 1;
    const last = this.state.pagedArray.length - 1;

    prevSlide < 0
      ? this.setState({ currentIndex: last })
      : this.setState({ currentIndex: prevSlide });
  }

  render() {
    const { pagedArray, currentIndex } = this.state;

    return (
      <div className="carousel">
        <Arrow
          arrow={window.arrow_left}
          direction={"left"}
          handleClick={this.previousSlide}
        />
        <CarouselContent
          content={this.props.content}
          keys={pagedArray[currentIndex]}
        />
        <Arrow
          arrow={window.arrow_right}
          direction={"right"}
          handleClick={this.nextSlide}
        />
      </div>
    );
  }
}

export default ArtistCarousel;
