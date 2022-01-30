import { useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { DrawerHeader } from "./DrawerHeader";
import { Item as Items } from "./Item";
import TextField from "@mui/material/TextField";
import AddNoteModal from "./AddNoteModal";
import Swal from "sweetalert2";
import DisabledByDefaultIcon from "@mui/icons-material/DisabledByDefault";
import AddBookModal from "./AddBookModal";

const ReadingList = ({ theme }) => {
    // debugger
  const [books, setBooks] = useState(JSON.parse(localStorage.getItem("Books"))||[]);
  const [bookModal, setBookModal] = useState(false);
  const [seeMore , setSeeMore] = useState(false)

  const ConfirmDelete = (ID) => {
    console.log(`ID => `, ID);
    Swal.fire({
      title: "Are you sure you want to delete this bookmark?",
      text: "You won't be able to revert this!",
      icon: "warning",
      background: theme.palette.mode === "dark" ? "#353535" : "fff",
      color: theme.palette.mode === "dark" ? "white" : "black",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        setBooks(books.filter((book, index) => index !== ID));
        let n = JSON.parse(localStorage.getItem("Books")).filter(
          (book, index) => index !== ID
        );
        localStorage.setItem("Books", JSON.stringify(n));
        Swal.fire("Deleted!", "Bookmark has been deleted.", "success");
      }
    });
  };

  //   const updateNewNote = (e) => {
  //     if (e.target.value !== "\n") setNewNote(e.target.value);
  //   };

  const Item = Items();

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Grid
        container
        // height="calc(100vh - 104px)"
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      >
        {books.map((book, index) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
            style={{ maxWidth: "578px", maxHeight: "290px" }}
          >
            <Item
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                cursor: "pointer",
              }}
              onClick={() => window.open(book[1])}
            >
              <div style={{ position: "relative", padding: "20px" }}>
                <span
                  style={{
                    position: "absolute",
                    left: "0",
                    top: "0",
                    // backgroundColor: "grey",
                    marginBottom: "5px",
                    marginRight: "5px",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      display: "block",
                      cursor: "pointer",
                    }}
                    onClick={() => ConfirmDelete(index)}
                  >
                    <DisabledByDefaultIcon color="error" />
                  </div>
                </span>
                <span>
                  <h1>
                    <div
                      style={{
                        display: "block",
                        maxWidth: "500px",
                        maxHeight: "290px",
                      }}
                    >
                      {book[0]} <br />
                      {/* {book[1]} */}
                    </div>
                  </h1>
                </span>
              </div>
              {/* <span style={{ overflow: "auto" }}>{book[1]}</span> */}
            </Item>
          </Grid>
        ))}
        <Grid
          style={{ maxWidth: "578px", maxHeight: "290px" }}
          item
          xs={12}
          sm={6}
          md={4}
        >
          <Item
            onClick={() => setBookModal(!bookModal)}
            style={{
              textAlign: "center",
              alignItems: "center",
              alignContent: "center",
              display: "flex",
              justifyContent: "center",
              cursor: "pointer",
            }}
          >
            <h1> + Add New Bookmark</h1>
            {/* <Button onClick={() => setNoteModal(!noteModal)}>Show</Button> */}
          </Item>
        </Grid>
      </Grid>

      <AddBookModal
        show={bookModal}
        setShow={setBookModal}
        books={books}
        setBooks={setBooks}
      />
    </Box>
  );
};

export default ReadingList;
