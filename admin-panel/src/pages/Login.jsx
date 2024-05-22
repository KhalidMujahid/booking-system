import { useState } from "react";
import {
  Button,
  Container,
  Form,
  FormControl,
  FormFloating,
  FormGroup,
  FormLabel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!inputs.username || !inputs.password) return;

    navigate("/dashboard");
  };

  return (
    <Container className="my-5 rounded">
      <Form className="border p-5" onSubmit={handleSubmit}>
        <FormGroup className="my-3">
          <FormFloating>
            <FormControl
              name="username"
              value={inputs.username}
              onChange={handleChange}
              type="text"
              placeholder="username"
            />
            <FormLabel>username</FormLabel>
          </FormFloating>
        </FormGroup>
        <FormGroup className="my-3">
          <FormFloating>
            <FormControl
              name="password"
              value={inputs.password}
              onChange={handleChange}
              type="password"
              placeholder="password"
            />
            <FormLabel>password</FormLabel>
          </FormFloating>
        </FormGroup>
        <FormGroup>
          <Button type="submit" className="btn-lg">
            Login
          </Button>
        </FormGroup>
      </Form>
    </Container>
  );
};
export default Login;
