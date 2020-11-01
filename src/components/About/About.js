import React from "react";
// import Splash from "../../portland-splash.jpg";
import {
  Sidebar,
  Grid,
  GridRow,
  Card,
  Header,
  Icon,
  CardContent,
  CardDescription,
  Image,
  List
} from "semantic-ui-react";
import LeftSidebar from "../LeftSidebar/LeftSidebar";

export default function About() {
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
                <Header.Content>About Me</Header.Content>
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
                  <h1 style={{ color: "white" }}>Jake Hershey</h1>
                  <h4 style={{ color: "#0790E8" }}>Portland, OR</h4>
                  <h3 style={{ color: "white", paddingBottom: "20px" }}>
                    I'm a fullstack engineer looking for a company that promotes
                    learning new skills and a positive culture fit. I mostly
                    lean towards a MERN stack when working on applications, but
                    I also have experience with other languages (like Python and
                    Java). I don't mind the work environment I'm in and look to
                    hone my skills or gain new ones!
                  </h3>
                  <h3 style={{ color: "white", paddingBottom: "20px" }}>
                    Usually, you'll find me watching horror movies or playing
                    video games. I'm really interested in videos that do deep
                    dives into internet horror that takes multiple people to
                    solve. Feel free to reach out to me regarding employment or
                    to talk about if aliens built the pyramids!
                  </h3>
                </Card.Content>
              </Card>
              <Header
                as="h1"
                textAlign="center"
                style={{
                  color: "white",
                  paddingTop: "100px",
                  fontSize: "40px"
                }}
              >
                <Header.Content>My Languages</Header.Content>
              </Header>
              <hr
                style={{
                  width: "20%",
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
                }}
              >
                <Card.Content>
                  <Icon
                    circular
                    inverted
                    name="python"
                    color="blue"
                    size="huge"
                    style={{ margin: "20px" }}
                  />
                  <Icon
                    circular
                    inverted
                    name="react"
                    color="blue"
                    size="huge"
                    style={{ margin: "20px" }}
                  />
                  <Icon
                    circular
                    inverted
                    name="node"
                    color="blue"
                    size="huge"
                    style={{ margin: "20px" }}
                  />
                  <Icon
                    circular
                    inverted
                    name="js"
                    color="blue"
                    size="huge"
                    style={{ margin: "20px" }}
                  />
                  <List horizontal relaxed size="massive">
                    <List.Item>
                      <List.Content>
                        <List.Header
                          as="h2"
                          style={{ color: "white", fontSize: "30px" }}
                        >
                          Backend
                        </List.Header>
                        <hr
                          style={{
                            width: "30%",
                            height: "3px",
                            backgroundColor: "#0790E8",
                          }}
                        />
                        <List.List style={{ color: "white"}}>
                            <List.Item>
                                Python
                            </List.Item>
                            <List.Item>
                                Django
                            </List.Item>
                            <List.Item>
                                Node
                            </List.Item>
                            <List.Item>
                                Express
                            </List.Item>
                            <List.Item>
                                PostgreSQL/MongoDB
                            </List.Item>
                            <List.Item>
                                Firebase/Heroku
                            </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <List.Header
                          as="h2"
                          style={{ color: "white", fontSize: "30px" }}
                        >
                          Frontend
                        </List.Header>
                        <hr
                          style={{
                            width: "50%",
                            height: "3px",
                            backgroundColor: "#0790E8",
                          }}
                        />
                        <List.List style={{ color: "white"}}>
                            <List.Item>
                                Javascript
                            </List.Item>
                            <List.Item>
                                React
                            </List.Item>
                            <List.Item>
                                Redux
                            </List.Item>
                            <List.Item>
                                Typescript
                            </List.Item>
                            <List.Item>
                                HTML5
                            </List.Item>
                            <List.Item>
                                CSS3
                            </List.Item>
                        </List.List>
                      </List.Content>
                    </List.Item>
                  </List>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column width={3}></Grid.Column>
          </GridRow>
        </Grid>
      </Sidebar.Pusher>
    </>
  );
}
