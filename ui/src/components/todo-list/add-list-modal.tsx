// fx
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  DialogActions,
  Button
} from "@material-ui/core";

// app
import api from "../../api";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
}

const AddListModal: React.FC<Props> = props => {
  const [title, setTitle] = useState("");

  const addList = () => {
    api.todoLists.post({ title: title, id: 0, items: [] });
    props.handleClose();
  };

  return (
    <Dialog onClose={props.handleClose} open={props.isOpen}>
      <DialogTitle>Add new todo list</DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          id="title"
          label="Title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={props.handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={addList} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddListModal;
