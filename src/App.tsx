import React, { useState } from "react";
import "./App.css";
import { PostDetails } from "./components/PostDetails";
import { usePostsQuery } from "./services/postApi";

function App() {
  const [details, setDetails] = useState({ open: false, id: 0 });
  const { data, isFetching, isLoading, isSuccess, error } = usePostsQuery();
  return (
    <div
      className="App"
      style={{
        padding: "20px",
        backgroundColor: "#e6e4e3",
      }}
    >
      <h2>All Posts</h2>
      {isLoading && <h2>.....Loading</h2>}
      {isFetching && <h2>.....Fetching</h2>}
      {error && <h3>Something Went Wrong... :(</h3>}
      {isSuccess && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
          }}
        >
          {data?.map((post) => {
            return (
              <>
                <div
                  onClick={() => {
                    setDetails({ open: true, id: post.id });
                  }}
                  key={post.id}
                  style={{
                    backgroundColor: "#abe5ed",
                    padding: "20px",
                    borderRadius: "10px",
                  }}
                >
                  <h2>Post No: {post.id}</h2>
                  <h3>Title: {post.title}</h3>
                  <span>
                    {details.id === post.id && details.open && (
                      <PostDetails id={post.id} />
                    )}
                  </span>
                </div>
              </>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default App;
