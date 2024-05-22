import { Route, Routes } from "react-router-dom";
import Layout from "./Layouts/Layout";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/booking/:id" element={<Booking />} />

        <Route
          path="*"
          element={
            <h6 className="lead text-uppercase text-danger text-center my-5">
              Page not found
            </h6>
          }
        />
      </Routes>
    </Layout>
  );
}

export default App;
