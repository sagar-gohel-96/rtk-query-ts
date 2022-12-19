import { Routes, Route } from "react-router-dom";
import { Form, Home, UpdateForm } from "../components/index";
enum routesMapping {
  Home = "/posts",
  Form = "/posts/create",
  UpdateForm = "/posts/update/:id",
}
const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path={routesMapping.Home} element={<Home />} />
        <Route path={routesMapping.Form} element={<Form />} />
        <Route path={routesMapping.UpdateForm} element={<UpdateForm />} />
      </Routes>
    </div>
  );
};

export default Routing;
