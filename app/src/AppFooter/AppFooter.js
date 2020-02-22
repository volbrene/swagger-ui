import React, { Component } from "react";
import "./AppFooter.css";

class AppFooter extends Component {
  render() {
    return (
      <footer>
        <a
          className="copyright"
          href="https://hub.docker.com/r/volbrene/swagger-ui"
        >
          created by volbrene
        </a>
      </footer>
    );
  }
}

export default AppFooter;
