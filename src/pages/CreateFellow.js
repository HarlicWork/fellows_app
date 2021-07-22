import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import AppButton from "../components/AppButton";

import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import AppInput from "../components/AppInput";
import AppSelect from "../components/AppSelect";

const CreateFellow = (props) => {
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
      value: "BAES",
    },
    {
      value: "STDI",
    },
    {
      value: "MHS",
    },
    {
      value: "MPES",
    },
    {
      value: "SSH",
    },
    {
      value: "CS",
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
      fetch("http://localhost:8000/fellows", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, age, selectDisc, desc }),
      }).then(() => history.push("/list"));
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
        <AppInput
          label="Name"
          variant="outlined"
          required="true"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={nameIsValid}
        />

        <AppInput
          label="Age"
          variant="outlined"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          error={ageIsValid}
          required="true"
          defaultValue="1"
          inputProps={{
            type: "number",
            min: "1",
            max: "120",
            step: "1",
          }}
        />

        <AppSelect onChange={(e) => setSelectDisc(e.target.value)}>
          {discType.map((option) => (
            <option key={option.value} value={option.value}>
              {option.value}
            </option>
          ))}
        </AppSelect>

        <AppInput
          label="Fellow Description"
          variant="outlined"
          required="true"
          multiline="true"
          rows="10"
          fullWidth="true"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          error={descIsValid}
          helperText="Please enter fellow short description"
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
