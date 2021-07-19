import Button from "@material-ui/core/Button";

const AppButton = (props) => {
  return (
    <Button
      onClick={props.onClick}
      type={props.type}
      color={props.color}
      variant={props.variant}
    >
      {props.children}
    </Button>
  );
};

export default AppButton;
