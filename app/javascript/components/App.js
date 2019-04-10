import React from "react";
import PropTypes from "prop-types";
import Search from "./Search";
import MovieResult from "./MovieResult";
class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }
  search(term) {
    this.setState({ data: "loading" });
    fetch(`https://www.omdbapi.com/?apikey=1292010a&s=${term}`)
      .then(response => response.json())
      .then(data => {
        this.setState({ data: data });
        console.log(this.state.data.Search[0]);
      });
  }

  render() {
    let movieResult = null;
    if (this.state.data == null) {
      movieResult = <h3>Search for something!</h3>;
    } else if (this.state.data == "loading") {
      movieResult = <h3>Loading..</h3>;
    } else {
      const { Title, Poster } = this.state.data.Search[0];
      movieResult = <MovieResult title={Title} poster={Poster} />;
    }

    return (
      <div>
        <h1>Welcome to the movie app</h1>
        <Search appSearch={this.search} />
        {movieResult}
      </div>
    );
  }
}

export default App;
