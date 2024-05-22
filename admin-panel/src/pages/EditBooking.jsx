import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Form,
  FormControl,
  FormFloating,
  FormGroup,
  FormLabel,
  FormSelect,
} from "react-bootstrap";
import { FaSave } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useGetEditBookingQuery } from "../services/api/addBooking";

const EditBooking = () => {
  const { id } = useParams();

  const { isFetching } = useGetEditBookingQuery(id);

  const [inputs, setInpputs] = useState({
    name: "",
    phone_number: "",
    address: "",
    model: "",
    plate_number: "",
    no_of_seats: "",
    from: "",
    to: "",
    price: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      address,
      from,
      model,
      name,
      no_of_seats,
      phone_number,
      plate_number,
      price,
      to,
    } = inputs;

    if (
      !address ||
      !from ||
      !model ||
      !name ||
      !no_of_seats ||
      !phone_number ||
      !plate_number ||
      !price ||
      !to
    ) {
      return alert("All inputs are required");
    }
  };

  const handleChange = (e) => {
    setInpputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isFetching) {
    return <h1>Loading....</h1>;
  }

  return (
    <Container className="my-3">
      <div className="my-3">
        <h4 className="text-uppercase">Edit Booking detials</h4>
      </div>
      <Form validated onSubmit={handleSubmit}>
        <div className="row row-cols-1 row-cols-lg-2 g-2">
          {/* Driver's details */}
          <Col className="border p-3 rounded">
            <h1 className="lead text-uppercase">Driver's details</h1>
            <FormGroup className="my-3">
              <FormFloating>
                <FormControl
                  onChange={handleChange}
                  value={inputs.name}
                  type="text"
                  name="name"
                  placeholder="Driver's name"
                  required
                />
                <FormLabel>Driver's name</FormLabel>
                <div className="invalid-feedback">
                  Please enter a driver's name
                </div>
              </FormFloating>
            </FormGroup>
            <FormGroup className="my-3">
              <FormFloating>
                <FormControl
                  type="tel"
                  placeholder="Driver's phone number"
                  required
                />
                <FormLabel>Driver's phone number</FormLabel>
                <div className="invalid-feedback">
                  Please enter a valid driver's phone number
                </div>
              </FormFloating>
            </FormGroup>
            <FormGroup className="my-3">
              <FormFloating>
                <FormControl
                  type="text"
                  placeholder="Driver's address"
                  required
                />
                <FormLabel>Driver's name</FormLabel>
                <div className="invalid-feedback">
                  Please enter a driver's name
                </div>
              </FormFloating>
            </FormGroup>
          </Col>
          {/* Car details */}
          <Col className="border p-3 rounded">
            <h1 className="lead text-uppercase">Car's details</h1>

            <FormGroup className="my-3">
              <FormFloating>
                <FormControl type="text" placeholder="Card model" required />
                <FormLabel>Car model</FormLabel>
                <div className="invalid-feedback">Please enter a car model</div>
              </FormFloating>
            </FormGroup>
            <FormGroup className="my-3">
              <FormFloating>
                <FormControl
                  type="number"
                  placeholder="Card plate number"
                  required
                />
                <FormLabel>Car plate number</FormLabel>
                <div className="invalid-feedback">
                  Please enter a valid number
                </div>
              </FormFloating>
            </FormGroup>
            <FormGroup className="my-3">
              <FormFloating>
                <FormControl type="number" placeholder="No of seats" required />
                <FormLabel>No of seats</FormLabel>
                <div className="invalid-feedback">
                  Please enter a valid number
                </div>
              </FormFloating>
            </FormGroup>
          </Col>
          {/* Destinations details */}
          <Col className="border rounded p-4">
            <h1 className="lead text-uppercase">Destination's details</h1>

            <FormGroup className="my-3">
              <FormLabel>From:</FormLabel>
              <FormSelect>
                <option value="abuja">Abuja</option>
                <option value="abuja">Abuja</option>
                <option value="abuja">Abuja</option>
                <option value="abuja">Abuja</option>
                <option value="abuja">Abuja</option>
              </FormSelect>
            </FormGroup>

            <FormGroup className="my-3">
              <FormLabel>To:</FormLabel>
              <FormSelect>
                <option value="abuja">Abuja</option>
                <option value="abuja">Abuja</option>
                <option value="abuja">Abuja</option>
                <option value="abuja">Abuja</option>
                <option value="abuja">Abuja</option>
              </FormSelect>
            </FormGroup>

            <FormGroup className="my-3">
              <FormFloating>
                <FormControl type="number" placeholder="Price" required />
                <FormLabel>Price</FormLabel>
                <div className="invalid-feedback">
                  Please enter a valid price
                </div>
              </FormFloating>
            </FormGroup>
          </Col>
        </div>
        <div className="my-4 d-flex justify-content-end">
          <Button variant="success" className="btn-lg" type="submit">
            Submit Edit <FaSave />
          </Button>
        </div>
      </Form>
    </Container>
  );
};
export default EditBooking;
