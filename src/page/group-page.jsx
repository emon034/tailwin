import React from "react";
import Layout from "../commponent/layout/layout";
import Exporel from "../commponent/group/exporel";
import Filter from "../commponent/group/filter";
import Card from "../commponent/group/card";





const GroupPage = () => {
    return (
        <Layout>
            <Exporel />
            <Filter />
            <Card />
        

        </Layout>
        
    );
}
export default GroupPage;