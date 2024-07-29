import React, { Component } from 'react';
import './App.css';
import NoteInput from './NoteInput';
import NoteList from './NoteList';

class App extends Component {
  state = {
    refresh: false
  };

  handleSave = () => {
    this.setState({ refresh: !this.state.refresh });
  };

  render() {
    return (
      <div className="App">
        <h1>Notes Application</h1>
        <NoteInput onSave={this.handleSave} />
        <NoteList key={this.state.refresh} />
      </div>
    );
  }
}

export default App;
