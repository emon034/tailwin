import React from "react";


 
const Testimonials = () => {
  
  return (
    <section className="bg-base-100 py-16 md:py-20 px-4 md:px-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">🌟 What users say</h2>
        <div className="mt-4 h-1 w-20 bg-accent mx-auto"></div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-center text-center mt-5">
            <div className="p-6  rounded-lg shadow-md">
                <p className="">"HobbyHub has transformed my free time! I've met amazing people and learned so much."</p>
               <img className="w-20 h-20 rounded-full border-2  text-center " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5mtLfjCs0GKjf_hu2VELxYI6tG3OtljyAxg&s" alt="" />
                <h4 className="mt-4 font-semibold">- Sarah L.</h4>
            </div>
            <div className="p-6  rounded-lg shadow-md">
                <p className="">"The community is so supportive. I love sharing my photography passion with others."</p>
                 <img className="w-20 h-20 rounded-full border-2  i " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlDCzpqMjGM2CdBfLU7m_pLXvhQn1i6_1q0w&s" alt="" />
                <h4 className="mt-4 font-semibold
                ">- Mike D.</h4>
            </div>
            <div className="p-6 rounded-lg shadow-md text-center">
                <p className="">"I never knew how much I needed a hobby group until I joined HobbyHub. It's been a game-changer!"</p>
                 <img className="w-20 h-20 rounded-full border-2  text-center " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrK5uVVmJ5CJ1SZlzYnKsCFIlEQRMV3AzaoA&s" alt="" />
                <h4 className="mt-4 font-semibold">- Emily R.</h4>
            </div>
            <div className="p-6  rounded-lg shadow-md">
                <p className="">"HobbyHub helped me discover my love for painting. The workshops are fantastic!"</p>
                <img className="w-20 h-20 rounded-full border-2  text-center " src="https://wevote-images.s3.amazonaws.com/wv87cand3102350/twitter_profile_image-20240702_1_200x200.jpeg" alt="" />
                <h4 className="mt-4 font-semibold">- John S.</h4>
            </div>
            <div className="p-6  rounded-lg shadow-md">
                <p className="">"I joined a hiking group through HobbyHub and now I have friends to explore the outdoors with!"</p>
                <img className="w-20 h-20 rounded-full border-2  text-center " src="https://cdn.i-scmp.com/sites/default/files/styles/768x768/public/d8/images/methode/2019/03/27/dffa4156-4f80-11e9-8617-6babbcfb60eb_image_hires_141554.JPG?itok=FNC2TjNJ&v=1553667358" alt="" />
                <h4 className="mt-4 font-semibold">- Lisa K.</h4>
            </div>
            <div className="p-6  rounded-lg shadow-md">
                <p className="">"HobbyHub is more than just a platform; it's a community that inspires and motivates me every ."</p>
                <img className="w-20 h-20 rounded-full border-2  text-center " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk12g33EWr9UhVmCpmvZoJRs9XQq9JzxZ_JA&s" alt="" />
                <h4 className="mt-4 font-semibold">- David T.</h4>
            </div>
        </div>
    </section>
  );
}
export default Testimonials;