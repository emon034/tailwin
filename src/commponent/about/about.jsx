import React from "react";

const About = () => {
  return (
    <div class="max-w-4xl text-center mx-auto px-4 py-16">
        <h1 class="text-5xl md:text-6xl font-bold text-primary mb-6 ">About
             <span class="text-base-content">HobbyHub</span>
             </h1>
             <p class="text-xl md:text-2xl mb-8 text-base-content/80 leading-relaxed">
             A modern React-based platform for discovering and sharing hobbies with like-minded people.
              Whether you're into painting, coding, hiking, or cooking
               – HobbyHub is your place to get inspired and connect with a passionate community.</p>
               <a class="btn btn-primary btn-lg rounded-full px-8" href="/groups" data-discover="true">Explore Hobbies</a>
               </div>
      
    
  );
}
export default About;