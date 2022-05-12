import React from "react";
import Header from "./Header";
import UserCard from "./UserCard";

function Home(props) {
  return (
    <>
      <Header />
      <ul className="mt-4">
        {props.users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            deleteUserProp={props.deleteUserProp}
            editUserProps={props.editUserProps}
          />
        ))}
      </ul>
    </>
  );
}

export default Home;
