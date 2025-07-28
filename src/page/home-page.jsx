import React from "react";
import Layout from "../commponent/layout/layout";
import Slider from "../commponent/hero/slider";
import Card from "../commponent/hero/card";
import WhyHobby from "../commponent/hero/why-hobby";
import Testimonials from "../commponent/users/Testimonials";
import Mail from "../commponent/hero/mail";
const HomePage = () => {
  return (
    
    <Layout>
     <Slider />
     <Card />
      <WhyHobby />
       <Testimonials /> 
      <Mail />
    </Layout>
  );
}
export default HomePage;