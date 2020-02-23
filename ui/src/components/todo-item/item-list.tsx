// fx
import React, { useState, useEffect } from "react";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Switch,
  TextField,
  ListSubheader
} from "@material-ui/core";

// app
import api from "../../api";
import TodoItem from "../../models/todo-item";

interface Props {
  todoItems: TodoItem[];  
  listId: number;
  handleItemClick: (e: React.MouseEvent, index: number) => void;
}

const ItemList: React.FC<Props> = props => {
  // state
  const [search, setSearch] = useState("");
  const [searchableItems, setSearchableItems] = useState(new Array<TodoItem>());

  // lifecycle
  useEffect(() => {
    setSearchableItems(props.todoItems);
  }, [props.todoItems]);

  const markComplete = (itemId: number) => {
    const item = props.todoItems.find(i => {
      return i.id === itemId;
    });

    if (item) {
      item.isComplete = !item.isComplete;
      api.todoItems.put(item).then(() => {
        api.todoItems.get(props.listId).then(r => {
          setSearchableItems(r);
        });
      });
    }
  };

  const searchItems = (searchTerm: string) => {
    if (!searchTerm) {
      setSearchableItems(props.todoItems);
    }

    setSearch(searchTerm);

    const items = props.todoItems.filter(i => {
      return (
        i.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        i.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });

    setSearchableItems(items);
  };

  // markup
  return (
    <List
      subheader={
        <ListSubheader component="div">
          <TextField
            autoFocus
            fullWidth
            margin="dense"
            id="search"
            label="Search"
            type="text"
            value={search}
            onChange={e => searchItems(e.target.value)}
          />
        </ListSubheader>
      }
    >
      {searchableItems &&
        searchableItems.map(l => {
          return (
            <ListItem
              key={l.id}
              button
              onClick={e => props.handleItemClick(e, l.id)}
            >
              <ListItemText primary={l.description} secondary={l.category} />
              <ListItemSecondaryAction>
                <Switch
                  edge="end"
                  onChange={() => markComplete(l.id)}
                  checked={l.isComplete}
                />
              </ListItemSecondaryAction>
            </ListItem>
          );
        })}
    </List>
  );
};

export default ItemList;
