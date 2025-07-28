import React from "react";

const OurMission = () => {
  return (
     <div className="  py-10 px-4 md:px-10  text-shadow-gray-700">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        
        {/* Soldier Image */}
        <div className="w-full md:w-1/2 mt-5">
          <img
            src="https://hobbyhub-92596.web.app/assets/team-Bbhs_-Yw.jpg"
            alt="Featured Soldier"
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

      <div class="md:w-1/2 space-y-6">
  <h2 class="text-4xl font-bold text-base-content">
    Our <span class="text-primary">Mission</span>
  </h2>
  <p class="text-lg text-base-content/80">
    At HobbyHub, we believe everyone deserves to find their passion tribe. Our mission is to break down barriers between hobbyists and create meaningful connections through shared interests.
  </p>

  <div class="space-y-4">

    <div class="flex items-start gap-4">
      <div class="p-3 rounded-full bg-primary/10 text-primary">
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 352 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96.06 454.35c.01 6.29 1.87 12.45 5.36 17.69l17.09 25.69a31.99 31.99 0 0 0 26.64 14.28h61.71a31.99 31.99 0 0 0 26.64-14.28l17.09-25.69a31.989 31.989 0 0 0 5.36-17.69l.04-38.35H96.01l.05 38.35zM0 176c0 44.37 16.45 84.85 43.56 115.78 16.52 18.85 42.36 58.23 52.21 91.45.04.26.07.52.11.78h160.24c.04-.26.07-.51.11-.78 9.85-33.22 35.69-72.6 52.21-91.45C335.55 260.85 352 220.37 352 176 352 78.61 272.91-.3 175.45 0 73.44.31 0 82.97 0 176zm176-80c-44.11 0-80 35.89-80 80 0 8.84-7.16 16-16 16s-16-7.16-16-16c0-61.76 50.24-112 112-112 8.84 0 16 7.16 16 16s-7.16 16-16 16z">
      </path>
      </svg>
        
      </div>
      <div>
        <h3 class="text-xl font-semibold">1. Spark Inspiration</h3>
        <p class="text-base-content/70">Discover new hobbies and creative ideas from our diverse community.</p>
      </div>
    </div>

 
    <div class="flex items-start gap-4">
      <div class="p-3 rounded-full bg-secondary/10 text-secondary">
        
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z">
          </path>
          </svg>
      </div>
      <div>
        <h3 class="text-xl font-semibold">2. Build Community</h3>
        <p class="text-base-content/70">Connect with people who share your passions and enthusiasm.</p>
      </div>
    </div>

   
    <div class="flex items-start gap-4">
      <div class="p-3 rounded-full bg-accent/10 text-accent">
      
       <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z">
        </path>
        </svg>
      </div>
      <div>
        <h3 class="text-xl font-semibold">3. Share Knowledge</h3>
        <p class="text-base-content/70">Learn from experts and enthusiasts in your favorite hobbies.</p>
      </div>
    </div>
  </div>
</div>

      
      </div>
    </div>
  );
}
export default OurMission;