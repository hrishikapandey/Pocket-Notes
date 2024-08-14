import { useState } from "react";
import styles from './Notes.module.css';
import useNotes from '../../Hooks/useNotes';
import send from '../../assets/sendbtn.png';

const Notes = ({ setNotesData }) => {
    const { selected } = useNotes();
    const [notesText, setNotesText] = useState("");

    const handelSaveNotes = () => {
      const note = JSON.parse(localStorage.getItem(selected)) || [];
      const data = {
        text: notesText,
        date: new Date().toLocaleDateString("en-GB", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }),
        time: new Date().toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
        }),
      };
      note.push(data);
      localStorage.setItem(selected, JSON.stringify(note));
      setNotesText("");
      setNotesData(note);
    };

    const handelEnterKey = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        handelSaveNotes();
      }
    };

    const handelChange = (e) => {
      setNotesText(e.target.value);
    };

    return (
        <div className={styles.input}>
            <div className={styles.form}>
                <textarea
                    required
                    className={styles.textarea}
                    placeholder="Enter Your Text Here..."
                    autoFocus
                    value={notesText}
                    onChange={handelChange}
                    onKeyDown={handelEnterKey}
                />
                <button
                  className={`${styles.btn} ${notesText ? styles.active : ''}`}
                  onClick={handelSaveNotes}
                  disabled={!notesText} 
                >
                  {notesText && <img src={send} alt="send icon" />}
                </button>
            </div>
        </div>
    );
};

export default Notes;
