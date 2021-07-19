import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppButton from "../components/AppButton";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "flex",
  },
});

const CreateFellow = (props) => {
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(false);
  const [age, setAge] = useState("");
  const [ageIsValid, setAgeIsValid] = useState(false);
  const [selectDisc, setSelectDisc] = useState("ICTS");
  const [desc, setDesc] = useState("");
  const [descIsValid, setDescIsValid] = useState(false);

  const discType = [
    {
      value: "ICTS",
    },
    {
      value: "STDI",
    },
    {
      value: "MHS",
    },
    {
      value: "ES",
    },
  ];

  const submitHandler = (event) => {
    event.preventDefault();

    setNameIsValid(false);
    setAgeIsValid(false);
    setDescIsValid(false);

    if (name === "") {
      setNameIsValid(true);
    }

    if (age.trim().length === 0) {
      setAgeIsValid(true);
    }

    if (+age < 1) {
      setAgeIsValid(true);
    }

    if (desc === "") {
      setDescIsValid(true);
    }

    if (name && age && desc) {
      const newFellowData = { name, age, selectDisc, desc };
      console.log(newFellowData);
      history.push("/list");
    }
  };

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

      <form noValidate autoComplete="off" onSubmit={submitHandler}>
        <TextField
          className={classes.field}
          label="Name"
          variant="outlined"
          color="primary"
          fullWidth
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={nameIsValid}
        />

        <TextField
          className={classes.field}
          label="Age"
          type="number"
          variant="outlined"
          color="primary"
          min={0}
          required
          value={age}
          onChange={(e) => setAge(e.target.value)}
          error={ageIsValid}
        />

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
          onChange={(e) => setSelectDisc(e.target.value)}
        >
          {discType.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </TextField>

        <TextField
          className={classes.field}
          label="Fellow Description"
          variant="outlined"
          color="primary"
          multiline
          rows={10}
          fullWidth
          helperText="Please enter fellow short description"
          required
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          error={descIsValid}
        />

        <AppButton
          type="submit"
          color="primary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </AppButton>
      </form>
    </Container>
  );
};

export default CreateFellow;
