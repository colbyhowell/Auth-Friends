import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import AddFriend from "../components/AddFriend";
import FriendDisplay from "./FriendDisplay";

const FriendList = () => {
  const [friends, setFriends] = useState();

  useEffect(() => {
    axiosWithAuth()
      .get("/friends")
      .then(res => setFriends(res))
      .catch(err => console.log(err));
  }, []);

  if (!friends) return <div>Loading Friends...</div>;
  return (
    <div>
      <AddFriend friends={friends} />
      <div className="friend-container">
        {friends.data.map(a => (
          <FriendDisplay friends={a} />
        ))}
      </div>
    </div>
  );
};

export default FriendList;
