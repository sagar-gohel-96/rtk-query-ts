import React, { useState } from "react";
import { useAddPostMutation, useUpdatePostMutation } from "../services/postApi";
import "../Form.css";
import { Navbar } from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";

export const Form = (props: any) => {
  const updateDetails = props.updateDetails;
  const navigate = useNavigate();
  const [formDetails, setFormDetails] = useState({
    title: "",
    body: "",
  });
  const param = useParams();

  const [addPost] = useAddPostMutation();
  const [updatePost] = useUpdatePostMutation();

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
            console.log(formDetails);
            const _id = param.id;
            if (updateDetails) {
              updatePost({ _id, ...formDetails }).then(() => {
                navigate("/posts");
              });
            } else {
              addPost(formDetails).then(() => navigate("/posts"));
            }
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
            defaultValue={
              updateDetails ? updateDetails.title : formDetails.title
            }
            placeholder="Enter your post title"
            name="title"
            onChange={(e) =>
              setFormDetails({ ...formDetails, title: e.target.value })
            }
          />
          <br />
          <label htmlFor="">Description :</label>
          <br />
          <textarea
            name="body"
            id="body"
            onChange={(e) =>
              setFormDetails({ ...formDetails, body: e.target.value })
            }
            defaultValue={updateDetails ? updateDetails.body : formDetails.body}
          ></textarea>
          <br />
          <button className="formButton" type="submit">
            {updateDetails ? "Update" : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};
