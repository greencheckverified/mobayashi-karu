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
  isOpen: boolean;
  handleClose: () => void;
}

const AddItemModal: React.FC<Props> = props => {
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");

  const addItem = () => {
    api.todoItems.post({
      category: category,
      description: description,
      listId: props.listId,
      id: 0,
      isComplete: false
    });

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
        <Button onClick={addItem} color="primary">
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddItemModal;
