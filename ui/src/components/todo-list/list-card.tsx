// fx
import React from "react";
import {
  Card,
  CardHeader,
  Icon,
  IconButton,
  CardContent,
  makeStyles  
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: "100%",
    height: "100%"
  }
}));

interface Props {
  listId: number;
  addItem: (isOpen: boolean) => void;
}

const ListCard: React.FC<Props> = props => {
  // styles
  const classes = useStyles();

  // markup
  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={<Icon>list_alt</Icon>}
        title={`List ${props.listId}`}
        action={
          <IconButton onClick={() => props.addItem(true)}>
            <Icon>add</Icon>
          </IconButton>
        }
      />

      <CardContent>        
        {props.children}
      </CardContent>
    </Card>
  );
};

export default ListCard;
