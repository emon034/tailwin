import React from "react";
import Layout from "../commponent/layout/layout";
import Community from "../commponent/events/community";
import EventsCard from "../commponent/events/evens-card";
import LikeEvents from "../commponent/events/like-events";


const EventsPage = () => {
  return (
    
    <Layout>
        <Community />
        <EventsCard />
        <LikeEvents />


    </Layout>
  );
}
export default EventsPage;