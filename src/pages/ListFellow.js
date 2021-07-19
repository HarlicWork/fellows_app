import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
// import Paper from "@material-ui/core/Paper";
import AppCard from "../components/AppCard";

const ListFellow = () => {
  const [fellows, setFellows] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/fellows")
      .then((res) => res.json())
      .then((data) => setFellows(data));
  }, []);

  const handleDelete = async (id) => {
    await fetch("http://localhost:8000/fellows/" + id, {
      method: "DELETE",
    });
    const updatedFellows = fellows.filter((fellow) => fellow.id !== id);
    setFellows(updatedFellows);
  };

  return (
    <Container>
      <Grid container spacing={3}>
        {fellows.map((fellow) => (
          <Grid item key={fellow.id} xs={12} sm={6} md={3}>
            <AppCard fellow={fellow} handleDelete={handleDelete} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ListFellow;


