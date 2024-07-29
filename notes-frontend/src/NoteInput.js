// src/NoteInput.js
import React, { Component } from 'react';
import axios from 'axios';
import './NoteInput.css';

class NoteInput extends Component {
  state = {
    content: ''
  };

  saveNote = async () => {
    const { content } = this.state;
    if (content.trim() === '') {
      alert('Note content cannot be empty');
      return;
    }

    try {
      const response = await axios.post('https://bhagyav2back-8.onrender.com/notes', { content });
      if (response.status === 201) {
        this.setState({ content: '' }, () => {
          alert('Note saved!');
          this.props.onSave();
        });
      } else {
        alert('Note is not saved');
      }
    } catch (error) {
      console.error('Error saving note:', error);
      alert('Note is not saved');
    }
  };

  handleChange = (event) => {
    this.setState({ content: event.target.value });
  };

  render() {
    return (
      <div className="note-input">
        <textarea
          value={this.state.content}
          onChange={this.handleChange}
          placeholder="Write your note here..."
        />
        <button onClick={this.saveNote}>Save Note</button>
      </div>
    );
  }
}

export default NoteInput;
