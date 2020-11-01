import React, { useState, useEffect } from "react";
import Splash from "../../portland-splash.jpg";
import logo from "../../logo.svg";
import "./Home.css";
import { Icon, Image, Menu, Sidebar, MenuItem, Card, Grid, GridRow } from "semantic-ui-react";
import Typewriter from "typewriter-effect";

function Home() {

  return (
    <>
      {/* <Sidebar.Pushable as={Segment}> */}
      <Sidebar
        as={Menu}
        animation="overlay"
        direction="left"
        icon="labeled"
        inverted
        vertical
        visible="true"
        width="thin"
        borderless="true"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "0",
          boxShadow: "none"
        }}
      >
        <MenuItem
          style={{ borderBottom: "4px solid black", marginBottom: "25%" }}
        >
          <Image src={logo} />
        </MenuItem>
        <Menu.Item as="a" href="/">
          <Icon name="home" />
        </Menu.Item>
        <Menu.Item as="a" href="/about">
          <Icon name="user" />
        </Menu.Item>
        <Menu.Item as="a" href="/contact">
          <Icon name="address book" />
        </Menu.Item>
        <Menu.Item as="a" href="/portfolio">
          <Icon name="envelope" />
        </Menu.Item>
      </Sidebar>

      <Sidebar
        as={Menu}
        animation="overlay"
        direction="right"
        icon="labeled"
        inverted
        vertical
        visible="true"
        style={{
          background: "transparent",
          border: "0",
          boxShadow: "none",
          display: "flex",
          alignItems: "center"
        }}
        width="very thin"
        borderless="true"
      >
        <MenuItem />
        <Menu.Item as="a" href="https://www.linkedin.com/in/jakehershey/">
          <Icon name="linkedin" />
        </Menu.Item>
        <Menu.Item as="a" href="https://github.com/SmileySlays">
          <Icon name="github" />
        </Menu.Item>
        <Menu.Item as="a" href="https://gitlab.com/SmileySlays">
          <Icon name="gitlab" />
        </Menu.Item>
        <Menu.Item as="a">
          <Icon name="file pdf" />
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher style={{ display: "relative" }}>
        <Image src={Splash} />

        <div
          style={{
            position: "absolute",
            bottom: 0,
            top: "25%",
            left: "30%",
            color: "white",
            fontWeight: "bold",
            width:"90%"
          }}
        >
          <Card
            style={{
              background: "rgba(0, 0, 0, 0.5)",
              border: "0",
              boxShadow: "none",
              color: "white !important",
              height:"50%",
              width:"50%",
              alignItems:"center"

            }}
          >
            <Card.Header
              style={{
                color: "white !important",
                fontSize:"70px",
                paddingTop:"100px",
                paddingBottom:"40px",
                alignItems:"center",
              }}
            >
                Jake Hershey
              </Card.Header>
            <Card.Content style={{
                  fontSize:"40px"
              }}>


                Fullstack Engineer

              
              </Card.Content>
          </Card>
        </div>
      </Sidebar.Pusher>
    </>
  );
}

export default Home;
