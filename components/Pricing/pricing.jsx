import Link from "next/link";

const priceList = [
  {
    name: "Daily",
    target: "Lorem ipsum",
    price: 50,
    duration: "Sunday",
    benefits: ["1 Sunday", "ipsum", "delores"],
  },
  {
    name: "Season",
    target: "Lorem ipsum",
    price: 120,
    duration: "season",
    benefits: ["12 Sundays", "ipsum", "delores"],
  },
  {
    name: "Monthly",
    target: "Lorem ipsum",
    price: 80,
    duration: "month",
    benefits: ["4 Sundays", "ipsum", "delores"],
  },
];

export default function PricingCard() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    // <!-- Features -->
    <div className="mx-auto max-w-[95rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* <!-- Title --> */}

      <div className="load-animation reveal mx-auto mb-20 max-w-xl text-center">
        <h2
          className="font-heading mx-auto mb-4 max-w-xl text-5xl font-bold leading-tight dark:text-white md:text-5xl"
          data-config-id="auto-txt-1-2"
        >
          Choose your right plan
        </h2>
        <p
          className="mx-auto max-w-2xl text-center leading-loose text-secondary md:text-lg"
          data-config-id="auto-txt-2-2"
        >
          Pricing that scales with your business immediately.
        </p>
      </div>

      {/* <!-- End Title --> */}

      <div className="relative xl:mx-auto xl:w-11/12">
        {/* <!-- Grid --> */}
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:gap-4">
          {/* <!-- Card --> */}
          {priceList.map((price, i) => (
            <div
              key={i}
              className={classNames(
                `${price.name.toString().toLowerCase()}` === "season"
                  ? "shadow-lg shadow-primary/[.26] hover:shadow-primary/20 dark:shadow-primary/[.16] "
                  : "shadow-none hover:shadow-secondary/30",
                "relative z-10 rounded-xl border bg-white p-5 hover:-translate-y-2  hover:shadow-2xl  dark:border-gray-700 dark:bg-slate-900 md:p-10"
              )}
            >
              <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                {price.name}
              </h3>
              <div className="text-sm text-gray-500 dark:text-white">
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
                <span className="text-3xl font-bold text-gray-800 dark:text-white lg:text-5xl">
                  ${price.price}
                </span>
                <span className="text-lg font-bold text-gray-800 dark:text-white">
                  .00
                </span>
                <span className="ml-3 text-gray-500 dark:text-white/90">
                  USD / {price.duration}
                </span>
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
                      <span className="text-gray-800 dark:text-white">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                {/* <!-- End List --> */}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm text-gray-500 dark:text-white">
                    Cancel anytime.
                  </p>
                  <p className="text-sm text-gray-500 dark:text-white">
                    No card required.
                  </p>
                </div>

                <div className="flex justify-end">
                  <Link href={"/register"}>
                    <button
                      type="button"
                      className={classNames(
                        `${price.name.toString().toLowerCase()}` === "season"
                          ? "bg-primary/80 hover:bg-primary/95 focus:ring-primary/50"
                          : "bg-secondary/80 hover:bg-secondary/95 focus:ring-secondary/50",
                        "inline-flex items-center justify-center gap-2 rounded-md border border-transparent py-3 px-4 text-xs font-semibold text-white transition-all focus:outline-none  focus:ring-2 focus:ring-offset-2  dark:focus:ring-offset-gray-800 lg:text-sm"
                      )}
                      //   className="inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-blue-500 py-3 px-4 text-sm font-semibold text-white transition-all hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6 lg:h-8 lg:w-8"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                        />
                      </svg>
                      Get package
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}

          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Grid --> */}

        {/* <!-- SVG Element --> */}
        <div className="absolute top-0 right-0 hidden translate-y-16 translate-x-16 md:block">
          <svg
            className="h-auto w-16 text-primary"
            width="121"
            height="135"
            viewBox="0 0 121 135"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
            />
            <path
              d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874"
              stroke="currentColor"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* <!-- End SVG Element --> */}

        {/* <!-- SVG Element --> */}
        <div className="absolute bottom-0 left-0 hidden translate-y-16 -translate-x-16 md:block">
          <svg
            className="h-auto w-56 text-secondary"
            width="347"
            height="188"
            viewBox="0 0 347 188"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426"
              stroke="currentColor"
              strokeWidth="7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        {/* <!-- End SVG Element --> */}
      </div>

      <div className="mt-7 text-center">
        <p className="text-xs text-gray-400">Prices in USD. Taxes may apply.</p>
      </div>
    </div>
    // <!-- End Features -->
  );
}
