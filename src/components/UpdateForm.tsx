import React from "react";
import { useLocation } from "react-router-dom";
import { Form } from "./Form";
export const UpdateForm = () => {
  const location = useLocation();
  const updateDetails = location.state;
  return (
    <div>
      <Form updateDetails={updateDetails} />
    </div>
  );
};
