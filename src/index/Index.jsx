import { Component, PropTypes } from 'react';

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index : 0
    };
  }
  onUpVoteClick(){
    let index = this.state.index + 1;
    this.setState({index});
  }
  render() {
    return (
      <div className="index">
        <h3> Blah asf sasfd ds{this.state.index}</h3>
        <button type="button" onClick={this.onUpVoteClick.bind(this)}> Up Vote </button>
      </div>
    )
  }
}
