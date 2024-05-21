import { useState } from "react";
import { Col, Row} from "react-bootstrap";

export default function Szavak(props) {


  return (
    <>
      {props.lista.length > 0 &&
        props.kivalasztottIndex != 0 &&
        props.lista[props.kivalasztottIndex - 1]["szavak"].map((value, index) => {
          return (
            <Row className="py-4 px-3 border" xs={1} md={3} key={index}>
              <Col style={{ fontWeight: "bold" }}>{value.angol}</Col>
              <Col>
                <input type="text" />
              </Col>
              <Col>❌</Col>
            </Row>
          );
        })}
    </>
  );
}
