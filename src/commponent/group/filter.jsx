import React from "react";

const Filter = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-8 sticky  top-20 z-30 ">
    <div className="mb-8 p-4 rounded-md md:rounded-full backdrop-blur-md bg-base-100/30 border border-white/10 shadow-sm flex flex-wrap justify-center items-center gap-4 sticky  top-0 z-30 ">
      {/* Filters Title */}
      <div className="flex items-center gap-2 bg-base-100/50 px-4 py-2 rounded-full m-top-">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="text-primary"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M487.976 0H24.028C2.71 0-8.047 25.866 7.058 40.971L192 225.941V432c0 7.831 3.821 15.17 10.237 19.662l80 55.98C298.02 518.69 320 507.493 320 487.98V225.941l184.947-184.97C520.021 25.896 509.338 0 487.976 0z" />
        </svg>
        <span className="font-medium">Filters:</span>
      </div>

      {/* Sort Dropdown */}
      <div className="dropdown dropdown-hover">
        <label tabIndex={0} className="btn btn-sm rounded-full gap-2 bg-base-100/50 hover:bg-base-200/50">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 512 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M304 416h-64a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h64a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-128-64h-48V48a16 16 0 0 0-16-16H80a16 16 0 0 0-16 16v304H16c-14.19 0-21.37 17.24-11.29 27.31l80 96a16 16 0 0 0 22.62 0l80-96C197.35 369.26 190.22 352 176 352zm256-192H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-64 128H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM496 32H240a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h256a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z" />
          </svg>
          Sort: Newest First
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow-lg rounded-box bg-base-100/80 backdrop-blur-sm w-52">
          <li><button>Newest First</button></li>
          <li><button>Oldest First</button></li>
        </ul>
      </div>

      {/* Category Dropdown */}
      <div className=" dropdown dropdown-hover ">
        <label tabIndex={0} className="btn btn-sm rounded-full gap-2 bg-base-100/50 hover:bg-base-200/50">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 640 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M497.941 225.941L286.059 14.059A48 48 0 0 0 252.118 0H48C21.49 0 0 21.49 0 48v204.118a48 48 0 0 0 14.059 33.941l211.882 211.882c18.744 18.745 49.136 18.746 67.882 0l204.118-204.118c18.745-18.745 18.745-49.137 0-67.882zM112 160c-26.51 0-48-21.49-48-48s21.49-48 48-48 48 21.49 48 48-21.49 48-48 48zm513.941 133.823L421.823 497.941c-18.745 18.745-49.137 18.745-67.882 0l-.36-.36L527.64 323.522c16.999-16.999 26.36-39.6 26.36-63.64s-9.362-46.641-26.36-63.64L331.397 0h48.721a48 48 0 0 1 33.941 14.059l211.882 211.882c18.745 18.745 18.745 49.137 0 67.882z" />
          </svg>
          Category: All
        </label>
        <ul tabIndex={0} className="dropdown-content menu p-2 shadow-lg rounded-box bg-base-200/80 backdrop-blur-sm min-w-65 grid grid-cols-2 gap-2">
          {[
            
            <a href="">All</a>,
            <a href="">Drawing & Painting</a>,
            <a href="">Photography</a>,
            <a href="">Video Gaming</a>,
            <a href="">Fishing</a>,
            <a href="">Gardening</a>,
            <a href="">Running</a>,
            <a href="">Cooking</a>,
            <a href="">Reading</a>,
            <a href="">Writing'</a>,
            <a href="">Other</a>,
            
            
          ].map((cat) => (
            <li key={cat}>
              <button className="text-nowrap text-xs">{cat}</button>
            </li>
          ))}
        </ul>
      </div>

      {/* Reset Button */}
      <button className="btn btn-sm btn-ghost rounded-full">Reset Filters</button>
    </div>
    </section>
   
  )
}
export default Filter;