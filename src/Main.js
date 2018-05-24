import React from 'react'

import Sidebar from './Sidebar'
import NoteList from './NoteList'
import NoteForm from './NoteForm'

class Main extends React.Component {

    constructor() {
        super()
        this.state = {
            notes: [],
            currentNote: this.blankNote(),
        }
    }

    setCurrentNote = (note) => {
        this.setState({currentNote: note})    
    }

    blankNote = () => {
        return ({
            id: null,
            title: '',
            body: '',
        })   
    }

    saveNote = (note) => {
        const notes = [...this.state.notes]

        if (!note.id) {
            note.id = Date.now()
            notes.push(note)
        } else {

            const i = notes.findIndex(currentNote => currentNote.id === note.id)
            notes[i] = note
        }

        this.setState({ notes })
        this.setState({ currentNote: note })

    }

    resetCurrentNote = () => {
        this.setCurrentNote(this.blankNote())    
    }

    deleteNote = (note) => {
      const notes = [...this.state.notes]
      const i = notes.findIndex(currentNote => currentNote.id === note.id)
      notes.splice(i, 1)
      this.setState({ notes })
      this.resetCurrentNote()
  }
  
    render() {
        return (
            <div className='Main' style={style} >
                <Sidebar 
                resetCurrentNote={this.resetCurrentNote}
                />
                <NoteList 
                notes={this.state.notes} 
                setCurrentNote={this.setCurrentNote}
                />
                <NoteForm  
                 currentNote={this.state.currentNote}
                 saveNote={this.saveNote}
                 deleteNote={this.deleteNote}
                 />
            </div>
        )
    }
}
localStorage.setNote('items', JSON.stringify(this.notes));
const data = JSON.parse(localStorage.getNote('notes'));

data.forEach(item => {
  this.notes.push
});

if (localStorage.getNote('notes')) {
  this.notes = JSON.parse(localStorage.getNote('notes'));
} else {
  this.notes = [];
}
const style = {
    display: 'flex',
    height: '100vh',
    alignItems: 'sretch',
}

export default Main