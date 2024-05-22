import { Button, Container, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useGetAllBookingDetailsQuery } from "../services/api/addBooking";

const BookingDetails = () => {
  const navigate = useNavigate();

  const { data = [] } = useGetAllBookingDetailsQuery();

  return (
    <Container className="my-4">
      <Table bordered border={1}>
        <thead className="text-uppercase">
          <tr>
            <th>S/N</th>
            <th>Driver's name</th>
            <th>Driver's phone number</th>
            <th>Total passenger</th>
            <th>Destinations</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, i) => (
            <tr key={d._id}>
              <td>{i + 1}</td>
              <td>{d.driver_id.name}</td>
              <td>{d.driver_id.phone_number}</td>
              <td>{d.car_id.no_of_seats}</td>
              <td>
                {d.from} to {d.to}
              </td>
              <td>
                <Button
                  onClick={() => navigate(`/booking/detials/${d._id}`)}
                  variant="light"
                  className="w-100"
                >
                  View
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
export default BookingDetails;
