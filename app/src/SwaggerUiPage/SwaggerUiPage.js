import React, { Component } from "react";
import "./SwaggerUiPage.css";
import Logo from "../logo.png";
import slugify from "slugify";
import { Link } from "react-router-dom";
import SelectApi from "../SelectApi/SelectApi";
import SwaggerUI from "swagger-ui-react";
import "swagger-ui-react/swagger-ui.css";

class SwaggerUiPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      availableApis: window._env_.URLS.map(item => ({
        value: slugify(item.name).toLowerCase(),
        label: item.name,
        url: item.url
      })),
      activeApi: {
        url: ""
      }
    };

    const activeApiFromQuery = this.state.availableApis.find(
      element => element.value === this.props.match.params.api
    );

    if (activeApiFromQuery) {
      this.state.activeApi = activeApiFromQuery;
    } else {
      this.props.history.push("/");
    }
  }

  handleChange = selectedApi => {
    this.setState({
      activeApi: selectedApi
    });

    this.props.history.push(selectedApi.value);
  };

  render() {
    return (
      <div>
        <header className="Swagger-ui-header">
          <Link to={"/"}>
            <img src={Logo} alt="Swagger Ui" />
          </Link>

          <SelectApi
            className="select"
            value={this.state.activeApi}
            onChange={this.handleChange}
          />
        </header>
        <section className="container__swagger-ui">
          <SwaggerUI url={this.state.activeApi.url} />
        </section>
      </div>
    );
  }
}

export default SwaggerUiPage;
