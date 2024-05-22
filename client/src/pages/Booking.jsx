import { useCallback, useState } from "react";
import {
  Button,
  Col,
  Form,
  FormCheck,
  FormControl,
  FormGroup,
  Image,
  Row,
} from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import { Link, useNavigate, useParams } from "react-router-dom";
import img from "../assets/bg.jpeg";
import { useGetSingleBookingDetailsQuery } from "../services/api/apiCall";

const Booking = () => {
  const [input, setInput] = useState({
    fullname: "",
    phone_number: 0,
    next_of_kin_phone_number: 0,
    address: "",
    name_of_next_of_kin: "",
    checkbox: false,
  });

  const goBack = useNavigate();
  const { id } = useParams();

  const { data = {}, isLoading } = useGetSingleBookingDetailsQuery(id);

  console.log(data);

  const handleBack = useCallback(() => {
    goBack("/");
  }, []);

  const handleChange = (e) => {
    setInput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleTerms = (e) => {
    setInput((prev) => ({
      ...prev,
      checkbox: !input.checkbox,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      address,
      fullname,
      name_of_next_of_kin,
      next_of_kin_phone_number,
      phone_number,
      checkbox,
    } = input;

    if (
      !address ||
      !fullname ||
      !name_of_next_of_kin ||
      !next_of_kin_phone_number ||
      !phone_number ||
      !checkbox
    ) {
      return alert("All fields are required!");
    }
  };

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <section className="my-5">
      <div>
        <FaArrowLeft onClick={handleBack} />
        <p className="mt-3 text-uppercase lead">
          Booking for {data.from} to {data.to}
        </p>
      </div>
      <Row md={2} sm={1}>
        <Col md={8} sm={12}>
          <div className="mt-2 row row-cols-2">
            <Image src={img} alt={"Image"} />
            <div>
              <div>
                <p>
                  Price: <TbCurrencyNaira /> {data.price}.00
                </p>
                <p>Seat: {data?.car_id?.no_of_seats}</p>
              </div>
              <p>
                Status: <span className="text-success">Active</span>
              </p>
            </div>
          </div>
          <div className="mt-3">
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Praesentium debitis sapiente, dolor non aut enim vitae quasi saepe
              eveniet voluptatibus inventore harum veniam nihil, ipsa
              consequuntur quis perspiciatis quidem nemo.
            </p>
          </div>
        </Col>
        <Col md={4} sm={12}>
          <div className="mt-2 border p-4 rounded">
            <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
              <div>
                <p className="text-uppercase lead">Form</p>
              </div>
              <FormGroup className="mt-2">
                <FormControl
                  type="text"
                  placeholder="Full name"
                  required
                  name="fullname"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="mt-2">
                <FormControl
                  type="tel"
                  placeholder="Phone number"
                  required
                  name="phone_number"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="mt-2">
                <FormControl
                  type="text"
                  placeholder="Address"
                  required
                  name="address"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="mt-2">
                <FormControl
                  type="text"
                  placeholder="Name of Next of kin"
                  required
                  name="name_of_next_of_kin"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="mt-2">
                <FormControl
                  type="tel"
                  placeholder="Next of kin Phone number"
                  required
                  name="next_of_kin_phone_number"
                  onChange={handleChange}
                />
              </FormGroup>
              <FormGroup className="d-flex">
                <FormCheck onChange={handleTerms} required name="checkbox" />
                <span style={{ width: "5px" }}></span> You agree to our{" "}
                <span style={{ width: "5px" }}></span>
                <Link className="a" to="/about">
                  terms and condition
                </Link>
              </FormGroup>
              <FormGroup className="mt-3">
                <Button type="submit">Book</Button>
              </FormGroup>
            </Form>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Booking;
