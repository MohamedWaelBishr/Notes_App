import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";



export default function AddNodeModal({ show, setShow, notes, setNotes }) {
  const [newNote, setNewNote] = React.useState("");
  const [newNoteTitle, setNewNoteTitle] = React.useState("");

  const handleClose = () => {
    setShow(false);
  };

  const addNewNote = (e) => {
    e.preventDefault();
    setNotes([[newNoteTitle, newNote], ...notes]);
    setNewNote("");
    setShow(false);
    setNewNoteTitle("");
  };

  const updateNewNoteTitle = (e) => {
    if (e.target.value !== "\n") setNewNoteTitle(e.target.value);
  };
  const updateNewNoteContent = (e) => {
    if (e.target.value !== "\n")  setNewNote(e.target.value);
  };

  return (
    <Dialog
      open={show}
      onClose={handleClose}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <DialogTitle>Add New Note</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Fill The Next Input Fields To Add New Note.
        </DialogContentText>
        <DialogContent style={{ width: "100%" }}>
          <TextField
            style={{ width: "100%" }}
            placeholder="write note title"
            variant="standard"
            required={true}
            value={newNoteTitle}
            onChange={updateNewNoteTitle}
          />
        </DialogContent>

        <TextField
          style={{ width: "100%" }}
          id="outlined-multiline-static"
          label="Note"
          multiline
          rows={4}
          placeholder="write note content"
          variant="standard"
          required={true}
          value={newNote}
          onChange={ updateNewNoteContent}
        />
      </DialogContent>
      <DialogContent>
        <Button onClick={addNewNote}>Add</Button>
      </DialogContent>
    </Dialog>
  );
}
