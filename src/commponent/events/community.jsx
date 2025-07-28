import React from "react";

const community = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center">
        {/* Text content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 class="text-4xl md:text-5xl font-bold text-purple-600 text-shadow-green-700 mb-4">Community <span class="text-base-content">Events</span></h1>
          <p className="text-gray-500 text-lg mb-6">
            Join upcoming meetups, workshops, and gatherings with fellow hobby enthusiasts.
          </p>
          <button className="bg-green-600 hover:bg-red-700 transition px-6 py-3 rounded-xl text-lg">
          Host an Event
          </button>
        </div>

        {/* Image */}
        <div className="w-full lg:w-1/2 mb-10 lg:mb-0">
          <img
            src="https://ucarecdn.com/d70cf4ed-0a54-4fc3-ae94-6dcb44c2217e/-/crop/354:181/-/quality/lightest/-/format/webp/" // Adjust the path as necessary
            alt="Luxury Car"
            className="w-full rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}
export default community;