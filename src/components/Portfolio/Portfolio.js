import React, { useState } from "react";
import {
  Sidebar,
  Grid,
  GridRow,
  Card,
  Header,
  Icon,
  List,
  Button
} from "semantic-ui-react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Avery from "../../avery.jpeg";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");

  const cards = [
    { section: "backend", image: Avery },
    { section: "backend", image: Avery },
    { section: "backend", image: Avery },
    { section: "backend", image: Avery },
    { section: "backend", image: Avery },
    { section: "backend", image: Avery },
    { section: "frontend", image: Avery },
    { section: "frontend", image: Avery },
    { section: "frontend", image: Avery },
    { section: "frontend", image: Avery },
    { section: "frontend", image: Avery },
    { section: "frontend", image: Avery }
  ];

  return (
    <>
      <LeftSidebar />
      <Sidebar.Pusher style={{ backgroundColor: "#141414" }}>
        <Grid style={{ paddingBottom: "20%" }}>
          <GridRow />
          <GridRow columns={3}>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column textAlign="center" width={10}>
              <Header
                as="h1"
                textAlign="center"
                style={{
                  color: "white",
                  paddingTop: "100px",
                  fontSize: "40px"
                }}
              >
                <Header.Content>Portfolio</Header.Content>
              </Header>
              <hr
                style={{
                  width: "15%",
                  height: "3px",
                  backgroundColor: "#0790E8",
                  marginBottom: "50px"
                }}
              />
              <Button.Group style={{ marginBottom: "50px" }}>
                <Button onClick={() => setFilter("backend")}>Backend</Button>
                <Button onClick={() => setFilter("frontend")}>Frontend</Button>
                <Button onClick={() => setFilter("all")}>All</Button>
              </Button.Group>
              <Card.Group itemsPerRow={4}>
                {filter === "all" &&
                  cards.map(card => {
                    return <Card image={card.image} />;
                  })}
                {filter === "backend" &&
                  cards
                    .filter(card => card.section === "backend")
                    .map(filteredCard => <Card image={filteredCard.image} />)}
                {filter === "frontend" &&
                  cards
                    .filter(card => card.section === "frontend")
                    .map(filteredCard => <Card image={filteredCard.image} />)}
              </Card.Group>
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
          </GridRow>
        </Grid>
      </Sidebar.Pusher>
    </>
  );
}
