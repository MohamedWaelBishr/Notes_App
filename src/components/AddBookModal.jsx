import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddBookModal({ show, setShow, books, setBooks }) {
  const [newBook, setNewBook] = React.useState("");
  const [newBookTitle, setNewBookTitle] = React.useState("");

  const handleClose = () => {
    setNewBook("");
    setShow(false);
    setNewBookTitle("");
  };

  var expression =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
  var regex = new RegExp(expression);

  const addNewBook = (e) => {
    let tmp=''
    e.preventDefault();
    if (newBook.match(regex)) {
      if (!newBook.startsWith("https://") && !newBook.startsWith("http://")) {
        tmp = "https://" + newBook;
      }
        setBooks([[newBookTitle, tmp !='' ? tmp : newBook], ...books]);

      localStorage.setItem(
        "Books",
        JSON.stringify([
          [newBookTitle, tmp != "" ? tmp : newBook],
          ...(JSON.parse(localStorage.getItem("Books"))||[]),
        ])
      );
      setNewBook("");
      setShow(false);
      setNewBookTitle("");
    } else {
      alert("Enter A Valid URL");
      setNewBook("");
    }
  };

  const updateNewBookTitle = (e) => {
    if (e.target.value !== "\n") setNewBookTitle(e.target.value);
  };
  const updateNewBookContent = (e) => {
    if (e.target.value !== "\n") setNewBook(e.target.value);
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
      <DialogTitle>Add New Bookmark</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ marginBottom: "10px" }}>
          Fill The Next Input Fields To Add New Bookmark.
        </DialogContentText>

        <TextField
          style={{ width: "100%", marginBottom: "10px" }}
          placeholder="write book title"
          variant="filled"
          color={newBookTitle ? "success" : "primary"}
          required={true}
          label="Bookmark Title"
          fullWidth
          value={newBookTitle}
          onChange={updateNewBookTitle}
        />

        <TextField
          style={{ width: "100%" }}
          id="outlined-multiline-static"
          label="Bookmark URL"
          placeholder="write book content"
          variant="filled"
          color={newBook ? "success" : "primary"}
          required={true}
          value={newBook}
          fullWidth
          onChange={updateNewBookContent}
        />
      </DialogContent>
      <DialogContent>
        <Button
          color="success"
          disabled={newBook && newBookTitle ? false : true}
          onClick={addNewBook}
        >
          Add
        </Button>
      </DialogContent>
    </Dialog>
  );
}
