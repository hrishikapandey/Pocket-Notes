import React, { useState } from 'react';
import MenuSideBar from '../MenuSideBar/MenuSideBar';
import NotesDisplay from '../Notedisplay/NotesDisplay';
import styles from "./MainPage.module.css";
import CreateNoteModal from '../../modal/CreateNoteModal';
import useNotes from '../../Hooks/useNotes';
const MainPage = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { selected, notes, isMobile, display } = useNotes();
  return (
    <div className={styles.container}>
      {isMobile ?
      <>
      {
        !display ? <MenuSideBar setModalIsOpen={setModalIsOpen} /> : <NotesDisplay />
      }
      </> : 
      <>
        <MenuSideBar setModalIsOpen={setModalIsOpen} />
        <NotesDisplay />
      </>}
        {modalIsOpen && <CreateNoteModal setModalIsOpen={setModalIsOpen} />}


    </div>
  );
}

export default MainPage;
