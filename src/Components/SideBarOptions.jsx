import React from 'react';
import styles from './SideBarOptions.module.css';
import useNotes from '../Hooks/useNotes';

const SideBarOptions = ({ item }) => {
  const { selected, setSelected, isMobile, setDisplay } = useNotes();

  if (!item || !item.name) {
    console.error("Invalid item:", item);
    return null;
  }

  // Extract the first letter of the first and second words in the name
  const getInitials = (name) => {
    const words = name.trim().split(' ');
    const firstInitial = words[0] ? words[0][0].toUpperCase() : '';
    const secondInitial = words[1] ? words[1][0].toUpperCase() : '';
    return `${firstInitial}${secondInitial}`;
  };

  const initials = getInitials(item.name);

  const handleClickItem = (e) => {
    setSelected(item.id);
    if (isMobile) {
      setDisplay(true);
    }
  };

  return (
    <div className={styles.container} onClick={handleClickItem}>
      <div style={{ backgroundColor: `${item.color}` }} className={styles.circle}>
        {initials}
      </div>
      <div className={styles.groupName}>{item.name}</div>
    </div>
  );
};

export default SideBarOptions;
