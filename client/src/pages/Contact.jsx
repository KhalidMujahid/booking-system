import { Button, Form, FormControl, FormGroup } from "react-bootstrap";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div>
      <h4 className="lead">This is our contact form</h4>
      <Form className="d-flex flex-column gap-4">
        <FormGroup>
          <FormControl type="text" placeholder="Full name" />
        </FormGroup>
        <FormGroup>
          <FormControl type="tel" placeholder="Phone number" />
        </FormGroup>
        <FormGroup>
          <FormControl type="email" placeholder="example@gmail.com" />
        </FormGroup>
        <FormGroup>
          <textarea
            className="form-control"
            name=""
            placeholder="Your message..."
            cols="30"
            rows="10"
          ></textarea>
        </FormGroup>
        <FormGroup>
          <Button>
            Send <FaPaperPlane />
          </Button>
        </FormGroup>
      </Form>
    </div>
  );
};
export default Contact;
