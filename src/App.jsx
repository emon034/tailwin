import React from "react";
import { BrowserRouter,Routes,Route} from "react-router-dom";
import HomePage from "./page/home-page";
import EventsPage from "./page/events-page";
import ResourcePage from "./page/resourcse-page";
import AboutPage from "./page/about-page";
import GroupPage from "./page/group-page";
import ContectPage from "./page/contect-page";
import LoginPage from "./page/login-page";


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
       <Route path="/" element={<HomePage/>}></Route>
        <Route path="/events" element={<EventsPage/>}></Route>
        <Route path="/resourcse" element={<ResourcePage/>}></Route>
        <Route path="/group" element={<GroupPage/>}></Route>
        <Route path="/about" element={<AboutPage/>}></Route>
        <Route path="/contect" element={<ContectPage/>}></Route>
        <Route path="/login" element={<LoginPage/>}></Route>
      </Routes>
    
    </BrowserRouter>
    </>
    
  );
}

export default App;
