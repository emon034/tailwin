import React from "react";

const Choose = () => {
    return (
       <section className=" py-16 md:py-20 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Choose <span className="text-blue-600">HobbyHub</span>?</h2>
      <p className="text-center">We've built HobbyHub with passion and purpose to create the best experience for <br /> hobby enthusiasts.</p>
      <div className="mt-4 h-1 w-20 bg-accent mx-auto"></div>
        <div className=" grid gap-8 sm:grid-cols-2 lg:grid-cols-3 text-center mt-5">        
         <div className="card bg-base-100/30 backdrop-blur-sm border border-white/10 hover:shadow-xl transition-all">
  <div className="card-body items-center text-center">
    <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
     <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32c-37.764.086-74.894 9.72-107.938 28.002l27.52 19.36 40.033-13.694 24.582 5.62 8.78 49.864 15.1-11.588 41.087-14.046 18.26 27.742-35.82 18.963-22.473 16.152-2.458 22.475-24.932 21.07-7.023 34.064-14.047 1.053 7.023-38.63-53.027-2.807-12.64 18.61-.1-.01v26.644l25.824 1.986 23.838 16.885-1.986 25.328 33.77 5.96-.36.76 53.004-30.558 90.88 59.098-20.51 48.548-32.685 20.156-61.143 77.965-13.498-3.845L262.216 365l-42.213-42.213 7.853-13.86-25.732-9.482-25.326-30.79-21.853-4.967L116.422 208H112l-5.117 26.746-3.64-39.146 5.267-29.147-.7-23.178L97.247 98.2C55.516 140.12 32.06 196.847 32 256c0 123.712 100.288 224 224 224 82.413-.028 158.155-45.308 197.195-117.887L442.82 298.14l-5.62-36.17-34.06-27.392 6.67-37.926 15.803-20.367 37.555-5.05C428.766 87.086 346.913 32.072 256 32zm89.047 48H368v48l-32 16v-23.836zm-122.76 166.518l29.85 4.918-4.213 6.32-24.23-4.916z">
        </path>
        </svg>
    </div>
    <h3 className="card-title text-xl mb-2">Diverse Communities</h3>
    <p className="text-base-content/80">From photography to pottery, find groups for every interest imaginable.</p>
  </div>
</div>

         <div className="card bg-base-100/30 backdrop-blur-sm border border-white/10 hover:shadow-xl transition-all">
  <div className="card-body items-center text-center">
    <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M255.03 261.65c6.25 6.25 16.38 6.25 22.63 0l11.31-11.31c6.25-6.25 6.25-16.38 0-22.63L253.25 192l35.71-35.72c6.25-6.25 6.25-16.38 0-22.63l-11.31-11.31c-6.25-6.25-16.38-6.25-22.63 0l-58.34 58.34c-6.25 6.25-6.25 16.38 0 22.63l58.35 58.34zm96.01-11.3l11.31 11.31c6.25 6.25 16.38 6.25 22.63 0l58.34-58.34c6.25-6.25 6.25-16.38 0-22.63l-58.34-58.34c-6.25-6.25-16.38-6.25-22.63 0l-11.31 11.31c-6.25 6.25-6.25 16.38 0 22.63L386.75 192l-35.71 35.72c-6.25 6.25-6.25 16.38 0 22.63zM624 416H381.54c-.74 19.81-14.71 32-32.74 32H288c-18.69 0-33.02-17.47-32.77-32H16c-8.8 0-16 7.2-16 16v16c0 35.2 28.8 64 64 64h512c35.2 0 64-28.8 64-64v-16c0-8.8-7.2-16-16-16zM576 48c0-26.4-21.6-48-48-48H112C85.6 0 64 21.6 64 48v336h512V48zm-64 272H128V64h384v256z">
        </path>
        </svg>
    </div>
    <h3 className="card-title text-xl mb-2">Modern Platform</h3>
    <p className="text-base-content/80">Built with React and Tailwind for a seamless, responsive experience.</p>
  </div>
</div>

            
           <div className="card bg-base-100/30 backdrop-blur-sm border border-white/10 hover:shadow-xl transition-all">
  <div className="card-body items-center text-center">
    <div className="p-4 rounded-full bg-primary/10 text-primary mb-4">
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 640 512" class="text-4xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z">
        </path>
        </svg>
    </div>
    <h3 className="card-title text-xl mb-2">Easy Collaboration</h3>
    <p className="text-base-content/80">Organize events, share resources, and grow together with your hobby group.</p>
  </div>
</div>

        </div>
      </section>
  
        
           
           
      
    );
       
}
export default Choose;

