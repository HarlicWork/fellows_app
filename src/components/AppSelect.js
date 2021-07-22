import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
  },
});

const AppSelect = (props) => {
  const classes = useStyles();
  return (
    <TextField
    className={classes.field}
      label="Discipline Category"
      variant="outlined"
      color="primary"
      required
      select
      SelectProps={{
        native: true,
      }}
      helperText="Please select your discipline"
      onChange={props.onChange}
    >
      {props.children}
    </TextField>
  );
};

export default AppSelect;
