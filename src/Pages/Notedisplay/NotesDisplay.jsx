import React from 'react'
import styles from "./NotesDisplay.module.css"
import NotesHomePage from './NotesHomePage'
import NotesByKey from './NotesByKey'
import useNotes from '../../Hooks/useNotes'
import { useEffect } from 'react'
const NotesDisplay = (props) => {
  const { selected } = useNotes();
  return (
    <div className={styles.container}>
      {selected === "" ? <NotesHomePage/> : <NotesByKey/>}
    </div>


  )
}

export default NotesDisplay