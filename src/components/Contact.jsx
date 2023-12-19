import axios from "axios";
import React, { useState } from "react";

const Contact = () => {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState(false);

    const handleLogout = async () => {
      try {
        const resp = await axios.post('/api/v1/users/logout', {});
        resp && window.location.replace('/')
      } catch (error) {
        console.error('Logout failed !!', error);
      }
    };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post("/api/v1/users/contact", {
        fullname,
        email,
        mobile,
        message,
      });
      console.log("Contact form submitted succesfully");
      resp && setAlert(true);
      resp && console.log("congo");
    } catch (error) {
      console.log("Contact form submission error !!", error);
    }
  };
  return (
    <section className="bg-gray-900 overflow-y-auto">
      <div className="flex flex-col items-center justify-center px-10 py-8 mx-auto md:h-screen lg:py-0 ">
            <div className="px-4 py-1 mb-2 rounded-xl font-semibold bg-blue-600 border-2 text-white ml-2">
            <button onClick={handleLogout} className="">Logout</button>
            </div>
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="md:space-y-4 sm:p-2">
            <h1 className="font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Contact Us
            </h1>
            <form
              className="space-y-4 md:space-y-6"
              action="#"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  htmlFor="fullname"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John Doe"
                  required={true}
                  onChange={(e) => {
                    setFullname(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="John@xmail.com"
                  required={true}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="mobile"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Mobile
                </label>
                <input
                  type="text"
                  name="mobile"
                  id="mobile"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+91-2423892"
                  required={true}
                  onChange={(e) => {
                    setMobile(e.target.value);
                  }}
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required={true}
                  rows={4}
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-800 font-semibold rounded-lg text-sm px-5 py-2.5 text-center"
              >
                Submit
              </button>
            </form>
            {alert && (
              <div
                id="alert-border-3"
                class="flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
                role="alert"
              >
                <svg
                  class="flex-shrink-0 w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <div class="ms-3 text-sm font-medium">
                  Success!! {" "} Form Submitted.
                  We will contact you shortly.
                </div>
                <button
                  type="button"
                  onClick={()=>setAlert(false)}
                  class="ms-auto -mx-1.5 -my-1.5 bg-green-50 text-green-500 rounded-lg focus:ring-2 focus:ring-green-400 p-1.5 hover:bg-green-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-green-400 dark:hover:bg-gray-700"
                  data-dismiss-target="#alert-border-3"
                  aria-label="Close"
                >
                  <span class="sr-only">Dismiss</span>
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
