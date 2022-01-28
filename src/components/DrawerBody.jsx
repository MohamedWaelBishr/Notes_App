import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { DrawerHeader } from "./DrawerHeader";
import { Item as Items } from "./Item";
import TextField from "@mui/material/TextField";
import AddNoteModal from "./AddNoteModal";
import Swal from "sweetalert2";

const DrawerBody = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("");
  const [noteModal, setNoteModal] = useState(false);

  const addNewNote = (e) => {
    if (e.key === "Enter" && newNote.length) {
      e.preventDefault();
      setNotes([newNote, ...notes]);
      setNewNote("");
    }
  };

  const ConfirmDelete = (ID) => {
      console.log(`ID => `,ID);
    Swal.fire({
      title: "Are you sure you want to delete this note?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setNotes(notes.filter((note,index) => index !== ID))
        Swal.fire("Deleted!", "Note has been deleted.", "success");
      }
    });
  };

  const updateNewNote = (e) => {
    if (e.target.value !== "\n") setNewNote(e.target.value);
  };

  const Item = Items();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Grid
        container
        height="calc(100vh - 104px)"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {notes.map((note, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Item
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <div style={{position:'relative', padding:'20px'}}>
                <span style={{position:'absolute',left:'0',top:'0',backgroundColor:'red' , marginBottom:'5px',marginRight:'5px'}}>
                  <div style={{width:'30px',display:'block',cursor:'pointer'}} onClick={()=> ConfirmDelete(index)}>X</div>
                </span>
                <span>
                  <h1>{note[0]}</h1>
                </span>
              </div>
              <span>{note[1]}</span>
            </Item>
          </Grid>
        ))}
        <Grid
          style={{ cursor: "pointer" }}
          item
          xs={12}
          sm={6}
          md={4}
          onClick={() => setNoteModal(!noteModal)}
        >
          <Item
            style={{
              textAlign: "center",
              alignItems: "center",
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <h1> + Add New Note</h1>
            {/* <Button onClick={() => setNoteModal(!noteModal)}>Show</Button> */}
          </Item>
        </Grid>
      </Grid>

      <AddNoteModal
        show={noteModal}
        setShow={setNoteModal}
        notes={notes}
        setNotes={setNotes}
      />
    </Box>
  );
};

export default DrawerBody;
