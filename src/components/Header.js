import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Posts from "./Posts";
class Header extends Component {
  tate;

  state = {
    query: "",
    filteredPosts: [],
  };

  startSearch = (e) => {
    if (this.state.query !== "") {
      document.getElementById("search-results").style.display = "block";
      document.getElementById("container").style.display = "none";
      const posts = this.props.posts;
      const filteredPosts = [];
      posts.forEach((post) => {
        if (
          post.brand.toLowerCase().startsWith(this.state.query) ||
          post.model.toLowerCase().startsWith(this.state.query)
        ) {
          filteredPosts.push(post);
        }
      });
      this.setState({
        filteredPosts,
      });
    }
  };

  onChange = (e) => {
    this.setState({
      query: e.target.value,
    });
  };
  onKeyPress = (e) => {
    if (e.keyCode === 13 || e.which === 13) {
      this.startSearch();
    }
  };
  render() {
    let d = new Date();
    let greeting = "";
    let greetingSrc = "";
    let hour = d.getHours();
    if (hour >= 5 && hour < 12) {
      greeting = "Morning";
      greetingSrc = "https://img.icons8.com/plasticine/100/000000/car--v1.png";
    } else if (hour >= 12 && hour < 17) {
      greeting = "Afternoon";
      greetingSrc = "https://img.icons8.com/color/96/000000/afternoon.png";
    } else if (hour >= 17 && hour < 20) {
      greeting = "Evening";
      greetingSrc = "https://img.icons8.com/color/96/000000/evening.png";
    } else if (hour >= 20 || hour < 5) {
      greeting = "Night";
      greetingSrc =
        "https://img.icons8.com/color/96/000000/partly-cloudy-night.png";
    }

    return (
      <Fragment>
        <header>
          <Link
            to="/"
            onClick={() => (window.location.href = "/")}
            className="title"
          >
            CARonRENT
            <img
              alt="icon"
              src="https://img.icons8.com/plasticine/100/000000/car--v1.png"
            />
          </Link>
          <nav>
            <div>
              <input
                value={this.state.query}
                onChange={this.onChange}
                placeholder="Search here..."
                onKeyPress={(e) => this.onKeyPress(e)}
              />
              <img
                onClick={this.startSearch}
                alt="search"
                id="search-button"
                src="https://img.icons8.com/color/96/000000/search--v1.png"
              />
            </div>
            <Link id="book-in-advance" to="/bookadvance">
              Book in Advance
            </Link>
          </nav>
          <p id="greeting">
            Good {greeting}
            <img alt="icon" src={greetingSrc} />
          </p>
        </header>
        <div id="search-results">
          {this.state.filteredPosts.length > 0 ? (
            <Posts title="Results" posts={this.state.filteredPosts} />
          ) : (
            <h2
              id="results-msg"
              style={{ textAlign: "center", margin: "20vh 0" }}
            >
              No matching results
            </h2>
          )}
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.data.posts,
});
export default connect(mapStateToProps, null)(Header);
