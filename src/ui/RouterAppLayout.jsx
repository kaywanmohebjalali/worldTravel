import { Navigate, Route, Routes } from "react-router-dom";
import AppLayout from "../pages/AppLayout";
import Cities from "../features/map/Cities";
import City from "../features/map/City";
import Countries from "../features/map/Countries";
import Form from "./Form";
import Profile from "../features/authentication/Profile";

const RouterAppLayout = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Navigate replace to="cities" />} />
        <Route path="/cities" element={<Cities />} />
        <Route path="/cities/:id" element={<City />} />
        <Route path="/countries" element={<Countries />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/form" element={<Form />} />
      </Route>
    </Routes>
  );
};

export default RouterAppLayout;
