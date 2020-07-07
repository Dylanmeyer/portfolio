import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(data:image/png;base64,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) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://library.kissclipart.com/20181124/wrq/kissclipart-python-clipart-python-pandas-computer-icons-4078fb3a0a4a889b.jpg) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 3 */}
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "#fff",
                height: "176px",
                background:
                  "url(https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/512px-HTML5_logo_and_wordmark.svg.png) center / cover",
              }}
            ></CardTitle>
            <CardText>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's
            </CardText>
            <CardActions border>
              <Button>GitHub</Button>
            </CardActions>
            <CardMenu style={{ color: "#fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>Javasctript</Tab>
          <Tab>Python</Tab>
          <Tab>HTML/CSS</Tab>
        </Tabs>

        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Projects;
