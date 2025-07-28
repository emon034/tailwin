import React from "react";

const Slider = () => {
  return (
  <div className="carousel w-full h-[800px]">
    <div id="slide1" className="carousel-item relative w-full">
  <img
    src="https://i.ibb.co/JRXR3gmZ/Dashboard-835-gardening-03-24.jpg"
    className="w-full object-cover"
    alt="Slide 1"
  />

  {/* Overlay Hero Content */}
  <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
    <div className="text-center text-white max-w-xl px-4">
      <h1 className="text-5xl font-bold">Hello there</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>

  {/* Navigation Buttons */}
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" className="btn btn-circle">❮</a>
    <a href="#slide2" className="btn btn-circle">❯</a>
  </div>
</div>
    <div id="slide2" className="carousel-item relative w-full">
  <img
    src="https://i.ibb.co/Wp4h2bNS/holly-mandarich-Y90-GKs-TKx-BM-unsplash.webp"
    className="w-full object-cover"
    alt="Slide 2"
  />

  {/* Overlay Hero Content */}
  <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
    <div className="text-center text-white max-w-xl px-4">
      <h1 className="text-5xl font-bold">Welcome to HobbyHub</h1>
      <p className="py-6">
        Discover new hobbies, connect with like-minded individuals, and enjoy your free time.
      </p>
      <button className="btn btn-primary">Join Now</button>
    </div>
  </div>

  {/* Navigation Buttons */}
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide1" className="btn btn-circle">❮</a>
    <a href="#slide3" className="btn btn-circle">❯</a>
  </div>
</div>
    <div id="slide3" className="carousel-item relative w-full">
  <img
    src="https://i.ibb.co/G4s7GWZz/Jeddah-Fishing-Trips.jpg"
    className="w-full object-cover"
    alt="Slide 3"
  />

  {/* Overlay Hero Content */}
  <div className="absolute inset-0  bg-opacity-40 flex items-center justify-center">
    <div className="text-center text-white max-w-xl px-4">
      <h1 className="text-5xl text-gray-600 font-bold">Hello there</h1>
      <p className="py-6 text-gray-600">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>

  {/* Navigation Buttons */}
  <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
    <a href="#slide3" className="btn btn-circle">❮</a>
    <a href="#slide1" className="btn btn-circle">❯</a>
  </div>
</div>
   
</div>
  
 
  

  );
}
export default Slider;