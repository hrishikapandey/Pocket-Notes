import React from 'react';
import styles from "./MenuSideBar.module.css";
import SideBarOptions from '../../Components/SideBarOptions';
import useNotes from '../../Hooks/useNotes';
const MenuSideBar = ({ setModalIsOpen }) => {

  const { selected, setSelected, isMobile, setDisplay } = useNotes();
  const { notes } = useNotes();
  function handelClick(e) {
    setModalIsOpen(true);
  }


  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h1 className={styles.header}>Pocket Notes</h1></div>
      <div className={styles.idList}>
        {notes.map((item, index) => (
          <ul>
            <SideBarOptions key={index} item={item} />
          </ul>
        ))}
      </div>
      <div className={styles.additionSymbol} onClick={(e) => handelClick(e)}> <h1>+</h1> </div>


    </div>
  );
}

export default MenuSideBar;
