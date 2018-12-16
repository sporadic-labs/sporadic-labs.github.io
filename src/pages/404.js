import React from "react";
import Page from "../components/page/";

class NotFoundPage extends React.Component {
  render() {
    return (
      <Page title="About">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Page>
    );
  }
}

export default NotFoundPage;
