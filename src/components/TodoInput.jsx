import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const TodoInput = ({ addTodo }) => {
  const [todoInput, setTodoInput] = useState("");

  /**
   * Method to submit
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!todoInput.trim()) {
      return; // Prevent submitting empty to-do items
    }

    const newTodo = {
      title: todoInput,
      completed: false,
    };

    await addTodo(newTodo); // Call addTodo from App
    setTodoInput(""); // Clear input after submission
  };

  /**
   * Method to update setTodoInput
   */
  const handleChange = (e) => {
    setTodoInput(e.target.value);
  };

  return (
    <div>
      {todoInput}
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          width: 300,
          margin: "0 auto",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Name"
          name="name"
          value={todoInput}
          onChange={handleChange}
          variant="outlined"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default TodoInput;
