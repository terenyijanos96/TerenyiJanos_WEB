import { useEffect } from "react";
import axios from "./api/axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "./components/Header";
import Szavak from "./components/Szavak";

function App() {
  const [kivalasztottTema, setKivalasztottTema] = useState(0);

  const [temaSzavakLista, setTemaSzavakLista] = useState([]);

  const [ablakSzelesseg, setAblakSzelesseg] = useState(window.innerWidth);

  async function temaSzavakLekerdezes() {
    try {
      const response = await axios.get("szavak/tema");
      setTemaSzavakLista(response.data);
      console.log(temaSzavakLista);
    } catch (error) {
      console.error(error);
    }
  }

  function temaValtas(event) {
    setKivalasztottTema(event.target.value);
    console.log(event.target.value);
    console.log(temaSzavakLista);
  }

  useEffect(() => {
    temaSzavakLekerdezes();
  }, []);

  function ablakSzelessegValtozat() {
    setAblakSzelesseg(window.innerWidth);
  }

  useEffect(() => {
    ablakSzelessegValtozat();
    window.addEventListener("resize", ablakSzelessegValtozat);
    return () => {
      window.removeEventListener("resize",  ablakSzelessegValtozat);
    };
  }, []);


  return (
    <>
      <main>
        <Header />

        <article className="mx-0 py-4 px-5 bg-white mx-md-4 my-4">
          <Container fluid={"md"}>
            <select
              className="ps-2 pe-5 py-2"
              value={kivalasztottTema}
              onChange={temaValtas}
            >
              <option value={0}>Válassz témát!</option>

              {temaSzavakLista.length > 0 &&
                temaSzavakLista.map((value, index) => {
                  return (
                    <option key={index} value={value.id}>
                      {value.temanev}
                    </option>
                  );
                })}
            </select>
{ ablakSzelesseg > 576 && 
            <Row
              style={{ fontWeight: "bold" }}
              className="szavakFejlec py-4 px-3 border"
              xs={1}
              md={3}
            >
              <Col>ANGOL</Col>
              <Col>MAGYAR</Col>
              <Col>visszajelzés</Col>
            </Row>}

            <Szavak
              kivalasztottIndex={kivalasztottTema}
              lista={temaSzavakLista}
            />
          </Container>
        </article>
      </main>
    </>
  );
}

export default App;
