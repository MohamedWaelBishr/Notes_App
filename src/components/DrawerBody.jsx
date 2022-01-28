import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { DrawerHeader } from "./DrawerHeader";
import { Item } from "./Item";
import TextField from "@mui/material/TextField";

const DrawerBody = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");

  const addNewNote = (e) => {
    if (e.key === "Enter" && newNote.length) {
      e.preventDefault();
      setNotes([newNote, ...notes]);
      setNewNote("");
    }
  };

  const updateNewNote = (e) => {
    if (e.target.value !== "\n") setNewNote(e.target.value);
  };
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Grid
        container
        height="calc(100vh - 104px)"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {notes.map((note, index) => 
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Item>{note}</Item>
          </Grid>
        )}
        <Grid item xs={12} sm={6} md={4}>
          <Item>
            <TextField
              id="outlined-multiline-static"
              label="Note"
              multiline
              rows={4}
              placeholder="write new note"
              variant="standard"
              required={true}
              value={newNote}
              onKeyPress={addNewNote}
              onChange={updateNewNote}
            />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
};

export default DrawerBody;
