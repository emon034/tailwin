import React from "react";

const WhyHobby = () => {
  return (
    <section className=" py-16 md:py-20 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">✨ Why HobbyHub?</h2>
      <div className="mt-4 h-1 w-20 bg-accent mx-auto"></div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center mt-5">
          <div>
            <h1></h1>
            <h4 className="text-xl font-semibold mt-2">Connect Locally</h4>
            <p>Meet people nearby who share your hobbies and interests.</p>
          </div>
          <div>
             <h1></h1>
            <h4 className="text-xl font-semibold mt-2">Learn Together</h4>
            <p>Grow skills through group activities, projects, and meetups.</p>
          </div>
          <div>
            <h1></h1>
            <h4 className="text-xl font-semibold mt-2">Enjoy Your Time</h4>
            <p>Reclaim your free time with fun and meaningful hobbies.</p>
          </div>
        </div>
      </section>
  
  
  );
}
export default WhyHobby;