import { Button, ButtonGroup } from "react-bootstrap";
import { FaPlus, FaPowerOff, FaUser } from "react-icons/fa";
import { TbBrandBooking } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-dark p-4 d-flex justify-content-between align-items-center">
      <Link to="/dashboard" style={{ textDecoration: "none" }}>
        <h1 className="lead text-white text-uppercase">Admin panel</h1>
      </Link>
      <ButtonGroup>
        <Button onClick={() => navigate("/booking")} variant="light">
          Add car <FaPlus />
        </Button>
        <Button onClick={() => navigate("/booking/detials")} variant="light">
          Bookings <TbBrandBooking />
        </Button>
        <Button onClick={() => navigate("/")} variant="danger">
          Logout <FaPowerOff />
        </Button>
      </ButtonGroup>
    </div>
  );
};
export default Header;
