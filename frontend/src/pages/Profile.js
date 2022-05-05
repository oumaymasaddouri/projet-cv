import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Profile() {
  const user = useSelector((state) => state.userReducer.user);
  return (
    <div>
      <h1>Welcome {user && user.name}</h1>
    </div>
  );
}

export default Profile;