import { Button, Card, Image } from "react-bootstrap";
import { TbCurrencyNaira, TbBrandBooking } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import img from "../assets/bg.jpeg";

const BusInfo = ({ id, to, price, from }) => {
  const next = useNavigate();

  return (
    <section>
      <div className="border p-4 rounded mt-3 text-center">
        <Card.Header className="mb-4">
          <Card.Title className="text-uppercase lead">
            {from} to {to}
          </Card.Title>
        </Card.Header>
        <Card.Body>
          <Image src={img} alt="Image" />
          <div>
            <p>
              Price: <TbCurrencyNaira /> {price}.00
            </p>
          </div>
          <p>
            Status: <span className="text-success">Active</span>
          </p>
        </Card.Body>
        <Card.Footer>
          <Button onClick={() => next(`/booking/${id}`)} variant="primary">
            Book now <TbBrandBooking />
          </Button>
        </Card.Footer>
      </div>
    </section>
  );
};

export default BusInfo;
