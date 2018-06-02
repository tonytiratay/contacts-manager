import React, { Component } from 'react';


import Contacts from './Containers/Contacts'

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <div className="contacts">
          <Contacts />
        </div>
      </div>
    );
  }
}

export default App;
