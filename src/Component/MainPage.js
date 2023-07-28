import React, { Component } from 'react';
import Popup from './Popup';

class MainPage extends Component {
  state = {
    showPopup: true,
  };

  handleClosePopup = () => {
    this.setState({ showPopup: false });
  };

  render() {
    return (
      <div>
        {this.state.showPopup && <Popup />}
        <h1>Welcome to the Main Page</h1>
      </div>
    );
  }
}

export default MainPage;