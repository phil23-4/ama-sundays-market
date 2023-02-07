import Image from "next/image";
import Partners from "./partners";

export default function Hero() {
  return (
    <div className="h-full w-full bg-white px-4 dark:bg-slate-900 lg:mb-24 lg:px-4">
      {" "}
      <div className="overflow-hidden pt-12">
        <div className="container relative mx-auto px-4">
          <div className="-m-8 flex flex-wrap">
            <div className="w-full p-8 md:w-1/2">
              <div className="mb-6 inline-block rounded-full bg-secondary/[.16] px-2 py-1 font-semibold">
                <div className="-m-1 flex flex-wrap">
                  <div className="w-auto p-3">
                    <a className="text-sm" href="">
                      &#x1F44B; Coming this March
                    </a>
                  </div>
                </div>
              </div>
              <h1 className="font-heading mb-8 bg-gradient-to-r from-primary/95 to-secondary/90 bg-clip-text text-2xl font-bold leading-none tracking-tight text-transparent md:max-w-xl md:text-base lg:text-6xl">
                AMA Sunday Farmers Market
              </h1>
              <p className="mb-11 text-base font-medium dark:text-white/[.85] md:max-w-md">
                Decentralizing Farmers Markets for sustainable agricultural
                development that leaves no one and no place behind
              </p>
              <div className="-m-2.5 mb-20 flex flex-wrap">
                <div className="w-full p-2.5 md:w-auto">
                  <div className="block">
                    <button
                      className=" w-full rounded-xl border border-secondary bg-secondary py-4 px-9 font-semibold text-white transition duration-200 ease-in-out hover:border-primary hover:bg-primary/90 hover:text-white/95 focus:ring focus:ring-secondary/50"
                      type="button"
                    >
                      <div className="-m-1 flex flex-wrap">
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
                        <div className="w-auto p-1">
                          <span>Register Now</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
                <div className="w-full p-2.5 md:w-auto">
                  <div className="block">
                    <button
                      className="w-full rounded-xl border bg-white/0 py-4 px-9 font-semibold text-slate-900 ring-1 ring-primary/[.16] transition duration-200 ease-in-out hover:bg-white/25 hover:ring-primary/[.16] "
                      type="button"
                    >
                      <div className="-m-1 flex flex-wrap items-center justify-center">
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
                              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                            />
                          </svg>
                        </div>
                        <div className="w-auto p-1">
                          <span>Book a call</span>
                        </div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <p className="text-lg font-semibold text-gray-800 dark:text-white/80">
                Partners:
              </p>
              {/* Partner logos */}
              <Partners />
            </div>

            <div className="aspect-w-12 aspect-h-2 relative  mb-8  md:w-1/2">
              <Image
                className="m-20 transform rounded-full transition duration-1000 ease-in-out hover:-translate-y-4"
                src="/assets/images/service2.jpg"
                layout="fill"
                quality={85}
                // objectFit="contain"
                alt="AMA Sunday Farmers Market"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
