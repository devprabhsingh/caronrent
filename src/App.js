import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SearchBox from "./components/SearchBox";
import DetailedPost from "./components/DetailedPost";
import React from "react";
import BookingForm from "./components/BookingForm";
import { loadPosts } from "./actions/dataActions";
import { connect } from "react-redux";

class App extends React.Component {
  async componentDidMount() {
    await this.props.loadPosts();
    console.log("calling loadpots");
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />

          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="bookadvance" element={<SearchBox />} />
            <Route exact path="detailedPost" element={<DetailedPost />} />
            <Route
              exact
              path="bookadvance/detailedPost"
              element={<DetailedPost />}
            />
            <Route
              exact
              path="detailedpost/bookingform"
              element={<BookingForm />}
            />
          </Routes>

          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}
export default connect(null, { loadPosts })(App);
