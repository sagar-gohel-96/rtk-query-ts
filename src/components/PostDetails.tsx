import React from "react";
import { usePostQuery } from "../services/postApi";
export const PostDetails = ({ id }: { id: string }) => {
  const { data } = usePostQuery(id);
  if (!data?.data.body) return <>Nothing to display</>;
  return (
    <div>
      <b>Details:</b>
      {data && data?.data.body}
    </div>
  );
};
