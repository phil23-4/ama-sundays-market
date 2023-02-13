import Partners from "../ui/partners";
import TermsModal from "../ui/termsModal";

export default function Registration() {
  return (
    // <!-- Contact Us -->
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* <!-- Grid --> */}
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="font-display inline text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            Join us
          </h1>
          <p className="mt-1 text-gray-800 dark:text-white md:text-lg">
            We are a weekly Sunday farmers market that helps to expand markets
            and value for the farmer by bringing produce closer and fresher to
            the consumer
          </p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              What can I expect?
            </h2>

            <ul className="mt-2 space-y-2">
              <li className="flex space-x-3">
                <svg
                  className="h-6 w-6 flex-shrink-0 text-gray-600 dark:text-white/70"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-gray-600 dark:text-white/70">
                  A clean and secure local marketplace to retail products
                </span>
              </li>

              <li className="flex space-x-3">
                <svg
                  className="h-6 w-6 flex-shrink-0 text-gray-600 dark:text-white/70"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-gray-600 dark:text-white/70">
                  Direct interaction with the consumer{" "}
                  {"(no unscrupulous middlemans)"}
                </span>
              </li>

              <li className="flex space-x-3">
                <svg
                  className="h-6 w-6 flex-shrink-0 text-gray-600 dark:text-white/70"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="text-gray-600 dark:text-white/70">
                  Relationship building with consumers
                </span>
              </li>
            </ul>
          </div>

          {/* <!-- Brands --> */}
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              Partners:
            </h2>

            <div className="-m-3 mt-2 flex max-w-lg flex-wrap">
              <Partners />
            </div>
          </div>
          {/* <!-- End Brands --> */}
        </div>
        {/* <!-- End Col --> */}

        <div className="relative">
          {/* <!-- Card --> */}
          <div className="flex flex-col rounded-xl border p-4 dark:border-gray-700 sm:p-6 lg:p-10">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
              Applicant information
            </h2>

            <form>
              <div className="mt-6 grid gap-4 lg:gap-6">
                {/* <!-- Grid --> */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-firstname-join-us-1"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      placeholder="John"
                      name="hs-firstname-join-us-1"
                      id="hs-firstname-join-us-1"
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-lastname-join-us-1"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      placeholder="Doe"
                      name="hs-lastname-join-us-1"
                      id="hs-lastname-join-us-1"
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                    />
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div>
                  <label
                    htmlFor="hs-work-email-join-us-1"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="hs-work-email-join-us-1"
                    placeholder="example@email.com"
                    id="hs-work-email-join-us-1"
                    autoComplete="email"
                    className="required block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                  />
                </div>

                {/* <!-- Grid --> */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-6">
                  <div>
                    <label
                      htmlFor="hs-company-join-us-1"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Company
                    </label>
                    <input
                      type="text"
                      name="hs-company-join-us-1"
                      placeholder="Company name"
                      id="hs-company-join-us-1"
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="hs-company-website-join-us-1"
                      className="block text-sm font-medium text-gray-700 dark:text-white"
                    >
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="hs-company-website-join-us-1"
                      id="hs-company-website-join-us-1"
                      placeholder="+263-713-678"
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                      className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm required:border-red-500 focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                    />
                  </div>
                </div>
                {/* <!-- End Grid --> */}

                <div>
                  <label
                    htmlFor="hs-about-join-us-1"
                    className="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Physical Address
                  </label>
                  <textarea
                    id="hs-about-join-us-1"
                    placeholder="55 Hudson Avenue Harare, Zimbabwe"
                    name="hs-about-join-us-1"
                    rows="4"
                    className="block w-full rounded-md border-gray-200 py-3 px-4 text-sm focus:border-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-slate-900 dark:text-white/70"
                  ></textarea>
                </div>
              </div>
              {/* <!-- End Grid --> */}

              {/* <!-- Checkbox --> */}
              <div className="mt-3 flex">
                <div className="flex">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="mt-1.5 shrink-0 cursor-pointer rounded border-gray-200 text-primary/90 focus:ring-primary/90 dark:border-gray-700 dark:bg-gray-800 dark:checked:border-primary/90 dark:checked:bg-primary/90 dark:focus:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3">
                  <label
                    htmlFor="remember-me"
                    className="text-sm text-gray-600 dark:text-gray-300"
                  >
                    By submitting this form I have read and acknowledged the{" "}
                    <a
                      data-hs-overlay="#hs-regulations"
                      className="font-medium text-primary/90 decoration-2 hover:underline"
                      href="#"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>
                <TermsModal />
              </div>
              {/* <!-- End Checkbox --> */}

              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-x-3 rounded-md border border-transparent bg-primary/80 py-3 px-4 text-center text-sm font-medium text-white transition hover:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/90 focus:ring-offset-2 focus:ring-offset-white dark:focus:ring-offset-gray-800 lg:text-base"
                >
                  <div className="w-auto p-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                      />
                    </svg>
                  </div>
                  Register
                </button>
              </div>
            </form>

            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500 dark:text-white">
                We&apos;ll get back to you in 1-2 business days.
              </p>
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
    // <!-- End Contact Us -->
  );
}
