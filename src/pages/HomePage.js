import React from "react";
import Header from "../components/Header";
import { Container } from "react-bootstrap";
import Background from "../library/background";
import PanelSection from "../sections/PanelSection";
import ButtonSection from "../sections/ButtonSection";
import TableSection from "../sections/TableSection";

const HomePage = () => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Container>
          <Background variant="default">
            <PanelSection />
          </Background>
          <Background variant="">
            <ButtonSection />
          </Background>
          <Background variant="">
            <TableSection />
          </Background>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default HomePage;
