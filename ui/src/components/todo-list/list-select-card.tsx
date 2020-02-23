// fx
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  Icon,
  IconButton,
  CardContent,
  List,
  ListItem,
  makeStyles
} from "@material-ui/core";

// app
import api from "../../api";
import TodoListModel from "../../models/todo-list";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    height: "100%"
  }
}));

interface Props {
  selectedIndex: number;
  handleListClick: (e: React.MouseEvent, id: number) => void;
  addList: (isOpen: boolean) => void;
}

const ListSelectCard: React.FC<Props> = props => {
  const classes = useStyles();

  const [todoLists, setTodoLists] = useState(new Array<TodoListModel>());

  useEffect(() => {
    api.todoLists.get().then(r => {
      setTodoLists(r);
    });
  }, []);

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Icon>list</Icon>}
        title="Lists"
        action={
          <IconButton onClick={() => props.addList(true)}>
            <Icon>add</Icon>
          </IconButton>
        }
      />
      <CardContent>
        <List>
          {todoLists &&
            todoLists.map(l => {
              return (
                <ListItem
                  key={l.id}
                  button
                  selected={props.selectedIndex === l.id}
                  onClick={e => {
                    props.handleListClick(e, l.id);
                  }}
                >
                  {l.id}. {l.title}
                </ListItem>
              );
            })}
        </List>
      </CardContent>
    </Card>
  );
};

export default ListSelectCard;
