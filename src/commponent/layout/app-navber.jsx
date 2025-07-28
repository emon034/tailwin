import { useState, useEffect } from "react";

 
const AppNavbar = () => {
  const [theme, setTheme] = useState("light");

  // Apply theme on state change
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Toggle handler
  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  return (
   <div className="container navbar bg-base-100  sticky top-2 z-30  rounded-3xl p-2 mx-auto my-12 ">
  <div className="navbar-start ">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-active lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li className="rounded-2xl border-1"><a href="/">Home</a></li>
       <li className="hover:rounded-2xl hover:border-1 "><a href="events">Events</a></li>
        <li className="rounded-2xl hover:border-1"><a href="resourcse">Resourcse</a></li>
         <li className="rounded-2xl hover:border-1"><a href="group">All Groups</a></li>
          <li className="rounded-2xl hover:border-1"><a href="about ">About Us</a></li>

      <li><a href="contect" className="rounded-2xl hover:border-1">Contect</a></li>
      <li className="rounded-2xl hover:border-1 md:hidden"><a href="login">Login</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost  font-bold text-2xl  text-shadow-black-700"> Hobby<span className="font-bold text-2xl text-blue-700">Hub </span></a>
  </div>
  <div className="navbar-center hidden lg:flex gap-4">
    <ul className="menu menu-horizontal px-1">
      <li className="rounded-2xl border-1"><a href="/">Home</a></li>
       <li className="hover:rounded-2xl hover:border-1 "><a href="events">Events</a></li>
        <li className="rounded-2xl hover:border-1"><a href="resourcse">Resourcse</a></li>
         <li className="rounded-2xl hover:border-1"><a href="group">All Groups</a></li>
          <li className="rounded-2xl hover:border-1"><a href="about ">About Us</a></li>

      <li><a href="contect" className="rounded-2xl hover:border-1">Contect</a></li>
      <li className="rounded-2xl hover:border-1 sm:hidden"><a href="login">Login</a></li>
    
    </ul>
  </div>
  <div className="navbar-end gap-5">
         <div className="flex-none">
        <button className="btn  btn-sm sm:justify-end rounded-full" onClick={toggleTheme}>
          {theme === "light" ? "🌙 " : "☀️"}
        </button>
      </div>   
    <div className=" hidden md:block">
     <a href="login" className="btn bg-blue-600 text-white  ">Login</a>
        </div>
  </div>
  </div>


  );
}
export default AppNavbar;