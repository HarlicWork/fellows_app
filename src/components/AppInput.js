import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
  },
});

const AppInput = (props) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.field}
      fullWidth={props.fullWidth}
      required={props.required}
      multiline={props.multiline}
      rows={props.rows}
      label={props.label}
      helperText={props.helperText}
      variant={props.variant}
      type={props.type}
      defaultValue={props.defaultValue}
      color="primary"
      value={props.value}
      onChange={props.onChange}
      error={props.error}
      inputProps={{ ...props.inputProps }}
    />
  );
};

export default AppInput;
