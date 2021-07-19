import React, { useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import AppCard from "../components/AppCard";
import Masonry from "react-masonry-css";

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

  const breakpoints = {
    default: 3,
    1100: 2,
    700: 1,
    500: 1,
  };

  return (
    <Container>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {fellows.map((fellow) => (
          <div item key={fellow.id} xs={12} sm={6} md={3}>
            <AppCard fellow={fellow} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default ListFellow;
