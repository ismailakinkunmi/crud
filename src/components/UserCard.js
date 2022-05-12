import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function UserCard(props) {
  return (
    <li className="d-flex justify-content-between mb-4">
      <strong>{props.user.title}</strong>
      <div>
        <Link className="btn btn-warning me-2" to="/edit/:id">
          Edit
        </Link>
        <Button onClick={(e) => props.deleteUserProp(e, props.user.id)}>
          Delete
        </Button>
      </div>
    </li>
  );
}

export default UserCard;
