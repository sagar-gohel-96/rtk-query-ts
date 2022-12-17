import { Routes, Route } from "react-router-dom";
import { Form, Home } from "../components/index";
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/posts" element={<Home />} />
        <Route path="/posts/create" element={<Form />} />
        <Route path="/posts/update" element={<Form />} />
      </Routes>
    </div>
  );
};

export default Routing;
