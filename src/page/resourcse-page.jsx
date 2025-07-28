import React from "react";
import Layout from "../commponent/layout/layout";
import Hobby from "../commponent/resourcse/hobby";
import Duides from "../commponent/resourcse/duides";
import Advanced from "../commponent/resourcse/Advanced";


const ResourcePage = () => {
  return (
    <Layout>
      <Hobby />
      <Duides />
      <Advanced />
      
    </Layout>
   
  );
}
export default ResourcePage;