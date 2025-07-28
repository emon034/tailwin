import React from "react";



const Hobby = () => {
  return (
   <section className=" text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 class="text-4xl md:text-5xl font-bold text-primary mb-4">Hobby <span class="text-base-content">Resources</span></h1>
          <p className="text-gray-500 text-lg mb-6">
            Level up your skills with our curated collection of tutorials, guides, and learning materials.
          </p>
         
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="https://hobbyhub-92596.web.app/assets/resources-Bqx3U5nm.jpg" // Adjust the path as necessary
            alt="Luxury Car"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
export default Hobby;