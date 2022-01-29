import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";


import Brightness4Icon from "@mui/icons-material/Brightness4";

export default function SettingsModal({ show, setShow, mode ,theme}) {
  const handleClose = () => {
    setShow(false);
  };

  return (
    <Dialog open={show} onClose={handleClose}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContent>
        <DialogContentText style={{ marginBottom: "10px" }}>
          Notes App Settings
        </DialogContentText>
        {/* <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Email Address"
          type="email"
          fullWidth
          variant="standard"
        /> */}
        <Box
          sx={{
            display: "flex",
            width: "100%",
            bgcolor: "background.default",
            color: "text.primary",
            borderRadius: 1,
            p: 3,
          }}
        >
          <h1>
            <FormGroup>
              Activate Dark Mode
              <FormControlLabel
                control={
                  <Switch
                    checked={theme.palette.mode !== "light"}
                    onChange={mode}
                  />
                }
                label={theme.palette.mode !== "light" ? "On" : "Off"}
              />
            </FormGroup>
          </h1>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
