import React, { Component } from 'react';


import Contacts from './Containers/Contacts'

class App extends Component {
  render() {
    return (
      <div className="App" style={{ flex: 1 }} >
        <div className="contacts" style={{ flex: 1 }} >
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
