import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Booking from "./pages/Booking";
import BookingDetails from "./pages/BookingDetails";
import EditBooking from "./pages/EditBooking";
import Home from "./pages/Home";
import Login from "./pages/Login";
import BookingDetialsInfo from "./pages/BookingDetialsInfo";

const App = () => {
  return (
    <Routes>
      <Route index element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <Layout>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/booking"
        element={
          <Layout>
            <Booking />
          </Layout>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <Layout>
            <EditBooking />
          </Layout>
        }
      />
      <Route
        path="/booking/detials"
        element={
          <Layout>
            <BookingDetails />
          </Layout>
        }
      />
      <Route
        path="/booking/detials/:id"
        element={
          <Layout>
            <BookingDetialsInfo />
          </Layout>
        }
      />
      <Route path="*" element={<h1>Page not found!</h1>} />
    </Routes>
  );
};

export default App;
