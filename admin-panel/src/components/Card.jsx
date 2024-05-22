import img from "../assets/image.jpg";
import { Image, Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ id, from, to, price }) => {
  const navigate = useNavigate();

  const handleDelete = (id) => {
    if (confirm("Are you sure you want to delete??")) {
      console.log(id);
    } else {
      return false;
    }
  };

  return (
    <div className="d-flex flex-column card my-2">
      <div className="card-header">
        <h1 className="lead text-uppercase text-center">
          {from} to {to}
        </h1>
      </div>
      <div className="card-body">
        <Image
          style={{ objectFit: "cover" }}
          className="w-100"
          height={250}
          src={img}
          alt=""
        />
        <div className="my-3">
          <p>
            <b className="text-uppercase">Price</b>: N{price}.00
          </p>
          <p>
            <b className="text-uppercase">Destination</b>: {to}
          </p>
          <p>
            <b className="text-uppercase">Status</b>:
            <span className="text-success">Active</span>
          </p>
        </div>
      </div>
      <div className="card-footer">
        <Button
          onClick={() => navigate(`/edit/${id}`)}
          variant="warning"
          className="w-100 mt-2"
        >
          Edit <FaEdit />
        </Button>
        <Button
          onClick={() => handleDelete(id)}
          variant="danger"
          className="w-100 mt-2"
        >
          Delete <FaTrash />
        </Button>
      </div>
    </div>
  );
};
export default Card;
