// fx
import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, makeStyles, Grid } from "@material-ui/core";

// app
import api from "../api";
import TodoList from "../models/todo-list";
import TodoItem from "../models/todo-item";

import ListCard from "../components/todo-list/list-card";
import ListSelectCard from "../components/todo-list/list-select-card";
import AddListModal from "../components/todo-list/add-list-modal";
import AddItemModal from "../components/todo-item/add-item-modal";
import EditItemModal from "../components/todo-item/edit-item-modal";
import ItemList from "../components/todo-item/item-list";

const navHeight = "3rem";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexGrow: 1,
    height: "100%"
  },
  appBar: {
    height: navHeight,
    boxShadow: "none"
  },
  toolbar: {
    minHeight: navHeight
  },
  spacer: {
    flexGrow: 1
  },
  main: {
    height: `calc(100% - ${navHeight})`,
    marginTop: navHeight,
    padding: "1rem",
    textAlign: "center",
    width: "100%"
  },
  grid: {
    height: "100%"
  }
}));

const View = () => {
  // styles
  const classes = useStyles();

  // state
  const [selectedList, setSelectedList] = useState(0);
  const [selectedItem, setSelectedItem] = useState(0);

  const [addListModalOpen, setAddListModalOpen] = useState(false);
  const [addItemModalOpen, setAddItemModalOpen] = useState(false);
  const [editItemModalOpen, setEditItemModalOpen] = useState(false);

  const [todoLists, setTodoLists] = useState(new Array<TodoList>());
  const [todoItems, setTodoItems] = useState(new Array<TodoItem>());

  // lifecycle
  useEffect(() => {
    loadLists();
  }, []);

  const loadLists = () => {
    api.todoLists.get().then(r => {
      setTodoLists(r);
    });
  };

  // lifecycle
  useEffect(() => {
    loadItems();
  }, [selectedList]);

  // methods
  const loadItems = () => {
    if (selectedList) {
      api.todoItems.get(selectedList).then(r => {        
        setTodoItems(r);
      });
    }
  };

  // methods
  const handleListClick = (e: React.MouseEvent, index: number) => {
    setSelectedList(index);
  };

  const handleItemClick = (e: React.MouseEvent, index: number) => {
    setSelectedItem(index);
    setEditItemModalOpen(true);
  };

  // markup
  return (
    <div className={classes.root}>
      <header>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            Todo List App
            <div className={classes.spacer} />
            Ben Burke
          </Toolbar>
        </AppBar>
      </header>

      <main className={classes.main}>
        <Grid container spacing={3} className={classes.grid}>
          <Grid item xs={4}>
            <ListSelectCard
              todoLists={todoLists}
              selectedIndex={selectedList}
              handleListClick={handleListClick}
              addList={setAddListModalOpen}
            />
          </Grid>
          <Grid item xs={8}>
            <ListCard listId={selectedList} addItem={setAddItemModalOpen}>
              <ItemList
                todoItems={todoItems}                
                listId={selectedList}
                handleItemClick={handleItemClick}
              />
            </ListCard>
          </Grid>
        </Grid>

        <AddListModal
          isOpen={addListModalOpen}
          handleClose={() => {
            loadLists();
            setAddListModalOpen(false);
          }}
        />

        <AddItemModal
          listId={selectedList}
          isOpen={addItemModalOpen}
          handleClose={() => {
            loadItems();
            setAddItemModalOpen(false);
          }}
        />

        <EditItemModal
          listId={selectedList}
          itemId={selectedItem}
          isOpen={editItemModalOpen}
          handleClose={() => {
            loadItems();
            setEditItemModalOpen(false);
          }}
        />
      </main>
    </div>
  );
};

export default View;
