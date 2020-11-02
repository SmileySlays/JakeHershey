import React, { useState } from "react";
import {
  Sidebar,
  Grid,
  GridRow,
  Card,
  Header,
  Icon,
  List,
  Button,
  Form
} from "semantic-ui-react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";
import Avery from "../../avery.jpeg";

export default function Contact() {
  return (
    <>
      <LeftSidebar />
      <Sidebar.Pusher style={{ backgroundColor: "#141414" }}>
        <Grid style={{ paddingBottom: "20%" }}>
          <GridRow />
          <GridRow columns={3}>
            <Grid.Column width={3}></Grid.Column>
            <Grid.Column textAlign="center" width={10}>
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <input placeholder="First Name" />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <input placeholder="Last Name" />
                </Form.Field>
                <Form.Field>
                  <label>Email</label>
                  <input placeholder="Email" />
                </Form.Field>
                <Button type="submit">Submit</Button>
              </Form>
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
          </GridRow>
        </Grid>
      </Sidebar.Pusher>
    </>
  );
}
