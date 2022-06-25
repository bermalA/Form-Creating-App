import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";

const Control = () => {
  const [val, setVal] = useState([]);
  const handleAdd = () => {
    const add = [...val, []];
    setVal(add);
  };
  const handleChange = () => {};
  return (
    <div className="control">
      <div style={{ background: "red", height: "70vh",
    display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap' }}>
        <Button variant="outlined" onClick={() => handleAdd()}>
          ADD
        </Button>
        {val.map((data, i) => {
          return <Grid item style={{ minWidth: 240,  flex : 1, border: 'black'}}>grid</Grid>
        })}
      </div>
    </div>
  );
};

export default Control;
