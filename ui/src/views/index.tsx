// fx
import React, { useState } from "react";
import { AppBar, Toolbar, makeStyles, Grid } from "@material-ui/core";

// app
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
              selectedIndex={selectedList}
              handleListClick={handleListClick}
              addList={setAddListModalOpen}
            />
          </Grid>
          <Grid item xs={8}>
            <ListCard listId={selectedList} addItem={setAddItemModalOpen}>
              <ItemList
                listId={selectedList}
                handleItemClick={handleItemClick}                
              />
            </ListCard>
          </Grid>
        </Grid>

        <AddListModal
          isOpen={addListModalOpen}
          handleClose={() => {
            setAddListModalOpen(false);
          }}
        />

        <AddItemModal
          listId={selectedList}
          isOpen={addItemModalOpen}
          handleClose={() => {
            setAddItemModalOpen(false);
          }}
        />

        <EditItemModal
          listId={selectedList}
          itemId={selectedItem}
          isOpen={editItemModalOpen}
          handleClose={() => {
            setEditItemModalOpen(false);
          }}
        />
      </main>
    </div>
  );
};

export default View;
