import React from "react";
import { usePostQuery } from "../services/postApi";
export const PostDetails = ({ id }: { id: number }) => {
  const { data } = usePostQuery(id);
  // eslint-disable-next-line no-lone-blocks
  return (
    <div>
      <b>Details:</b>
      {data?.body}
    </div>
  );
};
