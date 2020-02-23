// fx
import React from "react";
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
import TodoList from "../../models/todo-list";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    height: "100%"
  }
}));

interface Props {
  todoLists: TodoList[];
  selectedIndex: number;
  handleListClick: (e: React.MouseEvent, id: number) => void;
  addList: (isOpen: boolean) => void;
}

const ListSelectCard: React.FC<Props> = props => {
  // styles
  const classes = useStyles();

  // markup
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
          {props.todoLists &&
            props.todoLists.map(l => {
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
