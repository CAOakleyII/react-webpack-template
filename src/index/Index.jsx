import { Component, PropTypes } from 'react';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stuff : "t"
    };
  }
  render() {
    return (
      <div className="index">
        <h3> Blah {this.state.stuff}</h3>
      </div>
    )
  }
}
