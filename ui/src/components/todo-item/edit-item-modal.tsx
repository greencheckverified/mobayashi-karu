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
  listId: number;
  itemId: number;
  isOpen: boolean;
  handleClose: () => void;
}

const EditItemModal: React.FC<Props> = props => {
  // state
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  // methods
  const editItem = () => {
    api.todoItems
      .put({
        category: category,
        description: description,
        listId: props.listId,
        id: props.itemId,
        isComplete: false
      })
      .then(() => {
        props.handleClose();
      });
  };

  // markup
  return (
    <Dialog onClose={props.handleClose} open={props.isOpen}>
      <DialogTitle>Add new todo list</DialogTitle>

      <DialogContent>
        <TextField
          autoFocus
          fullWidth
          margin="dense"
          id="category"
          label="Category"
          type="text"
          value={category}
          onChange={e => setCategory(e.target.value)}
        />

        <TextField
          fullWidth
          margin="dense"
          id="description"
          label="Description"
          type="text"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </DialogContent>

      <DialogActions>
        <Button onClick={props.handleClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={editItem} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditItemModal;
