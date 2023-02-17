const priceList = [
  {
    name: "Individuals",
    target: "Lorem ipsum",
    price: 50,
    duration: "Sunday",
    benefits: ["lorem", "ipsum", "delores"],
  },
  {
    name: "SMEs",
    target: "Lorem ipsum",
    price: 120,
    duration: "season",
    benefits: ["lorem", "ipsum", "delores"],
  },
  {
    name: "Corporates",
    target: "Lorem ipsum",
    price: 200,
    duration: "month",
    benefits: ["lorem", "ipsum", "delores"],
  },
];
export default function PriceCard() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="relative xl:mx-auto xl:w-10/12">
      {/* <!-- Grid --> */}
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
        {/* <!-- Card --> */}
        {priceList.map((price, i) => (
          <div
            key={i}
            className={classNames(
              `${price.name.toString().toLowerCase()}` === "season"
                ? "shadow-xl shadow-primary/[.16] hover:shadow-primary/20 dark:shadow-gray-900/[.2] "
                : "shadow-none hover:shadow-secondary/20",
              "relative z-10 rounded-xl border bg-white p-5  hover:shadow-2xl  dark:border-gray-700 dark:bg-slate-900 md:p-10"
            )}
          >
            <h3 className="text-xl font-bold text-gray-800 dark:text-gray-200">
              {price.name}
            </h3>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {price.target}
            </div>
            {/* <span className="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl bg-gray-800 py-1.5 px-3 text-xs font-medium text-white dark:bg-gray-900">
        
       </span> */}
            <span
              className={classNames(
                `${price.name.toString().toLowerCase()}` === "season"
                  ? "absolute top-0 right-0 rounded-tr-xl rounded-bl-xl bg-gray-800 py-1.5 px-3 text-xs font-medium text-white dark:bg-blue-500/10"
                  : "hidden"
              )}
            >
              {" "}
              Most popular
            </span>

            <div className="mt-5">
              <span className="text-5xl font-bold text-gray-800 dark:text-gray-200">
                ${price.price}
              </span>
              <span className="text-lg font-bold text-gray-800 dark:text-gray-200">
                .00
              </span>
              <span className="ml-3 text-gray-500">USD / {price.duration}</span>
            </div>

            <div className="mt-5 grid gap-y-2 py-4 first:pt-0 last:pb-0 sm:grid-cols-1 sm:gap-x-6 sm:gap-y-0">
              {/* <!-- List --> */}
              <ul role="list" className="space-y-2 text-sm sm:text-base">
                {price.benefits.map((benefit, i) => (
                  <li key={i} className="flex space-x-3">
                    <svg
                      className="h-5 w-5 flex-shrink-0 text-blue-500"
                      width="18"
                      height="18"
                      viewBox="0 0 18 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="18"
                        height="18"
                        rx="9"
                        fill="currentColor"
                        fillOpacity="0.1"
                      />
                      <path
                        d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="text-gray-800 dark:text-gray-200">
                      {benefit}
                    </span>
                  </li>
                ))}
              </ul>
              {/* <!-- End List --> */}
            </div>

            <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  Cancel anytime.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-200">
                  No card required.
                </p>
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  className={classNames(
                    `${price.name.toString().toLowerCase()}` === "season"
                      ? "bg-primary/80 hover:bg-primary/95 focus:ring-primary/50"
                      : "bg-secondary/80 hover:bg-secondary/95 focus:ring-secondary/50",
                    "inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-sm font-semibold text-white transition-all  focus:outline-none focus:ring-2  focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  )}
                  //   className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="h-6 w-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>
                  Reserve a table
                </button>
              </div>
            </div>
          </div>
        ))}

        {/* <!-- End Card --> */}
      </div>
    </div>
  );
}
