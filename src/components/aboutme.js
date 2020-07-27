import React, { Component } from "react";
import { Card, CardTitle, CardText } from "react-mdl";

class About extends Component {
  render() {
    return (
      <div className="test-grid">
        <Card
          shadow={0}
          style={{ width: "320px", height: "320px", margin: "auto" }}
        >
          <CardTitle
            expand
            style={{
              color: "#fff",
              background:
                "url(data:image/png;base64,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) bottom right 15% no-repeat #46B6AC",
            }}
          >
            Damon Anthony
          </CardTitle>
          <CardText>
            Dylan is a very determined hardworking individual. He is a dedicated
            problem solver who knows how to stay focused on the task at hand. He
            is a good communicator and can work independently as well as with
            other. He is always willing to help his peers. Dylan would be an
            asset in the workplace
          </CardText>
        </Card>
        <Card
          shadow={0}
          style={{
            width: "320px",
            height: "320px",
            margin: "auto",
            minWidth: "450",
          }}
        >
          <CardTitle
            expand
            style={{
              color: "#fff",
              background:
                "url(data:image/png;base64,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) bottom right 15% no-repeat #46B6AC",
            }}
          >
            Ariya
          </CardTitle>
          <CardText>
            Dylan is a hardworking student ready to help no matter the situation
            and always does his best.
          </CardText>
        </Card>
      </div>
    );
  }
}

export default About;
