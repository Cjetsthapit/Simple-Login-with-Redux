import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Layout from "./layout/Layout";
import Homepage from "./Pages/Homepage";
import PrivateRoutes from "./PrivateRoute";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/">
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
         
        </Route>
        <Route element={<PrivateRoutes />}>
            <Route path="/home" element={<Homepage />} exact />
          </Route>
      </Routes>
    </Layout>
  );
}

export default App;
