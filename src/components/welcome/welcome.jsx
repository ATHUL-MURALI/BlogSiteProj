import React from "react";
import "./welcome.css"; // Import the CSS file

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-heading">Welcome to Travel Blog</h1>
        <p className="welcome-description">
          Explore the world through captivating travel stories and breathtaking
          images. Get inspired for your next adventure!
        </p>
        <p className="welcome-admin-contact">
          For any inquiries, please contact the admin at:
          <br />
          Email: alanjose@gmail.com
          <br />
          Phone: 7788992211
        </p>
      </div>
    </div>
  );
};

export default WelcomePage;
