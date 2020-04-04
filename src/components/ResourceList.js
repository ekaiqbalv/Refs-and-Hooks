import React, { Component } from "react";
import axios from "axios";

class ResourceList extends Component {
  state = { resources: [] };

  async componentDidMount() {
    const respone = await axios.get(
      `http://jsonplaceholder.typicode.com/${this.props.resource}`
    );

    this.setState({ resources: respone.data });
  }

  async componentDidUpdate(prevProps) {
    if (prevProps.resource !== this.props.resource) {
      const respone = await axios.get(
        `http://jsonplaceholder.typicode.com/${this.props.resource}`
      );

      this.setState({ resources: respone.data });
    }
  }

  render() {
    return <div>{this.state.resources.length}</div>;
  }
}

export default ResourceList;
