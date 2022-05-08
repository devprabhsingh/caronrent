import React, { Component } from "react";
import Post from "./Post";

export default class Posts extends Component {
  render() {
    return (
      <div id="post-container">
        <h1>{this.props.title ? this.props.title : "Popular Deals"}</h1>
        <div className="posts">
          {this.props.posts.map((post, i) => (
            <Post post={post} key={i} sendId={this.sendIdToMain} />
          ))}
        </div>
      </div>
    );
  }
}
