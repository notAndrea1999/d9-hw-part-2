import { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Job from "./Job";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { handleSubmitAction } from "../redux/actions";

const MainSearch = () => {
  const [query, setQuery] = useState("");

  // const [jobs, setJobs] = useState([]);

  const jobs = useSelector((state) => state.jobs.content);

  const preferiti = useSelector((state) => state.favourite.content);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Remote Jobs Search</h1>
        </Col>
        <Col xs={10} className="mx-auto">
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(handleSubmitAction(query));
            }}
          >
            <Form.Control type="search" value={query} onChange={handleChange} placeholder="type and press Enter" />
          </Form>

          {preferiti.length > 0 ? (
            <Link to={"/preferiti"}>
              <Button variant="success" className="mt-3">
                Vai ai preferiti
              </Button>
            </Link>
          ) : (
            <Alert variant="info" className="mt-3">
              Nulla nei preferiti
            </Alert>
          )}
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default MainSearch;
