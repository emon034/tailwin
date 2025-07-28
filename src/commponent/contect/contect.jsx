import React from "react";

const Contect = () => {
  return (
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
  {/* Contact Details */}
  <div className="space-y-8">
    <div className="card bg-base-100/30 backdrop-blur-sm border border-white/10 p-8 space-y-6">

      {/* Location */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-primary/10 text-primary mt-1">
          <i className="fa-solid fa-location-dot text-xl">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
              </path>
              </svg>
          </i>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Our Location</h3>
          <p className="text-base-content/80">
            123 Hobby Street<br />
            Creative District<br />
            San Francisco, CA 94107
          </p>
        </div>
      </div>

      {/* Phone */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-secondary/10 text-secondary mt-1">
          <i className="fa-solid fa-phone text-xl">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z">
              </path>
              </svg>
          </i>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Phone</h3>
          <p className="text-base-content/80">
            +1 (555) 123-4567<br />
            Mon-Fri, 9am-5pm PST
          </p>
        </div>
      </div>

      {/* Email */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-accent/10 text-accent mt-1">
          <i className="fa-solid fa-envelope text-xl">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
              </path>
              </svg>
          </i>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Email</h3>
          <p className="text-base-content/80">
            support@hobbyhub.com<br />
            We respond within 24 hours
          </p>
        </div>
      </div>

      {/* Support */}
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-info/10 text-info mt-1">
          <i className="fa-solid fa-headset text-xl">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="text-xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M21 12.22C21 6.73 16.74 3 12 3c-4.69 0-9 3.65-9 9.28-.6.34-1 .98-1 1.72v2c0 1.1.9 2 2 2h1v-6.1c0-3.87 3.13-7 7-7s7 3.13 7 7V19h-8v2h8c1.1 0 2-.9 2-2v-1.22c.59-.31 1-.92 1-1.64v-2.3c0-.7-.41-1.31-1-1.62z"></path><circle cx="9" cy="13" r="1"></circle><circle cx="15" cy="13" r="1"></circle><path d="M18 11.03A6.04 6.04 0 0 0 12.05 6c-3.03 0-6.29 2.51-6.03 6.45a8.075 8.075 0 0 0 4.86-5.89c1.31 2.63 4 4.44 7.12 4.47z">
              </path>
              </svg>
          </i>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Support</h3>
          <p className="text-base-content/80">
            helpcenter@hobbyhub.com<br />
            24/7 technical support
          </p>
        </div>
      </div>

    </div>
  </div>

  {/* Contact Form */}
  <div className="card bg-base-100/30 backdrop-blur-sm border border-white/10 shadow-xl p-8">
    <h2 className="text-2xl font-bold mb-6 text-base-content">Send Us a Message</h2>
    <form className="space-y-4">
      <fieldset className="fieldset space-y-4">

        {/* Name and Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div>
            <label className="label">Name</label>
            <input className="input" placeholder="Full name" required type="text" />
          </div>
          <div>
            <label className="label">Email</label>
            <input className="input" placeholder="Email" required type="email" />
          </div>
        </div>

        {/* Subject */}
        <div>
          <label className="label">Subject</label>
          <input className="input w-full" placeholder="Subject" required type="text" />
        </div>

        {/* Message */}
        <div>
          <label className="label">Message</label>
          <textarea
            name="message"
            className="textarea w-full"
            placeholder="Write your message.."
            required
          ></textarea>
        </div>

      </fieldset>

      {/* Submit Button */}
      <div className="form-control mt-8">
        <button type="submit" className="btn btn-primary rounded-full gap-2">
          <i className="fa-solid fa-paper-plane">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M476 3.2L12.5 270.6c-18.1 10.4-15.8 35.6 2.2 43.2L121 358.4l287.3-253.2c5.5-4.9 13.3 2.6 8.6 8.3L176 407v80.5c0 23.6 28.5 32.9 42.5 15.8L282 426l124.6 52.2c14.2 6 30.4-2.9 33-18.2l72-432C515 7.8 493.3-6.8 476 3.2z">
              </path>
              </svg>
            </i> Send Message
        </button>
      </div>
    </form>
  </div>
</div>

  );
}
export default Contect;