import React from "react";
const Title = () => {
  return (
    <div className="btn" style={{ cursor: "default" }}>
      <h1>
         <span
          style={{
            fontSize: "50px",
            background: "linear-gradient(90deg, #6EE7B7, #3B82F6, #9333EA)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "2px 2px 3px rgba(0,0,0,0.3)",
          }}
        >
          Blogify
        </span>
      </h1>
    </div>
  );
};

export default Title;
