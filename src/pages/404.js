import React from "react";
import PageLayout from "../components/page-layout/";

class NotFoundPage extends React.Component {
  render() {
    return (
      <PageLayout title="About">
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </PageLayout>
    );
  }
}

export default NotFoundPage;
