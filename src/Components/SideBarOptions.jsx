import React from 'react'
import styles from './SideBarOptions.module.css'
import useNotes from '../Hooks/useNotes';
const SideBarOptions = ({ item }) => {

  const {selected, setSelected, isMobile, setDisplay}  = useNotes();
  if (!item || !item.initials || !item.name) {
    console.error("Invalid item:", item);
    return null; 
  }
  const handelClickItem = (e) => {
    setSelected(item.id);
    if (isMobile) {
      setDisplay(true);
    }
}
  return (
    <div className={styles.container} onClick={(e) => handelClickItem(e)} >
        <div style={{ backgroundColor: `${item.color}` }} className={styles.circle}>{item.initials}</div>
        <div className={styles.groupName}>{item.name}</div>
    </div>
  )
}

export default SideBarOptions
