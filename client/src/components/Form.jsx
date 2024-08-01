import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Container, Typography } from "@mui/material";
import { Input } from "@mui/material";
import { useNavigate } from "react-router-dom";
export default function Form() {
  const navigate = useNavigate();
  const initialData = {
    fullname: "",
    age: "",
    pin: "",
    file: null,
  };
  const [error, setError] = useState("");
  const [data, setData] = useState(initialData);

  const handleChange = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
    console.log(name, value);
  };

  const handleSubmit = (e) => {
    if (data.fullname && data.age && data.pin && data.file) {
      e.preventDefault();
      console.log(data);
    }
    else{
        setError("please filled all field")
    }
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h6" component="h2">
        Full Name
      </Typography>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        name="fullname"
        onChange={handleChange}
        value={data.fullname}
      />
      <Typography variant="h6" component="h2">
        Full Name
      </Typography>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        name="age"
        onChange={handleChange}
        value={data.age}
      />
      <Typography variant="h6" component="h2">
        Full Name
      </Typography>
      <TextField
        id="standard-basic"
        label="Standard"
        variant="standard"
        name="pin"
        onChange={handleChange}
        value={data.pin}
      />
      <Input
        type="file"
        name="image"
        onChange={handleChange}
        value={data.file}

      />
      <Button onClick={handleSubmit}>Submit</Button>

      <Button onClick={() => navigate("/list")}>Go</Button>
      {error}
    </div>
  );
}
