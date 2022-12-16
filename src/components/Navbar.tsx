import React from "react";

function Navbar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: " center",
        width: "99%",
        margin: "auto",
        height: "70px",
        padding: "10px",
        borderBottom: "3px solid grey",
        backgroundColor: "lightgrey",
        position: "sticky",
        top: 0,
        borderRadius: "5px",
      }}
    >
      <div
        style={{
          width: "20%",
          justifyContent: "flex-start",
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <div
          style={{
            height: "70px",
            width: "70px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            style={{
              width: "100%",
              height: "100%",
              padding: "5px",
              borderRadius: "50px",
            }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThkmwttykiFW_COWDL1dffwGoI4AHIXkch6g&usqp=CAU"
            alt="letter-cover"
          />
        </div>
      </div>
      <div
        style={{
          width: "40%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h2>Posts</h2>
        <h2>Add Post</h2>
      </div>
    </div>
  );
}

export default Navbar;
