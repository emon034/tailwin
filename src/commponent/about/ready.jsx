import React from "react";

const Ready = () => {
    return (
        <section className="text-shadow-gray-700 py-16 px-6 md:px-12 bg-gradient-to-r ">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Ready to Find Your <span className="text-primary">Hobby Tribe</span>?</h2>
          <p className="text-center">Join thousands of enthusiasts who are already sharing their passions and making new <br /> connections.</p>
        </div>
        <div className="text-center mt-8 gap-9">
           <a class="btn btn-primary btn-lg rounded-full px-8" href="/register" data-discover="true">Sign Up Now</a>
           
           <a class="btn  btn-lg rounded-full px-8" href="/register" data-discover="true">Browse Group</a>
        </div>
    </section>
    );
}
export default Ready;