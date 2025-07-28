import React from "react";
const upcomingEvents = [
  {
    id: 1,
    title: "Urban Photography Walk",
    date: "2023-11-15",
    location: "Central Park, New York",
    attendees: 24,
    group: "NYC Photographers Club",
  },
  {
    id: 2,
    title: "Beginner's Pottery Workshop",
    date: "2023-11-20",
    location: "Creative Arts Center",
    attendees: 8,
    group: "Clay Masters Collective",
  },
  {
    id: 3,
    title: "Sunset Hiking Meetup",
    date: "2023-11-25",
    location: "Bear Mountain Trail",
    attendees: 30,
    group: "Outdoor Enthusiasts Hub",
  },
  {
    id: 4,
    title: "Weekly Coding Jam",
    date: "2023-11-28",
    location: "Tech Loft, San Francisco",
    attendees: 18,
    group: "JS Coders Group",
  },
  {
    id: 5,
    title: "Guitar Circle Jam Session",
    date: "2023-12-02",
    location: "Downtown Music Café",
    attendees: 15,
    group: "Strum & Hum Society",
  },
  {
    id: 6,
    title: "Watercolor Landscape Class",
    date: "2023-12-05",
    location: "The Art Studio, Chicago",
    attendees: 12,
    group: "Windy City Artists",
  },
];

const unknownButton = (e) => {
  e.preventDefault();
  toast.error("Need admin permission. Contact with admin.");
};

const EventsCard = () => {
  return (
   <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6  rounded-3xl p-8 mx-auto my-12 ">
      {upcomingEvents.map((event) => (
        <div key={event.id} className="card bg-base-100 shadow-md rounded-2xl hover:shadow-xl transition-shadow duration-300">
          <div className="card-body">
            <h2 className="card-title text-xl">{event.title}</h2>

            {/* Date */}
            <div className="flex items-center gap-2 text-sm  text-shadow-gray-700  mt-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M8 7V3m8 4V3M5 11h14M5 19h14a2 2 0 002-2V7a2 2 0
                       00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <span>{new Date(event.date).toDateString()}</span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-sm  text-shadow-gray-700  mt-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M12 11c1.657 0 3-1.343 3-3S13.657 5 12 5s-3
                       1.343-3 3 1.343 3 3 3z"/>
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M19.428 15.341A8 8 0 004 15.34C4 17.761
                       7.582 20 12 20s8-2.239 8-4.659z"/>
              </svg>
              <span>{event.location}</span>
            </div>

            {/* Group Info */}
            <div className="flex items-center gap-2 text-sm text-shadow-gray-700 mt-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2"
                   viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M17 20h5v-2a4 4 0 00-5-3.87M9
                       20H4v-2a4 4 0 015-3.87M15 11a3 3 0
                       11-6 0 3 3 0 016 0zm6 0a2 2 0
                       11-4 0 2 2 0 014 0zM7 11a2 2 0
                       11-4 0 2 2 0 014 0z"/>
              </svg>
              <span>{`${event.attendees} attending • ${event.group}`}</span>
            </div>

            {/* Buttons */}
            <div className="card-actions justify-end mt-4">
              <button onClick={unknownButton} className="btn btn-primary btn-sm">
                Join Event
              </button>
              <button className="btn btn-ghost btn-sm">Details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default EventsCard;