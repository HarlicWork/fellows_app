import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  btn: {
    fontSize: 15,
    color: "while",
    // backgroundColor: "#3f50b5",
    // "&:hover": {
    //   backgroundColor: "#757ce8",
    // },
  },
});

const AppButton = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.btn}
      onClick={props.onClick}
      type={props.type}
      color={props.color}
      variant={props.variant}
      endIcon={props.endIcon}
    >
      {props.children}
    </Button>
  );
};

export default AppButton;
