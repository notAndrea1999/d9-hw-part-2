import { useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Job from "./Job";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getJobsAction, sendToFavouriteAction } from "../redux/actions";

const CompanySearchResults = () => {
  const params = useParams();

  const company = useSelector((state) => state.company.content);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getJobsAction(params));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {company.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
          {/* <Button
            variant="success"
            className="mt-3"
            onClick={() => {
              dispatch(sendToFavouriteAction(params));
            }}
          >
            Manda in preferiti
          </Button> */}
          <Link to={"/"}>
            <Button variant="success" className="mt-3 ">
              Torna alla Home
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
