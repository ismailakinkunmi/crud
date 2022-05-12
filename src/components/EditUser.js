import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function EditUser() {
  const [userInput, setUserInput] = useState({
    editting: false,
  });

  const handleOnchangeInput = (e) => {
    setUserInput({
      title: e.target.value,
    });
  };

  const handleEditing = () => {
    console.log("editing");
  };

  return (
    <Form>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="Enter name"
          value=""
          onChange={handleOnchangeInput}
        />
      </FormGroup>
      <Button type="submit" onClick={handleEditing}>
        Edit User
      </Button>
      <Link to="/" className="btn btn-danger ms-2">
        Back To Home Page
      </Link>
    </Form>
  );
}

export default EditUser;
