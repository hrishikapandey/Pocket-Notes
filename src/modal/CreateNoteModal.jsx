import { useEffect, useRef, useState } from "react";
import { v4 } from "uuid";
import styles from "./CreateNoteModal.module.css";
import useNotes from "../Hooks/useNotes";
import ColorCircle from "./ColorCircle";

const colorList = [
  "#B38BFA",
  "#FF79F2",
  "#43E6FC",
  "#F19576",
  "#0047FF",
  "#6691FF",
];
function CreateNoteModal({ setModalIsOpen }) {
  const [selectedColor, setSelectedColor] = useState("#0047ff");
  const [name, setName] = useState("");
  const { setNotes } = useNotes();
  const handelChange = (e) => {
    setName(e.target.value);
  };
  const handelClick = (color) => {
    setSelectedColor(color);
  };
  const handelCreateGroup = (e) => {
    e.preventDefault();
    const initials = name.toUpperCase().slice(0, 2);
    const newName = name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
    const newNote = {
      name: newName,
      color: selectedColor,
      initials,
      id: v4(),
    };
    setNotes((notes) => [...notes, newNote]);
    setName("");
    setSelectedColor("#0047ff");
    setModalIsOpen(false);
  };

  function useOutsideAlerter(ref) {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setModalIsOpen(false);
        }
      }
      
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return (
    <>
      <div className={styles.modal} ref={wrapperRef}>

        <p className={styles.heading}>Create New Notes Group</p>
        
        <form onSubmit={handelCreateGroup}>
          <div className={styles.groupname}>
            <label htmlFor="groupname">Group name</label>
            <input
              type="text"
              placeholder="Enter Your Groupe Name..."
              id="groupname"
              value={name}
              onChange={(e) => handelChange(e)}
              required
            />
          </div>
          <div className={styles.color}>
            <label>Choose colour</label>
            <ul>
              {colorList.map((color) => (
                <ColorCircle
                  color={color}
                  selectedColor={selectedColor}
                  handelClick={handelClick}
                  key={color}
                />
              ))}
            </ul>
          </div>
          <button className={styles.btn}>Create</button>
        </form>
      </div>
      <div className={styles.overlay}></div>
    </>
  );
}

export default CreateNoteModal;
