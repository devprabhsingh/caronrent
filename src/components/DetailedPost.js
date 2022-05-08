import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import Posts from "./Posts";
import { Link } from "react-router-dom";
class DetailedPost extends Component {
  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const post = this.props.post;
    return (
      <Fragment>
        <div id="detailed-post-box">
          <h2>
            <img
              onClick={() => (window.location.href = "/")}
              src="https://img.icons8.com/external-creatype-blue-field-colourcreatype/64/000000/external-arrow-arrows-creatype-blue-field-colourcreatype-61.png"
            />
            {post.brand + " " + post.model + " " + post.model_year}
          </h2>
          <div className="post-images">
            <img alt="img1" src={`data:image/jpeg;base64,${post.img1}`} />
            <img alt="img1" src={`data:image/jpeg;base64,${post.img2}`} />
            <img alt="img1" src={`data:image/jpeg;base64,${post.img3}`} />
          </div>
          <div id="details">
            <div className="general-details">
              <h2>Details</h2>
              <h4>Model Year : {post.model_year}</h4>
              <h4>Color : {post.color}</h4>
              <h4>Body : {post.body_type}</h4>
              <h4>
                Mileage :{" "}
                {post.brand === "Tesla"
                  ? post.combined_avg + "MPGe"
                  : post.combined_avg + "L/KM"}{" "}
              </h4>
              <h4>Maximum hold period : {post.max_hold_period} months</h4>
            </div>
            <div className="pricing">
              <h2>Pricing</h2>
              <h3>Weekly price : ${post.per_week_base_price}</h3>
              <h3>Price per KM : ${post.price_per_km}</h3>
              <p>No other fees</p>
            </div>
          </div>
          <Link className="submit" to="bookingform">
            Book Now
          </Link>
        </div>
        <Posts title="Other Deals" posts={this.props.posts} />
      </Fragment>
    );
  }
}
const mapStateToProps = (state) => ({
  post: state.data.post,
  posts: state.data.posts,
});
export default connect(mapStateToProps, null)(DetailedPost);
