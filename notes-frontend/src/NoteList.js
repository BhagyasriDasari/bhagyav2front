import React, { Component } from 'react';
import axios from 'axios';
import './NoteList.css';

class NoteList extends Component {
  state = {
    notes: []
  };

  fetchNotes = async () => {
    try {
      const response = await axios.get('https://bhagyav2back-8.onrender.com/notes');
      this.setState({ notes: response.data });
    } catch (error) {
      console.error('Error fetching notes:', error);
    }
  };

  deleteNote = async (id) => {
    try {
      await axios.delete(`https://bhagyav2back-8.onrender.com/notes/${id}`);
      this.fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  componentDidMount() {
    this.fetchNotes();
  }

  render() {
    return (
      <div className="note-list">
        <button onClick={this.fetchNotes}>List Notes</button>
        <ul>
          {this.state.notes.map((note) => (
            <li key={note.id}>
              {note.content}
              <button onClick={() => this.deleteNote(note.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default NoteList;
