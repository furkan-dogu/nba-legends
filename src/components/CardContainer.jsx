import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { data } from "../helpers/data";
import PlayerCard from "./PlayerCard";
import { useState } from "react";

const CardContainer = () => {

  const [search, setSearch] = useState("")

  const handleChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredData = data.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().trim()))

  return (
    <>
      <Form.Control
        placeholder="Search a player"
        className="w-50 m-auto"
        onChange={handleChange}
        type="search"
      />
      <Container className="rounded-4 my-4 p-3 card-container">
        <Row className="justify-content-center g-3">
          {filteredData.map((player, index) => {
            return (
              <Col xl={3} lg={4} md={6} key={index}>
                <PlayerCard {...player} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default CardContainer;
