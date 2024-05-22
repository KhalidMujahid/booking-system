import { useState } from "react";
import {
  Button,
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  ModalTitle,
  Table,
} from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const BookingDetialsInfo = () => {
  const goBack = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <Container className="my-4">
      {/* Modal */}
      <Modal show={show}>
        <ModalHeader>
          <ModalTitle>Customer more info</ModalTitle>
        </ModalHeader>
        <ModalBody>
          <p>
            <b className="text-uppercase">Name</b>: Smallar small
          </p>
          <p>
            <b className="text-uppercase">Phone number</b>: 090863873
          </p>
          <p>
            <b className="text-uppercase">Address</b>: Minna
          </p>
          <p>
            <b className="text-uppercase">Next of kin name</b>: Biggy small
          </p>
          <p>
            <b className="text-uppercase">Next of kin phone number</b>:
            0817263838
          </p>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-sm" onClick={() => setShow(false)}>
            Close
          </Button>
        </ModalFooter>
      </Modal>

      <Button
        onClick={() => goBack("/booking/detials")}
        variant="dark"
        className="my-4"
      >
        <FaArrowLeft />
      </Button>
      <div className="row row-cols-1 row-cols-lg-2">
        <Col className="border rounded p-4">
          <h1 className="lead text-uppercase">Driver's info</h1>
          <p>
            <b className="text-uppercase">Name</b>: Test test
          </p>
          <p>
            <b className="text-uppercase">Phone number</b>: 0903849494
          </p>
          <p>
            <b className="text-uppercase">Address</b>: Minna
          </p>
        </Col>
        <Col className="border rounded p-4">
          <h1 className="lead text-uppercase">Customer's info</h1>
          <div>
            <Table bordered>
              <thead>
                <tr>
                  <th>S/N</th>
                  <th>Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Abba talatu</td>
                  <td>
                    <Button
                      onClick={() => setShow(true)}
                      variant="white"
                      className="w-100"
                    >
                      See more
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Abba talatu</td>
                  <td>
                    <Button variant="white" className="w-100">
                      See more
                    </Button>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Abba talatu</td>
                  <td>
                    <Button variant="white" className="w-100">
                      See more
                    </Button>
                  </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </div>
    </Container>
  );
};
export default BookingDetialsInfo;
