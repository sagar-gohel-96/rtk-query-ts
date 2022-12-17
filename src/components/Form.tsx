import React, { useState } from "react";
import { useAddPostMutation } from "../services/postApi";
import "../Form.css";
import { Navbar } from "./Navbar";
export const Form = () => {
  const [formDetails, setFormDetails] = useState({
    title: "",
    body: "",
  });
  const [addPost] = useAddPostMutation();
  return (
    <div className="form">
      <div className="navbar">
        <Navbar />
      </div>
      <div
        className="form-container"
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "20px",
          alignItems: "center",
          width: "60%",
          margin: "auto",
          height: "auto",
        }}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFormDetails({ title: "", body: "" });
            addPost(formDetails);
          }}
          style={{
            width: "50%",
            padding: "50px",
            backgroundColor: "rgb(241, 241, 241)",
          }}
        >
          <label htmlFor="">Title :</label>
          <br />
          <input
            type="text"
            placeholder="Enter your post title"
            name="title"
            value={formDetails.title}
            onChange={(e) =>
              setFormDetails({ ...formDetails, title: e.target.value })
            }
          />
          <br />
          <label htmlFor="">Description :</label>
          <br />
          <textarea
            value={formDetails.body}
            id="body"
            onChange={(e) =>
              setFormDetails({ ...formDetails, body: e.target.value })
            }
          ></textarea>
          <br />
          <input type="submit" placeholder="Submit" />
        </form>
      </div>
    </div>
  );
};
