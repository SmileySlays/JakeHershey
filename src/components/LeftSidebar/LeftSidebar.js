import React from "react";
import logo from "../../logo.svg";
import { Icon, Image, Menu, Sidebar, MenuItem, } from "semantic-ui-react";

function LeftSidebar() {

return(
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
        <Menu.Item as="a" href="/portfolio">
          <Icon name="envelope" />
        </Menu.Item>
        <Menu.Item as="a" href="/contact">
          <Icon name="address book" />
        </Menu.Item>
      </Sidebar>
)
}

export default LeftSidebar