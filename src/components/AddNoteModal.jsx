import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";



export default function AddNoteModal({ show, setShow, notes, setNotes }) {
  const [newNote, setNewNote] = React.useState("");
  const [newNoteTitle, setNewNoteTitle] = React.useState("");

  const handleClose = () => {
    setNewNote("");
    setShow(false);
    setNewNoteTitle("");
  };

  const addNewNote = (e) => {
    e.preventDefault();
    setNotes([[newNoteTitle, newNote], ...notes]);
    localStorage.setItem(
      "Notes",
      JSON.stringify([[newNoteTitle, newNote], ...JSON.parse(localStorage.getItem('Notes'))])
    );

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
        <DialogContentText style={{ marginBottom: "10px" }}>
          Fill The Next Input Fields To Add New Note.
        </DialogContentText>

        <TextField
          style={{ width: "100%", marginBottom: "10px" }}
          placeholder="write note title"
          variant="filled"
          color={newNoteTitle ? "success" : "primary"}
          required={true}
          label="Note Title"
          fullWidth
          value={newNoteTitle}
          onChange={updateNewNoteTitle}
        />

        <TextField
          style={{ width: "100%" }}
          id="outlined-multiline-static"
          label="Note Content"
          multiline
          rows={4}
          placeholder="write note content"
          variant="filled"
          color={newNote ? "success" : "primary"}
          required={true}
          value={newNote}
          fullWidth
          onChange={updateNewNoteContent}
        />
      </DialogContent>
      <DialogContent>
        <Button
          color="success"
          disabled={newNote && newNoteTitle ? false : true}
          onClick={addNewNote}
        >
          Add
        </Button>
      </DialogContent>
    </Dialog>
  );
}
