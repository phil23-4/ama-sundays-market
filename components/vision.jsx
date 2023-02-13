import Image from "next/image";

export default function Vision() {
  return (
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
      {/* <!-- Grid --> */}
      <div className="grid items-center gap-12 md:grid-cols-2">
        <div>
          <h1 className="font-display inline text-3xl font-bold text-gray-800 dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight">
            Our Vision
          </h1>
          <p className="mt-1 text-gray-800 dark:text-white md:text-lg">
            The aim of the market is to decentralize fresh produce markets
            bringing them to areas and or consumers that may not have the
            appetite, skillset and or zeal to deal with the hustle and bustle of
            conventional markets, this also brings more value to the farmer who
            can then fairly price their produce.
          </p>

          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              What we aim for
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
                  Providing clean and secure local marketplace to retail
                  products
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
                  Giving farmers direct interaction with the consumer{" "}
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
        </div>
        {/* <!-- End Col --> */}

        <div className="relative">
          {/* <!-- Card --> */}
          <div className="flex flex-col rounded-xl p-4 sm:p-6 lg:p-10">
            <div className="aspect-w-8 aspect-h-5 relative mt-6 rounded-xl shadow-xl shadow-secondary/[.16] md:w-full">
              <Image
                className="rounded-xl py-8 "
                src="/assets/images/ama3.jpg"
                layout="fill"
                quality={85}
                // objectFit="contain"
                alt="AMA Sunday Farmers Market"
              />
            </div>
          </div>
          {/* <!-- End Card --> */}
        </div>
        {/* <!-- End Col --> */}
      </div>
      {/* <!-- End Grid --> */}
    </div>
  );
}
