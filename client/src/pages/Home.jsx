import { useState } from "react";
import { Button, Col, Form, FormControl, Row } from "react-bootstrap";
import BusInfo from "../components/BusInfo";
import { MdClearAll } from "react-icons/md";
import { useGetAllBookingsQuery } from "../services/api/apiCall";

const Home = () => {
  const [search, setSearch] = useState("");

  const { data = [], isLoading } = useGetAllBookingsQuery();

  const searchCars = data.filter((transport) =>
    transport.to.toLowerCase().includes(search.toLowerCase().trim())
  );

  const handleClear = () => {
    if (search.length) {
      setSearch("");
    }
  };

  if (isLoading) {
    return <h1>Loading....</h1>;
  }

  return (
    <main>
      <div className="mt-3">
        <Form className="d-flex">
          <FormControl
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="From minna to...."
            value={search}
          />
          <Button className="d-flex" onClick={handleClear}>
            Clear <MdClearAll />
          </Button>
        </Form>
      </div>
      <div className="mt-3">
        <hr />
        <div className="mt-3">
          <p className="lead text-uppercase">Available Booking</p>
          <div className="my-3">
            {searchCars.length ? (
              <Row md={3} sm={1}>
                {searchCars.map((transport) => (
                  <Col key={transport._id}>
                    <BusInfo
                      id={transport._id}
                      to={transport.to}
                      price={transport.price}
                      from={transport.from}
                    />
                  </Col>
                ))}
              </Row>
            ) : (
              <h1 className="lead text-danger">No car found!!</h1>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
