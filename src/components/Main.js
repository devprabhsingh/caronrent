import React, { Component } from "react";
import Posts from "./Posts";
import BookInAdvance from "./BookInAdvance";
import Updates from "./Updates";
import { connect } from "react-redux";

class Main extends Component {
  render() {
    return (
      <main>
        <div id="container">
          <Updates />
          <BookInAdvance />
        </div>
        {this.props.posts.length > 0 ? <Posts posts={this.props.posts} /> : ""}
      </main>
    );
  }
}
const mapStateToProps = (state) => ({
  posts: state.data.posts,
});

export default connect(mapStateToProps, null)(Main);
