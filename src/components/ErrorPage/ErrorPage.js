import React from "react";

import {
    Sidebar,
    Grid,
    GridRow,
    Card,
    Header,
  } from "semantic-ui-react";
  import LeftSidebar from "../LeftSidebar/LeftSidebar";  

export default function ErrorPage(){
    return(
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
                <Header.Content>Error</Header.Content>
              </Header>
              <hr
                style={{
                  width: "15%",
                  height: "3px",
                  backgroundColor: "#0790E8",
                  marginBottom: "50px"
                }}
              />
              <Card
                centered
                style={{
                  padding: "15px",
                  width: "75%",
                  backgroundColor: "#070707",
                  border: "0",
                  boxShadow: "none",
                  borderColor: "#070707"
                  //   marginBottom:"%"
                }}
              >
                <Card.Content>
                  <h1 style={{ color: "white", padding:"10%", marginBottom:"10%" }}>This path does not exist</h1>
                </Card.Content>
                </Card>
                </Grid.Column>
                <Grid.Column width={3}></Grid.Column>
                </GridRow>
                </Grid>
                </Sidebar.Pusher>
        </>
    )
}