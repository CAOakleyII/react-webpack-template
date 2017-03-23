import { Component, PropTypes } from 'react';
import AppLess from './less/App.less';
import MainLess from './less/Main.less';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="container page">
          { this.props.children }
        </div>
      </div>
    )
  }
}
