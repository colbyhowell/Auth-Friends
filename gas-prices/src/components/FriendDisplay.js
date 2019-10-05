import React from "react";

const FriendDisplay = props => {
  console.log(props);
  return (
    <div className="friend-box">
      <div className="friend-name">Name: {props.friends.name}</div>
      <div className="friend-age">Age: {props.friends.age}</div>
      <div className="friend-email">Email: {props.friends.email}</div>
    </div>
  );
};

export default FriendDisplay;
