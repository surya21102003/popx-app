import React from "react";

function Account() {
  return (
    <div className="container">
      <h2>Account Settings</h2>
      <div className="profile-card">
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="profile"
          className="avatar"
        />
        <h3>Marry Doe</h3>
        <p>marry@gmail.com</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
        </p>
      </div>
    </div>
  );
}

export default Account;
