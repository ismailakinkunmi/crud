import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";

function AddUser(props) {
  const [userInput, setUserInput] = useState({
    title: "",
  });

  const onChange = (e) => {
    setUserInput({
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userInput.title.trim()) {
      props.addUserProps(userInput.title);
      setUserInput({
        title: "",
      });
    } else {
      alert("please enter user name");
    }
  };
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input
          type="text"
          placeholder="Enter name"
          value={userInput.title}
          name="title"
          onChange={onChange}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
      <Link to="/" className="btn btn-danger mx-2">
        Cancel
      </Link>
    </Form>
  );
}

export default AddUser;
