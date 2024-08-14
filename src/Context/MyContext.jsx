import { createContext,useEffect,useState } from "react";
const NotesContext = createContext();
const NOTES_KEY = "Notes";
function NotesProvider({ children }) {
    const [notes, setNotes] = useState(
      JSON.parse(localStorage.getItem(NOTES_KEY)) || []
    );
    const [selected, setSelected] = useState("");
    const [isMobile, setIsMobile] = useState(false);
    const [display, setDisplay] = useState(false);
    useEffect(() => {
        
        const handleResize = () => {
          setIsMobile(window.innerWidth < 600);
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
          };
        }, []);
        useEffect(() => {
            if (notes.length > 0)
              localStorage.setItem(NOTES_KEY, JSON.stringify(notes));
          }, [notes]);
        
          return (
            <NotesContext.Provider
              value={{
                notes,
                setNotes,
                selected,
                setSelected,
                isMobile,
                display,
                setDisplay,
              }}
            >
              {children}
            </NotesContext.Provider>
          );
        }
        export default NotesProvider;
        export { NotesContext, NOTES_KEY };
        