import React from "react";
import PropTypes from "prop-types";
class MovieResult extends React.Component {
  render() {
    const { title, poster } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <img src={poster} alt="" />
      </div>
    );
  }
}

export default MovieResult;
