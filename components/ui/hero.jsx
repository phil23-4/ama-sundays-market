import Image from "next/image";
import Link from "next/link";
import Partners from "./partners";

export default function Hero() {
  return (
    // <!-- Features -->
    <div className="mx-auto max-w-[85rem] px-4 py-10 sm:px-6 lg:px-4 lg:py-14">
      {/* <!-- Grid --> */}
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-6 xl:gap-24">
        <div className="w-full p-8">
          <div className="mb-6 inline-block rounded-full bg-secondary/[.16] px-2 py-1 font-semibold">
            <div className="-m-1 flex flex-wrap">
              <div className="w-auto p-3">
                <Link className="text-sm" href="">
                  &#x1F44B; Coming this March
                </Link>
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
                <Link href="/register">
                  <p href="/register">
                    <button
                      className=" w-full rounded-xl border border-secondary bg-secondary py-4 px-9 font-semibold text-white transition duration-200 ease-in-out hover:border-primary hover:bg-primary/90 hover:text-white/95 focus:ring focus:ring-secondary/50"
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
                              d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                            />
                          </svg>
                        </div>
                        <div className="w-auto p-1">
                          <span>Register Now</span>
                        </div>
                      </div>
                    </button>
                  </p>
                </Link>
              </div>
            </div>
            <div className="w-full p-2.5 md:w-auto">
              <div className="block">
                <Link href="/contact">
                  <>
                    <button
                      className="w-full rounded-xl border bg-white/0 py-4 px-9 font-semibold text-slate-900 ring-1 ring-primary/[.16] transition duration-200 ease-in-out hover:bg-white/25 hover:ring-primary/[.16] dark:text-white/90 "
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
                          <span>Contact Us</span>
                        </div>
                      </div>
                    </button>
                  </>
                </Link>
              </div>
            </div>
          </div>
          <p className="text-lg font-semibold text-gray-800 dark:text-white/80">
            Partners:
          </p>
          {/* Partner logos */}
          <Partners />
        </div>
        {/* <!-- End Col --> */}
        <div className="relative">
          {/* <!-- Card --> */}
          <div className="flex flex-col rounded-xl p-4 sm:p-6 lg:p-10">
            <div className="-aspect-h-2 aspect-w-12 relative rounded-2xl shadow-xl shadow-secondary/[.16] md:h-full md:w-full">
              <Image
                className="rounded-xl py-8 "
                src="/assets/images/ama2.jpg"
                height={905}
                width={900}
                quality={80}
                loading={"lazy"}
                objectFit="fill"
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
