import { Routes, Route } from "react-router-dom";
import { Form, Home } from "../components/index";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/create" element={<Form />} />
      </Routes>
    </div>
  );
};

export default Routing;
