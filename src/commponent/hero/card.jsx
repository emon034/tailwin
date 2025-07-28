import React from "react";

const cards = [
  {
    id: 1,
    title: 'Pixel Warriors',
    image: 'https://i.ibb.co/b5vhXPGR/1669378210-bdaavk-26153.jpg',
    description: 'Start Date: Thu May 29 2025',
  },
  {
    id: 2,
    title: 'Hook & Horizon ',
    image: 'https://i.ibb.co/SDJcLQXP/Jeddah-Fishing-Trips.jpg',
    description: 'Start Date: Fri May 30 2025',
  },
  {
    id: 3,
    title: 'The Green Thumb Society',
    image: 'https://i.ibb.co/mCgLvPwj/flower-gardening-1666054965738.webp',
    description: 'Start Date: Thu Jun 05 2025',
  },
  {
    id: 4,
    title: 'WanderLoop',
    image: 'https://i.ibb.co/bjPqwqzK/full-shot-travel-concept-with-landmarks-1536x864-jpg.webp',
    description: 'Start Date: Mon May 26 2025.',
  },
{
    id: 5,
    title: 'SketchCrafters',
    image: 'https://i.ibb.co/S7D2Nr2p/Adobe-Stock-62652907-1.webp',
    description: 'Start Date: Wed May 21 2025',
  },
  {
    id: 6,
    title: 'Shutter Circle',
    image: 'https://i.ibb.co/dw2rRgK5/497447916-4139469649631797-6138770017559540476-n.jpg',
    description: 'Start Date: Tue May 27 2025',
  },
  {
    id: 7,
    title: 'Yen Rivas',
    image: '',
    description: 'Start Date: Sat Aug 18 2012',
  },

];

const Card = () =>{
    return (
        <div className=" max-w-full mx-auto px-4 py-8  w-full mt-5 ">
      <h2 className="text-4xl font-bold mb-6 text-center text-blue-600">Featured Groups</h2>
      <div class="mt-4 h-1 w-20 bg-accent mx-auto"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className=" text-shadow-gray-700 border-spacing-2  rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl 
            transition-shadow duration-300 hover:scale-105  "
          >
            <img src={card.image} alt={card.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold  text-shadow-gray-700">{card.title}</h3>
              <p className=" text-shadow-gray-700 text-sm mt-1">{card.description}</p>
              <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                <a href="">See More</a>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    );

}
export default Card;