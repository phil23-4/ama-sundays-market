import { useState } from "react";

export default function ContactUs() {
  const [firstname, setFirstName] = useState("");
  const [laststname, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Sending");
    let data = {
      firstname,
      laststname,
      phone,
      email,
      message,
    };
    fetch("/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        console.log("Response succeeded!");
        setSubmitted(true);
        setFirstName("");
        setLastName("");
        setPhone("");
        setEmail("");
        setMessage("");
      }
    });
  };
  return (
    // <!-- Contact Us -->
    <div className="mx-auto max-w-[85rem] px-4 py-10  sm:px-6 lg:px-8 lg:py-14">
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl">
            Contact us
          </h1>
          <p className="mt-1 text-gray-600 dark:text-gray-400">
            We&apos;d love to talk about how we can help you.
          </p>
        </div>

        <div className="mt-12 grid items-center gap-6 lg:grid-cols-2 lg:gap-16">
          {/* <!-- Card --> */}
          <div className="flex flex-col rounded-xl border p-4 dark:border-gray-700 sm:p-6 lg:p-8">
            <h2 className="mb-8 text-xl font-semibold text-gray-800 dark:text-gray-200">
              Send us a message
            </h2>

            <form>
              <div className="grid gap-4">
                {/* <!-- Grid --> */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="firstname" className="sr-only">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                      id="firstname"
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                      placeholder="First Name"
                    />
                  </div>

                  <div>
                    <label htmlFor="lastname" className="sr-only">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                      id="lastname"
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div>
                  <label htmlFor="email" className="sr-only">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                    placeholder="Email"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="sr-only">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    onChange={(e) => {
                      setPhone(e.target.value);
                    }}
                    id="phone"
                    className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                    placeholder="Phone Number"
                  />
                </div>

                <div>
                  <label htmlFor="about" className="sr-only">
                    Details
                  </label>
                  <textarea
                    id="about"
                    name="about"
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    rows="4"
                    className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
                    placeholder="Details"
                  ></textarea>
                </div>
              </div>
              {/* <!-- End Grid --> */}

              <div className="mt-4 grid">
                <button
                  type="submit"
                  onClick={(e) => {
                    handleSubmit(e);
                  }}
                  className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-primary/[.85] py-3 px-4 text-center text-sm font-medium text-white transition hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/95 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 lg:text-base"
                >
                  Send inquiry
                </button>
              </div>

              <div className="mt-3 text-center">
                <p className="text-sm text-gray-500">
                  We&apos;ll get back to you in 1-2 business days.
                </p>
              </div>
            </form>
          </div>
          {/* <!-- End Card --> */}

          <div className="divide-y divide-gray-200 dark:divide-gray-800">
            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-7 py-6">
              <svg
                className="mt-1.5 h-6 w-6 flex-shrink-0 text-gray-800 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path d="M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Support
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  We&apos;re here to help with any questions or code.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Contact support
                  <svg
                    className="h-2.5 w-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className="flex gap-x-7 py-6">
              <svg
                className="mt-1.5 h-6 w-6 flex-shrink-0 text-gray-800 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  FAQ
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Search our FAQ for answers to anything you might ask.
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  Visit FAQ
                  <svg
                    className="h-2.5 w-2.5 transition ease-in-out group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}

            {/* <!-- End Icon Block --> */}

            {/* <!-- Icon Block --> */}
            <div className=" flex gap-x-7 py-6">
              <svg
                className="mt-1.5 h-6 w-6 flex-shrink-0 text-gray-800 dark:text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
              </svg>
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                  Contact us by email
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  If you wish to write us an email instead please use
                </p>
                <a
                  className="mt-2 inline-flex items-center gap-x-2 text-sm font-medium text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                  href="#"
                >
                  info@amasundayfarmersmarket.com
                </a>
              </div>
            </div>
            {/* <!-- End Icon Block --> */}
          </div>
        </div>
      </div>
    </div>
    // {
    //   /* <!-- End Contact Us --> */
    // }
  );
}
