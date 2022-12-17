import React, { useState } from "react";
import { PostDetails, Navbar } from "./index";
import { useDeletePostMutation, usePostsQuery } from "../services/postApi";
import { Post } from "../models/post.model";
import { useNavigate } from "react-router-dom";
interface Details {
  open: boolean;
  id: string;
}
export const Home = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState<Details>({ open: false, id: "1" });
  const { data, isFetching, isLoading, isSuccess, error, refetch } =
    usePostsQuery();
  const [deletePost] = useDeletePostMutation();
  return (
    <div
      className="App"
      style={{
        padding: "20px",
        backgroundColor: "#e6e4e3",
      }}
    >
      <Navbar />
      <h2>All Posts</h2>
      {isLoading && <h2>.....Loading</h2>}
      {isFetching && <h2>.....Fetching</h2>}
      {error && <h3>Something Went Wrong... :(</h3>}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "20px",
        }}
      >
        {isSuccess &&
          data.data &&
          data.data.map((post: Post, index: number) => {
            return (
              <div
                key={index}
                style={{
                  backgroundColor: "#abe5ed",
                  padding: "20px",
                  borderRadius: "10px",
                }}
              >
                <h2>Post No: {index + 1}</h2>
                <h3>Title: {post.title}</h3>
                <span>
                  {details.id === post._id && details.open && (
                    <PostDetails id={post._id} />
                  )}
                </span>
                <button
                  style={{
                    backgroundColor: "bisque",
                    padding: "6px ",
                    border: "none",
                    fontWeight: "bolder",
                    margin: "10px",
                  }}
                  onClick={() => {
                    setDetails({ open: !details.open, id: post._id! });
                  }}
                >
                  Show details
                </button>
                <button
                  onClick={() => {
                    deletePost(post._id).then(() => {
                      refetch();
                    });
                  }}
                  style={{
                    backgroundColor: "bisque",
                    padding: "6px ",
                    border: "none",
                    fontWeight: "bolder",
                  }}
                  type="button"
                >
                  Delete
                </button>
                <button
                  onClick={() => navigate("/posts/update", { state: post })}
                  style={{
                    backgroundColor: "bisque",
                    padding: "6px ",
                    border: "none",
                    fontWeight: "bolder",
                    margin: "10px",
                  }}
                  type="button"
                >
                  Update
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
};
