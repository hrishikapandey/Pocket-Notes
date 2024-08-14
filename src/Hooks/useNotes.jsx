import { useContext } from "react";
import { NotesContext } from "../Context/MyContext";

function useNotes() {
  const context = useContext(NotesContext);
  return context;
}
export default useNotes;
