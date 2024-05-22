import { Col } from "react-bootstrap";
import { FaUser } from "react-icons/fa";
import Card from "../components/Card";
import { useGetAvaliableBookingQuery } from "../services/api/addBooking";

const Home = () => {
  const { data = [] } = useGetAvaliableBookingQuery();

  return (
    <div className="container my-lg-3">
      <div className="my-5">
        <h1 className="lead text-uppercase">
          Welcome Admin! <FaUser />
        </h1>
      </div>
      <div className="row row-cols-1 g-3 row-cols-lg-4">
        {data.map((d) => (
          <Col key={d._id}>
            <Card id={d._id} from={d.from} to={d.to} price={d.price} />
          </Col>
        ))}
      </div>
    </div>
  );
};
export default Home;
