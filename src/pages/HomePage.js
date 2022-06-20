import React from "react";
import Header from "../components/Header";
import Panel from "../library/panels";
import { Container } from "react-bootstrap";
import Background from "../library/background";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Container>
          <Background variant="default">
            <div className="panel-container">
              <h5>PANELS</h5>
              <Panel variant="active" />
              <Panel variant="inactive" />
              <Panel variant="default" />
            </div>
          </Background>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
