import React from "react";
import Layout from "../commponent/layout/layout";
import About from "../commponent/about/about";
import OurMission from "../commponent/about/our-mission";
import Choose from "../commponent/about/Choose ";
import Ready from "../commponent/about/ready";
import Testimonials from "../commponent/users/Testimonials";

const AboutPage = () => {
  return (
    <Layout>
        <About />
        <OurMission />
        <Choose />
        <Ready />
        <Testimonials />
    </Layout>
  );
}
export default AboutPage;
