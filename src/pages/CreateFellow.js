import Typography from "@material-ui/core/Typography";

import Container from "@material-ui/core/Container";

import AppButton from "../components/AppButton";

const CreateFellow = (props) => {
  return (
    <Container>
      <Typography
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create New Fellow
      </Typography>

      <AppButton
        onClick={() => console.log("button clicked")}
        type={props.submit}
        color="secondary"
        variant="contained"
      >
        Submit
      </AppButton>
    </Container>
  );
};

export default CreateFellow;
