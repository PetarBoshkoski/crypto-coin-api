import React from "react";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const Home = (props) => {
  const AUTHOR = "Petar Boshkoski";
  return (
    <React.Fragment>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          backgroundColor: props.color,
          transition: "background-color 0.5s linear",
        }}
      >
        <Card
          style={{
            width: "20rem",
            margin: "0 auto",
            boxShadow: "0 20px 70px rgba(0, 0, 0, 0.55)",
          }}
        >
          <Card.Body>
          <Card.Img
            variant="top"
            src={props.logo}
            style={{ width: 100, height: 100, margin: "0 auto", marginTop: "10px"}}
          />
          
            <Card.Title
              style={{ color: props.color, transition: "color 0.5s linear", fontWeight: "bold", fontSize: 30, margin: 10 }}
            >
              {props.name}
            </Card.Title>
            <Card.Text>Acronym: {props.acronym}</Card.Text>
            <Button
              onClick={props.callApi}
              style={{
                backgroundColor: props.color,
                color: "#A00008",
                fontWeight: "bold",
                fontSize: 14,
                border: "none",
                transition: "background-color 0.5s linear",
              }}
            >
              New crypto coin
            </Button>
          </Card.Body>
          <Card.Footer className="text-muted">{props.date} <br /> by {AUTHOR}</Card.Footer>
        </Card>
      </div>
    </React.Fragment>
  );
};

export default Home;
