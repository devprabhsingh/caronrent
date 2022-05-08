import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getDetailedPost } from "../actions/dataActions";

class Post extends Component {
  render() {
    const post = this.props.post;
    return (
      <div className="post">
        <img alt="car" src={`data:image/jpeg;base64,${post.img1}`} />
        <div>
          <h3>{post.brand + " " + post.model + " " + post.model_year}</h3>
          <p>${post.per_week_base_price}/week</p>
        </div>
        <div>
          <p>{post.body_type}</p>
          <Link
            onClick={() => {
              this.props.getDetailedPost(post);
              window.scroll(0, 0);
            }}
            className="view-deal-button"
            to="/detailedpost"
          >
            View Deal
          </Link>
        </div>
      </div>
    );
  }
}

export default connect(null, { getDetailedPost })(Post);
