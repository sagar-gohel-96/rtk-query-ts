import React, { useEffect } from "react";
import { usePostQuery } from "../services/postApi";
export const PostDetails = ({ id }: { id: string }) => {
  const { data, refetch } = usePostQuery(id);
  useEffect(() => {
    refetch();
  }, [refetch]);
  if (!data?.data.body) return <>Nothing to display</>;
  return (
    <div>
      <b>Details:</b>
      {data && data?.data.body}
    </div>
  );
};
