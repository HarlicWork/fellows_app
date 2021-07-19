import React from "react";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  makeStyles,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 200,
  },
});

const AppCard = ({ fellow, handleDelete }) => {
  const classes = useStyles();
  let num = Math.floor(Math.random() * 30);

  return (
    <div>
      <Card className={classes.root} elevation={3}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={`https://randomuser.me/api/portraits/men/${num}.jpg`}
            title="Fellow Image"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {fellow.name}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {fellow.desc}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Learn More
          </Button>
          <Box mr={7}> </Box>
          <Button
            size="small"
            color="secondary"
            onClick={() => handleDelete(fellow.id)}
          >
            Delete
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default AppCard;
